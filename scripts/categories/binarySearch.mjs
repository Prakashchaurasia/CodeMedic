import { createProblem } from "../problem_blueprints.mjs";

export function getBinarySearchProblems() {
    return [
        // 1. Classic Binary Search
        createProblem({
            title: "Binary Search",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
            constraints: "1 <= nums.length <= 10^4\n-10^4 < nums[i], target < 10^4\nAll the integers in nums are unique.\nnums is sorted in ascending order.",
            fnName: "search",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[-1, 0, 3, 5, 9, 12], 9],
                [[-1, 0, 3, 5, 9, 12], 2]
            ],
            solver: (nums, target) => {
                let l = 0, r = nums.length - 1;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    if (nums[mid] === target) return mid;
                    if (nums[mid] < target) l = mid + 1;
                    else r = mid - 1;
                }
                return -1;
            }
        }),

        // 2. Search Insert Position
        createProblem({
            title: "Search Insert Position",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
            constraints: "1 <= nums.length <= 10^4\n-10^4 <= nums[i], target <= 10^4\nnums contains distinct values sorted in ascending order.",
            fnName: "searchInsert",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[1, 3, 5, 6], 5],
                [[1, 3, 5, 6], 2],
                [[1, 3, 5, 6], 7]
            ],
            solver: (nums, target) => {
                let l = 0, r = nums.length - 1;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    if (nums[mid] === target) return mid;
                    if (nums[mid] < target) l = mid + 1;
                    else r = mid - 1;
                }
                return l;
            }
        }),

        // 3. First Bad Version
        createProblem({
            title: "First Bad Version Finder",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "You have n versions [1, 2, ..., n] and the first bad version is given by bad. Find the first bad version using binary search.",
            constraints: "1 <= bad <= n <= 2^31 - 1",
            fnName: "firstBadVersion",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "bad", type: "int" }
            ],
            rawExamples: [
                [5, 4],
                [1, 1]
            ],
            solver: (n, bad) => {
                let l = 1, r = n;
                while (l < r) {
                    const mid = Math.floor(l + (r - l) / 2);
                    if (mid >= bad) r = mid;
                    else l = mid + 1;
                }
                return l;
            }
        }),

        // 4. Sqrt(x)
        createProblem({
            title: "Integer Square Root",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log x)",
            expectedSpace: "O(1)",
            description: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.",
            constraints: "0 <= x <= 2^31 - 1",
            fnName: "mySqrt",
            returnType: "int",
            params: [{ name: "x", type: "int" }],
            rawExamples: [
                [4],
                [8],
                [0]
            ],
            solver: (x) => {
                if (x === 0 || x === 1) return x;
                let l = 1, r = Math.floor(x / 2), ans = 0;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    if (mid * mid === x) return mid;
                    if (mid * mid < x) {
                        ans = mid;
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
                return ans;
            }
        }),

        // 5. Search in Rotated Sorted Array
        createProblem({
            title: "Search in Rotated Sorted Array",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "There is an integer array nums sorted in ascending order (with distinct values). Given the array nums after possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
            constraints: "1 <= nums.length <= 5000\n-10^4 <= nums[i], target <= 10^4\nAll values of nums are unique.",
            fnName: "search",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[4, 5, 6, 7, 0, 1, 2], 0],
                [[4, 5, 6, 7, 0, 1, 2], 3],
                [[1], 0]
            ],
            solver: (nums, target) => {
                let l = 0, r = nums.length - 1;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    if (nums[mid] === target) return mid;
                    if (nums[l] <= nums[mid]) {
                        if (nums[l] <= target && target < nums[mid]) r = mid - 1;
                        else l = mid + 1;
                    } else {
                        if (nums[mid] < target && target <= nums[r]) l = mid + 1;
                        else r = mid - 1;
                    }
                }
                return -1;
            }
        }),

        // 6. Find Minimum in Rotated Sorted Array
        createProblem({
            title: "Find Minimum in Rotated Sorted Array",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "Given the sorted rotated array nums of unique elements, return the minimum element of this array in O(log n) time.",
            constraints: "n == nums.length\n1 <= n <= 5000\n-5000 <= nums[i] <= 5000\nAll the integers of nums are unique.",
            fnName: "findMin",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[3, 4, 5, 1, 2]],
                [[4, 5, 6, 7, 0, 1, 2]],
                [[11, 13, 15, 17]]
            ],
            solver: (nums) => {
                let l = 0, r = nums.length - 1;
                while (l < r) {
                    const mid = Math.floor((l + r) / 2);
                    if (nums[mid] > nums[r]) l = mid + 1;
                    else r = mid;
                }
                return nums[l];
            }
        }),

        // 7. Find First and Last Position of Element in Sorted Array
        createProblem({
            title: "Find First and Last Position in Sorted Array",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].",
            constraints: "0 <= nums.length <= 10^5\n-10^9 <= nums[i], target <= 10^9\nnums is a non-decreasing array.",
            fnName: "searchRange",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[5, 7, 7, 8, 8, 10], 8],
                [[5, 7, 7, 8, 8, 10], 6],
                [[], 0]
            ],
            solver: (nums, target) => {
                const findBound = (isFirst) => {
                    let l = 0, r = nums.length - 1, ans = -1;
                    while (l <= r) {
                        const mid = Math.floor((l + r) / 2);
                        if (nums[mid] === target) {
                            ans = mid;
                            if (isFirst) r = mid - 1;
                            else l = mid + 1;
                        } else if (nums[mid] < target) {
                            l = mid + 1;
                        } else {
                            r = mid - 1;
                        }
                    }
                    return ans;
                };
                return [findBound(true), findBound(false)];
            }
        }),

        // 8. Peak Index in a Mountain Array
        createProblem({
            title: "Peak Index in a Mountain Array",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "An array arr is a mountain if arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]. Given a mountain array arr, return the index i of the peak element.",
            constraints: "3 <= arr.length <= 10^5\n0 <= arr[i] <= 10^6\narr is guaranteed to be a mountain array.",
            fnName: "peakIndexInMountainArray",
            returnType: "int",
            params: [{ name: "arr", type: "vector<int>&" }],
            rawExamples: [
                [[0, 1, 0]],
                [[0, 2, 1, 0]],
                [[0, 10, 5, 2]]
            ],
            solver: (arr) => {
                let l = 0, r = arr.length - 1;
                while (l < r) {
                    const mid = Math.floor((l + r) / 2);
                    if (arr[mid] < arr[mid + 1]) l = mid + 1;
                    else r = mid;
                }
                return l;
            }
        }),

        // 9. Find Peak Element
        createProblem({
            title: "Find Peak Element Index",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index in O(log n) time.",
            constraints: "1 <= nums.length <= 1000\n-2^31 <= nums[i] <= 2^31 - 1\nnums[i] != nums[i + 1] for all valid i.",
            fnName: "findPeakElement",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 1]],
                [[1, 2, 1, 3, 5, 6, 4]]
            ],
            solver: (nums) => {
                let l = 0, r = nums.length - 1;
                while (l < r) {
                    const mid = Math.floor((l + r) / 2);
                    if (nums[mid] > nums[mid + 1]) r = mid;
                    else l = mid + 1;
                }
                return l;
            }
        }),

        // 10. Capacity To Ship Packages Within D Days
        createProblem({
            title: "Capacity To Ship Packages Within D Days",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search on Answer"],
            dataStructures: ["Array"],
            expectedTime: "O(n log(sum))",
            expectedSpace: "O(1)",
            description: "A conveyor belt has packages that must be shipped within days days. Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.",
            constraints: "1 <= days <= weights.length <= 5 * 10^4\n1 <= weights[i] <= 500",
            fnName: "shipWithinDays",
            returnType: "int",
            params: [
                { name: "weights", type: "vector<int>&" },
                { name: "days", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5],
                [[3, 2, 2, 4, 1, 4], 3],
                [[1, 2, 3, 1, 1], 4]
            ],
            solver: (weights, days) => {
                let l = Math.max(...weights);
                let r = weights.reduce((a, b) => a + b, 0);
                while (l < r) {
                    const mid = Math.floor((l + r) / 2);
                    let need = 1, cur = 0;
                    for (const w of weights) {
                        if (cur + w > mid) {
                            need++;
                            cur = 0;
                        }
                        cur += w;
                    }
                    if (need <= days) r = mid;
                    else l = mid + 1;
                }
                return l;
            }
        }),

        // 11. Koko Eating Bananas
        createProblem({
            title: "Koko Eating Bananas",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search on Answer"],
            dataStructures: ["Array"],
            expectedTime: "O(n log(max))",
            expectedSpace: "O(1)",
            description: "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. Return the minimum integer k such that she can eat all the bananas within h hours.",
            constraints: "1 <= piles.length <= 10^4\npiles.length <= h <= 10^9\n1 <= piles[i] <= 10^9",
            fnName: "minEatingSpeed",
            returnType: "int",
            params: [
                { name: "piles", type: "vector<int>&" },
                { name: "h", type: "int" }
            ],
            rawExamples: [
                [[3, 6, 7, 11], 8],
                [[30, 11, 23, 4, 20], 5],
                [[30, 11, 23, 4, 20], 6]
            ],
            solver: (piles, h) => {
                let l = 1, r = Math.max(...piles);
                while (l < r) {
                    const mid = Math.floor((l + r) / 2);
                    let hours = 0;
                    for (const p of piles) {
                        hours += Math.ceil(p / mid);
                    }
                    if (hours <= h) r = mid;
                    else l = mid + 1;
                }
                return l;
            }
        }),

        // 12. Single Element in a Sorted Array
        createProblem({
            title: "Single Element in a Sorted Array",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Return the single element that appears only once in O(log n) time.",
            constraints: "1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^5",
            fnName: "singleNonDuplicate",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 1, 2, 3, 3, 4, 4, 8, 8]],
                [[3, 3, 7, 7, 10, 11, 11]]
            ],
            solver: (nums) => {
                let l = 0, r = nums.length - 1;
                while (l < r) {
                    let mid = Math.floor((l + r) / 2);
                    if (mid % 2 === 1) mid--;
                    if (nums[mid] === nums[mid + 1]) l = mid + 2;
                    else r = mid;
                }
                return nums[l];
            }
        }),

        // 13. Search a 2D Matrix
        createProblem({
            title: "Search a 2D Matrix",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search"],
            dataStructures: ["Matrix"],
            expectedTime: "O(log(m * n))",
            expectedSpace: "O(1)",
            description: "You are given an m x n integer matrix matrix with integers in each row sorted from left to right, and the first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if target is in matrix or false otherwise.",
            constraints: "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 100\n-10^4 <= matrix[i][j], target <= 10^4",
            fnName: "searchMatrix",
            returnType: "bool",
            params: [
                { name: "matrix", type: "vector<vector<int>>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3],
                [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13]
            ],
            solver: (matrix, target) => {
                const m = matrix.length, n = matrix[0].length;
                let l = 0, r = m * n - 1;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    const row = Math.floor(mid / n);
                    const col = mid % n;
                    const val = matrix[row][col];
                    if (val === target) return true;
                    if (val < target) l = mid + 1;
                    else r = mid - 1;
                }
                return false;
            }
        }),

        // 14. Arranging Coins
        createProblem({
            title: "Arranging Coins Complete Rows",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search", "Math"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "You have n coins and you want to build a staircase with these coins. The ith row contains exactly i coins. The last row of the staircase may be incomplete. Given the integer n, return the number of complete rows of the staircase you will build.",
            constraints: "1 <= n <= 2^31 - 1",
            fnName: "arrangeCoins",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [5],
                [8],
                [1]
            ],
            solver: (n) => {
                let l = 1, r = n, ans = 0;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    const cost = (mid * (mid + 1)) / 2;
                    if (cost === n) return mid;
                    if (cost < n) {
                        ans = mid;
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
                return ans;
            }
        }),

        // 15. Valid Perfect Square
        createProblem({
            title: "Valid Perfect Square",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log num)",
            expectedSpace: "O(1)",
            description: "Given a positive integer num, return true if num is a perfect square or false otherwise. Do not use any built-in library function such as sqrt.",
            constraints: "1 <= num <= 2^31 - 1",
            fnName: "isPerfectSquare",
            returnType: "bool",
            params: [{ name: "num", type: "int" }],
            rawExamples: [
                [16],
                [14],
                [1]
            ],
            solver: (num) => {
                let l = 1, r = num;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    const sq = mid * mid;
                    if (sq === num) return true;
                    if (sq < num) l = mid + 1;
                    else r = mid - 1;
                }
                return false;
            }
        }),

        // 16. Find Smallest Letter Greater Than Target
        createProblem({
            title: "Find Smallest Letter Greater Than Target",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters. Return the smallest character in letters that is lexicographically greater than target.",
            constraints: "2 <= letters.length <= 10^4\nletters[i] is a lowercase English letter.\nletters is sorted in non-decreasing order.",
            fnName: "nextGreatestLetter",
            returnType: "string",
            params: [
                { name: "letters", type: "vector<string>&" },
                { name: "target", type: "string" }
            ],
            rawExamples: [
                [["c", "f", "j"], "a"],
                [["c", "f", "j"], "c"],
                [["x", "x", "y", "y"], "z"]
            ],
            solver: (letters, target) => {
                let l = 0, r = letters.length - 1;
                let ans = letters[0];
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    if (letters[mid] > target) {
                        ans = letters[mid];
                        r = mid - 1;
                    } else {
                        l = mid + 1;
                    }
                }
                return ans;
            }
        }),

        // 17. Find the Distance Value Between Two Arrays
        createProblem({
            title: "Distance Value Between Two Arrays",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(n log m)",
            expectedSpace: "O(1)",
            description: "Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays. The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i] - arr2[j]| <= d.",
            constraints: "1 <= arr1.length, arr2.length <= 500\n-1000 <= arr1[i], arr2[j] <= 1000\n0 <= d <= 100",
            fnName: "findTheDistanceValue",
            returnType: "int",
            params: [
                { name: "arr1", type: "vector<int>&" },
                { name: "arr2", type: "vector<int>&" },
                { name: "d", type: "int" }
            ],
            rawExamples: [
                [[4, 5, 8], [10, 9, 1, 8], 2],
                [[1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3]
            ],
            solver: (arr1, arr2, d) => {
                arr2.sort((a, b) => a - b);
                let count = 0;
                for (const x of arr1) {
                    let hasClose = false;
                    let l = 0, r = arr2.length - 1;
                    while (l <= r) {
                        const mid = Math.floor((l + r) / 2);
                        if (Math.abs(arr2[mid] - x) <= d) {
                            hasClose = true;
                            break;
                        }
                        if (arr2[mid] < x) l = mid + 1;
                        else r = mid - 1;
                    }
                    if (!hasClose) count++;
                }
                return count;
            }
        }),

        // 18. Count Negative Numbers in a Sorted Matrix
        createProblem({
            title: "Count Negative Numbers in a Sorted Matrix",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search", "Two Pointers"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m + n)",
            expectedSpace: "O(1)",
            description: "Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.",
            constraints: "m == grid.length\nn == grid[i].length\n1 <= m, n <= 100\n-100 <= grid[i][j] <= 100",
            fnName: "countNegatives",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]],
                [[[3, 2], [1, 0]]]
            ],
            solver: (grid) => {
                let count = 0;
                const m = grid.length, n = grid[0].length;
                let r = 0, c = n - 1;
                while (r < m && c >= 0) {
                    if (grid[r][c] < 0) {
                        count += (m - r);
                        c--;
                    } else {
                        r++;
                    }
                }
                return count;
            }
        }),

        // 19. Special Array With X Elements Greater Than or Equal X
        createProblem({
            title: "Special Array With X Elements Greater Than or Equal X",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x. Return x if special, otherwise -1.",
            constraints: "1 <= nums.length <= 100\n0 <= nums[i] <= 1000",
            fnName: "specialArray",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[3, 5]],
                [[0, 0]],
                [[0, 4, 3, 0, 4]]
            ],
            solver: (nums) => {
                nums.sort((a, b) => a - b);
                const n = nums.length;
                for (let x = 1; x <= n; x++) {
                    const count = nums.filter(v => v >= x).length;
                    if (count === x) return x;
                }
                return -1;
            }
        }),

        // 20. Split Array Largest Sum
        createProblem({
            title: "Split Array Largest Sum",
            topic: "Binary Search",
            difficulty: "Hard",
            patterns: ["Binary Search on Answer"],
            dataStructures: ["Array"],
            expectedTime: "O(n log(sum))",
            expectedSpace: "O(1)",
            description: "Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized. Return the minimized largest sum.",
            constraints: "1 <= nums.length <= 1000\n0 <= nums[i] <= 10^6\n1 <= k <= min(50, nums.length)",
            fnName: "splitArray",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[7, 2, 5, 10, 8], 2],
                [[1, 2, 3, 4, 5], 2]
            ],
            solver: (nums, k) => {
                let l = Math.max(...nums);
                let r = nums.reduce((a, b) => a + b, 0);
                while (l < r) {
                    const mid = Math.floor((l + r) / 2);
                    let count = 1, cur = 0;
                    for (const x of nums) {
                        if (cur + x > mid) {
                            count++;
                            cur = 0;
                        }
                        cur += x;
                    }
                    if (count <= k) r = mid;
                    else l = mid + 1;
                }
                return l;
            }
        }),

        // 21. Magnetic Force Between Two Balls
        createProblem({
            title: "Magnetic Force Between Two Balls",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search on Answer"],
            dataStructures: ["Array"],
            expectedTime: "O(n log(max_dist))",
            expectedSpace: "O(1)",
            description: "In the universe of magnetic balls, position[i] represents a basket position. You have m balls and want to distribute them into the baskets such that the minimum magnetic force between any two balls is maximized. Return the maximum minimum force.",
            constraints: "n == position.length\n2 <= n <= 10^5\n1 <= position[i] <= 10^9\n2 <= m <= position.length",
            fnName: "maxDistance",
            returnType: "int",
            params: [
                { name: "position", type: "vector<int>&" },
                { name: "m", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 7], 3],
                [[5, 4, 3, 2, 1, 1000000000], 2]
            ],
            solver: (position, m) => {
                position.sort((a, b) => a - b);
                let l = 1, r = position[position.length - 1] - position[0];
                let ans = 1;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    let count = 1, last = position[0];
                    for (let i = 1; i < position.length; i++) {
                        if (position[i] - last >= mid) {
                            count++;
                            last = position[i];
                        }
                    }
                    if (count >= m) {
                        ans = mid;
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
                return ans;
            }
        }),

        // 22. Minimum Speed to Arrive on Time
        createProblem({
            title: "Minimum Speed to Arrive on Time",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search on Answer"],
            dataStructures: ["Array"],
            expectedTime: "O(n log(max_speed))",
            expectedSpace: "O(1)",
            description: "You are given a floating point number hour representing the amount of time you have to reach the office. To commute to the office, you must take n trains in sequential order given in dist. Return the minimum positive integer speed that all trains must travel at, or -1 if impossible.",
            constraints: "n == dist.length\n1 <= n <= 10^5\n1 <= dist[i] <= 10^5\n1 <= hour <= 10^9",
            fnName: "minSpeedOnTime",
            returnType: "int",
            params: [
                { name: "dist", type: "vector<int>&" },
                { name: "hour", type: "double" }
            ],
            rawExamples: [
                [[1, 3, 2], 6.0],
                [[1, 3, 2], 2.7],
                [[1, 3, 2], 1.9]
            ],
            solver: (dist, hour) => {
                if (hour <= dist.length - 1) return -1;
                let l = 1, r = 10000000;
                let ans = -1;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    let time = 0;
                    for (let i = 0; i < dist.length - 1; i++) {
                        time += Math.ceil(dist[i] / mid);
                    }
                    time += dist[dist.length - 1] / mid;
                    if (time <= hour) {
                        ans = mid;
                        r = mid - 1;
                    } else {
                        l = mid + 1;
                    }
                }
                return ans;
            }
        }),

        // 23. Maximum Candies Allocated to K Children
        createProblem({
            title: "Maximum Candies Allocated to K Children",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search on Answer"],
            dataStructures: ["Array"],
            expectedTime: "O(n log(max_candy))",
            expectedSpace: "O(1)",
            description: "You are given a 0-indexed integer array candies, where each element represents the number of candies in a pile, and an integer k. You want to allocate candies to k children such that each child gets the same number of candies. Return the maximum number of candies each child can get.",
            constraints: "1 <= candies.length <= 10^5\n1 <= candies[i] <= 10^7\n1 <= k <= 10^12",
            fnName: "maximumCandies",
            returnType: "int",
            params: [
                { name: "candies", type: "vector<int>&" },
                { name: "k", type: "long long" }
            ],
            rawExamples: [
                [[5, 8, 6], 3],
                [[2, 5], 11]
            ],
            solver: (candies, k) => {
                let l = 1, r = Math.max(...candies);
                let ans = 0;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    let count = 0;
                    for (const c of candies) count += Math.floor(c / mid);
                    if (count >= k) {
                        ans = mid;
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
                return ans;
            }
        }),

        // 24. Find K Closest Elements Return
        createProblem({
            title: "Find K Closest Elements",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search", "Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(log(n - k) + k)",
            expectedSpace: "O(k)",
            description: "Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.",
            constraints: "1 <= k <= arr.length\n1 <= arr.length <= 10^4\narr is sorted in ascending order.\n-10^4 <= arr[i], x <= 10^4",
            fnName: "findClosestElements",
            returnType: "vector<int>",
            params: [
                { name: "arr", type: "vector<int>&" },
                { name: "k", type: "int" },
                { name: "x", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], 4, 3],
                [[1, 2, 3, 4, 5], 4, -1]
            ],
            solver: (arr, k, x) => {
                let l = 0, r = arr.length - k;
                while (l < r) {
                    const mid = Math.floor((l + r) / 2);
                    if (x - arr[mid] > arr[mid + k] - x) l = mid + 1;
                    else r = mid;
                }
                return arr.slice(l, l + k);
            }
        }),

        // 25. Intersection of Three Sorted Arrays
        createProblem({
            title: "Intersection of Three Sorted Arrays",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search", "Three Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.",
            constraints: "1 <= arr1.length, arr2.length, arr3.length <= 1000\n1 <= arr1[i], arr2[i], arr3[i] <= 2000",
            fnName: "arraysIntersection",
            returnType: "vector<int>",
            params: [
                { name: "arr1", type: "vector<int>&" },
                { name: "arr2", type: "vector<int>&" },
                { name: "arr3", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]],
                [[197, 418, 523, 876, 1356], [501, 880, 1593, 1713, 1870], [521, 682, 1337, 1395, 1764]]
            ],
            solver: (arr1, arr2, arr3) => {
                let i = 0, j = 0, k = 0;
                const res = [];
                while (i < arr1.length && j < arr2.length && k < arr3.length) {
                    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
                        res.push(arr1[i]);
                        i++; j++; k++;
                    } else {
                        const minVal = Math.min(arr1[i], arr2[j], arr3[k]);
                        if (arr1[i] === minVal) i++;
                        if (arr2[j] === minVal) j++;
                        if (arr3[k] === minVal) k++;
                    }
                }
                return res;
            }
        }),

        // 26. Painter's Partition Problem
        createProblem({
            title: "Painter's Partition Minimum Time",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search on Answer"],
            dataStructures: ["Array"],
            expectedTime: "O(n log(sum))",
            expectedSpace: "O(1)",
            description: "Given n boards of certain lengths and k painters, each painter takes 1 unit of time to paint 1 unit of board length. Find the minimum time to paint all boards under the constraint that a painter can only paint contiguous sections.",
            constraints: "1 <= k <= boards.length <= 10^5\n1 <= boards[i] <= 10^6",
            fnName: "paintBoards",
            returnType: "int",
            params: [
                { name: "boards", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[5, 5, 5, 5], 2],
                [[10, 20, 30, 40], 2]
            ],
            solver: (boards, k) => {
                let l = Math.max(...boards);
                let r = boards.reduce((a, b) => a + b, 0);
                while (l < r) {
                    const mid = Math.floor((l + r) / 2);
                    let count = 1, cur = 0;
                    for (const b of boards) {
                        if (cur + b > mid) {
                            count++;
                            cur = 0;
                        }
                        cur += b;
                    }
                    if (count <= k) r = mid;
                    else l = mid + 1;
                }
                return l;
            }
        }),

        // 27. Search in a Sorted Array of Unknown Size
        createProblem({
            title: "Search Range in Bounded Array",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "Given a sorted integer array nums and a target, find whether target exists in nums by doubling search bounds starting from index 0.",
            constraints: "1 <= nums.length <= 10^4\n-10^4 <= nums[i], target <= 10^4",
            fnName: "searchBounded",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[-1, 0, 3, 5, 9, 12], 9],
                [[-1, 0, 3, 5, 9, 12], 2]
            ],
            solver: (nums, target) => {
                let l = 0, r = nums.length - 1;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    if (nums[mid] === target) return mid;
                    if (nums[mid] < target) l = mid + 1;
                    else r = mid - 1;
                }
                return -1;
            }
        }),

        // 28. Find Kth Missing Positive Number
        createProblem({
            title: "Kth Missing Positive Number",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "Given an array arr of positive integers sorted in a strictly increasing order, and an integer k, return the kth positive integer that is missing from this array.",
            constraints: "1 <= arr.length <= 1000\n1 <= arr[i] <= 1000\n1 <= k <= 1000\narr[i] < arr[j] for 1 <= i < j <= arr.length",
            fnName: "findKthPositive",
            returnType: "int",
            params: [
                { name: "arr", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[2, 3, 4, 7, 11], 5],
                [[1, 2, 3, 4], 2]
            ],
            solver: (arr, k) => {
                let l = 0, r = arr.length - 1;
                while (l <= r) {
                    const mid = Math.floor((l + r) / 2);
                    const missing = arr[mid] - (mid + 1);
                    if (missing < k) l = mid + 1;
                    else r = mid - 1;
                }
                return l + k;
            }
        }),

        // 29. Two Sum IV - Input Array BST Simulation
        createProblem({
            title: "Check Target Sum in Sorted Elements Array",
            topic: "Binary Search",
            difficulty: "Easy",
            patterns: ["Binary Search", "Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a sorted array of unique integers and a target k, return true if there exist two elements in the array whose sum equals k, or false otherwise.",
            constraints: "1 <= nums.length <= 10^4\n-10^4 <= nums[i], k <= 10^4\nnums is sorted in strictly ascending order.",
            fnName: "findTargetSumSorted",
            returnType: "bool",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[2, 3, 4, 5, 6, 7], 9],
                [[2, 3, 4, 5, 6, 7], 28]
            ],
            solver: (nums, k) => {
                let l = 0, r = nums.length - 1;
                while (l < r) {
                    const sum = nums[l] + nums[r];
                    if (sum === k) return true;
                    if (sum < k) l++;
                    else r--;
                }
                return false;
            }
        }),

        // 30. Search a 2D Matrix II Check
        createProblem({
            title: "Search a 2D Matrix II Exists",
            topic: "Binary Search",
            difficulty: "Medium",
            patterns: ["Binary Search", "Two Pointers"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m + n)",
            expectedSpace: "O(1)",
            description: "Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. Integers in each row are sorted in ascending from left to right, and integers in each column are sorted in ascending from top to bottom.",
            constraints: "m == matrix.length\nn == matrix[i].length\n1 <= n, m <= 300\n-10^9 <= matrix[i][j], target <= 10^9",
            fnName: "searchMatrixII",
            returnType: "bool",
            params: [
                { name: "matrix", type: "vector<vector<int>>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5],
                [[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20]
            ],
            solver: (matrix, target) => {
                let r = 0, c = matrix[0].length - 1;
                while (r < matrix.length && c >= 0) {
                    if (matrix[r][c] === target) return true;
                    if (matrix[r][c] > target) c--;
                    else r++;
                }
                return false;
            }
        })
    ];
}
