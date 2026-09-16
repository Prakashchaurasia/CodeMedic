import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";

const GEMINI_MODEL = "gemini-3-flash-preview";

export default {
  fetch: withSupabase(
    { auth: "user" },
    async (req, ctx) => {
      try {
        // Handle browser preflight request
        if (req.method === "OPTIONS") {
          return new Response("ok");
        }

        // Get Gemini API key from Supabase secrets
        const geminiApiKey =
          Deno.env.get("GEMINI_API_KEY");

        if (!geminiApiKey) {
          return Response.json(
            {
              error:
                "GEMINI_API_KEY is not configured.",
            },
            { status: 500 }
          );
        }

        // Read request body
        const body = await req.json();

        const {
          problem,
          thinking,
          code,
          language,
          basicAnalysis,
        } = body;

        // Validate required information
        if (!problem || !code || !language) {
          return Response.json(
            {
              error:
                "Problem, code, and language are required.",
            },
            { status: 400 }
          );
        }

        /*
         * CodeMedic AI diagnosis prompt
         */
        const prompt = `
You are CodeMedic, an AI DSA learning mentor.

Your job is to diagnose how a student thinks about a DSA problem
and compare that thinking with their actual implementation.

IMPORTANT RULES:

1. Analyze the student's actual code.
2. Compare the student's planned thinking with the implementation.
3. Identify the data structures actually used.
4. Identify the algorithmic patterns actually used.
5. Estimate time complexity.
6. Estimate space complexity.
7. Detect brute-force approaches when appropriate.
8. Identify the student's main weakness.
9. Explain the mistake in beginner-friendly language.
10. Do not immediately give the complete solution.
11. Provide progressive hints.
12. Do not claim correctness with certainty when execution results are unavailable.
13. Do not invent information.
14. Return ONLY valid JSON.

PROBLEM:

${JSON.stringify(problem, null, 2)}

STUDENT THINKING:

${JSON.stringify(thinking, null, 2)}

STUDENT CODE:

Language:
${language}

Code:
${code}

BASIC ANALYZER:

${JSON.stringify(basicAnalysis, null, 2)}

Analyze the student and return the requested JSON structure.
`;

        /*
         * Call Gemini
         */
        const geminiResponse = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
              "x-goog-api-key": geminiApiKey,
            },

            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: prompt,
                    },
                  ],
                },
              ],

              generationConfig: {
                responseMimeType:
                  "application/json",

                responseSchema: {
                  type: "OBJECT",

                  properties: {
                    correctness: {
                      type: "STRING",
                    },

                    approach: {
                      type: "STRING",
                    },

                    brute_force: {
                      type: "BOOLEAN",
                    },

                    time_complexity: {
                      type: "STRING",
                    },

                    space_complexity: {
                      type: "STRING",
                    },

                    actual_data_structures: {
                      type: "ARRAY",
                      items: {
                        type: "STRING",
                      },
                    },

                    actual_patterns: {
                      type: "ARRAY",
                      items: {
                        type: "STRING",
                      },
                    },

                    weakness: {
                      type: "STRING",
                    },

                    thinking_observation: {
                      type: "STRING",
                    },

                    explanation: {
                      type: "STRING",
                    },

                    optimization: {
                      type: "STRING",
                    },

                    hints: {
                      type: "ARRAY",
                      items: {
                        type: "STRING",
                      },
                    },
                  },

                  required: [
                    "correctness",
                    "approach",
                    "brute_force",
                    "time_complexity",
                    "space_complexity",
                    "actual_data_structures",
                    "actual_patterns",
                    "weakness",
                    "thinking_observation",
                    "explanation",
                    "optimization",
                    "hints",
                  ],
                },
              },
            }),
          }
        );

        /*
         * Handle Gemini API errors
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
              error:
                "Gemini API request failed.",
              details: errorText,
            },
            { status: 502 }
          );
        }

        /*
         * Read Gemini response
         */
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
              error:
                "Gemini returned an empty response.",
            },
            { status: 502 }
          );
        }

        /*
         * Convert Gemini JSON string
         * into a JavaScript object
         */
        let diagnosis;

        try {
          diagnosis =
            JSON.parse(generatedText);
        } catch (error) {
          console.error(
            "Gemini JSON parsing error:",
            generatedText
          );

          return Response.json(
            {
              error:
                "Gemini returned invalid JSON.",
            },
            { status: 502 }
          );
        }

        /*
         * Return diagnosis to React
         */
        return Response.json({
          success: true,
          diagnosis,
          userId: ctx.userClaims?.sub ?? null,
        });
      } catch (error) {
        console.error(
          "Analyze-code function error:",
          error
        );

        return Response.json(
          {
            success: false,
            error:
              error instanceof Error
                ? error.message
                : "Unknown server error.",
          },
          { status: 500 }
        );
      }
    }
  ),
};