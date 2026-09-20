import { createProblem } from "../problem_blueprints.mjs";

export function getArrayProblems() {
    return [
        // 1. Array Rotation
        createProblem({
            title: "Rotate Array by K Positions",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of integers nums and an integer k, rotate the array to the right by k positions in-place.",
            constraints: "1 <= nums.length <= 10^5\n0 <= k <= 10^5\n-10^4 <= nums[i] <= 10^4",
            fnName: "rotate",
            returnType: "void",
            outputMode: "MUTATED_PARAMETER",
            mutates: ["nums"],
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5, 6, 7], 3],
                [[-1, -100, 3, 99], 2]
            ],
            solver: (nums, k) => {
                const n = nums.length;
                const shift = k % n;
                if (shift === 0) return nums;
                return [...nums.slice(n - shift), ...nums.slice(0, n - shift)];
            }
        }),

        // 2. Remove Duplicates from Sorted Array
        createProblem({
            title: "Remove Duplicates from Sorted Array",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums sorted in non-decreasing order, return the count of unique elements present in the array.",
            constraints: "1 <= nums.length <= 3 * 10^4\n-100 <= nums[i] <= 100\nnums is sorted in non-decreasing order.",
            fnName: "removeDuplicates",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 1, 2]],
                [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]]
            ],
            solver: (nums) => {
                if (nums.length === 0) return 0;
                let count = 1;
                for (let i = 1; i < nums.length; i++) {
                    if (nums[i] !== nums[i - 1]) count++;
                }
                return count;
            }
        }),

        // 3. Equilibrium Index
        createProblem({
            title: "Equilibrium Index of an Array",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Prefix Sum"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Find the leftmost equilibrium index of an array. An equilibrium index is an index such that the sum of elements at lower indices equals the sum of elements at higher indices. Return -1 if no such index exists.",
            constraints: "1 <= nums.length <= 10^5\n-1000 <= nums[i] <= 1000",
            fnName: "pivotIndex",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 7, 3, 6, 5, 6]],
                [[1, 2, 3]],
                [[2, 1, -1]]
            ],
            solver: (nums) => {
                const total = nums.reduce((a, b) => a + b, 0);
                let left = 0;
                for (let i = 0; i < nums.length; i++) {
                    if (left === total - left - nums[i]) return i;
                    left += nums[i];
                }
                return -1;
            }
        }),

        // 4. Running Sum of 1D Array
        createProblem({
            title: "Running Sum of 1D Array",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Prefix Sum"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums, return the running sum of nums where runningSum[i] = sum(nums[0]...nums[i]).",
            constraints: "1 <= nums.length <= 1000\n-10^6 <= nums[i] <= 10^6",
            fnName: "runningSum",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3, 4]],
                [[1, 1, 1, 1, 1]],
                [[3, 1, 2, 10, 1]]
            ],
            solver: (nums) => {
                const res = [];
                let s = 0;
                for (const x of nums) {
                    s += x;
                    res.push(s);
                }
                return res;
            }
        }),

        // 5. Majority Element
        createProblem({
            title: "Majority Element",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums of size n, return the majority element that appears more than ⌊n / 2⌋ times.",
            constraints: "n == nums.length\n1 <= n <= 5 * 10^4\n-10^9 <= nums[i] <= 10^9\nA majority element is guaranteed to exist.",
            fnName: "majorityElement",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[3, 2, 3]],
                [[2, 2, 1, 1, 1, 2, 2]]
            ],
            solver: (nums) => {
                let candidate = nums[0];
                let count = 0;
                for (const x of nums) {
                    if (count === 0) candidate = x;
                    count += (x === candidate) ? 1 : -1;
                }
                return candidate;
            }
        }),

        // 6. Shuffle the Array
        createProblem({
            title: "Shuffle the Array",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Simulation"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the array nums consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn], return the array in the form [x1, y1, x2, y2, ..., xn, yn].",
            constraints: "1 <= n <= 500\nnums.length == 2n\n1 <= nums[i] <= 10^3",
            fnName: "shuffle",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [[2, 5, 1, 3, 4, 7], 3],
                [[1, 2, 3, 4, 4, 3, 2, 1], 4],
                [[1, 1, 2, 2], 2]
            ],
            solver: (nums, n) => {
                const res = [];
                for (let i = 0; i < n; i++) {
                    res.push(nums[i], nums[i + n]);
                }
                return res;
            }
        }),

        // 7. Product of Array Except Self
        createProblem({
            title: "Product of Array Except Self",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Prefix Sum"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Do not use the division operator.",
            constraints: "2 <= nums.length <= 10^5\n-30 <= nums[i] <= 30",
            fnName: "productExceptSelf",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3, 4]],
                [[-1, 1, 0, -3, 3]]
            ],
            solver: (nums) => {
                const n = nums.length;
                const res = new Array(n).fill(1);
                let left = 1;
                for (let i = 0; i < n; i++) {
                    res[i] = left;
                    left *= nums[i];
                }
                let right = 1;
                for (let i = n - 1; i >= 0; i--) {
                    res[i] *= right;
                    right *= nums[i];
                }
                return res;
            }
        }),

        // 8. Find All Numbers Disappeared in an Array
        createProblem({
            title: "Find All Disappeared Numbers",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.",
            constraints: "n == nums.length\n1 <= n <= 10^5\n1 <= nums[i] <= n",
            fnName: "findDisappearedNumbers",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[4, 3, 2, 7, 8, 2, 3, 1]],
                [[1, 1]]
            ],
            solver: (nums) => {
                const set = new Set(nums);
                const res = [];
                for (let i = 1; i <= nums.length; i++) {
                    if (!set.has(i)) res.push(i);
                }
                return res;
            }
        }),

        // 9. Merge Sorted Arrays
        createProblem({
            title: "Merge Two Sorted Arrays",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(m + n)",
            expectedSpace: "O(m + n)",
            description: "Given two integer arrays nums1 and nums2, both sorted in non-decreasing order, return a single merged array containing all elements in non-decreasing order.",
            constraints: "0 <= nums1.length, nums2.length <= 10^4\n-10^9 <= nums1[i], nums2[i] <= 10^9",
            fnName: "mergeSorted",
            returnType: "vector<int>",
            params: [
                { name: "nums1", type: "vector<int>&" },
                { name: "nums2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3], [2, 5, 6]],
                [[1], []],
                [[], [1]]
            ],
            solver: (nums1, nums2) => {
                return [...nums1, ...nums2].sort((a, b) => a - b);
            }
        }),

        // 10. Build Array from Permutation
        createProblem({
            title: "Build Array from Permutation",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Simulation"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.",
            constraints: "1 <= nums.length <= 1000\n0 <= nums[i] < nums.length\nThe elements in nums are distinct.",
            fnName: "buildArray",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[0, 2, 1, 5, 3, 4]],
                [[5, 0, 1, 2, 3, 4]]
            ],
            solver: (nums) => {
                return nums.map(x => nums[x]);
            }
        }),

        // 11. Monotonic Array
        createProblem({
            title: "Monotonic Array Check",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "An array is monotonic if it is either monotone increasing or monotone decreasing. Return true if and only if the given array nums is monotonic.",
            constraints: "1 <= nums.length <= 10^5\n-10^5 <= nums[i] <= 10^5",
            fnName: "isMonotonic",
            returnType: "bool",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 2, 3]],
                [[6, 5, 4, 4]],
                [[1, 3, 2]]
            ],
            solver: (nums) => {
                let inc = true;
                let dec = true;
                for (let i = 1; i < nums.length; i++) {
                    if (nums[i] < nums[i - 1]) inc = false;
                    if (nums[i] > nums[i - 1]) dec = false;
                }
                return inc || dec;
            }
        }),

        // 12. Sort Array By Parity
        createProblem({
            title: "Sort Array By Parity",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition.",
            constraints: "1 <= nums.length <= 5000\n0 <= nums[i] <= 5000",
            fnName: "sortArrayByParity",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[3, 1, 2, 4]],
                [[0]]
            ],
            solver: (nums) => {
                const evens = nums.filter(x => x % 2 === 0);
                const odds = nums.filter(x => x % 2 !== 0);
                return [...evens, ...odds];
            }
        }),

        // 13. Find Numbers with Even Number of Digits
        createProblem({
            title: "Find Numbers with Even Number of Digits",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums of integers, return how many of them contain an even number of digits.",
            constraints: "1 <= nums.length <= 500\n1 <= nums[i] <= 10^5",
            fnName: "findNumbers",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[12, 345, 2, 6, 7896]],
                [[555, 901, 482, 1771]]
            ],
            solver: (nums) => {
                return nums.filter(x => String(x).length % 2 === 0).length;
            }
        }),

        // 14. Find the Duplicate Number
        createProblem({
            title: "Find the Duplicate Number in Array",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Cycle Detection"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number.",
            constraints: "1 <= n <= 10^5\nnums.length == n + 1\n1 <= nums[i] <= n\nAll the integers in nums appear only once except for precisely one integer which appears two or more times.",
            fnName: "findDuplicate",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 3, 4, 2, 2]],
                [[3, 1, 3, 4, 2]],
                [[3, 3, 3, 3, 3]]
            ],
            solver: (nums) => {
                let slow = nums[0];
                let fast = nums[0];
                do {
                    slow = nums[slow];
                    fast = nums[nums[fast]];
                } while (slow !== fast);
                slow = nums[0];
                while (slow !== fast) {
                    slow = nums[slow];
                    fast = nums[fast];
                }
                return slow;
            }
        }),

        // 15. Defuse the Bomb
        createProblem({
            title: "Defuse the Bomb Circular Array",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Sliding Window"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You have a bomb to defuse, and your informer gives you a circular array code of length n and a key k. If k > 0, replace the ith number with the sum of the next k numbers. If k < 0, replace with the previous |k| numbers. If k == 0, replace with 0.",
            constraints: "n == code.length\n1 <= n <= 100\n1 <= code[i] <= 100\n-(n - 1) <= k <= n - 1",
            fnName: "decrypt",
            returnType: "vector<int>",
            params: [
                { name: "code", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[5, 7, 1, 4], 3],
                [[1, 2, 3, 4], 0],
                [[2, 4, 9, 3], -2]
            ],
            solver: (code, k) => {
                const n = code.length;
                const res = new Array(n).fill(0);
                if (k === 0) return res;
                for (let i = 0; i < n; i++) {
                    let sum = 0;
                    if (k > 0) {
                        for (let j = 1; j <= k; j++) sum += code[(i + j) % n];
                    } else {
                        for (let j = 1; j <= -k; j++) sum += code[(i - j + n) % n];
                    }
                    res[i] = sum;
                }
                return res;
            }
        }),

        // 16. Can Make Arithmetic Progression
        createProblem({
            title: "Can Make Arithmetic Progression From Sequence",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same. Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression, otherwise false.",
            constraints: "2 <= arr.length <= 1000\n-10^6 <= arr[i] <= 10^6",
            fnName: "canMakeArithmeticProgression",
            returnType: "bool",
            params: [
                { name: "arr", type: "vector<int>&" }
            ],
            rawExamples: [
                [[3, 5, 1]],
                [[1, 2, 4]]
            ],
            solver: (arr) => {
                arr.sort((a, b) => a - b);
                const d = arr[1] - arr[0];
                for (let i = 2; i < arr.length; i++) {
                    if (arr[i] - arr[i - 1] !== d) return false;
                }
                return true;
            }
        }),

        // 17. 3Sum Target Zero
        createProblem({
            title: "Three Sum Zero",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, return the count of unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
            constraints: "3 <= nums.length <= 3000\n-10^5 <= nums[i] <= 10^5",
            fnName: "threeSumCount",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[-1, 0, 1, 2, -1, -4]],
                [[0, 1, 1]],
                [[0, 0, 0]]
            ],
            solver: (nums) => {
                nums.sort((a, b) => a - b);
                const n = nums.length;
                let count = 0;
                for (let i = 0; i < n - 2; i++) {
                    if (i > 0 && nums[i] === nums[i - 1]) continue;
                    let l = i + 1;
                    let r = n - 1;
                    while (l < r) {
                        const s = nums[i] + nums[l] + nums[r];
                        if (s === 0) {
                            count++;
                            while (l < r && nums[l] === nums[l + 1]) l++;
                            while (l < r && nums[r] === nums[r - 1]) r--;
                            l++;
                            r--;
                        } else if (s < 0) {
                            l++;
                        } else {
                            r--;
                        }
                    }
                }
                return count;
            }
        }),

        // 18. Maximum Average Subarray I
        createProblem({
            title: "Maximum Average Subarray I",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Sliding Window"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.",
            constraints: "n == nums.length\n1 <= k <= n <= 10^5\n-10^4 <= nums[i] <= 10^4",
            fnName: "findMaxAverage",
            returnType: "double",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 12, -5, -6, 50, 3], 4],
                [[5], 1]
            ],
            solver: (nums, k) => {
                let curSum = 0;
                for (let i = 0; i < k; i++) curSum += nums[i];
                let maxSum = curSum;
                for (let i = k; i < nums.length; i++) {
                    curSum += nums[i] - nums[i - k];
                    maxSum = Math.max(maxSum, curSum);
                }
                return parseFloat((maxSum / k).toFixed(5));
            }
        }),

        // 19. Can Place Flowers
        createProblem({
            title: "Can Place Flowers",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You have a long flowerbed in which some of the plots are planted, and some are not. Flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's and an integer n, return true if n new flowers can be planted without violating the no-adjacent-flowers rule.",
            constraints: "1 <= flowerbed.length <= 2 * 10^4\nflowerbed[i] is 0 or 1.\n0 <= n <= flowerbed.length",
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
                let count = 0;
                const arr = [...flowerbed];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === 0) {
                        const emptyLeft = (i === 0 || arr[i - 1] === 0);
                        const emptyRight = (i === arr.length - 1 || arr[i + 1] === 0);
                        if (emptyLeft && emptyRight) {
                            arr[i] = 1;
                            count++;
                        }
                    }
                }
                return count >= n;
            }
        }),

        // 20. Next Permutation
        createProblem({
            title: "Next Lexicographical Permutation",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "A permutation of an array of integers is an arrangement of its members into a sequence or linear order. Rearrange numbers into the lexicographically next greater permutation of numbers. If no greater permutation exists, rearrange it as the lowest possible order (i.e., sorted in ascending order). Return the modified array.",
            constraints: "1 <= nums.length <= 100\n0 <= nums[i] <= 100",
            fnName: "nextPermutation",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3]],
                [[3, 2, 1]],
                [[1, 1, 5]]
            ],
            solver: (nums) => {
                const a = [...nums];
                const n = a.length;
                let i = n - 2;
                while (i >= 0 && a[i] >= a[i + 1]) i--;
                if (i >= 0) {
                    let j = n - 1;
                    while (a[j] <= a[i]) j--;
                    [a[i], a[j]] = [a[j], a[i]];
                }
                let l = i + 1, r = n - 1;
                while (l < r) {
                    [a[l], a[r]] = [a[r], a[l]];
                    l++;
                    r--;
                }
                return a;
            }
        }),

        // 21. Spiral Matrix Traversal
        createProblem({
            title: "Spiral Matrix Traversal",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(1)",
            description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
            constraints: "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 10\n-100 <= matrix[i][j] <= 100",
            fnName: "spiralOrder",
            returnType: "vector<int>",
            params: [
                { name: "matrix", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
                [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]]
            ],
            solver: (matrix) => {
                const res = [];
                if (!matrix || matrix.length === 0) return res;
                let top = 0, bottom = matrix.length - 1;
                let left = 0, right = matrix[0].length - 1;
                while (top <= bottom && left <= right) {
                    for (let c = left; c <= right; c++) res.push(matrix[top][c]);
                    top++;
                    for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);
                    right--;
                    if (top <= bottom) {
                        for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);
                        bottom--;
                    }
                    if (left <= right) {
                        for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);
                        left++;
                    }
                }
                return res;
            }
        }),

        // 22. Rotate Image 90 Degrees Clockwise
        createProblem({
            title: "Rotate Image 90 Degrees Clockwise",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Matrix"],
            dataStructures: ["Array"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(1)",
            description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise) in-place. Return the rotated matrix.",
            constraints: "n == matrix.length == matrix[i].length\n1 <= n <= 20\n-1000 <= matrix[i][j] <= 1000",
            fnName: "rotateImage",
            returnType: "vector<vector<int>>",
            params: [
                { name: "matrix", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
                [[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]]
            ],
            solver: (matrix) => {
                const n = matrix.length;
                const m = matrix.map(row => [...row]);
                // Transpose
                for (let i = 0; i < n; i++) {
                    for (let j = i; j < n; j++) {
                        [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
                    }
                }
                // Reverse rows
                for (let i = 0; i < n; i++) {
                    m[i].reverse();
                }
                return m;
            }
        }),

        // 23. Set Matrix Zeroes
        createProblem({
            title: "Set Matrix Zeroes",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Matrix"],
            dataStructures: ["Array"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(1)",
            description: "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. Return the modified matrix.",
            constraints: "m == matrix.length\nn == matrix[0].length\n1 <= m, n <= 20\n-2^31 <= matrix[i][j] <= 2^31 - 1",
            fnName: "setZeroes",
            returnType: "vector<vector<int>>",
            params: [
                { name: "matrix", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [[[1, 1, 1], [1, 0, 1], [1, 1, 1]]],
                [[[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]]
            ],
            solver: (matrix) => {
                const m = matrix.map(r => [...r]);
                const rows = new Set();
                const cols = new Set();
                for (let r = 0; r < m.length; r++) {
                    for (let c = 0; c < m[0].length; c++) {
                        if (m[r][c] === 0) {
                            rows.add(r);
                            cols.add(c);
                        }
                    }
                }
                for (let r = 0; r < m.length; r++) {
                    for (let c = 0; c < m[0].length; c++) {
                        if (rows.has(r) || cols.has(c)) m[r][c] = 0;
                    }
                }
                return m;
            }
        }),

        // 24. Pascal's Triangle
        createProblem({
            title: "Pascal's Triangle Row Generator",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Dynamic Programming"],
            dataStructures: ["Array"],
            expectedTime: "O(numRows^2)",
            expectedSpace: "O(numRows^2)",
            description: "Given an integer numRows, return the first numRows of Pascal's triangle.",
            constraints: "1 <= numRows <= 10",
            fnName: "generatePascalsTriangle",
            returnType: "vector<vector<int>>",
            params: [
                { name: "numRows", type: "int" }
            ],
            rawExamples: [
                [5],
                [1]
            ],
            solver: (numRows) => {
                const triangle = [];
                for (let i = 0; i < numRows; i++) {
                    const row = new Array(i + 1).fill(1);
                    for (let j = 1; j < i; j++) {
                        row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                    }
                    triangle.push(row);
                }
                return triangle;
            }
        }),

        // 25. Merge Intervals
        createProblem({
            title: "Merge Overlapping Intervals",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Merge Intervals", "Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
            constraints: "1 <= intervals.length <= 10^4\nintervals[i].length == 2\n0 <= starti <= endi <= 10^4",
            fnName: "mergeIntervals",
            returnType: "vector<vector<int>>",
            params: [
                { name: "intervals", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [[[1, 3], [2, 6], [8, 10], [15, 18]]],
                [[[1, 4], [4, 5]]]
            ],
            solver: (intervals) => {
                if (intervals.length === 0) return [];
                const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
                const res = [sorted[0]];
                for (let i = 1; i < sorted.length; i++) {
                    const last = res[res.length - 1];
                    const cur = sorted[i];
                    if (cur[0] <= last[1]) {
                        last[1] = Math.max(last[1], cur[1]);
                    } else {
                        res.push(cur);
                    }
                }
                return res;
            }
        }),

        // 26. Insert Interval
        createProblem({
            title: "Insert New Interval",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Merge Intervals"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] sorted in ascending order by starti. You are also given an interval newInterval = [start, end]. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).",
            constraints: "0 <= intervals.length <= 10^4\nintervals[i].length == 2\n0 <= starti <= endi <= 10^5\nnewInterval.length == 2\n0 <= start <= end <= 10^5",
            fnName: "insertInterval",
            returnType: "vector<vector<int>>",
            params: [
                { name: "intervals", type: "vector<vector<int>>&" },
                { name: "newInterval", type: "vector<int>&" }
            ],
            rawExamples: [
                [[[1, 3], [6, 9]], [2, 5]],
                [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]]
            ],
            solver: (intervals, newInterval) => {
                const res = [];
                let i = 0;
                const n = intervals.length;
                while (i < n && intervals[i][1] < newInterval[0]) {
                    res.push(intervals[i]);
                    i++;
                }
                while (i < n && intervals[i][0] <= newInterval[1]) {
                    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
                    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
                    i++;
                }
                res.push(newInterval);
                while (i < n) {
                    res.push(intervals[i]);
                    i++;
                }
                return res;
            }
        }),

        // 27. First Missing Positive
        createProblem({
            title: "First Missing Positive Integer",
            topic: "Arrays",
            difficulty: "Hard",
            patterns: ["Hashing", "Array Indexing"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an unsorted integer array nums, return the smallest positive integer that is not present in nums.",
            constraints: "1 <= nums.length <= 10^5\n-2^31 <= nums[i] <= 2^31 - 1",
            fnName: "firstMissingPositive",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 0]],
                [[3, 4, -1, 1]],
                [[7, 8, 9, 11, 12]]
            ],
            solver: (nums) => {
                const set = new Set(nums);
                let i = 1;
                while (set.has(i)) i++;
                return i;
            }
        }),

        // 28. Subarray Sum Equals K
        createProblem({
            title: "Total Subarrays Sum Equals K",
            topic: "Arrays",
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
                let count = 0, sum = 0;
                for (const x of nums) {
                    sum += x;
                    if (map.has(sum - k)) count += map.get(sum - k);
                    map.set(sum, (map.get(sum) || 0) + 1);
                }
                return count;
            }
        }),

        // 29. Maximum Ascending Subarray Sum
        createProblem({
            title: "Maximum Ascending Subarray Sum",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.",
            constraints: "1 <= nums.length <= 100\n1 <= nums[i] <= 100",
            fnName: "maxAscendingSum",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[10, 20, 30, 5, 10, 50]],
                [[10, 20, 30, 40, 50]],
                [[12, 17, 15, 13, 10, 11, 12]]
            ],
            solver: (nums) => {
                let maxSum = nums[0];
                let cur = nums[0];
                for (let i = 1; i < nums.length; i++) {
                    if (nums[i] > nums[i - 1]) cur += nums[i];
                    else cur = nums[i];
                    maxSum = Math.max(maxSum, cur);
                }
                return maxSum;
            }
        }),

        // 30. Check If N and Its Double Exist
        createProblem({
            title: "Check If Double Exists",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Set", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array arr of integers, check if there exist two indices i and j such that i != j, 0 <= i, j < arr.length, and arr[i] == 2 * arr[j].",
            constraints: "2 <= arr.length <= 500\n-10^3 <= arr[i] <= 10^3",
            fnName: "checkIfExist",
            returnType: "bool",
            params: [
                { name: "arr", type: "vector<int>&" }
            ],
            rawExamples: [
                [[10, 2, 5, 3]],
                [[3, 1, 7, 11]]
            ],
            solver: (arr) => {
                const set = new Set();
                for (const x of arr) {
                    if (set.has(x * 2) || (x % 2 === 0 && set.has(x / 2))) return true;
                    set.add(x);
                }
                return false;
            }
        }),

        // 31. Height Checker
        createProblem({
            title: "Height Checker Alignment",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Return the number of indices where heights[i] != expected[i].",
            constraints: "1 <= heights.length <= 100\n1 <= heights[i] <= 100",
            fnName: "heightChecker",
            returnType: "int",
            params: [
                { name: "heights", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 1, 4, 2, 1, 3]],
                [[5, 1, 2, 3, 4]],
                [[1, 2, 3, 4, 5]]
            ],
            solver: (heights) => {
                const expected = [...heights].sort((a, b) => a - b);
                let diff = 0;
                for (let i = 0; i < heights.length; i++) {
                    if (heights[i] !== expected[i]) diff++;
                }
                return diff;
            }
        }),

        // 32. Third Maximum Number
        createProblem({
            title: "Third Distinct Maximum Number",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.",
            constraints: "1 <= nums.length <= 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
            fnName: "thirdMax",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[3, 2, 1]],
                [[1, 2]],
                [[2, 2, 3, 1]]
            ],
            solver: (nums) => {
                const distinct = Array.from(new Set(nums)).sort((a, b) => b - a);
                return distinct.length >= 3 ? distinct[2] : distinct[0];
            }
        }),

        // 33. Maximum Consecutive Ones
        createProblem({
            title: "Max Consecutive Ones",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
            constraints: "1 <= nums.length <= 10^5\nnums[i] is either 0 or 1.",
            fnName: "findMaxConsecutiveOnes",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 1, 0, 1, 1, 1]],
                [[1, 0, 1, 1, 0, 1]]
            ],
            solver: (nums) => {
                let maxC = 0, cur = 0;
                for (const x of nums) {
                    if (x === 1) cur++;
                    else {
                        maxC = Math.max(maxC, cur);
                        cur = 0;
                    }
                }
                return Math.max(maxC, cur);
            }
        }),

        // 34. Relative Sort Array
        createProblem({
            title: "Relative Sort Array Order",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Sorting", "Hashing"],
            dataStructures: ["Array", "Hash Map"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1. Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.",
            constraints: "1 <= arr1.length, arr2.length <= 1000\n0 <= arr1[i], arr2[i] <= 1000\nAll the values of arr2 are unique.",
            fnName: "relativeSortArray",
            returnType: "vector<int>",
            params: [
                { name: "arr1", type: "vector<int>&" },
                { name: "arr2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]],
                [[28, 6, 22, 8, 44, 17], [22, 28, 8, 6]]
            ],
            solver: (arr1, arr2) => {
                const rank = new Map();
                arr2.forEach((val, idx) => rank.set(val, idx));
                return [...arr1].sort((a, b) => {
                    const rA = rank.has(a) ? rank.get(a) : 10000 + a;
                    const rB = rank.has(b) ? rank.get(b) : 10000 + b;
                    return rA - rB;
                });
            }
        }),

        // 35. Shuffle the Array
        createProblem({
            title: "Interleave Split Array",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the array nums consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn]. Return the array in the form [x1, y1, x2, y2, ..., xn, yn].",
            constraints: "1 <= n <= 500\nnums.length == 2n\n1 <= nums[i] <= 10^3",
            fnName: "shuffle",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [[2, 5, 1, 3, 4, 7], 3],
                [[1, 2, 3, 4, 4, 3, 2, 1], 4],
                [[1, 1, 2, 2], 2]
            ],
            solver: (nums, n) => {
                const res = [];
                for (let i = 0; i < n; i++) {
                    res.push(nums[i]);
                    res.push(nums[i + n]);
                }
                return res;
            }
        }),

        // 36. Decompress Run-Length Encoded List
        createProblem({
            title: "Decompress Run-Length Encoded List",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(totalLength)",
            expectedSpace: "O(totalLength)",
            description: "We are given a list nums of integers representing a list compressed with run-length encoding. Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0). Return the decompressed list.",
            constraints: "2 <= nums.length <= 100\nnums.length % 2 == 0\n1 <= nums[i] <= 100",
            fnName: "decompressRLElist",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 2, 3, 4]],
                [[1, 1, 2, 3]]
            ],
            solver: (nums) => {
                const res = [];
                for (let i = 0; i < nums.length; i += 2) {
                    const freq = nums[i];
                    const val = nums[i + 1];
                    for (let f = 0; f < freq; f++) res.push(val);
                }
                return res;
            }
        }),

        // 37. Sum of All Odd Length Subarrays
        createProblem({
            title: "Sum of All Odd Length Subarrays",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Prefix Sum"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.",
            constraints: "1 <= arr.length <= 1000\n1 <= arr[i] <= 1000",
            fnName: "sumOddLengthSubarrays",
            returnType: "int",
            params: [
                { name: "arr", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 4, 2, 5, 3]],
                [[1, 2]],
                [[10, 11, 12]]
            ],
            solver: (arr) => {
                let total = 0;
                const n = arr.length;
                for (let i = 0; i < n; i++) {
                    const totalSubarrays = (i + 1) * (n - i);
                    const oddSubarrays = Math.ceil(totalSubarrays / 2);
                    total += oddSubarrays * arr[i];
                }
                return total;
            }
        }),

        // 38. Minimum Value to Get Positive Step by Step Sum
        createProblem({
            title: "Minimum Initial Value for Positive Step Sum",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Prefix Sum"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of integers nums, you start with an initial positive value startValue. In each iteration, you calculate the step by step sum of startValue plus elements in nums. Return the minimum positive value of startValue such that the step by step sum is never less than 1.",
            constraints: "1 <= nums.length <= 100\n-100 <= nums[i] <= 100",
            fnName: "minStartValue",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[-3, 2, -3, 4, 2]],
                [[1, 2]],
                [[1, -2, -3]]
            ],
            solver: (nums) => {
                let minPrefix = 0;
                let cur = 0;
                for (const x of nums) {
                    cur += x;
                    minPrefix = Math.min(minPrefix, cur);
                }
                return 1 - minPrefix;
            }
        }),

        // 39. Count Good Triplets
        createProblem({
            title: "Count Triplet Difference Thresholds",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n^3)",
            expectedSpace: "O(1)",
            description: "Given an array of integers arr, and three integers a, b and c. Find the number of good triplets (i, j, k) with 0 <= i < j < k < arr.length such that |arr[i] - arr[j]| <= a, |arr[j] - arr[k]| <= b, and |arr[i] - arr[k]| <= c.",
            constraints: "3 <= arr.length <= 100\n0 <= arr[i] <= 1000\n0 <= a, b, c <= 1000",
            fnName: "countGoodTriplets",
            returnType: "int",
            params: [
                { name: "arr", type: "vector<int>&" },
                { name: "a", type: "int" },
                { name: "b", type: "int" },
                { name: "c", type: "int" }
            ],
            rawExamples: [
                [[3, 0, 1, 1, 9, 7], 7, 2, 3],
                [[1, 1, 2, 2, 3], 0, 0, 1]
            ],
            solver: (arr, a, b, c) => {
                let ans = 0;
                const n = arr.length;
                for (let i = 0; i < n; i++) {
                    for (let j = i + 1; j < n; j++) {
                        if (Math.abs(arr[i] - arr[j]) > a) continue;
                        for (let k = j + 1; k < n; k++) {
                            if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                                ans++;
                            }
                        }
                    }
                }
                return ans;
            }
        }),

        // 40. Richest Customer Wealth
        createProblem({
            title: "Maximum Matrix Row Sum Wealth",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Matrix"],
            dataStructures: ["Array"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(1)",
            description: "You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has (maximum row sum).",
            constraints: "m == accounts.length\nn == accounts[i].length\n1 <= m, n <= 50\n1 <= accounts[i][j] <= 100",
            fnName: "maximumWealth",
            returnType: "int",
            params: [
                { name: "accounts", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [[[1, 2, 3], [3, 2, 1]]],
                [[[1, 5], [7, 3], [3, 5]]],
                [[[2, 8, 7], [7, 1, 3], [1, 9, 5]]]
            ],
            solver: (accounts) => {
                let maxW = 0;
                for (const row of accounts) {
                    const s = row.reduce((a, b) => a + b, 0);
                    maxW = Math.max(maxW, s);
                }
                return maxW;
            }
        }),

        // 41. Find Target Indices After Sorting Array
        createProblem({
            title: "Target Indices After Array Sorting",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Sorting"],
            dataStructures: ["Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(1)",
            description: "You are given a 0-indexed integer array nums and a target element target. Return a list of the target indices of nums after sorting nums in non-decreasing order.",
            constraints: "1 <= nums.length <= 100\n1 <= nums[i], target <= 100",
            fnName: "targetIndices",
            returnType: "vector<int>",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "target", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 5, 2, 3], 2],
                [[1, 2, 5, 2, 3], 3],
                [[1, 2, 5, 2, 3], 5]
            ],
            solver: (nums, target) => {
                const sorted = [...nums].sort((a, b) => a - b);
                const res = [];
                for (let i = 0; i < sorted.length; i++) {
                    if (sorted[i] === target) res.push(i);
                }
                return res;
            }
        }),

        // 42. Missing Ranges
        createProblem({
            title: "Missing Number Ranges",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Intervals"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range. Return the count of missing single numbers or ranges.",
            constraints: "-10^9 <= lower <= upper <= 10^9\n0 <= nums.length <= 100\nlower <= nums[i] <= upper\nAll the values of nums are unique.",
            fnName: "countMissingIntervals",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "lower", type: "int" },
                { name: "upper", type: "int" }
            ],
            rawExamples: [
                [[0, 1, 3, 50, 75], 0, 99],
                [[-1], -1, -1]
            ],
            solver: (nums, lower, upper) => {
                let count = 0;
                let prev = lower - 1;
                for (let i = 0; i <= nums.length; i++) {
                    const curr = (i < nums.length) ? nums[i] : upper + 1;
                    if (curr - prev >= 2) count++;
                    prev = curr;
                }
                return count;
            }
        }),

        // 43. Maximum Count of Positive Integer and Negative Integer
        createProblem({
            title: "Maximum Count of Positive and Negative Integers",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.",
            constraints: "1 <= nums.length <= 2000\n-2000 <= nums[i] <= 2000\nnums is sorted in a non-decreasing order.",
            fnName: "maximumCount",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[-2, -1, -1, 1, 2, 3]],
                [[-3, -2, -1, 0, 0, 1, 2]],
                [[5, 20, 66, 1314]]
            ],
            solver: (nums) => {
                const pos = nums.filter(x => x > 0).length;
                const neg = nums.filter(x => x < 0).length;
                return Math.max(pos, neg);
            }
        }),

        // 44. Non-decreasing Array with One Modification
        createProblem({
            title: "Non-decreasing Array with One Modification",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Greedy"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.",
            constraints: "n == nums.length\n1 <= n <= 10^4\n-10^5 <= nums[i] <= 10^5",
            fnName: "checkPossibility",
            returnType: "bool",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[4, 2, 3]],
                [[4, 2, 1]]
            ],
            solver: (nums) => {
                let modified = 0;
                const a = [...nums];
                for (let i = 1; i < a.length; i++) {
                    if (a[i] < a[i - 1]) {
                        modified++;
                        if (modified > 1) return false;
                        if (i >= 2 && a[i] < a[i - 2]) {
                            a[i] = a[i - 1];
                        } else {
                            a[i - 1] = a[i];
                        }
                    }
                }
                return true;
            }
        }),

        // 45. Check if Array Is Sorted and Rotated
        createProblem({
            title: "Check if Array Is Sorted and Rotated",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.",
            constraints: "1 <= nums.length <= 100\n1 <= nums[i] <= 100",
            fnName: "check",
            returnType: "bool",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[3, 4, 5, 1, 2]],
                [[2, 1, 3, 4]],
                [[1, 2, 3]]
            ],
            solver: (nums) => {
                let count = 0;
                const n = nums.length;
                for (let i = 0; i < n; i++) {
                    if (nums[i] > nums[(i + 1) % n]) count++;
                }
                return count <= 1;
            }
        }),

        // 46. Largest Number At Least Twice of Others
        createProblem({
            title: "Dominant Element in Array",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Linear Traversal"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an integer array nums where the largest integer is unique. Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.",
            constraints: "2 <= nums.length <= 50\n0 <= nums[i] <= 100\nThe largest element in nums is unique.",
            fnName: "dominantIndex",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[3, 6, 1, 0]],
                [[1, 2, 3, 4]]
            ],
            solver: (nums) => {
                let maxIdx = 0;
                for (let i = 1; i < nums.length; i++) {
                    if (nums[i] > nums[maxIdx]) maxIdx = i;
                }
                for (let i = 0; i < nums.length; i++) {
                    if (i !== maxIdx && nums[maxIdx] < 2 * nums[i]) return -1;
                }
                return maxIdx;
            }
        }),

        // 47. Subarray Products Less Than K
        createProblem({
            title: "Subarray Product Less Than K",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Sliding Window"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.",
            constraints: "1 <= nums.length <= 3 * 10^4\n1 <= nums[i] <= 1000\n0 <= k <= 10^6",
            fnName: "numSubarrayProductLessThanK",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[10, 5, 2, 6], 100],
                [[1, 2, 3], 0]
            ],
            solver: (nums, k) => {
                if (k <= 1) return 0;
                let prod = 1, left = 0, ans = 0;
                for (let right = 0; right < nums.length; right++) {
                    prod *= nums[right];
                    while (prod >= k) {
                        prod /= nums[left];
                        left++;
                    }
                    ans += right - left + 1;
                }
                return ans;
            }
        }),

        // 48. Maximum Sum Circular Subarray
        createProblem({
            title: "Maximum Sum Circular Subarray",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Dynamic Programming", "Prefix Sum"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.",
            constraints: "n == nums.length\n1 <= n <= 3 * 10^4\n-3 * 10^4 <= nums[i] <= 3 * 10^4",
            fnName: "maxSubarraySumCircular",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, -2, 3, -2]],
                [[5, -3, 5]],
                [[-3, -2, -3]]
            ],
            solver: (nums) => {
                let total = 0, curMax = 0, curMin = 0;
                let maxSum = nums[0], minSum = nums[0];
                for (const x of nums) {
                    curMax = Math.max(x, curMax + x);
                    maxSum = Math.max(maxSum, curMax);
                    curMin = Math.min(x, curMin + x);
                    minSum = Math.min(minSum, curMin);
                    total += x;
                }
                return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
            }
        }),

        // 49. Continuous Subarray Sum Divisible by K
        createProblem({
            title: "Subarray Divisible by K Check",
            topic: "Arrays",
            difficulty: "Medium",
            patterns: ["Prefix Sum", "Hashing"],
            dataStructures: ["Hash Map", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(k)",
            description: "Given an integer array nums and an integer k, return true if nums has a good subarray of length at least two whose elements sum up to a multiple of k.",
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
                    sum += nums[i];
                    const rem = sum % k;
                    if (map.has(rem)) {
                        if (i - map.get(rem) >= 2) return true;
                    } else {
                        map.set(rem, i);
                    }
                }
                return false;
            }
        }),

        // 50. Range Sum Query - Immutable
        createProblem({
            title: "Range Sum Query Immutable",
            topic: "Arrays",
            difficulty: "Easy",
            patterns: ["Prefix Sum"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(n)",
            description: "Given an integer array nums, handle multiple queries of the sum of the elements of nums between indices left and right inclusive. Return the sum.",
            constraints: "1 <= nums.length <= 10^4\n-10^5 <= nums[i] <= 10^5\n0 <= left <= right < nums.length",
            fnName: "sumRange",
            returnType: "int",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "left", type: "int" },
                { name: "right", type: "int" }
            ],
            rawExamples: [
                [[-2, 0, 3, -5, 2, -1], 0, 2],
                [[-2, 0, 3, -5, 2, -1], 2, 5],
                [[-2, 0, 3, -5, 2, -1], 0, 5]
            ],
            solver: (nums, left, right) => {
                let s = 0;
                for (let i = left; i <= right; i++) s += nums[i];
                return s;
            }
        })
    ];
}
