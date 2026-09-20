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
                            "POST, OPTIONS"
                    }
                });
            }


            /*
             * ----------------------------------------------------
             * SUPABASE ADMIN CLIENT
             * ----------------------------------------------------
             *
             * This client is used only inside the Edge Function.
             *
             * The service role key is NEVER exposed to React.
             */

            const supabaseAdmin = createClient(
                Deno.env.get("SUPABASE_URL")!,
                Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
            );


            /*
             * ----------------------------------------------------
             * AUTHENTICATION
             * ----------------------------------------------------
             */

            const authHeader =
                req.headers.get("Authorization");

            if (!authHeader) {
                console.error("Authorization header is missing.");
                return jsonError(401, "Authorization header is missing.", "AUTH_ERROR");
            }

            if (!authHeader.startsWith("Bearer ")) {
                console.error("Invalid Authorization header.");
                return jsonError(401, "Invalid Authorization header format.", "AUTH_ERROR");
            }

            const accessToken =
                authHeader.substring(7).trim();

            if (!accessToken) {
                return jsonError(401, "Access token is missing.", "AUTH_ERROR");
            }

            /*
             * Verify the logged-in user.
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

            const userId =
                user.id;

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
             * READ REQUEST
             * ----------------------------------------------------
             *
             * React sends:
             *
             * {
             *     problemId: "..."
             * }
             */

            const body =
                await req.json();


            const {
                problemId
            } = body;


            if (!problemId) {

                return Response.json(
                    {
                        success: false,
                        error:
                            "problemId is required."
                    },
                    {
                        status: 400,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            console.log(
                "Generating tests for problem:",
                problemId
            );


            /*
             * ----------------------------------------------------
             * FETCH PROBLEM
             * ----------------------------------------------------
             *
             * The problem is fetched server-side.
             *
             * This is important because the frontend should not
             * control the actual problem information used to create
             * hidden tests.
             */

            const {
                data: problem,
                error: problemError
            } =
                await supabaseAdmin
                    .from("problems")
                    .select(`
                        id,
                        title,
                        description,
                        difficulty,
                        topic,
                        patterns,
                        data_structures,
                        expected_time,
                        expected_space,
                        constraints,
                        input_format,
                        output_format,
                        examples,
                        learning_objective,
                        source,
                        is_generated,
                        generated_by
                    `)
                    .eq("id", problemId)
                    .single();


            if (problemError || !problem) {
                console.error(
                    "Problem fetch error:",
                    problemError
                );

                return jsonError(
                    404,
                    "Problem not found in database.",
                    "NOT_FOUND",
                    problemError?.message || problemError
                );
            }

            /*
             * ----------------------------------------------------
             * SECURITY CHECK
             * ----------------------------------------------------
             *
             * Permanent problems:
             *   authenticated users can generate tests.
             *
             * Generated problems:
             *   only the creator can generate tests.
             */

            if (
                problem.is_generated === true &&
                problem.generated_by !== userId
            ) {
                return jsonError(
                    403,
                    "You are not allowed to generate tests for this problem.",
                    "FORBIDDEN"
                );
            }


            /*
             * ----------------------------------------------------
             * GEMINI PROMPT
             * ----------------------------------------------------
             */

            const prompt = `
You are CodeMedic's hidden test-case generator.

You are given a DSA programming problem.

Your task is to generate EXACTLY 55 meaningful hidden test cases
for this specific problem.

The tests will be used by an automated code judge.

IMPORTANT RULES:

1. Every test must follow the problem's input format exactly.
2. Every expected output must be correct.
3. Do not invent invalid inputs.
4. Do not change the problem rules.
5. Do not provide explanations.
6. Do not provide solutions.
7. Do not provide algorithms.
8. Do not provide code.
9. Return ONLY valid JSON.
10. All tests must be different and useful.
11. Avoid unnecessary duplicate test cases.
12. Include edge cases.
13. Include minimum-size cases.
14. Include maximum-size or stress cases where allowed.
15. Include cases that can expose inefficient solutions.
16. Include repeated values when relevant.
17. Include sorted and unsorted data when relevant.
18. Include negative values when allowed.
19. Include zero when allowed.
20. Respect every stated constraint.
21. Every expected output must be calculated from the actual
    problem requirements.

IMPORTANT:

These tests are for THIS EXACT problem.

Do not create generic tests for the topic.

PROBLEM:

Title:
${problem.title}

Difficulty:
${problem.difficulty}

Topic:
${problem.topic}

Patterns:
${JSON.stringify(problem.patterns)}

Data Structures:
${JSON.stringify(problem.data_structures)}

Expected Time:
${problem.expected_time}

Expected Space:
${problem.expected_space}

Description:
${problem.description}

Constraints:
${problem.constraints}

Input Format:
${problem.input_format}

Output Format:
${problem.output_format}

Examples:
${JSON.stringify(problem.examples)}

Learning Objective:
${problem.learning_objective}


TEST DIVERSITY:

Try to include a useful mixture of:

- very small inputs
- minimum boundary cases
- normal cases
- repeated values
- special values
- ordered inputs
- reverse ordered inputs
- tricky combinations
- large inputs
- stress inputs
- cases designed to catch common incorrect logic

Do not force a category if it does not make sense for this
specific problem.

Every test must be valid for this exact problem.


RETURN EXACTLY THIS JSON STRUCTURE:

{
    "testCases": [
        {
            "input": "...",
            "expectedOutput": "..."
        }
    ]
}

There must be EXACTLY 55 objects inside testCases.
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
                            testCases: {
                                type: "ARRAY",
                                items: {
                                    type: "OBJECT",
                                    properties: {
                                        input: {
                                            type: "STRING"
                                        },
                                        expectedOutput: {
                                            type: "STRING"
                                        }
                                    },
                                    required: [
                                        "input",
                                        "expectedOutput"
                                    ]
                                }
                            }
                        },
                        required: [
                            "testCases"
                        ]
                    }
                }
            };

            let generatedText: string | null = null;
            let usedModel: string = "";
            let lastGeminiError: any = null;

            for (const model of GEMINI_MODELS) {
                try {
                    console.log(`Calling Gemini for test cases with model: ${model}`);
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
                        console.warn(`Gemini model ${model} test generation failed HTTP ${geminiResponse.status}: ${errorText}`);
                        lastGeminiError = { status: geminiResponse.status, error: errorText, model };
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
                        lastGeminiError = { status: 200, error: "Empty candidate parts", model };
                    }
                } catch (fetchError: any) {
                    console.warn(`Gemini model ${model} test generation request threw:`, fetchError);
                    lastGeminiError = { status: 500, error: fetchError?.message || String(fetchError), model };
                }
            }

            if (!generatedText) {
                console.error("All Gemini models failed for test generation:", lastGeminiError);
                return jsonError(
                    502,
                    `Gemini test generation failed (${lastGeminiError?.model || "API"}): ${lastGeminiError?.error || "Unknown error"}`,
                    "GEMINI_API_ERROR",
                    lastGeminiError
                );
            }

            console.log(`Gemini test cases generation succeeded using model: ${usedModel}`);

            /*
             * ----------------------------------------------------
             * PARSE TEST CASES
             * ----------------------------------------------------
             */

            let generatedTests;
            try {
                generatedTests = cleanAndParseJson(generatedText);
            } catch (error: any) {
                console.error("Test case JSON parsing error:", error, generatedText);
                return jsonError(
                    502,
                    `Gemini returned invalid test-case JSON: ${error?.message || "Syntax error"}`,
                    "GEMINI_PARSE_ERROR",
                    { rawSnippet: generatedText.slice(0, 300) }
                );
            }

            /*
             * ----------------------------------------------------
             * VALIDATE TEST CASE ARRAY
             * ----------------------------------------------------
             */

            if (!generatedTests.testCases || !Array.isArray(generatedTests.testCases)) {
                return jsonError(
                    502,
                    "Invalid testCases format returned by AI.",
                    "VALIDATION_ERROR"
                );
            }

            /*
             * ----------------------------------------------------
             * REQUIRE EXACTLY 55 TESTS
             * ----------------------------------------------------
             */

            if (generatedTests.testCases.length !== 55) {
                console.error(
                    "Incorrect test count:",
                    generatedTests.testCases.length
                );

                return jsonError(
                    502,
                    `Expected 55 test cases but received ${generatedTests.testCases.length}.`,
                    "VALIDATION_ERROR"
                );
            }

            /*
             * ----------------------------------------------------
             * VALIDATE INDIVIDUAL TEST CASES
             * ----------------------------------------------------
             */

            for (const testCase of generatedTests.testCases) {
                if (
                    typeof testCase.input !== "string" ||
                    typeof testCase.expectedOutput !== "string"
                ) {
                    console.error("Invalid test case:", testCase);
                    return jsonError(
                        502,
                        "One or more generated test cases have invalid fields.",
                        "VALIDATION_ERROR"
                    );
                }
            }


            /*
             * ----------------------------------------------------
             * IMPORTANT STEP
             * ----------------------------------------------------
             *
             * We DO NOT delete old test cases here.
             *
             * Why?
             *
             * This function is currently called immediately after
             * creating a brand-new problem.
             *
             * Therefore:
             *
             * New Problem
             *      ↓
             * New UUID
             *      ↓
             * Generate 55 tests
             *      ↓
             * INSERT 55 tests
             *
             * There is no reason to perform DELETE first.
             *
             * A future "Regenerate Tests" feature can have its own
             * delete-and-replace operation.
             */


            /*
             * ----------------------------------------------------
             * PREPARE DATABASE ROWS
             * ----------------------------------------------------
             *
             * input and expected_output are JSONB columns.
             *
             * We store the raw judge input/output as JSON strings.
             */

            const testRows =
                generatedTests.testCases.map(
                    (
                        testCase: {
                            input: string;
                            expectedOutput: string;
                        }
                    ) => ({

                        problem_id:
                            problemId,

                        input:
                            JSON.stringify(
                                testCase.input
                            ),

                        expected_output:
                            JSON.stringify(
                                testCase.expectedOutput
                            ),

                        is_hidden:
                            true
                    })
                );


            /*
             * ----------------------------------------------------
             * SAVE TEST CASES
             * ----------------------------------------------------
             */

            const {
                error: insertError
            } =
                await supabaseAdmin
                    .from("problem_test_cases")
                    .insert(testRows);


            if (insertError) {
                console.error(
                    "Test case save error:",
                    insertError
                );

                return jsonError(
                    500,
                    `Failed to save test cases: ${insertError.message}`,
                    "DB_ERROR",
                    insertError
                );
            }

            /*
             * ----------------------------------------------------
             * SUCCESS
             * ----------------------------------------------------
             */

            console.log(
                `Successfully saved 55 hidden tests for problem ${problemId}`
            );

            return Response.json(
                {
                    success: true,
                    problemId: problemId,
                    testCount: 55
                },
                {
                    status: 200,
                    headers: CORS_HEADERS
                }
            );

        } catch (error: any) {
            console.error(
                "Generate test cases error:",
                error
            );

            return jsonError(
                500,
                error instanceof Error
                    ? error.message
                    : "Unknown error.",
                "SERVER_ERROR"
            );
        }
    }
};