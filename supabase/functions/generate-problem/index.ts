import "@supabase/functions-js/edge-runtime.d.ts";
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
                    "Invalid Authorization header format."
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

                console.error(
                    "Access token is empty."
                );

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

                return Response.json(
                    {
                        success: false,
                        error:
                            "Topic and difficulty are required."
                    },
                    {
                        status: 400,
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

                                        title: {
                                            type: "STRING"
                                        },

                                        description: {
                                            type: "STRING"
                                        },

                                        difficulty: {
                                            type: "STRING"
                                        },

                                        topic: {
                                            type: "STRING"
                                        },

                                        pattern: {
                                            type: "STRING"
                                        },

                                        dataStructure: {
                                            type: "STRING"
                                        },

                                        expectedTime: {
                                            type: "STRING"
                                        },

                                        expectedSpace: {
                                            type: "STRING"
                                        },

                                        constraints: {
                                            type: "STRING"
                                        },

                                        inputFormat: {
                                            type: "STRING"
                                        },

                                        outputFormat: {
                                            type: "STRING"
                                        },

                                        examples: {

                                            type: "ARRAY",

                                            items: {

                                                type: "OBJECT",

                                                properties: {

                                                    input: {
                                                        type: "STRING"
                                                    },

                                                    output: {
                                                        type: "STRING"
                                                    },

                                                    explanation: {
                                                        type: "STRING"
                                                    }

                                                },

                                                required: [
                                                    "input",
                                                    "output",
                                                    "explanation"
                                                ]
                                            }
                                        },

                                        hints: {

                                            type: "ARRAY",

                                            items: {
                                                type: "STRING"
                                            }
                                        },

                                        learningObjective: {
                                            type: "STRING"
                                        }
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
                                        "examples",
                                        "hints",
                                        "learningObjective"
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
                    "Gemini API error:",
                    errorText
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Gemini problem generation failed."
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
             * READ GEMINI JSON
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
                    "Gemini returned no text."
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
             * PARSE GENERATED PROBLEM
             * ----------------------------------------------------
             */

            let problem;

            try {

                problem =
                    JSON.parse(generatedText);

            } catch (error) {

                console.error(
                    "Problem JSON parsing error:",
                    generatedText
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Gemini returned invalid JSON."
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
             * BASIC VALIDATION OF GENERATED PROBLEM
             * ----------------------------------------------------
             */

            if (
                !problem.title ||
                !problem.description ||
                !problem.examples ||
                !Array.isArray(problem.examples) ||
                problem.examples.length !== 2 ||
                !problem.hints ||
                !Array.isArray(problem.hints) ||
                problem.hints.length !== 3
            ) {

                console.error(
                    "Generated problem does not match required format:",
                    problem
                );

                return Response.json(
                    {
                        success: false,
                        error:
                            "Gemini generated an invalid problem format."
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
                            problem.inputFormat,

                        output_format:
                            problem.outputFormat,

                        examples:
                            problem.examples,

                        hints:
                            problem.hints,

                        learning_objective:
                            problem.learningObjective,

                        execution_config: {
                            functionName: "solve",
                            returnType: problem.outputFormat?.toLowerCase().includes("bool") ? "bool" : (problem.outputFormat?.toLowerCase().includes("vector") ? "vector<int>" : (problem.outputFormat?.toLowerCase().includes("string") ? "string" : "int")),
                            parameters: [
                                {
                                    name: "nums",
                                    type: problem.inputFormat?.toLowerCase().includes("vector") ? "vector<int>&" : (problem.inputFormat?.toLowerCase().includes("string") ? "string" : "int")
                                }
                            ],
                            comparisonType: "return_value"
                        },

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

                return Response.json(
                    {
                        success: false,
                        error:
                            "Failed to save generated problem."
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
                "Generated problem saved:",
                savedProblem.id
            );


            return Response.json(
                {
                    success: true,

                    problem:
                        savedProblem,

                    userId:
                        userId
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
                "Generate problem error:",
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