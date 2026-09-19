import { createProblem } from "../problem_blueprints.mjs";

export function getTwoPointerProblems() {
    return [
        // 1. Two Sum II - Input Array Is Sorted
        createProblem({
            title: "Two Sum II - Input Array Is Sorted",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices [index1, index2] (1-indexed).",
            constraints: "2 <= numbers.length <= 3 * 10^4\n-1000 <= numbers[i] <= 1000\nnumbers is sorted in non-decreasing order.\n-1000 <= target <= 1000\nThe tests are generated such that there is exactly one solution.",
            fnName: "twoSum",
            returnType: "vector<int>",
            params: [
                { name: "numbers", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[2, 7, 11, 15], 9],
                [[2, 3, 4], 6],
                [[-1, 0], -1]
            ],
            solver: (numbers, target) => {
                let l = 0, r = numbers.length - 1;
                while (l < r) {
                    const sum = numbers[l] + numbers[r];
                    if (sum === target) return [l + 1, r + 1];
                    if (sum < target) l++;
                    else r--;
                }
                return [];
            }
        }),

        // 2. Container With Most Water
        createProblem({
            title: "Container With Most Water",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
            constraints: "n == height.length\n2 <= n <= 10^5\n0 <= height[i] <= 10^4",
            fnName: "maxArea",
            returnType: "int",
            params: [{ name: "height", type: "vector<int>&" }],
            rawExamples: [
                [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
                [[1, 1]]
            ],
            solver: (height) => {
                let l = 0, r = height.length - 1;
                let maxW = 0;
                while (l < r) {
                    const h = Math.min(height[l], height[r]);
                    maxW = Math.max(maxW, h * (r - l));
                    if (height[l] < height[r]) l++;
                    else r--;
                }
                return maxW;
            }
        }),

        // 3. Trapping Rain Water
        createProblem({
            title: "Trapping Rain Water",
            topic: "Two Pointers",
            difficulty: "Hard",
            patterns: ["Two Pointers", "Dynamic Programming"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            constraints: "n == height.length\n1 <= n <= 2 * 10^4\n0 <= height[i] <= 10^5",
            fnName: "trap",
            returnType: "int",
            params: [{ name: "height", type: "vector<int>&" }],
            rawExamples: [
                [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
                [[4, 2, 0, 3, 2, 5]]
            ],
            solver: (height) => {
                let l = 0, r = height.length - 1;
                let leftMax = 0, rightMax = 0, water = 0;
                while (l < r) {
                    if (height[l] <= height[r]) {
                        if (height[l] >= leftMax) leftMax = height[l];
                        else water += leftMax - height[l];
                        l++;
                    } else {
                        if (height[r] >= rightMax) rightMax = height[r];
                        else water += rightMax - height[r];
                        r--;
                    }
                }
                return water;
            }
        }),

        // 4. 3Sum Closest
        createProblem({
            title: "3Sum Closest",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers.",
            constraints: "3 <= nums.length <= 500\n-1000 <= nums[i] <= 1000\n-10^4 <= target <= 10^4",
            fnName: "threeSumClosest",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[-1, 2, 1, -4], 1],
                [[0, 0, 0], 1]
            ],
            solver: (nums, target) => {
                nums.sort((a, b) => a - b);
                let closest = nums[0] + nums[1] + nums[2];
                for (let i = 0; i < nums.length - 2; i++) {
                    let l = i + 1, r = nums.length - 1;
                    while (l < r) {
                        const sum = nums[i] + nums[l] + nums[r];
                        if (Math.abs(sum - target) < Math.abs(closest - target)) {
                            closest = sum;
                        }
                        if (sum < target) l++;
                        else if (sum > target) r--;
                        else return sum;
                    }
                }
                return closest;
            }
        }),

        // 5. Sort Colors
        createProblem({
            title: "Sort Colors (Dutch National Flag)",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red (0), white (1), and blue (2). Return the sorted array.",
            constraints: "n == nums.length\n1 <= n <= 300\nnums[i] is either 0, 1, or 2.",
            fnName: "sortColors",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 0, 2, 1, 1, 0]],
                [[2, 0, 1]]
            ],
            solver: (nums) => {
                let low = 0, mid = 0, high = nums.length - 1;
                while (mid <= high) {
                    if (nums[mid] === 0) {
                        const tmp = nums[low];
                        nums[low] = nums[mid];
                        nums[mid] = tmp;
                        low++; mid++;
                    } else if (nums[mid] === 1) {
                        mid++;
                    } else {
                        const tmp = nums[mid];
                        nums[mid] = nums[high];
                        nums[high] = tmp;
                        high--;
                    }
                }
                return nums;
            }
        }),

        // 6. Valid Palindrome
        createProblem({
            title: "Valid Palindrome",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Return true if it is a palindrome, or false otherwise.",
            constraints: "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
            fnName: "isPalindrome",
            returnType: "bool",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["A man, a plan, a canal: Panama"],
                ["race a car"],
                [" "]
            ],
            solver: (s) => {
                const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
                let l = 0, r = clean.length - 1;
                while (l < r) {
                    if (clean[l] !== clean[r]) return false;
                    l++; r--;
                }
                return true;
            }
        }),

        // 7. Longest Substring Without Repeating Characters Length
        createProblem({
            title: "Longest Substring Without Repeating Characters",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Sliding Window", "Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(min(n, m))",
            description: "Given a string s, find the length of the longest substring without repeating characters.",
            constraints: "0 <= s.length <= 5 * 10^4\ns consists of English letters, digits, symbols and spaces.",
            fnName: "lengthOfLongestSubstring",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["abcabcbb"],
                ["bbbbb"],
                ["pwwkew"]
            ],
            solver: (s) => {
                const map = new Map();
                let maxLen = 0, l = 0;
                for (let r = 0; r < s.length; r++) {
                    if (map.has(s[r])) {
                        l = Math.max(l, map.get(s[r]) + 1);
                    }
                    map.set(s[r], r);
                    maxLen = Math.max(maxLen, r - l + 1);
                }
                return maxLen;
            }
        }),

        // 8. Max Consecutive Ones III
        createProblem({
            title: "Max Consecutive Ones III",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Sliding Window"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
            constraints: "1 <= nums.length <= 10^5\nnums[i] is either 0 or 1.\n0 <= k <= nums.length",
            fnName: "longestOnes",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2],
                [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3]
            ],
            solver: (nums, k) => {
                let l = 0, zeros = 0, maxLen = 0;
                for (let r = 0; r < nums.length; r++) {
                    if (nums[r] === 0) zeros++;
                    while (zeros > k) {
                        if (nums[l] === 0) zeros--;
                        l++;
                    }
                    maxLen = Math.max(maxLen, r - l + 1);
                }
                return maxLen;
            }
        }),

        // 9. Minimum Size Subarray Sum
        createProblem({
            title: "Minimum Size Subarray Sum",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Sliding Window"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target. If there is no such subarray, return 0.",
            constraints: "1 <= target <= 10^9\n1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^4",
            fnName: "minSubArrayLen",
            returnType: "int",
            params: [
                { name: "target", type: "int" },
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [7, [2, 3, 1, 2, 4, 3]],
                [4, [1, 4, 4]],
                [11, [1, 1, 1, 1, 1, 1, 1, 1]]
            ],
            solver: (target, nums) => {
                let minLen = Infinity, sum = 0, l = 0;
                for (let r = 0; r < nums.length; r++) {
                    sum += nums[r];
                    while (sum >= target) {
                        minLen = Math.min(minLen, r - l + 1);
                        sum -= nums[l++];
                    }
                }
                return minLen === Infinity ? 0 : minLen;
            }
        }),

        // 10. Fruit Into Baskets
        createProblem({
            title: "Fruit Into Baskets",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Sliding Window", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are visiting a farm that has a single row of fruit trees represented by an integer array fruits. You have two baskets, and each basket can only hold a single type of fruit. Return the maximum number of fruits you can pick.",
            constraints: "1 <= fruits.length <= 10^5\n0 <= fruits[i] < fruits.length",
            fnName: "totalFruit",
            returnType: "int",
            params: [{ name: "fruits", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 1]],
                [[0, 1, 2, 2]],
                [[1, 2, 3, 2, 2]]
            ],
            solver: (fruits) => {
                const count = new Map();
                let l = 0, maxFruit = 0;
                for (let r = 0; r < fruits.length; r++) {
                    count.set(fruits[r], (count.get(fruits[r]) || 0) + 1);
                    while (count.size > 2) {
                        count.set(fruits[l], count.get(fruits[l]) - 1);
                        if (count.get(fruits[l]) === 0) count.delete(fruits[l]);
                        l++;
                    }
                    maxFruit = Math.max(maxFruit, r - l + 1);
                }
                return maxFruit;
            }
        }),

        // 11. Squares of a Sorted Array
        createProblem({
            title: "Squares of a Sorted Array",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
            constraints: "1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in non-decreasing order.",
            fnName: "sortedSquares",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[-4, -1, 0, 3, 10]],
                [[-7, -3, 2, 3, 11]]
            ],
            solver: (nums) => {
                const n = nums.length;
                const res = new Array(n);
                let l = 0, r = n - 1, idx = n - 1;
                while (l <= r) {
                    const lsq = nums[l] * nums[l];
                    const rsq = nums[r] * nums[r];
                    if (lsq > rsq) {
                        res[idx--] = lsq;
                        l++;
                    } else {
                        res[idx--] = rsq;
                        r--;
                    }
                }
                return res;
            }
        }),

        // 12. Boats to Save People
        createProblem({
            title: "Boats to Save People",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry at most limit weight and at most 2 people. Return the minimum number of boats to carry every given person.",
            constraints: "1 <= people.length <= 5 * 10^4\n1 <= people[i] <= limit <= 3 * 10^4",
            fnName: "numRescueBoats",
            returnType: "int",
            params: [
                { name: "people", type: "vector<int>&" },
                { name: "limit", type: "int" }
            ],
            rawExamples: [
                [[1, 2], 3],
                [[3, 2, 2, 1], 3],
                [[3, 5, 3, 4], 5]
            ],
            solver: (people, limit) => {
                people.sort((a, b) => a - b);
                let l = 0, r = people.length - 1, boats = 0;
                while (l <= r) {
                    if (people[l] + people[r] <= limit) {
                        l++;
                    }
                    r--;
                    boats++;
                }
                return boats;
            }
        }),

        // 13. Backspace String Compare
        createProblem({
            title: "Backspace String Compare",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Two Pointers", "Stack"],
            dataStructures: ["String"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(1)",
            description: "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.",
            constraints: "1 <= s.length, t.length <= 200\ns and t only contain lowercase letters and '#' characters.",
            fnName: "backspaceCompare",
            returnType: "bool",
            params: [
                { name: "s", type: "string" },
                { name: "t", type: "string" }
            ],
            rawExamples: [
                ["ab#c", "ad#c"],
                ["ab##", "c#d#"],
                ["a#c", "b"]
            ],
            solver: (s, t) => {
                const build = (str) => {
                    const stack = [];
                    for (const c of str) {
                        if (c === '#') stack.pop();
                        else stack.push(c);
                    }
                    return stack.join("");
                };
                return build(s) === build(t);
            }
        }),

        // 14. Remove Duplicates from Sorted Array II
        createProblem({
            title: "Remove Duplicates from Sorted Array II Count",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. Return the count k of elements remaining.",
            constraints: "1 <= nums.length <= 3 * 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in non-decreasing order.",
            fnName: "removeDuplicates",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 1, 1, 2, 2, 3]],
                [[0, 0, 1, 1, 1, 1, 2, 3, 3]]
            ],
            solver: (nums) => {
                if (nums.length <= 2) return nums.length;
                let k = 2;
                for (let i = 2; i < nums.length; i++) {
                    if (nums[i] !== nums[k - 2]) {
                        nums[k++] = nums[i];
                    }
                }
                return k;
            }
        }),

        // 15. Shortest Unsorted Continuous Subarray
        createProblem({
            title: "Shortest Unsorted Continuous Subarray",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order. Return the shortest such subarray's length.",
            constraints: "1 <= nums.length <= 10^4\n-10^5 <= nums[i] <= 10^5",
            fnName: "findUnsortedSubarray",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 6, 4, 8, 10, 9, 15]],
                [[1, 2, 3, 4]],
                [[1]]
            ],
            solver: (nums) => {
                const n = nums.length;
                let max = -Infinity, end = -2;
                for (let i = 0; i < n; i++) {
                    max = Math.max(max, nums[i]);
                    if (nums[i] < max) end = i;
                }
                let min = Infinity, start = -1;
                for (let i = n - 1; i >= 0; i--) {
                    min = Math.min(min, nums[i]);
                    if (nums[i] > min) start = i;
                }
                return end - start + 1;
            }
        }),

        // 16. Move Zeroes Return
        createProblem({
            title: "Move Zeroes to End",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place.",
            constraints: "1 <= nums.length <= 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
            fnName: "moveZeroes",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[0, 1, 0, 3, 12]],
                [[0]]
            ],
            solver: (nums) => {
                let nonZero = 0;
                for (let i = 0; i < nums.length; i++) {
                    if (nums[i] !== 0) {
                        const tmp = nums[nonZero];
                        nums[nonZero] = nums[i];
                        nums[i] = tmp;
                        nonZero++;
                    }
                }
                return nums;
            }
        }),

        // 17. Partition Labels Lengths
        createProblem({
            title: "Partition Labels",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Greedy"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.",
            constraints: "1 <= s.length <= 500\ns consists of lowercase English letters.",
            fnName: "partitionLabels",
            returnType: "vector<int>",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["ababcbacadefegdehijhklij"],
                ["eccbbbbdec"]
            ],
            solver: (s) => {
                const last = {};
                for (let i = 0; i < s.length; i++) last[s[i]] = i;
                let j = 0, anchor = 0;
                const ans = [];
                for (let i = 0; i < s.length; i++) {
                    j = Math.max(j, last[s[i]]);
                    if (i === j) {
                        ans.push(i - anchor + 1);
                        anchor = i + 1;
                    }
                }
                return ans;
            }
        }),

        // 18. Longest Repeating Character Replacement Length
        createProblem({
            title: "Character Replacement Longest Substring Length",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Sliding Window"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character at most k times. Return the length of the longest substring containing the same letter.",
            constraints: "1 <= s.length <= 10^5\ns consists of only uppercase English letters.\n0 <= k <= s.length",
            fnName: "characterReplacement",
            returnType: "int",
            params: [
                { name: "s", type: "string" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                ["ABAB", 2],
                ["AABABBA", 1]
            ],
            solver: (s, k) => {
                const count = new Array(26).fill(0);
                let maxCount = 0, maxLen = 0, l = 0;
                for (let r = 0; r < s.length; r++) {
                    const idx = s.charCodeAt(r) - 65;
                    count[idx]++;
                    maxCount = Math.max(maxCount, count[idx]);
                    if ((r - l + 1) - maxCount > k) {
                        count[s.charCodeAt(l) - 65]--;
                        l++;
                    }
                    maxLen = Math.max(maxLen, r - l + 1);
                }
                return maxLen;
            }
        }),

        // 19. Find K-th Smallest Pair Distance Exists
        createProblem({
            title: "Count Pairs with Absolute Difference At Most K",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j and |nums[i] - nums[j]| <= k.",
            constraints: "1 <= nums.length <= 10^4\n0 <= nums[i] <= 10^5\n0 <= k <= 10^5",
            fnName: "countPairsDifferenceAtMostK",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 3, 1], 1],
                [[1, 1, 1], 2],
                [[1, 2, 3, 4], 1]
            ],
            solver: (nums, k) => {
                nums.sort((a, b) => a - b);
                let count = 0, l = 0;
                for (let r = 0; r < nums.length; r++) {
                    while (nums[r] - nums[l] > k) l++;
                    count += (r - l);
                }
                return count;
            }
        }),

        // 20. Count Subarrays with Score Less Than K
        createProblem({
            title: "Count Subarrays with Score Less Than K",
            topic: "Two Pointers",
            difficulty: "Hard",
            patterns: ["Sliding Window"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "The score of an array is defined as the product of its sum and its length. Given an array of positive integers nums and an integer k, return the number of non-empty subarrays whose score is strictly less than k.",
            constraints: "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^5\n1 <= k <= 10^15",
            fnName: "countSubarraysScoreLessThanK",
            returnType: "long long",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "long long" }
            ],
            rawExamples: [
                [[2, 1, 4, 3, 5], 10],
                [[1, 1, 1], 5]
            ],
            solver: (nums, k) => {
                let ans = 0, sum = 0, l = 0;
                for (let r = 0; r < nums.length; r++) {
                    sum += nums[r];
                    while (sum * (r - l + 1) >= k && l <= r) {
                        sum -= nums[l++];
                    }
                    ans += (r - l + 1);
                }
                return ans;
            }
        }),

        // 21. Minimum Difference Between Highest and Lowest of K Scores
        createProblem({
            title: "Minimum Difference Between Highest and Lowest of K Scores",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Sliding Window", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k. Pick the scores of any k students such that the difference between the highest and lowest score is minimized. Return the minimum possible difference.",
            constraints: "1 <= k <= nums.length <= 1000\n0 <= nums[i] <= 10^5",
            fnName: "minimumDifference",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[90], 1],
                [[9, 4, 1, 7], 2]
            ],
            solver: (nums, k) => {
                if (k <= 1) return 0;
                nums.sort((a, b) => a - b);
                let minDiff = Infinity;
                for (let i = 0; i + k - 1 < nums.length; i++) {
                    minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
                }
                return minDiff;
            }
        }),

        // 22. Find the Longest Semi-Repetitive Substring
        createProblem({
            title: "Longest Semi-Repetitive Substring",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Sliding Window"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "A string is semi-repetitive if there is at most one pair of adjacent digits that are equal. Given a digit string s, return the length of the longest semi-repetitive substring inside s.",
            constraints: "1 <= s.length <= 50\ns consists of digits '0' through '9'.",
            fnName: "longestSemiRepetitiveSubstring",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["52233"],
                ["5494"],
                ["1111111"]
            ],
            solver: (s) => {
                let ans = 1, l = 0, lastPair = 0;
                for (let r = 1; r < s.length; r++) {
                    if (s[r] === s[r - 1]) {
                        if (lastPair !== 0) l = lastPair;
                        lastPair = r;
                    }
                    ans = Math.max(ans, r - l + 1);
                }
                return ans;
            }
        }),

        // 23. Subarrays with Distinct Elements Size K
        createProblem({
            title: "Count Subarrays of Size K with Distinct Elements",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Sliding Window", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(k)",
            description: "Given an integer array nums and an integer k, return the number of subarrays of length k with all distinct elements.",
            constraints: "1 <= k <= nums.length <= 10^5\n1 <= nums[i] <= 10^5",
            fnName: "countGoodSubarrays",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 5, 4, 2, 9, 9, 9], 3],
                [[4, 4, 4], 3]
            ],
            solver: (nums, k) => {
                const map = new Map();
                let count = 0;
                for (let i = 0; i < k; i++) {
                    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
                }
                if (map.size === k) count++;
                for (let i = k; i < nums.length; i++) {
                    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
                    const prev = nums[i - k];
                    map.set(prev, map.get(prev) - 1);
                    if (map.get(prev) === 0) map.delete(prev);
                    if (map.size === k) count++;
                }
                return count;
            }
        }),

        // 24. Number of Subarrays with Bounded Maximum
        createProblem({
            title: "Number of Subarrays with Bounded Maximum",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right].",
            constraints: "1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^9\n0 <= left <= right <= 10^9",
            fnName: "numSubarrayBoundedMax",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "left", type: "int" },
                { name: "right", type: "int" }
            ],
            rawExamples: [
                [[2, 1, 4, 3], 2, 3],
                [[2, 9, 2, 5, 6], 2, 8]
            ],
            solver: (nums, left, right) => {
                const countAtMost = (bound) => {
                    let total = 0, cur = 0;
                    for (const x of nums) {
                        cur = (x <= bound) ? cur + 1 : 0;
                        total += cur;
                    }
                    return total;
                };
                return countAtMost(right) - countAtMost(left - 1);
            }
        }),

        // 25. Intersection of Two Sorted Arrays
        createProblem({
            title: "Intersection of Two Sorted Arrays With Two Pointers",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(min(n, m))",
            description: "Given two sorted arrays arr1 and arr2, return an array representing their intersection using two pointers.",
            constraints: "1 <= arr1.length, arr2.length <= 1000\nBoth arrays are sorted in ascending order.",
            fnName: "sortedIntersection",
            returnType: "vector<int>",
            params: [
                { name: "arr1", type: "vector<int>&" },
                { name: "arr2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], [2, 4, 6, 8]],
                [[1, 1, 2, 2], [2, 2, 3]]
            ],
            solver: (arr1, arr2) => {
                let i = 0, j = 0;
                const res = [];
                while (i < arr1.length && j < arr2.length) {
                    if (arr1[i] === arr2[j]) {
                        if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
                            res.push(arr1[i]);
                        }
                        i++; j++;
                    } else if (arr1[i] < arr2[j]) {
                        i++;
                    } else {
                        j++;
                    }
                }
                return res;
            }
        }),

        // 26. Assign Cookies
        createProblem({
            title: "Assign Cookies Maximum Content Children",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Two Pointers", "Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n + m log m)",
            expectedSpace: "O(1)",
            description: "Assume you are an awesome parent and want to give your children some cookies. Each child i has a greed factor g[i], and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i. Maximize the number of your content children.",
            constraints: "1 <= g.length <= 3 * 10^4\n0 <= s.length <= 3 * 10^4\n1 <= g[i], s[j] <= 2^31 - 1",
            fnName: "findContentChildren",
            returnType: "int",
            params: [
                { name: "g", type: "vector<int>&" },
                { name: "s", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3], [1, 1]],
                [[1, 2], [1, 2, 3]]
            ],
            solver: (g, s) => {
                g.sort((a, b) => a - b);
                s.sort((a, b) => a - b);
                let child = 0, cookie = 0;
                while (child < g.length && cookie < s.length) {
                    if (s[cookie] >= g[child]) {
                        child++;
                    }
                    cookie++;
                }
                return child;
            }
        }),

        // 27. Duplicate Zeros
        createProblem({
            title: "Duplicate Zeros In-Place",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right. Elements beyond the original length are discarded.",
            constraints: "1 <= arr.length <= 10^4\n0 <= arr[i] <= 9",
            fnName: "duplicateZeros",
            returnType: "vector<int>",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[1, 0, 2, 3, 0, 4, 5, 0]],
                [[1, 2, 3]]
            ],
            solver: (arr) => {
                const res = [];
                for (const x of arr) {
                    if (x === 0) {
                        res.push(0);
                        res.push(0);
                    } else {
                        res.push(x);
                    }
                    if (res.length >= arr.length) break;
                }
                return res.slice(0, arr.length);
            }
        }),

        // 28. Valid Mountain Array
        createProblem({
            title: "Valid Mountain Array",
            topic: "Two Pointers",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of integers arr, return true if and only if it is a valid mountain array. An array is a mountain array if arr.length >= 3 and there exists an index i such that elements strictly increase up to i and strictly decrease thereafter.",
            constraints: "1 <= arr.length <= 10^4\n0 <= arr[i] <= 10^4",
            fnName: "validMountainArray",
            returnType: "bool",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[2, 1]],
                [[3, 5, 5]],
                [[0, 3, 2, 1]]
            ],
            solver: (arr) => {
                const n = arr.length;
                let i = 0;
                while (i + 1 < n && arr[i] < arr[i + 1]) i++;
                if (i === 0 || i === n - 1) return false;
                while (i + 1 < n && arr[i] > arr[i + 1]) i++;
                return i === n - 1;
            }
        }),

        // 29. Compare Strings by Frequency of the Smallest Character
        createProblem({
            title: "Frequency of Smallest Character Comparison Count",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Binary Search"],
            dataStructures: ["Array", "String"],
            expectedTime: "O((n + m) * L)",
            expectedSpace: "O(n)",
            description: "Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. Given queries and words arrays, return an array answer where answer[i] is the number of words such that f(queries[i]) < f(W).",
            constraints: "1 <= queries.length <= 2000\n1 <= words.length <= 2000\n1 <= queries[i].length, words[i].length <= 10",
            fnName: "numSmallerByFrequency",
            returnType: "vector<int>",
            params: [
                { name: "queries", type: "vector<string>&" },
                { name: "words", type: "vector<string>&" }
            ],
            rawExamples: [
                [["cbd"], ["zaaaz"]],
                [["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]]
            ],
            solver: (queries, words) => {
                const f = (str) => {
                    let minC = 'z', count = 0;
                    for (const c of str) {
                        if (c < minC) {
                            minC = c;
                            count = 1;
                        } else if (c === minC) {
                            count++;
                        }
                    }
                    return count;
                };
                const wordFreqs = words.map(f).sort((a, b) => a - b);
                return queries.map(q => {
                    const qf = f(q);
                    let l = 0, r = wordFreqs.length;
                    while (l < r) {
                        const mid = Math.floor((l + r) / 2);
                        if (wordFreqs[mid] <= qf) l = mid + 1;
                        else r = mid;
                    }
                    return wordFreqs.length - l;
                });
            }
        }),

        // 30. Maximum Erasure Value
        createProblem({
            title: "Maximum Erasure Value",
            topic: "Two Pointers",
            difficulty: "Medium",
            patterns: ["Sliding Window", "Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements. Return the maximum score you can get by erasing exactly one subarray.",
            constraints: "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^4",
            fnName: "maximumUniqueSubarray",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[4, 2, 4, 5, 6]],
                [[5, 2, 1, 2, 5, 2, 1, 2, 5]]
            ],
            solver: (nums) => {
                const set = new Set();
                let l = 0, sum = 0, maxSum = 0;
                for (let r = 0; r < nums.length; r++) {
                    while (set.has(nums[r])) {
                        set.delete(nums[l]);
                        sum -= nums[l];
                        l++;
                    }
                    set.add(nums[r]);
                    sum += nums[r];
                    maxSum = Math.max(maxSum, sum);
                }
                return maxSum;
            }
        })
    ];
}
