import { supabase } from "../lib/supabase";

export async function analyzeWithAI({
    problem,
    thinking,
    code,
    language,
    basicAnalysis
}) {
    const analysisRequest = {
        problem: {
            title: problem.title,
            description: problem.description,
            difficulty: problem.difficulty,
            topic: problem.topic,
            patterns: problem.patterns,
            dataStructures: problem.data_structures,
            expectedTime: problem.expected_time,
            expectedSpace: problem.expected_space,
            constraints: problem.constraints,
            examples: problem.examples,
            learningObjective: problem.learning_objective
        },

        thinking: {
            dataStructures:
                thinking?.dataStructures || [],

            patterns:
                thinking?.patterns || [],

            complexity:
                thinking?.complexity || ""
        },

        code,

        language,

        basicAnalysis
    };

    console.log(
        "Sending request to CodeMedic AI:",
        analysisRequest
    );

    const { data, error } =
        await supabase.functions.invoke(
            "analyze-code",
            {
                body: analysisRequest
            }
        );

    if (error) {
        console.error(
            "AI analysis error:",
            error
        );

        throw new Error(
            error.message ||
            "Failed to analyze code with AI."
        );
    }

    if (!data?.success) {
        throw new Error(
            data?.error ||
            "AI analysis failed."
        );
    }

    console.log(
        "AI diagnosis received:",
        data.diagnosis
    );

    return data.diagnosis;
}