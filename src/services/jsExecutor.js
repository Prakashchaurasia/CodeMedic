/**
 * JavaScript Execution Engine for CodeMedic
 * Executes student JavaScript solutions in an isolated Web Worker
 * with an exact 5000ms execution limit, test case evaluation, and structured results.
 */

import { inferExecutionConfig, parseNamedParamsFromExample, normalizeTestCaseInput, normalizeTestCaseOutput } from "./executionHarness.js";

/**
 * Maps C++ DSA types to standard JavaScript JSDoc types.
 */
export function mapTypeToJs(typeStr) {
    if (!typeStr) return "any";
    const t = typeStr.toLowerCase();
    if (t.includes("vector<vector<")) return "number[][]";
    if (t.includes("vector<string")) return "string[]";
    if (t.includes("vector<bool")) return "boolean[]";
    if (t.includes("vector<")) return "number[]";
    if (t.includes("string")) return "string";
    if (t.includes("bool")) return "boolean";
    if (t.includes("listnode")) return "ListNode";
    if (t.includes("treenode")) return "TreeNode";
    if (t.includes("int") || t.includes("long") || t.includes("double") || t.includes("float")) return "number";
    return "any";
}

/**
 * Generates initial boilerplate starter code for JavaScript.
 */
export function generateJsStarterCode(problem) {
    const config = inferExecutionConfig(problem);
    if (config.requiresRegeneration) {
        return `// This legacy generated problem does not contain a canonical function specification.
// Please regenerate this problem using the Practice Generator.
var solve = function() {
    // Function specification unavailable
};
`;
    }

    const params = config.parameters || [];
    const isMutated = config.outputMode === "MUTATED_PARAMETER" || config.returnType === "void";
    const mutatedName = (config.mutates && config.mutates[0]) || (params[0]?.name) || "parameter";

    const jsDocParams = params
        .map(p => ` * @param {${mapTypeToJs(p.type)}} ${p.name}`)
        .join("\n");
    const jsDocReturn = isMutated
        ? ` * @return {void} Do not return anything, modify ${mutatedName} in-place instead.`
        : ` * @return {${mapTypeToJs(config.returnType)}}`;
    const paramsList = params.map(p => p.name).join(", ");

    return `/**
${jsDocParams}
${jsDocReturn}
 */
var ${config.functionName} = function(${paramsList}) {
    // Write your solution here
    
};
`;
}

/**
 * Parse input string into argument values for JS execution.
 */
function parseJsInputArgs(inputStr, paramNames = []) {
    if (!inputStr) return [];
    
    // First try parsing as JSON array of args
    try {
        const parsed = JSON.parse(inputStr);
        if (Array.isArray(parsed) && !inputStr.trim().startsWith("[")) {
            return parsed;
        }
    } catch (_) {}

    // Check if input has named assignments: nums = [1,2,3], target = 4
    const namedMatches = [];
    const parts = [];
    let cur = "";
    let bracketDepth = 0;
    let inQuotes = false;

    for (let i = 0; i < inputStr.length; i++) {
        const c = inputStr[i];
        if (c === '"') inQuotes = !inQuotes;
        else if (!inQuotes) {
            if (c === '[' || c === '(' || c === '{') bracketDepth++;
            else if (c === ']' || c === ')' || c === '}') bracketDepth--;
            else if ((c === ',' || c === '\n') && bracketDepth === 0) {
                if (cur.trim()) parts.push(cur.trim());
                cur = "";
                continue;
            }
        }
        cur += c;
    }
    if (cur.trim()) parts.push(cur.trim());

    const values = [];
    for (const part of parts) {
        const eqIdx = part.indexOf('=');
        const valStr = eqIdx !== -1 ? part.slice(eqIdx + 1).trim() : part.trim();
        try {
            values.push(JSON.parse(valStr));
        } catch (_) {
            if (valStr === "true") values.push(true);
            else if (valStr === "false") values.push(false);
            else if (!isNaN(Number(valStr))) values.push(Number(valStr));
            else values.push(valStr.replace(/^"(.*)"$/, "$1"));
        }
    }

    return values;
}

