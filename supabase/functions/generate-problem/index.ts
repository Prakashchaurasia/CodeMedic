import "@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const GEMINI_MODELS = [
    "gemini-flash-latest",
    "gemini-3.8-flash",
    "gemini-3.5-flash",
    "gemini-flash-lite-latest",
    "gemini-3.1-flash-lite",
    "gemini-3.6-flash"
];

const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
};

function jsonError(status: number, message: string, code: string, details?: any) {
    return Response.json(
        {
            success: false,
            error: message,
            code,
            ...(details ? { details } : {})
        },
        {
            status,
            headers: CORS_HEADERS
        }
    );
}

function cleanAndParseJson(raw: string) {
    if (!raw || typeof raw !== "string") {
        throw new Error("Received empty or invalid text from AI model.");
    }
    let text = raw.trim();
    if (text.startsWith("```")) {
        text = text.replace(/^```(?:json)?\s*/i, "");
        text = text.replace(/\s*```$/, "");
    }
    return JSON.parse(text.trim());
}

const SUPPORTED_CPP_TYPES = new Set([
    "int",
    "long long",
    "double",
    "bool",
    "string",
    "string&",
    "vector<int>",
    "vector<int>&",
    "vector<string>",
    "vector<string>&",
    "vector<vector<int>>",
    "vector<vector<int>>&",
    "ListNode*"
]);

function normalizeCppType(t: string): string {
    if (!t) return "";
    let clean = t.trim().replace(/\s+/g, " ");
    clean = clean.replace(/^const\s+/, "");
    if (clean.includes("vector<vector<int")) return clean.includes("&") ? "vector<vector<int>>&" : "vector<vector<int>>";
    if (clean.includes("vector<int")) return clean.includes("&") ? "vector<int>&" : "vector<int>";
    if (clean.includes("vector<string")) return clean.includes("&") ? "vector<string>&" : "vector<string>";
    if (clean.includes("vector<double")) return clean.includes("&") ? "vector<double>&" : "vector<double>";
    if (clean.includes("ListNode")) return "ListNode*";
    if (clean.includes("TreeNode")) return "TreeNode*";
    if (clean.includes("long long")) return "long long";
    if (clean.includes("double") || clean.includes("float")) return "double";
    if (clean.includes("bool")) return "bool";
    if (clean.includes("string")) return clean.includes("&") ? "string&" : "string";
    if (clean.includes("int")) return "int";
    return clean;
}

function validateGeneratedProblem(problem: any): { valid: boolean; error?: string; canonicalConfig?: any } {
    if (!problem.title || typeof problem.title !== "string" || problem.title.trim().length === 0) {
        return { valid: false, error: "Missing or invalid problem title." };
    }
    if (!problem.description || typeof problem.description !== "string" || problem.description.trim().length === 0) {
        return { valid: false, error: "Missing or invalid problem description." };
    }
    if (!Array.isArray(problem.examples) || problem.examples.length !== 2) {
        return { valid: false, error: "Problem must contain exactly 2 examples." };
    }
    if (!Array.isArray(problem.hints) || problem.hints.length !== 3) {
        return { valid: false, error: "Problem must contain exactly 3 hints." };
    }

    const spec = problem.functionSpec;
    if (!spec || typeof spec !== "object") {
        return { valid: false, error: "Missing canonical function specification (functionSpec)." };
    }

    const fnName = (spec.functionName || "solve").trim();
    if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(fnName)) {
        return { valid: false, error: `Invalid functionName "${fnName}". Must be a valid C++ identifier.` };
    }

    const normRet = normalizeCppType(spec.returnType || "");
    const baseRet = normRet.replace("&", "");
    if (!normRet || !SUPPORTED_CPP_TYPES.has(baseRet)) {
        return { valid: false, error: `Unsupported returnType "${spec.returnType}". Supported types: int, long long, double, bool, string, vector<int>, vector<string>, vector<vector<int>>, ListNode*.` };
    }

    if (!Array.isArray(spec.parameters) || spec.parameters.length < 1 || spec.parameters.length > 5) {
        return { valid: false, error: "parameters must be an array of 1 to 5 parameter objects." };
    }

    const seenNames = new Set<string>();
    const canonicalParams: { name: string; type: string }[] = [];

    for (let i = 0; i < spec.parameters.length; i++) {
        const p = spec.parameters[i];
        if (!p || typeof p !== "object") {
            return { valid: false, error: `Parameter at index ${i} is invalid.` };
        }
        const pName = (p.name || "").trim();
        if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(pName)) {
            return { valid: false, error: `Parameter name "${pName}" at index ${i} is not a valid C++ identifier.` };
        }
        if (seenNames.has(pName.toLowerCase())) {
            return { valid: false, error: `Duplicate parameter name "${pName}". All parameter names must be unique.` };
        }
        seenNames.add(pName.toLowerCase());

        const pType = normalizeCppType(p.type || "");
        if (!pType || !SUPPORTED_CPP_TYPES.has(pType)) {
            return { valid: false, error: `Unsupported type "${p.type}" for parameter "${pName}".` };
        }

        canonicalParams.push({ name: pName, type: pType });
    }

    // Validate examples against parameters and returnType
    for (let i = 0; i < problem.examples.length; i++) {
        const ex = problem.examples[i];
        if (!ex.input || typeof ex.input !== "string" || !ex.output || typeof ex.output !== "string") {
            return { valid: false, error: `Example ${i + 1} is missing input or output string.` };
        }

        const inStr = ex.input;
        // Verify every declared parameter is present in example input if multi-parameter
        if (canonicalParams.length > 1) {
            for (const param of canonicalParams) {
                const paramRegex = new RegExp(`\\b${param.name}\\b\\s*=`);
                if (!paramRegex.test(inStr)) {
                    return {
                        valid: false,
                        error: `Example ${i + 1} input "${inStr}" is missing parameter "${param.name}". All parameters (${canonicalParams.map(p => p.name).join(", ")}) must be explicitly defined.`
                    };
                }
            }
        }
    }

    const canonicalConfig = {
        functionName: fnName,
        returnType: normRet,
        parameters: canonicalParams,
        comparisonType: "return_value"
    };

    return { valid: true, canonicalConfig };
}

