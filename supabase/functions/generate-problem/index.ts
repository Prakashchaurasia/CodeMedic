import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";

const GEMINI_MODEL = "gemini-3-flash-preview";

export default {
    fetch: withSupabase(
        { auth: "user" },
        async (req, ctx) => {

            try {

                if (req.method === "OPTIONS") {
                    return new Response("ok");
                }

                const geminiApiKey =
                    Deno.env.get("GEMINI_API_KEY");

                if (!geminiApiKey) {

                    return Response.json(
                        {
                            success: false,
                            error:
                                "GEMINI_API_KEY is not configured."
                        },
                        { status: 500 }
                    );
                }


                const body = await req.json();

                const {
                    topic,
                    difficulty,
                    pattern,
                    dataStructure,
                    complexity
                } = body;


                if (!topic || !difficulty) {

                    return Response.json(
                        {
                            success: false,
                            error:
                                "Topic and difficulty are required."
                        },
                        { status: 400 }
                    );
                }


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

IMPORTANT RULES:

1. Create an ORIGINAL problem.
2. Do not copy or reproduce a problem statement from
   LeetCode, GeeksforGeeks, Codeforces, or any other platform.
3. Do not mention any external platform.
4. The problem must be solvable using the requested topic.
5. The problem should match the requested difficulty.
6. Generate clear constraints.
7. Generate exactly 2 examples.
8. Examples must be logically consistent with the problem.
9. Return ONLY valid JSON.
10. Do not provide the solution.
11. Do not provide hints.
12. The student will solve the problem themselves.

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
    "learningObjective": "..."
}
`;


                const geminiResponse = await fetch(
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
                                        "learningObjective"
                                    ]
                                }
                            }
                        })
                    }
                );


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
                        { status: 502 }
                    );
                }


                const geminiData =
                    await geminiResponse.json();


                const generatedText =
                    geminiData
                        ?.candidates?.[0]
                        ?.content?.parts?.[0]
                        ?.text;


                if (!generatedText) {

                    return Response.json(
                        {
                            success: false,
                            error:
                                "Gemini returned an empty response."
                        },
                        { status: 502 }
                    );
                }


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
                        { status: 502 }
                    );
                }


                return Response.json({

                    success: true,

                    problem,

                    userId:
                        ctx.userClaims?.sub ?? null

                });


            } catch (error) {

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
                    { status: 500 }
                );
            }
        }
    )
};