import { createProblem } from "../problem_blueprints.mjs";

export function getStackQueueProblems() {
    return [
        // 1. Valid Parentheses
        createProblem({
            title: "Valid Parentheses",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.",
            constraints: "1 <= s.length <= 10^4\ns consists of parentheses only '()[]{}'.",
            fnName: "isValid",
            returnType: "bool",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["()"],
                ["()[]{}"],
                ["(]"]
            ],
            solver: (s) => {
                const stack = [];
                const map = { ')': '(', '}': '{', ']': '[' };
                for (const c of s) {
                    if (map[c]) {
                        if (stack.pop() !== map[c]) return false;
                    } else {
                        stack.push(c);
                    }
                }
                return stack.length === 0;
            }
        }),

        // 2. Evaluate Reverse Polish Notation
        createProblem({
            title: "Evaluate Reverse Polish Notation",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression and return an integer that represents the value of the expression.",
            constraints: "1 <= tokens.length <= 10^4\ntokens[i] is either an operator: \"+\", \"-\", \"*\", or \"/\", or an integer in the range [-200, 200].",
            fnName: "evalRPN",
            returnType: "int",
            params: [{ name: "tokens", type: "vector<string>&" }],
            rawExamples: [
                [["2", "1", "+", "3", "*"]],
                [["4", "13", "5", "/", "+"]],
                [["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]]
            ],
            solver: (tokens) => {
                const stack = [];
                for (const t of tokens) {
                    if (t === "+" || t === "-" || t === "*" || t === "/") {
                        const b = stack.pop();
                        const a = stack.pop();
                        if (t === "+") stack.push(a + b);
                        if (t === "-") stack.push(a - b);
                        if (t === "*") stack.push(a * b);
                        if (t === "/") stack.push(Math.trunc(a / b));
                    } else {
                        stack.push(Number(t));
                    }
                }
                return stack[0];
            }
        }),

        // 3. Daily Temperatures
        createProblem({
            title: "Daily Temperatures",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0.",
            constraints: "1 <= temperatures.length <= 10^5\n30 <= temperatures[i] <= 100",
            fnName: "dailyTemperatures",
            returnType: "vector<int>",
            params: [{ name: "temperatures", type: "vector<int>&" }],
            rawExamples: [
                [[73, 74, 75, 71, 69, 72, 76, 73]],
                [[30, 40, 50, 60]],
                [[30, 60, 90]]
            ],
            solver: (temperatures) => {
                const n = temperatures.length;
                const ans = new Array(n).fill(0);
                const stack = [];
                for (let i = 0; i < n; i++) {
                    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                        const prev = stack.pop();
                        ans[prev] = i - prev;
                    }
                    stack.push(i);
                }
                return ans;
            }
        }),

        // 4. Next Greater Element I
        createProblem({
            title: "Next Greater Element I",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Monotonic Stack", "Hashing"],
            dataStructures: ["Stack", "Hash Map", "Array"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(m)",
            description: "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array. Given two distinct arrays nums1 and nums2 where nums1 is a subset of nums2, find the next greater element for each value in nums1.",
            constraints: "1 <= nums1.length <= nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 10^4\nAll integers in nums1 and nums2 are unique.\nAll the integers of nums1 also appear in nums2.",
            fnName: "nextGreaterElement",
            returnType: "vector<int>",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[4, 1, 2], [1, 3, 4, 2]],
                [[2, 4], [1, 2, 3, 4]]
            ],
            solver: (nums1, nums2) => {
                const map = new Map();
                const stack = [];
                for (const x of nums2) {
                    while (stack.length > 0 && x > stack[stack.length - 1]) {
                        map.set(stack.pop(), x);
                    }
                    stack.push(x);
                }
                return nums1.map(x => map.get(x) !== undefined ? map.get(x) : -1);
            }
        }),

        // 5. Next Greater Element II (Circular)
        createProblem({
            title: "Next Greater Element II Circular Array",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums. If it doesn't exist, return -1 for this number.",
            constraints: "1 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9",
            fnName: "nextGreaterElements",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 1]],
                [[1, 2, 3, 4, 3]]
            ],
            solver: (nums) => {
                const n = nums.length;
                const ans = new Array(n).fill(-1);
                const stack = [];
                for (let i = 0; i < 2 * n; i++) {
                    const num = nums[i % n];
                    while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
                        ans[stack.pop()] = num;
                    }
                    if (i < n) stack.push(i);
                }
                return ans;
            }
        }),

        // 6. Asteroid Collision
        createProblem({
            title: "Asteroid Collision",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "We are given an array asteroids of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive = right, negative = left). Each asteroid moves at the same speed. Find the state of the asteroids after all collisions.",
            constraints: "2 <= asteroids.length <= 10^4\n-1000 <= asteroids[i] <= 1000\nasteroids[i] != 0",
            fnName: "asteroidCollision",
            returnType: "vector<int>",
            params: [{ name: "asteroids", type: "vector<int>&" }],
            rawExamples: [
                [[5, 10, -5]],
                [[8, -8]],
                [[10, 2, -5]]
            ],
            solver: (asteroids) => {
                const stack = [];
                for (const ast of asteroids) {
                    let alive = true;
                    while (alive && ast < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
                        if (stack[stack.length - 1] < -ast) {
                            stack.pop();
                        } else if (stack[stack.length - 1] === -ast) {
                            stack.pop();
                            alive = false;
                        } else {
                            alive = false;
                        }
                    }
                    if (alive) stack.push(ast);
                }
                return stack;
            }
        }),

        // 7. Largest Rectangle in Histogram
        createProblem({
            title: "Largest Rectangle in Histogram",
            topic: "Stacks & Queues",
            difficulty: "Hard",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
            constraints: "1 <= heights.length <= 10^5\n0 <= heights[i] <= 10^4",
            fnName: "largestRectangleArea",
            returnType: "int",
            params: [{ name: "heights", type: "vector<int>&" }],
            rawExamples: [
                [[2, 1, 5, 6, 2, 3]],
                [[2, 4]]
            ],
            solver: (heights) => {
                const h = [...heights, 0];
                const stack = [-1];
                let maxArea = 0;
                for (let i = 0; i < h.length; i++) {
                    while (stack.length > 1 && h[stack[stack.length - 1]] >= h[i]) {
                        const height = h[stack.pop()];
                        const width = i - stack[stack.length - 1] - 1;
                        maxArea = Math.max(maxArea, height * width);
                    }
                    stack.push(i);
                }
                return maxArea;
            }
        }),

        // 8. Sliding Window Maximum
        createProblem({
            title: "Sliding Window Maximum",
            topic: "Stacks & Queues",
            difficulty: "Hard",
            patterns: ["Monotonic Queue", "Sliding Window"],
            dataStructures: ["Deque", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(k)",
            description: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. Return the max sliding window.",
            constraints: "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\n1 <= k <= nums.length",
            fnName: "maxSlidingWindow",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 3, -1, -3, 5, 3, 6, 7], 3],
                [[1], 1]
            ],
            solver: (nums, k) => {
                const q = []; // store indices
                const res = [];
                for (let i = 0; i < nums.length; i++) {
                    while (q.length > 0 && q[0] <= i - k) q.shift();
                    while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) q.pop();
                    q.push(i);
                    if (i >= k - 1) res.push(nums[q[0]]);
                }
                return res;
            }
        }),

        // 9. Remove Duplicate Letters / Smallest Subsequence
        createProblem({
            title: "Remove Duplicate Letters Lexicographically Smallest",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack", "Greedy"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.",
            constraints: "1 <= s.length <= 10^4\ns consists of lowercase English letters.",
            fnName: "removeDuplicateLetters",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["bcabc"],
                ["cbacdcbc"]
            ],
            solver: (s) => {
                const last = {};
                for (let i = 0; i < s.length; i++) last[s[i]] = i;
                const stack = [];
                const seen = new Set();
                for (let i = 0; i < s.length; i++) {
                    const c = s[i];
                    if (seen.has(c)) continue;
                    while (stack.length > 0 && stack[stack.length - 1] > c && last[stack[stack.length - 1]] > i) {
                        seen.delete(stack.pop());
                    }
                    stack.push(c);
                    seen.add(c);
                }
                return stack.join("");
            }
        }),

        // 10. Minimum Remove to Make Valid Parentheses
        createProblem({
            title: "Minimum Remove to Make Valid Parentheses",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack", "String"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string s of '(' , ')' and lowercase English characters. Remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.",
            constraints: "1 <= s.length <= 10^5\ns[i] is either '(' , ')', or lowercase English letter.",
            fnName: "minRemoveToMakeValid",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["lee(t(c)o)de)"],
                ["a)b(c)d"],
                [")("]
            ],
            solver: (s) => {
                const chars = s.split("");
                const stack = [];
                for (let i = 0; i < chars.length; i++) {
                    if (chars[i] === '(') {
                        stack.push(i);
                    } else if (chars[i] === ')') {
                        if (stack.length > 0) stack.pop();
                        else chars[i] = "";
                    }
                }
                while (stack.length > 0) {
                    chars[stack.pop()] = "";
                }
                return chars.join("");
            }
        }),

        // 11. Validate Stack Sequences
        createProblem({
            title: "Validate Stack Sequences",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack", "Simulation"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.",
            constraints: "1 <= pushed.length <= 1000\n0 <= pushed[i] <= 1000\nAll the elements of pushed are unique.\npopped.length == pushed.length\npopped is a permutation of pushed.",
            fnName: "validateStackSequences",
            returnType: "bool",
            params: [
                { name: "pushed", type: "vector<int>&" },
                { name: "popped", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], [4, 5, 3, 2, 1]],
                [[1, 2, 3, 4, 5], [4, 3, 5, 1, 2]]
            ],
            solver: (pushed, popped) => {
                const stack = [];
                let j = 0;
                for (const x of pushed) {
                    stack.push(x);
                    while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
                        stack.pop();
                        j++;
                    }
                }
                return j === popped.length;
            }
        }),

        // 12. 132 Pattern
        createProblem({
            title: "132 Pattern Exists",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j]. Return true if there is a 132 pattern in nums.",
            constraints: "n == nums.length\n1 <= n <= 2 * 10^5\n-10^9 <= nums[i] <= 10^9",
            fnName: "find132pattern",
            returnType: "bool",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 4]],
                [[3, 1, 4, 2]],
                [[-1, 3, 2, 0]]
            ],
            solver: (nums) => {
                const stack = [];
                let third = -Infinity;
                for (let i = nums.length - 1; i >= 0; i--) {
                    if (nums[i] < third) return true;
                    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
                        third = stack.pop();
                    }
                    stack.push(nums[i]);
                }
                return false;
            }
        }),

        // 13. Baseball Game Points
        createProblem({
            title: "Baseball Game Total Points",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Stack", "Simulation"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record. Given a list of operations, calculate the final sum of the points.",
            constraints: "1 <= operations.length <= 1000\noperations[i] is \"C\", \"D\", \"+\", or a string representing an integer in range [-3 * 10^4, 3 * 10^4].",
            fnName: "calPoints",
            returnType: "int",
            params: [{ name: "operations", type: "vector<string>&" }],
            rawExamples: [
                [["5", "2", "C", "D", "+"]],
                [["5", "-2", "4", "C", "D", "9", "+", "+"]],
                [["1", "C"]]
            ],
            solver: (operations) => {
                const stack = [];
                for (const op of operations) {
                    if (op === "+") {
                        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                    } else if (op === "D") {
                        stack.push(stack[stack.length - 1] * 2);
                    } else if (op === "C") {
                        stack.pop();
                    } else {
                        stack.push(Number(op));
                    }
                }
                return stack.reduce((a, b) => a + b, 0);
            }
        }),

        // 14. Make The String Great
        createProblem({
            title: "Make The String Great",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string s of lower and upper case English letters. A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where they are the same letter with opposite cases. Return the string after making it good.",
            constraints: "1 <= s.length <= 100\ns contains only lower and upper case English letters.",
            fnName: "makeGood",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["leEeetcode"],
                ["abBAcC"],
                ["s"]
            ],
            solver: (s) => {
                const stack = [];
                for (const c of s) {
                    if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - c.charCodeAt(0)) === 32) {
                        stack.pop();
                    } else {
                        stack.push(c);
                    }
                }
                return stack.join("");
            }
        }),

        // 15. Final Prices With a Special Discount in a Shop
        createProblem({
            title: "Final Prices With a Special Discount in a Shop",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array prices where prices[i] is the price of the ith item in a shop. There is a special discount: for item i, you receive a discount equal to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Return final prices.",
            constraints: "1 <= prices.length <= 500\n1 <= prices[i] <= 1000",
            fnName: "finalPrices",
            returnType: "vector<int>",
            params: [{ name: "prices", type: "vector<int>&" }],
            rawExamples: [
                [[8, 4, 6, 2, 3]],
                [[1, 2, 3, 4, 5]],
                [[10, 1, 1, 6]]
            ],
            solver: (prices) => {
                const res = [...prices];
                const stack = [];
                for (let i = 0; i < prices.length; i++) {
                    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
                        res[stack.pop()] -= prices[i];
                    }
                    stack.push(i);
                }
                return res;
            }
        }),

        // 16. Crawler Log Folder
        createProblem({
            title: "Crawler Log Folder Minimum Operations",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Stack", "Simulation"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "The LeetCode file system keeps a log each time some user performs a change folder operation: \"../\" move to parent, \"./\" remain in same, \"x/\" move to child. Return the minimum number of operations needed to go back to the main folder.",
            constraints: "1 <= logs.length <= 1000\n2 <= logs[i].length <= 10\nlogs[i] contains lowercase English letters, digits, '.', and '/'.",
            fnName: "minOperations",
            returnType: "int",
            params: [{ name: "logs", type: "vector<string>&" }],
            rawExamples: [
                [["d1/", "d2/", "../", "d21/", "./"]],
                [["d1/", "d2/", "./", "d3/", "../", "d31/"]],
                [["d1/", "../", "../", "../"]]
            ],
            solver: (logs) => {
                let depth = 0;
                for (const log of logs) {
                    if (log === "../") {
                        if (depth > 0) depth--;
                    } else if (log === "./") {
                        // stay
                    } else {
                        depth++;
                    }
                }
                return depth;
            }
        }),

        // 17. Number of Students Unable to Eat Lunch
        createProblem({
            title: "Number of Students Unable to Eat Lunch",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Queue", "Simulation"],
            dataStructures: ["Queue", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "The school cafeteria offers circular and square sandwiches at lunch break. The students stand in a queue and sandwiches are in a stack. If the student at front prefers the sandwich on top, they take it and leave; otherwise they go to the back of the queue. Return the number of students unable to eat.",
            constraints: "1 <= students.length, sandwiches.length <= 100\nstudents.length == sandwiches.length\nsandwiches[i] and students[i] is 0 or 1.",
            fnName: "countStudents",
            returnType: "int",
            params: [
                { name: "students", type: "vector<int>&" },
                { name: "sandwiches", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 1, 0, 0], [0, 1, 0, 1]],
                [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]]
            ],
            solver: (students, sandwiches) => {
                const count = [0, 0];
                for (const s of students) count[s]++;
                for (const s of sandwiches) {
                    if (count[s] === 0) break;
                    count[s]--;
                }
                return count[0] + count[1];
            }
        }),

        // 18. Maximum Nesting Depth of the Parentheses
        createProblem({
            title: "Maximum Nesting Depth of the Parentheses",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Stack", "Simulation"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "A string is a valid parentheses string (VPS) if it is valid. Given a VPS represented as string s, return the nesting depth of s.",
            constraints: "1 <= s.length <= 100\ns consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.",
            fnName: "maxDepth",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["(1+(2*3)+((8)/4))+1"],
                ["(1)+((2))+(((3)))"]
            ],
            solver: (s) => {
                let maxD = 0, cur = 0;
                for (const c of s) {
                    if (c === '(') {
                        cur++;
                        maxD = Math.max(maxD, cur);
                    } else if (c === ')') {
                        cur--;
                    }
                }
                return maxD;
            }
        }),

        // 19. Online Stock Span Simulation
        createProblem({
            title: "Online Stock Span Simulation",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day. The span is the maximum number of consecutive days (starting today and going backward) for which the stock price was less than or equal to today's price. Given prices array, return all spans.",
            constraints: "1 <= prices.length <= 10^4\n1 <= prices[i] <= 10^5",
            fnName: "calculateSpans",
            returnType: "vector<int>",
            params: [{ name: "prices", type: "vector<int>&" }],
            rawExamples: [
                [[100, 80, 60, 70, 60, 75, 85]],
                [[31, 41, 48, 59, 79]]
            ],
            solver: (prices) => {
                const stack = []; // [price, span]
                const spans = [];
                for (const p of prices) {
                    let span = 1;
                    while (stack.length > 0 && stack[stack.length - 1][0] <= p) {
                        span += stack.pop()[1];
                    }
                    stack.push([p, span]);
                    spans.push(span);
                }
                return spans;
            }
        }),

        // 20. Car Fleet Count
        createProblem({
            title: "Car Fleet Count",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack", "Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "There are n cars at given miles away from the starting mile 0, traveling to reach the mile target. You are given position and speed arrays. A car can never pass another car ahead of it, but it can catch up and drive bump-to-bump at the same speed forming a fleet. Return the number of car fleets that arrive at the destination.",
            constraints: "n == position.length == speed.length\n1 <= n <= 10^5\n0 < target <= 10^6\n0 <= position[i] < target\nAll values in position are unique.\n0 < speed[i] <= 10^6",
            fnName: "carFleet",
            returnType: "int",
            params: [
                { name: "target", type: "int" },
                { name: "position", type: "vector<int>&" },
                { name: "speed", type: "vector<int>&" }
            ],
            rawExamples: [
                [12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]],
                [10, [3], [3]],
                [100, [0, 2, 4], [4, 2, 1]]
            ],
            solver: (target, position, speed) => {
                const cars = position.map((p, i) => [p, (target - p) / speed[i]]);
                cars.sort((a, b) => b[0] - a[0]);
                const stack = [];
                for (const [, time] of cars) {
                    if (stack.length === 0 || time > stack[stack.length - 1]) {
                        stack.push(time);
                    }
                }
                return stack.length;
            }
        }),

        // 21. Sum of Subarray Minimums
        createProblem({
            title: "Sum of Subarray Minimums",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 10^9 + 7.",
            constraints: "1 <= arr.length <= 3 * 10^4\n1 <= arr[i] <= 3 * 10^4",
            fnName: "sumSubarrayMins",
            returnType: "int",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[3, 1, 2, 4]],
                [[11, 81, 94, 43, 3]]
            ],
            solver: (arr) => {
                const MOD = 1000000007;
                const n = arr.length;
                const left = new Array(n), right = new Array(n);
                let stack = [];
                for (let i = 0; i < n; i++) {
                    let count = 1;
                    while (stack.length > 0 && stack[stack.length - 1][0] > arr[i]) {
                        count += stack.pop()[1];
                    }
                    stack.push([arr[i], count]);
                    left[i] = count;
                }
                stack = [];
                for (let i = n - 1; i >= 0; i--) {
                    let count = 1;
                    while (stack.length > 0 && stack[stack.length - 1][0] >= arr[i]) {
                        count += stack.pop()[1];
                    }
                    stack.push([arr[i], count]);
                    right[i] = count;
                }
                let total = 0;
                for (let i = 0; i < n; i++) {
                    total = (total + arr[i] * left[i] * right[i]) % MOD;
                }
                return total;
            }
        }),

        // 22. Score of Parentheses
        createProblem({
            title: "Score of Parentheses",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a balanced parentheses string s, return the score of the string. () has score 1. AB has score A + B. (A) has score 2 * A.",
            constraints: "2 <= s.length <= 50\ns consists of only '(' and ')'.\ns is a balanced parentheses string.",
            fnName: "scoreOfParentheses",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["()"],
                ["(())"],
                ["()()"]
            ],
            solver: (s) => {
                const stack = [0];
                for (const c of s) {
                    if (c === '(') {
                        stack.push(0);
                    } else {
                        const v = stack.pop();
                        const top = stack.pop();
                        stack.push(top + Math.max(2 * v, 1));
                    }
                }
                return stack[0];
            }
        }),

        // 23. Remove K Digits Smallest Number
        createProblem({
            title: "Remove K Digits Smallest Number",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack", "Greedy"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.",
            constraints: "1 <= k <= num.length <= 10^5\nnum consists of only digits.\nnum does not have any leading zeros except for the zero itself.",
            fnName: "removeKdigits",
            returnType: "string",
            params: [
                { name: "num", type: "string" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                ["1432219", 3],
                ["10200", 1],
                ["10", 2]
            ],
            solver: (num, k) => {
                const stack = [];
                for (const c of num) {
                    while (stack.length > 0 && k > 0 && stack[stack.length - 1] > c) {
                        stack.pop();
                        k--;
                    }
                    stack.push(c);
                }
                while (k > 0) {
                    stack.pop();
                    k--;
                }
                while (stack.length > 0 && stack[0] === '0') stack.shift();
                return stack.length === 0 ? "0" : stack.join("");
            }
        }),

        // 24. Maximal Rectangle Area in Binary Matrix
        createProblem({
            title: "Maximal Rectangle in Binary Matrix",
            topic: "Stacks & Queues",
            difficulty: "Hard",
            patterns: ["Monotonic Stack", "Dynamic Programming"],
            dataStructures: ["Stack", "Matrix"],
            expectedTime: "O(rows * cols)",
            expectedSpace: "O(cols)",
            description: "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
            constraints: "rows == matrix.length\ncols == matrix[i].length\n1 <= row, cols <= 200\nmatrix[i][j] is '0' or '1'.",
            fnName: "maximalRectangle",
            returnType: "int",
            params: [{ name: "matrix", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]]],
                [[[0]]],
                [[[1]]]
            ],
            solver: (matrix) => {
                if (!matrix || matrix.length === 0) return 0;
                const cols = matrix[0].length;
                const heights = new Array(cols).fill(0);
                let maxArea = 0;
                for (let r = 0; r < matrix.length; r++) {
                    for (let c = 0; c < cols; c++) {
                        heights[c] = matrix[r][c] === 1 ? heights[c] + 1 : 0;
                    }
                    // Largest rectangle in histogram
                    const h = [...heights, 0];
                    const stack = [-1];
                    for (let i = 0; i < h.length; i++) {
                        while (stack.length > 1 && h[stack[stack.length - 1]] >= h[i]) {
                            const height = h[stack.pop()];
                            const width = i - stack[stack.length - 1] - 1;
                            maxArea = Math.max(maxArea, height * width);
                        }
                        stack.push(i);
                    }
                }
                return maxArea;
            }
        }),

        // 25. Check If Word Is Valid After Substitutions
        createProblem({
            title: "Check If Word Is Valid After Substitutions",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack", "String"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string s, determine if it is valid. A string s is valid if starting from an empty string \"\", we can repeatedly insert \"abc\" at any position until the string becomes s.",
            constraints: "1 <= s.length <= 2 * 10^4\ns consists of letters 'a', 'b', and 'c'.",
            fnName: "isValid",
            returnType: "bool",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["aabcbc"],
                ["abcabcababcc"],
                ["abccba"]
            ],
            solver: (s) => {
                const stack = [];
                for (const c of s) {
                    stack.push(c);
                    if (stack.length >= 3 && stack.slice(-3).join("") === "abc") {
                        stack.pop();
                        stack.pop();
                        stack.pop();
                    }
                }
                return stack.length === 0;
            }
        }),

        // 26. Minimum Cost Tree From Leaf Values
        createProblem({
            title: "Minimum Cost Tree From Leaf Values",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack", "Greedy"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array arr of positive integers, consider the (binary) trees such that each node has either 0 or 2 children, and the values of arr correspond to the values of each leaf in an in-order traversal. Return the smallest possible sum of the values of each non-leaf node.",
            constraints: "2 <= arr.length <= 40\n1 <= arr[i] <= 15\nIt is guaranteed that the answer fits into a 32-bit signed integer.",
            fnName: "mctFromLeafValues",
            returnType: "int",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[6, 2, 4]],
                [[4, 11]]
            ],
            solver: (arr) => {
                let res = 0;
                const stack = [Infinity];
                for (const a of arr) {
                    while (stack[stack.length - 1] <= a) {
                        const mid = stack.pop();
                        res += mid * Math.min(stack[stack.length - 1], a);
                    }
                    stack.push(a);
                }
                while (stack.length > 2) {
                    res += stack.pop() * stack[stack.length - 1];
                }
                return res;
            }
        }),

        // 27. Build an Array With Stack Operations
        createProblem({
            title: "Build an Array With Stack Operations",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack", "Simulation"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array target and an integer n. You have an empty stack and read a stream of integers 1 through n in order. Return the stack operations needed to build target using 'Push' and 'Pop'.",
            constraints: "1 <= target.length <= 100\n1 <= n <= 100\n1 <= target[i] <= n\ntarget is strictly increasing.",
            fnName: "buildArray",
            returnType: "vector<string>",
            params: [
                { name: "target", type: "vector<int>&" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [[1, 3], 3],
                [[1, 2, 3], 3],
                [[1, 2], 4]
            ],
            solver: (target, n) => {
                const res = [];
                let cur = 1;
                for (const t of target) {
                    while (cur < t) {
                        res.push("Push");
                        res.push("Pop");
                        cur++;
                    }
                    res.push("Push");
                    cur++;
                }
                return res;
            }
        }),

        // 28. Minimum Additions to Make Valid String
        createProblem({
            title: "Minimum Additions to Make Valid String",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack", "Greedy"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string word to which you can insert letters \"a\", \"b\" or \"c\" anywhere and any number of times, return the minimum number of letters that must be inserted so that word becomes valid (consisting of concatenations of \"abc\").",
            constraints: "1 <= word.length <= 50\nword consists of letters \"a\", \"b\", and \"c\" only.",
            fnName: "addMinimum",
            returnType: "int",
            params: [{ name: "word", type: "string" }],
            rawExamples: [
                ["b"],
                ["aaa"],
                ["abc"]
            ],
            solver: (word) => {
                let k = 0, prev = 'z';
                for (const c of word) {
                    if (c <= prev) k++;
                    prev = c;
                }
                return k * 3 - word.length;
            }
        }),

        // 29. Maximum Width Ramp
        createProblem({
            title: "Maximum Width Ramp",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i. Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.",
            constraints: "2 <= nums.length <= 5 * 10^4\n0 <= nums[i] <= 5 * 10^4",
            fnName: "maxWidthRamp",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[6, 0, 8, 2, 1, 5]],
                [[9, 8, 1, 0, 1, 9, 4, 0, 4, 1]]
            ],
            solver: (nums) => {
                const stack = [];
                for (let i = 0; i < nums.length; i++) {
                    if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
                        stack.push(i);
                    }
                }
                let maxWidth = 0;
                for (let j = nums.length - 1; j >= 0; j--) {
                    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
                        maxWidth = Math.max(maxWidth, j - stack.pop());
                    }
                }
                return maxWidth;
            }
        }),

        // 30. Sum of Subarray Ranges
        createProblem({
            title: "Sum of Subarray Ranges",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray. Return the sum of all subarray ranges of nums.",
            constraints: "1 <= nums.length <= 1000\n-10^9 <= nums[i] <= 10^9",
            fnName: "subArrayRanges",
            returnType: "long long",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3]],
                [[1, 3, 3]],
                [[4, -2, -3, 4, 1]]
            ],
            solver: (nums) => {
                let ans = 0;
                for (let i = 0; i < nums.length; i++) {
                    let min = nums[i], max = nums[i];
                    for (let j = i; j < nums.length; j++) {
                        min = Math.min(min, nums[j]);
                        max = Math.max(max, nums[j]);
                        ans += (max - min);
                    }
                }
                return ans;
            }
        }),

        // 31. Longest Valid Parentheses Length
        createProblem({
            title: "Longest Valid Parentheses Length",
            topic: "Stacks & Queues",
            difficulty: "Hard",
            patterns: ["Stack", "Dynamic Programming"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
            constraints: "0 <= s.length <= 3 * 10^4\ns[i] is '(' or ')'.",
            fnName: "longestValidParentheses",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["(()"],
                [")()())"],
                [""]
            ],
            solver: (s) => {
                const stack = [-1];
                let maxLen = 0;
                for (let i = 0; i < s.length; i++) {
                    if (s[i] === '(') {
                        stack.push(i);
                    } else {
                        stack.pop();
                        if (stack.length === 0) {
                            stack.push(i);
                        } else {
                            maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
                        }
                    }
                }
                return maxLen;
            }
        }),

        // 32. Minimum String Length After Removing Substrings
        createProblem({
            title: "Minimum String Length After Removing Substrings",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given a string s consisting only of uppercase English letters. You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings \"AB\" or \"CD\" from s. Return the minimum possible length of the resulting string.",
            constraints: "1 <= s.length <= 100\ns consists only of uppercase English letters.",
            fnName: "minLength",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["ABFCACDB"],
                ["ACB3D"]
            ],
            solver: (s) => {
                const stack = [];
                for (const c of s) {
                    if (stack.length > 0 && ((stack[stack.length - 1] === 'A' && c === 'B') || (stack[stack.length - 1] === 'C' && c === 'D'))) {
                        stack.pop();
                    } else {
                        stack.push(c);
                    }
                }
                return stack.length;
            }
        }),

        // 33. Clear Digits
        createProblem({
            title: "Clear Digits and Their Preceding Characters",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given a string s. Your task is to remove all digits by doing this operation repeatedly: Delete the first digit and the closest non-digit character to its left. Return the resulting string after removing all digits.",
            constraints: "1 <= s.length <= 100\ns consists only of lowercase English letters and digits.",
            fnName: "clearDigits",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["abc"],
                ["cb34"]
            ],
            solver: (s) => {
                const stack = [];
                for (const c of s) {
                    if (c >= '0' && c <= '9') {
                        if (stack.length > 0) stack.pop();
                    } else {
                        stack.push(c);
                    }
                }
                return stack.join("");
            }
        }),

        // 34. Maximum Number of Fish in a Grid Stack DFS
        createProblem({
            title: "Maximum Number of Coins Collected in Subarray",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of coin counts, find the maximum contiguous subarray product with positive numbers.",
            constraints: "1 <= nums.length <= 1000\n1 <= nums[i] <= 100",
            fnName: "maxCoinSum",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3]],
                [[5, 4, 1, 9]]
            ],
            solver: (nums) => nums.reduce((a, b) => a + b, 0)
        }),

        // 35. Backspace String Equality
        createProblem({
            title: "Backspace String Final Content",
            topic: "Stacks & Queues",
            difficulty: "Easy",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string s containing characters and '#', simulate a text editor where '#' is a backspace. Return the final string.",
            constraints: "1 <= s.length <= 1000",
            fnName: "cleanString",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["a#bc#d"],
                ["###abc"]
            ],
            solver: (s) => {
                const stack = [];
                for (const c of s) {
                    if (c === '#') {
                        if (stack.length > 0) stack.pop();
                    } else {
                        stack.push(c);
                    }
                }
                return stack.join("");
            }
        }),

        // 36. Remove All Adjacent Duplicates in String II Count
        createProblem({
            title: "Remove K Adjacent Duplicates In String",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them. We repeatedly make k duplicate removals on s until we no longer can. Return the final string.",
            constraints: "1 <= s.length <= 10^5\n2 <= k <= 10^4\ns only contains lowercase English letters.",
            fnName: "removeDuplicatesK",
            returnType: "string",
            params: [
                { name: "s", type: "string" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                ["abcd", 2],
                ["deeedbbcccbdaa", 3],
                ["pbbcggttciiippooaais", 2]
            ],
            solver: (s, k) => {
                const stack = []; // [char, count]
                for (const c of s) {
                    if (stack.length > 0 && stack[stack.length - 1][0] === c) {
                        stack[stack.length - 1][1]++;
                        if (stack[stack.length - 1][1] === k) {
                            stack.pop();
                        }
                    } else {
                        stack.push([c, 1]);
                    }
                }
                return stack.map(([c, cnt]) => c.repeat(cnt)).join("");
            }
        }),

        // 37. Check Valid Parentheses String with Wildcard
        createProblem({
            title: "Check Valid Parentheses With Asterisks",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Greedy", "Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s containing '(', ')' and '*', where '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string \"\". Return true if s is valid.",
            constraints: "1 <= s.length <= 100\ns[i] is '(', ')' or '*'.",
            fnName: "checkValidString",
            returnType: "bool",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["()"],
                ["(*)"],
                ["(*))"]
            ],
            solver: (s) => {
                let low = 0, high = 0;
                for (const c of s) {
                    if (c === '(') {
                        low++;
                        high++;
                    } else if (c === ')') {
                        if (low > 0) low--;
                        high--;
                    } else {
                        if (low > 0) low--;
                        high++;
                    }
                    if (high < 0) return false;
                }
                return low === 0;
            }
        }),

        // 38. Queue Reconstruction by Height
        createProblem({
            title: "Queue Reconstruction by Height",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Greedy", "Queue"],
            dataStructures: ["Array"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "You are given an array of people, people, where people[i] = [h_i, k_i] represents the ith person of height h_i with exactly k_i other people in front who have a height greater than or equal to h_i. Reconstruct and return the queue that is represented by the input array people.",
            constraints: "1 <= people.length <= 2000\n0 <= h_i <= 10^6\n0 <= k_i < people.length",
            fnName: "reconstructQueue",
            returnType: "vector<vector<int>>",
            params: [{ name: "people", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]],
                [[[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]]
            ],
            solver: (people) => {
                people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
                const queue = [];
                for (const p of people) {
                    queue.splice(p[1], 0, p);
                }
                return queue;
            }
        }),

        // 39. Design Hit Counter Return Hits
        createProblem({
            title: "Design Hit Counter Hits Count",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Queue", "Design"],
            dataStructures: ["Queue", "Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given a list of hit timestamps in seconds (strictly increasing), return the number of hits in the past 300 seconds (i.e. [timestamp - 299, timestamp]).",
            constraints: "1 <= timestamps.length <= 10^4\n1 <= timestamps[i] <= 2 * 10^9",
            fnName: "getHitsInWindow",
            returnType: "int",
            params: [
                { name: "timestamps", type: "vector<int>&" },
                { name: "queryTime", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 300], 300],
                [[1, 2, 3, 300], 301]
            ],
            solver: (timestamps, queryTime) => {
                return timestamps.filter(t => t > queryTime - 300 && t <= queryTime).length;
            }
        }),

        // 40. Minimum Moves to Make Array Complementary
        createProblem({
            title: "Minimum Operations to Empty Array Using Counts",
            topic: "Stacks & Queues",
            difficulty: "Medium",
            patterns: ["Greedy", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given a 0-indexed array nums consisting of positive integers. In one operation you can choose two elements with equal values and delete them, or choose three elements with equal values and delete them. Return the minimum number of operations required to empty the array, or -1 if impossible.",
            constraints: "2 <= nums.length <= 10^5\n1 <= nums[i] <= 10^6",
            fnName: "minOperations",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 3, 3, 2, 2, 4, 2, 3, 4]],
                [[2, 1, 2, 2, 3, 3]]
            ],
            solver: (nums) => {
                const count = {};
                for (const n of nums) count[n] = (count[n] || 0) + 1;
                let ans = 0;
                for (const c of Object.values(count)) {
                    if (c === 1) return -1;
                    ans += Math.ceil(c / 3);
                }
                return ans;
            }
        })
    ];
}
