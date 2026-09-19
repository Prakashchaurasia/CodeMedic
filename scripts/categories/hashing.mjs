import { createProblem } from "../problem_blueprints.mjs";

export function getHashingProblems() {
    return [
        // 1. Contains Duplicate
        createProblem({
            title: "Contains Duplicate",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            constraints: "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
            fnName: "containsDuplicate",
            returnType: "bool",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 1]],
                [[1, 2, 3, 4]],
                [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]]
            ],
            solver: (nums) => {
                const set = new Set();
                for (const n of nums) {
                    if (set.has(n)) return true;
                    set.add(n);
                }
                return false;
            }
        }),

        // 2. Contains Duplicate II
        createProblem({
            title: "Contains Duplicate II",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Sliding Window", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(min(n, k))",
            description: "Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.",
            constraints: "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9\n0 <= k <= 10^5",
            fnName: "containsNearbyDuplicate",
            returnType: "bool",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 1], 3],
                [[1, 0, 1, 1], 1],
                [[1, 2, 3, 1, 2, 3], 2]
            ],
            solver: (nums, k) => {
                const map = new Map();
                for (let i = 0; i < nums.length; i++) {
                    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true;
                    map.set(nums[i], i);
                }
                return false;
            }
        }),

        // 3. Subarray Sum Equals K
        createProblem({
            title: "Subarray Sum Equals K",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Prefix Sum", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
            constraints: "1 <= nums.length <= 2 * 10^4\n-1000 <= nums[i] <= 1000\n-10^7 <= k <= 10^7",
            fnName: "subarraySum",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 1, 1], 2],
                [[1, 2, 3], 3]
            ],
            solver: (nums, k) => {
                const map = new Map();
                map.set(0, 1);
                let sum = 0, count = 0;
                for (const n of nums) {
                    sum += n;
                    if (map.has(sum - k)) count += map.get(sum - k);
                    map.set(sum, (map.get(sum) || 0) + 1);
                }
                return count;
            }
        }),

        // 4. Longest Consecutive Sequence
        createProblem({
            title: "Longest Consecutive Sequence",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(n) runtime.",
            constraints: "0 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
            fnName: "longestConsecutive",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[100, 4, 200, 1, 3, 2]],
                [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]]
            ],
            solver: (nums) => {
                if (!nums || nums.length === 0) return 0;
                const set = new Set(nums);
                let maxStreak = 0;
                for (const n of set) {
                    if (!set.has(n - 1)) {
                        let cur = n;
                        let streak = 1;
                        while (set.has(cur + 1)) {
                            cur++;
                            streak++;
                        }
                        maxStreak = Math.max(maxStreak, streak);
                    }
                }
                return maxStreak;
            }
        }),

        // 5. Intersection of Two Arrays
        createProblem({
            title: "Intersection of Two Arrays",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(n + m)",
            description: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and sorted in ascending order.",
            constraints: "1 <= nums1.length, nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 1000",
            fnName: "intersection",
            returnType: "vector<int>",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 2, 1], [2, 2]],
                [[4, 9, 5], [9, 4, 9, 8, 4]]
            ],
            solver: (nums1, nums2) => {
                const s1 = new Set(nums1);
                const res = new Set();
                for (const n of nums2) {
                    if (s1.has(n)) res.add(n);
                }
                return Array.from(res).sort((a, b) => a - b);
            }
        }),

        // 6. Intersection of Two Arrays II
        createProblem({
            title: "Intersection of Two Arrays II",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(min(n, m))",
            description: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays. Return the result sorted in ascending order.",
            constraints: "1 <= nums1.length, nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 1000",
            fnName: "intersect",
            returnType: "vector<int>",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 2, 1], [2, 2]],
                [[4, 9, 5], [9, 4, 9, 8, 4]]
            ],
            solver: (nums1, nums2) => {
                const map = {};
                for (const n of nums1) map[n] = (map[n] || 0) + 1;
                const res = [];
                for (const n of nums2) {
                    if (map[n] > 0) {
                        res.push(n);
                        map[n]--;
                    }
                }
                return res.sort((a, b) => a - b);
            }
        }),

        // 7. Four Sum II Count
        createProblem({
            title: "Four Sum II Count",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n^2)",
            description: "Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0.",
            constraints: "n == nums1.length == nums2.length == nums3.length == nums4.length\n1 <= n <= 200\n-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28 - 1",
            fnName: "fourSumCount",
            returnType: "int",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" },
                { name: "nums3", type: "vector<int>&" },
                { name: "nums4", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2], [-2, -1], [-1, 2], [0, 2]],
                [[0], [0], [0], [0]]
            ],
            solver: (nums1, nums2, nums3, nums4) => {
                const sumMap = new Map();
                for (const a of nums1) {
                    for (const b of nums2) {
                        sumMap.set(a + b, (sumMap.get(a + b) || 0) + 1);
                    }
                }
                let count = 0;
                for (const c of nums3) {
                    for (const d of nums4) {
                        const target = -(c + d);
                        if (sumMap.has(target)) count += sumMap.get(target);
                    }
                }
                return count;
            }
        }),

        // 8. Number of Good Pairs
        createProblem({
            title: "Number of Good Pairs",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.",
            constraints: "1 <= nums.length <= 100\n1 <= nums[i] <= 100",
            fnName: "numIdenticalPairs",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 1, 1, 3]],
                [[1, 1, 1, 1]],
                [[1, 2, 3]]
            ],
            solver: (nums) => {
                const count = {};
                let pairs = 0;
                for (const n of nums) {
                    if (count[n]) pairs += count[n];
                    count[n] = (count[n] || 0) + 1;
                }
                return pairs;
            }
        }),

        // 9. Unique Number of Occurrences
        createProblem({
            title: "Unique Number of Occurrences",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Hash Set"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.",
            constraints: "1 <= arr.length <= 1000\n-1000 <= arr[i] <= 1000",
            fnName: "uniqueOccurrences",
            returnType: "bool",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 2, 1, 1, 3]],
                [[1, 2]],
                [[-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]]
            ],
            solver: (arr) => {
                const freq = {};
                for (const n of arr) freq[n] = (freq[n] || 0) + 1;
                const occ = Object.values(freq);
                return new Set(occ).size === occ.length;
            }
        }),

        // 10. Jewels and Stones
        createProblem({
            title: "Jewels and Stones Count",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "String"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(n)",
            description: "You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.",
            constraints: "1 <= jewels.length, stones.length <= 50\njewels and stones consist of only English letters.\nAll the characters of jewels are unique.",
            fnName: "numJewelsInStones",
            returnType: "int",
            params: [
                { name: "jewels", type: "string" },
                { name: "stones", type: "string" }
            ],
            rawExamples: [
                ["aA", "aAAbbbb"],
                ["z", "ZZ"]
            ],
            solver: (jewels, stones) => {
                const set = new Set(jewels.split(""));
                let count = 0;
                for (const s of stones) {
                    if (set.has(s)) count++;
                }
                return count;
            }
        }),

        // 11. Ransom Note Can Construct
        createProblem({
            title: "Ransom Note Can Construct",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(1)",
            description: "Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.",
            constraints: "1 <= ransomNote.length, magazine.length <= 10^5\nransomNote and magazine consist of lowercase English letters.",
            fnName: "canConstruct",
            returnType: "bool",
            params: [
                { name: "ransomNote", type: "string" },
                { name: "magazine", type: "string" }
            ],
            rawExamples: [
                ["a", "b"],
                ["aa", "ab"],
                ["aa", "aab"]
            ],
            solver: (ransomNote, magazine) => {
                const count = {};
                for (const c of magazine) count[c] = (count[c] || 0) + 1;
                for (const c of ransomNote) {
                    if (!count[c]) return false;
                    count[c]--;
                }
                return true;
            }
        }),

        // 12. Isomorphic Strings
        createProblem({
            title: "Isomorphic Strings",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.",
            constraints: "1 <= s.length <= 5 * 10^4\nt.length == s.length\ns and t consist of any valid ascii character.",
            fnName: "isIsomorphic",
            returnType: "bool",
            params: [
                { name: "s", type: "string" },
                { name: "t", type: "string" }
            ],
            rawExamples: [
                ["egg", "add"],
                ["foo", "bar"],
                ["paper", "title"]
            ],
            solver: (s, t) => {
                if (s.length !== t.length) return false;
                const m1 = {}, m2 = {};
                for (let i = 0; i < s.length; i++) {
                    if (m1[s[i]] !== m2[t[i]]) return false;
                    m1[s[i]] = i + 1;
                    m2[t[i]] = i + 1;
                }
                return true;
            }
        }),

        // 13. Distribute Candies
        createProblem({
            title: "Distribute Candies",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. The doctor advised Alice to only eat n / 2 of the candies she has. Return the maximum number of different types of candies she can eat.",
            constraints: "n == candyType.length\n2 <= n <= 10^4\nn is even.\n-10^5 <= candyType[i] <= 10^5",
            fnName: "distributeCandies",
            returnType: "int",
            params: [{ name: "candyType", type: "vector<int>&" }],
            rawExamples: [
                [[1, 1, 2, 2, 3, 3]],
                [[1, 1, 2, 3]],
                [[6, 6, 6, 6]]
            ],
            solver: (candyType) => {
                const types = new Set(candyType).size;
                return Math.min(types, candyType.length / 2);
            }
        }),

        // 14. Find Lucky Integer in an Array
        createProblem({
            title: "Find Lucky Integer in an Array",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value. Return the largest lucky integer in the array. If there is no lucky integer return -1.",
            constraints: "1 <= arr.length <= 500\n1 <= arr[i] <= 500",
            fnName: "findLucky",
            returnType: "int",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[2, 2, 3, 4]],
                [[1, 2, 2, 3, 3, 3]],
                [[2, 2, 2, 3, 3]]
            ],
            solver: (arr) => {
                const count = {};
                for (const n of arr) count[n] = (count[n] || 0) + 1;
                let maxLucky = -1;
                for (const k in count) {
                    if (Number(k) === count[k]) maxLucky = Math.max(maxLucky, Number(k));
                }
                return maxLucky;
            }
        }),

        // 15. Contiguous Array Max Length
        createProblem({
            title: "Contiguous Array Max Length",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Prefix Sum", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.",
            constraints: "1 <= nums.length <= 10^5\nnums[i] is either 0 or 1.",
            fnName: "findMaxLength",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[0, 1]],
                [[0, 1, 0]],
                [[0, 0, 1, 0, 0, 0, 1, 1]]
            ],
            solver: (nums) => {
                const map = new Map();
                map.set(0, -1);
                let maxLen = 0, count = 0;
                for (let i = 0; i < nums.length; i++) {
                    count += nums[i] === 1 ? 1 : -1;
                    if (map.has(count)) {
                        maxLen = Math.max(maxLen, i - map.get(count));
                    } else {
                        map.set(count, i);
                    }
                }
                return maxLen;
            }
        }),

        // 16. Subarray Sums Divisible by K
        createProblem({
            title: "Subarray Sums Divisible by K",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Prefix Sum", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(k)",
            description: "Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.",
            constraints: "1 <= nums.length <= 3 * 10^4\n-10^4 <= nums[i] <= 10^4\n2 <= k <= 10^4",
            fnName: "subarraysDivByK",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[4, 5, 0, -2, -3, 1], 5],
                [[5], 9]
            ],
            solver: (nums, k) => {
                const map = new Map();
                map.set(0, 1);
                let sum = 0, count = 0;
                for (const n of nums) {
                    sum = (sum + n) % k;
                    if (sum < 0) sum += k;
                    if (map.has(sum)) count += map.get(sum);
                    map.set(sum, (map.get(sum) || 0) + 1);
                }
                return count;
            }
        }),

        // 17. Continuous Subarray Sum
        createProblem({
            title: "Continuous Subarray Sum Exists",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Prefix Sum", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(min(n, k))",
            description: "Given an integer array nums and an integer k, return true if nums has a good subarray, or false otherwise. A good subarray is a subarray of at least length 2 whose elements sum up to a multiple of k.",
            constraints: "1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^9\n1 <= k <= 2^31 - 1",
            fnName: "checkSubarraySum",
            returnType: "bool",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[23, 2, 4, 6, 7], 6],
                [[23, 2, 6, 4, 7], 6],
                [[23, 2, 6, 4, 7], 13]
            ],
            solver: (nums, k) => {
                const map = new Map();
                map.set(0, -1);
                let sum = 0;
                for (let i = 0; i < nums.length; i++) {
                    sum = (sum + nums[i]) % k;
                    if (map.has(sum)) {
                        if (i - map.get(sum) > 1) return true;
                    } else {
                        map.set(sum, i);
                    }
                }
                return false;
            }
        }),

        // 18. Degree of an Array
        createProblem({
            title: "Degree of an Array Shortest Subarray",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements. Find the smallest length of a contiguous subarray of nums that has the same degree as nums.",
            constraints: "1 <= nums.length <= 50,000\n0 <= nums[i] < 50,000",
            fnName: "findShortestSubArray",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 2, 3, 1]],
                [[1, 2, 2, 3, 1, 4, 2]]
            ],
            solver: (nums) => {
                const left = {}, right = {}, count = {};
                for (let i = 0; i < nums.length; i++) {
                    const x = nums[i];
                    if (left[x] === undefined) left[x] = i;
                    right[x] = i;
                    count[x] = (count[x] || 0) + 1;
                }
                let degree = Math.max(...Object.values(count));
                let ans = nums.length;
                for (const x in count) {
                    if (count[x] === degree) {
                        ans = Math.min(ans, right[x] - left[x] + 1);
                    }
                }
                return ans;
            }
        }),

        // 19. Set Mismatch
        createProblem({
            title: "Set Mismatch",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, one number got duplicated to another number in the set, which results in repetition of one number and loss of another number. Find [duplicate, missing].",
            constraints: "2 <= nums.length <= 10^4\n1 <= nums[i] <= 10^4",
            fnName: "findErrorNums",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 2, 4]],
                [[1, 1]]
            ],
            solver: (nums) => {
                const n = nums.length;
                const count = new Array(n + 1).fill(0);
                for (const x of nums) count[x]++;
                let dup = -1, missing = -1;
                for (let i = 1; i <= n; i++) {
                    if (count[i] === 2) dup = i;
                    if (count[i] === 0) missing = i;
                }
                return [dup, missing];
            }
        }),

        // 20. Check If Array Pairs Are Divisible by k
        createProblem({
            title: "Check If Array Pairs Are Divisible by k",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Hashing", "Math"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(k)",
            description: "Given an array of integers arr of even length n and an integer k. We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k. Return true If you can find a way to do that or false otherwise.",
            constraints: "arr.length == n\n1 <= n <= 10^5\nn is even.\n-10^9 <= arr[i] <= 10^9\n1 <= k <= 10^5",
            fnName: "canArrange",
            returnType: "bool",
            params: [
                { name: "arr", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5],
                [[1, 2, 3, 4, 5, 6], 7],
                [[1, 2, 3, 4, 5, 6], 10]
            ],
            solver: (arr, k) => {
                const rem = new Array(k).fill(0);
                for (const x of arr) {
                    const r = ((x % k) + k) % k;
                    rem[r]++;
                }
                if (rem[0] % 2 !== 0) return false;
                for (let i = 1; i <= Math.floor(k / 2); i++) {
                    if (i === k - i) {
                        if (rem[i] % 2 !== 0) return false;
                    } else if (rem[i] !== rem[k - i]) {
                        return false;
                    }
                }
                return true;
            }
        }),

        // 21. Minimum Index Sum of Two Lists
        createProblem({
            title: "Minimum Index Sum of Two Lists",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(n)",
            description: "Given two arrays of strings list1 and list2, find the common strings with the least index sum. Return all the common strings with the least index sum sorted alphabetically.",
            constraints: "1 <= list1.length, list2.length <= 1000\n1 <= list1[i].length, list2[i].length <= 30\nlist1 and list2 consist of spaces ' ' and English letters.\nAll strings of list1 and list2 are unique within each list.",
            fnName: "findRestaurant",
            returnType: "vector<string>",
            params: [
                { name: "list1", type: "vector<string>&" },
                { name: "list2", type: "vector<string>&" }
            ],
            rawExamples: [
                [["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]],
                [["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]]
            ],
            solver: (list1, list2) => {
                const map = new Map();
                for (let i = 0; i < list1.length; i++) map.set(list1[i], i);
                let minSum = Infinity;
                let res = [];
                for (let j = 0; j < list2.length; j++) {
                    const w = list2[j];
                    if (map.has(w)) {
                        const sum = j + map.get(w);
                        if (sum < minSum) {
                            minSum = sum;
                            res = [w];
                        } else if (sum === minSum) {
                            res.push(w);
                        }
                    }
                }
                return res.sort();
            }
        }),

        // 22. Sort Characters By Frequency
        createProblem({
            title: "Sort Characters By Frequency",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Hashing", "Sorting"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n log k)",
            expectedSpace: "O(n)",
            description: "Given a string s, sort it in decreasing order based on the frequency of the characters. If frequencies are equal, alphabetical tie-breaking applies.",
            constraints: "1 <= s.length <= 5 * 10^5\ns consists of uppercase and lowercase English letters and digits.",
            fnName: "frequencySort",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["tree"],
                ["cccaaa"],
                ["Aabb"]
            ],
            solver: (s) => {
                const count = {};
                for (const c of s) count[c] = (count[c] || 0) + 1;
                return Object.keys(count)
                    .sort((a, b) => count[b] - count[a] || a.localeCompare(b))
                    .map(c => c.repeat(count[c]))
                    .join("");
            }
        }),

        // 23. Find Players With Zero or One Losses
        createProblem({
            title: "Find Players With Zero Losses Count",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array matches where matches[i] = [winner_i, loser_i] indicates that the player winner_i defeated player loser_i in a match. Return the count of players that have not lost any matches.",
            constraints: "1 <= matches.length <= 10^5\nmatches[i].length == 2\n1 <= winner_i, loser_i <= 10^5\nwinner_i != loser_i",
            fnName: "findUndefeatedPlayersCount",
            returnType: "int",
            params: [{ name: "matches", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]],
                [[[2, 3], [1, 3], [5, 4], [6, 4]]]
            ],
            solver: (matches) => {
                const losses = new Map();
                for (const [w, l] of matches) {
                    if (!losses.has(w)) losses.set(w, 0);
                    losses.set(l, (losses.get(l) || 0) + 1);
                }
                let zeroLosses = 0;
                for (const [p, count] of losses.entries()) {
                    if (count === 0) zeroLosses++;
                }
                return zeroLosses;
            }
        }),

        // 24. Optimal Partition of String
        createProblem({
            title: "Optimal Partition of String",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Greedy", "Hashing"],
            dataStructures: ["Hash Set", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. Return the minimum number of substrings in such a partition.",
            constraints: "1 <= s.length <= 10^5\ns consists of only English lowercase letters.",
            fnName: "partitionString",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["abacaba"],
                ["ssssss"]
            ],
            solver: (s) => {
                let count = 1;
                let seen = new Set();
                for (const c of s) {
                    if (seen.has(c)) {
                        count++;
                        seen.clear();
                    }
                    seen.add(c);
                }
                return count;
            }
        }),

        // 25. Destination City
        createProblem({
            title: "Destination City",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given the array paths, where paths[i] = [cityA_i, cityB_i] means there exists a direct path from cityA to cityB. Return the destination city, that is, the city without any path outgoing to another city.",
            constraints: "1 <= paths.length <= 100\npaths[i].length == 2\n1 <= cityA_i.length, cityB_i.length <= 10\ncityA_i != cityB_i",
            fnName: "destCity",
            returnType: "string",
            params: [{ name: "paths", type: "vector<vector<string>>&" }],
            rawExamples: [
                [[["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]],
                [[["B", "C"], ["D", "B"], ["C", "A"]]],
                [[["A", "Z"]]]
            ],
            solver: (paths) => {
                const departures = new Set(paths.map(p => p[0]));
                for (const [start, end] of paths) {
                    if (!departures.has(end)) return end;
                }
                return "";
            }
        }),

        // 26. Maximum Number of Pairs in Array
        createProblem({
            title: "Maximum Number of Pairs in Array",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given a 0-indexed integer array nums. In one operation you may form a pair of equal elements and remove them. Return an integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers.",
            constraints: "1 <= nums.length <= 100\n0 <= nums[i] <= 100",
            fnName: "numberOfPairs",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 3, 2, 1, 3, 2, 2]],
                [[1, 1]],
                [[0]]
            ],
            solver: (nums) => {
                const count = {};
                for (const n of nums) count[n] = (count[n] || 0) + 1;
                let pairs = 0, leftovers = 0;
                for (const k in count) {
                    pairs += Math.floor(count[k] / 2);
                    leftovers += count[k] % 2;
                }
                return [pairs, leftovers];
            }
        }),

        // 27. Find the Difference of Two Arrays
        createProblem({
            title: "Find the Difference of Two Arrays",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(n + m)",
            description: "Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where answer[0] is a list of all distinct integers in nums1 which are not present in nums2, and answer[1] is in nums2 not in nums1. Sort both inner lists in ascending order.",
            constraints: "1 <= nums1.length, nums2.length <= 1000\n-1000 <= nums1[i], nums2[i] <= 1000",
            fnName: "findDifference",
            returnType: "vector<vector<int>>",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3], [2, 4, 6]],
                [[1, 2, 3, 3], [1, 1, 2, 2]]
            ],
            solver: (nums1, nums2) => {
                const s1 = new Set(nums1);
                const s2 = new Set(nums2);
                const d1 = Array.from(s1).filter(x => !s2.has(x)).sort((a, b) => a - b);
                const d2 = Array.from(s2).filter(x => !s1.has(x)).sort((a, b) => a - b);
                return [d1, d2];
            }
        }),

        // 28. Two Out of Three
        createProblem({
            title: "Two Out of Three Distinct Values",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n1 + n2 + n3)",
            expectedSpace: "O(n1 + n2 + n3)",
            description: "Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. Return the array sorted in ascending order.",
            constraints: "1 <= nums1.length, nums2.length, nums3.length <= 100\n1 <= nums1[i], nums2[j], nums3[k] <= 100",
            fnName: "twoOutOfThree",
            returnType: "vector<int>",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" },
                { name: "nums3", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 1, 3, 2], [2, 3], [3]],
                [[3, 1], [2, 3], [1, 2]],
                [[1, 2, 2], [4, 3, 3], [5]]
            ],
            solver: (nums1, nums2, nums3) => {
                const s1 = new Set(nums1);
                const s2 = new Set(nums2);
                const s3 = new Set(nums3);
                const all = new Set([...s1, ...s2, ...s3]);
                const res = [];
                for (const x of all) {
                    let c = 0;
                    if (s1.has(x)) c++;
                    if (s2.has(x)) c++;
                    if (s3.has(x)) c++;
                    if (c >= 2) res.push(x);
                }
                return res.sort((a, b) => a - b);
            }
        }),

        // 29. Count Equal and Divisible Pairs in an Array
        createProblem({
            title: "Count Equal and Divisible Pairs in an Array",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.",
            constraints: "1 <= nums.length <= 100\n1 <= nums[i] <= 100\n1 <= k <= 100",
            fnName: "countPairs",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[3, 1, 2, 2, 2, 1, 3], 2],
                [[1, 2, 3, 4], 1]
            ],
            solver: (nums, k) => {
                let ans = 0;
                for (let i = 0; i < nums.length; i++) {
                    for (let j = i + 1; j < nums.length; j++) {
                        if (nums[i] === nums[j] && (i * j) % k === 0) ans++;
                    }
                }
                return ans;
            }
        }),

        // 30. Check If N and Its Double Exist
        createProblem({
            title: "Check If N and Its Double Exist",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array arr of integers, check if there exist two indices i and j such that: i != j, 0 <= i, j < arr.length, and arr[i] == 2 * arr[j].",
            constraints: "2 <= arr.length <= 500\n-10^3 <= arr[i] <= 10^3",
            fnName: "checkIfExist",
            returnType: "bool",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[10, 2, 5, 3]],
                [[3, 1, 7, 11]]
            ],
            solver: (arr) => {
                const seen = new Set();
                for (const x of arr) {
                    if (seen.has(x * 2) || (x % 2 === 0 && seen.has(x / 2))) return true;
                    seen.add(x);
                }
                return false;
            }
        }),

        // 31. Divide Array Into Equal Pairs
        createProblem({
            title: "Divide Array Into Equal Pairs Possible",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array nums consisting of 2 * n integers. You need to divide nums into n pairs such that each element belongs to exactly one pair and the elements present in a pair are equal. Return true if nums can be divided into n pairs, otherwise return false.",
            constraints: "nums.length == 2 * n\n1 <= n <= 500\n1 <= nums[i] <= 500",
            fnName: "divideArray",
            returnType: "bool",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[3, 2, 3, 2, 2, 2]],
                [[1, 2, 3, 4]]
            ],
            solver: (nums) => {
                const count = {};
                for (const n of nums) count[n] = (count[n] || 0) + 1;
                return Object.values(count).every(c => c % 2 === 0);
            }
        }),

        // 32. Largest Unique Number
        createProblem({
            title: "Largest Unique Number",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.",
            constraints: "1 <= nums.length <= 2000\n0 <= nums[i] <= 1000",
            fnName: "largestUniqueNumber",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[5, 7, 3, 9, 4, 9, 8, 3, 1]],
                [[9, 9, 8, 8]]
            ],
            solver: (nums) => {
                const count = {};
                for (const n of nums) count[n] = (count[n] || 0) + 1;
                let maxVal = -1;
                for (const k in count) {
                    if (count[k] === 1) maxVal = Math.max(maxVal, Number(k));
                }
                return maxVal;
            }
        }),

        // 33. Counting Elements
        createProblem({
            title: "Count Elements with X + 1 Present",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.",
            constraints: "1 <= arr.length <= 1000\n0 <= arr[i] <= 1000",
            fnName: "countElements",
            returnType: "int",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3]],
                [[1, 1, 3, 3, 5, 5, 7, 7]],
                [[1, 1, 2, 2]]
            ],
            solver: (arr) => {
                const set = new Set(arr);
                let count = 0;
                for (const x of arr) {
                    if (set.has(x + 1)) count++;
                }
                return count;
            }
        }),

        // 34. Check If Every Row and Column Contains All Numbers
        createProblem({
            title: "Check If Row and Column Contains All Numbers",
            topic: "Hashing",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Matrix"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive). Given an n x n integer matrix matrix, return true if the matrix is valid.",
            constraints: "n == matrix.length == matrix[i].length\n1 <= n <= 100\n1 <= matrix[i][j] <= n",
            fnName: "checkValid",
            returnType: "bool",
            params: [{ name: "matrix", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2, 3], [3, 1, 2], [2, 3, 1]]],
                [[[1, 1, 1], [1, 2, 3], [1, 2, 3]]]
            ],
            solver: (matrix) => {
                const n = matrix.length;
                for (let r = 0; r < n; r++) {
                    const rowSet = new Set();
                    const colSet = new Set();
                    for (let c = 0; c < n; c++) {
                        rowSet.add(matrix[r][c]);
                        colSet.add(matrix[c][r]);
                    }
                    if (rowSet.size !== n || colSet.size !== n) return false;
                }
                return true;
            }
        }),

        // 35. Make Sum Divisible by P
        createProblem({
            title: "Make Sum Divisible by P Shortest Subarray",
            topic: "Hashing",
            difficulty: "Medium",
            patterns: ["Prefix Sum", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. Return the length of the smallest subarray that you need to remove, or -1 if impossible.",
            constraints: "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^9\n1 <= p <= 10^9",
            fnName: "minSubarray",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "p", type: "int" }
            ],
            rawExamples: [
                [[3, 1, 4, 2], 6],
                [[6, 3, 5, 2], 9],
                [[1, 2, 3], 3]
            ],
            solver: (nums, p) => {
                const totalRem = nums.reduce((acc, x) => (acc + x) % p, 0);
                if (totalRem === 0) return 0;
                const map = new Map();
                map.set(0, -1);
                let cur = 0, minLen = nums.length;
                for (let i = 0; i < nums.length; i++) {
                    cur = (cur + nums[i]) % p;
                    const needed = (cur - totalRem + p) % p;
                    if (map.has(needed)) {
                        minLen = Math.min(minLen, i - map.get(needed));
                    }
                    map.set(cur, i);
                }
                return minLen < nums.length ? minLen : -1;
            }
        })
    ];
}
