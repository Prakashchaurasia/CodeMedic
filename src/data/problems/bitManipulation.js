/**
 * Bit Manipulation Problems Dataset (15 problems)
 * CodeMedic Verified DSA Collection
 */

export const BIT_MANIPULATION_PROBLEMS = [
    {
        "id": "29a5851d-2412-4290-a53b-eebad21c42f2",
        "title": "Single Number XOR",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one using linear runtime complexity and constant extra space.",
        "constraints": "1 <= nums.length <= 3 * 10^4\n-3 * 10^4 <= nums[i] <= 3 * 10^4\nEach element in the array appears twice except for one element which appears only once.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,2,1]",
                "output": "1",
                "explanation": "For the given input nums = [2,2,1], the expected output is 1."
            },
            {
                "input": "nums = [4,1,2,1,2]",
                "output": "4",
                "explanation": "For the given input nums = [4,1,2,1,2], the expected output is 4."
            },
            {
                "input": "nums = [1]",
                "output": "1",
                "explanation": "For the given input nums = [1], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Single Number XOR.",
        "execution_config": {
            "functionName": "singleNumber",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "337e128d-2713-4364-af2d-1b028e20a23a",
        "title": "Number of 1 Bits (Hamming Weight)",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Write a function that takes the binary representation of a positive integer and returns the number of set bits ('1's) it has (also known as the Hamming weight).",
        "constraints": "1 <= n <= 2^31 - 1",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 11",
                "output": "3",
                "explanation": "For the given input n = 11, the expected output is 3."
            },
            {
                "input": "n = 128",
                "output": "1",
                "explanation": "For the given input n = 128, the expected output is 1."
            },
            {
                "input": "n = 2147483645",
                "output": "30",
                "explanation": "For the given input n = 2147483645, the expected output is 30."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of 1 Bits (Hamming Weight).",
        "execution_config": {
            "functionName": "hammingWeight",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "2f18b1fe-4361-47c3-ad97-7bf4d961cbba",
        "title": "Power of Two Check",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2^x.",
        "constraints": "-2^31 <= n <= 2^31 - 1",
        "input_format": "int n",
        "output_format": "bool",
        "examples": [
            {
                "input": "n = 1",
                "output": "true",
                "explanation": "For the given input n = 1, the expected output is true."
            },
            {
                "input": "n = 16",
                "output": "true",
                "explanation": "For the given input n = 16, the expected output is true."
            },
            {
                "input": "n = 3",
                "output": "false",
                "explanation": "For the given input n = 3, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Power of Two Check.",
        "execution_config": {
            "functionName": "isPowerOfTwo",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "ebafb579-03ab-4af5-a005-1ce7da705194",
        "title": "Missing Number XOR",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
        "constraints": "n == nums.length\n1 <= n <= 10^4\n0 <= nums[i] <= n\nAll the numbers of nums are unique.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,0,1]",
                "output": "2",
                "explanation": "For the given input nums = [3,0,1], the expected output is 2."
            },
            {
                "input": "nums = [0,1]",
                "output": "2",
                "explanation": "For the given input nums = [0,1], the expected output is 2."
            },
            {
                "input": "nums = [9,6,4,2,3,5,7,0,1]",
                "output": "8",
                "explanation": "For the given input nums = [9,6,4,2,3,5,7,0,1], the expected output is 8."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Missing Number XOR.",
        "execution_config": {
            "functionName": "missingNumber",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "b192f825-3fd5-44f5-a477-5aee08dc3d49",
        "title": "Reverse Bits of 32-bit Integer",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Reverse bits of a given 32-bit unsigned integer.",
        "constraints": "0 <= n <= 2^31 - 1",
        "input_format": "long long n",
        "output_format": "long long",
        "examples": [
            {
                "input": "n = 43261596",
                "output": "964176192",
                "explanation": "For the given input n = 43261596, the expected output is 964176192."
            },
            {
                "input": "n = 1",
                "output": "2147483648",
                "explanation": "For the given input n = 1, the expected output is 2147483648."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reverse Bits of 32-bit Integer.",
        "execution_config": {
            "functionName": "reverseBits",
            "returnType": "long long",
            "parameters": [
                {
                    "name": "n",
                    "type": "long long"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "692816e3-7f97-4041-a3de-d8748f596fd0",
        "title": "Single Number II Elements Thrice",
        "topic": "Bit Manipulation",
        "difficulty": "Medium",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.",
        "constraints": "1 <= nums.length <= 3 * 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,2,3,2]",
                "output": "3",
                "explanation": "For the given input nums = [2,2,3,2], the expected output is 3."
            },
            {
                "input": "nums = [0,1,0,1,0,1,99]",
                "output": "99",
                "explanation": "For the given input nums = [0,1,0,1,0,1,99], the expected output is 99."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Single Number II Elements Thrice.",
        "execution_config": {
            "functionName": "singleNumberII",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "691a63c0-3453-4157-a966-99c4c2ce3bf6",
        "title": "Single Number III Two Unique Numbers",
        "topic": "Bit Manipulation",
        "difficulty": "Medium",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. Return the two numbers sorted in ascending order.",
        "constraints": "2 <= nums.length <= 3 * 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,2,1,3,2,5]",
                "output": "[3,5]",
                "explanation": "For the given input nums = [1,2,1,3,2,5], the expected output is [3,5]."
            },
            {
                "input": "nums = [-1,0]",
                "output": "[-1,0]",
                "explanation": "For the given input nums = [-1,0], the expected output is [-1,0]."
            },
            {
                "input": "nums = [0,1]",
                "output": "[0,1]",
                "explanation": "For the given input nums = [0,1], the expected output is [0,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Single Number III Two Unique Numbers.",
        "execution_config": {
            "functionName": "singleNumberIII",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "1cf23980-3de3-4ac4-aa0e-7023ba7694d0",
        "title": "Bitwise AND of Numbers Range",
        "topic": "Bit Manipulation",
        "difficulty": "Medium",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        "constraints": "0 <= left <= right <= 2^31 - 1",
        "input_format": "int left, int right",
        "output_format": "int",
        "examples": [
            {
                "input": "left = 5, right = 7",
                "output": "4",
                "explanation": "For the given input left = 5, right = 7, the expected output is 4."
            },
            {
                "input": "left = 0, right = 0",
                "output": "0",
                "explanation": "For the given input left = 0, right = 0, the expected output is 0."
            },
            {
                "input": "left = 1, right = 2147483647",
                "output": "0",
                "explanation": "For the given input left = 1, right = 2147483647, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Bitwise AND of Numbers Range.",
        "execution_config": {
            "functionName": "rangeBitwiseAnd",
            "returnType": "int",
            "parameters": [
                {
                    "name": "left",
                    "type": "int"
                },
                {
                    "name": "right",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "c44846b0-203b-4761-a0f7-475a730096af",
        "title": "Power of Four Check",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given an integer n, return true if it is a power of four. Otherwise, return false.",
        "constraints": "-2^31 <= n <= 2^31 - 1",
        "input_format": "int n",
        "output_format": "bool",
        "examples": [
            {
                "input": "n = 16",
                "output": "true",
                "explanation": "For the given input n = 16, the expected output is true."
            },
            {
                "input": "n = 5",
                "output": "false",
                "explanation": "For the given input n = 5, the expected output is false."
            },
            {
                "input": "n = 1",
                "output": "true",
                "explanation": "For the given input n = 1, the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Power of Four Check.",
        "execution_config": {
            "functionName": "isPowerOfFour",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "da719156-7d6a-4619-af67-65eff3593c34",
        "title": "XOR Operation in an Array",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an integer n and an integer start. Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length. Return the bitwise XOR of all elements of nums.",
        "constraints": "1 <= n <= 1000\n0 <= start <= 1000",
        "input_format": "int n, int start",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 5, start = 0",
                "output": "8",
                "explanation": "For the given input n = 5, start = 0, the expected output is 8."
            },
            {
                "input": "n = 4, start = 3",
                "output": "8",
                "explanation": "For the given input n = 4, start = 3, the expected output is 8."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for XOR Operation in an Array.",
        "execution_config": {
            "functionName": "xorOperation",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "start",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "8edda46f-7dc5-4a7c-aa96-cd01432b88ea",
        "title": "Decode XORed Array",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "There is a hidden integer array arr of n non-negative integers. It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. Given encoded and first element arr[0], return the original array arr.",
        "constraints": "2 <= n <= 10^4\nencoded.length == n - 1\n0 <= encoded[i] <= 10^5\n0 <= first <= 10^5",
        "input_format": "vector<int>& encoded, int first",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "encoded = [1,2,3], first = 1",
                "output": "[1,0,2,1]",
                "explanation": "For the given input encoded = [1,2,3], first = 1, the expected output is [1,0,2,1]."
            },
            {
                "input": "encoded = [6,2,7,3], first = 4",
                "output": "[4,2,0,7,4]",
                "explanation": "For the given input encoded = [6,2,7,3], first = 4, the expected output is [4,2,0,7,4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Decode XORed Array.",
        "execution_config": {
            "functionName": "decode",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "encoded",
                    "type": "vector<int>&"
                },
                {
                    "name": "first",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "4c3bb71a-a59f-4285-a50d-20a2a5e785c0",
        "title": "Minimum Flips to Make a OR b Equal to c",
        "topic": "Bit Manipulation",
        "difficulty": "Medium",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given 3 positives numbers a, b and c. Return the minimum flips needed in some bits of a and to make (a OR b == c) (bitwise OR operation).",
        "constraints": "1 <= a <= 10^9\n1 <= b <= 10^9\n1 <= c <= 10^9",
        "input_format": "int a, int b, int c",
        "output_format": "int",
        "examples": [
            {
                "input": "a = 2, b = 6, c = 5",
                "output": "3",
                "explanation": "For the given input a = 2, b = 6, c = 5, the expected output is 3."
            },
            {
                "input": "a = 4, b = 2, c = 7",
                "output": "1",
                "explanation": "For the given input a = 4, b = 2, c = 7, the expected output is 1."
            },
            {
                "input": "a = 1, b = 2, c = 3",
                "output": "0",
                "explanation": "For the given input a = 1, b = 2, c = 3, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Flips to Make a OR b Equal to c.",
        "execution_config": {
            "functionName": "minFlips",
            "returnType": "int",
            "parameters": [
                {
                    "name": "a",
                    "type": "int"
                },
                {
                    "name": "b",
                    "type": "int"
                },
                {
                    "name": "c",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "2494994e-57b2-4821-a70e-a4acd3e74c7e",
        "title": "Sum of Two Integers Without Plus Minus",
        "topic": "Bit Manipulation",
        "difficulty": "Medium",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
        "constraints": "-1000 <= a, b <= 1000",
        "input_format": "int a, int b",
        "output_format": "int",
        "examples": [
            {
                "input": "a = 1, b = 2",
                "output": "3",
                "explanation": "For the given input a = 1, b = 2, the expected output is 3."
            },
            {
                "input": "a = 2, b = 3",
                "output": "5",
                "explanation": "For the given input a = 2, b = 3, the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sum of Two Integers Without Plus Minus.",
        "execution_config": {
            "functionName": "getSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "a",
                    "type": "int"
                },
                {
                    "name": "b",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "b3b60b69-6cf1-4802-a1e3-41ec75ab3353",
        "title": "Binary Number with Alternating Bits",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given a positive integer n, check whether it has alternating bits: namely, if two adjacent bits will always have different values.",
        "constraints": "1 <= n <= 2^31 - 1",
        "input_format": "int n",
        "output_format": "bool",
        "examples": [
            {
                "input": "n = 5",
                "output": "true",
                "explanation": "For the given input n = 5, the expected output is true."
            },
            {
                "input": "n = 7",
                "output": "false",
                "explanation": "For the given input n = 7, the expected output is false."
            },
            {
                "input": "n = 11",
                "output": "false",
                "explanation": "For the given input n = 11, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Binary Number with Alternating Bits.",
        "execution_config": {
            "functionName": "hasAlternatingBits",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "54dac6a3-e518-4155-a230-5805f31d3a5e",
        "title": "Count of All Non-Empty Subsets",
        "topic": "Bit Manipulation",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation",
            "Math"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given an array of unique integers nums, return the number of non-empty subsets (power set without empty set) generated by binary bitmasking: 2^n - 1.",
        "constraints": "1 <= nums.length <= 20",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,3]",
                "output": "7",
                "explanation": "For the given input nums = [1,2,3], the expected output is 7."
            },
            {
                "input": "nums = [0]",
                "output": "1",
                "explanation": "For the given input nums = [0], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count of All Non-Empty Subsets.",
        "execution_config": {
            "functionName": "countNonEmptySubsets",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    }
];

export default BIT_MANIPULATION_PROBLEMS;