export default {
    async fetch(req: Request) {

        try {

            /*
             * ----------------------------------------------------
             * CORS
             * ----------------------------------------------------
             */

            if (req.method === "OPTIONS") {
                return new Response("ok", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers":
                            "authorization, x-client-info, apikey, content-type",
                        "Access-Control-Allow-Methods":
                            "POST, OPTIONS, GET"
                    }
                });
            }



            /*
             * ----------------------------------------------------
             * CREATE SERVER-SIDE SUPABASE CLIENT
             * ----------------------------------------------------
             *
             * This client runs only inside the Edge Function.
             *
             * The service role key is NEVER sent to React.
             */

            const supabaseAdmin = createClient(
                Deno.env.get("SUPABASE_URL")!,
                Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
            );


            /*
             * ----------------------------------------------------
             * MANUAL USER AUTHENTICATION
             * ----------------------------------------------------
             *
             * We intentionally do NOT use:
             *
             * withSupabase({ auth: "user" })
             *
             * because that was causing the 401 before our
             * function logic could execute.
             *
             * Instead:
             *
             * Authorization header
             *        ↓
             * access token
             *        ↓
             * Supabase auth.getUser()
             *        ↓
             * authenticated user
             */

            const authHeader =
                req.headers.get("Authorization");

            if (!authHeader) {
                console.error("Authorization header is missing.");
                return jsonError(401, "Authorization header is missing.", "AUTH_ERROR");
            }

            if (!authHeader.startsWith("Bearer ")) {
                console.error("Invalid Authorization header format.");
                return jsonError(401, "Invalid Authorization header format.", "AUTH_ERROR");
            }

            const accessToken =
                authHeader.substring(7).trim();

            if (!accessToken) {
                console.error("Access token is empty.");
                return jsonError(401, "Access token is missing.", "AUTH_ERROR");
            }

            /*
             * Ask Supabase Auth who owns this access token.
             */

            const {
                data: {
                    user
                },
                error: userError
            } =
                await supabaseAdmin.auth.getUser(
                    accessToken
                );

            if (userError || !user) {
                console.error("User authentication failed:", userError);
                return jsonError(
                    401,
                    "Invalid or expired authentication token.",
                    "AUTH_ERROR",
                    userError?.message || userError
                );
            }

            /*
             * This is the REAL auth.users UUID.
             *
             * It will be stored in:
             *
             * problems.generated_by
             */

            const userId = user.id;

            console.log(
                "Authenticated user:",
                userId
            );

            /*
             * ----------------------------------------------------
             * GEMINI API KEY
             * ----------------------------------------------------
             */

            const geminiApiKey =
                Deno.env.get("GEMINI_API_KEY");

            if (!geminiApiKey) {
                console.error("GEMINI_API_KEY is missing.");
                return jsonError(
                    500,
                    "GEMINI_API_KEY is not configured in server environment.",
                    "CONFIG_ERROR"
                );
            }


            /*
             * ----------------------------------------------------
             * READ REQUEST BODY
             * ----------------------------------------------------
             */

            const body =
                await req.json();

            const {
                topic,
                difficulty,
                pattern,
                dataStructure,
                complexity
            } = body;


            /*
             * ----------------------------------------------------
             * VALIDATION
             * ----------------------------------------------------
             */

            if (!topic || !difficulty) {
                return jsonError(
                    400,
                    "Topic and difficulty are required parameters.",
                    "VALIDATION_ERROR"
                );
            }


            /*
             * ----------------------------------------------------
             * GEMINI PROMPT
             * ----------------------------------------------------
             */

            const prompt = `
You are CodeMedic, an AI DSA problem generator.

Generate ONE completely original DSA programming problem.

The problem must follow these requirements:

Topic:
${topic}

Difficulty:
${difficulty}

Algorithmic Pattern:
${pattern || "Choose an appropriate pattern"}

Data Structure:
${dataStructure || "Choose an appropriate data structure"}

Expected Time Complexity:
${complexity || "Choose an appropriate complexity"}


IMPORTANT PROBLEM RULES:

1. Create an ORIGINAL problem.
2. Do not copy or reproduce a problem statement from
   LeetCode, GeeksforGeeks, Codeforces, or any other platform.
3. Do not mention any external platform.
4. The problem must be solvable using the requested topic.
5. The problem should match the requested difficulty.
6. Generate clear and meaningful constraints.
7. Generate exactly 2 examples.
8. Examples must be logically consistent with the problem.
9. Return ONLY valid JSON.
10. Do not provide the solution.
11. Do not reveal the intended algorithm in the problem statement.
12. Do not directly mention the intended data structure in the problem statement.
13. Do not directly mention the intended pattern in the problem statement.
14. The student should need to think and discover the approach themselves.


IMPORTANT HINT RULES:

Generate exactly 3 progressive hints.

Hint 1:
- Give a small observation about the problem.
- Help the student start thinking.
- Do not reveal the algorithm.
- Do not name the intended data structure.
- Do not name the intended pattern.
- Do not give complexity.
- Do not provide code.

Hint 2:
- Give a stronger observation.
- Narrow down the direction slightly.
- Still do not reveal the complete approach.
- Do not directly name the intended data structure or algorithm.
- Do not provide code.

Hint 3:
- Give the strongest partial clue.
- The student should still need to figure out the implementation.
- Do not provide the complete solution.
- Do not provide code.
- Do not directly state the full algorithm.


IMPORTANT FORMAT RULES:

The problem must contain:

1. Title
2. Problem Statement
3. Examples
4. Constraints
5. Input Format
6. Output Format
7. Learning Objective
8. Three progressive hints
9. Canonical Function Specification ("functionSpec")

CANONICAL FUNCTION SPECIFICATION (CRITICAL CONTRACT):
Every problem MUST define a single canonical function specification ("functionSpec") defining the C++ method that the student implements inside "class Solution".
"functionSpec" MUST have:
1. "functionName": A valid C++ method name (e.g. "solve" or a descriptive camelCase method name).
2. "returnType": Exactly one supported C++ return type ("int", "long long", "double", "bool", "string", "vector<int>", "vector<string>", "vector<vector<int>>", "ListNode*").
3. "parameters": An ordered array of 1 to 5 parameter objects, each with:
   - "name": Valid C++ parameter identifier (e.g. "s", "k", "nums", "target", "prices"). Parameter names must be unique.
   - "type": Supported C++ type ("int", "long long", "double", "bool", "string", "vector<int>&", "vector<int>", "vector<string>&", "vector<string>", "vector<vector<int>>&", "ListNode*").

CRITICAL SYNCHRONIZATION RULES:
- "inputFormat" must state the exact parameter types and names matching "functionSpec.parameters" (e.g. "string s, int k" or "vector<int>& nums, int target").
- Every example in "examples" MUST define its "input" with named parameters for ALL declared parameters in the exact same order (e.g., input: "s = \\"aaabbc\\", k = 2" or "nums = [2, 7, 11, 15], target = 9").
- Every example in "examples" MUST define its "output" matching the declared "returnType" (e.g. returnType "int" -> output "5"; returnType "bool" -> output "true"; returnType "vector<int>" -> output "[0, 1]").

Examples must be clearly separated.

Each example must contain:
- Input
- Output
- Explanation

Do not combine multiple examples into one line.


Return this structure:

{
    "title": "...",
    "description": "...",
    "difficulty": "...",
    "topic": "...",
    "pattern": "...",
    "dataStructure": "...",
    "expectedTime": "...",
    "expectedSpace": "...",
    "constraints": "...",
    "inputFormat": "...",
    "outputFormat": "...",
    "functionSpec": {
        "functionName": "solve",
        "returnType": "int",
        "parameters": [
            {
                "name": "s",
                "type": "string"
            },
            {
                "name": "k",
                "type": "int"
            }
        ]
    },
    "examples": [
        {
            "input": "...",
            "output": "...",
            "explanation": "..."
        },
        {
            "input": "...",
            "output": "...",
            "explanation": "..."
        }
    ],
    "hints": [
        "...",
        "...",
        "..."
    ],
    "learningObjective": "..."
}
`;


            /*
             * ----------------------------------------------------
             * CALL GEMINI (WITH MODEL FALLBACK & SAFE RECOVERY)
             * ----------------------------------------------------
             */

            const requestPayload = {
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "OBJECT",
                        properties: {
                            title: { type: "STRING" },
                            description: { type: "STRING" },
                            difficulty: { type: "STRING" },
                            topic: { type: "STRING" },
                            pattern: { type: "STRING" },
                            dataStructure: { type: "STRING" },
                            expectedTime: { type: "STRING" },
                            expectedSpace: { type: "STRING" },
                            constraints: { type: "STRING" },
                            inputFormat: { type: "STRING" },
                            outputFormat: { type: "STRING" },
                            functionSpec: {
                                type: "OBJECT",
                                properties: {
                                    functionName: { type: "STRING" },
                                    returnType: { type: "STRING" },
                                    parameters: {
                                        type: "ARRAY",
                                        items: {
                                            type: "OBJECT",
                                            properties: {
                                                name: { type: "STRING" },
                                                type: { type: "STRING" }
                                            },
                                            required: ["name", "type"]
                                        }
                                    }
                                },
                                required: ["functionName", "returnType", "parameters"]
                            },
                            examples: {
                                type: "ARRAY",
                                items: {
                                    type: "OBJECT",
                                    properties: {
                                        input: { type: "STRING" },
                                        output: { type: "STRING" },
                                        explanation: { type: "STRING" }
                                    },
                                    required: ["input", "output", "explanation"]
                                }
                            },
                            hints: {
                                type: "ARRAY",
                                items: { type: "STRING" }
                            },
                            learningObjective: { type: "STRING" }
                        },
                        required: [
                            "title",
                            "description",
                            "difficulty",
                            "topic",
                            "pattern",
                            "dataStructure",
                            "expectedTime",
                            "expectedSpace",
                            "constraints",
                            "inputFormat",
                            "outputFormat",
                            "functionSpec",
                            "examples",
                            "hints",
                            "learningObjective"
                        ]
                    }
                }
            };

            let generatedText: string | null = null;
            let usedModel: string = "";
            const modelAttemptErrors: any[] = [];

            for (const model of GEMINI_MODELS) {
                try {
                    console.log(`Calling Gemini with model: ${model}`);
                    const geminiResponse = await fetch(
                        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "x-goog-api-key": geminiApiKey
                            },
                            body: JSON.stringify(requestPayload)
                        }
                    );

                    if (!geminiResponse.ok) {
                        const errorText = await geminiResponse.text();
                        console.warn(`Gemini model ${model} failed with HTTP ${geminiResponse.status}: ${errorText}`);
                        modelAttemptErrors.push({ model, status: geminiResponse.status, error: errorText });
                        continue;
                    }

                    const geminiData = await geminiResponse.json();
                    const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (text && typeof text === "string" && text.trim().length > 0) {
                        generatedText = text;
                        usedModel = model;
                        break;
                    } else {
                        console.warn(`Gemini model ${model} returned empty content.`);
                        modelAttemptErrors.push({ model, status: 200, error: "Empty candidate parts" });
                    }
                } catch (fetchError: any) {
                    console.warn(`Gemini model ${model} request threw:`, fetchError);
                    modelAttemptErrors.push({ model, status: 500, error: fetchError?.message || String(fetchError) });
                }
            }

            if (!generatedText) {
                console.error("All Gemini models failed for problem generation:", modelAttemptErrors);
                const primaryError = modelAttemptErrors[0]?.error || "Unknown error";
                return jsonError(
                    502,
                    `Gemini problem generation failed. ${modelAttemptErrors.map(e => `[${e.model}: HTTP ${e.status}]`).join(", ")}: ${primaryError}`,
                    "GEMINI_API_ERROR",
                    { modelAttemptErrors }
                );
            }

            console.log(`Gemini problem generation succeeded using model: ${usedModel}`);

            /*
             * ----------------------------------------------------
             * PARSE GENERATED PROBLEM
             * ----------------------------------------------------
             */

            let problem;
            try {
                problem = cleanAndParseJson(generatedText);
            } catch (error: any) {
                console.error("Problem JSON parsing error:", error, generatedText);
                return jsonError(
                    502,
                    `Gemini returned invalid JSON: ${error?.message || "Syntax error"}`,
                    "GEMINI_PARSE_ERROR",
                    { rawSnippet: generatedText.slice(0, 300) }
                );
            }

            /*
             * ----------------------------------------------------
             * STRICT VALIDATION OF GENERATED PROBLEM & FUNCTION SPEC
             * ----------------------------------------------------
             */

            const validation = validateGeneratedProblem(problem);

            if (!validation.valid || !validation.canonicalConfig) {
                console.error(
                    "Generated problem failed contract validation:",
                    validation.error,
                    problem
                );

                return jsonError(
                    502,
                    `Gemini generated an invalid problem contract: ${validation.error}`,
                    "VALIDATION_ERROR",
                    { error: validation.error }
                );
            }

            const canonicalConfig = validation.canonicalConfig;
            const canonicalInputFormat = canonicalConfig.parameters
                .map((p: { type: string; name: string }) => `${p.type} ${p.name}`)
                .join(", ");


            /*
             * ----------------------------------------------------
             * SAVE GENERATED PROBLEM
             * ----------------------------------------------------
             *
             * The problem receives a REAL UUID from Supabase.
             *
             * generated_by = current logged-in user.
             */

            const {
                data: savedProblem,
                error: problemError
            } =
                await supabaseAdmin
                    .from("problems")
                    .insert({

                        title:
                            problem.title,

                        description:
                            problem.description,

                        difficulty:
                            problem.difficulty,

                        topic:
                            problem.topic,

                        patterns:
                            [problem.pattern],

                        data_structures:
                            [problem.dataStructure],

                        expected_time:
                            problem.expectedTime,

                        expected_space:
                            problem.expectedSpace,

                        constraints:
                            problem.constraints,

                        input_format:
                            canonicalInputFormat,

                        output_format:
                            problem.outputFormat,

                        examples:
                            problem.examples,

                        hints:
                            problem.hints,

                        learning_objective:
                            problem.learningObjective,

                        execution_config:
                            canonicalConfig,

                        source:
                            "Gemini",

                        is_generated:
                            true,

                        generated_by:
                            userId
                    })
                    .select()
                    .single();


            /*
             * ----------------------------------------------------
             * CHECK DATABASE INSERT
             * ----------------------------------------------------
             */

            if (problemError) {
                console.error(
                    "Problem save error:",
                    problemError
                );

                return jsonError(
                    500,
                    `Failed to save generated problem: ${problemError.message}`,
                    "DB_ERROR",
                    problemError
                );
            }

            /*
             * ----------------------------------------------------
             * SUCCESS
             * ----------------------------------------------------
             */

            console.log(
                "Generated problem saved:",
                savedProblem.id
            );

            return Response.json(
                {
                    success: true,
                    problem: savedProblem,
                    userId: userId
                },
                {
                    status: 200,
                    headers: CORS_HEADERS
                }
            );

        } catch (error: any) {
            console.error(
                "Generate problem error:",
                error
            );

            return jsonError(
                500,
                error instanceof Error
                    ? error.message
                    : "Unknown server error.",
                "SERVER_ERROR"
            );
        }
    }
};