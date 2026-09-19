import { supabase } from "../lib/supabase";

export const CURATED_REVISION_QUESTIONS = [
    {
        topic: "Hashing",
        pattern: "Lookup Table",
        question: "Why is a Hash Map preferred over nested loops for the Two Sum problem?",
        options: [
            "Hash Map achieves O(1) average lookup time, reducing total complexity from O(n²) to O(n)",
            "Hash Map sorts the array in O(n log n) time automatically",
            "Hash Map uses O(1) auxiliary memory while nested loops use O(n)",
            "Hash Map eliminates all cache misses"
        ],
        correct_answer: "Hash Map achieves O(1) average lookup time, reducing total complexity from O(n²) to O(n)",
        explanation: "By storing each element in a hash map as we iterate, we can check if the complement (target - nums[i]) exists in O(1) average time, trading O(n) space to improve time from O(n²) to O(n)."
    },
    {
        topic: "Time Complexity",
        pattern: "Nested Loops",
        question: "What is the time complexity of two independent loops followed by one nested loop: for(i=0; i<n; i++) + for(i=0; i<n; i++) + for(i=0; i<n; i++) for(j=0; j<n; j++)?",
        options: [
            "O(n²)",
            "O(n³)",
            "O(2n + n²)",
            "O(n log n)"
        ],
        correct_answer: "O(n²)",
        explanation: "In asymptotic analysis, the highest-order term dominates. While the exact operation count is n + n + n² = n² + 2n, the dominant term is O(n²)."
    },
    {
        topic: "Binary Search",
        pattern: "Interval Halving",
        question: "Why should you calculate the midpoint as mid = left + (right - left) / 2 instead of (left + right) / 2?",
        options: [
            "To prevent integer overflow when (left + right) exceeds INT_MAX",
            "To ensure the division rounds toward positive infinity",
            "Because left + (right - left) / 2 executes in fewer CPU cycles",
            "Because right - left guarantees logarithmic time"
        ],
        correct_answer: "To prevent integer overflow when (left + right) exceeds INT_MAX",
        explanation: "If left and right are large positive integers close to INT_MAX (2^31 - 1), their sum left + right will overflow into negative values in standard 32-bit signed integers. left + (right - left) / 2 is mathematically identical and overflow-safe."
    },
    {
        topic: "Arrays",
        pattern: "Two Pointer",
        question: "When is the Two Pointer approach suitable for finding pairs with a specific condition?",
        options: [
            "When the array is sorted or monotonic, allowing directional pointer movements",
            "Only when the array has exactly 2 elements",
            "Whenever we have random unsorted numbers and cannot use extra space",
            "When the data structure is a singly linked list without random access"
        ],
        correct_answer: "When the array is sorted or monotonic, allowing directional pointer movements",
        explanation: "In a sorted array, if nums[left] + nums[right] < target, we know with certainty that increasing left increases the sum, and decreasing right decreases the sum, giving O(n) traversal without nested loops."
    },
    {
        topic: "Dynamic Programming",
        pattern: "Optimal Substructure",
        question: "In Climbing Stairs where you can take 1 or 2 steps, why is the answer for n steps equal to ways(n-1) + ways(n-2)?",
        options: [
            "Because the very last step to reach step n must have been taken from either step n-1 (1 step) or step n-2 (2 steps)",
            "Because dynamic programming always multiplies previous states",
            "Because step n always requires twice as many steps as step n-1",
            "Because binary decisions always yield powers of 2"
        ],
        correct_answer: "Because the very last step to reach step n must have been taken from either step n-1 (1 step) or step n-2 (2 steps)",
        explanation: "Any valid path reaching step n arrives either by a 1-step leap from n-1, or a 2-step leap from n-2. These two sets of paths are mutually exclusive and collectively exhaustive, so we sum them: dp[n] = dp[n-1] + dp[n-2]."
    },
    {
        topic: "Linked Lists",
        pattern: "Pointer Reversal",
        question: "When reversing a singly linked list iteratively, what temporary reference is required before updating curr->next = prev?",
        options: [
            "next = curr->next (storing the remaining forward list before breaking the link)",
            "head = prev->next",
            "tail = curr",
            "curr = prev"
        ],
        correct_answer: "next = curr->next (storing the remaining forward list before breaking the link)",
        explanation: "If you execute curr->next = prev without first saving curr->next, you lose the reference to the rest of the list, causing an irreversible disconnect."
    },
    {
        topic: "Recursion",
        pattern: "Base Case",
        question: "What is the primary cause of a Stack Overflow in recursive functions?",
        options: [
            "Missing or unreachable base case leading to unbounded recursive calls",
            "Using too many local integer variables",
            "Calling helper functions inside loops",
            "Passing parameters by reference"
        ],
        correct_answer: "Missing or unreachable base case leading to unbounded recursive calls",
        explanation: "Each recursive invocation places a new stack frame on the call stack. Without a valid terminating base case, the recursion continues until the call stack memory is exhausted."
    }
];

export async function seedRevisionQuestionsIfEmpty() {
    try {
        const { count, error } = await supabase
            .from("revision_questions")
            .select("id", { count: "exact", head: true });

        if (!error && count === 0) {
            console.log("Seeding revision questions into Supabase...");
            for (const q of CURATED_REVISION_QUESTIONS) {
                await supabase.from("revision_questions").insert(q);
            }
        }
    } catch (err) {
        console.warn("Revision questions seed note:", err?.message || err);
    }
}

export async function getRevisionQuestions(weakTopics = []) {
    try {
        await seedRevisionQuestionsIfEmpty();

        const { data: dbQuestions, error } = await supabase
            .from("revision_questions")
            .select("*");

        let allQuestions = dbQuestions || [];
        if (allQuestions.length === 0) {
            allQuestions = CURATED_REVISION_QUESTIONS.map((q, idx) => ({
                ...q,
                id: `rev-${idx + 1}`
            }));
        }

        // Prioritize questions matching weak topics
        if (Array.isArray(weakTopics) && weakTopics.length > 0) {
            const prioritized = [];
            const remaining = [];

            allQuestions.forEach(q => {
                const isWeak = weakTopics.some(
                    wt => wt.toLowerCase() === (q.topic || "").toLowerCase()
                );
                if (isWeak) {
                    prioritized.push(q);
                } else {
                    remaining.push(q);
                }
            });

            return [...prioritized, ...remaining];
        }

        return allQuestions;

    } catch (err) {
        console.error("Error fetching revision questions:", err);
        return CURATED_REVISION_QUESTIONS.map((q, idx) => ({
            ...q,
            id: `rev-${idx + 1}`
        }));
    }
}

export async function recordRevisionAttempt(userId, questionId, selectedAnswer, isCorrect) {
    if (!userId || !questionId) return;

    try {
        await supabase
            .from("revision_attempts")
            .insert({
                user_id: userId,
                question_id: questionId.startsWith("rev-") ? null : questionId,
                selected_answer: selectedAnswer,
                is_correct: isCorrect
            });
    } catch (err) {
        console.warn("Failed to record revision attempt:", err);
    }
}
