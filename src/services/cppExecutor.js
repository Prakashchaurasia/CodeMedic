import { createEmception, compileAndRun, TOOLCHAIN_PRESETS } from "@gameguild/emception-browser";
import { ToolchainPreset } from "emception";
import { generateCppHarness, parseHarnessOutput } from "./executionHarness";

let emceptionInstance = null;
let emceptionInitPromise = null;
let isExecuting = false;
let isWarm = false;
let warmupPromise = null;
let runtimeStatus = "idle"; // "idle" | "warming" | "ready"
const statusListeners = new Set();

/**
 * Returns the current readiness status of the C++ execution environment.
 */
export function getRuntimeStatus() {
    return runtimeStatus;
}

/**
 * Subscribes to runtime status changes. Callback is invoked immediately with current status.
 */
export function subscribeRuntimeStatus(cb) {
    statusListeners.add(cb);
    try {
        cb(runtimeStatus);
    } catch (e) {
        console.warn("Error in initial runtime status callback:", e);
    }
    return () => statusListeners.delete(cb);
}

function setStatus(status) {
    runtimeStatus = status;
    statusListeners.forEach((cb) => {
        try {
            cb(status);
        } catch (e) {
            console.warn("Error in runtimeStatus listener:", e);
        }
    });
}

/**
 * Cleanly terminates the current Web Worker instance and resets the singleton.
 * Safe to call at any time (e.g. on student TLE, worker error, or component unmount).
 */
export function terminateAndResetEmception() {
    if (emceptionInstance) {
        try {
            emceptionInstance.dispose();
        } catch (e) {
            console.warn("Error disposing Emception instance:", e);
        }
        emceptionInstance = null;
    }
    emceptionInitPromise = null;
    isExecuting = false;
    isWarm = false;
    setStatus("idle");
    console.log("Emception runtime terminated and reset.");
}

/**
 * Returns a running Emception instance or initializes a new one.
 * Cold load downloads from local /cdn/manifest.json.
 * Warm runs reuse the healthy alive singleton worker.
 */
export async function getEmception() {
    if (emceptionInstance) {
        return emceptionInstance;
    }

    if (emceptionInitPromise) {
        return emceptionInitPromise;
    }

    emceptionInitPromise = (async () => {
        let bootTimer = null;
        try {
            setStatus("warming");
            console.log("Starting Emception browser runtime...");
            const bootPromise = createEmception({
                tty: "none",
                manifestUrl: "/cdn/manifest.json",
                onStdout: (text) => {
                    console.log("[C++ stdout]", text);
                },
                onStderr: (text) => {
                    console.error("[C++ stderr]", text);
                },
            });

            // 45s safety guard for cold download of initial bundles
            const timeoutPromise = new Promise((_, reject) => {
                bootTimer = setTimeout(() => {
                    reject(new Error("Compiler runtime initialization timed out."));
                }, 45000);
            });

            const instance = await Promise.race([bootPromise, timeoutPromise]);
            if (bootTimer) clearTimeout(bootTimer);

            console.log("Emception browser runtime started successfully.");
            emceptionInstance = instance;
            return instance;
        } catch (err) {
            if (bootTimer) clearTimeout(bootTimer);
            console.error("Failed to start Emception browser runtime:", err);
            terminateAndResetEmception();
            throw err;
        }
    })();

    return emceptionInitPromise;
}

/**
 * Warms up the C++ execution environment in the background by compiling a minimal DSA program.
 * This pre-downloads and extracts Clang, WASM-LD, usr-include, and libc++ into IndexedDB,
 * ensuring subsequent student code runs take ~1 second instead of waiting for asset download.
 */
export async function preloadCppExecutor() {
    if (isWarm) return;
    if (warmupPromise) return warmupPromise;

    warmupPromise = (async () => {
        try {
            console.log("Preloading and warming C++ environment in background...");
            const em = await getEmception();

            const dummyPaths = {
                sourcePath: "warmup.cpp",
                objectPath: "warmup.o",
                wasmPath: "warmup.wasm",
            };

            // Pre-compile standard DSA headers so they are cached in IndexedDB
            await compileAndRun(em, {
                toolchain: ToolchainPreset.CPP,
                source: `#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <chrono>\nint main(){ std::vector<int> v = {1, 2}; return v.empty() ? 1 : 0; }`,
                cwd: "/home/user/default",
                paths: dummyPaths,
            });

            isWarm = true;
            setStatus("ready");
            console.log("C++ execution environment is warmed and ready!");
        } catch (err) {
            console.warn("Background warmup note:", err);
            setStatus(emceptionInstance ? "ready" : "idle");
        } finally {
            warmupPromise = null;
        }
    })();

    return warmupPromise;
}

