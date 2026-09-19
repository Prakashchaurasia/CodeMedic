import { supabase } from "../lib/supabase";

export const DSA_TOPICS = [
    "Arrays",
    "Strings",
    "Hashing",
    "Linked Lists",
    "Stack",
    "Queue",
    "Trees",
    "Graphs",
    "Binary Search",
    "Recursion",
    "Backtracking",
    "Greedy",
    "Dynamic Programming"
];

/**
 * Calculates genuine DSA Health and detects repeated thinking/complexity weaknesses.
 */
export async function calculateDSAHealth(userId) {
    if (!userId) {
        return getDefaultDSAHealth();
    }

    try {
        // 1. Fetch user attempts with problem details
        const { data: attempts, error: attError } = await supabase
            .from("problem_attempts")
            .select(`
                id,
                problem_id,
                status,
                created_at,
                problems (
                    id,
                    title,
                    topic,
                    difficulty,
                    patterns,
                    data_structures,
                    expected_time
                )
            `)
            .eq("user_id", userId);

        if (attError) throw attError;

        // 2. Fetch code analyses
        const attemptIds = (attempts || []).map(a => a.id);
        let analyses = [];
        if (attemptIds.length > 0) {
            const { data: anaData } = await supabase
                .from("code_analyses")
                .select("*")
                .in("attempt_id", attemptIds);
            analyses = anaData || [];
        }

        // Map attempt_id -> analysis
        const analysisMap = new Map();
        analyses.forEach(ana => {
            analysisMap.set(ana.attempt_id, ana);
        });

        // 3. Fetch thinking attempts
        const { data: thinkingAttempts } = await supabase
            .from("thinking_attempts")
            .select("*")
            .eq("user_id", userId);

        // Map problem_id -> thinking attempts list
        const thinkingMap = new Map();
        (thinkingAttempts || []).forEach(ta => {
            if (!thinkingMap.has(ta.problem_id)) {
                thinkingMap.set(ta.problem_id, []);
            }
            thinkingMap.get(ta.problem_id).push(ta);
        });

        // 4. Calculate per-topic metrics
        const topicStats = {};
        DSA_TOPICS.forEach(topic => {
            topicStats[topic] = {
                topic,
                attempted: 0,
                solved: 0,
                bruteForceCount: 0,
                complexityMismatches: 0,
                thinkingMatches: 0,
                totalThinking: 0
            };
        });

        const solvedProblemIds = new Set();
        let bruteForceTotal = 0;
        let complexityMismatchesTotal = 0;
        const weaknessCounts = {};

        (attempts || []).forEach(att => {
            const problem = att.problems;
            if (!problem) return;

            let topic = problem.topic || "Arrays";
            // Normalize topic
            const matchedTopic = DSA_TOPICS.find(
                t => t.toLowerCase() === topic.toLowerCase()
            ) || "Arrays";

            const stats = topicStats[matchedTopic];
            stats.attempted++;

            const isSolved =
                att.status?.toLowerCase() === "solved" ||
                att.status?.toLowerCase() === "accepted";

            if (isSolved) {
                stats.solved++;
                solvedProblemIds.add(att.problem_id);
            }

            const analysis = analysisMap.get(att.id);
            if (analysis) {
                if (analysis.brute_force) {
                    stats.bruteForceCount++;
                    bruteForceTotal++;
                }

                // Check complexity mismatch
                if (analysis.time_complexity && problem.expected_time) {
                    const expectedIsLinearOrLog =
                        problem.expected_time.includes("O(n)") ||
                        problem.expected_time.includes("O(1)") ||
                        problem.expected_time.includes("O(log");
                    const actualIsQuadratic =
                        analysis.time_complexity.includes("O(n²)") ||
                        analysis.time_complexity.includes("O(n^2)");

                    if (expectedIsLinearOrLog && actualIsQuadratic) {
                        stats.complexityMismatches++;
                        complexityMismatchesTotal++;
                        const key = `Nested Loops O(n²) in ${matchedTopic}`;
                        weaknessCounts[key] = (weaknessCounts[key] || 0) + 1;
                    }
                }

                if (analysis.weakness && analysis.weakness !== "None noted") {
                    weaknessCounts[analysis.weakness] = (weaknessCounts[analysis.weakness] || 0) + 1;
                }
            }

            // Check thinking accuracy
            const problemThinkings = thinkingMap.get(att.problem_id) || [];
            if (problemThinkings.length > 0 && analysis) {
                const latestThinking = problemThinkings[problemThinkings.length - 1];
                stats.totalThinking++;

                const selectedPatterns = latestThinking.patterns_selected || [];
                const actualPatterns = analysis.actual_patterns || [];
                const matched = selectedPatterns.some(p => actualPatterns.includes(p));
                if (matched) {
                    stats.thinkingMatches++;
                }
            }
        });

        // 5. Compute health scores for each topic
        const topicScores = DSA_TOPICS.map(topic => {
            const stats = topicStats[topic];
            let score = 50; // default baseline

            if (stats.attempted > 0) {
                const passRate = stats.solved / stats.attempted;
                let passScore = passRate * 50; // max 50 pts

                let thinkingScore = 25; // max 25 pts
                if (stats.totalThinking > 0) {
                    thinkingScore = (stats.thinkingMatches / stats.totalThinking) * 25;
                }

                let efficiencyScore = 25; // max 25 pts
                if (stats.attempted > 0) {
                    const penalty = ((stats.bruteForceCount + stats.complexityMismatches) / stats.attempted) * 25;
                    efficiencyScore = Math.max(0, 25 - penalty);
                }

                score = Math.round(passScore + thinkingScore + efficiencyScore);
            }

            score = Math.max(10, Math.min(100, score));

            let status = "Needs Practice";
            if (score >= 75) status = "Good";
            else if (score >= 55) status = "Moderate";

            return {
                topic,
                score,
                status,
                attempted: stats.attempted,
                solved: stats.solved
            };
        });

        // 6. Overall DSA Health
        const totalAttempted = (attempts || []).length;
        const totalSolved = solvedProblemIds.size;
        const overallScore = Math.round(
            topicScores.reduce((acc, t) => acc + t.score, 0) / topicScores.length
        );

        // 7. Extract repeated weaknesses
        const strongTopics = topicScores
            .filter(t => t.score >= 70 && t.attempted > 0)
            .map(t => t.topic);

        const weakTopics = topicScores
            .filter(t => t.score < 60 || (t.attempted > 0 && t.solved === 0))
            .map(t => t.topic);

        const repeatedWeaknesses = [];
        if (complexityMismatchesTotal >= 2) {
            repeatedWeaknesses.push(
                "Frequently implementing O(n²) quadratic approaches when linear O(n) or logarithmic solutions are optimal."
            );
        }
        if (bruteForceTotal >= 2) {
            repeatedWeaknesses.push(
                "Tendency to fall back to Brute Force instead of identifying appropriate patterns like Hash Maps or Two Pointers."
            );
        }

        // Add specific recurring weakness patterns
        for (const [weakness, count] of Object.entries(weaknessCounts)) {
            if (count >= 2) {
                repeatedWeaknesses.push(`Repeated difficulty with: ${weakness} (${count} attempts)`);
            }
        }

        if (repeatedWeaknesses.length === 0 && weakTopics.length > 0) {
            repeatedWeaknesses.push(
                `Requires targeted practice in ${weakTopics.slice(0, 2).join(" and ")} to solidify core patterns.`
            );
        }

        return {
            overallScore,
            topicScores,
            strongTopics,
            weakTopics,
            repeatedWeaknesses,
            totalAttempted,
            totalSolved,
            streakDays: 0 // populated by dashboardService
        };

    } catch (err) {
        console.error("Error calculating DSA Health:", err);
        return getDefaultDSAHealth();
    }
}

function getDefaultDSAHealth() {
    return {
        overallScore: 65,
        topicScores: DSA_TOPICS.map(topic => ({
            topic,
            score: 50,
            status: "Moderate",
            attempted: 0,
            solved: 0
        })),
        strongTopics: ["Arrays"],
        weakTopics: ["Dynamic Programming", "Recursion"],
        repeatedWeaknesses: ["Solve more problems to detect personal DSA thinking patterns."],
        totalAttempted: 0,
        totalSolved: 0
    };
}
