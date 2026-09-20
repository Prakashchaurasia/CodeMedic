/**
 * Two Pointers Problems Dataset (30 problems)
 * CodeMedic Verified DSA Collection
 */

export const TWO_POINTER_PROBLEMS = [
    {
        "id": "9a76e5ae-3cee-437a-a3e7-fee22e13b361",
        "title": "Two Sum II - Input Array Is Sorted",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices [index1, index2] (1-indexed).",
        "constraints": "2 <= numbers.length <= 3 * 10^4\n-1000 <= numbers[i] <= 1000\nnumbers is sorted in non-decreasing order.\n-1000 <= target <= 1000\nThe tests are generated such that there is exactly one solution.",
        "input_format": "vector<int>& numbers, int target",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "numbers = [2,7,11,15], target = 9",
                "output": "[1,2]",
                "explanation": "For the given input numbers = [2,7,11,15], target = 9, the expected output is [1,2]."
            },
            {
                "input": "numbers = [2,3,4], target = 6",
                "output": "[1,3]",
                "explanation": "For the given input numbers = [2,3,4], target = 6, the expected output is [1,3]."
            },
            {
                "input": "numbers = [-1,0], target = -1",
                "output": "[1,2]",
                "explanation": "For the given input numbers = [-1,0], target = -1, the expected output is [1,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Two Sum II - Input Array Is Sorted.",
        "execution_config": {
            "functionName": "twoSum",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "numbers",
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
        "id": "326a1276-0ec1-4326-ad02-9dbe26325333",
        "title": "Container With Most Water",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
        "constraints": "n == height.length\n2 <= n <= 10^5\n0 <= height[i] <= 10^4",
        "input_format": "vector<int>& height",
        "output_format": "int",
        "examples": [
            {
                "input": "height = [1,8,6,2,5,4,8,3,7]",
                "output": "49",
                "explanation": "For the given input height = [1,8,6,2,5,4,8,3,7], the expected output is 49."
            },
            {
                "input": "height = [1,1]",
                "output": "1",
                "explanation": "For the given input height = [1,1], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Container With Most Water.",
        "execution_config": {
            "functionName": "maxArea",
            "returnType": "int",
            "parameters": [
                {
                    "name": "height",
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
        "id": "a792a3ec-ce68-45e7-af31-8fd7eee9af0a",
        "title": "Trapping Rain Water",
        "topic": "Two Pointers",
        "difficulty": "Hard",
        "patterns": [
            "Two Pointers",
            "Dynamic Programming"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        "constraints": "n == height.length\n1 <= n <= 2 * 10^4\n0 <= height[i] <= 10^5",
        "input_format": "vector<int>& height",
        "output_format": "int",
        "examples": [
            {
                "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
                "output": "6",
                "explanation": "For the given input height = [0,1,0,2,1,0,1,3,2,1,2,1], the expected output is 6."
            },
            {
                "input": "height = [4,2,0,3,2,5]",
                "output": "9",
                "explanation": "For the given input height = [4,2,0,3,2,5], the expected output is 9."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Trapping Rain Water.",
        "execution_config": {
            "functionName": "trap",
            "returnType": "int",
            "parameters": [
                {
                    "name": "height",
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
        "id": "dc9ec10b-c586-4287-a03e-aa504f37e875",
        "title": "3Sum Closest",
        "topic": "Two Pointers",
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
        "description": "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers.",
        "constraints": "3 <= nums.length <= 500\n-1000 <= nums[i] <= 1000\n-10^4 <= target <= 10^4",
        "input_format": "vector<int>& nums, int target",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [-1,2,1,-4], target = 1",
                "output": "2",
                "explanation": "For the given input nums = [-1,2,1,-4], target = 1, the expected output is 2."
            },
            {
                "input": "nums = [0,0,0], target = 1",
                "output": "0",
                "explanation": "For the given input nums = [0,0,0], target = 1, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for 3Sum Closest.",
        "execution_config": {
            "functionName": "threeSumClosest",
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
        "id": "80be7159-bd84-4777-acd4-dd8f194d6073",
        "title": "Sort Colors (Dutch National Flag)",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red (0), white (1), and blue (2).",
        "constraints": "n == nums.length\n1 <= n <= 300\nnums[i] is either 0, 1, or 2.",
        "input_format": "vector<int>& nums",
        "output_format": "void",
        "examples": [
            {
                "input": "nums = [2,0,2,1,1,0]",
                "output": "[0,0,1,1,2,2]",
                "explanation": "For the given input nums = [2,0,2,1,1,0], the expected output is [0,0,1,1,2,2]."
            },
            {
                "input": "nums = [2,0,1]",
                "output": "[0,1,2]",
                "explanation": "For the given input nums = [2,0,1], the expected output is [0,1,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sort Colors (Dutch National Flag).",
        "execution_config": {
            "functionName": "sortColors",
            "returnType": "void",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
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
        "id": "4dac6ed2-43c2-4a68-a2f2-fbb8bcff4223",
        "title": "Valid Palindrome",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Return true if it is a palindrome, or false otherwise.",
        "constraints": "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
        "input_format": "string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"A man, a plan, a canal: Panama\"",
                "output": "true",
                "explanation": "For the given input s = \"A man, a plan, a canal: Panama\", the expected output is true."
            },
            {
                "input": "s = \"race a car\"",
                "output": "false",
                "explanation": "For the given input s = \"race a car\", the expected output is false."
            },
            {
                "input": "s = \" \"",
                "output": "true",
                "explanation": "For the given input s = \" \", the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Valid Palindrome.",
        "execution_config": {
            "functionName": "isPalindrome",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "s",
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
        "id": "c17da50a-c5bd-4368-a9fa-be9eaf1b32ef",
        "title": "Longest Substring Without Repeating Characters",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Sliding Window",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(min(n, m))",
        "description": "Given a string s, find the length of the longest substring without repeating characters.",
        "constraints": "0 <= s.length <= 5 * 10^4\ns consists of English letters, digits, symbols and spaces.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"abcabcbb\"",
                "output": "3",
                "explanation": "For the given input s = \"abcabcbb\", the expected output is 3."
            },
            {
                "input": "s = \"bbbbb\"",
                "output": "1",
                "explanation": "For the given input s = \"bbbbb\", the expected output is 1."
            },
            {
                "input": "s = \"pwwkew\"",
                "output": "3",
                "explanation": "For the given input s = \"pwwkew\", the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Substring Without Repeating Characters.",
        "execution_config": {
            "functionName": "lengthOfLongestSubstring",
            "returnType": "int",
            "parameters": [
                {
                    "name": "s",
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
        "id": "47ddb1e0-a109-46a5-aa5e-809336489437",
        "title": "Max Consecutive Ones III",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Sliding Window"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
        "constraints": "1 <= nums.length <= 10^5\nnums[i] is either 0 or 1.\n0 <= k <= nums.length",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
                "output": "6",
                "explanation": "For the given input nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2, the expected output is 6."
            },
            {
                "input": "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3",
                "output": "10",
                "explanation": "For the given input nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3, the expected output is 10."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Max Consecutive Ones III.",
        "execution_config": {
            "functionName": "longestOnes",
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
        "id": "2e9d16d8-d2dd-413a-a272-edb043801b43",
        "title": "Minimum Size Subarray Sum",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Sliding Window"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target. If there is no such subarray, return 0.",
        "constraints": "1 <= target <= 10^9\n1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^4",
        "input_format": "int target, vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "target = 7, nums = [2,3,1,2,4,3]",
                "output": "2",
                "explanation": "For the given input target = 7, nums = [2,3,1,2,4,3], the expected output is 2."
            },
            {
                "input": "target = 4, nums = [1,4,4]",
                "output": "1",
                "explanation": "For the given input target = 4, nums = [1,4,4], the expected output is 1."
            },
            {
                "input": "target = 11, nums = [1,1,1,1,1,1,1,1]",
                "output": "0",
                "explanation": "For the given input target = 11, nums = [1,1,1,1,1,1,1,1], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Size Subarray Sum.",
        "execution_config": {
            "functionName": "minSubArrayLen",
            "returnType": "int",
            "parameters": [
                {
                    "name": "target",
                    "type": "int"
                },
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
        "id": "66ce0b31-cafe-45d9-aca4-27096fa295d5",
        "title": "Fruit Into Baskets",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Sliding Window",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are visiting a farm that has a single row of fruit trees represented by an integer array fruits. You have two baskets, and each basket can only hold a single type of fruit. Return the maximum number of fruits you can pick.",
        "constraints": "1 <= fruits.length <= 10^5\n0 <= fruits[i] < fruits.length",
        "input_format": "vector<int>& fruits",
        "output_format": "int",
        "examples": [
            {
                "input": "fruits = [1,2,1]",
                "output": "3",
                "explanation": "For the given input fruits = [1,2,1], the expected output is 3."
            },
            {
                "input": "fruits = [0,1,2,2]",
                "output": "3",
                "explanation": "For the given input fruits = [0,1,2,2], the expected output is 3."
            },
            {
                "input": "fruits = [1,2,3,2,2]",
                "output": "4",
                "explanation": "For the given input fruits = [1,2,3,2,2], the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Fruit Into Baskets.",
        "execution_config": {
            "functionName": "totalFruit",
            "returnType": "int",
            "parameters": [
                {
                    "name": "fruits",
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
        "id": "7b58179f-e75a-434a-ada8-11407a10b2bf",
        "title": "Squares of a Sorted Array",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in non-decreasing order.",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [-4,-1,0,3,10]",
                "output": "[0,1,9,16,100]",
                "explanation": "For the given input nums = [-4,-1,0,3,10], the expected output is [0,1,9,16,100]."
            },
            {
                "input": "nums = [-7,-3,2,3,11]",
                "output": "[4,9,9,49,121]",
                "explanation": "For the given input nums = [-7,-3,2,3,11], the expected output is [4,9,9,49,121]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Squares of a Sorted Array.",
        "execution_config": {
            "functionName": "sortedSquares",
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
        "id": "abbfd465-4996-4b58-a4cb-51f38b4dd4e1",
        "title": "Boats to Save People",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry at most limit weight and at most 2 people. Return the minimum number of boats to carry every given person.",
        "constraints": "1 <= people.length <= 5 * 10^4\n1 <= people[i] <= limit <= 3 * 10^4",
        "input_format": "vector<int>& people, int limit",
        "output_format": "int",
        "examples": [
            {
                "input": "people = [1,2], limit = 3",
                "output": "1",
                "explanation": "For the given input people = [1,2], limit = 3, the expected output is 1."
            },
            {
                "input": "people = [3,2,2,1], limit = 3",
                "output": "3",
                "explanation": "For the given input people = [3,2,2,1], limit = 3, the expected output is 3."
            },
            {
                "input": "people = [3,5,3,4], limit = 5",
                "output": "4",
                "explanation": "For the given input people = [3,5,3,4], limit = 5, the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Boats to Save People.",
        "execution_config": {
            "functionName": "numRescueBoats",
            "returnType": "int",
            "parameters": [
                {
                    "name": "people",
                    "type": "vector<int>&"
                },
                {
                    "name": "limit",
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
        "id": "f0503d88-1aa1-4ef3-a6a6-796a2407cc21",
        "title": "Backspace String Compare",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers",
            "Stack"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(1)",
        "description": "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.",
        "constraints": "1 <= s.length, t.length <= 200\ns and t only contain lowercase letters and '#' characters.",
        "input_format": "string s, string t",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"ab#c\", t = \"ad#c\"",
                "output": "true",
                "explanation": "For the given input s = \"ab#c\", t = \"ad#c\", the expected output is true."
            },
            {
                "input": "s = \"ab##\", t = \"c#d#\"",
                "output": "true",
                "explanation": "For the given input s = \"ab##\", t = \"c#d#\", the expected output is true."
            },
            {
                "input": "s = \"a#c\", t = \"b\"",
                "output": "false",
                "explanation": "For the given input s = \"a#c\", t = \"b\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Backspace String Compare.",
        "execution_config": {
            "functionName": "backspaceCompare",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "s",
                    "type": "string"
                },
                {
                    "name": "t",
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
        "id": "50a5dbe0-5265-4bab-a8ab-8b4d18961a10",
        "title": "Remove Duplicates from Sorted Array II Count",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. Return the count k of elements remaining.",
        "constraints": "1 <= nums.length <= 3 * 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in non-decreasing order.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,1,1,2,2,3]",
                "output": "5",
                "explanation": "For the given input nums = [1,1,1,2,2,3], the expected output is 5."
            },
            {
                "input": "nums = [0,0,1,1,1,1,2,3,3]",
                "output": "7",
                "explanation": "For the given input nums = [0,0,1,1,1,1,2,3,3], the expected output is 7."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove Duplicates from Sorted Array II Count.",
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
        "id": "408ac9d0-c80e-41de-a8e1-70c09499925b",
        "title": "Shortest Unsorted Continuous Subarray",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order. Return the shortest such subarray's length.",
        "constraints": "1 <= nums.length <= 10^4\n-10^5 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,6,4,8,10,9,15]",
                "output": "5",
                "explanation": "For the given input nums = [2,6,4,8,10,9,15], the expected output is 5."
            },
            {
                "input": "nums = [1,2,3,4]",
                "output": "0",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is 0."
            },
            {
                "input": "nums = [1]",
                "output": "0",
                "explanation": "For the given input nums = [1], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Shortest Unsorted Continuous Subarray.",
        "execution_config": {
            "functionName": "findUnsortedSubarray",
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
        "id": "3f97f215-e56c-4429-afbc-fa8e4bff1b6f",
        "title": "Move Zeroes to End",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place.",
        "constraints": "1 <= nums.length <= 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
        "input_format": "vector<int>& nums",
        "output_format": "void",
        "examples": [
            {
                "input": "nums = [0,1,0,3,12]",
                "output": "[1,3,12,0,0]",
                "explanation": "For the given input nums = [0,1,0,3,12], the expected output is [1,3,12,0,0]."
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
        "learning_objective": "Master algorithmic problem solving for Move Zeroes to End.",
        "execution_config": {
            "functionName": "moveZeroes",
            "returnType": "void",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
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
        "id": "c227d451-5f3b-4fa7-aff7-ec71a95af804",
        "title": "Partition Labels",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Greedy"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.",
        "constraints": "1 <= s.length <= 500\ns consists of lowercase English letters.",
        "input_format": "string s",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "s = \"ababcbacadefegdehijhklij\"",
                "output": "[9,7,8]",
                "explanation": "For the given input s = \"ababcbacadefegdehijhklij\", the expected output is [9,7,8]."
            },
            {
                "input": "s = \"eccbbbbdec\"",
                "output": "[10]",
                "explanation": "For the given input s = \"eccbbbbdec\", the expected output is [10]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Partition Labels.",
        "execution_config": {
            "functionName": "partitionLabels",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "s",
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
        "id": "c82e0fb8-191b-42a6-a3b0-c2c055b1fbbc",
        "title": "Character Replacement Longest Substring Length",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Sliding Window"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character at most k times. Return the length of the longest substring containing the same letter.",
        "constraints": "1 <= s.length <= 10^5\ns consists of only uppercase English letters.\n0 <= k <= s.length",
        "input_format": "string s, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"ABAB\", k = 2",
                "output": "4",
                "explanation": "For the given input s = \"ABAB\", k = 2, the expected output is 4."
            },
            {
                "input": "s = \"AABABBA\", k = 1",
                "output": "4",
                "explanation": "For the given input s = \"AABABBA\", k = 1, the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Character Replacement Longest Substring Length.",
        "execution_config": {
            "functionName": "characterReplacement",
            "returnType": "int",
            "parameters": [
                {
                    "name": "s",
                    "type": "string"
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
        "id": "54539cbc-82e4-4840-a7da-c676522ea69b",
        "title": "Count Pairs with Absolute Difference At Most K",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j and |nums[i] - nums[j]| <= k.",
        "constraints": "1 <= nums.length <= 10^4\n0 <= nums[i] <= 10^5\n0 <= k <= 10^5",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,3,1], k = 1",
                "output": "1",
                "explanation": "For the given input nums = [1,3,1], k = 1, the expected output is 1."
            },
            {
                "input": "nums = [1,1,1], k = 2",
                "output": "3",
                "explanation": "For the given input nums = [1,1,1], k = 2, the expected output is 3."
            },
            {
                "input": "nums = [1,2,3,4], k = 1",
                "output": "3",
                "explanation": "For the given input nums = [1,2,3,4], k = 1, the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Pairs with Absolute Difference At Most K.",
        "execution_config": {
            "functionName": "countPairsDifferenceAtMostK",
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
        "id": "e7efe7c8-c107-4dc5-a736-dd3135996eb9",
        "title": "Count Subarrays with Score Less Than K",
        "topic": "Two Pointers",
        "difficulty": "Hard",
        "patterns": [
            "Sliding Window"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "The score of an array is defined as the product of its sum and its length. Given an array of positive integers nums and an integer k, return the number of non-empty subarrays whose score is strictly less than k.",
        "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^5\n1 <= k <= 10^15",
        "input_format": "vector<int>& nums, long long k",
        "output_format": "long long",
        "examples": [
            {
                "input": "nums = [2,1,4,3,5], k = 10",
                "output": "6",
                "explanation": "For the given input nums = [2,1,4,3,5], k = 10, the expected output is 6."
            },
            {
                "input": "nums = [1,1,1], k = 5",
                "output": "5",
                "explanation": "For the given input nums = [1,1,1], k = 5, the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Subarrays with Score Less Than K.",
        "execution_config": {
            "functionName": "countSubarraysScoreLessThanK",
            "returnType": "long long",
            "parameters": [
                {
                    "name": "nums",
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
        "id": "99a50939-0e7e-4b5b-a5c5-c863ee6d6796",
        "title": "Minimum Difference Between Highest and Lowest of K Scores",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Sliding Window",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k. Pick the scores of any k students such that the difference between the highest and lowest score is minimized. Return the minimum possible difference.",
        "constraints": "1 <= k <= nums.length <= 1000\n0 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [90], k = 1",
                "output": "0",
                "explanation": "For the given input nums = [90], k = 1, the expected output is 0."
            },
            {
                "input": "nums = [9,4,1,7], k = 2",
                "output": "2",
                "explanation": "For the given input nums = [9,4,1,7], k = 2, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Difference Between Highest and Lowest of K Scores.",
        "execution_config": {
            "functionName": "minimumDifference",
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
        "id": "613cecda-b574-48ec-ab5b-3e689fd09c39",
        "title": "Longest Semi-Repetitive Substring",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Sliding Window"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "A string is semi-repetitive if there is at most one pair of adjacent digits that are equal. Given a digit string s, return the length of the longest semi-repetitive substring inside s.",
        "constraints": "1 <= s.length <= 50\ns consists of digits '0' through '9'.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"52233\"",
                "output": "4",
                "explanation": "For the given input s = \"52233\", the expected output is 4."
            },
            {
                "input": "s = \"5494\"",
                "output": "4",
                "explanation": "For the given input s = \"5494\", the expected output is 4."
            },
            {
                "input": "s = \"1111111\"",
                "output": "2",
                "explanation": "For the given input s = \"1111111\", the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Semi-Repetitive Substring.",
        "execution_config": {
            "functionName": "longestSemiRepetitiveSubstring",
            "returnType": "int",
            "parameters": [
                {
                    "name": "s",
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
        "id": "5847a38c-bd8e-4535-aabb-653e17e04d41",
        "title": "Count Subarrays of Size K with Distinct Elements",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Sliding Window",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(k)",
        "description": "Given an integer array nums and an integer k, return the number of subarrays of length k with all distinct elements.",
        "constraints": "1 <= k <= nums.length <= 10^5\n1 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,5,4,2,9,9,9], k = 3",
                "output": "3",
                "explanation": "For the given input nums = [1,5,4,2,9,9,9], k = 3, the expected output is 3."
            },
            {
                "input": "nums = [4,4,4], k = 3",
                "output": "0",
                "explanation": "For the given input nums = [4,4,4], k = 3, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Subarrays of Size K with Distinct Elements.",
        "execution_config": {
            "functionName": "countGoodSubarrays",
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
        "id": "655e2157-955f-437f-ad63-d66c83d85474",
        "title": "Number of Subarrays with Bounded Maximum",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right].",
        "constraints": "1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^9\n0 <= left <= right <= 10^9",
        "input_format": "vector<int>& nums, int left, int right",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,1,4,3], left = 2, right = 3",
                "output": "3",
                "explanation": "For the given input nums = [2,1,4,3], left = 2, right = 3, the expected output is 3."
            },
            {
                "input": "nums = [2,9,2,5,6], left = 2, right = 8",
                "output": "7",
                "explanation": "For the given input nums = [2,9,2,5,6], left = 2, right = 8, the expected output is 7."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of Subarrays with Bounded Maximum.",
        "execution_config": {
            "functionName": "numSubarrayBoundedMax",
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
    },
    {
        "id": "7f2b8ec4-624b-49c5-a319-b20a76b94ce7",
        "title": "Intersection of Two Sorted Arrays With Two Pointers",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(min(n, m))",
        "description": "Given two sorted arrays arr1 and arr2, return an array representing their intersection using two pointers.",
        "constraints": "1 <= arr1.length, arr2.length <= 1000\nBoth arrays are sorted in ascending order.",
        "input_format": "vector<int>& arr1, vector<int>& arr2",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "arr1 = [1,2,3,4,5], arr2 = [2,4,6,8]",
                "output": "[2,4]",
                "explanation": "For the given input arr1 = [1,2,3,4,5], arr2 = [2,4,6,8], the expected output is [2,4]."
            },
            {
                "input": "arr1 = [1,1,2,2], arr2 = [2,2,3]",
                "output": "[2]",
                "explanation": "For the given input arr1 = [1,1,2,2], arr2 = [2,2,3], the expected output is [2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Intersection of Two Sorted Arrays With Two Pointers.",
        "execution_config": {
            "functionName": "sortedIntersection",
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
        "id": "6228d03a-23a3-4f90-a34d-15efa2ed83e2",
        "title": "Assign Cookies Maximum Content Children",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers",
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n + m log m)",
        "expected_space": "O(1)",
        "description": "Assume you are an awesome parent and want to give your children some cookies. Each child i has a greed factor g[i], and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i. Maximize the number of your content children.",
        "constraints": "1 <= g.length <= 3 * 10^4\n0 <= s.length <= 3 * 10^4\n1 <= g[i], s[j] <= 2^31 - 1",
        "input_format": "vector<int>& g, vector<int>& s",
        "output_format": "int",
        "examples": [
            {
                "input": "g = [1,2,3], s = [1,1]",
                "output": "1",
                "explanation": "For the given input g = [1,2,3], s = [1,1], the expected output is 1."
            },
            {
                "input": "g = [1,2], s = [1,2,3]",
                "output": "2",
                "explanation": "For the given input g = [1,2], s = [1,2,3], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Assign Cookies Maximum Content Children.",
        "execution_config": {
            "functionName": "findContentChildren",
            "returnType": "int",
            "parameters": [
                {
                    "name": "g",
                    "type": "vector<int>&"
                },
                {
                    "name": "s",
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
        "id": "4ed04a36-bedf-449f-aece-800b3c4e716d",
        "title": "Duplicate Zeros In-Place",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right. Elements beyond the original length are discarded.",
        "constraints": "1 <= arr.length <= 10^4\n0 <= arr[i] <= 9",
        "input_format": "vector<int>& arr",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "arr = [1,0,2,3,0,4,5,0]",
                "output": "[1,0,0,2,3,0,0,4]",
                "explanation": "For the given input arr = [1,0,2,3,0,4,5,0], the expected output is [1,0,0,2,3,0,0,4]."
            },
            {
                "input": "arr = [1,2,3]",
                "output": "[1,2,3]",
                "explanation": "For the given input arr = [1,2,3], the expected output is [1,2,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Duplicate Zeros In-Place.",
        "execution_config": {
            "functionName": "duplicateZeros",
            "returnType": "vector<int>",
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
        "id": "eb973871-e114-41f5-a69d-d488d0603ea2",
        "title": "Valid Mountain Array",
        "topic": "Two Pointers",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of integers arr, return true if and only if it is a valid mountain array. An array is a mountain array if arr.length >= 3 and there exists an index i such that elements strictly increase up to i and strictly decrease thereafter.",
        "constraints": "1 <= arr.length <= 10^4\n0 <= arr[i] <= 10^4",
        "input_format": "vector<int>& arr",
        "output_format": "bool",
        "examples": [
            {
                "input": "arr = [2,1]",
                "output": "false",
                "explanation": "For the given input arr = [2,1], the expected output is false."
            },
            {
                "input": "arr = [3,5,5]",
                "output": "false",
                "explanation": "For the given input arr = [3,5,5], the expected output is false."
            },
            {
                "input": "arr = [0,3,2,1]",
                "output": "true",
                "explanation": "For the given input arr = [0,3,2,1], the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Valid Mountain Array.",
        "execution_config": {
            "functionName": "validMountainArray",
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
        "id": "9487e4d8-1d5b-48e5-a4d2-bd4626c65e50",
        "title": "Frequency of Smallest Character Comparison Count",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Binary Search"
        ],
        "data_structures": [
            "Array",
            "String"
        ],
        "expected_time": "O((n + m) * L)",
        "expected_space": "O(n)",
        "description": "Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. Given queries and words arrays, return an array answer where answer[i] is the number of words such that f(queries[i]) < f(W).",
        "constraints": "1 <= queries.length <= 2000\n1 <= words.length <= 2000\n1 <= queries[i].length, words[i].length <= 10",
        "input_format": "vector<string>& queries, vector<string>& words",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "queries = [\"cbd\"], words = [\"zaaaz\"]",
                "output": "[1]",
                "explanation": "For the given input queries = [\"cbd\"], words = [\"zaaaz\"], the expected output is [1]."
            },
            {
                "input": "queries = [\"bbb\",\"cc\"], words = [\"a\",\"aa\",\"aaa\",\"aaaa\"]",
                "output": "[1,2]",
                "explanation": "For the given input queries = [\"bbb\",\"cc\"], words = [\"a\",\"aa\",\"aaa\",\"aaaa\"], the expected output is [1,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Frequency of Smallest Character Comparison Count.",
        "execution_config": {
            "functionName": "numSmallerByFrequency",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "queries",
                    "type": "vector<string>&"
                },
                {
                    "name": "words",
                    "type": "vector<string>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "d6da0ff5-fa05-4bfb-a018-cc8bdb331e35",
        "title": "Maximum Erasure Value",
        "topic": "Two Pointers",
        "difficulty": "Medium",
        "patterns": [
            "Sliding Window",
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements. Return the maximum score you can get by erasing exactly one subarray.",
        "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^4",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [4,2,4,5,6]",
                "output": "17",
                "explanation": "For the given input nums = [4,2,4,5,6], the expected output is 17."
            },
            {
                "input": "nums = [5,2,1,2,5,2,1,2,5]",
                "output": "8",
                "explanation": "For the given input nums = [5,2,1,2,5,2,1,2,5], the expected output is 8."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Erasure Value.",
        "execution_config": {
            "functionName": "maximumUniqueSubarray",
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

export default TWO_POINTER_PROBLEMS;