/**
 * Runs C++ code using Emception WASM in a Web Worker.
 * 
 * Performance & Timing Architecture:
 * - Infrastructure initialization, WASM loading, compilation, and linking do NOT consume student time.
 * - The student execution watchdog timer (EXACTLY 5,000 ms) starts ONLY when the student's compiled
 *   binary enters the 'run' (wasi-run) phase.
 * - Healthy workers are kept warm and reused across runs.
 * - If student code loops infinitely and exceeds 5000 ms, the worker is terminated and reset cleanly.
 */
export async function runCppCode(code, stdin = "") {
    // If background warmup is actively compiling/caching, cleanly await it so we don't collide
    if (warmupPromise) {
        try {
            await warmupPromise;
        } catch (_) {
            // Warmup failure logged in preloadCppExecutor; proceed to run
        }
    }

    if (isExecuting) {
        return {
            success: false,
            exitCode: -1,
            stdout: "",
            stderr: "Execution system busy. Please wait for the current run to finish.",
            durationMs: 0,
            timedOut: false,
            browserUnavailable: false,
            isInfrastructureError: true,
        };
    }

    isExecuting = true;
    const paths = {
        sourcePath: "solution.cpp",
        objectPath: "solution.o",
        wasmPath: "solution.wasm",
    };

    let em = null;
    try {
        em = await getEmception();
    } catch (bootErr) {
        isExecuting = false;
        return {
            success: false,
            exitCode: -1,
            stdout: "",
            stderr: bootErr?.message || "Browser execution unavailable",
            durationMs: 0,
            timedOut: false,
            browserUnavailable: true,
            isInfrastructureError: true,
        };
    }

    let stdoutBuf = "";
    let stderrBuf = "";
    let studentWatchdog = null;
    let isStudentTle = false;
    let currentPhase = "init";

    try {
        console.log(`Compiling and running C++ (${paths.sourcePath})...`);

        // Execute the compile -> link -> run pipeline
        const pipelineResult = await compileAndRun(em, {
            toolchain: ToolchainPreset.CPP,
            source: code,
            cwd: "/home/user/default",
            stdin: stdin || undefined,
            paths,
            onStdout: (text) => {
                stdoutBuf += text;
            },
            onStderr: (text) => {
                stderrBuf += text;
            },
            onPhase: (phase) => {
                currentPhase = phase;
                console.log(`[CodeMedic Execution Phase: ${phase}]`);

                // *** START EXACT 5-SECOND (5000ms) STUDENT EXECUTION TIMER ***
                // Only starts when the compiled binary actually begins executing in wasi-run!
                if (phase === "run") {
                    studentWatchdog = setTimeout(() => {
                        isStudentTle = true;
                        console.warn("Student code execution exceeded 5000ms limit! Terminating worker.");
                        terminateAndResetEmception();
                    }, 5000);
                }
            },
        });

        if (studentWatchdog) clearTimeout(studentWatchdog);
        isExecuting = false;

        // Check if student execution timed out
        if (isStudentTle) {
            return {
                success: false,
                exitCode: -1,
                stdout: "",
                stderr: "Time Limit Exceeded: Execution exceeded 5000ms.",
                durationMs: 5000,
                timedOut: true,
                phase: "run",
                browserUnavailable: false,
                isInfrastructureError: false,
            };
        }

        // Student execution completed normally (keep healthy worker alive!)
        if (pipelineResult.finalPhase === "run" && pipelineResult.run) {
            const r = pipelineResult.run;
            return {
                success: r.exitCode === 0,
                exitCode: r.exitCode,
                stdout: stdoutBuf || r.stdout || "",
                stderr: stderrBuf || r.stderr || "",
                durationMs: r.durationMs || 0,
                timedOut: false,
                phase: "run",
                isInfrastructureError: false,
            };
        }

        // Compilation or linking failure
        const failed = pipelineResult.compile ?? pipelineResult.link ?? pipelineResult.run;
        return {
            success: false,
            exitCode: pipelineResult.exitCode ?? -1,
            stdout: stdoutBuf || failed?.stdout || "",
            stderr: stderrBuf || failed?.stderr || "",
            durationMs: failed?.durationMs ?? 0,
            timedOut: false,
            phase: pipelineResult.finalPhase || "compile",
            isInfrastructureError: false,
        };

    } catch (error) {
        if (studentWatchdog) clearTimeout(studentWatchdog);
        isExecuting = false;

        if (isStudentTle) {
            return {
                success: false,
                exitCode: -1,
                stdout: "",
                stderr: "Time Limit Exceeded: Execution exceeded 5000ms.",
                durationMs: 5000,
                timedOut: true,
                phase: "run",
                browserUnavailable: false,
                isInfrastructureError: false,
            };
        }

        console.error("C++ execution unexpected error:", error);
        terminateAndResetEmception();

        return {
            success: false,
            exitCode: -1,
            stdout: "",
            stderr: error?.message || "Browser execution unavailable",
            durationMs: 0,
            timedOut: false,
            browserUnavailable: true,
            isInfrastructureError: true,
        };
    }
}

