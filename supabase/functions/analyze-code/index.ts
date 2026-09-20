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

export default {
  async fetch(req: Request) {
    try {
      // Handle browser preflight request
      if (req.method === "OPTIONS") {
        return new Response("ok", {
          headers: CORS_HEADERS
        });
      }

      // Supabase Admin Client
      const supabaseAdmin = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
      );

      // Authentication verification
      let userId: string | null = null;
      const authHeader = req.headers.get("Authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        const accessToken = authHeader.substring(7).trim();
        if (accessToken) {
          const { data: { user } } = await supabaseAdmin.auth.getUser(accessToken);
          if (user) {
            userId = user.id;
          }
        }
      }

      // Get Gemini API key from Supabase secrets
      const geminiApiKey = Deno.env.get("GEMINI_API_KEY");
      if (!geminiApiKey) {
        console.error("GEMINI_API_KEY is missing.");
        return jsonError(
          500,
          "GEMINI_API_KEY is not configured in server environment.",
          "CONFIG_ERROR"
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
        executionResult
      } = body;

      // Validate required information
      if (!problem || !code || !language) {
        return jsonError(
          400,
          "Problem, code, and language are required fields.",
          "VALIDATION_ERROR"
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
2. Compare the student's planned thinking with the implementation. Highlight mismatches (e.g. planned Hash Map O(n) but wrote nested loops O(n²)).
3. Identify the data structures actually used.
4. Identify the algorithmic patterns actually used.
5. Estimate time complexity.
6. Estimate space complexity.
7. Detect brute-force approaches when appropriate.
8. Identify the student's main weakness.
9. Explain the mistake in beginner-friendly language.
10. Do not immediately give the complete solution in the hints or explanation.
11. Provide exactly 3 progressive hints in the hints array:
    Hint 1: General direction
    Hint 2: More specific guidance
    Hint 3: Strong implementation guidance
12. Respect the actual execution result (Accepted, Wrong Answer, Compilation Error, Runtime Error, etc.).
13. Provide a complete, optimal C++ reference solution in the reference_solution field.
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

EXECUTION RESULT:
${JSON.stringify(executionResult || { status: "Not available" }, null, 2)}

BASIC ANALYZER:

${JSON.stringify(basicAnalysis, null, 2)}

Analyze the student and return the requested JSON structure.
`;

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
              correctness: { type: "STRING" },
              approach: { type: "STRING" },
              brute_force: { type: "BOOLEAN" },
              time_complexity: { type: "STRING" },
              space_complexity: { type: "STRING" },
              actual_data_structures: {
                type: "ARRAY",
                items: { type: "STRING" }
              },
              actual_patterns: {
                type: "ARRAY",
                items: { type: "STRING" }
              },
              weakness: { type: "STRING" },
              thinking_observation: { type: "STRING" },
              explanation: { type: "STRING" },
              optimization: { type: "STRING" },
              hints: {
                type: "ARRAY",
                items: { type: "STRING" }
              },
              reference_solution: { type: "STRING" }
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
              "reference_solution"
            ]
          }
        }
      };

      let generatedText: string | null = null;
      let usedModel: string = "";
      let lastGeminiError: any = null;

      for (const model of GEMINI_MODELS) {
        try {
          console.log(`Calling Gemini for code analysis with model: ${model}`);
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
            console.warn(`Gemini model ${model} code analysis failed HTTP ${geminiResponse.status}: ${errorText}`);
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
        } catch (fetchErr: any) {
          console.warn(`Gemini model ${model} code analysis request threw:`, fetchErr);
          lastGeminiError = { status: 500, error: fetchErr?.message || String(fetchErr), model };
        }
      }

      if (!generatedText) {
        console.error("All Gemini models failed for code analysis:", lastGeminiError);
        return jsonError(
          502,
          `Gemini code analysis failed (${lastGeminiError?.model || "API"}): ${lastGeminiError?.error || "Unknown error"}`,
          "GEMINI_API_ERROR",
          lastGeminiError
        );
      }

      console.log(`Gemini code analysis succeeded using model: ${usedModel}`);

      let diagnosis;
      try {
        diagnosis = cleanAndParseJson(generatedText);
      } catch (error: any) {
        console.error("Gemini JSON parsing error in analyze-code:", error, generatedText);
        return jsonError(
          502,
          `Gemini returned invalid analysis JSON: ${error?.message || "Syntax error"}`,
          "GEMINI_PARSE_ERROR",
          { rawSnippet: generatedText.slice(0, 300) }
        );
      }

      return Response.json(
        {
          success: true,
          diagnosis,
          userId
        },
        {
          status: 200,
          headers: CORS_HEADERS
        }
      );
    } catch (error: any) {
      console.error("Analyze-code function error:", error);
      return jsonError(
        500,
        error instanceof Error ? error.message : "Unknown server error.",
        "SERVER_ERROR"
      );
    }
  }
};