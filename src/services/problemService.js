import { supabase } from "../lib/supabase";
import { ALL_EXPANDED_PROBLEMS } from "../data/problems/index.js";

export const CURATED_PERMANENT_PROBLEMS = [
    {
        id: "b323477d-ffe3-45cb-b31b-4d617d4df51c",
        title: "Find Pair With Target Sum",
        topic: "Arrays",
        difficulty: "Easy",
        patterns: ["Hashing"],
        data_structures: ["Hash Map", "Array"],
        expected_time: "O(n)",
        expected_space: "O(n)",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
        constraints: "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nOnly one valid answer exists.",
        input_format: "vector<int>& nums, int target",
        output_format: "vector<int> (two indices)",
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0, 1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1, 2]",
                explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
            }
        ],
        hints: [
            "A brute-force approach checks all pairs using two nested loops. Can you do it in one pass?",
            "Can a Hash Map help you look up if the complement (target - nums[i]) has already been seen?",
            "Store each number's value and its index in the map as you iterate through the array."
        ],
        learning_objective: "Master lookup tables and time-space trade-offs using Hash Maps.",
        execution_config: {
            functionName: "twoSum",
            returnType: "vector<int>",
            parameters: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            comparisonType: "return_value"
        },
        source: "CodeMedic Library",
        is_generated: false
    },
    {
        id: "97163b67-703b-4e97-980a-7a559674667b",
        title: "Best Time to Buy and Sell Stock",
        topic: "Arrays",
        difficulty: "Easy",
        patterns: ["Greedy"],
        data_structures: ["Array"],
        expected_time: "O(n)",
        expected_space: "O(1)",
        description: "You are given an array prices where prices[i] is the price of a given stock on the ith day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
        constraints: "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
        input_format: "vector<int>& prices",
        output_format: "int (maximum profit)",
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
                explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
            },
            {
                input: "prices = [7,6,4,3,1]",
                output: "0",
                explanation: "In this case, no transactions are done and the max profit = 0."
            }
        ],
        hints: [
            "You need to find the maximum difference prices[j] - prices[i] where j > i.",
            "Keep track of the minimum purchase price seen so far as you iterate through the array.",
            "At each day, calculate the potential profit if sold today, and update the global maximum profit."
        ],
        learning_objective: "Understand single-pass greedy state tracking with O(1) auxiliary space.",
        execution_config: {
            functionName: "maxProfit",
            returnType: "int",
            parameters: [
                { name: "prices", type: "vector<int>&" }
            ],
            comparisonType: "return_value"
        },
        source: "CodeMedic Library",
        is_generated: false
    },
    {
        id: "24f70467-46d2-420d-a706-9a034acbaa90",
        title: "Reverse Linked List",
        topic: "Linked List",
        difficulty: "Easy",
        patterns: ["Recursion", "Two Pointer"],
        data_structures: ["Linked List"],
        expected_time: "O(n)",
        expected_space: "O(1)",
        description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        constraints: "The number of nodes in the list is the range [0, 5000].\n-5000 <= Node.val <= 5000",
        input_format: "ListNode* head",
        output_format: "ListNode* (reversed head)",
        examples: [
            {
                input: "head = [1,2,3,4,5]",
                output: "[5,4,3,2,1]",
                explanation: "The list is reversed from 1->2->3->4->5 to 5->4->3->2->1."
            },
            {
                input: "head = [1,2]",
                output: "[2,1]",
                explanation: "The list is reversed from 1->2 to 2->1."
            }
        ],
        hints: [
            "Think about manipulating the next pointer of each node to point to its predecessor.",
            "You will need three pointers: prev, curr, and next.",
            "Before reassigning curr->next to prev, remember to store curr->next in a temporary pointer."
        ],
        learning_objective: "Master in-place pointer manipulation and reference reassignment on linked nodes.",
        execution_config: {
            functionName: "reverseList",
            returnType: "ListNode*",
            parameters: [
                { name: "head", type: "ListNode*" }
            ],
            comparisonType: "return_value"
        },
        source: "CodeMedic Library",
        is_generated: false
    },
    {
        id: "6956a1d1-1f64-4e9b-91da-39a7be536eff",
        title: "Valid Anagram",
        topic: "Strings",
        difficulty: "Easy",
        patterns: ["Hashing"],
        data_structures: ["Hash Map", "String"],
        expected_time: "O(n)",
        expected_space: "O(1)",
        description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        constraints: "1 <= s.length, t.length <= 5 * 10^4\ns and t consist of lowercase English letters.",
        input_format: "string s, string t",
        output_format: "bool",
        examples: [
            {
                input: "s = \"anagram\", t = \"nagaram\"",
                output: "true",
                explanation: "Both strings contain 3 a's, 1 n, 1 g, 1 r, and 1 m."
            },
            {
                input: "s = \"rat\", t = \"car\"",
                output: "false",
                explanation: "The characters do not match."
            }
        ],
        hints: [
            "First check: if lengths are different, can they ever be anagrams?",
            "Count the frequency of each character in s and decrement for t.",
            "A fixed-size array of 26 integers is faster than an unordered_map for lowercase letters."
        ],
        learning_objective: "Implement frequency counting and character hashing.",
        execution_config: {
            functionName: "isAnagram",
            returnType: "bool",
            parameters: [
                { name: "s", type: "string" },
                { name: "t", type: "string" }
            ],
            comparisonType: "return_value"
        },
        source: "CodeMedic Library",
        is_generated: false
    },
    {
        id: "5e245669-4037-4f18-80a1-9d64d44ab7d8",
        title: "Binary Search",
        topic: "Binary Search",
        difficulty: "Easy",
        patterns: ["Binary Search"],
        data_structures: ["Array"],
        expected_time: "O(log n)",
        expected_space: "O(1)",
        description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.",
        constraints: "1 <= nums.length <= 10^4\n-10^4 < nums[i], target < 10^4\nAll the integers in nums are unique.\nnums is sorted in ascending order.",
        input_format: "vector<int>& nums, int target",
        output_format: "int (target index or -1)",
        examples: [
            {
                input: "nums = [-1,0,3,5,9,12], target = 9",
                output: "4",
                explanation: "9 exists in nums and its index is 4."
            },
            {
                input: "nums = [-1,0,3,5,9,12], target = 2",
                output: "-1",
                explanation: "2 does not exist in nums so return -1."
            }
        ],
        hints: [
            "Maintain two pointers: left at 0 and right at nums.length - 1.",
            "Compute mid = left + (right - left) / 2 to avoid integer overflow.",
            "Discard the half where the target cannot exist based on nums[mid] vs target."
        ],
        learning_objective: "Master boundary condition handling and interval halving in logarithmic search.",
        execution_config: {
            functionName: "search",
            returnType: "int",
            parameters: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            comparisonType: "return_value"
        },
        source: "CodeMedic Library",
        is_generated: false
    },
    {
        id: "9515edc3-d348-4e2e-a5a0-1e8b1c75092a",
        title: "Climbing Stairs",
        topic: "Dynamic Programming",
        difficulty: "Easy",
        patterns: ["Dynamic Programming"],
        data_structures: ["Array"],
        expected_time: "O(n)",
        expected_space: "O(1)",
        description: "You are climbing a staircase. It takes n steps to reach the top.\n\nEach time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        constraints: "1 <= n <= 45",
        input_format: "int n",
        output_format: "int (distinct ways)",
        examples: [
            {
                input: "n = 2",
                output: "2",
                explanation: "There are two ways to climb to the top: 1. 1 step + 1 step, 2. 2 steps."
            },
            {
                input: "n = 3",
                output: "3",
                explanation: "There are three ways: 1. 1 step + 1 step + 1 step, 2. 1 step + 2 steps, 3. 2 steps + 1 step."
            }
        ],
        hints: [
            "To reach step n, you must have come from step n-1 or step n-2.",
            "The recurrence relation is: ways(n) = ways(n-1) + ways(n-2).",
            "This is identical to the Fibonacci sequence. Can you solve it with O(1) space?"
        ],
        learning_objective: "Recognize overlapping subproblems and optimal substructure in 1D DP.",
        execution_config: {
            functionName: "climbStairs",
            returnType: "int",
            parameters: [
                { name: "n", type: "int" }
            ],
            comparisonType: "return_value"
        },
        source: "CodeMedic Library",
        is_generated: false
    },
    {
        id: "4c6107f0-077c-41fa-b9ee-4aa18d57f48a",
        title: "Maximum Subarray",
        topic: "Arrays",
        difficulty: "Medium",
        patterns: ["Prefix Sum", "Dynamic Programming"],
        data_structures: ["Array"],
        expected_time: "O(n)",
        expected_space: "O(1)",
        description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        constraints: "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
        input_format: "vector<int>& nums",
        output_format: "int (maximum sum)",
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6."
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1."
            },
            {
                input: "nums = [5,4,-1,7,8]",
                output: "23",
                explanation: "The subarray [5,4,-1,7,8] has the largest sum 23."
            }
        ],
        hints: [
            "If the current accumulated sum becomes negative, would keeping it help future elements?",
            "Kadane's Algorithm: at each index, decide whether to extend the existing subarray or start fresh from current element.",
            "current_max = max(nums[i], current_max + nums[i])"
        ],
        learning_objective: "Implement Kadane's algorithm for linear maximum contiguous subarray optimization.",
        execution_config: {
            functionName: "maxSubArray",
            returnType: "int",
            parameters: [
                { name: "nums", type: "vector<int>&" }
            ],
            comparisonType: "return_value"
        },
        source: "CodeMedic Library",
        is_generated: false
    }
];