/**
 * Strips ANSI escape codes from compiler and terminal outputs.
 */
function stripAnsi(str) {
    if (!str) return "";
    return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
}

/**
 * Strips internal harness preamble line counts and paths to make compiler errors readable for students.
 */
function cleanCompilerErrors(stderr, harnessCode) {
    if (!stderr) return "";
    
    const plainStderr = stripAnsi(stderr);

    // Find where the student code starts in the harness
    const startMarker = "// STUDENT CODE STARTS HERE";
    const endMarker = "// STUDENT CODE ENDS HERE";
    const lines = harnessCode.split("\n");
    let studentStartLine = 0;
    let studentEndLine = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(startMarker)) {
            studentStartLine = i + 2; // Line 1 of student code
        }
        if (lines[i].includes(endMarker)) {
            studentEndLine = i;
            break;
        }
    }

    const errorLines = plainStderr.split("\n");
    const cleaned = [];

    for (const line of errorLines) {
        // Match standard clang error format: <file>:<line>:<col>: error: <message>
        const match = line.match(/:(\d+):(\d+):\s*(error|warning|fatal error):\s*(.*)/i);
        if (match) {
            const rawLine = parseInt(match[1], 10);
            const col = match[2];
            const severity = match[3];
            const msg = match[4];
            
            if (rawLine >= studentStartLine && (!studentEndLine || rawLine <= studentEndLine)) {
                const adjustedLine = Math.max(1, rawLine - studentStartLine + 1);
                cleaned.push(`Line ${adjustedLine}:${col}: [${severity}] ${msg}`);
            } else {
                cleaned.push(`[${severity}] ${msg}`);
            }
        } else if (line.includes("error:") || line.includes("note:")) {
            cleaned.push(line.replace(/\/home\/[^\s:]+:/g, "").trim());
        }
    }

    return cleaned.length > 0 ? cleaned.slice(0, 8).join("\n") : plainStderr.slice(0, 500);
}

/**
 * Complete Function-based Execution Pipeline.
 * Compiles the student's solution against problem test cases,
 * evaluates output, and returns a structured result.
 */
