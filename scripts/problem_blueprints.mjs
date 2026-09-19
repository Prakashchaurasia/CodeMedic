/**
 * CodeMedic DSA Problem Blueprints & Reference Implementations
 * Defines 420+ original problem specifications with deterministic reference solvers.
 */

import crypto from "crypto";

export function deterministicUUID(name) {
    const hash = crypto.createHash("sha256").update(name).digest("hex");
    const p1 = hash.substring(0, 8);
    const p2 = hash.substring(8, 12);
    const p3 = "4" + hash.substring(13, 16);
    const p4 = "a" + hash.substring(17, 20);
    const p5 = hash.substring(20, 32);
    return `${p1}-${p2}-${p3}-${p4}-${p5}`;
}

export function createProblem({
    id,
    title,
    topic,
    difficulty,
    patterns,
    dataStructures,
    expectedTime,
    expectedSpace,
    description,
    constraints,
    fnName,
    returnType,
    params, // [{ name, type }]
    learningObjective,
    hints,
    solver, // JS function computing the exact answer for test generation
    rawExamples // array of argument lists [[arg1, arg2], [arg1, arg2]]
}) {
    const inputFormat = params.map(p => `${p.type} ${p.name}`).join(", ");
    const outputFormat = returnType;

    function formatArg(val) {
        if (typeof val === "string") return `"${val}"`;
        if (Array.isArray(val)) return JSON.stringify(val);
        if (typeof val === "boolean") return val ? "true" : "false";
        return String(val);
    }

    function formatExpected(val) {
        if (typeof val === "string") return `"${val}"`;
        if (Array.isArray(val)) return JSON.stringify(val);
        if (typeof val === "boolean") return val ? "true" : "false";
        return String(val);
    }

    // Build examples using solver
    const examples = rawExamples.map((argList, idx) => {
        // Deep copy args so solver mutating array doesn't break input
        const clonedArgs = JSON.parse(JSON.stringify(argList));
        const actualOutput = solver(...clonedArgs);

        const inputStr = params.map((p, i) => `${p.name} = ${formatArg(argList[i])}`).join(", ");
        const outputStr = formatExpected(actualOutput);

        return {
            input: inputStr,
            output: outputStr,
            explanation: `For the given input ${inputStr}, the expected output is ${outputStr}.`
        };
    });

    return {
        id: id || deterministicUUID(title),
        title,
        topic,
        difficulty,
        patterns,
        data_structures: dataStructures,
        expected_time: expectedTime,
        expected_space: expectedSpace,
        description,
        constraints,
        input_format: inputFormat,
        output_format: outputFormat,
        examples,
        hints: hints || [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        learning_objective: learningObjective || `Master algorithmic problem solving for ${title}.`,
        execution_config: {
            functionName: fnName,
            returnType,
            parameters: params,
            comparisonType: "return_value"
        },
        source: "CodeMedic Library",
        is_generated: false,
        generated_by: null
    };
}
