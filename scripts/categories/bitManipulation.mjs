import { createProblem } from "../problem_blueprints.mjs";

export function getBitManipulationProblems() {
    return [
        // 1. Single Number
        createProblem({
            title: "Single Number XOR",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one using linear runtime complexity and constant extra space.",
            constraints: "1 <= nums.length <= 3 * 10^4\n-3 * 10^4 <= nums[i] <= 3 * 10^4\nEach element in the array appears twice except for one element which appears only once.",
            fnName: "singleNumber",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 2, 1]],
                [[4, 1, 2, 1, 2]],
                [[1]]
            ],
            solver: (nums) => nums.reduce((acc, x) => acc ^ x, 0)
        }),

        // 2. Number of 1 Bits
        createProblem({
            title: "Number of 1 Bits (Hamming Weight)",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Write a function that takes the binary representation of a positive integer and returns the number of set bits ('1's) it has (also known as the Hamming weight).",
            constraints: "1 <= n <= 2^31 - 1",
            fnName: "hammingWeight",
            returnType: "int",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [11],
                [128],
                [2147483645]
            ],
            solver: (n) => {
                let count = 0;
                let v = n;
                while (v > 0) {
                    v = v & (v - 1);
                    count++;
                }
                return count;
            }
        }),

        // 3. Power of Two
        createProblem({
            title: "Power of Two Check",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2^x.",
            constraints: "-2^31 <= n <= 2^31 - 1",
            fnName: "isPowerOfTwo",
            returnType: "bool",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [1],
                [16],
                [3]
            ],
            solver: (n) => n > 0 && (n & (n - 1)) === 0
        }),

        // 4. Missing Number
        createProblem({
            title: "Missing Number XOR",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
            constraints: "n == nums.length\n1 <= n <= 10^4\n0 <= nums[i] <= n\nAll the numbers of nums are unique.",
            fnName: "missingNumber",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[3, 0, 1]],
                [[0, 1]],
                [[9, 6, 4, 2, 3, 5, 7, 0, 1]]
            ],
            solver: (nums) => {
                let xor = nums.length;
                for (let i = 0; i < nums.length; i++) {
                    xor ^= i ^ nums[i];
                }
                return xor;
            }
        }),

        // 5. Reverse Bits
        createProblem({
            title: "Reverse Bits of 32-bit Integer",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Reverse bits of a given 32-bit unsigned integer.",
            constraints: "0 <= n <= 2^31 - 1",
            fnName: "reverseBits",
            returnType: "long long",
            params: [{ name: "n", type: "long long" }],
            rawExamples: [
                [43261596],
                [1]
            ],
            solver: (n) => {
                let res = 0;
                let cur = Number(n);
                for (let i = 0; i < 32; i++) {
                    res = (res * 2) + (cur & 1);
                    cur = Math.floor(cur / 2);
                }
                return res;
            }
        }),

        // 6. Single Number II
        createProblem({
            title: "Single Number II Elements Thrice",
            topic: "Bit Manipulation",
            difficulty: "Medium",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.",
            constraints: "1 <= nums.length <= 3 * 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
            fnName: "singleNumberII",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[2, 2, 3, 2]],
                [[0, 1, 0, 1, 0, 1, 99]]
            ],
            solver: (nums) => {
                let ones = 0, twos = 0;
                for (const x of nums) {
                    ones = (ones ^ x) & ~twos;
                    twos = (twos ^ x) & ~ones;
                }
                return ones;
            }
        }),

        // 7. Single Number III
        createProblem({
            title: "Single Number III Two Unique Numbers",
            topic: "Bit Manipulation",
            difficulty: "Medium",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. Return the two numbers sorted in ascending order.",
            constraints: "2 <= nums.length <= 3 * 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
            fnName: "singleNumberIII",
            returnType: "vector<int>",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 1, 3, 2, 5]],
                [[-1, 0]],
                [[0, 1]]
            ],
            solver: (nums) => {
                let diff = 0;
                for (const x of nums) diff ^= x;
                const lowestBit = diff & -diff;
                let a = 0, b = 0;
                for (const x of nums) {
                    if ((x & lowestBit) !== 0) a ^= x;
                    else b ^= x;
                }
                return [Math.min(a, b), Math.max(a, b)];
            }
        }),

        // 8. Bitwise AND of Numbers Range
        createProblem({
            title: "Bitwise AND of Numbers Range",
            topic: "Bit Manipulation",
            difficulty: "Medium",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(log n)",
            expectedSpace: "O(1)",
            description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
            constraints: "0 <= left <= right <= 2^31 - 1",
            fnName: "rangeBitwiseAnd",
            returnType: "int",
            params: [
                { name: "left", type: "int" },
                { name: "right", type: "int" }
            ],
            rawExamples: [
                [5, 7],
                [0, 0],
                [1, 2147483647]
            ],
            solver: (left, right) => {
                let shift = 0;
                while (left < right) {
                    left >>= 1;
                    right >>= 1;
                    shift++;
                }
                return left << shift;
            }
        }),

        // 9. Power of Four
        createProblem({
            title: "Power of Four Check",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given an integer n, return true if it is a power of four. Otherwise, return false.",
            constraints: "-2^31 <= n <= 2^31 - 1",
            fnName: "isPowerOfFour",
            returnType: "bool",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [16],
                [5],
                [1]
            ],
            solver: (n) => n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0
        }),

        // 10. XOR Operation in an Array
        createProblem({
            title: "XOR Operation in an Array",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given an integer n and an integer start. Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length. Return the bitwise XOR of all elements of nums.",
            constraints: "1 <= n <= 1000\n0 <= start <= 1000",
            fnName: "xorOperation",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "start", type: "int" }
            ],
            rawExamples: [
                [5, 0],
                [4, 3]
            ],
            solver: (n, start) => {
                let ans = 0;
                for (let i = 0; i < n; i++) {
                    ans ^= (start + 2 * i);
                }
                return ans;
            }
        }),

        // 11. Decode XORed Array
        createProblem({
            title: "Decode XORed Array",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "There is a hidden integer array arr of n non-negative integers. It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. Given encoded and first element arr[0], return the original array arr.",
            constraints: "2 <= n <= 10^4\nencoded.length == n - 1\n0 <= encoded[i] <= 10^5\n0 <= first <= 10^5",
            fnName: "decode",
            returnType: "vector<int>",
            params: [
                { name: "encoded", type: "vector<int>&" },
                { name: "first", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3], 1],
                [[6, 2, 7, 3], 4]
            ],
            solver: (encoded, first) => {
                const res = [first];
                for (let i = 0; i < encoded.length; i++) {
                    res.push(res[i] ^ encoded[i]);
                }
                return res;
            }
        }),

        // 12. Minimum Flips to Make a OR b Equal to c
        createProblem({
            title: "Minimum Flips to Make a OR b Equal to c",
            topic: "Bit Manipulation",
            difficulty: "Medium",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given 3 positives numbers a, b and c. Return the minimum flips needed in some bits of a and to make (a OR b == c) (bitwise OR operation).",
            constraints: "1 <= a <= 10^9\n1 <= b <= 10^9\n1 <= c <= 10^9",
            fnName: "minFlips",
            returnType: "int",
            params: [
                { name: "a", type: "int" },
                { name: "b", type: "int" },
                { name: "c", type: "int" }
            ],
            rawExamples: [
                [2, 6, 5],
                [4, 2, 7],
                [1, 2, 3]
            ],
            solver: (a, b, c) => {
                let flips = 0;
                for (let i = 0; i < 31; i++) {
                    const ba = (a >> i) & 1;
                    const bb = (b >> i) & 1;
                    const bc = (c >> i) & 1;
                    if (bc === 1) {
                        if (ba === 0 && bb === 0) flips += 1;
                    } else {
                        flips += ba + bb;
                    }
                }
                return flips;
            }
        }),

        // 13. Sum of Two Integers Without Plus Minus
        createProblem({
            title: "Sum of Two Integers Without Plus Minus",
            topic: "Bit Manipulation",
            difficulty: "Medium",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
            constraints: "-1000 <= a, b <= 1000",
            fnName: "getSum",
            returnType: "int",
            params: [
                { name: "a", type: "int" },
                { name: "b", type: "int" }
            ],
            rawExamples: [
                [1, 2],
                [2, 3]
            ],
            solver: (a, b) => a + b
        }),

        // 14. Binary Number with Alternating Bits
        createProblem({
            title: "Binary Number with Alternating Bits",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given a positive integer n, check whether it has alternating bits: namely, if two adjacent bits will always have different values.",
            constraints: "1 <= n <= 2^31 - 1",
            fnName: "hasAlternatingBits",
            returnType: "bool",
            params: [{ name: "n", type: "int" }],
            rawExamples: [
                [5],
                [7],
                [11]
            ],
            solver: (n) => {
                const s = n.toString(2);
                for (let i = 1; i < s.length; i++) {
                    if (s[i] === s[i - 1]) return false;
                }
                return true;
            }
        }),

        // 15. Count Subsets With Bitmasking
        createProblem({
            title: "Count of All Non-Empty Subsets",
            topic: "Bit Manipulation",
            difficulty: "Easy",
            patterns: ["Bit Manipulation", "Math"],
            dataStructures: ["Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given an array of unique integers nums, return the number of non-empty subsets (power set without empty set) generated by binary bitmasking: 2^n - 1.",
            constraints: "1 <= nums.length <= 20",
            fnName: "countNonEmptySubsets",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3]],
                [[0]]
            ],
            solver: (nums) => Math.pow(2, nums.length) - 1
        })
    ];
}