export async function executeStudentSolution(studentCode, problem, testCases = []) {
    try {
        const harnessCode = generateCppHarness(studentCode, problem, testCases);
        
        console.log("Generated C++ Harness. Running in browser WASM...");
        const rawResult = await runCppCode(harnessCode);

        // 1. Check if browser WASM runtime is unavailable or failed at infrastructure level
        if (rawResult.browserUnavailable || rawResult.isInfrastructureError) {
            return {
                success: false,
                status: "Execution Error",
                message: rawResult.stderr?.includes("busy")
                    ? "Execution system is currently busy. Please wait a moment and try again."
                    : "Execution Infrastructure Error: The browser compiler runtime encountered an issue and was safely reset. Your code was not penalized. Please try running again.",
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: rawResult.durationMs || 0,
                rawResult
            };
        }

        // 2. Check timeout (Student Time Limit Exceeded during 'run' phase: 5000ms limit)
        if (rawResult.timedOut) {
            return {
                success: false,
                status: "Time Limit Exceeded",
                message: `Time Limit Exceeded: Execution exceeded 5000ms. Check for infinite loops or inefficient algorithms.`,
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: rawResult.durationMs || 5000,
                rawResult
            };
        }

        // 3. Check failure before running (Compilation / Link Error vs Execution System Error)
        if (rawResult.exitCode !== 0 && !rawResult.stdout.includes("__CODEMEDIC_OUTPUT_START__")) {
            const stderrPlain = stripAnsi(rawResult.stderr || "");
            const isCompilerDiagnostic = stderrPlain.includes("error:") || 
                                         stderrPlain.includes("fatal error:") ||
                                         stderrPlain.includes("undefined reference");

            if (isCompilerDiagnostic) {
                const cleanedError = cleanCompilerErrors(rawResult.stderr, harnessCode);
                return {
                    success: false,
                    status: "Compilation Error",
                    message: cleanedError || stderrPlain || "Compilation failed.",
                    testCases: [],
                    passedTests: 0,
                    totalTests: 0,
                    compilationError: cleanedError || stderrPlain,
                    executionTimeMs: rawResult.durationMs,
                    rawResult
                };
            }

            // Infrastructure/System Error occurred during compiler run
            return {
                success: false,
                status: "Execution Error",
                message: stderrPlain ? `Execution System Error: ${stderrPlain}` : "Execution System Error: The compiler environment failed to initialize.",
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: rawResult.durationMs,
                rawResult
            };
        }

        // 4. Check crash during execution after main() started
        if (rawResult.exitCode !== 0 && !rawResult.stdout.includes("__CODEMEDIC_OUTPUT_END__")) {
            const stderrText = stripAnsi(rawResult.stderr || "");
            if (stderrText.toLowerCase().includes("bad_alloc") || stderrText.toLowerCase().includes("out of memory")) {
                return {
                    success: false,
                    status: "Memory Limit Exceeded",
                    message: "Memory Limit Exceeded: Out of memory during execution.",
                    testCases: [],
                    passedTests: 0,
                    totalTests: 0,
                    compilationError: null,
                    executionTimeMs: rawResult.durationMs,
                    rawResult
                };
            }

            return {
                success: false,
                status: "Runtime Error",
                message: stderrText || "Runtime Error: Program crashed or terminated unexpectedly during execution.",
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: rawResult.durationMs,
                rawResult
            };
        }

        // 5. Parse structured test results
        const testCaseResults = parseHarnessOutput(rawResult.stdout);

        if (testCaseResults.length === 0) {
            // Check if problem genuinely had 0 test cases
            if (rawResult.exitCode === 0 && rawResult.stdout.includes("__CODEMEDIC_OUTPUT_START__")) {
                return {
                    success: true,
                    status: "Accepted",
                    message: "Accepted: Code compiled and executed successfully.",
                    testCases: [],
                    passedTests: 0,
                    totalTests: 0,
                    compilationError: null,
                    executionTimeMs: rawResult.durationMs,
                    rawResult
                };
            }

            // Otherwise, infrastructure was unable to read output
            return {
                success: false,
                status: "Execution Error",
                message: "Execution system error: Unable to read test execution results.",
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: rawResult.durationMs,
                rawResult
            };
        }

        // Check if any individual test case threw a memory or runtime exception
        const memError = testCaseResults.find(tc => tc.errorType === "Memory Limit Exceeded");
        if (memError) {
            return {
                success: false,
                status: "Memory Limit Exceeded",
                message: memError.actual || "Memory Limit Exceeded: std::bad_alloc",
                testCases: testCaseResults,
                passedTests: testCaseResults.filter(tc => tc.passed).length,
                totalTests: testCaseResults.length,
                compilationError: null,
                executionTimeMs: rawResult.durationMs,
                rawResult
            };
        }

        const rtError = testCaseResults.find(tc => tc.errorType === "Runtime Error");
        if (rtError) {
            return {
                success: false,
                status: "Runtime Error",
                message: rtError.actual || "Runtime Error: Exception caught during execution.",
                testCases: testCaseResults,
                passedTests: testCaseResults.filter(tc => tc.passed).length,
                totalTests: testCaseResults.length,
                compilationError: null,
                executionTimeMs: rawResult.durationMs,
                rawResult
            };
        }

        const passedTests = testCaseResults.filter(tc => tc.passed).length;
        const totalTests = testCaseResults.length;
        const allPassed = passedTests === totalTests && totalTests > 0;

        return {
            success: allPassed,
            status: allPassed ? "Accepted" : "Wrong Answer",
            message: allPassed 
                ? `Accepted (${passedTests}/${totalTests} test cases passed)` 
                : `Wrong Answer (${passedTests}/${totalTests} test cases passed)`,
            testCases: testCaseResults,
            passedTests,
            totalTests,
            compilationError: null,
            executionTimeMs: rawResult.durationMs,
            rawResult
        };

    } catch (err) {
        console.error("Execution failed:", err);
        terminateAndResetEmception();
        return {
            success: false,
            status: "Execution Error",
            message: err?.message || "An unexpected error occurred during execution.",
            testCases: [],
            passedTests: 0,
            totalTests: 0,
            compilationError: null,
            executionTimeMs: 0,
            rawResult: null
        };
    }
}

export function disposeCppExecutor() {
    terminateAndResetEmception();
}