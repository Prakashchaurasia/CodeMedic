/**
 * Problem Specification Validation Engine for CodeMedic
 * Generically validates DSA problem contracts, execution specifications,
 * parameter types, return types, and output modes (RETURN_VALUE vs MUTATED_PARAMETER).
 */

const VALID_IDENTIFIER_REGEX = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

// Supported standard DSA parameter and return types
const SUPPORTED_BASE_TYPES = new Set([
    "int",
    "long long",
    "double",
    "float",
    "bool",
    "string",
    "void",
    "ListNode*",
    "TreeNode*",
    "vector<int>",
    "vector<long long>",
    "vector<double>",
    "vector<bool>",
    "vector<string>",
    "vector<vector<int>>",
    "vector<vector<long long>>",
    "vector<vector<string>>",
    "vector<vector<char>>",
    "vector<char>"
]);

/**
 * Normalizes a C++ DSA type string by trimming whitespace and reference modifiers.
 */
export function normalizeTypeString(typeStr) {
    if (!typeStr || typeof typeStr !== "string") return "";
    return typeStr.replace(/&/g, "").replace(/\s+/g, " ").trim();
}

/**
 * Checks if a type string is in the list of supported DSA types.
 */
export function isSupportedType(typeStr) {
    const clean = normalizeTypeString(typeStr);
    return SUPPORTED_BASE_TYPES.has(clean);
}

/**
 * Validates a single problem specification.
 * Returns an object with:
 *   isValid: boolean
 *   errors: string[]
 *   warnings: string[]
 *   normalizedConfig: object
 */
export function validateProblemSpecification(problem) {
    const errors = [];
    const warnings = [];

    if (!problem || typeof problem !== "object") {
        return {
            isValid: false,
            errors: ["Problem definition must be a valid non-null object."],
            warnings: [],
            normalizedConfig: null
        };
    }

    // 1. Fundamental Identity
    if (!problem.id || typeof problem.id !== "string" || !problem.id.trim()) {
        errors.push("Problem is missing a valid 'id'.");
    }

    if (!problem.title || typeof problem.title !== "string" || !problem.title.trim()) {
        errors.push("Problem is missing a valid 'title'.");
    }

    if (!problem.description || typeof problem.description !== "string" || !problem.description.trim()) {
        errors.push("Problem is missing a valid 'description'.");
    }

    // 2. Execution Configuration
    const rawConfig = problem.execution_config;
    if (!rawConfig || typeof rawConfig !== "object") {
        errors.push("Problem is missing an 'execution_config' object.");
    }

    const functionName = (rawConfig?.functionName || "").trim();
    if (!functionName) {
        errors.push("execution_config is missing 'functionName'.");
    } else if (!VALID_IDENTIFIER_REGEX.test(functionName)) {
        errors.push(`Invalid functionName '${functionName}': must be a valid C++/JS identifier.`);
    }

    const rawReturnType = (rawConfig?.returnType || "").trim();
    if (!rawReturnType) {
        errors.push("execution_config is missing 'returnType'.");
    }

    const parameters = Array.isArray(rawConfig?.parameters) ? rawConfig.parameters : null;
    if (!parameters) {
        errors.push("execution_config is missing 'parameters' array.");
    }

    const paramNames = new Set();
    if (parameters) {
        parameters.forEach((param, idx) => {
            if (!param || typeof param !== "object") {
                errors.push(`Parameter at index ${idx} is not an object.`);
                return;
            }
            const pName = (param.name || "").trim();
            const pType = (param.type || "").trim();

            if (!pName) {
                errors.push(`Parameter at index ${idx} is missing 'name'.`);
            } else if (!VALID_IDENTIFIER_REGEX.test(pName)) {
                errors.push(`Parameter '${pName}' at index ${idx} is not a valid identifier.`);
            } else if (paramNames.has(pName)) {
                errors.push(`Duplicate parameter name '${pName}' in execution_config.`);
            } else {
                paramNames.add(pName);
            }

            if (!pType) {
                errors.push(`Parameter '${pName || idx}' is missing 'type'.`);
            } else if (!isSupportedType(pType)) {
                warnings.push(`Parameter '${pName}' has non-standard type '${pType}'.`);
            }
        });
    }

    // 3. Output Mode & In-Place Mutation Validation
    let outputMode = (rawConfig?.outputMode || "").toUpperCase();
    const isVoid = normalizeTypeString(rawReturnType) === "void";

    if (!outputMode) {
        if (isVoid || rawConfig?.comparisonType === "mutated_parameter") {
            outputMode = "MUTATED_PARAMETER";
        } else {
            outputMode = "RETURN_VALUE";
        }
    }

    if (outputMode !== "RETURN_VALUE" && outputMode !== "MUTATED_PARAMETER") {
        errors.push(`Invalid outputMode '${outputMode}'. Must be 'RETURN_VALUE' or 'MUTATED_PARAMETER'.`);
    }

    let mutates = Array.isArray(rawConfig?.mutates) ? rawConfig.mutates : [];
    if (outputMode === "MUTATED_PARAMETER") {
        if (mutates.length === 0) {
            // Default to first parameter if not explicitly specified
            if (parameters && parameters.length > 0) {
                mutates = [parameters[0].name];
                warnings.push(`outputMode is MUTATED_PARAMETER but 'mutates' was omitted; defaulted to ['${parameters[0].name}'].`);
            } else {
                errors.push("outputMode is MUTATED_PARAMETER but there are no parameters to mutate.");
            }
        }

        // Validate each mutated parameter exists in the parameter list
        for (const m of mutates) {
            if (!paramNames.has(m)) {
                errors.push(`Mutated parameter '${m}' does not exist in execution_config parameters.`);
            }
        }
    } else {
        // RETURN_VALUE
        if (isVoid) {
            errors.push("outputMode is RETURN_VALUE but returnType is 'void'. Void functions must use MUTATED_PARAMETER.");
        }
    }

    // 4. Examples validation
    if (!Array.isArray(problem.examples) || problem.examples.length === 0) {
        warnings.push("Problem has no 'examples' specified.");
    } else {
        problem.examples.forEach((ex, idx) => {
            if (!ex || typeof ex !== "object") {
                errors.push(`Example at index ${idx} is not an object.`);
            } else if (typeof ex.input === "undefined" || typeof ex.output === "undefined") {
                errors.push(`Example at index ${idx} is missing 'input' or 'output'.`);
            }
        });
    }

    const normalizedConfig = {
        functionName: functionName || "solve",
        returnType: rawReturnType || "int",
        parameters: parameters || [],
        outputMode,
        mutates,
        comparisonType: outputMode === "MUTATED_PARAMETER" ? "mutated_parameter" : "return_value"
    };

    return {
        isValid: errors.length === 0,
        errors,
        warnings,
        normalizedConfig
    };
}