/**
 * Compares actual and expected outputs for DSA problems.
 */
function compareOutputs(actual, expectedStr) {
    let expected;
    try {
        expected = JSON.parse(expectedStr);
    } catch (_) {
        const trimmed = (expectedStr || "").trim();
        if (trimmed === "true") expected = true;
        else if (trimmed === "false") expected = false;
        else if (!isNaN(Number(trimmed))) expected = Number(trimmed);
        else expected = trimmed.replace(/^"(.*)"$/, "$1");
    }

    // Direct match
    if (actual === expected) return true;

    // String normalization
    const actStr = JSON.stringify(actual);
    const expStr = JSON.stringify(expected);
    if (actStr === expStr) return true;

    // Loose float tolerance
    if (typeof actual === "number" && typeof expected === "number") {
        return Math.abs(actual - expected) < 1e-5;
    }

    return false;
}

/**
 * Worker script generator for executing JS code safely with standard DSA classes.
 */
function createWorkerCode(studentCode, functionName, testCases) {
    return `
self.onmessage = function(e) {
    const startTime = performance.now();
    
    // Standard DSA definitions
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }

    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    function arrayToLinkedList(arr) {
        if (!arr || arr.length === 0) return null;
        let head = new ListNode(arr[0]);
        let cur = head;
        for (let i = 1; i < arr.length; i++) {
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
        return head;
    }

    function linkedListToArray(head) {
        const arr = [];
        let cur = head;
        let limit = 10000;
        while (cur && limit--) {
            arr.push(cur.val);
            cur = cur.next;
        }
        return arr;
    }

    try {
        // Evaluate student code in worker context
        let Solution;
        let fn;

        // Wrap student code
        const studentScope = {};
        const runner = new Function('ListNode', 'TreeNode', \`
            \${e.data.studentCode}
            
            // Check for class Solution
            if (typeof Solution !== 'undefined') {
                return { instance: new Solution() };
            }
            // Check for direct function definition
            if (typeof \${e.data.functionName} === 'function') {
                return { fn: \${e.data.functionName} };
            }
            // Find any defined function
            const fns = Object.keys(this).filter(k => typeof this[k] === 'function');
            return {};
        \`);

        const exported = runner.call(studentScope, ListNode, TreeNode);
        if (exported.instance && typeof exported.instance[e.data.functionName] === 'function') {
            fn = exported.instance[e.data.functionName].bind(exported.instance);
        } else if (exported.fn) {
            fn = exported.fn;
        } else {
            throw new Error("Could not find function '" + e.data.functionName + "' in submitted code.");
        }

        const results = [];
        for (let i = 0; i < e.data.testCases.length; i++) {
            const tc = e.data.testCases[i];
            const tcStart = performance.now();
            
            // Clone arguments to avoid mutation issues
            const args = JSON.parse(JSON.stringify(tc.args));
            const actualRet = fn(...args);
            const tcEnd = performance.now();

            const actual = (e.data.isMutated && e.data.mutatedIndex >= 0 && e.data.mutatedIndex < args.length)
                ? args[e.data.mutatedIndex]
                : actualRet;

            results.push({
                testIndex: i,
                testId: tc.id || (i + 1),
                rawInput: tc.rawInput,
                expected: tc.expected,
                actual: actual,
                durationMs: Math.round((tcEnd - tcStart) * 100) / 100,
            });
        }

        const totalTime = Math.round((performance.now() - startTime) * 100) / 100;
        self.postMessage({ success: true, results, totalTime });
    } catch (err) {
        self.postMessage({
            success: false,
            error: err.message || String(err),
            stack: err.stack
        });
    }
};
`;
}

/**
 * Executes a student JavaScript solution against problem test cases.
 * Enforces an exact 5000ms execution limit.
 */
