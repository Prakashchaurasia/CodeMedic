import { createProblem } from "../problem_blueprints.mjs";

export function getHeapProblems() {
    return [
        // 1. Kth Largest Element in an Array
        createProblem({
            title: "Kth Largest Element in an Array",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Quickselect"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log k)",
            expectedSpace: "O(k)",
            description: "Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
            constraints: "1 <= k <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
            fnName: "findKthLargest",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[3, 2, 1, 5, 6, 4], 2],
                [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4]
            ],
            solver: (nums, k) => {
                const sorted = [...nums].sort((a, b) => b - a);
                return sorted[k - 1];
            }
        }),

        // 2. Top K Frequent Elements
        createProblem({
            title: "Top K Frequent Elements",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Hashing"],
            dataStructures: ["Priority Queue", "Hash Map"],
            expectedTime: "O(n log k)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums and an integer k, return the k most frequent elements sorted in ascending order.",
            constraints: "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\nk is in the range [1, the number of unique elements in the array].",
            fnName: "topKFrequent",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 1, 1, 2, 2, 3], 2],
                [[1], 1]
            ],
            solver: (nums, k) => {
                const count = {};
                for (const n of nums) count[n] = (count[n] || 0) + 1;
                const sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);
                return sorted.slice(0, k).map(Number).sort((a, b) => a - b);
            }
        }),

        // 3. Last Stone Weight
        createProblem({
            title: "Last Stone Weight",
            topic: "Heaps",
            difficulty: "Easy",
            patterns: ["Heap", "Simulation"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given an array of integers stones where stones[i] is the weight of the ith stone. Each turn, choose the heaviest two stones with weights x and y with x <= y: if x == y both destroyed; if x != y, stone of weight y - x remains. Return the weight of the last remaining stone (or 0).",
            constraints: "1 <= stones.length <= 30\n1 <= stones[i] <= 1000",
            fnName: "lastStoneWeight",
            returnType: "int",
            params: [{ name: "stones", type: "vector<int>&" }],
            rawExamples: [
                [[2, 7, 4, 1, 8, 1]],
                [[1]]
            ],
            solver: (stones) => {
                const arr = [...stones];
                while (arr.length > 1) {
                    arr.sort((a, b) => b - a);
                    const y = arr.shift();
                    const x = arr.shift();
                    if (y > x) arr.push(y - x);
                }
                return arr.length === 0 ? 0 : arr[0];
            }
        }),

        // 4. Relative Ranks
        createProblem({
            title: "Relative Ranks of Athletes",
            topic: "Heaps",
            difficulty: "Easy",
            patterns: ["Heap", "Sorting"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. Return an array answer where answer[i] is the rank: \"Gold Medal\", \"Silver Medal\", \"Bronze Medal\", or \"4\", \"5\", etc.",
            constraints: "n == score.length\n1 <= n <= 10^4\n0 <= score[i] <= 10^6\nAll the values in score are unique.",
            fnName: "findRelativeRanks",
            returnType: "vector<string>",
            params: [{ name: "score", type: "vector<int>&" }],
            rawExamples: [
                [[5, 4, 3, 2, 1]],
                [[10, 3, 8, 9, 4]]
            ],
            solver: (score) => {
                const sorted = [...score].sort((a, b) => b - a);
                const rankMap = new Map();
                for (let i = 0; i < sorted.length; i++) {
                    if (i === 0) rankMap.set(sorted[i], "Gold Medal");
                    else if (i === 1) rankMap.set(sorted[i], "Silver Medal");
                    else if (i === 2) rankMap.set(sorted[i], "Bronze Medal");
                    else rankMap.set(sorted[i], String(i + 1));
                }
                return score.map(s => rankMap.get(s));
            }
        }),

        // 5. Maximum Product of Two Elements in an Array
        createProblem({
            title: "Maximum Product of Two Elements in an Array",
            topic: "Heaps",
            difficulty: "Easy",
            patterns: ["Heap"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).",
            constraints: "2 <= nums.length <= 500\n1 <= nums[i] <= 10^3",
            fnName: "maxProduct",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[3, 4, 5, 2]],
                [[1, 5, 4, 5]],
                [[3, 7]]
            ],
            solver: (nums) => {
                const sorted = [...nums].sort((a, b) => b - a);
                return (sorted[0] - 1) * (sorted[1] - 1);
            }
        }),

        // 6. Minimum Cost to Connect Sticks
        createProblem({
            title: "Minimum Cost to Connect Sticks",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Greedy"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You have some number of sticks with positive integer lengths. You can connect any two sticks of lengths x and y by paying a cost of x + y. Return the minimum cost to connect all sticks into one stick.",
            constraints: "1 <= sticks.length <= 10^4\n1 <= sticks[i] <= 10^4",
            fnName: "connectSticks",
            returnType: "int",
            params: [{ name: "sticks", type: "vector<int>&" }],
            rawExamples: [
                [[2, 4, 3]],
                [[1, 8, 3, 5]],
                [[5]]
            ],
            solver: (sticks) => {
                const arr = [...sticks];
                let totalCost = 0;
                while (arr.length > 1) {
                    arr.sort((a, b) => a - b);
                    const s1 = arr.shift();
                    const s2 = arr.shift();
                    const cost = s1 + s2;
                    totalCost += cost;
                    arr.push(cost);
                }
                return totalCost;
            }
        }),

        // 7. Reduce Array Size to The Half
        createProblem({
            title: "Reduce Array Size to The Half",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Greedy"],
            dataStructures: ["Priority Queue", "Hash Map"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array. Return the minimum size of the set so that at least half of the integers of the array are removed.",
            constraints: "2 <= arr.length <= 10^5\narr.length is even.\n1 <= arr[i] <= 10^5",
            fnName: "minSetSize",
            returnType: "int",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[3, 3, 3, 3, 5, 5, 5, 2, 2, 7]],
                [[7, 7, 7, 7, 7, 7]]
            ],
            solver: (arr) => {
                const count = {};
                for (const x of arr) count[x] = (count[x] || 0) + 1;
                const freqs = Object.values(count).sort((a, b) => b - a);
                let removed = 0, setSize = 0;
                for (const f of freqs) {
                    removed += f;
                    setSize++;
                    if (removed >= arr.length / 2) break;
                }
                return setSize;
            }
        }),

        // 8. Find K Pairs with Smallest Sums Count
        createProblem({
            title: "K Pairs With Smallest Sums Smallest Sum",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(k log k)",
            expectedSpace: "O(k)",
            description: "You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k. Define a pair (u, v) which consists of one element from nums1 and one element from nums2. Return the sum of the kth pair with the smallest sum.",
            constraints: "1 <= nums1.length, nums2.length <= 10^4\n-10^9 <= nums1[i], nums2[i] <= 10^9\n1 <= k <= 1000",
            fnName: "kthSmallestPairSum",
            returnType: "int",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 7, 11], [2, 4, 6], 3],
                [[1, 1, 2], [1, 2, 3], 2]
            ],
            solver: (nums1, nums2, k) => {
                const sums = [];
                for (let i = 0; i < Math.min(nums1.length, k); i++) {
                    for (let j = 0; j < Math.min(nums2.length, k); j++) {
                        sums.push(nums1[i] + nums2[j]);
                    }
                }
                sums.sort((a, b) => a - b);
                return sums[k - 1];
            }
        }),

        // 9. Take Gifts From the Richest Pile
        createProblem({
            title: "Take Gifts From the Richest Pile",
            topic: "Heaps",
            difficulty: "Easy",
            patterns: ["Heap", "Simulation"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(k log n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array gifts denoting the number of gifts in various piles. Every second for k seconds: choose the pile with the maximum gifts and leave behind floor(sqrt(gifts)). Return the remaining number of gifts.",
            constraints: "1 <= gifts.length <= 1000\n1 <= gifts[i] <= 10^9\n1 <= k <= 1000",
            fnName: "pickGifts",
            returnType: "long long",
            params: [
                { name: "gifts", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[25, 64, 9, 4, 100], 4],
                [[1, 1, 1, 1], 4]
            ],
            solver: (gifts, k) => {
                const arr = [...gifts];
                for (let i = 0; i < k; i++) {
                    arr.sort((a, b) => b - a);
                    arr[0] = Math.floor(Math.sqrt(arr[0]));
                }
                return arr.reduce((a, b) => a + b, 0);
            }
        }),

        // 10. Minimum Operations to Halve Array Sum
        createProblem({
            title: "Minimum Operations to Halve Array Sum",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Greedy"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given an array nums of positive integers. In each operation, you can choose any number from nums and reduce it to exactly half the number. Return the minimum number of operations to reduce the sum of nums by at least half.",
            constraints: "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^7",
            fnName: "halveArray",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[5, 19, 8, 1]],
                [[3, 8, 20]]
            ],
            solver: (nums) => {
                const sum = nums.reduce((a, b) => a + b, 0);
                let target = sum / 2;
                const arr = nums.map(Number);
                let ops = 0;
                while (target > 0) {
                    arr.sort((a, b) => b - a);
                    const half = arr[0] / 2;
                    arr[0] = half;
                    target -= half;
                    ops++;
                }
                return ops;
            }
        }),

        // 11. Find Subsequence of Length K With the Largest Sum
        createProblem({
            title: "Find Subsequence of Length K With Largest Sum",
            topic: "Heaps",
            difficulty: "Easy",
            patterns: ["Heap", "Sorting"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest possible sum. Return the subsequence retaining the original order.",
            constraints: "1 <= nums.length <= 1000\n-10^5 <= nums[i] <= 10^5\n1 <= k <= nums.length",
            fnName: "maxSubsequence",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[2, 1, 3, 3], 2],
                [[-1, -2, 3, 4], 3],
                [[3, 4, 3, 3], 2]
            ],
            solver: (nums, k) => {
                const indexed = nums.map((v, i) => [v, i]);
                indexed.sort((a, b) => b[0] - a[0]);
                const chosen = indexed.slice(0, k);
                chosen.sort((a, b) => a[1] - b[1]);
                return chosen.map(x => x[0]);
            }
        }),

        // 12. Maximum Subsequence Score
        createProblem({
            title: "Maximum Subsequence Score",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Greedy", "Sorting"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "Given two 0-indexed integer arrays nums1 and nums2 of equal length n and an integer k. Choose a subsequence of indices of length k such that (sum of nums1 elements) * (min of nums2 elements) is maximized. Return the maximum possible score.",
            constraints: "n == nums1.length == nums2.length\n1 <= n <= 10^5\n0 <= nums1[i], nums2[i] <= 10^5\n1 <= k <= n",
            fnName: "maxScore",
            returnType: "long long",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 3, 3, 2], [2, 1, 3, 4], 3],
                [[4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1]
            ],
            solver: (nums1, nums2, k) => {
                const pairs = nums1.map((v, i) => [v, nums2[i]]);
                pairs.sort((a, b) => b[1] - a[1]);
                let maxScore = 0;
                const heap = [];
                let sum = 0;
                for (const [v1, v2] of pairs) {
                    heap.push(v1);
                    sum += v1;
                    if (heap.length > k) {
                        heap.sort((a, b) => a - b);
                        sum -= heap.shift();
                    }
                    if (heap.length === k) {
                        maxScore = Math.max(maxScore, sum * v2);
                    }
                }
                return maxScore;
            }
        }),

        // 13. Reorganize String Return Length
        createProblem({
            title: "Maximum Frequency in Reorganize String",
            topic: "Heaps",
            difficulty: "Easy",
            patterns: ["Heap", "Hashing"],
            dataStructures: ["Priority Queue", "Hash Map"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s, return the frequency of the most common character in s.",
            constraints: "1 <= s.length <= 500",
            fnName: "maxCharFrequency",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["aab"],
                ["aaab"],
                ["leetcode"]
            ],
            solver: (s) => {
                const count = {};
                for (const c of s) count[c] = (count[c] || 0) + 1;
                return Math.max(...Object.values(count));
            }
        }),

        // 14. Sort Characters By Frequency Descending
        createProblem({
            title: "Sort Array by Value Counts Descending",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Hashing"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.",
            constraints: "1 <= nums.length <= 100\n-100 <= nums[i] <= 100",
            fnName: "frequencySort",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 1, 2, 2, 2, 3]],
                [[2, 3, 1, 3, 2]],
                [[-1, 1, -6, 4, 5, -6, 1, 4, 1]]
            ],
            solver: (nums) => {
                const count = {};
                for (const x of nums) count[x] = (count[x] || 0) + 1;
                return [...nums].sort((a, b) => count[a] - count[b] || b - a);
            }
        }),

        // 15. Make Array Zero by Subtracting Equal Amounts
        createProblem({
            title: "Make Array Zero by Subtracting Equal Amounts",
            topic: "Heaps",
            difficulty: "Easy",
            patterns: ["Heap", "Hash Set"],
            dataStructures: ["Priority Queue", "Hash Set"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given a non-negative integer array nums. In one operation, you must choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums, and subtract x from each positive element in nums. Return minimum operations to make all elements zero.",
            constraints: "1 <= nums.length <= 100\n0 <= nums[i] <= 100",
            fnName: "minimumOperations",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 5, 0, 3, 5]],
                [[0]]
            ],
            solver: (nums) => new Set(nums.filter(x => x > 0)).size
        }),

        // 16. The K Weakest Rows in a Matrix
        createProblem({
            title: "The K Weakest Rows in a Matrix",
            topic: "Heaps",
            difficulty: "Easy",
            patterns: ["Heap", "Sorting"],
            dataStructures: ["Priority Queue", "Matrix"],
            expectedTime: "O(m log m)",
            expectedSpace: "O(m)",
            description: "You are given an m x n binary matrix of 1's (soldiers) and 0's (civilians). The soldiers are positioned in front of the civilians. Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.",
            constraints: "m == mat.length\nn == mat[i].length\n2 <= n, m <= 100\n1 <= k <= m",
            fnName: "kWeakestRows",
            returnType: "vector<int>",
            params: [
                { name: "mat", type: "vector<vector<int>>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]], 3],
                [[[1, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0]], 2]
            ],
            solver: (mat, k) => {
                const rows = mat.map((r, i) => [r.filter(x => x === 1).length, i]);
                rows.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
                return rows.slice(0, k).map(x => x[1]);
            }
        }),

        // 17. Find Median from Data Stream Simulation
        createProblem({
            title: "Median of Sorted Numbers Array",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Two Pointers"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given a sorted array of numbers nums, return the median as a floating-point number.",
            constraints: "1 <= nums.length <= 10^4",
            fnName: "findMedian",
            returnType: "double",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3]],
                [[1, 2, 3, 4]]
            ],
            solver: (nums) => {
                const n = nums.length;
                if (n % 2 === 1) return nums[Math.floor(n / 2)];
                return (nums[n / 2 - 1] + nums[n / 2]) / 2;
            }
        }),

        // 18. Maximum Average Pass Ratio
        createProblem({
            title: "Maximum Number of Events That Can Be Attended",
            topic: "Heaps",
            difficulty: "Medium",
            patterns: ["Heap", "Greedy"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given an array of events where events[i] = [startDay_i, endDay_i]. Every event i starts at startDay_i and ends at endDay_i. You can attend at most one event at any day. Return the maximum number of events you can attend.",
            constraints: "1 <= events.length <= 10^5\nevents[i].length == 2\n1 <= startDay_i <= endDay_i <= 10^5",
            fnName: "maxEvents",
            returnType: "int",
            params: [{ name: "events", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2], [2, 3], [3, 4]]],
                [[[1, 2], [2, 3], [3, 4], [1, 2]]]
            ],
            solver: (events) => {
                events.sort((a, b) => a[0] - b[0]);
                const heap = [];
                let day = 0, i = 0, ans = 0;
                while (i < events.length || heap.length > 0) {
                    if (heap.length === 0) day = events[i][0];
                    while (i < events.length && events[i][0] <= day) {
                        heap.push(events[i++][1]);
                    }
                    heap.sort((a, b) => a - b);
                    heap.shift();
                    ans++;
                    day++;
                    while (heap.length > 0 && heap[0] < day) heap.shift();
                }
                return ans;
            }
        }),

        // 19. Smallest Range Covering Elements from K Lists Range Length
        createProblem({
            title: "Minimum Elements Difference Among K Groups",
            topic: "Heaps",
            difficulty: "Hard",
            patterns: ["Heap", "Sliding Window"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log k)",
            expectedSpace: "O(k)",
            description: "You have k lists of sorted integers. Find the minimum span (max - min) of a range that includes at least one number from each of the k lists.",
            constraints: "nums.length == k\n1 <= k <= 3500\n1 <= nums[i].length <= 50",
            fnName: "smallestRangeSpan",
            returnType: "int",
            params: [{ name: "nums", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]],
                [[[1, 2, 3], [1, 2, 3], [1, 2, 3]]]
            ],
            solver: (nums) => {
                const elements = [];
                for (let i = 0; i < nums.length; i++) {
                    for (const x of nums[i]) elements.push([x, i]);
                }
                elements.sort((a, b) => a[0] - b[0]);
                const count = new Map();
                let l = 0, minSpan = Infinity;
                for (let r = 0; r < elements.length; r++) {
                    const [, group] = elements[r];
                    count.set(group, (count.get(group) || 0) + 1);
                    while (count.size === nums.length) {
                        minSpan = Math.min(minSpan, elements[r][0] - elements[l][0]);
                        const leftGroup = elements[l][1];
                        count.set(leftGroup, count.get(leftGroup) - 1);
                        if (count.get(leftGroup) === 0) count.delete(leftGroup);
                        l++;
                    }
                }
                return minSpan;
            }
        }),

        // 20. IPO Maximum Capital
        createProblem({
            title: "IPO Maximum Capital",
            topic: "Heaps",
            difficulty: "Hard",
            patterns: ["Heap", "Greedy"],
            dataStructures: ["Priority Queue", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "Suppose LeetCode will start its IPO soon. You are given n projects with profits and minimum capital required. Given k projects and initial capital w, return the final maximized capital.",
            constraints: "1 <= k <= 10^5\n0 <= w <= 10^9\nn == profits.length == capital.length\n1 <= n <= 10^5\n0 <= profits[i] <= 10^4\n0 <= capital[i] <= 10^9",
            fnName: "findMaximizedCapital",
            returnType: "int",
            params: [
                { name: "k", type: "int" },
                { name: "w", type: "int" },
                { name: "profits", type: "vector<int>&" },
                { name: "capital", type: "vector<int>&" }
            ],
            rawExamples: [
                [2, 0, [1, 2, 3], [0, 1, 1]],
                [3, 0, [1, 2, 3], [0, 1, 2]]
            ],
            solver: (k, w, profits, capital) => {
                const projects = profits.map((p, i) => [capital[i], p]);
                projects.sort((a, b) => a[0] - b[0]);
                let curW = w, i = 0;
                const heap = [];
                for (let step = 0; step < k; step++) {
                    while (i < projects.length && projects[i][0] <= curW) {
                        heap.push(projects[i++][1]);
                    }
                    if (heap.length === 0) break;
                    heap.sort((a, b) => b - a);
                    curW += heap.shift();
                }
                return curW;
            }
        })
    ];
}
