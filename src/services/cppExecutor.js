import { createEmception } from "@gameguild/emception-browser";
import { generateCppHarness, parseHarnessOutput } from "./executionHarness";

let emceptionPromise = null;

export async function getEmception() {
    if (emceptionPromise) {
        return emceptionPromise;
    }

    emceptionPromise = (async () => {
        try {
            console.log("Starting Emception browser runtime...");
            const instance = await createEmception({
                tty: "none",
                manifestUrl: "/cdn/manifest.json",
                onStdout: (text) => {
                    console.log("[C++ stdout]", text);
                },
                onStderr: (text) => {
                    console.error("[C++ stderr]", text);
                },
            });
            console.log("Emception browser runtime started.");
            return instance;
        } catch (err) {
            console.error("Failed to start Emception browser runtime:", err);
            emceptionPromise = null; // Allow retry on failure
            throw err;
        }
    })();

    return emceptionPromise;
}

export async function runCppCode(code, stdin = "") {
    const runId = Math.random().toString(36).substring(2, 9);
    const paths = {
        sourcePath: `main_${runId}.cpp`,
        objectPath: `main_${runId}.o`,
        wasmPath: `main_${runId}.wasm`,
    };

    const executionPromise = (async () => {
        try {
            const em = await getEmception();

            console.log(`Compiling and running C++ (${paths.sourcePath})...`);

            const result = await em.compileAndRun(code, {
                cwd: "/home/user/default",
                stdin,
                paths,
                stdout: "capture",
                stderr: "capture",
            });

            console.log("C++ execution completed:", result);

            return {
                success: result.exitCode === 0,
                exitCode: result.exitCode,
                stdout: result.stdout || "",
                stderr: result.stderr || "",
                durationMs: result.durationMs || 0,
                timedOut: result.timedOut || false,
                signal: result.signal,
            };
        } catch (error) {
            console.error("C++ execution error:", error);

            return {
                success: false,
                exitCode: -1,
                stdout: "",
                stderr: error?.message || "Browser execution unavailable",
                durationMs: 0,
                timedOut: false,
                browserUnavailable: true,
            };
        }
    })();

    // 90-second hard timeout guarantee (allows cold initial bundle download; warm runs take ~1-2s)
    const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: false,
                exitCode: -1,
                stdout: "",
                stderr: "Time Limit Exceeded: Execution exceeded time limit.",
                durationMs: 90000,
                timedOut: true,
                browserUnavailable: false,
            });
        }, 90000);
    });

    return Promise.race([executionPromise, timeoutPromise]);
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

        // 1. Check if browser WASM runtime is unavailable (Execution/Infrastructure Error)
        if (rawResult.browserUnavailable) {
            return {
                success: false,
                status: "Execution Error",
                message: "WebAssembly C++ compiler could not be initialized in this browser session. You can still submit your code for AI diagnosis.",
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: 0,
                rawResult
            };
        }

        // 2. Check timeout (Time Limit Exceeded)
        if (rawResult.timedOut) {
            return {
                success: false,
                status: "Time Limit Exceeded",
                message: "Time Limit Exceeded: Execution timed out. Check for infinite loops or inefficient algorithms.",
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: rawResult.durationMs,
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
    if (emceptionPromise) {
        emceptionPromise.then((instance) => instance?.dispose()).catch(() => {});
        emceptionPromise = null;
        console.log("Emception runtime disposed.");
    }
}

export function preloadCppExecutor() {
    getEmception().catch(err => console.warn("Background compiler preload note:", err));
}