export async function executeJsSolution(studentCode, problem, testCases = []) {
    const config = inferExecutionConfig(problem);
    const functionName = config.functionName || "solve";
    const isMutated = config.outputMode === "MUTATED_PARAMETER" || config.returnType === "void";
    const mutatedParamName = (config.mutates && config.mutates[0]) || (config.parameters?.[0]?.name);
    const mutatedIndex = Math.max(0, (config.parameters || []).findIndex(p => p.name === mutatedParamName));

    // Combine examples and custom test cases
    const allTestCases = [];
    if (Array.isArray(problem.examples) && problem.examples.length > 0) {
        for (let i = 0; i < problem.examples.length; i++) {
            const ex = problem.examples[i];
            const normIn = normalizeTestCaseInput(ex.input || "", config.parameters);
            const normOut = normalizeTestCaseOutput(ex.output || "");
            allTestCases.push({
                id: i + 1,
                rawInput: normIn,
                expected: normOut,
                args: parseJsInputArgs(normIn, config.parameters)
            });
        }
    }

    if (Array.isArray(testCases) && testCases.length > 0) {
        for (let i = 0; i < testCases.length; i++) {
            const tc = testCases[i];
            const rawIn = typeof tc.input !== "undefined" ? tc.input : "";
            const rawOut = typeof tc.expected_output !== "undefined" 
                ? tc.expected_output 
                : (typeof tc.expectedOutput !== "undefined" ? tc.expectedOutput : tc.output || "");
            const normIn = normalizeTestCaseInput(rawIn, config.parameters);
            const normOut = normalizeTestCaseOutput(rawOut);
            allTestCases.push({
                id: tc.id || (allTestCases.length + 1),
                rawInput: normIn,
                expected: normOut,
                args: parseJsInputArgs(normIn, config.parameters)
            });
        }
    }

    if (allTestCases.length === 0) {
        allTestCases.push({
            id: 1,
            rawInput: "",
            expected: "",
            args: []
        });
    }

    // In-thread fallback if Worker or URL.createObjectURL is not available (e.g. Node CLI testing or restricted environments)
    if (typeof Worker === "undefined" || typeof URL.createObjectURL !== "function") {
        try {
            function ListNode(val, next) {
                this.val = (val === undefined ? 0 : val);
                this.next = (next === undefined ? null : next);
            }
            function TreeNode(val, left, right) {
                this.val = (val === undefined ? 0 : val);
                this.left = (left === undefined ? null : left);
                this.right = (right === undefined ? null : right);
            }
            const studentScope = {};
            const runner = new Function('ListNode', 'TreeNode', `
                ${studentCode}
                if (typeof Solution !== 'undefined') {
                    return { instance: new Solution() };
                }
                if (typeof ${functionName} === 'function') {
                    return { fn: ${functionName} };
                }
                return {};
            `);
            const exported = runner.call(studentScope, ListNode, TreeNode);
            let fn;
            if (exported.instance && typeof exported.instance[functionName] === 'function') {
                fn = exported.instance[functionName].bind(exported.instance);
            } else if (exported.fn) {
                fn = exported.fn;
            } else {
                throw new Error("Could not find function '" + functionName + "' in submitted code.");
            }

            const structuredCases = allTestCases.map((tc, i) => {
                const args = JSON.parse(JSON.stringify(tc.args));
                const tcStart = Date.now();
                const actualRet = fn(...args);
                const tcEnd = Date.now();
                const actual = (isMutated && mutatedIndex >= 0 && mutatedIndex < args.length)
                    ? args[mutatedIndex]
                    : actualRet;
                const passed = compareOutputs(actual, tc.expected);
                return {
                    testIndex: i,
                    testId: tc.id || (i + 1),
                    passed,
                    input: tc.rawInput,
                    expected: String(tc.expected),
                    actual: typeof actual === "object" ? JSON.stringify(actual) : String(actual),
                    errorType: passed ? null : "Wrong Answer",
                    durationMs: tcEnd - tcStart
                };
            });

            const passedTests = structuredCases.filter(c => c.passed).length;
            const totalTests = structuredCases.length;
            const allPassed = passedTests === totalTests && totalTests > 0;

            return Promise.resolve({
                success: allPassed,
                status: allPassed ? "Accepted" : "Wrong Answer",
                message: allPassed
                    ? `Accepted (${passedTests}/${totalTests} test cases passed)`
                    : `Wrong Answer (${passedTests}/${totalTests} test cases passed)`,
                testCases: structuredCases,
                passedTests,
                totalTests,
                compilationError: null,
                executionTimeMs: 1
            });
        } catch (err) {
            const isSyntax = err.name === "SyntaxError" || (err.message && (err.message.includes("SyntaxError") || err.message.includes("Unexpected token")));
            return Promise.resolve({
                success: false,
                status: isSyntax ? "Compilation Error" : "Runtime Error",
                message: err.message || String(err),
                testCases: [],
                passedTests: 0,
                totalTests: allTestCases.length,
                compilationError: isSyntax ? err.message : null,
                executionTimeMs: 0
            });
        }
    }

    return new Promise((resolve) => {
        let watchdog = null;
        let worker = null;

        const cleanup = () => {
            if (watchdog) clearTimeout(watchdog);
            if (worker) {
                try { worker.terminate(); } catch (_) {}
                worker = null;
            }
        };

        try {
            const workerScript = createWorkerCode(studentCode, functionName, allTestCases);
            const blob = new Blob([workerScript], { type: "text/javascript" });
            const workerUrl = URL.createObjectURL(blob);
            worker = new Worker(workerUrl);

            // Exact 5-second student execution limit
            watchdog = setTimeout(() => {
                cleanup();
                URL.revokeObjectURL(workerUrl);
                resolve({
                    success: false,
                    status: "Time Limit Exceeded",
                    message: "Time Limit Exceeded: Execution exceeded 5000ms. Check for infinite loops or inefficient algorithms.",
                    testCases: [],
                    passedTests: 0,
                    totalTests: allTestCases.length,
                    compilationError: null,
                    executionTimeMs: 5000,
                });
            }, 5000);

            worker.onmessage = (e) => {
                cleanup();
                URL.revokeObjectURL(workerUrl);

                const data = e.data;
                if (!data.success) {
                    const isSyntax = data.error.includes("SyntaxError") || data.error.includes("Unexpected token");
                    resolve({
                        success: false,
                        status: isSyntax ? "Compilation Error" : "Runtime Error",
                        message: data.error,
                        testCases: [],
                        passedTests: 0,
                        totalTests: allTestCases.length,
                        compilationError: isSyntax ? data.error : null,
                        executionTimeMs: 0,
                    });
                    return;
                }

                const structuredCases = data.results.map((r) => {
                    const passed = compareOutputs(r.actual, r.expected);
                    return {
                        testIndex: r.testIndex,
                        testId: r.testId,
                        passed,
                        input: r.rawInput,
                        expected: String(r.expected),
                        actual: typeof r.actual === "object" ? JSON.stringify(r.actual) : String(r.actual),
                        errorType: passed ? null : "Wrong Answer",
                        durationMs: r.durationMs,
                    };
                });

                const passedTests = structuredCases.filter(c => c.passed).length;
                const totalTests = structuredCases.length;
                const allPassed = passedTests === totalTests && totalTests > 0;

                resolve({
                    success: allPassed,
                    status: allPassed ? "Accepted" : "Wrong Answer",
                    message: allPassed
                        ? `Accepted (${passedTests}/${totalTests} test cases passed)`
                        : `Wrong Answer (${passedTests}/${totalTests} test cases passed)`,
                    testCases: structuredCases,
                    passedTests,
                    totalTests,
                    compilationError: null,
                    executionTimeMs: data.totalTime || 0,
                });
            };

            worker.onerror = (err) => {
                cleanup();
                URL.revokeObjectURL(workerUrl);
                resolve({
                    success: false,
                    status: "Runtime Error",
                    message: err.message || "An unexpected error occurred during JavaScript execution.",
                    testCases: [],
                    passedTests: 0,
                    totalTests: allTestCases.length,
                    compilationError: null,
                    executionTimeMs: 0,
                });
            };

            worker.postMessage({
                studentCode,
                functionName,
                testCases: allTestCases,
                isMutated,
                mutatedIndex
            });

        } catch (err) {
            cleanup();
            resolve({
                success: false,
                status: "Execution Error",
                message: err.message || "Failed to initialize JavaScript execution environment.",
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null,
                executionTimeMs: 0,
            });
        }
    });
}
