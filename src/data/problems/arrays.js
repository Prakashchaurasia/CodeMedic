/**
 * Arrays Problems Dataset (50 problems)
 * CodeMedic Verified DSA Collection
 */

export const ARRAY_PROBLEMS = [
    {
        "id": "70cc1dcc-d26d-4f9f-a8bb-9ae53a27eb2a",
        "title": "Rotate Array by K Positions",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of integers nums and an integer k, rotate the array to the right by k positions in-place.",
        "constraints": "1 <= nums.length <= 10^5\n0 <= k <= 10^5\n-10^4 <= nums[i] <= 10^4",
        "input_format": "vector<int>& nums, int k",
        "output_format": "void",
        "examples": [
            {
                "input": "nums = [1,2,3,4,5,6,7], k = 3",
                "output": "[5,6,7,1,2,3,4]",
                "explanation": "For the given input nums = [1,2,3,4,5,6,7], k = 3, the expected output is [5,6,7,1,2,3,4]."
            },
            {
                "input": "nums = [-1,-100,3,99], k = 2",
                "output": "[3,99,-1,-100]",
                "explanation": "For the given input nums = [-1,-100,3,99], k = 2, the expected output is [3,99,-1,-100]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Rotate Array by K Positions.",
        "execution_config": {
            "functionName": "rotate",
            "returnType": "void",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "k",
                    "type": "int"
                }
            ],
            "outputMode": "MUTATED_PARAMETER",
            "mutates": [
                "nums"
            ],
            "comparisonType": "mutated_parameter"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "f3385cd5-beaf-423a-a0cd-8810e63af69b",
        "title": "Remove Duplicates from Sorted Array",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums sorted in non-decreasing order, return the count of unique elements present in the array.",
        "constraints": "1 <= nums.length <= 3 * 10^4\n-100 <= nums[i] <= 100\nnums is sorted in non-decreasing order.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,1,2]",
                "output": "2",
                "explanation": "For the given input nums = [1,1,2], the expected output is 2."
            },
            {
                "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
                "output": "5",
                "explanation": "For the given input nums = [0,0,1,1,1,2,2,3,3,4], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove Duplicates from Sorted Array.",
        "execution_config": {
            "functionName": "removeDuplicates",
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
        "id": "d55c7904-2262-4d28-a919-d9e275f32313",
        "title": "Equilibrium Index of an Array",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Prefix Sum"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Find the leftmost equilibrium index of an array. An equilibrium index is an index such that the sum of elements at lower indices equals the sum of elements at higher indices. Return -1 if no such index exists.",
        "constraints": "1 <= nums.length <= 10^5\n-1000 <= nums[i] <= 1000",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,7,3,6,5,6]",
                "output": "3",
                "explanation": "For the given input nums = [1,7,3,6,5,6], the expected output is 3."
            },
            {
                "input": "nums = [1,2,3]",
                "output": "-1",
                "explanation": "For the given input nums = [1,2,3], the expected output is -1."
            },
            {
                "input": "nums = [2,1,-1]",
                "output": "0",
                "explanation": "For the given input nums = [2,1,-1], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Equilibrium Index of an Array.",
        "execution_config": {
            "functionName": "pivotIndex",
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
        "id": "39c57239-aade-4098-a02e-32296ce28553",
        "title": "Running Sum of 1D Array",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Prefix Sum"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums, return the running sum of nums where runningSum[i] = sum(nums[0]...nums[i]).",
        "constraints": "1 <= nums.length <= 1000\n-10^6 <= nums[i] <= 10^6",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,2,3,4]",
                "output": "[1,3,6,10]",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is [1,3,6,10]."
            },
            {
                "input": "nums = [1,1,1,1,1]",
                "output": "[1,2,3,4,5]",
                "explanation": "For the given input nums = [1,1,1,1,1], the expected output is [1,2,3,4,5]."
            },
            {
                "input": "nums = [3,1,2,10,1]",
                "output": "[3,4,6,16,17]",
                "explanation": "For the given input nums = [3,1,2,10,1], the expected output is [3,4,6,16,17]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Running Sum of 1D Array.",
        "execution_config": {
            "functionName": "runningSum",
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
        "id": "f9ac61fc-cbe4-4d56-aec6-8424c4b537a6",
        "title": "Majority Element",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums of size n, return the majority element that appears more than ⌊n / 2⌋ times.",
        "constraints": "n == nums.length\n1 <= n <= 5 * 10^4\n-10^9 <= nums[i] <= 10^9\nA majority element is guaranteed to exist.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,2,3]",
                "output": "3",
                "explanation": "For the given input nums = [3,2,3], the expected output is 3."
            },
            {
                "input": "nums = [2,2,1,1,1,2,2]",
                "output": "2",
                "explanation": "For the given input nums = [2,2,1,1,1,2,2], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Majority Element.",
        "execution_config": {
            "functionName": "majorityElement",
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
        "id": "2d05f1f0-d79c-4cbc-ab00-dd7f8551006c",
        "title": "Shuffle the Array",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the array nums consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn], return the array in the form [x1, y1, x2, y2, ..., xn, yn].",
        "constraints": "1 <= n <= 500\nnums.length == 2n\n1 <= nums[i] <= 10^3",
        "input_format": "vector<int>& nums, int n",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [2,5,1,3,4,7], n = 3",
                "output": "[2,3,5,4,1,7]",
                "explanation": "For the given input nums = [2,5,1,3,4,7], n = 3, the expected output is [2,3,5,4,1,7]."
            },
            {
                "input": "nums = [1,2,3,4,4,3,2,1], n = 4",
                "output": "[1,4,2,3,3,2,4,1]",
                "explanation": "For the given input nums = [1,2,3,4,4,3,2,1], n = 4, the expected output is [1,4,2,3,3,2,4,1]."
            },
            {
                "input": "nums = [1,1,2,2], n = 2",
                "output": "[1,2,1,2]",
                "explanation": "For the given input nums = [1,1,2,2], n = 2, the expected output is [1,2,1,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Shuffle the Array.",
        "execution_config": {
            "functionName": "shuffle",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
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
        "id": "e96cc579-aecf-4ff2-ad74-e07cfb2c2417",
        "title": "Product of Array Except Self",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Prefix Sum"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Do not use the division operator.",
        "constraints": "2 <= nums.length <= 10^5\n-30 <= nums[i] <= 30",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,2,3,4]",
                "output": "[24,12,8,6]",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is [24,12,8,6]."
            },
            {
                "input": "nums = [-1,1,0,-3,3]",
                "output": "[0,0,9,0,0]",
                "explanation": "For the given input nums = [-1,1,0,-3,3], the expected output is [0,0,9,0,0]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Product of Array Except Self.",
        "execution_config": {
            "functionName": "productExceptSelf",
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
        "id": "da278f64-b4c0-4507-af93-60479b0a49cb",
        "title": "Find All Disappeared Numbers",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.",
        "constraints": "n == nums.length\n1 <= n <= 10^5\n1 <= nums[i] <= n",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [4,3,2,7,8,2,3,1]",
                "output": "[5,6]",
                "explanation": "For the given input nums = [4,3,2,7,8,2,3,1], the expected output is [5,6]."
            },
            {
                "input": "nums = [1,1]",
                "output": "[2]",
                "explanation": "For the given input nums = [1,1], the expected output is [2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find All Disappeared Numbers.",
        "execution_config": {
            "functionName": "findDisappearedNumbers",
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
        "id": "9d49144a-3af1-4ea3-af79-94d295adf5a6",
        "title": "Merge Two Sorted Arrays",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(m + n)",
        "expected_space": "O(m + n)",
        "description": "Given two integer arrays nums1 and nums2, both sorted in non-decreasing order, return a single merged array containing all elements in non-decreasing order.",
        "constraints": "0 <= nums1.length, nums2.length <= 10^4\n-10^9 <= nums1[i], nums2[i] <= 10^9",
        "input_format": "vector<int>& nums1, vector<int>& nums2",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums1 = [1,2,3], nums2 = [2,5,6]",
                "output": "[1,2,2,3,5,6]",
                "explanation": "For the given input nums1 = [1,2,3], nums2 = [2,5,6], the expected output is [1,2,2,3,5,6]."
            },
            {
                "input": "nums1 = [1], nums2 = []",
                "output": "[1]",
                "explanation": "For the given input nums1 = [1], nums2 = [], the expected output is [1]."
            },
            {
                "input": "nums1 = [], nums2 = [1]",
                "output": "[1]",
                "explanation": "For the given input nums1 = [], nums2 = [1], the expected output is [1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Merge Two Sorted Arrays.",
        "execution_config": {
            "functionName": "mergeSorted",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "nums1",
                    "type": "vector<int>&"
                },
                {
                    "name": "nums2",
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
        "id": "64817425-60d7-40cd-ae73-4bf89cb7e2ef",
        "title": "Build Array from Permutation",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.",
        "constraints": "1 <= nums.length <= 1000\n0 <= nums[i] < nums.length\nThe elements in nums are distinct.",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [0,2,1,5,3,4]",
                "output": "[0,1,2,4,5,3]",
                "explanation": "For the given input nums = [0,2,1,5,3,4], the expected output is [0,1,2,4,5,3]."
            },
            {
                "input": "nums = [5,0,1,2,3,4]",
                "output": "[4,5,0,1,2,3]",
                "explanation": "For the given input nums = [5,0,1,2,3,4], the expected output is [4,5,0,1,2,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Build Array from Permutation.",
        "execution_config": {
            "functionName": "buildArray",
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
        "id": "9f2b345b-16a1-4d5b-ad4d-47770ea590e3",
        "title": "Monotonic Array Check",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "An array is monotonic if it is either monotone increasing or monotone decreasing. Return true if and only if the given array nums is monotonic.",
        "constraints": "1 <= nums.length <= 10^5\n-10^5 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [1,2,2,3]",
                "output": "true",
                "explanation": "For the given input nums = [1,2,2,3], the expected output is true."
            },
            {
                "input": "nums = [6,5,4,4]",
                "output": "true",
                "explanation": "For the given input nums = [6,5,4,4], the expected output is true."
            },
            {
                "input": "nums = [1,3,2]",
                "output": "false",
                "explanation": "For the given input nums = [1,3,2], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Monotonic Array Check.",
        "execution_config": {
            "functionName": "isMonotonic",
            "returnType": "bool",
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
        "id": "ef8f5873-e67f-4119-a004-3cf2269e0cb4",
        "title": "Sort Array By Parity",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition.",
        "constraints": "1 <= nums.length <= 5000\n0 <= nums[i] <= 5000",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [3,1,2,4]",
                "output": "[2,4,3,1]",
                "explanation": "For the given input nums = [3,1,2,4], the expected output is [2,4,3,1]."
            },
            {
                "input": "nums = [0]",
                "output": "[0]",
                "explanation": "For the given input nums = [0], the expected output is [0]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sort Array By Parity.",
        "execution_config": {
            "functionName": "sortArrayByParity",
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
        "id": "fc741550-76bb-4c8e-ab12-b6520ba33191",
        "title": "Find Numbers with Even Number of Digits",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums of integers, return how many of them contain an even number of digits.",
        "constraints": "1 <= nums.length <= 500\n1 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [12,345,2,6,7896]",
                "output": "2",
                "explanation": "For the given input nums = [12,345,2,6,7896], the expected output is 2."
            },
            {
                "input": "nums = [555,901,482,1771]",
                "output": "1",
                "explanation": "For the given input nums = [555,901,482,1771], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Numbers with Even Number of Digits.",
        "execution_config": {
            "functionName": "findNumbers",
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
        "id": "db7a8121-8f7e-4c2f-a21e-9f8e97e653ca",
        "title": "Find the Duplicate Number in Array",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Cycle Detection"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number.",
        "constraints": "1 <= n <= 10^5\nnums.length == n + 1\n1 <= nums[i] <= n\nAll the integers in nums appear only once except for precisely one integer which appears two or more times.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,3,4,2,2]",
                "output": "2",
                "explanation": "For the given input nums = [1,3,4,2,2], the expected output is 2."
            },
            {
                "input": "nums = [3,1,3,4,2]",
                "output": "3",
                "explanation": "For the given input nums = [3,1,3,4,2], the expected output is 3."
            },
            {
                "input": "nums = [3,3,3,3,3]",
                "output": "3",
                "explanation": "For the given input nums = [3,3,3,3,3], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find the Duplicate Number in Array.",
        "execution_config": {
            "functionName": "findDuplicate",
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
        "id": "d2222a7a-ae4a-4774-aaae-dec24932eb84",
        "title": "Defuse the Bomb Circular Array",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Sliding Window"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You have a bomb to defuse, and your informer gives you a circular array code of length n and a key k. If k > 0, replace the ith number with the sum of the next k numbers. If k < 0, replace with the previous |k| numbers. If k == 0, replace with 0.",
        "constraints": "n == code.length\n1 <= n <= 100\n1 <= code[i] <= 100\n-(n - 1) <= k <= n - 1",
        "input_format": "vector<int>& code, int k",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "code = [5,7,1,4], k = 3",
                "output": "[12,10,16,13]",
                "explanation": "For the given input code = [5,7,1,4], k = 3, the expected output is [12,10,16,13]."
            },
            {
                "input": "code = [1,2,3,4], k = 0",
                "output": "[0,0,0,0]",
                "explanation": "For the given input code = [1,2,3,4], k = 0, the expected output is [0,0,0,0]."
            },
            {
                "input": "code = [2,4,9,3], k = -2",
                "output": "[12,5,6,13]",
                "explanation": "For the given input code = [2,4,9,3], k = -2, the expected output is [12,5,6,13]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Defuse the Bomb Circular Array.",
        "execution_config": {
            "functionName": "decrypt",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "code",
                    "type": "vector<int>&"
                },
                {
                    "name": "k",
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
        "id": "86f8d1fd-497a-4433-aad3-19306d414b8b",
        "title": "Can Make Arithmetic Progression From Sequence",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same. Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression, otherwise false.",
        "constraints": "2 <= arr.length <= 1000\n-10^6 <= arr[i] <= 10^6",
        "input_format": "vector<int>& arr",
        "output_format": "bool",
        "examples": [
            {
                "input": "arr = [3,5,1]",
                "output": "true",
                "explanation": "For the given input arr = [3,5,1], the expected output is true."
            },
            {
                "input": "arr = [1,2,4]",
                "output": "false",
                "explanation": "For the given input arr = [1,2,4], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Can Make Arithmetic Progression From Sequence.",
        "execution_config": {
            "functionName": "canMakeArithmeticProgression",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "arr",
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
        "id": "a385fb9b-08cd-45a0-aaa6-60d252e039bb",
        "title": "Three Sum Zero",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, return the count of unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        "constraints": "3 <= nums.length <= 3000\n-10^5 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [-1,0,1,2,-1,-4]",
                "output": "2",
                "explanation": "For the given input nums = [-1,0,1,2,-1,-4], the expected output is 2."
            },
            {
                "input": "nums = [0,1,1]",
                "output": "0",
                "explanation": "For the given input nums = [0,1,1], the expected output is 0."
            },
            {
                "input": "nums = [0,0,0]",
                "output": "1",
                "explanation": "For the given input nums = [0,0,0], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Three Sum Zero.",
        "execution_config": {
            "functionName": "threeSumCount",
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
        "id": "b234b3ea-d909-4005-a998-fd3c933596b6",
        "title": "Maximum Average Subarray I",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Sliding Window"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an integer array nums consisting of n elements, and an integer k. Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.",
        "constraints": "n == nums.length\n1 <= k <= n <= 10^5\n-10^4 <= nums[i] <= 10^4",
        "input_format": "vector<int>& nums, int k",
        "output_format": "double",
        "examples": [
            {
                "input": "nums = [1,12,-5,-6,50,3], k = 4",
                "output": "12.75",
                "explanation": "For the given input nums = [1,12,-5,-6,50,3], k = 4, the expected output is 12.75."
            },
            {
                "input": "nums = [5], k = 1",
                "output": "5",
                "explanation": "For the given input nums = [5], k = 1, the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Average Subarray I.",
        "execution_config": {
            "functionName": "findMaxAverage",
            "returnType": "double",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "k",
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
        "id": "3cd33621-99f4-47ed-a08b-b6ba7bebfead",
        "title": "Can Place Flowers",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You have a long flowerbed in which some of the plots are planted, and some are not. Flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's and an integer n, return true if n new flowers can be planted without violating the no-adjacent-flowers rule.",
        "constraints": "1 <= flowerbed.length <= 2 * 10^4\nflowerbed[i] is 0 or 1.\n0 <= n <= flowerbed.length",
        "input_format": "vector<int>& flowerbed, int n",
        "output_format": "bool",
        "examples": [
            {
                "input": "flowerbed = [1,0,0,0,1], n = 1",
                "output": "true",
                "explanation": "For the given input flowerbed = [1,0,0,0,1], n = 1, the expected output is true."
            },
            {
                "input": "flowerbed = [1,0,0,0,1], n = 2",
                "output": "false",
                "explanation": "For the given input flowerbed = [1,0,0,0,1], n = 2, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Can Place Flowers.",
        "execution_config": {
            "functionName": "canPlaceFlowers",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "flowerbed",
                    "type": "vector<int>&"
                },
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
        "id": "2f443005-9a87-42fe-a990-552a72e8e40f",
        "title": "Next Lexicographical Permutation",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "A permutation of an array of integers is an arrangement of its members into a sequence or linear order. Rearrange numbers into the lexicographically next greater permutation of numbers. If no greater permutation exists, rearrange it as the lowest possible order (i.e., sorted in ascending order). Return the modified array.",
        "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,2,3]",
                "output": "[1,3,2]",
                "explanation": "For the given input nums = [1,2,3], the expected output is [1,3,2]."
            },
            {
                "input": "nums = [3,2,1]",
                "output": "[1,2,3]",
                "explanation": "For the given input nums = [3,2,1], the expected output is [1,2,3]."
            },
            {
                "input": "nums = [1,1,5]",
                "output": "[1,5,1]",
                "explanation": "For the given input nums = [1,1,5], the expected output is [1,5,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Next Lexicographical Permutation.",
        "execution_config": {
            "functionName": "nextPermutation",
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
        "id": "00053b55-4e17-4862-ad85-4a60575c6ba2",
        "title": "Spiral Matrix Traversal",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(1)",
        "description": "Given an m x n matrix, return all elements of the matrix in spiral order.",
        "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 10\n-100 <= matrix[i][j] <= 100",
        "input_format": "vector<vector<int>>& matrix",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
                "output": "[1,2,3,6,9,8,7,4,5]",
                "explanation": "For the given input matrix = [[1,2,3],[4,5,6],[7,8,9]], the expected output is [1,2,3,6,9,8,7,4,5]."
            },
            {
                "input": "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
                "output": "[1,2,3,4,8,12,11,10,9,5,6,7]",
                "explanation": "For the given input matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]], the expected output is [1,2,3,4,8,12,11,10,9,5,6,7]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Spiral Matrix Traversal.",
        "execution_config": {
            "functionName": "spiralOrder",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "matrix",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "9f2a3e9f-eccb-4f88-a885-745d3a523de5",
        "title": "Rotate Image 90 Degrees Clockwise",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Matrix"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(1)",
        "description": "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise) in-place.",
        "constraints": "n == matrix.length == matrix[i].length\n1 <= n <= 20\n-1000 <= matrix[i][j] <= 1000",
        "input_format": "vector<vector<int>>& matrix",
        "output_format": "void",
        "examples": [
            {
                "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
                "output": "[[7,4,1],[8,5,2],[9,6,3]]",
                "explanation": "For the given input matrix = [[1,2,3],[4,5,6],[7,8,9]], the expected output is [[7,4,1],[8,5,2],[9,6,3]]."
            },
            {
                "input": "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
                "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
                "explanation": "For the given input matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], the expected output is [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Rotate Image 90 Degrees Clockwise.",
        "execution_config": {
            "functionName": "rotateImage",
            "returnType": "void",
            "parameters": [
                {
                    "name": "matrix",
                    "type": "vector<vector<int>>&"
                }
            ],
            "outputMode": "MUTATED_PARAMETER",
            "mutates": [
                "matrix"
            ],
            "comparisonType": "mutated_parameter"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "48146f1d-98fa-4cac-a922-45a253c4930b",
        "title": "Set Matrix Zeroes",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Matrix"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(1)",
        "description": "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. Return the modified matrix.",
        "constraints": "m == matrix.length\nn == matrix[0].length\n1 <= m, n <= 20\n-2^31 <= matrix[i][j] <= 2^31 - 1",
        "input_format": "vector<vector<int>>& matrix",
        "output_format": "vector<vector<int>>",
        "examples": [
            {
                "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
                "output": "[[1,0,1],[0,0,0],[1,0,1]]",
                "explanation": "For the given input matrix = [[1,1,1],[1,0,1],[1,1,1]], the expected output is [[1,0,1],[0,0,0],[1,0,1]]."
            },
            {
                "input": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
                "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
                "explanation": "For the given input matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]], the expected output is [[0,0,0,0],[0,4,5,0],[0,3,1,0]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Set Matrix Zeroes.",
        "execution_config": {
            "functionName": "setZeroes",
            "returnType": "vector<vector<int>>",
            "parameters": [
                {
                    "name": "matrix",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "303a8741-fac8-4dbd-a9b9-d938a2373a1b",
        "title": "Pascal's Triangle Row Generator",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Dynamic Programming"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(numRows^2)",
        "expected_space": "O(numRows^2)",
        "description": "Given an integer numRows, return the first numRows of Pascal's triangle.",
        "constraints": "1 <= numRows <= 10",
        "input_format": "int numRows",
        "output_format": "vector<vector<int>>",
        "examples": [
            {
                "input": "numRows = 5",
                "output": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
                "explanation": "For the given input numRows = 5, the expected output is [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]."
            },
            {
                "input": "numRows = 1",
                "output": "[[1]]",
                "explanation": "For the given input numRows = 1, the expected output is [[1]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Pascal's Triangle Row Generator.",
        "execution_config": {
            "functionName": "generatePascalsTriangle",
            "returnType": "vector<vector<int>>",
            "parameters": [
                {
                    "name": "numRows",
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
        "id": "828340c3-5ce5-422c-acd3-585eeec9a8b2",
        "title": "Merge Overlapping Intervals",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Merge Intervals",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        "constraints": "1 <= intervals.length <= 10^4\nintervals[i].length == 2\n0 <= starti <= endi <= 10^4",
        "input_format": "vector<vector<int>>& intervals",
        "output_format": "vector<vector<int>>",
        "examples": [
            {
                "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
                "output": "[[1,6],[8,10],[15,18]]",
                "explanation": "For the given input intervals = [[1,3],[2,6],[8,10],[15,18]], the expected output is [[1,6],[8,10],[15,18]]."
            },
            {
                "input": "intervals = [[1,4],[4,5]]",
                "output": "[[1,5]]",
                "explanation": "For the given input intervals = [[1,4],[4,5]], the expected output is [[1,5]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Merge Overlapping Intervals.",
        "execution_config": {
            "functionName": "mergeIntervals",
            "returnType": "vector<vector<int>>",
            "parameters": [
                {
                    "name": "intervals",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "848e26f7-f01d-4ef3-af02-479a6e18d936",
        "title": "Insert New Interval",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Merge Intervals"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] sorted in ascending order by starti. You are also given an interval newInterval = [start, end]. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).",
        "constraints": "0 <= intervals.length <= 10^4\nintervals[i].length == 2\n0 <= starti <= endi <= 10^5\nnewInterval.length == 2\n0 <= start <= end <= 10^5",
        "input_format": "vector<vector<int>>& intervals, vector<int>& newInterval",
        "output_format": "vector<vector<int>>",
        "examples": [
            {
                "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
                "output": "[[1,5],[6,9]]",
                "explanation": "For the given input intervals = [[1,3],[6,9]], newInterval = [2,5], the expected output is [[1,5],[6,9]]."
            },
            {
                "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
                "output": "[[1,2],[3,10],[12,16]]",
                "explanation": "For the given input intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8], the expected output is [[1,2],[3,10],[12,16]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Insert New Interval.",
        "execution_config": {
            "functionName": "insertInterval",
            "returnType": "vector<vector<int>>",
            "parameters": [
                {
                    "name": "intervals",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "newInterval",
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
        "id": "59f96741-3dfd-4129-ab17-af775cb868d4",
        "title": "First Missing Positive Integer",
        "topic": "Arrays",
        "difficulty": "Hard",
        "patterns": [
            "Hashing",
            "Array Indexing"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an unsorted integer array nums, return the smallest positive integer that is not present in nums.",
        "constraints": "1 <= nums.length <= 10^5\n-2^31 <= nums[i] <= 2^31 - 1",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,0]",
                "output": "3",
                "explanation": "For the given input nums = [1,2,0], the expected output is 3."
            },
            {
                "input": "nums = [3,4,-1,1]",
                "output": "2",
                "explanation": "For the given input nums = [3,4,-1,1], the expected output is 2."
            },
            {
                "input": "nums = [7,8,9,11,12]",
                "output": "1",
                "explanation": "For the given input nums = [7,8,9,11,12], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for First Missing Positive Integer.",
        "execution_config": {
            "functionName": "firstMissingPositive",
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
        "id": "72caace6-0907-4a3b-a98d-c0ae47f34cbc",
        "title": "Total Subarrays Sum Equals K",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Prefix Sum",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
        "constraints": "1 <= nums.length <= 2 * 10^4\n-1000 <= nums[i] <= 1000\n-10^7 <= k <= 10^7",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,1,1], k = 2",
                "output": "2",
                "explanation": "For the given input nums = [1,1,1], k = 2, the expected output is 2."
            },
            {
                "input": "nums = [1,2,3], k = 3",
                "output": "2",
                "explanation": "For the given input nums = [1,2,3], k = 3, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Total Subarrays Sum Equals K.",
        "execution_config": {
            "functionName": "subarraySum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "k",
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
        "id": "05700b67-7ebd-4218-aafc-3ffeb223fd99",
        "title": "Maximum Ascending Subarray Sum",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.",
        "constraints": "1 <= nums.length <= 100\n1 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [10,20,30,5,10,50]",
                "output": "65",
                "explanation": "For the given input nums = [10,20,30,5,10,50], the expected output is 65."
            },
            {
                "input": "nums = [10,20,30,40,50]",
                "output": "150",
                "explanation": "For the given input nums = [10,20,30,40,50], the expected output is 150."
            },
            {
                "input": "nums = [12,17,15,13,10,11,12]",
                "output": "33",
                "explanation": "For the given input nums = [12,17,15,13,10,11,12], the expected output is 33."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Ascending Subarray Sum.",
        "execution_config": {
            "functionName": "maxAscendingSum",
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
        "id": "ea634e7c-984e-4436-afba-96ec850b7a5b",
        "title": "Check If Double Exists",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array arr of integers, check if there exist two indices i and j such that i != j, 0 <= i, j < arr.length, and arr[i] == 2 * arr[j].",
        "constraints": "2 <= arr.length <= 500\n-10^3 <= arr[i] <= 10^3",
        "input_format": "vector<int>& arr",
        "output_format": "bool",
        "examples": [
            {
                "input": "arr = [10,2,5,3]",
                "output": "true",
                "explanation": "For the given input arr = [10,2,5,3], the expected output is true."
            },
            {
                "input": "arr = [3,1,7,11]",
                "output": "false",
                "explanation": "For the given input arr = [3,1,7,11], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check If Double Exists.",
        "execution_config": {
            "functionName": "checkIfExist",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "arr",
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
        "id": "32ec08ef-694e-4b80-ad06-101442e84655",
        "title": "Height Checker Alignment",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Return the number of indices where heights[i] != expected[i].",
        "constraints": "1 <= heights.length <= 100\n1 <= heights[i] <= 100",
        "input_format": "vector<int>& heights",
        "output_format": "int",
        "examples": [
            {
                "input": "heights = [1,1,4,2,1,3]",
                "output": "3",
                "explanation": "For the given input heights = [1,1,4,2,1,3], the expected output is 3."
            },
            {
                "input": "heights = [5,1,2,3,4]",
                "output": "5",
                "explanation": "For the given input heights = [5,1,2,3,4], the expected output is 5."
            },
            {
                "input": "heights = [1,2,3,4,5]",
                "output": "0",
                "explanation": "For the given input heights = [1,2,3,4,5], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Height Checker Alignment.",
        "execution_config": {
            "functionName": "heightChecker",
            "returnType": "int",
            "parameters": [
                {
                    "name": "heights",
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
        "id": "7281e5af-77d5-42e5-ac5b-be2a5d03984f",
        "title": "Third Distinct Maximum Number",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.",
        "constraints": "1 <= nums.length <= 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,2,1]",
                "output": "1",
                "explanation": "For the given input nums = [3,2,1], the expected output is 1."
            },
            {
                "input": "nums = [1,2]",
                "output": "2",
                "explanation": "For the given input nums = [1,2], the expected output is 2."
            },
            {
                "input": "nums = [2,2,3,1]",
                "output": "1",
                "explanation": "For the given input nums = [2,2,3,1], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Third Distinct Maximum Number.",
        "execution_config": {
            "functionName": "thirdMax",
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
        "id": "3b86b59a-59e7-42bc-a06a-68f56cf3ea29",
        "title": "Max Consecutive Ones",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
        "constraints": "1 <= nums.length <= 10^5\nnums[i] is either 0 or 1.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,1,0,1,1,1]",
                "output": "3",
                "explanation": "For the given input nums = [1,1,0,1,1,1], the expected output is 3."
            },
            {
                "input": "nums = [1,0,1,1,0,1]",
                "output": "2",
                "explanation": "For the given input nums = [1,0,1,1,0,1], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Max Consecutive Ones.",
        "execution_config": {
            "functionName": "findMaxConsecutiveOnes",
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
        "id": "ae5ee07f-7f57-4199-a54c-de4478076fb9",
        "title": "Relative Sort Array Order",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Sorting",
            "Hashing"
        ],
        "data_structures": [
            "Array",
            "Hash Map"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1. Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.",
        "constraints": "1 <= arr1.length, arr2.length <= 1000\n0 <= arr1[i], arr2[i] <= 1000\nAll the values of arr2 are unique.",
        "input_format": "vector<int>& arr1, vector<int>& arr2",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]",
                "output": "[2,2,2,1,4,3,3,9,6,7,19]",
                "explanation": "For the given input arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6], the expected output is [2,2,2,1,4,3,3,9,6,7,19]."
            },
            {
                "input": "arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]",
                "output": "[22,28,8,6,17,44]",
                "explanation": "For the given input arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6], the expected output is [22,28,8,6,17,44]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Relative Sort Array Order.",
        "execution_config": {
            "functionName": "relativeSortArray",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "arr1",
                    "type": "vector<int>&"
                },
                {
                    "name": "arr2",
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
        "id": "4f93c588-13d1-427d-a456-5b40e76a1112",
        "title": "Interleave Split Array",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the array nums consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn]. Return the array in the form [x1, y1, x2, y2, ..., xn, yn].",
        "constraints": "1 <= n <= 500\nnums.length == 2n\n1 <= nums[i] <= 10^3",
        "input_format": "vector<int>& nums, int n",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [2,5,1,3,4,7], n = 3",
                "output": "[2,3,5,4,1,7]",
                "explanation": "For the given input nums = [2,5,1,3,4,7], n = 3, the expected output is [2,3,5,4,1,7]."
            },
            {
                "input": "nums = [1,2,3,4,4,3,2,1], n = 4",
                "output": "[1,4,2,3,3,2,4,1]",
                "explanation": "For the given input nums = [1,2,3,4,4,3,2,1], n = 4, the expected output is [1,4,2,3,3,2,4,1]."
            },
            {
                "input": "nums = [1,1,2,2], n = 2",
                "output": "[1,2,1,2]",
                "explanation": "For the given input nums = [1,1,2,2], n = 2, the expected output is [1,2,1,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Interleave Split Array.",
        "execution_config": {
            "functionName": "shuffle",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
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
        "id": "81fd2e04-876e-43f1-a06b-908fc6deb137",
        "title": "Decompress Run-Length Encoded List",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(totalLength)",
        "expected_space": "O(totalLength)",
        "description": "We are given a list nums of integers representing a list compressed with run-length encoding. Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0). Return the decompressed list.",
        "constraints": "2 <= nums.length <= 100\nnums.length % 2 == 0\n1 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,2,3,4]",
                "output": "[2,4,4,4]",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is [2,4,4,4]."
            },
            {
                "input": "nums = [1,1,2,3]",
                "output": "[1,3,3]",
                "explanation": "For the given input nums = [1,1,2,3], the expected output is [1,3,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Decompress Run-Length Encoded List.",
        "execution_config": {
            "functionName": "decompressRLElist",
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
        "id": "c01a1801-3872-47e7-a816-5dbfaae7926b",
        "title": "Sum of All Odd Length Subarrays",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Prefix Sum"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.",
        "constraints": "1 <= arr.length <= 1000\n1 <= arr[i] <= 1000",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [1,4,2,5,3]",
                "output": "58",
                "explanation": "For the given input arr = [1,4,2,5,3], the expected output is 58."
            },
            {
                "input": "arr = [1,2]",
                "output": "3",
                "explanation": "For the given input arr = [1,2], the expected output is 3."
            },
            {
                "input": "arr = [10,11,12]",
                "output": "66",
                "explanation": "For the given input arr = [10,11,12], the expected output is 66."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sum of All Odd Length Subarrays.",
        "execution_config": {
            "functionName": "sumOddLengthSubarrays",
            "returnType": "int",
            "parameters": [
                {
                    "name": "arr",
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
        "id": "c22b642a-06be-41a5-a7b8-ca1a3085ef08",
        "title": "Minimum Initial Value for Positive Step Sum",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Prefix Sum"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of integers nums, you start with an initial positive value startValue. In each iteration, you calculate the step by step sum of startValue plus elements in nums. Return the minimum positive value of startValue such that the step by step sum is never less than 1.",
        "constraints": "1 <= nums.length <= 100\n-100 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [-3,2,-3,4,2]",
                "output": "5",
                "explanation": "For the given input nums = [-3,2,-3,4,2], the expected output is 5."
            },
            {
                "input": "nums = [1,2]",
                "output": "1",
                "explanation": "For the given input nums = [1,2], the expected output is 1."
            },
            {
                "input": "nums = [1,-2,-3]",
                "output": "5",
                "explanation": "For the given input nums = [1,-2,-3], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Initial Value for Positive Step Sum.",
        "execution_config": {
            "functionName": "minStartValue",
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
        "id": "b826f91a-018d-4ef8-a895-ed008311f383",
        "title": "Count Triplet Difference Thresholds",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n^3)",
        "expected_space": "O(1)",
        "description": "Given an array of integers arr, and three integers a, b and c. Find the number of good triplets (i, j, k) with 0 <= i < j < k < arr.length such that |arr[i] - arr[j]| <= a, |arr[j] - arr[k]| <= b, and |arr[i] - arr[k]| <= c.",
        "constraints": "3 <= arr.length <= 100\n0 <= arr[i] <= 1000\n0 <= a, b, c <= 1000",
        "input_format": "vector<int>& arr, int a, int b, int c",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3",
                "output": "4",
                "explanation": "For the given input arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3, the expected output is 4."
            },
            {
                "input": "arr = [1,1,2,2,3], a = 0, b = 0, c = 1",
                "output": "0",
                "explanation": "For the given input arr = [1,1,2,2,3], a = 0, b = 0, c = 1, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Triplet Difference Thresholds.",
        "execution_config": {
            "functionName": "countGoodTriplets",
            "returnType": "int",
            "parameters": [
                {
                    "name": "arr",
                    "type": "vector<int>&"
                },
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
        "id": "861afa1d-fce0-4283-a6b0-7571313fd8ca",
        "title": "Maximum Matrix Row Sum Wealth",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Matrix"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(1)",
        "description": "You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has (maximum row sum).",
        "constraints": "m == accounts.length\nn == accounts[i].length\n1 <= m, n <= 50\n1 <= accounts[i][j] <= 100",
        "input_format": "vector<vector<int>>& accounts",
        "output_format": "int",
        "examples": [
            {
                "input": "accounts = [[1,2,3],[3,2,1]]",
                "output": "6",
                "explanation": "For the given input accounts = [[1,2,3],[3,2,1]], the expected output is 6."
            },
            {
                "input": "accounts = [[1,5],[7,3],[3,5]]",
                "output": "10",
                "explanation": "For the given input accounts = [[1,5],[7,3],[3,5]], the expected output is 10."
            },
            {
                "input": "accounts = [[2,8,7],[7,1,3],[1,9,5]]",
                "output": "17",
                "explanation": "For the given input accounts = [[2,8,7],[7,1,3],[1,9,5]], the expected output is 17."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Matrix Row Sum Wealth.",
        "execution_config": {
            "functionName": "maximumWealth",
            "returnType": "int",
            "parameters": [
                {
                    "name": "accounts",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "350ad2e6-430c-4833-a872-80c89bf274a4",
        "title": "Target Indices After Array Sorting",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "You are given a 0-indexed integer array nums and a target element target. Return a list of the target indices of nums after sorting nums in non-decreasing order.",
        "constraints": "1 <= nums.length <= 100\n1 <= nums[i], target <= 100",
        "input_format": "vector<int>& nums, int target",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,2,5,2,3], target = 2",
                "output": "[1,2]",
                "explanation": "For the given input nums = [1,2,5,2,3], target = 2, the expected output is [1,2]."
            },
            {
                "input": "nums = [1,2,5,2,3], target = 3",
                "output": "[3]",
                "explanation": "For the given input nums = [1,2,5,2,3], target = 3, the expected output is [3]."
            },
            {
                "input": "nums = [1,2,5,2,3], target = 5",
                "output": "[4]",
                "explanation": "For the given input nums = [1,2,5,2,3], target = 5, the expected output is [4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Target Indices After Array Sorting.",
        "execution_config": {
            "functionName": "targetIndices",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "target",
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
        "id": "121572a5-1990-4cb9-aa5f-52b9414a03de",
        "title": "Missing Number Ranges",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Intervals"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range. Return the count of missing single numbers or ranges.",
        "constraints": "-10^9 <= lower <= upper <= 10^9\n0 <= nums.length <= 100\nlower <= nums[i] <= upper\nAll the values of nums are unique.",
        "input_format": "vector<int>& nums, int lower, int upper",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [0,1,3,50,75], lower = 0, upper = 99",
                "output": "4",
                "explanation": "For the given input nums = [0,1,3,50,75], lower = 0, upper = 99, the expected output is 4."
            },
            {
                "input": "nums = [-1], lower = -1, upper = -1",
                "output": "0",
                "explanation": "For the given input nums = [-1], lower = -1, upper = -1, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Missing Number Ranges.",
        "execution_config": {
            "functionName": "countMissingIntervals",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "lower",
                    "type": "int"
                },
                {
                    "name": "upper",
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
        "id": "6a5bb2be-97b1-48e6-a0a5-2a7dadae549f",
        "title": "Maximum Count of Positive and Negative Integers",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.",
        "constraints": "1 <= nums.length <= 2000\n-2000 <= nums[i] <= 2000\nnums is sorted in a non-decreasing order.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [-2,-1,-1,1,2,3]",
                "output": "3",
                "explanation": "For the given input nums = [-2,-1,-1,1,2,3], the expected output is 3."
            },
            {
                "input": "nums = [-3,-2,-1,0,0,1,2]",
                "output": "3",
                "explanation": "For the given input nums = [-3,-2,-1,0,0,1,2], the expected output is 3."
            },
            {
                "input": "nums = [5,20,66,1314]",
                "output": "4",
                "explanation": "For the given input nums = [5,20,66,1314], the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Count of Positive and Negative Integers.",
        "execution_config": {
            "functionName": "maximumCount",
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
        "id": "1efdf349-023f-49d7-a919-abbebb42615c",
        "title": "Non-decreasing Array with One Modification",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.",
        "constraints": "n == nums.length\n1 <= n <= 10^4\n-10^5 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [4,2,3]",
                "output": "true",
                "explanation": "For the given input nums = [4,2,3], the expected output is true."
            },
            {
                "input": "nums = [4,2,1]",
                "output": "false",
                "explanation": "For the given input nums = [4,2,1], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Non-decreasing Array with One Modification.",
        "execution_config": {
            "functionName": "checkPossibility",
            "returnType": "bool",
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
        "id": "3f0f433a-1405-42df-a341-91fca3ab2e18",
        "title": "Check if Array Is Sorted and Rotated",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.",
        "constraints": "1 <= nums.length <= 100\n1 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [3,4,5,1,2]",
                "output": "true",
                "explanation": "For the given input nums = [3,4,5,1,2], the expected output is true."
            },
            {
                "input": "nums = [2,1,3,4]",
                "output": "false",
                "explanation": "For the given input nums = [2,1,3,4], the expected output is false."
            },
            {
                "input": "nums = [1,2,3]",
                "output": "true",
                "explanation": "For the given input nums = [1,2,3], the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check if Array Is Sorted and Rotated.",
        "execution_config": {
            "functionName": "check",
            "returnType": "bool",
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
        "id": "99540e7b-e03f-4a33-aead-53825fdbbabe",
        "title": "Dominant Element in Array",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Linear Traversal"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an integer array nums where the largest integer is unique. Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.",
        "constraints": "2 <= nums.length <= 50\n0 <= nums[i] <= 100\nThe largest element in nums is unique.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,6,1,0]",
                "output": "1",
                "explanation": "For the given input nums = [3,6,1,0], the expected output is 1."
            },
            {
                "input": "nums = [1,2,3,4]",
                "output": "-1",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Dominant Element in Array.",
        "execution_config": {
            "functionName": "dominantIndex",
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
        "id": "9da4f514-e245-4329-a3d7-09242bb64d9c",
        "title": "Subarray Product Less Than K",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Sliding Window"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.",
        "constraints": "1 <= nums.length <= 3 * 10^4\n1 <= nums[i] <= 1000\n0 <= k <= 10^6",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [10,5,2,6], k = 100",
                "output": "8",
                "explanation": "For the given input nums = [10,5,2,6], k = 100, the expected output is 8."
            },
            {
                "input": "nums = [1,2,3], k = 0",
                "output": "0",
                "explanation": "For the given input nums = [1,2,3], k = 0, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Subarray Product Less Than K.",
        "execution_config": {
            "functionName": "numSubarrayProductLessThanK",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "k",
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
        "id": "3608ad7d-0901-4553-acba-aac686135642",
        "title": "Maximum Sum Circular Subarray",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Dynamic Programming",
            "Prefix Sum"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.",
        "constraints": "n == nums.length\n1 <= n <= 3 * 10^4\n-3 * 10^4 <= nums[i] <= 3 * 10^4",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,-2,3,-2]",
                "output": "3",
                "explanation": "For the given input nums = [1,-2,3,-2], the expected output is 3."
            },
            {
                "input": "nums = [5,-3,5]",
                "output": "10",
                "explanation": "For the given input nums = [5,-3,5], the expected output is 10."
            },
            {
                "input": "nums = [-3,-2,-3]",
                "output": "-2",
                "explanation": "For the given input nums = [-3,-2,-3], the expected output is -2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Sum Circular Subarray.",
        "execution_config": {
            "functionName": "maxSubarraySumCircular",
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
        "id": "02cd3aa5-075d-48fd-a81b-678c982d2ec6",
        "title": "Subarray Divisible by K Check",
        "topic": "Arrays",
        "difficulty": "Medium",
        "patterns": [
            "Prefix Sum",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(k)",
        "description": "Given an integer array nums and an integer k, return true if nums has a good subarray of length at least two whose elements sum up to a multiple of k.",
        "constraints": "1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^9\n1 <= k <= 2^31 - 1",
        "input_format": "vector<int>& nums, int k",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [23,2,4,6,7], k = 6",
                "output": "true",
                "explanation": "For the given input nums = [23,2,4,6,7], k = 6, the expected output is true."
            },
            {
                "input": "nums = [23,2,6,4,7], k = 6",
                "output": "true",
                "explanation": "For the given input nums = [23,2,6,4,7], k = 6, the expected output is true."
            },
            {
                "input": "nums = [23,2,6,4,7], k = 13",
                "output": "false",
                "explanation": "For the given input nums = [23,2,6,4,7], k = 13, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Subarray Divisible by K Check.",
        "execution_config": {
            "functionName": "checkSubarraySum",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "k",
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
        "id": "e052cade-c292-43ab-afac-d6b72e51dfac",
        "title": "Range Sum Query Immutable",
        "topic": "Arrays",
        "difficulty": "Easy",
        "patterns": [
            "Prefix Sum"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums, handle multiple queries of the sum of the elements of nums between indices left and right inclusive. Return the sum.",
        "constraints": "1 <= nums.length <= 10^4\n-10^5 <= nums[i] <= 10^5\n0 <= left <= right < nums.length",
        "input_format": "vector<int>& nums, int left, int right",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [-2,0,3,-5,2,-1], left = 0, right = 2",
                "output": "1",
                "explanation": "For the given input nums = [-2,0,3,-5,2,-1], left = 0, right = 2, the expected output is 1."
            },
            {
                "input": "nums = [-2,0,3,-5,2,-1], left = 2, right = 5",
                "output": "-1",
                "explanation": "For the given input nums = [-2,0,3,-5,2,-1], left = 2, right = 5, the expected output is -1."
            },
            {
                "input": "nums = [-2,0,3,-5,2,-1], left = 0, right = 5",
                "output": "-3",
                "explanation": "For the given input nums = [-2,0,3,-5,2,-1], left = 0, right = 5, the expected output is -3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Range Sum Query Immutable.",
        "execution_config": {
            "functionName": "sumRange",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
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
    }
];

export default ARRAY_PROBLEMS;
