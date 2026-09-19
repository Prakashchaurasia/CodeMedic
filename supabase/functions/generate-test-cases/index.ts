import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const GEMINI_MODEL = "gemini-3-flash-preview";

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

                console.error(
                    "Authorization header is missing."
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Authorization header is missing."
                    },
                    {
                        status: 401,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            if (!authHeader.startsWith("Bearer ")) {

                console.error(
                    "Invalid Authorization header."
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Invalid Authorization header."
                    },
                    {
                        status: 401,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            const accessToken =
                authHeader.substring(7).trim();


            if (!accessToken) {

                return Response.json(
                    {
                        success: false,
                        error:
                            "Access token is missing."
                    },
                    {
                        status: 401,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
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

                console.error(
                    "User authentication failed:",
                    userError
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Invalid or expired authentication token."
                    },
                    {
                        status: 401,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            /*
             * This is the real auth.users UUID.
             */

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

                console.error(
                    "GEMINI_API_KEY is missing."
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "GEMINI_API_KEY is not configured."
                    },
                    {
                        status: 500,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
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

                return Response.json(
                    {
                        success: false,
                        error:
                            "Problem not found."
                    },
                    {
                        status: 404,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
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

                return Response.json(
                    {
                        success: false,
                        error:
                            "You are not allowed to generate tests for this problem."
                    },
                    {
                        status: 403,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
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
             * CALL GEMINI
             * ----------------------------------------------------
             */

            const geminiResponse =
                await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",

                            "x-goog-api-key":
                                geminiApiKey
                        },

                        body: JSON.stringify({

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

                                responseMimeType:
                                    "application/json",

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
                        })
                    }
                );


            /*
             * ----------------------------------------------------
             * CHECK GEMINI RESPONSE
             * ----------------------------------------------------
             */

            if (!geminiResponse.ok) {

                const errorText =
                    await geminiResponse.text();

                console.error(
                    "Gemini test generation error:",
                    errorText
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Gemini test generation failed."
                    },
                    {
                        status: 502,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            /*
             * ----------------------------------------------------
             * READ GEMINI RESPONSE
             * ----------------------------------------------------
             */

            const geminiData =
                await geminiResponse.json();


            const generatedText =
                geminiData
                    ?.candidates?.[0]
                    ?.content?.parts?.[0]
                    ?.text;


            if (!generatedText) {

                console.error(
                    "Gemini returned empty test data."
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Gemini returned an empty response."
                    },
                    {
                        status: 502,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            /*
             * ----------------------------------------------------
             * PARSE TEST CASES
             * ----------------------------------------------------
             */

            let generatedTests;

            try {

                generatedTests =
                    JSON.parse(generatedText);

            } catch (error) {

                console.error(
                    "Test case JSON parsing error:",
                    generatedText
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Gemini returned invalid test-case JSON."
                    },
                    {
                        status: 502,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            /*
             * ----------------------------------------------------
             * VALIDATE TEST CASE ARRAY
             * ----------------------------------------------------
             */

            if (
                !generatedTests.testCases ||
                !Array.isArray(
                    generatedTests.testCases
                )
            ) {

                return Response.json(
                    {
                        success: false,
                        error:
                            "Invalid testCases format."
                    },
                    {
                        status: 502,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            /*
             * ----------------------------------------------------
             * REQUIRE EXACTLY 55 TESTS
             * ----------------------------------------------------
             */

            if (
                generatedTests.testCases.length !== 55
            ) {

                console.error(
                    "Incorrect test count:",
                    generatedTests.testCases.length
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            `Expected 55 test cases but received ${generatedTests.testCases.length}.`
                    },
                    {
                        status: 502,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );
            }


            /*
             * ----------------------------------------------------
             * VALIDATE INDIVIDUAL TEST CASES
             * ----------------------------------------------------
             */

            for (
                const testCase
                of generatedTests.testCases
            ) {

                if (
                    typeof testCase.input !== "string" ||
                    typeof testCase.expectedOutput !== "string"
                ) {

                    console.error(
                        "Invalid test case:",
                        testCase
                    );

                    return Response.json(
                        {
                            success: false,
                            error:
                                "One or more generated test cases have invalid fields."
                        },
                        {
                            status: 502,
                            headers: {
                                "Access-Control-Allow-Origin": "*"
                            }
                        }
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

                return Response.json(
                    {
                        success: false,
                        error:
                            `Failed to save test cases: ${insertError.message}`
                    },
                    {
                        status: 500,
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
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

                    problemId:
                        problemId,

                    testCount:
                        55
                },
                {
                    status: 200,

                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type":
                            "application/json"
                    }
                }
            );


        } catch (error) {

            /*
             * ----------------------------------------------------
             * GLOBAL ERROR
             * ----------------------------------------------------
             */

            console.error(
                "Generate test cases error:",
                error
            );

            return Response.json(
                {
                    success: false,

                    error:
                        error instanceof Error
                            ? error.message
                            : "Unknown error."
                },
                {
                    status: 500,

                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );
        }
    }
};