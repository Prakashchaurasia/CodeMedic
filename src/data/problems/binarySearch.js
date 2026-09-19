/**
 * Binary Search Problems Dataset (30 problems)
 * CodeMedic Verified DSA Collection
 */

export const BINARY_SEARCH_PROBLEMS = [
    {
        "id": "a838f69e-7416-4130-a174-957d06e6f382",
        "title": "Binary Search",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 < nums[i], target < 10^4\nAll the integers in nums are unique.\nnums is sorted in ascending order.",
        "input_format": "vector<int>& nums, int target",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [-1,0,3,5,9,12], target = 9",
                "output": "4",
                "explanation": "For the given input nums = [-1,0,3,5,9,12], target = 9, the expected output is 4."
            },
            {
                "input": "nums = [-1,0,3,5,9,12], target = 2",
                "output": "-1",
                "explanation": "For the given input nums = [-1,0,3,5,9,12], target = 2, the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Binary Search.",
        "execution_config": {
            "functionName": "search",
            "returnType": "int",
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
        "id": "4e41fbce-5e05-4300-a2fa-5ef9ccf7980b",
        "title": "Search Insert Position",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 <= nums[i], target <= 10^4\nnums contains distinct values sorted in ascending order.",
        "input_format": "vector<int>& nums, int target",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,3,5,6], target = 5",
                "output": "2",
                "explanation": "For the given input nums = [1,3,5,6], target = 5, the expected output is 2."
            },
            {
                "input": "nums = [1,3,5,6], target = 2",
                "output": "1",
                "explanation": "For the given input nums = [1,3,5,6], target = 2, the expected output is 1."
            },
            {
                "input": "nums = [1,3,5,6], target = 7",
                "output": "4",
                "explanation": "For the given input nums = [1,3,5,6], target = 7, the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Search Insert Position.",
        "execution_config": {
            "functionName": "searchInsert",
            "returnType": "int",
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
        "id": "58371f66-1587-47d7-aa82-dd8131895fa1",
        "title": "First Bad Version Finder",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "You have n versions [1, 2, ..., n] and the first bad version is given by bad. Find the first bad version using binary search.",
        "constraints": "1 <= bad <= n <= 2^31 - 1",
        "input_format": "int n, int bad",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 5, bad = 4",
                "output": "4",
                "explanation": "For the given input n = 5, bad = 4, the expected output is 4."
            },
            {
                "input": "n = 1, bad = 1",
                "output": "1",
                "explanation": "For the given input n = 1, bad = 1, the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for First Bad Version Finder.",
        "execution_config": {
            "functionName": "firstBadVersion",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "bad",
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
        "id": "e27f4e86-1fc3-4613-a9dc-708623b974d7",
        "title": "Integer Square Root",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log x)",
        "expected_space": "O(1)",
        "description": "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.",
        "constraints": "0 <= x <= 2^31 - 1",
        "input_format": "int x",
        "output_format": "int",
        "examples": [
            {
                "input": "x = 4",
                "output": "2",
                "explanation": "For the given input x = 4, the expected output is 2."
            },
            {
                "input": "x = 8",
                "output": "2",
                "explanation": "For the given input x = 8, the expected output is 2."
            },
            {
                "input": "x = 0",
                "output": "0",
                "explanation": "For the given input x = 0, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Integer Square Root.",
        "execution_config": {
            "functionName": "mySqrt",
            "returnType": "int",
            "parameters": [
                {
                    "name": "x",
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
        "id": "4d26427b-b727-41ad-a0c0-41ffaa31d821",
        "title": "Search in Rotated Sorted Array",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "There is an integer array nums sorted in ascending order (with distinct values). Given the array nums after possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
        "constraints": "1 <= nums.length <= 5000\n-10^4 <= nums[i], target <= 10^4\nAll values of nums are unique.",
        "input_format": "vector<int>& nums, int target",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [4,5,6,7,0,1,2], target = 0",
                "output": "4",
                "explanation": "For the given input nums = [4,5,6,7,0,1,2], target = 0, the expected output is 4."
            },
            {
                "input": "nums = [4,5,6,7,0,1,2], target = 3",
                "output": "-1",
                "explanation": "For the given input nums = [4,5,6,7,0,1,2], target = 3, the expected output is -1."
            },
            {
                "input": "nums = [1], target = 0",
                "output": "-1",
                "explanation": "For the given input nums = [1], target = 0, the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Search in Rotated Sorted Array.",
        "execution_config": {
            "functionName": "search",
            "returnType": "int",
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
        "id": "57c99119-d3e7-4e5d-a619-e2d63cfbd1f0",
        "title": "Find Minimum in Rotated Sorted Array",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "Given the sorted rotated array nums of unique elements, return the minimum element of this array in O(log n) time.",
        "constraints": "n == nums.length\n1 <= n <= 5000\n-5000 <= nums[i] <= 5000\nAll the integers of nums are unique.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,4,5,1,2]",
                "output": "1",
                "explanation": "For the given input nums = [3,4,5,1,2], the expected output is 1."
            },
            {
                "input": "nums = [4,5,6,7,0,1,2]",
                "output": "0",
                "explanation": "For the given input nums = [4,5,6,7,0,1,2], the expected output is 0."
            },
            {
                "input": "nums = [11,13,15,17]",
                "output": "11",
                "explanation": "For the given input nums = [11,13,15,17], the expected output is 11."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Minimum in Rotated Sorted Array.",
        "execution_config": {
            "functionName": "findMin",
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
        "id": "7d480be0-6226-4f64-a06f-54845ddaa67b",
        "title": "Find First and Last Position in Sorted Array",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].",
        "constraints": "0 <= nums.length <= 10^5\n-10^9 <= nums[i], target <= 10^9\nnums is a non-decreasing array.",
        "input_format": "vector<int>& nums, int target",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [5,7,7,8,8,10], target = 8",
                "output": "[3,4]",
                "explanation": "For the given input nums = [5,7,7,8,8,10], target = 8, the expected output is [3,4]."
            },
            {
                "input": "nums = [5,7,7,8,8,10], target = 6",
                "output": "[-1,-1]",
                "explanation": "For the given input nums = [5,7,7,8,8,10], target = 6, the expected output is [-1,-1]."
            },
            {
                "input": "nums = [], target = 0",
                "output": "[-1,-1]",
                "explanation": "For the given input nums = [], target = 0, the expected output is [-1,-1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find First and Last Position in Sorted Array.",
        "execution_config": {
            "functionName": "searchRange",
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
        "id": "a32e6050-42f2-40f9-a845-8ef521be925f",
        "title": "Peak Index in a Mountain Array",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "An array arr is a mountain if arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]. Given a mountain array arr, return the index i of the peak element.",
        "constraints": "3 <= arr.length <= 10^5\n0 <= arr[i] <= 10^6\narr is guaranteed to be a mountain array.",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [0,1,0]",
                "output": "1",
                "explanation": "For the given input arr = [0,1,0], the expected output is 1."
            },
            {
                "input": "arr = [0,2,1,0]",
                "output": "1",
                "explanation": "For the given input arr = [0,2,1,0], the expected output is 1."
            },
            {
                "input": "arr = [0,10,5,2]",
                "output": "1",
                "explanation": "For the given input arr = [0,10,5,2], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Peak Index in a Mountain Array.",
        "execution_config": {
            "functionName": "peakIndexInMountainArray",
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
        "id": "eb2e73db-6e4c-43e9-a8ee-58ff046aeefb",
        "title": "Find Peak Element Index",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index in O(log n) time.",
        "constraints": "1 <= nums.length <= 1000\n-2^31 <= nums[i] <= 2^31 - 1\nnums[i] != nums[i + 1] for all valid i.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,3,1]",
                "output": "2",
                "explanation": "For the given input nums = [1,2,3,1], the expected output is 2."
            },
            {
                "input": "nums = [1,2,1,3,5,6,4]",
                "output": "5",
                "explanation": "For the given input nums = [1,2,1,3,5,6,4], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Peak Element Index.",
        "execution_config": {
            "functionName": "findPeakElement",
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
        "id": "083d44ef-c46d-4158-a263-c5948608b052",
        "title": "Capacity To Ship Packages Within D Days",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search on Answer"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log(sum))",
        "expected_space": "O(1)",
        "description": "A conveyor belt has packages that must be shipped within days days. Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.",
        "constraints": "1 <= days <= weights.length <= 5 * 10^4\n1 <= weights[i] <= 500",
        "input_format": "vector<int>& weights, int days",
        "output_format": "int",
        "examples": [
            {
                "input": "weights = [1,2,3,4,5,6,7,8,9,10], days = 5",
                "output": "15",
                "explanation": "For the given input weights = [1,2,3,4,5,6,7,8,9,10], days = 5, the expected output is 15."
            },
            {
                "input": "weights = [3,2,2,4,1,4], days = 3",
                "output": "6",
                "explanation": "For the given input weights = [3,2,2,4,1,4], days = 3, the expected output is 6."
            },
            {
                "input": "weights = [1,2,3,1,1], days = 4",
                "output": "3",
                "explanation": "For the given input weights = [1,2,3,1,1], days = 4, the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Capacity To Ship Packages Within D Days.",
        "execution_config": {
            "functionName": "shipWithinDays",
            "returnType": "int",
            "parameters": [
                {
                    "name": "weights",
                    "type": "vector<int>&"
                },
                {
                    "name": "days",
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
        "id": "e7e79197-fd3b-48f3-a3b5-3ff44ca26cc2",
        "title": "Koko Eating Bananas",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search on Answer"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log(max))",
        "expected_space": "O(1)",
        "description": "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. Return the minimum integer k such that she can eat all the bananas within h hours.",
        "constraints": "1 <= piles.length <= 10^4\npiles.length <= h <= 10^9\n1 <= piles[i] <= 10^9",
        "input_format": "vector<int>& piles, int h",
        "output_format": "int",
        "examples": [
            {
                "input": "piles = [3,6,7,11], h = 8",
                "output": "4",
                "explanation": "For the given input piles = [3,6,7,11], h = 8, the expected output is 4."
            },
            {
                "input": "piles = [30,11,23,4,20], h = 5",
                "output": "30",
                "explanation": "For the given input piles = [30,11,23,4,20], h = 5, the expected output is 30."
            },
            {
                "input": "piles = [30,11,23,4,20], h = 6",
                "output": "23",
                "explanation": "For the given input piles = [30,11,23,4,20], h = 6, the expected output is 23."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Koko Eating Bananas.",
        "execution_config": {
            "functionName": "minEatingSpeed",
            "returnType": "int",
            "parameters": [
                {
                    "name": "piles",
                    "type": "vector<int>&"
                },
                {
                    "name": "h",
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
        "id": "3e7a7fc7-cb43-434c-a264-7106b84ee0af",
        "title": "Single Element in a Sorted Array",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Return the single element that appears only once in O(log n) time.",
        "constraints": "1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,1,2,3,3,4,4,8,8]",
                "output": "2",
                "explanation": "For the given input nums = [1,1,2,3,3,4,4,8,8], the expected output is 2."
            },
            {
                "input": "nums = [3,3,7,7,10,11,11]",
                "output": "10",
                "explanation": "For the given input nums = [3,3,7,7,10,11,11], the expected output is 10."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Single Element in a Sorted Array.",
        "execution_config": {
            "functionName": "singleNonDuplicate",
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
        "id": "6feea221-f6ce-45cd-a59c-eb6cbc9d13b4",
        "title": "Search a 2D Matrix",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(log(m * n))",
        "expected_space": "O(1)",
        "description": "You are given an m x n integer matrix matrix with integers in each row sorted from left to right, and the first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if target is in matrix or false otherwise.",
        "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 100\n-10^4 <= matrix[i][j], target <= 10^4",
        "input_format": "vector<vector<int>>& matrix, int target",
        "output_format": "bool",
        "examples": [
            {
                "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
                "output": "true",
                "explanation": "For the given input matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3, the expected output is true."
            },
            {
                "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
                "output": "false",
                "explanation": "For the given input matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Search a 2D Matrix.",
        "execution_config": {
            "functionName": "searchMatrix",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "matrix",
                    "type": "vector<vector<int>>&"
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
        "id": "c4f3230b-8603-4e6f-a912-f060e641212c",
        "title": "Arranging Coins Complete Rows",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search",
            "Math"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "You have n coins and you want to build a staircase with these coins. The ith row contains exactly i coins. The last row of the staircase may be incomplete. Given the integer n, return the number of complete rows of the staircase you will build.",
        "constraints": "1 <= n <= 2^31 - 1",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 5",
                "output": "2",
                "explanation": "For the given input n = 5, the expected output is 2."
            },
            {
                "input": "n = 8",
                "output": "3",
                "explanation": "For the given input n = 8, the expected output is 3."
            },
            {
                "input": "n = 1",
                "output": "1",
                "explanation": "For the given input n = 1, the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Arranging Coins Complete Rows.",
        "execution_config": {
            "functionName": "arrangeCoins",
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
        "id": "b714ed15-2aca-4aa2-a955-fb461c795700",
        "title": "Valid Perfect Square",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log num)",
        "expected_space": "O(1)",
        "description": "Given a positive integer num, return true if num is a perfect square or false otherwise. Do not use any built-in library function such as sqrt.",
        "constraints": "1 <= num <= 2^31 - 1",
        "input_format": "int num",
        "output_format": "bool",
        "examples": [
            {
                "input": "num = 16",
                "output": "true",
                "explanation": "For the given input num = 16, the expected output is true."
            },
            {
                "input": "num = 14",
                "output": "false",
                "explanation": "For the given input num = 14, the expected output is false."
            },
            {
                "input": "num = 1",
                "output": "true",
                "explanation": "For the given input num = 1, the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Valid Perfect Square.",
        "execution_config": {
            "functionName": "isPerfectSquare",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "num",
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
        "id": "b49a547c-2cf7-4681-a876-1fdb99727baf",
        "title": "Find Smallest Letter Greater Than Target",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters. Return the smallest character in letters that is lexicographically greater than target.",
        "constraints": "2 <= letters.length <= 10^4\nletters[i] is a lowercase English letter.\nletters is sorted in non-decreasing order.",
        "input_format": "vector<string>& letters, string target",
        "output_format": "string",
        "examples": [
            {
                "input": "letters = [\"c\",\"f\",\"j\"], target = \"a\"",
                "output": "\"c\"",
                "explanation": "For the given input letters = [\"c\",\"f\",\"j\"], target = \"a\", the expected output is \"c\"."
            },
            {
                "input": "letters = [\"c\",\"f\",\"j\"], target = \"c\"",
                "output": "\"f\"",
                "explanation": "For the given input letters = [\"c\",\"f\",\"j\"], target = \"c\", the expected output is \"f\"."
            },
            {
                "input": "letters = [\"x\",\"x\",\"y\",\"y\"], target = \"z\"",
                "output": "\"x\"",
                "explanation": "For the given input letters = [\"x\",\"x\",\"y\",\"y\"], target = \"z\", the expected output is \"x\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Smallest Letter Greater Than Target.",
        "execution_config": {
            "functionName": "nextGreatestLetter",
            "returnType": "string",
            "parameters": [
                {
                    "name": "letters",
                    "type": "vector<string>&"
                },
                {
                    "name": "target",
                    "type": "string"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "172def80-e203-4bcf-ace4-17073fc91e3b",
        "title": "Distance Value Between Two Arrays",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log m)",
        "expected_space": "O(1)",
        "description": "Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays. The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i] - arr2[j]| <= d.",
        "constraints": "1 <= arr1.length, arr2.length <= 500\n-1000 <= arr1[i], arr2[j] <= 1000\n0 <= d <= 100",
        "input_format": "vector<int>& arr1, vector<int>& arr2, int d",
        "output_format": "int",
        "examples": [
            {
                "input": "arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2",
                "output": "2",
                "explanation": "For the given input arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2, the expected output is 2."
            },
            {
                "input": "arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3",
                "output": "2",
                "explanation": "For the given input arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Distance Value Between Two Arrays.",
        "execution_config": {
            "functionName": "findTheDistanceValue",
            "returnType": "int",
            "parameters": [
                {
                    "name": "arr1",
                    "type": "vector<int>&"
                },
                {
                    "name": "arr2",
                    "type": "vector<int>&"
                },
                {
                    "name": "d",
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
        "id": "28329577-7314-4491-a1aa-3cc46a86fe4a",
        "title": "Count Negative Numbers in a Sorted Matrix",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search",
            "Two Pointers"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m + n)",
        "expected_space": "O(1)",
        "description": "Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 100\n-100 <= grid[i][j] <= 100",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]",
                "output": "8",
                "explanation": "For the given input grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]], the expected output is 8."
            },
            {
                "input": "grid = [[3,2],[1,0]]",
                "output": "0",
                "explanation": "For the given input grid = [[3,2],[1,0]], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Negative Numbers in a Sorted Matrix.",
        "execution_config": {
            "functionName": "countNegatives",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
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
        "id": "2ee19c5e-4e02-4601-acda-1b5d79d78f0a",
        "title": "Special Array With X Elements Greater Than or Equal X",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x. Return x if special, otherwise -1.",
        "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 1000",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,5]",
                "output": "2",
                "explanation": "For the given input nums = [3,5], the expected output is 2."
            },
            {
                "input": "nums = [0,0]",
                "output": "-1",
                "explanation": "For the given input nums = [0,0], the expected output is -1."
            },
            {
                "input": "nums = [0,4,3,0,4]",
                "output": "3",
                "explanation": "For the given input nums = [0,4,3,0,4], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Special Array With X Elements Greater Than or Equal X.",
        "execution_config": {
            "functionName": "specialArray",
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
        "id": "38f3c4f8-a84f-46c8-a9fe-dad9d75d822c",
        "title": "Split Array Largest Sum",
        "topic": "Binary Search",
        "difficulty": "Hard",
        "patterns": [
            "Binary Search on Answer"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log(sum))",
        "expected_space": "O(1)",
        "description": "Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized. Return the minimized largest sum.",
        "constraints": "1 <= nums.length <= 1000\n0 <= nums[i] <= 10^6\n1 <= k <= min(50, nums.length)",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [7,2,5,10,8], k = 2",
                "output": "18",
                "explanation": "For the given input nums = [7,2,5,10,8], k = 2, the expected output is 18."
            },
            {
                "input": "nums = [1,2,3,4,5], k = 2",
                "output": "9",
                "explanation": "For the given input nums = [1,2,3,4,5], k = 2, the expected output is 9."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Split Array Largest Sum.",
        "execution_config": {
            "functionName": "splitArray",
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
        "id": "bbb31fb7-4071-48bc-aaf2-7395763e523a",
        "title": "Magnetic Force Between Two Balls",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search on Answer"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log(max_dist))",
        "expected_space": "O(1)",
        "description": "In the universe of magnetic balls, position[i] represents a basket position. You have m balls and want to distribute them into the baskets such that the minimum magnetic force between any two balls is maximized. Return the maximum minimum force.",
        "constraints": "n == position.length\n2 <= n <= 10^5\n1 <= position[i] <= 10^9\n2 <= m <= position.length",
        "input_format": "vector<int>& position, int m",
        "output_format": "int",
        "examples": [
            {
                "input": "position = [1,2,3,4,7], m = 3",
                "output": "3",
                "explanation": "For the given input position = [1,2,3,4,7], m = 3, the expected output is 3."
            },
            {
                "input": "position = [5,4,3,2,1,1000000000], m = 2",
                "output": "999999999",
                "explanation": "For the given input position = [5,4,3,2,1,1000000000], m = 2, the expected output is 999999999."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Magnetic Force Between Two Balls.",
        "execution_config": {
            "functionName": "maxDistance",
            "returnType": "int",
            "parameters": [
                {
                    "name": "position",
                    "type": "vector<int>&"
                },
                {
                    "name": "m",
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
        "id": "6d9ddb5c-ba84-4c7b-a274-1c9c4d516e6c",
        "title": "Minimum Speed to Arrive on Time",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search on Answer"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log(max_speed))",
        "expected_space": "O(1)",
        "description": "You are given a floating point number hour representing the amount of time you have to reach the office. To commute to the office, you must take n trains in sequential order given in dist. Return the minimum positive integer speed that all trains must travel at, or -1 if impossible.",
        "constraints": "n == dist.length\n1 <= n <= 10^5\n1 <= dist[i] <= 10^5\n1 <= hour <= 10^9",
        "input_format": "vector<int>& dist, double hour",
        "output_format": "int",
        "examples": [
            {
                "input": "dist = [1,3,2], hour = 6",
                "output": "1",
                "explanation": "For the given input dist = [1,3,2], hour = 6, the expected output is 1."
            },
            {
                "input": "dist = [1,3,2], hour = 2.7",
                "output": "3",
                "explanation": "For the given input dist = [1,3,2], hour = 2.7, the expected output is 3."
            },
            {
                "input": "dist = [1,3,2], hour = 1.9",
                "output": "-1",
                "explanation": "For the given input dist = [1,3,2], hour = 1.9, the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Speed to Arrive on Time.",
        "execution_config": {
            "functionName": "minSpeedOnTime",
            "returnType": "int",
            "parameters": [
                {
                    "name": "dist",
                    "type": "vector<int>&"
                },
                {
                    "name": "hour",
                    "type": "double"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "ab644ece-8df3-404f-a83b-d440cd7653bd",
        "title": "Maximum Candies Allocated to K Children",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search on Answer"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log(max_candy))",
        "expected_space": "O(1)",
        "description": "You are given a 0-indexed integer array candies, where each element represents the number of candies in a pile, and an integer k. You want to allocate candies to k children such that each child gets the same number of candies. Return the maximum number of candies each child can get.",
        "constraints": "1 <= candies.length <= 10^5\n1 <= candies[i] <= 10^7\n1 <= k <= 10^12",
        "input_format": "vector<int>& candies, long long k",
        "output_format": "int",
        "examples": [
            {
                "input": "candies = [5,8,6], k = 3",
                "output": "5",
                "explanation": "For the given input candies = [5,8,6], k = 3, the expected output is 5."
            },
            {
                "input": "candies = [2,5], k = 11",
                "output": "0",
                "explanation": "For the given input candies = [2,5], k = 11, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Candies Allocated to K Children.",
        "execution_config": {
            "functionName": "maximumCandies",
            "returnType": "int",
            "parameters": [
                {
                    "name": "candies",
                    "type": "vector<int>&"
                },
                {
                    "name": "k",
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
        "id": "e00cf447-7e8e-4977-aaf6-2d4eda4d5bc7",
        "title": "Find K Closest Elements",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search",
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log(n - k) + k)",
        "expected_space": "O(k)",
        "description": "Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.",
        "constraints": "1 <= k <= arr.length\n1 <= arr.length <= 10^4\narr is sorted in ascending order.\n-10^4 <= arr[i], x <= 10^4",
        "input_format": "vector<int>& arr, int k, int x",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "arr = [1,2,3,4,5], k = 4, x = 3",
                "output": "[1,2,3,4]",
                "explanation": "For the given input arr = [1,2,3,4,5], k = 4, x = 3, the expected output is [1,2,3,4]."
            },
            {
                "input": "arr = [1,2,3,4,5], k = 4, x = -1",
                "output": "[1,2,3,4]",
                "explanation": "For the given input arr = [1,2,3,4,5], k = 4, x = -1, the expected output is [1,2,3,4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find K Closest Elements.",
        "execution_config": {
            "functionName": "findClosestElements",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "arr",
                    "type": "vector<int>&"
                },
                {
                    "name": "k",
                    "type": "int"
                },
                {
                    "name": "x",
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
        "id": "f4f64c6d-586d-4a54-ace6-4a4840077103",
        "title": "Intersection of Three Sorted Arrays",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search",
            "Three Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.",
        "constraints": "1 <= arr1.length, arr2.length, arr3.length <= 1000\n1 <= arr1[i], arr2[i], arr3[i] <= 2000",
        "input_format": "vector<int>& arr1, vector<int>& arr2, vector<int>& arr3",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]",
                "output": "[1,5]",
                "explanation": "For the given input arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8], the expected output is [1,5]."
            },
            {
                "input": "arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1713,1870], arr3 = [521,682,1337,1395,1764]",
                "output": "[]",
                "explanation": "For the given input arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1713,1870], arr3 = [521,682,1337,1395,1764], the expected output is []."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Intersection of Three Sorted Arrays.",
        "execution_config": {
            "functionName": "arraysIntersection",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "arr1",
                    "type": "vector<int>&"
                },
                {
                    "name": "arr2",
                    "type": "vector<int>&"
                },
                {
                    "name": "arr3",
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
        "id": "3ee41d54-7177-4ad6-aa2d-49c4b859775e",
        "title": "Painter's Partition Minimum Time",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search on Answer"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log(sum))",
        "expected_space": "O(1)",
        "description": "Given n boards of certain lengths and k painters, each painter takes 1 unit of time to paint 1 unit of board length. Find the minimum time to paint all boards under the constraint that a painter can only paint contiguous sections.",
        "constraints": "1 <= k <= boards.length <= 10^5\n1 <= boards[i] <= 10^6",
        "input_format": "vector<int>& boards, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "boards = [5,5,5,5], k = 2",
                "output": "10",
                "explanation": "For the given input boards = [5,5,5,5], k = 2, the expected output is 10."
            },
            {
                "input": "boards = [10,20,30,40], k = 2",
                "output": "60",
                "explanation": "For the given input boards = [10,20,30,40], k = 2, the expected output is 60."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Painter's Partition Minimum Time.",
        "execution_config": {
            "functionName": "paintBoards",
            "returnType": "int",
            "parameters": [
                {
                    "name": "boards",
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
        "id": "bea9a3d4-1b43-440b-a1f6-f24efd4c3594",
        "title": "Search Range in Bounded Array",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "Given a sorted integer array nums and a target, find whether target exists in nums by doubling search bounds starting from index 0.",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 <= nums[i], target <= 10^4",
        "input_format": "vector<int>& nums, int target",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [-1,0,3,5,9,12], target = 9",
                "output": "4",
                "explanation": "For the given input nums = [-1,0,3,5,9,12], target = 9, the expected output is 4."
            },
            {
                "input": "nums = [-1,0,3,5,9,12], target = 2",
                "output": "-1",
                "explanation": "For the given input nums = [-1,0,3,5,9,12], target = 2, the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Search Range in Bounded Array.",
        "execution_config": {
            "functionName": "searchBounded",
            "returnType": "int",
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
        "id": "c5fa0c76-5cec-4f4c-a00e-b5027005c635",
        "title": "Kth Missing Positive Number",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(log n)",
        "expected_space": "O(1)",
        "description": "Given an array arr of positive integers sorted in a strictly increasing order, and an integer k, return the kth positive integer that is missing from this array.",
        "constraints": "1 <= arr.length <= 1000\n1 <= arr[i] <= 1000\n1 <= k <= 1000\narr[i] < arr[j] for 1 <= i < j <= arr.length",
        "input_format": "vector<int>& arr, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [2,3,4,7,11], k = 5",
                "output": "9",
                "explanation": "For the given input arr = [2,3,4,7,11], k = 5, the expected output is 9."
            },
            {
                "input": "arr = [1,2,3,4], k = 2",
                "output": "6",
                "explanation": "For the given input arr = [1,2,3,4], k = 2, the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Kth Missing Positive Number.",
        "execution_config": {
            "functionName": "findKthPositive",
            "returnType": "int",
            "parameters": [
                {
                    "name": "arr",
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
        "id": "dea7f7db-0512-42ef-a061-d1c2ab716d37",
        "title": "Check Target Sum in Sorted Elements Array",
        "topic": "Binary Search",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search",
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a sorted array of unique integers and a target k, return true if there exist two elements in the array whose sum equals k, or false otherwise.",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 <= nums[i], k <= 10^4\nnums is sorted in strictly ascending order.",
        "input_format": "vector<int>& nums, int k",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [2,3,4,5,6,7], k = 9",
                "output": "true",
                "explanation": "For the given input nums = [2,3,4,5,6,7], k = 9, the expected output is true."
            },
            {
                "input": "nums = [2,3,4,5,6,7], k = 28",
                "output": "false",
                "explanation": "For the given input nums = [2,3,4,5,6,7], k = 28, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check Target Sum in Sorted Elements Array.",
        "execution_config": {
            "functionName": "findTargetSumSorted",
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
        "id": "9bde662b-bf67-475b-aa0d-caa96be93ab5",
        "title": "Search a 2D Matrix II Exists",
        "topic": "Binary Search",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search",
            "Two Pointers"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m + n)",
        "expected_space": "O(1)",
        "description": "Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. Integers in each row are sorted in ascending from left to right, and integers in each column are sorted in ascending from top to bottom.",
        "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= n, m <= 300\n-10^9 <= matrix[i][j], target <= 10^9",
        "input_format": "vector<vector<int>>& matrix, int target",
        "output_format": "bool",
        "examples": [
            {
                "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5",
                "output": "true",
                "explanation": "For the given input matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5, the expected output is true."
            },
            {
                "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20",
                "output": "false",
                "explanation": "For the given input matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Search a 2D Matrix II Exists.",
        "execution_config": {
            "functionName": "searchMatrixII",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "matrix",
                    "type": "vector<vector<int>>&"
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
    }
];

export default BINARY_SEARCH_PROBLEMS;
