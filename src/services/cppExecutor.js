import { createEmception } from "@gameguild/emception-browser";
import { generateCppHarness, parseHarnessOutput } from "./executionHarness";

let emceptionInstance = null;
let emceptionInitPromise = null;
let isExecuting = false;

/**
 * Cleanly terminates the current Web Worker instance and resets the singleton.
 * Safe to call at any time (e.g. on timeout, unhandled worker error, or component unmount).
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
    console.log("Emception runtime terminated and reset.");
}

/**
 * Returns a running Emception instance or initializes a new one.
 * Cold load downloads from local /cdn/manifest.json (with a 30s timeout guard).
 * Warm runs reuse the alive singleton worker.
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

            const timeoutPromise = new Promise((_, reject) => {
                bootTimer = setTimeout(() => {
                    reject(new Error("Compiler runtime initialization timed out after 30 seconds."));
                }, 30000);
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
 * Runs C++ code using Emception WASM in a Web Worker.
 * Enforces two separate timeout phases:
 * 1. Compilation/Link Phase: 20000ms (Classified as Execution Error if timed out)
 * 2. Execution (wasi-run) Phase: 4000ms (Classified as Student Time Limit Exceeded if timed out)
 * On any timeout or unrecoverable error, the worker is immediately terminated and reset.
 */
export async function runCppCode(code, stdin = "") {
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
    const runId = Math.random().toString(36).substring(2, 9);
    const paths = {
        sourcePath: `main_${runId}.cpp`,
        objectPath: `main_${runId}.o`,
        wasmPath: `main_${runId}.wasm`,
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

    let currentPhase = "init";
    let isTimedOut = false;
    let timedOutPhase = null;
    let phaseTimer = null;

    const executePromise = (async () => {
        try {
            console.log(`Compiling and running C++ (${paths.sourcePath})...`);
            currentPhase = "write";

            // Set 20-second compile/link timeout guard
            phaseTimer = setTimeout(() => {
                isTimedOut = true;
                timedOutPhase = currentPhase;
                console.warn(`Compilation/linking timed out during phase: ${currentPhase}. Disposing worker.`);
                terminateAndResetEmception();
            }, 20000);

            const result = await em.compileAndRun(code, {
                cwd: "/home/user/default",
                stdin,
                paths,
                stdout: "capture",
                stderr: "capture",
                onPhase: (phase) => {
                    currentPhase = phase;
                    console.log(`[Emception phase: ${phase}]`);
                    if (phase === "run") {
                        // Switch from compile timeout to student code execution timeout: 4000ms
                        if (phaseTimer) clearTimeout(phaseTimer);
                        phaseTimer = setTimeout(() => {
                            isTimedOut = true;
                            timedOutPhase = "run";
                            console.warn("Student code execution timed out (4000ms limit). Disposing worker.");
                            terminateAndResetEmception();
                        }, 4000);
                    }
                },
            });

            if (phaseTimer) clearTimeout(phaseTimer);
            isExecuting = false;

            if (isTimedOut) {
                return {
                    success: false,
                    exitCode: -1,
                    stdout: "",
                    stderr: timedOutPhase === "run"
                        ? "Time Limit Exceeded: Execution exceeded 4000ms."
                        : "Compiler Timeout: Compilation took too long to complete.",
                    durationMs: timedOutPhase === "run" ? 4000 : 20000,
                    timedOut: timedOutPhase === "run",
                    phase: timedOutPhase,
                    browserUnavailable: false,
                    isInfrastructureError: timedOutPhase !== "run",
                };
            }

            console.log("C++ execution completed:", result);

            return {
                success: result.exitCode === 0,
                exitCode: result.exitCode,
                stdout: result.stdout || "",
                stderr: result.stderr || "",
                durationMs: result.durationMs || 0,
                timedOut: result.timedOut || false,
                signal: result.signal,
                phase: currentPhase,
                isInfrastructureError: false,
            };
        } catch (error) {
            if (phaseTimer) clearTimeout(phaseTimer);
            isExecuting = false;

            if (isTimedOut) {
                return {
                    success: false,
                    exitCode: -1,
                    stdout: "",
                    stderr: timedOutPhase === "run"
                        ? "Time Limit Exceeded: Execution exceeded 4000ms."
                        : "Compiler Timeout: Compilation took too long to complete.",
                    durationMs: timedOutPhase === "run" ? 4000 : 20000,
                    timedOut: timedOutPhase === "run",
                    phase: timedOutPhase,
                    browserUnavailable: false,
                    isInfrastructureError: timedOutPhase !== "run",
                };
            }

            console.error("C++ execution error:", error);
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
    })();

    // Safety watchdog: polls every 50ms in case worker termination aborted the promise
    const watchdogPromise = new Promise((resolve) => {
        const interval = setInterval(() => {
            if (isTimedOut) {
                clearInterval(interval);
                resolve({
                    success: false,
                    exitCode: -1,
                    stdout: "",
                    stderr: timedOutPhase === "run"
                        ? "Time Limit Exceeded: Execution exceeded 4000ms."
                        : "Execution System Error: Operation timed out.",
                    durationMs: timedOutPhase === "run" ? 4000 : 20000,
                    timedOut: timedOutPhase === "run",
                    phase: timedOutPhase,
                    browserUnavailable: false,
                    isInfrastructureError: timedOutPhase !== "run",
                });
            } else if (!isExecuting) {
                clearInterval(interval);
            }
        }, 50);
    });

    return Promise.race([executePromise, watchdogPromise]);
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

        // 2. Check timeout (Student Time Limit Exceeded during 'run' phase)
        if (rawResult.timedOut) {
            return {
                success: false,
                status: "Time Limit Exceeded",
                message: `Time Limit Exceeded: Execution exceeded ${rawResult.durationMs || 4000}ms. Check for infinite loops or inefficient algorithms.`,
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: rawResult.durationMs || 4000,
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

export function preloadCppExecutor() {
    getEmception().catch(err => console.warn("Background compiler preload note:", err));
}