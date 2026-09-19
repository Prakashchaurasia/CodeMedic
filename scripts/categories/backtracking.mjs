import { createProblem } from "../problem_blueprints.mjs";

export function getBacktrackingProblems() {
    return [
        // 1. Subsets Count
        createProblem({
            title: "Subsets (Power Set) Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["Array"],
            expectedTime: "O(2^n)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums of unique elements, return the total count of subsets (the power set) that can be generated.",
            constraints: "1 <= nums.length <= 10\n-10 <= nums[i] <= 10\nAll the numbers of nums are unique.",
            fnName: "subsetsCount",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3]],
                [[0]]
            ],
            solver: (nums) => Math.pow(2, nums.length)
        }),

        // 2. Permutations
        createProblem({
            title: "Unique Permutations Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["Array"],
            expectedTime: "O(n!)",
            expectedSpace: "O(n)",
            description: "Given an array nums of distinct integers, return the number of possible permutations.",
            constraints: "1 <= nums.length <= 8\n-10 <= nums[i] <= 10\nAll the integers of nums are unique.",
            fnName: "permuteCount",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3]],
                [[0, 1]],
                [[1]]
            ],
            solver: (nums) => {
                const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
                return fact(nums.length);
            }
        }),

        // 3. Combination Sum Count
        createProblem({
            title: "Combination Sum Count of Ways",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["Array"],
            expectedTime: "O(2^t)",
            expectedSpace: "O(t)",
            description: "Given an array of distinct integers candidates and a target integer target, return the number of unique combinations of candidates where the chosen numbers sum to target. The same number may be chosen unlimited times.",
            constraints: "1 <= candidates.length <= 30\n2 <= candidates[i] <= 40\nAll elements of candidates are distinct.\n1 <= target <= 40",
            fnName: "combinationSumCount",
            returnType: "int",
            params: [
                { name: "candidates", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[2, 3, 6, 7], 7],
                [[2, 3, 5], 8],
                [[2], 1]
            ],
            solver: (candidates, target) => {
                let count = 0;
                const dfs = (start, rem) => {
                    if (rem === 0) { count++; return; }
                    if (rem < 0) return;
                    for (let i = start; i < candidates.length; i++) {
                        dfs(i, rem - candidates[i]);
                    }
                };
                dfs(0, target);
                return count;
            }
        }),

        // 4. Generate Parentheses
        createProblem({
            title: "Generate Parentheses Combinations Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["String"],
            expectedTime: "O(4^n / sqrt(n))",
            expectedSpace: "O(n)",
            description: "Given n pairs of parentheses, return the number of combinations of well-formed parentheses that can be generated (Catalan number).",
            constraints: "1 <= n <= 8",
            fnName: "generateParenthesisCount",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [3],
                [1],
                [4]
            ],
            solver: (n) => {
                let count = 0;
                const dfs = (open, close) => {
                    if (open === n && close === n) { count++; return; }
                    if (open < n) dfs(open + 1, close);
                    if (close < open) dfs(open, close + 1);
                };
                dfs(0, 0);
                return count;
            }
        }),

        // 5. Letter Combinations of a Phone Number
        createProblem({
            title: "Letter Combinations of a Phone Number Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["String", "Array"],
            expectedTime: "O(4^n)",
            expectedSpace: "O(n)",
            description: "Given a string containing digits from 2-9 inclusive, return the number of all possible letter combinations that the number could represent based on telephone buttons.",
            constraints: "0 <= digits.length <= 4\ndigits[i] is a digit in the range ['2', '9'].",
            fnName: "letterCombinationsCount",
            returnType: "int",
            params: [{ name: "digits", type: "string" }],
            rawExamples: [
                ["23"],
                [""],
                ["2"]
            ],
            solver: (digits) => {
                if (!digits) return 0;
                const map = {
                    '2': 3, '3': 3, '4': 3, '5': 3, '6': 3, '7': 4, '8': 3, '9': 4
                };
                return digits.split("").reduce((acc, d) => acc * map[d], 1);
            }
        }),

        // 6. N-Queens Total Solutions
        createProblem({
            title: "N-Queens Total Solutions Count",
            topic: "Recursion & Backtracking",
            difficulty: "Hard",
            patterns: ["Backtracking"],
            dataStructures: ["Array"],
            expectedTime: "O(n!)",
            expectedSpace: "O(n)",
            description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return the number of distinct solutions to the n-queens puzzle.",
            constraints: "1 <= n <= 9",
            fnName: "totalNQueens",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [4],
                [1],
                [5]
            ],
            solver: (n) => {
                let count = 0;
                const cols = new Set(), diag1 = new Set(), diag2 = new Set();
                const dfs = (r) => {
                    if (r === n) { count++; return; }
                    for (let c = 0; c < n; c++) {
                        if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;
                        cols.add(c); diag1.add(r - c); diag2.add(r + c);
                        dfs(r + 1);
                        cols.delete(c); diag1.delete(r - c); diag2.delete(r + c);
                    }
                };
                dfs(0);
                return count;
            }
        }),

        // 7. Word Search in Board
        createProblem({
            title: "Word Search Exists in Matrix",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking", "DFS"],
            dataStructures: ["Matrix", "String"],
            expectedTime: "O(m * n * 3^l)",
            expectedSpace: "O(l)",
            description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontal or vertical).",
            constraints: "m == board.length\nn = board[i].length\n1 <= m, n <= 6\n1 <= word.length <= 15\nboard and word consist of only lowercase and uppercase English letters.",
            fnName: "exist",
            returnType: "bool",
            params: [
                { name: "board", type: "vector<vector<string>>&" },
                { name: "word", type: "string" }
            ],
            rawExamples: [
                [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"],
                [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"],
                [[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"]
            ],
            solver: (board, word) => {
                const m = board.length, n = board[0].length;
                const visited = Array.from({ length: m }, () => new Array(n).fill(false));
                const dfs = (r, c, idx) => {
                    if (idx === word.length) return true;
                    if (r < 0 || r >= m || c < 0 || c >= n || visited[r][c] || board[r][c] !== word[idx]) return false;
                    visited[r][c] = true;
                    const found = dfs(r + 1, c, idx + 1) || dfs(r - 1, c, idx + 1) || dfs(r, c + 1, idx + 1) || dfs(r, c - 1, idx + 1);
                    visited[r][c] = false;
                    return found;
                };
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (dfs(r, c, 0)) return true;
                    }
                }
                return false;
            }
        }),

        // 8. Palindrome Partitioning Count
        createProblem({
            title: "Palindrome Partitioning Ways Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking", "Dynamic Programming"],
            dataStructures: ["String"],
            expectedTime: "O(n * 2^n)",
            expectedSpace: "O(n)",
            description: "Given a string s, partition s such that every substring of the partition is a palindrome. Return the total number of possible palindrome partitionings of s.",
            constraints: "1 <= s.length <= 16\ns contains only lowercase English letters.",
            fnName: "partitionCount",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["aab"],
                ["a"]
            ],
            solver: (s) => {
                const isPal = (str) => {
                    let l = 0, r = str.length - 1;
                    while (l < r) {
                        if (str[l++] !== str[r--]) return false;
                    }
                    return true;
                };
                let count = 0;
                const dfs = (start) => {
                    if (start === s.length) { count++; return; }
                    for (let end = start + 1; end <= s.length; end++) {
                        const sub = s.slice(start, end);
                        if (isPal(sub)) dfs(end);
                    }
                };
                dfs(0);
                return count;
            }
        }),

        // 9. Combinations of K Numbers Out of N
        createProblem({
            title: "Combinations of K Numbers Out of N Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking", "Math"],
            dataStructures: ["Array"],
            expectedTime: "O(k)",
            expectedSpace: "O(1)",
            description: "Given two integers n and k, return the total count of combinations of k numbers chosen from the range [1, n] (n choose k).",
            constraints: "1 <= n <= 20\n1 <= k <= n",
            fnName: "combineCount",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [4, 2],
                [1, 1],
                [5, 3]
            ],
            solver: (n, k) => {
                let res = 1;
                for (let i = 1; i <= k; i++) {
                    res = (res * (n - i + 1)) / i;
                }
                return Math.round(res);
            }
        }),

        // 10. Combination Sum III Count
        createProblem({
            title: "Combination Sum III Count of Valid Sets",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["Array"],
            expectedTime: "O(9 choose k)",
            expectedSpace: "O(k)",
            description: "Find all valid combinations of k numbers that sum up to n such that only numbers 1 through 9 are used and each number is used at most once. Return the number of valid combinations.",
            constraints: "2 <= k <= 9\n1 <= n <= 60",
            fnName: "combinationSum3Count",
            returnType: "int",
            params: [
                { name: "k", type: "int" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [3, 7],
                [3, 9],
                [4, 1]
            ],
            solver: (k, n) => {
                let count = 0;
                const dfs = (start, chosen, sum) => {
                    if (chosen === k) {
                        if (sum === n) count++;
                        return;
                    }
                    for (let i = start; i <= 9; i++) {
                        if (sum + i <= n) dfs(i + 1, chosen + 1, sum + i);
                    }
                };
                dfs(1, 0, 0);
                return count;
            }
        }),

        // 11. Beautiful Arrangement Count
        createProblem({
            title: "Beautiful Arrangement Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["Array"],
            expectedTime: "O(k)",
            expectedSpace: "O(n)",
            description: "Suppose you have n integers labeled 1 through n. A permutation is beautiful if for every 1 <= i <= n: either perm[i] % i == 0 or i % perm[i] == 0. Return the number of beautiful arrangements.",
            constraints: "1 <= n <= 15",
            fnName: "countArrangement",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [2],
                [1],
                [3]
            ],
            solver: (n) => {
                let count = 0;
                const visited = new Array(n + 1).fill(false);
                const dfs = (pos) => {
                    if (pos > n) { count++; return; }
                    for (let i = 1; i <= n; i++) {
                        if (!visited[i] && (i % pos === 0 || pos % i === 0)) {
                            visited[i] = true;
                            dfs(pos + 1);
                            visited[i] = false;
                        }
                    }
                };
                dfs(1);
                return count;
            }
        }),

        // 12. Matchsticks to Square
        createProblem({
            title: "Matchsticks to Square Possible",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking", "0/1 Knapsack"],
            dataStructures: ["Array"],
            expectedTime: "O(4^n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. Return true if you can make this square and false otherwise.",
            constraints: "1 <= matchsticks.length <= 15\n1 <= matchsticks[i] <= 10^8",
            fnName: "makesquare",
            returnType: "bool",
            params: [{ name: "matchsticks", type: "vector<int>&" }],
            rawExamples: [
                [[1, 1, 2, 2, 2]],
                [[3, 3, 3, 3, 4]]
            ],
            solver: (matchsticks) => {
                const sum = matchsticks.reduce((a, b) => a + b, 0);
                if (sum % 4 !== 0) return false;
                const side = sum / 4;
                matchsticks.sort((a, b) => b - a);
                if (matchsticks[0] > side) return false;
                const sides = [0, 0, 0, 0];
                const dfs = (idx) => {
                    if (idx === matchsticks.length) {
                        return sides[0] === side && sides[1] === side && sides[2] === side;
                    }
                    for (let i = 0; i < 4; i++) {
                        if (sides[i] + matchsticks[idx] <= side) {
                            sides[i] += matchsticks[idx];
                            if (dfs(idx + 1)) return true;
                            sides[i] -= matchsticks[idx];
                        }
                        if (sides[i] === 0) break;
                    }
                    return false;
                };
                return dfs(0);
            }
        }),

        // 13. Partition to K Equal Sum Subsets
        createProblem({
            title: "Partition to K Equal Sum Subsets Possible",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["Array"],
            expectedTime: "O(k^n)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.",
            constraints: "1 <= k <= nums.length <= 16\n1 <= nums[i] <= 10^4\nThe frequency of each element is in the range [1, 4].",
            fnName: "canPartitionKSubsets",
            returnType: "bool",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[4, 3, 2, 3, 5, 2, 1], 4],
                [[1, 2, 3, 4], 3]
            ],
            solver: (nums, k) => {
                const sum = nums.reduce((a, b) => a + b, 0);
                if (sum % k !== 0) return false;
                const target = sum / k;
                nums.sort((a, b) => b - a);
                if (nums[0] > target) return false;
                const buckets = new Array(k).fill(0);
                const dfs = (idx) => {
                    if (idx === nums.length) return true;
                    for (let i = 0; i < k; i++) {
                        if (buckets[i] + nums[idx] <= target) {
                            buckets[i] += nums[idx];
                            if (dfs(idx + 1)) return true;
                            buckets[i] -= nums[idx];
                        }
                        if (buckets[i] === 0) break;
                    }
                    return false;
                };
                return dfs(0);
            }
        }),

        // 14. Letter Case Permutation Count
        createProblem({
            title: "Letter Case Permutation Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["String"],
            expectedTime: "O(2^letters)",
            expectedSpace: "O(1)",
            description: "Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string. Return the count of all distinct possible strings that can be produced.",
            constraints: "1 <= s.length <= 12\ns consists of lowercase English letters, uppercase English letters, and digits.",
            fnName: "letterCasePermutationCount",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["a1b2"],
                ["3z4"],
                ["12345"]
            ],
            solver: (s) => {
                let letters = 0;
                for (const c of s) {
                    if (/[a-zA-Z]/.test(c)) letters++;
                }
                return Math.pow(2, letters);
            }
        }),

        // 15. Binary Watch Possible Times Count
        createProblem({
            title: "Binary Watch Possible Times Count",
            topic: "Recursion & Backtracking",
            difficulty: "Easy",
            patterns: ["Backtracking", "Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "A binary watch has 4 LEDs on the top to represent hours (0-11), and 6 LEDs on the bottom to represent minutes (0-59). Given an integer turnedOn which represents the number of LEDs that are currently on, return the number of valid times the watch could represent.",
            constraints: "0 <= turnedOn <= 10",
            fnName: "readBinaryWatchCount",
            returnType: "int",
            params: [{ name: "turnedOn", type: "int" }],
            rawExamples: [
                [1],
                [9]
            ],
            solver: (turnedOn) => {
                const countBits = (n) => {
                    let c = 0;
                    while (n > 0) { c += n & 1; n >>= 1; }
                    return c;
                };
                let total = 0;
                for (let h = 0; h < 12; h++) {
                    for (let m = 0; m < 60; m++) {
                        if (countBits(h) + countBits(m) === turnedOn) total++;
                    }
                }
                return total;
            }
        }),

        // 16. Restore IP Addresses Count
        createProblem({
            title: "Restore IP Addresses Valid Count",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking"],
            dataStructures: ["String"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros. Given a string s containing only digits, return the number of valid IP addresses that can be formed.",
            constraints: "1 <= s.length <= 20\ns consists of digits only.",
            fnName: "restoreIpAddressesCount",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["25525511135"],
                ["0000"],
                ["101023"]
            ],
            solver: (s) => {
                let count = 0;
                const dfs = (start, parts) => {
                    if (parts === 4) {
                        if (start === s.length) count++;
                        return;
                    }
                    for (let len = 1; len <= 3 && start + len <= s.length; len++) {
                        const sub = s.substring(start, start + len);
                        if (sub.length > 1 && sub[0] === '0') continue;
                        if (Number(sub) <= 255) dfs(start + len, parts + 1);
                    }
                };
                dfs(0, 0);
                return count;
            }
        }),

        // 17. Permutation Sequence Kth Value
        createProblem({
            title: "Permutation Sequence Kth Value",
            topic: "Recursion & Backtracking",
            difficulty: "Hard",
            patterns: ["Math", "Recursion"],
            dataStructures: ["String"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "By listing and labeling all permutations of {1, 2, ..., n} in increasing order, return the kth permutation sequence as a string.",
            constraints: "1 <= n <= 9\n1 <= k <= n!",
            fnName: "getPermutation",
            returnType: "string",
            params: [
                { name: "n", type: "int" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [3, 3],
                [4, 9],
                [3, 1]
            ],
            solver: (n, k) => {
                let numbers = Array.from({ length: n }, (_, i) => i + 1);
                let fact = [1];
                for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * i;
                k--;
                let res = "";
                for (let i = n; i >= 1; i--) {
                    const idx = Math.floor(k / fact[i - 1]);
                    res += numbers[idx];
                    numbers.splice(idx, 1);
                    k %= fact[i - 1];
                }
                return res;
            }
        }),

        // 18. Maximum Length of a Concatenated String with Unique Characters
        createProblem({
            title: "Max Length of Concatenated String with Unique Characters",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking", "Bit Manipulation"],
            dataStructures: ["String", "Array"],
            expectedTime: "O(2^n)",
            expectedSpace: "O(n)",
            description: "You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters. Return the maximum possible length of s.",
            constraints: "1 <= arr.length <= 16\n1 <= arr[i].length <= 26\narr[i] contains only lowercase English letters.",
            fnName: "maxLength",
            returnType: "int",
            params: [{ name: "arr", type: "vector<string>&" }],
            rawExamples: [
                [["un", "iq", "ue"]],
                [["cha", "r", "act", "ers"]],
                [["abcdefghijklmnopqrstuvwxyz"]]
            ],
            solver: (arr) => {
                const validWords = [];
                for (const w of arr) {
                    const set = new Set(w);
                    if (set.size === w.length) validWords.push(w);
                }
                let maxLen = 0;
                const dfs = (idx, cur) => {
                    const set = new Set(cur);
                    if (set.size !== cur.length) return;
                    maxLen = Math.max(maxLen, cur.length);
                    for (let i = idx; i < validWords.length; i++) {
                        dfs(i + 1, cur + validWords[i]);
                    }
                };
                dfs(0, "");
                return maxLen;
            }
        }),

        // 19. Sudoku Valid Row and Col Check
        createProblem({
            title: "Valid Sudoku Initial Board Check",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Hashing", "Matrix"],
            dataStructures: ["Matrix", "Hash Set"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the mention rules (1-9 without repetition in rows, cols, or 3x3 subboxes). Empty cells are represented by 0.",
            constraints: "board.length == 9\nboard[i].length == 9\n0 <= board[i][j] <= 9",
            fnName: "isValidSudoku",
            returnType: "bool",
            params: [{ name: "board", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[
                    [5, 3, 0, 0, 7, 0, 0, 0, 0],
                    [6, 0, 0, 1, 9, 5, 0, 0, 0],
                    [0, 9, 8, 0, 0, 0, 0, 6, 0],
                    [8, 0, 0, 0, 6, 0, 0, 0, 3],
                    [4, 0, 0, 8, 0, 3, 0, 0, 1],
                    [7, 0, 0, 0, 2, 0, 0, 0, 6],
                    [0, 6, 0, 0, 0, 0, 2, 8, 0],
                    [0, 0, 0, 4, 1, 9, 0, 0, 5],
                    [0, 0, 0, 0, 8, 0, 0, 7, 9]
                ]],
                [[
                    [8, 3, 0, 0, 7, 0, 0, 0, 0],
                    [6, 0, 0, 1, 9, 5, 0, 0, 0],
                    [0, 9, 8, 0, 0, 0, 0, 6, 0],
                    [8, 0, 0, 0, 6, 0, 0, 0, 3],
                    [4, 0, 0, 8, 0, 3, 0, 0, 1],
                    [7, 0, 0, 0, 2, 0, 0, 0, 6],
                    [0, 6, 0, 0, 0, 0, 2, 8, 0],
                    [0, 0, 0, 4, 1, 9, 0, 0, 5],
                    [0, 0, 0, 0, 8, 0, 0, 7, 9]
                ]]
            ],
            solver: (board) => {
                const rows = Array.from({ length: 9 }, () => new Set());
                const cols = Array.from({ length: 9 }, () => new Set());
                const boxes = Array.from({ length: 9 }, () => new Set());
                for (let r = 0; r < 9; r++) {
                    for (let c = 0; c < 9; c++) {
                        const val = board[r][c];
                        if (val === 0) continue;
                        const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                        if (rows[r].has(val) || cols[c].has(val) || boxes[b].has(val)) return false;
                        rows[r].add(val);
                        cols[c].add(val);
                        boxes[b].add(val);
                    }
                }
                return true;
            }
        }),

        // 20. Count Number of Maximum Bitwise-OR Subsets
        createProblem({
            title: "Count Max Bitwise-OR Subsets",
            topic: "Recursion & Backtracking",
            difficulty: "Medium",
            patterns: ["Backtracking", "Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(2^n)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR.",
            constraints: "1 <= nums.length <= 16\n1 <= nums[i] <= 10^5",
            fnName: "countMaxOrSubsets",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[3, 1]],
                [[2, 2, 2]],
                [[3, 2, 1, 5]]
            ],
            solver: (nums) => {
                const maxOr = nums.reduce((a, b) => a | b, 0);
                let count = 0;
                const dfs = (idx, curOr) => {
                    if (idx === nums.length) {
                        if (curOr === maxOr) count++;
                        return;
                    }
                    dfs(idx + 1, curOr | nums[idx]);
                    dfs(idx + 1, curOr);
                };
                dfs(0, 0);
                return count;
            }
        })
    ];
}