/**
 * Ensures curated permanent problems are stored in Supabase problems table.
 */
export async function seedPermanentProblemsIfEmpty() {
    try {
        const { count, error } = await supabase
            .from("problems")
            .select("id", { count: "exact", head: true })
            .eq("is_generated", false);

        if (!error && count === 0) {
            console.log("Seeding permanent curated problems into Supabase...");
            for (const prob of CURATED_PERMANENT_PROBLEMS) {
                await supabase.from("problems").insert(prob);
            }
        }
    } catch (err) {
        console.warn("Seeding permanent problems note:", err?.message || err);
    }
}

/**
 * Fetches all problems available to the current user:
 * - Permanent shared problems (is_generated = false)
 * - User's private generated problems (generated_by = userId)
 * Computes status (Solved, Attempted, Not Solved) from problem_attempts.
 */
export async function getProblemsForUser(userId) {
    try {
        // Attempt to seed if empty
        await seedPermanentProblemsIfEmpty();

        // 1. Fetch problems from DB
        const { data: dbProblems, error: probError } = await supabase
            .from("problems")
            .select("*")
            .range(0, 999)
            .order("created_at", { ascending: false });

        const problemMap = new Map();

        // Populate baseline curated permanent problems
        for (const p of CURATED_PERMANENT_PROBLEMS) {
            problemMap.set(p.id, { ...p });
        }

        // Populate 455 expanded problems
        for (const p of ALL_EXPANDED_PROBLEMS) {
            problemMap.set(p.id, { ...p });
        }

        // Overlay records from DB (includes user-generated problems and any DB updates)
        if (dbProblems && Array.isArray(dbProblems)) {
            for (const p of dbProblems) {
                const existing = problemMap.get(p.id) || {};
                problemMap.set(p.id, {
                    ...existing,
                    ...p
                });
            }
        }

        const allProblems = Array.from(problemMap.values());

        // Filter problems: curated problems are shared, generated problems only for owner
        const userAccessibleProblems = allProblems.filter(p => 
            !p.is_generated || (userId && p.generated_by === userId)
        );

        // 2. Fetch user's attempts to calculate status per problem
        let userAttempts = [];
        if (userId) {
            const { data: attempts } = await supabase
                .from("problem_attempts")
                .select("problem_id, status")
                .eq("user_id", userId);
            userAttempts = attempts || [];
        }

        const solvedSet = new Set();
        const attemptedSet = new Set();

        userAttempts.forEach(att => {
            if (att.status?.toLowerCase() === "solved" || att.status?.toLowerCase() === "accepted") {
                solvedSet.add(att.problem_id);
            }
            attemptedSet.add(att.problem_id);
        });

        // 3. Attach status to each problem
        return userAccessibleProblems.map(prob => {
            let status = "Not Solved";
            if (solvedSet.has(prob.id)) {
                status = "Solved";
            } else if (attemptedSet.has(prob.id)) {
                status = "Attempted";
            }
            return {
                ...prob,
                status
            };
        });

    } catch (err) {
        console.error("Error in getProblemsForUser:", err);
        return [...CURATED_PERMANENT_PROBLEMS, ...ALL_EXPANDED_PROBLEMS].map((p) => ({
            ...p,
            status: "Not Solved"
        }));
    }
}
