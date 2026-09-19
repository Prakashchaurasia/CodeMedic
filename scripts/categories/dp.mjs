import { createProblem } from "../problem_blueprints.mjs";

export function getDpProblems() {
    return [
        // 1. Min Cost Climbing Stairs
        createProblem({
            title: "Min Cost Climbing Stairs",
            topic: "Dynamic Programming",
            difficulty: "Easy",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. Return the minimum cost to reach the top of the floor starting from index 0 or 1.",
            constraints: "2 <= cost.length <= 1000\n0 <= cost[i] <= 999",
            fnName: "minCostClimbingStairs",
            returnType: "int",
            params: [{ name: "cost", type: "vector<int>&" }],
            rawExamples: [
                [[10, 15, 20]],
                [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]]
            ],
            solver: (cost) => {
                let prev2 = 0, prev1 = 0;
                for (let i = 2; i <= cost.length; i++) {
                    const cur = Math.min(prev1 + cost[i - 1], prev2 + cost[i - 2]);
                    prev2 = prev1;
                    prev1 = cur;
                }
                return prev1;
            }
        }),

        // 2. House Robber
        createProblem({
            title: "House Robber Maximum Loot",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected. Return the maximum amount of money you can rob tonight without alerting the police.",
            constraints: "1 <= nums.length <= 100\n0 <= nums[i] <= 400",
            fnName: "rob",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 1]],
                [[2, 7, 9, 3, 1]]
            ],
            solver: (nums) => {
                let prev2 = 0, prev1 = 0;
                for (const x of nums) {
                    const cur = Math.max(prev1, prev2 + x);
                    prev2 = prev1;
                    prev1 = cur;
                }
                return prev1;
            }
        }),

        // 3. House Robber II (Circular)
        createProblem({
            title: "House Robber II Circular Street",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Return the maximum amount of money you can rob tonight without alerting the police.",
            constraints: "1 <= nums.length <= 100\n0 <= nums[i] <= 1000",
            fnName: "rob",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 3, 2]],
                [[1, 2, 3, 1]],
                [[1, 2, 3]]
            ],
            solver: (nums) => {
                if (nums.length === 1) return nums[0];
                const robLinear = (arr) => {
                    let prev2 = 0, prev1 = 0;
                    for (const x of arr) {
                        const cur = Math.max(prev1, prev2 + x);
                        prev2 = prev1;
                        prev1 = cur;
                    }
                    return prev1;
                };
                return Math.max(robLinear(nums.slice(0, -1)), robLinear(nums.slice(1)));
            }
        }),

        // 4. Longest Increasing Subsequence
        createProblem({
            title: "Longest Increasing Subsequence Length",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP", "Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
            constraints: "1 <= nums.length <= 2500\n-10^4 <= nums[i] <= 10^4",
            fnName: "lengthOfLIS",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[10, 9, 2, 5, 3, 7, 101, 18]],
                [[0, 1, 0, 3, 2, 3]],
                [[7, 7, 7, 7, 7, 7, 7]]
            ],
            solver: (nums) => {
                const tails = [];
                for (const x of nums) {
                    let l = 0, r = tails.length;
                    while (l < r) {
                        const mid = Math.floor((l + r) / 2);
                        if (tails[mid] < x) l = mid + 1;
                        else r = mid;
                    }
                    tails[l] = x;
                }
                return tails.length;
            }
        }),

        // 5. Coin Change Minimum Coins
        createProblem({
            title: "Coin Change Minimum Coins",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["Unbounded Knapsack"],
            dataStructures: ["Array"],
            expectedTime: "O(amount * coins.length)",
            expectedSpace: "O(amount)",
            description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up, return -1.",
            constraints: "1 <= coins.length <= 12\n1 <= coins[i] <= 2^31 - 1\n0 <= amount <= 10^4",
            fnName: "coinChange",
            returnType: "int",
            params: [
                { name: "coins", type: "vector<int>&" },
                { name: "amount", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 5], 11],
                [[2], 3],
                [[1], 0]
            ],
            solver: (coins, amount) => {
                const dp = new Array(amount + 1).fill(Infinity);
                dp[0] = 0;
                for (let i = 1; i <= amount; i++) {
                    for (const c of coins) {
                        if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);
                    }
                }
                return dp[amount] === Infinity ? -1 : dp[amount];
            }
        }),

        // 6. Coin Change II Combinations
        createProblem({
            title: "Coin Change II Number of Combinations",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["Unbounded Knapsack"],
            dataStructures: ["Array"],
            expectedTime: "O(amount * coins.length)",
            expectedSpace: "O(amount)",
            description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount.",
            constraints: "1 <= coins.length <= 300\n1 <= coins[i] <= 5000\nAll values of coins are unique.\n0 <= amount <= 5000",
            fnName: "change",
            returnType: "int",
            params: [
                { name: "amount", type: "int" },
                { name: "coins", type: "vector<int>&" }
            ],
            rawExamples: [
                [5, [1, 2, 5]],
                [3, [2]],
                [10, [10]]
            ],
            solver: (amount, coins) => {
                const dp = new Array(amount + 1).fill(0);
                dp[0] = 1;
                for (const c of coins) {
                    for (let i = c; i <= amount; i++) {
                        dp[i] += dp[i - c];
                    }
                }
                return dp[amount];
            }
        }),

        // 7. Maximum Product Subarray
        createProblem({
            title: "Maximum Product Subarray",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, find a subarray that has the largest product, and return the product.",
            constraints: "1 <= nums.length <= 2 * 10^4\n-10 <= nums[i] <= 10\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
            fnName: "maxProduct",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 3, -2, 4]],
                [[-2, 0, -1]]
            ],
            solver: (nums) => {
                let maxProd = nums[0], minProd = nums[0], ans = nums[0];
                for (let i = 1; i < nums.length; i++) {
                    const x = nums[i];
                    if (x < 0) {
                        const tmp = maxProd;
                        maxProd = minProd;
                        minProd = tmp;
                    }
                    maxProd = Math.max(x, maxProd * x);
                    minProd = Math.min(x, minProd * x);
                    ans = Math.max(ans, maxProd);
                }
                return ans;
            }
        }),

        // 8. Unique Paths
        createProblem({
            title: "Unique Paths in Grid",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(n)",
            description: "There is a robot on an m x n grid located at top-left (0, 0). The robot can only move either down or right at any point in time. Return the number of possible unique paths to bottom-right (m - 1, n - 1).",
            constraints: "1 <= m, n <= 100",
            fnName: "uniquePaths",
            returnType: "int",
            params: [
                { name: "m", type: "int" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [3, 7],
                [3, 2]
            ],
            solver: (m, n) => {
                const dp = new Array(n).fill(1);
                for (let r = 1; r < m; r++) {
                    for (let c = 1; c < n; c++) {
                        dp[c] += dp[c - 1];
                    }
                }
                return dp[n - 1];
            }
        }),

        // 9. Unique Paths II with Obstacles
        createProblem({
            title: "Unique Paths II With Obstacles",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(n)",
            description: "You are given an m x n integer array obstacleGrid where 1 marks an obstacle and 0 marks an empty space. Return the number of possible unique paths to reach the bottom-right corner.",
            constraints: "m == obstacleGrid.length\nn == obstacleGrid[i].length\n1 <= m, n <= 100\nobstacleGrid[i][j] is 0 or 1.",
            fnName: "uniquePathsWithObstacles",
            returnType: "int",
            params: [{ name: "obstacleGrid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]],
                [[[0, 1], [0, 0]]]
            ],
            solver: (grid) => {
                const m = grid.length, n = grid[0].length;
                const dp = new Array(n).fill(0);
                dp[0] = grid[0][0] === 0 ? 1 : 0;
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (grid[r][c] === 1) {
                            dp[c] = 0;
                        } else if (c > 0) {
                            dp[c] += dp[c - 1];
                        }
                    }
                }
                return dp[n - 1];
            }
        }),

        // 10. Minimum Path Sum
        createProblem({
            title: "Minimum Path Sum in Grid",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(n)",
            description: "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",
            constraints: "m == grid.length\nn == grid[i].length\n1 <= m, n <= 200\n0 <= grid[i][j] <= 200",
            fnName: "minPathSum",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 3, 1], [1, 5, 1], [4, 2, 1]]],
                [[[1, 2, 3], [4, 5, 6]]]
            ],
            solver: (grid) => {
                const m = grid.length, n = grid[0].length;
                const dp = new Array(n).fill(Infinity);
                dp[0] = 0;
                for (let r = 0; r < m; r++) {
                    dp[0] += grid[r][0];
                    for (let c = 1; c < n; c++) {
                        dp[c] = Math.min(dp[c], dp[c - 1]) + grid[r][c];
                    }
                }
                return dp[n - 1];
            }
        }),

        // 11. Partition Equal Subset Sum
        createProblem({
            title: "Partition Equal Subset Sum Possible",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["0/1 Knapsack"],
            dataStructures: ["Array"],
            expectedTime: "O(n * sum)",
            expectedSpace: "O(sum)",
            description: "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.",
            constraints: "1 <= nums.length <= 200\n1 <= nums[i] <= 100",
            fnName: "canPartition",
            returnType: "bool",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 5, 11, 5]],
                [[1, 2, 3, 5]]
            ],
            solver: (nums) => {
                const total = nums.reduce((a, b) => a + b, 0);
                if (total % 2 !== 0) return false;
                const target = total / 2;
                const dp = new Array(target + 1).fill(false);
                dp[0] = true;
                for (const x of nums) {
                    for (let j = target; j >= x; j--) {
                        if (dp[j - x]) dp[j] = true;
                    }
                }
                return dp[target];
            }
        }),

        // 12. Longest Common Subsequence
        createProblem({
            title: "Longest Common Subsequence Length",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["String"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
            constraints: "1 <= text1.length, text2.length <= 1000\ntext1 and text2 consist of only lowercase English characters.",
            fnName: "longestCommonSubsequence",
            returnType: "int",
            params: [
                { name: "text1", type: "string" },
                { name: "text2", type: "string" }
            ],
            rawExamples: [
                ["abcde", "ace"],
                ["abc", "abc"],
                ["abc", "def"]
            ],
            solver: (text1, text2) => {
                const m = text1.length, n = text2.length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                for (let i = 1; i <= m; i++) {
                    for (let j = 1; j <= n; j++) {
                        if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
                        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                    }
                }
                return dp[m][n];
            }
        }),

        // 13. Edit Distance
        createProblem({
            title: "Edit Distance (Levenshtein Distance)",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["String"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2: Insert a character, Delete a character, or Replace a character.",
            constraints: "0 <= word1.length, word2.length <= 500\nword1 and word2 consist of lowercase English letters.",
            fnName: "minDistance",
            returnType: "int",
            params: [
                { name: "word1", type: "string" },
                { name: "word2", type: "string" }
            ],
            rawExamples: [
                ["horse", "ros"],
                ["intention", "execution"]
            ],
            solver: (word1, word2) => {
                const m = word1.length, n = word2.length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                for (let i = 0; i <= m; i++) dp[i][0] = i;
                for (let j = 0; j <= n; j++) dp[0][j] = j;
                for (let i = 1; i <= m; i++) {
                    for (let j = 1; j <= n; j++) {
                        if (word1[i - 1] === word2[j - 1]) {
                            dp[i][j] = dp[i - 1][j - 1];
                        } else {
                            dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                        }
                    }
                }
                return dp[m][n];
            }
        }),

        // 14. Word Break
        createProblem({
            title: "Word Break Possible",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Hash Set", "String"],
            expectedTime: "O(n^3)",
            expectedSpace: "O(n)",
            description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
            constraints: "1 <= s.length <= 300\n1 <= wordDict.length <= 1000\n1 <= wordDict[i].length <= 20\ns and wordDict[i] consist of only lowercase English letters.\nAll the strings of wordDict are unique.",
            fnName: "wordBreak",
            returnType: "bool",
            params: [
                { name: "s", type: "string" },
                { name: "wordDict", type: "vector<string>&" }
            ],
            rawExamples: [
                ["leetcode", ["leet", "code"]],
                ["applepenapple", ["apple", "pen"]],
                ["catsandog", ["cats", "dog", "sand", "and", "cat"]]
            ],
            solver: (s, wordDict) => {
                const dict = new Set(wordDict);
                const dp = new Array(s.length + 1).fill(false);
                dp[0] = true;
                for (let i = 1; i <= s.length; i++) {
                    for (let j = 0; j < i; j++) {
                        if (dp[j] && dict.has(s.substring(j, i))) {
                            dp[i] = true;
                            break;
                        }
                    }
                }
                return dp[s.length];
            }
        }),

        // 15. Decode Ways
        createProblem({
            title: "Decode Ways Count",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "A message containing letters from A-Z can be encoded into numbers using 'A' -> \"1\", 'B' -> \"2\", ... 'Z' -> \"26\". Given a string s containing only digits, return the number of ways to decode it.",
            constraints: "1 <= s.length <= 100\ns contains only digits and may contain leading zero(s).",
            fnName: "numDecodings",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["12"],
                ["226"],
                ["06"]
            ],
            solver: (s) => {
                if (!s || s[0] === '0') return 0;
                let prev2 = 1, prev1 = 1;
                for (let i = 1; i < s.length; i++) {
                    let cur = 0;
                    const one = Number(s[i]);
                    const two = Number(s.substring(i - 1, i + 1));
                    if (one >= 1 && one <= 9) cur += prev1;
                    if (two >= 10 && two <= 26) cur += prev2;
                    prev2 = prev1;
                    prev1 = cur;
                }
                return prev1;
            }
        }),

        // 16. Jump Game
        createProblem({
            title: "Jump Game Can Reach End",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["Greedy", "1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
            constraints: "1 <= nums.length <= 10^4\n0 <= nums[i] <= 10^5",
            fnName: "canJump",
            returnType: "bool",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 3, 1, 1, 4]],
                [[3, 2, 1, 0, 4]]
            ],
            solver: (nums) => {
                let maxReach = 0;
                for (let i = 0; i < nums.length; i++) {
                    if (i > maxReach) return false;
                    maxReach = Math.max(maxReach, i + nums[i]);
                }
                return true;
            }
        }),

        // 17. Jump Game II
        createProblem({
            title: "Jump Game II Minimum Jumps",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["Greedy", "BFS"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Return the minimum number of jumps to reach nums[n - 1].",
            constraints: "1 <= nums.length <= 10^4\n0 <= nums[i] <= 1000\nIt's guaranteed that you can reach nums[n - 1].",
            fnName: "jump",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 3, 1, 1, 4]],
                [[2, 3, 0, 1, 4]]
            ],
            solver: (nums) => {
                let jumps = 0, curEnd = 0, farthest = 0;
                for (let i = 0; i < nums.length - 1; i++) {
                    farthest = Math.max(farthest, i + nums[i]);
                    if (i === curEnd) {
                        jumps++;
                        curEnd = farthest;
                    }
                }
                return jumps;
            }
        }),

        // 18. Triangle Minimum Total Path
        createProblem({
            title: "Triangle Minimum Total Path",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["Matrix"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below.",
            constraints: "1 <= triangle.length <= 200\ntriangle[0].length == 1\ntriangle[i].length == triangle[i - 1].length + 1\n-10^4 <= triangle[i][j] <= 10^4",
            fnName: "minimumTotal",
            returnType: "int",
            params: [{ name: "triangle", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]],
                [[[-10]]]
            ],
            solver: (triangle) => {
                const dp = [...triangle[triangle.length - 1]];
                for (let r = triangle.length - 2; r >= 0; r--) {
                    for (let c = 0; c < triangle[r].length; c++) {
                        dp[c] = triangle[r][c] + Math.min(dp[c], dp[c + 1]);
                    }
                }
                return dp[0];
            }
        }),

        // 19. Palindromic Substrings Count
        createProblem({
            title: "Count Palindromic Substrings",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["Two Pointers", "2D DP"],
            dataStructures: ["String"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(1)",
            description: "Given a string s, return the number of palindromic substrings in it. A substring is a contiguous sequence of characters within the string.",
            constraints: "1 <= s.length <= 1000\ns consists of lowercase English letters.",
            fnName: "countSubstrings",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["abc"],
                ["aaa"]
            ],
            solver: (s) => {
                let count = 0;
                const expand = (l, r) => {
                    while (l >= 0 && r < s.length && s[l] === s[r]) {
                        count++;
                        l--; r++;
                    }
                };
                for (let i = 0; i < s.length; i++) {
                    expand(i, i);
                    expand(i, i + 1);
                }
                return count;
            }
        }),

        // 20. Target Sum Ways
        createProblem({
            title: "Target Sum Assignment Ways",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["0/1 Knapsack"],
            dataStructures: ["Array"],
            expectedTime: "O(n * sum)",
            expectedSpace: "O(sum)",
            description: "You are given an integer array nums and an integer target. Build an expression out of nums by adding '+' or '-' before each integer. Return the number of different expressions that evaluate to target.",
            constraints: "1 <= nums.length <= 20\n0 <= nums[i] <= 1000\n0 <= sum(nums[i]) <= 1000\n-1000 <= target <= 1000",
            fnName: "findTargetSumWays",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[1, 1, 1, 1, 1], 3],
                [[1], 1]
            ],
            solver: (nums, target) => {
                const total = nums.reduce((a, b) => a + b, 0);
                if ((total + target) % 2 !== 0 || Math.abs(target) > total) return 0;
                const p = (total + target) / 2;
                const dp = new Array(p + 1).fill(0);
                dp[0] = 1;
                for (const x of nums) {
                    for (let j = p; j >= x; j--) {
                        dp[j] += dp[j - x];
                    }
                }
                return dp[p];
            }
        }),

        // 21. Integer Break
        createProblem({
            title: "Integer Break Maximum Product",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["Math", "1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers. Return the maximum product you can get.",
            constraints: "2 <= n <= 58",
            fnName: "integerBreak",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [2],
                [10]
            ],
            solver: (n) => {
                if (n === 2) return 1;
                if (n === 3) return 2;
                let prod = 1;
                while (n > 4) {
                    prod *= 3;
                    n -= 3;
                }
                return prod * n;
            }
        }),

        // 22. Perfect Squares Minimum Count
        createProblem({
            title: "Perfect Squares Minimum Count",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP", "BFS"],
            dataStructures: ["Array"],
            expectedTime: "O(n * sqrt(n))",
            expectedSpace: "O(n)",
            description: "Given an integer n, return the least number of perfect square numbers that sum to n.",
            constraints: "1 <= n <= 10^4",
            fnName: "numSquares",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [12],
                [13]
            ],
            solver: (n) => {
                const dp = new Array(n + 1).fill(Infinity);
                dp[0] = 0;
                for (let i = 1; i <= n; i++) {
                    for (let j = 1; j * j <= i; j++) {
                        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
                    }
                }
                return dp[n];
            }
        }),

        // 23. Combination Sum IV
        createProblem({
            title: "Combination Sum IV Permutations Count",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(target * nums.length)",
            expectedSpace: "O(target)",
            description: "Given an array of distinct integers nums and a target integer target, return the number of possible combinations (permutations) that add up to target.",
            constraints: "1 <= nums.length <= 200\n1 <= nums[i] <= 1000\nAll elements of nums are unique.\n1 <= target <= 1000",
            fnName: "combinationSum4",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3], 4],
                [[9], 3]
            ],
            solver: (nums, target) => {
                const dp = new Array(target + 1).fill(0);
                dp[0] = 1;
                for (let i = 1; i <= target; i++) {
                    for (const x of nums) {
                        if (i - x >= 0) dp[i] += dp[i - x];
                    }
                }
                return dp[target];
            }
        }),

        // 24. Maximal Square Area
        createProblem({
            title: "Maximal Square Area in Binary Matrix",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.",
            constraints: "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 300\nmatrix[i][j] is '0' or '1'.",
            fnName: "maximalSquare",
            returnType: "int",
            params: [{ name: "matrix", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]]],
                [[[0, 1], [1, 0]]],
                [[[0]]]
            ],
            solver: (matrix) => {
                const m = matrix.length, n = matrix[0].length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                let maxSide = 0;
                for (let r = 1; r <= m; r++) {
                    for (let c = 1; c <= n; c++) {
                        if (matrix[r - 1][c - 1] === 1) {
                            dp[r][c] = 1 + Math.min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1]);
                            maxSide = Math.max(maxSide, dp[r][c]);
                        }
                    }
                }
                return maxSide * maxSide;
            }
        }),

        // 25. Minimum Falling Path Sum
        createProblem({
            title: "Minimum Falling Path Sum",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["Matrix"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix. A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right.",
            constraints: "n == matrix.length == matrix[i].length\n1 <= n <= 100\n-100 <= matrix[i][j] <= 100",
            fnName: "minFallingPathSum",
            returnType: "int",
            params: [{ name: "matrix", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[2, 1, 3], [6, 5, 4], [7, 8, 9]]],
                [[[-19, 57], [-40, -5]]]
            ],
            solver: (matrix) => {
                const n = matrix.length;
                let dp = [...matrix[0]];
                for (let r = 1; r < n; r++) {
                    const next = new Array(n);
                    for (let c = 0; c < n; c++) {
                        const left = c > 0 ? dp[c - 1] : Infinity;
                        const mid = dp[c];
                        const right = c < n - 1 ? dp[c + 1] : Infinity;
                        next[c] = matrix[r][c] + Math.min(left, mid, right);
                    }
                    dp = next;
                }
                return Math.min(...dp);
            }
        }),

        // 26. Counting Bits
        createProblem({
            title: "Counting Bits Array",
            topic: "Dynamic Programming",
            difficulty: "Easy",
            patterns: ["Bit Manipulation", "1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
            constraints: "0 <= n <= 10^5",
            fnName: "countBits",
            returnType: "vector<int>",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [2],
                [5]
            ],
            solver: (n) => {
                const ans = new Array(n + 1).fill(0);
                for (let i = 1; i <= n; i++) {
                    ans[i] = ans[i >> 1] + (i & 1);
                }
                return ans;
            }
        }),

        // 27. N-th Tribonacci Number
        createProblem({
            title: "N-th Tribonacci Number",
            topic: "Dynamic Programming",
            difficulty: "Easy",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0. Given n, return the value of Tn.",
            constraints: "0 <= n <= 37",
            fnName: "tribonacci",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [4],
                [25]
            ],
            solver: (n) => {
                if (n === 0) return 0;
                if (n === 1 || n === 2) return 1;
                let a = 0, b = 1, c = 1;
                for (let i = 3; i <= n; i++) {
                    const d = a + b + c;
                    a = b; b = c; c = d;
                }
                return c;
            }
        }),

        // 28. Pascal's Triangle Row K
        createProblem({
            title: "Pascal's Triangle Row K",
            topic: "Dynamic Programming",
            difficulty: "Easy",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(k^2)",
            expectedSpace: "O(k)",
            description: "Given an integer rowIndex, return the rowIndex-th (0-indexed) row of the Pascal's triangle.",
            constraints: "0 <= rowIndex <= 33",
            fnName: "getRow",
            returnType: "vector<int>",
            params: [{ name: "rowIndex", type: "int" }],
            rawExamples: [
                [3],
                [0],
                [1]
            ],
            solver: (rowIndex) => {
                const row = new Array(rowIndex + 1).fill(1);
                for (let i = 1; i < rowIndex; i++) {
                    for (let j = i; j > 0; j--) {
                        row[j] += row[j - 1];
                    }
                }
                return row;
            }
        }),

        // 29. Divisor Game
        createProblem({
            title: "Divisor Game Alice Wins",
            topic: "Dynamic Programming",
            difficulty: "Easy",
            patterns: ["Math", "Game Theory"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Alice and Bob take turns playing a game, with Alice starting first. Choosing 0 < x < n such that n % x == 0 and replacing n with n - x. Return true if and only if Alice wins the game, assuming optimal play.",
            constraints: "1 <= n <= 1000",
            fnName: "divisorGame",
            returnType: "bool",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [2],
                [3]
            ],
            solver: (n) => n % 2 === 0
        }),

        // 30. Longest Palindromic Subsequence Length
        createProblem({
            title: "Longest Palindromic Subsequence Length",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["String"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n^2)",
            description: "Given a string s, find the longest palindromic subsequence's length in s.",
            constraints: "1 <= s.length <= 1000\ns consists only of lowercase English letters.",
            fnName: "longestPalindromeSubseq",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["bbbab"],
                ["cbbd"]
            ],
            solver: (s) => {
                const n = s.length;
                const dp = Array.from({ length: n }, () => new Array(n).fill(0));
                for (let i = n - 1; i >= 0; i--) {
                    dp[i][i] = 1;
                    for (let j = i + 1; j < n; j++) {
                        if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
                        else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                    }
                }
                return dp[0][n - 1];
            }
        }),

        // 31. Best Time to Buy and Sell Stock with Cooldown
        createProblem({
            title: "Buy and Sell Stock with Cooldown",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["State Machine DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an array prices. Find the maximum profit you can achieve. After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).",
            constraints: "1 <= prices.length <= 5000\n0 <= prices[i] <= 1000",
            fnName: "maxProfit",
            returnType: "int",
            params: [{ name: "prices", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 0, 2]],
                [[1]]
            ],
            solver: (prices) => {
                let hold = -Infinity, sold = 0, rest = 0;
                for (const p of prices) {
                    const prevSold = sold;
                    sold = hold + p;
                    hold = Math.max(hold, rest - p);
                    rest = Math.max(rest, prevSold);
                }
                return Math.max(sold, rest);
            }
        }),

        // 32. Best Time to Buy and Sell Stock with Transaction Fee
        createProblem({
            title: "Buy and Sell Stock with Transaction Fee",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["State Machine DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an array prices and an integer fee representing a transaction fee for each stock sale. Return the maximum profit you can achieve.",
            constraints: "1 <= prices.length <= 5 * 10^4\n1 <= prices[i] < 5 * 10^4\n0 <= fee < 5 * 10^4",
            fnName: "maxProfitFee",
            returnType: "int",
            params: [
                { name: "prices", type: "vector<int>&" },
                { name: "fee", type: "int" }
            ],
            rawExamples: [
                [[1, 3, 2, 8, 4, 9], 2],
                [[1, 3, 7, 5, 10, 3], 3]
            ],
            solver: (prices, fee) => {
                let hold = -prices[0], cash = 0;
                for (let i = 1; i < prices.length; i++) {
                    cash = Math.max(cash, hold + prices[i] - fee);
                    hold = Math.max(hold, cash - prices[i]);
                }
                return cash;
            }
        }),

        // 33. Minimum Cost For Tickets
        createProblem({
            title: "Minimum Cost For Train Tickets",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(days.length)",
            expectedSpace: "O(max_day)",
            description: "You have planned train travel days in an integer array days. Train tickets are sold in 1-day, 7-day, and 30-day passes with prices in costs array. Return the minimum expenditures you need to travel every day in your list of days.",
            constraints: "1 <= days.length <= 365\n1 <= days[i] <= 365\ncosts.length == 3",
            fnName: "mincostTickets",
            returnType: "int",
            params: [
                { name: "days", type: "vector<int>&" },
                { name: "costs", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 4, 6, 7, 8, 20], [2, 7, 15]],
                [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]]
            ],
            solver: (days, costs) => {
                const daySet = new Set(days);
                const lastDay = days[days.length - 1];
                const dp = new Array(lastDay + 1).fill(0);
                for (let i = 1; i <= lastDay; i++) {
                    if (!daySet.has(i)) {
                        dp[i] = dp[i - 1];
                    } else {
                        dp[i] = Math.min(
                            dp[i - 1] + costs[0],
                            dp[Math.max(0, i - 7)] + costs[1],
                            dp[Math.max(0, i - 30)] + costs[2]
                        );
                    }
                }
                return dp[lastDay];
            }
        }),

        // 34. Maximum Length of Repeated Subarray
        createProblem({
            title: "Maximum Length of Repeated Subarray",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n * m)",
            expectedSpace: "O(n * m)",
            description: "Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.",
            constraints: "1 <= nums1.length, nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 100",
            fnName: "findLength",
            returnType: "int",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3, 2, 1], [3, 2, 1, 4, 7]],
                [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
            ],
            solver: (nums1, nums2) => {
                const m = nums1.length, n = nums2.length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                let maxLen = 0;
                for (let i = 1; i <= m; i++) {
                    for (let j = 1; j <= n; j++) {
                        if (nums1[i - 1] === nums2[j - 1]) {
                            dp[i][j] = dp[i - 1][j - 1] + 1;
                            maxLen = Math.max(maxLen, dp[i][j]);
                        }
                    }
                }
                return maxLen;
            }
        }),

        // 35. Longest Arithmetic Subsequence of Given Difference
        createProblem({
            title: "Longest Arithmetic Subsequence with Difference",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.",
            constraints: "1 <= arr.length <= 10^5\n-10^4 <= arr[i], difference <= 10^4",
            fnName: "longestSubsequence",
            returnType: "int",
            params: [
                { name: "arr", type: "vector<int>&" },
                { name: "difference", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4], 1],
                [[1, 3, 5, 7], 1],
                [[1, 5, 7, 8, 5, 3, 4, 2, 1], -2]
            ],
            solver: (arr, difference) => {
                const dp = new Map();
                let maxLen = 1;
                for (const x of arr) {
                    const prev = dp.get(x - difference) || 0;
                    dp.set(x, prev + 1);
                    maxLen = Math.max(maxLen, prev + 1);
                }
                return maxLen;
            }
        }),

        // 36. Interleaving String Check
        createProblem({
            title: "Interleaving String Check",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["String"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.",
            constraints: "0 <= s1.length, s2.length <= 100\n0 <= s3.length <= 200",
            fnName: "isInterleave",
            returnType: "bool",
            params: [
                { name: "s1", type: "string" },
                { name: "s2", type: "string" },
                { name: "s3", type: "string" }
            ],
            rawExamples: [
                ["aabcc", "dbbca", "aadbbcbcac"],
                ["aabcc", "dbbca", "aadbbbaccc"],
                ["", "", ""]
            ],
            solver: (s1, s2, s3) => {
                if (s1.length + s2.length !== s3.length) return false;
                const m = s1.length, n = s2.length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false));
                dp[0][0] = true;
                for (let i = 1; i <= m; i++) dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
                for (let j = 1; j <= n; j++) dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
                for (let i = 1; i <= m; i++) {
                    for (let j = 1; j <= n; j++) {
                        dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
                                   (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
                    }
                }
                return dp[m][n];
            }
        }),

        // 37. Get Maximum in Generated Array
        createProblem({
            title: "Get Maximum in Generated Array",
            topic: "Dynamic Programming",
            difficulty: "Easy",
            patterns: ["Simulation", "1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given an integer n. An array nums of length n + 1 is generated such that nums[0] = 0, nums[1] = 1, nums[2 * i] = nums[i], nums[2 * i + 1] = nums[i] + nums[i + 1]. Return the maximum integer in nums.",
            constraints: "0 <= n <= 100",
            fnName: "getMaximumGenerated",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [7],
                [2],
                [3]
            ],
            solver: (n) => {
                if (n === 0) return 0;
                if (n === 1) return 1;
                const nums = new Array(n + 1).fill(0);
                nums[1] = 1;
                let maxVal = 1;
                for (let i = 1; 2 * i <= n; i++) {
                    nums[2 * i] = nums[i];
                    maxVal = Math.max(maxVal, nums[2 * i]);
                    if (2 * i + 1 <= n) {
                        nums[2 * i + 1] = nums[i] + nums[i + 1];
                        maxVal = Math.max(maxVal, nums[2 * i + 1]);
                    }
                }
                return maxVal;
            }
        }),

        // 38. Greatest Sum Divisible by Three
        createProblem({
            title: "Greatest Sum Divisible by Three",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.",
            constraints: "1 <= nums.length <= 4 * 10^4\n1 <= nums[i] <= 10^4",
            fnName: "maxSumDivThree",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[3, 6, 5, 1, 8]],
                [[4]],
                [[1, 2, 3, 4, 4]]
            ],
            solver: (nums) => {
                let dp = [0, -Infinity, -Infinity];
                for (const x of nums) {
                    const next = [...dp];
                    for (let i = 0; i < 3; i++) {
                        next[(i + x) % 3] = Math.max(next[(i + x) % 3], dp[i] + x);
                    }
                    dp = next;
                }
                return dp[0];
            }
        }),

        // 39. Matrix Block Sum Query
        createProblem({
            title: "Matrix Block Sum",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP", "Prefix Sum"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for: i - k <= r <= i + k, j - k <= c <= j + k.",
            constraints: "m == mat.length\nn == mat[i].length\n1 <= m, n, k <= 100\n1 <= mat[i][j] <= 100",
            fnName: "matrixBlockSum",
            returnType: "vector<vector<int>>",
            params: [
                { name: "mat", type: "vector<vector<int>>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1],
                [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2]
            ],
            solver: (mat, k) => {
                const m = mat.length, n = mat[0].length;
                const P = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                for (let r = 1; r <= m; r++) {
                    for (let c = 1; c <= n; c++) {
                        P[r][c] = mat[r - 1][c - 1] + P[r - 1][c] + P[r][c - 1] - P[r - 1][c - 1];
                    }
                }
                const ans = Array.from({ length: m }, () => new Array(n).fill(0));
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        const r1 = Math.max(0, r - k), c1 = Math.max(0, c - k);
                        const r2 = Math.min(m - 1, r + k), c2 = Math.min(n - 1, c + k);
                        ans[r][c] = P[r2 + 1][c2 + 1] - P[r1][c2 + 1] - P[r2 + 1][c1] + P[r1][c1];
                    }
                }
                return ans;
            }
        }),

        // 40. Minimum Delete Operations for Two Strings
        createProblem({
            title: "Delete Operations for Two Strings",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["String"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.",
            constraints: "1 <= word1.length, word2.length <= 500\nword1 and word2 consist of lowercase English letters.",
            fnName: "minDistance",
            returnType: "int",
            params: [
                { name: "word1", type: "string" },
                { name: "word2", type: "string" }
            ],
            rawExamples: [
                ["sea", "eat"],
                ["leetcode", "etco"]
            ],
            solver: (word1, word2) => {
                const m = word1.length, n = word2.length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                for (let i = 1; i <= m; i++) {
                    for (let j = 1; j <= n; j++) {
                        if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
                        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                    }
                }
                const lcs = dp[m][n];
                return (m - lcs) + (n - lcs);
            }
        }),

        // 41. Number of Longest Increasing Subsequences
        createProblem({
            title: "Number of Longest Increasing Subsequences",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums, return the number of longest increasing subsequences.",
            constraints: "1 <= nums.length <= 2000\n-10^6 <= nums[i] <= 10^6",
            fnName: "findNumberOfLIS",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 3, 5, 4, 7]],
                [[2, 2, 2, 2, 2]]
            ],
            solver: (nums) => {
                const n = nums.length;
                const len = new Array(n).fill(1);
                const cnt = new Array(n).fill(1);
                let maxLen = 1;
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < i; j++) {
                        if (nums[j] < nums[i]) {
                            if (len[j] + 1 > len[i]) {
                                len[i] = len[j] + 1;
                                cnt[i] = cnt[j];
                            } else if (len[j] + 1 === len[i]) {
                                cnt[i] += cnt[j];
                            }
                        }
                    }
                    maxLen = Math.max(maxLen, len[i]);
                }
                let total = 0;
                for (let i = 0; i < n; i++) {
                    if (len[i] === maxLen) total += cnt[i];
                }
                return total;
            }
        }),

        // 42. Russian Doll Envelopes Count
        createProblem({
            title: "Russian Doll Envelopes Maximum Fits",
            topic: "Dynamic Programming",
            difficulty: "Hard",
            patterns: ["Binary Search", "1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope. One envelope can fit into another if and only if both width and height are strictly greater. Return the maximum number of envelopes you can Russian doll.",
            constraints: "1 <= envelopes.length <= 10^5\nenvelopes[i].length == 2\n1 <= wi, hi <= 10^5",
            fnName: "maxEnvelopes",
            returnType: "int",
            params: [{ name: "envelopes", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[5, 4], [6, 4], [6, 7], [2, 3]]],
                [[[1, 1], [1, 1], [1, 1]]]
            ],
            solver: (envelopes) => {
                envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
                const tails = [];
                for (const [, h] of envelopes) {
                    let l = 0, r = tails.length;
                    while (l < r) {
                        const mid = Math.floor((l + r) / 2);
                        if (tails[mid] < h) l = mid + 1;
                        else r = mid;
                    }
                    tails[l] = h;
                }
                return tails.length;
            }
        }),

        // 43. Maximum Subarray Sum with One Deletion
        createProblem({
            title: "Maximum Subarray Sum with One Deletion",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of integers, return the maximum sum for a non-empty subarray with at most one element deletion.",
            constraints: "1 <= arr.length <= 10^5\n-10^4 <= arr[i] <= 10^4",
            fnName: "maximumSum",
            returnType: "int",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[1, -2, 0, 3]],
                [[1, -2, -2, 3]],
                [[-1, -1, -1, -1]]
            ],
            solver: (arr) => {
                let noDel = arr[0], oneDel = 0, maxTotal = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    const x = arr[i];
                    oneDel = Math.max(oneDel + x, noDel);
                    noDel = Math.max(noDel + x, x);
                    maxTotal = Math.max(maxTotal, noDel, oneDel);
                }
                return maxTotal;
            }
        }),

        // 44. Longest String Chain Length
        createProblem({
            title: "Longest String Chain Length",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP", "Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n * l^2)",
            expectedSpace: "O(n)",
            description: "Given a list of words, each word consists of English lowercase letters. wordA is a predecessor of wordB if inserting one letter into wordA makes it equal to wordB. Return the length of the longest possible word chain.",
            constraints: "1 <= words.length <= 1000\n1 <= words[i].length <= 16",
            fnName: "longestStrChain",
            returnType: "int",
            params: [{ name: "words", type: "vector<string>&" }],
            rawExamples: [
                [["a", "b", "ba", "bca", "bda", "bdca"]],
                [["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]]
            ],
            solver: (words) => {
                words.sort((a, b) => a.length - b.length);
                const dp = new Map();
                let maxChain = 1;
                for (const w of words) {
                    let best = 1;
                    for (let i = 0; i < w.length; i++) {
                        const pred = w.slice(0, i) + w.slice(i + 1);
                        if (dp.has(pred)) best = Math.max(best, dp.get(pred) + 1);
                    }
                    dp.set(w, best);
                    maxChain = Math.max(maxChain, best);
                }
                return maxChain;
            }
        }),

        // 45. Ones and Zeroes (2D 0/1 Knapsack)
        createProblem({
            title: "Ones and Zeroes 2D Knapsack",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP", "Knapsack"],
            dataStructures: ["Matrix"],
            expectedTime: "O(len * m * n)",
            expectedSpace: "O(m * n)",
            description: "You are given an array of binary strings strs and two integers m and n. Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.",
            constraints: "1 <= strs.length <= 600\n1 <= strs[i].length <= 100\n1 <= m, n <= 100",
            fnName: "findMaxForm",
            returnType: "int",
            params: [
                { name: "strs", type: "vector<string>&" },
                { name: "m", type: "int" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [["10", "0001", "111001", "1", "0"], 5, 3],
                [["10", "0", "1"], 1, 1]
            ],
            solver: (strs, m, n) => {
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                for (const s of strs) {
                    let z = 0, o = 0;
                    for (const c of s) { if (c === '0') z++; else o++; }
                    for (let i = m; i >= z; i--) {
                        for (let j = n; j >= o; j--) {
                            dp[i][j] = Math.max(dp[i][j], dp[i - z][j - o] + 1);
                        }
                    }
                }
                return dp[m][n];
            }
        }),

        // 46. Knight Dialer
        createProblem({
            title: "Knight Dialer Total Distinct Numbers",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["1D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "The chess knight has a distinct movement on a phone keypad. Given an integer n, return how many distinct phone numbers of length n we can dial modulo 10^9 + 7.",
            constraints: "1 <= n <= 5000",
            fnName: "knightDialer",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [1],
                [2],
                [3131]
            ],
            solver: (n) => {
                const MOD = 1000000007;
                const moves = [
                    [4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9],
                    [], [0, 1, 7], [2, 6], [1, 3], [2, 4]
                ];
                let dp = new Array(10).fill(1);
                for (let step = 1; step < n; step++) {
                    const next = new Array(10).fill(0);
                    for (let i = 0; i < 10; i++) {
                        for (const nxt of moves[i]) {
                            next[nxt] = (next[nxt] + dp[i]) % MOD;
                        }
                    }
                    dp = next;
                }
                return dp.reduce((a, b) => (a + b) % MOD, 0);
            }
        }),

        // 47. Minimum ASCII Delete Sum for Two Strings
        createProblem({
            title: "Minimum ASCII Delete Sum for Two Strings",
            topic: "Dynamic Programming",
            difficulty: "Medium",
            patterns: ["2D DP"],
            dataStructures: ["String"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.",
            constraints: "1 <= s1.length, s2.length <= 1000\ns1 and s2 consist of lowercase English letters.",
            fnName: "minimumDeleteSum",
            returnType: "int",
            params: [
                { name: "s1", type: "string" },
                { name: "s2", type: "string" }
            ],
            rawExamples: [
                ["sea", "eat"],
                ["delete", "leet"]
            ],
            solver: (s1, s2) => {
                const m = s1.length, n = s2.length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                for (let i = 1; i <= m; i++) dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
                for (let j = 1; j <= n; j++) dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
                for (let i = 1; i <= m; i++) {
                    for (let j = 1; j <= n; j++) {
                        if (s1[i - 1] === s2[j - 1]) {
                            dp[i][j] = dp[i - 1][j - 1];
                        } else {
                            dp[i][j] = Math.min(
                                dp[i - 1][j] + s1.charCodeAt(i - 1),
                                dp[i][j - 1] + s2.charCodeAt(j - 1)
                            );
                        }
                    }
                }
                return dp[m][n];
            }
        }),

        // 48. Distinct Subsequences Count
        createProblem({
            title: "Distinct Subsequences Target Count",
            topic: "Dynamic Programming",
            difficulty: "Hard",
            patterns: ["2D DP"],
            dataStructures: ["String"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given two strings s and t, return the number of distinct subsequences of s which equals t.",
            constraints: "1 <= s.length, t.length <= 1000\ns and t consist of English letters.",
            fnName: "numDistinct",
            returnType: "int",
            params: [
                { name: "s", type: "string" },
                { name: "t", type: "string" }
            ],
            rawExamples: [
                ["rabbbit", "rabbit"],
                ["babgbag", "bag"]
            ],
            solver: (s, t) => {
                const m = s.length, n = t.length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
                for (let i = 0; i <= m; i++) dp[i][0] = 1;
                for (let i = 1; i <= m; i++) {
                    for (let j = 1; j <= n; j++) {
                        if (s[i - 1] === t[j - 1]) {
                            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
                        } else {
                            dp[i][j] = dp[i - 1][j];
                        }
                    }
                }
                return dp[m][n];
            }
        }),

        // 49. Dungeon Game Minimum Initial Health
        createProblem({
            title: "Dungeon Game Minimum Initial Health",
            topic: "Dynamic Programming",
            difficulty: "Hard",
            patterns: ["2D DP"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon grid. The knight starts at top-left. Points can increase or decrease health. Determine the knight's minimum initial health so that he is able to rescue the princess (health must never drop <= 0).",
            constraints: "m == dungeon.length\nn == dungeon[i].length\n1 <= m, n <= 200\n-1000 <= dungeon[i][j] <= 1000",
            fnName: "calculateMinimumHP",
            returnType: "int",
            params: [{ name: "dungeon", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]],
                [[[0]]]
            ],
            solver: (dungeon) => {
                const m = dungeon.length, n = dungeon[0].length;
                const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(Infinity));
                dp[m][n - 1] = 1;
                dp[m - 1][n] = 1;
                for (let r = m - 1; r >= 0; r--) {
                    for (let c = n - 1; c >= 0; c--) {
                        const need = Math.min(dp[r + 1][c], dp[r][c + 1]) - dungeon[r][c];
                        dp[r][c] = Math.max(1, need);
                    }
                }
                return dp[0][0];
            }
        }),

        // 50. Super Egg Drop Minimum Moves
        createProblem({
            title: "Super Egg Drop Minimum Moves",
            topic: "Dynamic Programming",
            difficulty: "Hard",
            patterns: ["Binary Search", "2D DP"],
            dataStructures: ["Array"],
            expectedTime: "O(k * log n)",
            expectedSpace: "O(k)",
            description: "You are given k identical eggs and you have access to a building with n floors labeled from 1 to n. Return the minimum number of moves that you need to determine with certainty what the highest floor f is from which an egg will not break.",
            constraints: "1 <= k <= 100\n1 <= n <= 10^4",
            fnName: "superEggDrop",
            returnType: "int",
            params: [
                { name: "k", type: "int" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [1, 2],
                [2, 6],
                [3, 14]
            ],
            solver: (k, n) => {
                const dp = new Array(k + 1).fill(0);
                let m = 0;
                while (dp[k] < n) {
                    m++;
                    for (let i = k; i >= 1; i--) {
                        dp[i] = dp[i] + dp[i - 1] + 1;
                    }
                }
                return m;
            }
        })
    ];
}
