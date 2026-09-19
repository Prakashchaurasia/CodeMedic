import { createProblem } from "../problem_blueprints.mjs";

export function getGreedyProblems() {
    return [
        // 1. Gas Station
        createProblem({
            title: "Gas Station Circular Tour Starting Index",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
            constraints: "n == gas.length == cost.length\n1 <= n <= 10^5\n0 <= gas[i], cost[i] <= 10^4",
            fnName: "canCompleteCircuit",
            returnType: "int",
            params: [
                { name: "gas", type: "vector<int>&" },
                { name: "cost", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]],
                [[2, 3, 4], [3, 4, 3]]
            ],
            solver: (gas, cost) => {
                let total = 0, cur = 0, start = 0;
                for (let i = 0; i < gas.length; i++) {
                    total += gas[i] - cost[i];
                    cur += gas[i] - cost[i];
                    if (cur < 0) {
                        start = i + 1;
                        cur = 0;
                    }
                }
                return total >= 0 ? start : -1;
            }
        }),

        // 2. Candy
        createProblem({
            title: "Candy Distribution Minimum Total",
            topic: "Greedy",
            difficulty: "Hard",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
            constraints: "n == ratings.length\n1 <= n <= 2 * 10^4\n0 <= ratings[i] <= 2 * 10^4",
            fnName: "candy",
            returnType: "int",
            params: [{ name: "ratings", type: "vector<int>&" }],
            rawExamples: [
                [[1, 0, 2]],
                [[1, 2, 2]]
            ],
            solver: (ratings) => {
                const n = ratings.length;
                const candies = new Array(n).fill(1);
                for (let i = 1; i < n; i++) {
                    if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
                }
                for (let i = n - 2; i >= 0; i--) {
                    if (ratings[i] > ratings[i + 1]) candies[i] = Math.max(candies[i], candies[i + 1] + 1);
                }
                return candies.reduce((a, b) => a + b, 0);
            }
        }),

        // 3. Non-overlapping Intervals
        createProblem({
            title: "Non-overlapping Intervals Minimum Removals",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "Given an array of intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
            constraints: "1 <= intervals.length <= 10^5\nintervals[i].length == 2\n-5 * 10^4 <= start_i < end_i <= 5 * 10^4",
            fnName: "eraseOverlapIntervals",
            returnType: "int",
            params: [{ name: "intervals", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2], [2, 3], [3, 4], [1, 3]]],
                [[[1, 2], [1, 2], [1, 2]]],
                [[[1, 2], [2, 3]]]
            ],
            solver: (intervals) => {
                intervals.sort((a, b) => a[1] - b[1]);
                let count = 0, lastEnd = -Infinity;
                for (const [start, end] of intervals) {
                    if (start >= lastEnd) {
                        lastEnd = end;
                    } else {
                        count++;
                    }
                }
                return count;
            }
        }),

        // 4. Minimum Number of Arrows to Burst Balloons
        createProblem({
            title: "Minimum Arrows to Burst Balloons",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "There are spherical balloons taped to a flat wall. The balloons are represented by a 2D integer array points where points[i] = [x_start, x_end]. An arrow shot perpendicularly upward bursts any balloon whose range contains x. Return the minimum number of arrows that must be shot to burst all balloons.",
            constraints: "1 <= points.length <= 10^5\npoints[i].length == 2\n-2^31 <= x_start < x_end <= 2^31 - 1",
            fnName: "findMinArrowShots",
            returnType: "int",
            params: [{ name: "points", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[10, 16], [2, 8], [1, 6], [7, 12]]],
                [[[1, 2], [3, 4], [5, 6], [7, 8]]],
                [[[1, 2], [2, 3], [3, 4], [4, 5]]]
            ],
            solver: (points) => {
                points.sort((a, b) => a[1] - b[1]);
                let arrows = 1, last = points[0][1];
                for (let i = 1; i < points.length; i++) {
                    if (points[i][0] > last) {
                        arrows++;
                        last = points[i][1];
                    }
                }
                return arrows;
            }
        }),

        // 5. Lemonade Change
        createProblem({
            title: "Lemonade Change Correct Change Possible",
            topic: "Greedy",
            difficulty: "Easy",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "At a lemonade stand, each lemonade costs $5. Customers stand in a queue to buy from you and order one at a time. Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer. Return true if you can provide every customer with correct change.",
            constraints: "1 <= bills.length <= 10^5\nbills[i] is either 5, 10, or 20.",
            fnName: "lemonadeChange",
            returnType: "bool",
            params: [{ name: "bills", type: "vector<int>&" }],
            rawExamples: [
                [[5, 5, 5, 10, 20]],
                [[5, 5, 10, 10, 20]]
            ],
            solver: (bills) => {
                let five = 0, ten = 0;
                for (const b of bills) {
                    if (b === 5) five++;
                    else if (b === 10) {
                        if (five === 0) return false;
                        five--;
                        ten++;
                    } else {
                        if (ten > 0 && five > 0) {
                            ten--;
                            five--;
                        } else if (five >= 3) {
                            five -= 3;
                        } else {
                            return false;
                        }
                    }
                }
                return true;
            }
        }),

        // 6. Maximum Units on a Truck
        createProblem({
            title: "Maximum Units on a Truck",
            topic: "Greedy",
            difficulty: "Easy",
            patterns: ["Greedy", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxes_i, numberOfUnitsPerBox_i]. You are also given an integer truckSize. Return the maximum total number of units that can be put on the truck.",
            constraints: "1 <= boxTypes.length <= 1000\n1 <= numberOfBoxes_i, numberOfUnitsPerBox_i <= 1000\n1 <= truckSize <= 10^6",
            fnName: "maximumUnits",
            returnType: "int",
            params: [
                { name: "boxTypes", type: "vector<vector<int>>&" },
                { name: "truckSize", type: "int" }
            ],
            rawExamples: [
                [[[1, 3], [2, 2], [3, 1]], 4],
                [[[5, 10], [2, 5], [4, 7], [3, 9]], 10]
            ],
            solver: (boxTypes, truckSize) => {
                boxTypes.sort((a, b) => b[1] - a[1]);
                let units = 0, remaining = truckSize;
                for (const [boxes, unit] of boxTypes) {
                    const take = Math.min(boxes, remaining);
                    units += take * unit;
                    remaining -= take;
                    if (remaining === 0) break;
                }
                return units;
            }
        }),

        // 7. Maximum Swap Single Digit
        createProblem({
            title: "Maximum Swap Single Digit",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(d)",
            expectedSpace: "O(d)",
            description: "You are given an integer num. You can swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get.",
            constraints: "0 <= num <= 10^8",
            fnName: "maximumSwap",
            returnType: "int",
            params: [{ name: "num", type: "int" }],
            rawExamples: [
                [2736],
                [9973]
            ],
            solver: (num) => {
                const digits = String(num).split("").map(Number);
                const last = {};
                for (let i = 0; i < digits.length; i++) last[digits[i]] = i;
                for (let i = 0; i < digits.length; i++) {
                    for (let d = 9; d > digits[i]; d--) {
                        if (last[d] > i) {
                            const tmp = digits[i];
                            digits[i] = digits[last[d]];
                            digits[last[d]] = tmp;
                            return Number(digits.join(""));
                        }
                    }
                }
                return num;
            }
        }),

        // 8. Two City Scheduling Minimum Cost
        createProblem({
            title: "Two City Scheduling Minimum Cost",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "A company is planning to interview 2n people. Given the array costs where costs[i] = [aCost_i, bCost_i], the cost of flying the ith person to city A is aCost_i, and to city B is bCost_i. Return the minimum cost to fly exactly n people to city A, and n people to city B.",
            constraints: "2 * n == costs.length\n2 <= costs.length <= 100\ncosts.length is even.\n1 <= aCost_i, bCost_i <= 1000",
            fnName: "twoCitySchedCost",
            returnType: "int",
            params: [{ name: "costs", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[10, 20], [30, 200], [400, 50], [30, 20]]],
                [[[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]]
            ],
            solver: (costs) => {
                costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
                const n = costs.length / 2;
                let total = 0;
                for (let i = 0; i < n; i++) total += costs[i][0];
                for (let i = n; i < 2 * n; i++) total += costs[i][1];
                return total;
            }
        }),

        // 9. Best Time to Buy and Sell Stock II
        createProblem({
            title: "Buy and Sell Stock II Multi-Transaction",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an integer array prices where prices[i] is the price of a given stock on the ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. Find and return the maximum profit you can achieve.",
            constraints: "1 <= prices.length <= 3 * 10^4\n0 <= prices[i] <= 10^4",
            fnName: "maxProfit",
            returnType: "int",
            params: [{ name: "prices", type: "vector<int>&" }],
            rawExamples: [
                [[7, 1, 5, 3, 6, 4]],
                [[1, 2, 3, 4, 5]],
                [[7, 6, 4, 3, 1]]
            ],
            solver: (prices) => {
                let profit = 0;
                for (let i = 1; i < prices.length; i++) {
                    if (prices[i] > prices[i - 1]) {
                        profit += prices[i] - prices[i - 1];
                    }
                }
                return profit;
            }
        }),

        // 10. Split a String in Balanced Strings
        createProblem({
            title: "Split a String in Balanced Strings",
            topic: "Greedy",
            difficulty: "Easy",
            patterns: ["Greedy"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Balanced strings are those that have an equal quantity of 'L' and 'R' characters. Given a balanced string s, split it into the maximum amount of balanced strings. Return the maximum number of balanced strings you can obtain.",
            constraints: "2 <= s.length <= 1000\ns[i] is either 'L' or 'R'.\ns is a balanced string.",
            fnName: "balancedStringSplit",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["RLRRLLRLRL"],
                ["RLRRRLLRLL"],
                ["LLLLRRRR"]
            ],
            solver: (s) => {
                let count = 0, bal = 0;
                for (const c of s) {
                    bal += c === 'R' ? 1 : -1;
                    if (bal === 0) count++;
                }
                return count;
            }
        }),

        // 11. Can Place Flowers
        createProblem({
            title: "Can Place Flowers Without Violating Rule",
            topic: "Greedy",
            difficulty: "Easy",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's, and an integer n, return true if n new flowers can be planted without violating the no-adjacent-flowers rule.",
            constraints: "1 <= flowerbed.length <= 2 * 10^4\nflowerbed[i] is 0 or 1.\nThere are no two adjacent flowers in flowerbed.\n0 <= n <= flowerbed.length",
            fnName: "canPlaceFlowers",
            returnType: "bool",
            params: [
                { name: "flowerbed", type: "vector<int>&" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [[1, 0, 0, 0, 1], 1],
                [[1, 0, 0, 0, 1], 2]
            ],
            solver: (flowerbed, n) => {
                const fb = [...flowerbed];
                let count = 0;
                for (let i = 0; i < fb.length; i++) {
                    if (fb[i] === 0) {
                        const prevEmpty = (i === 0 || fb[i - 1] === 0);
                        const nextEmpty = (i === fb.length - 1 || fb[i + 1] === 0);
                        if (prevEmpty && nextEmpty) {
                            fb[i] = 1;
                            count++;
                        }
                    }
                }
                return count >= n;
            }
        }),

        // 12. Monotone Increasing Digits
        createProblem({
            title: "Monotone Increasing Digits",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(d)",
            expectedSpace: "O(d)",
            description: "An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y. Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.",
            constraints: "0 <= n <= 10^9",
            fnName: "monotoneIncreasingDigits",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [10],
                [1234],
                [332]
            ],
            solver: (n) => {
                const s = String(n).split("").map(Number);
                let mark = s.length;
                for (let i = s.length - 1; i > 0; i--) {
                    if (s[i] < s[i - 1]) {
                        mark = i;
                        s[i - 1]--;
                    }
                }
                for (let i = mark; i < s.length; i++) {
                    s[i] = 9;
                }
                return Number(s.join(""));
            }
        }),

        // 13. Bag of Tokens Maximum Score
        createProblem({
            title: "Bag of Tokens Maximum Score",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "You start with an initial power of power, an initial score of 0, and a bag of tokens tokens where each tokens[i] is the value of token i. Play face up to lose token power and gain 1 score; play face down to lose 1 score and gain token power. Return the maximum possible score.",
            constraints: "0 <= tokens.length <= 1000\n0 <= tokens[i], power < 10^4",
            fnName: "bagOfTokensScore",
            returnType: "int",
            params: [
                { name: "tokens", type: "vector<int>&" },
                { name: "power", type: "int" }
            ],
            rawExamples: [
                [[100], 50],
                [[200, 100], 150],
                [[100, 200, 300, 400], 200]
            ],
            solver: (tokens, power) => {
                tokens.sort((a, b) => a - b);
                let score = 0, maxScore = 0;
                let l = 0, r = tokens.length - 1, curPower = power;
                while (l <= r) {
                    if (curPower >= tokens[l]) {
                        curPower -= tokens[l++];
                        score++;
                        maxScore = Math.max(maxScore, score);
                    } else if (score > 0) {
                        curPower += tokens[r--];
                        score--;
                    } else {
                        break;
                    }
                }
                return maxScore;
            }
        }),

        // 14. Minimum Operations to Make the Array Increasing
        createProblem({
            title: "Minimum Operations to Make Array Increasing",
            topic: "Greedy",
            difficulty: "Easy",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1. Return the minimum number of operations needed to make nums strictly increasing.",
            constraints: "1 <= nums.length <= 5000\n1 <= nums[i] <= 10^4",
            fnName: "minOperations",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 1, 1]],
                [[1, 5, 2, 4, 1]],
                [[8]]
            ],
            solver: (nums) => {
                let ops = 0, prev = nums[0];
                for (let i = 1; i < nums.length; i++) {
                    if (nums[i] <= prev) {
                        ops += prev + 1 - nums[i];
                        prev = prev + 1;
                    } else {
                        prev = nums[i];
                    }
                }
                return ops;
            }
        }),

        // 15. Maximum Element After Decreasing and Rearranging
        createProblem({
            title: "Max Element After Decreasing and Rearranging",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "You are given an array of positive integers arr. Perform operations such that: arr[0] == 1, and the absolute difference between any 2 adjacent elements is <= 1. Return the maximum possible value of an element in arr.",
            constraints: "1 <= arr.length <= 10^5\n1 <= arr[i] <= 10^9",
            fnName: "maximumElementAfterDecrementingAndRearranging",
            returnType: "int",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[2, 2, 1, 2, 1]],
                [[100, 1, 1000]],
                [[1, 2, 3, 4, 5]]
            ],
            solver: (arr) => {
                arr.sort((a, b) => a - b);
                let cur = 1;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > cur) cur++;
                }
                return cur;
            }
        }),

        // 16. Largest Perimeter Triangle
        createProblem({
            title: "Largest Perimeter Triangle",
            topic: "Greedy",
            difficulty: "Easy",
            patterns: ["Greedy", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.",
            constraints: "3 <= nums.length <= 10^4\n1 <= nums[i] <= 10^6",
            fnName: "largestPerimeter",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 1, 2]],
                [[1, 2, 1]],
                [[3, 6, 2, 3]]
            ],
            solver: (nums) => {
                nums.sort((a, b) => b - a);
                for (let i = 0; i < nums.length - 2; i++) {
                    if (nums[i + 1] + nums[i + 2] > nums[i]) {
                        return nums[i] + nums[i + 1] + nums[i + 2];
                    }
                }
                return 0;
            }
        }),

        // 17. Minimum Subsequence in Non-Increasing Order
        createProblem({
            title: "Minimum Subsequence in Non-Increasing Order",
            topic: "Greedy",
            difficulty: "Easy",
            patterns: ["Greedy", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non-included elements. Return it in non-increasing order.",
            constraints: "1 <= nums.length <= 500\n1 <= nums[i] <= 100",
            fnName: "minSubsequence",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[4, 3, 10, 9, 8]],
                [[4, 4, 7, 6, 7]],
                [[6]]
            ],
            solver: (nums) => {
                nums.sort((a, b) => b - a);
                const total = nums.reduce((a, b) => a + b, 0);
                let cur = 0;
                const res = [];
                for (const x of nums) {
                    cur += x;
                    res.push(x);
                    if (cur > total - cur) break;
                }
                return res;
            }
        }),

        // 18. Maximum 69 Number
        createProblem({
            title: "Maximum 69 Number",
            topic: "Greedy",
            difficulty: "Easy",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(d)",
            expectedSpace: "O(d)",
            description: "You are given a positive integer num consisting only of digits 6 and 9. Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).",
            constraints: "1 <= num <= 10^4\nnum's digits are 6 or 9.",
            fnName: "maximum69Number",
            returnType: "int",
            params: [{ name: "num", type: "int" }],
            rawExamples: [
                [9669],
                [9996],
                [9999]
            ],
            solver: (num) => Number(String(num).replace('6', '9'))
        }),

        // 19. Advantage Shuffle
        createProblem({
            title: "Advantage Shuffle Greediest Permutation",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy", "Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "You are given two integer arrays nums1 and nums2 both of the same length. The advantage of nums1 with respect to nums2 is the number of indices i for which nums1[i] > nums2[i]. Return any permutation of nums1 that maximizes its advantage with respect to nums2.",
            constraints: "1 <= nums1.length <= 10^5\nnums2.length == nums1.length\n0 <= nums1[i], nums2[i] <= 10^9",
            fnName: "advantageCount",
            returnType: "vector<int>",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[2, 7, 11, 15], [1, 10, 4, 11]],
                [[12, 24, 8, 32], [13, 25, 32, 11]]
            ],
            solver: (nums1, nums2) => {
                const s1 = [...nums1].sort((a, b) => a - b);
                const s2 = nums2.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
                const ans = new Array(nums1.length);
                let l = 0, r = nums1.length - 1;
                for (const x of s1) {
                    if (x > s2[l][0]) {
                        ans[s2[l++][1]] = x;
                    } else {
                        ans[s2[r--][1]] = x;
                    }
                }
                return ans;
            }
        }),

        // 20. Break a Palindrome
        createProblem({
            title: "Break a Palindrome Lexicographically Smallest",
            topic: "Greedy",
            difficulty: "Medium",
            patterns: ["Greedy"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible. If impossible, return empty string \"\".",
            constraints: "1 <= palindrome.length <= 1000\npalindrome consists of only lowercase English letters.",
            fnName: "breakPalindrome",
            returnType: "string",
            params: [{ name: "palindrome", type: "string" }],
            rawExamples: [
                ["abccba"],
                ["a"],
                ["aa"]
            ],
            solver: (palindrome) => {
                if (palindrome.length <= 1) return "";
                const chars = palindrome.split("");
                for (let i = 0; i < Math.floor(chars.length / 2); i++) {
                    if (chars[i] !== 'a') {
                        chars[i] = 'a';
                        return chars.join("");
                    }
                }
                chars[chars.length - 1] = 'b';
                return chars.join("");
            }
        })
    ];
}
