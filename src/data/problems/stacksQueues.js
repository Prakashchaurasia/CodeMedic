/**
 * Stacks & Queues Problems Dataset (40 problems)
 * CodeMedic Verified DSA Collection
 */

export const STACK_QUEUE_PROBLEMS = [
    {
        "id": "e93c6e3c-e62d-4a59-af71-f2d369d202fe",
        "title": "Valid Parentheses",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.",
        "constraints": "1 <= s.length <= 10^4\ns consists of parentheses only '()[]{}'.",
        "input_format": "string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"()\"",
                "output": "true",
                "explanation": "For the given input s = \"()\", the expected output is true."
            },
            {
                "input": "s = \"()[]{}\"",
                "output": "true",
                "explanation": "For the given input s = \"()[]{}\", the expected output is true."
            },
            {
                "input": "s = \"(]\"",
                "output": "false",
                "explanation": "For the given input s = \"(]\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Valid Parentheses.",
        "execution_config": {
            "functionName": "isValid",
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
        "id": "f79a5d68-df8e-4249-a192-524ecb96974d",
        "title": "Evaluate Reverse Polish Notation",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression and return an integer that represents the value of the expression.",
        "constraints": "1 <= tokens.length <= 10^4\ntokens[i] is either an operator: \"+\", \"-\", \"*\", or \"/\", or an integer in the range [-200, 200].",
        "input_format": "vector<string>& tokens",
        "output_format": "int",
        "examples": [
            {
                "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
                "output": "9",
                "explanation": "For the given input tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"], the expected output is 9."
            },
            {
                "input": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]",
                "output": "6",
                "explanation": "For the given input tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"], the expected output is 6."
            },
            {
                "input": "tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]",
                "output": "22",
                "explanation": "For the given input tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"], the expected output is 22."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Evaluate Reverse Polish Notation.",
        "execution_config": {
            "functionName": "evalRPN",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tokens",
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
        "id": "b1b5279f-686c-4a2d-adf7-306eea369bff",
        "title": "Daily Temperatures",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0.",
        "constraints": "1 <= temperatures.length <= 10^5\n30 <= temperatures[i] <= 100",
        "input_format": "vector<int>& temperatures",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "temperatures = [73,74,75,71,69,72,76,73]",
                "output": "[1,1,4,2,1,1,0,0]",
                "explanation": "For the given input temperatures = [73,74,75,71,69,72,76,73], the expected output is [1,1,4,2,1,1,0,0]."
            },
            {
                "input": "temperatures = [30,40,50,60]",
                "output": "[1,1,1,0]",
                "explanation": "For the given input temperatures = [30,40,50,60], the expected output is [1,1,1,0]."
            },
            {
                "input": "temperatures = [30,60,90]",
                "output": "[1,1,0]",
                "explanation": "For the given input temperatures = [30,60,90], the expected output is [1,1,0]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Daily Temperatures.",
        "execution_config": {
            "functionName": "dailyTemperatures",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "temperatures",
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
        "id": "52f99a8e-94bc-4b1d-af3d-0f27c5cf0fd5",
        "title": "Next Greater Element I",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Monotonic Stack",
            "Hashing"
        ],
        "data_structures": [
            "Stack",
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(m)",
        "description": "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array. Given two distinct arrays nums1 and nums2 where nums1 is a subset of nums2, find the next greater element for each value in nums1.",
        "constraints": "1 <= nums1.length <= nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 10^4\nAll integers in nums1 and nums2 are unique.\nAll the integers of nums1 also appear in nums2.",
        "input_format": "vector<int>& nums1, vector<int>& nums2",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums1 = [4,1,2], nums2 = [1,3,4,2]",
                "output": "[-1,3,-1]",
                "explanation": "For the given input nums1 = [4,1,2], nums2 = [1,3,4,2], the expected output is [-1,3,-1]."
            },
            {
                "input": "nums1 = [2,4], nums2 = [1,2,3,4]",
                "output": "[3,-1]",
                "explanation": "For the given input nums1 = [2,4], nums2 = [1,2,3,4], the expected output is [3,-1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Next Greater Element I.",
        "execution_config": {
            "functionName": "nextGreaterElement",
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
        "id": "74639755-f0d9-4805-ae41-ba8ec3b73887",
        "title": "Next Greater Element II Circular Array",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums. If it doesn't exist, return -1 for this number.",
        "constraints": "1 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,2,1]",
                "output": "[2,-1,2]",
                "explanation": "For the given input nums = [1,2,1], the expected output is [2,-1,2]."
            },
            {
                "input": "nums = [1,2,3,4,3]",
                "output": "[2,3,4,-1,4]",
                "explanation": "For the given input nums = [1,2,3,4,3], the expected output is [2,3,4,-1,4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Next Greater Element II Circular Array.",
        "execution_config": {
            "functionName": "nextGreaterElements",
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
        "id": "c051c9a5-bfee-40e6-a945-06cd54b52b85",
        "title": "Asteroid Collision",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "We are given an array asteroids of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive = right, negative = left). Each asteroid moves at the same speed. Find the state of the asteroids after all collisions.",
        "constraints": "2 <= asteroids.length <= 10^4\n-1000 <= asteroids[i] <= 1000\nasteroids[i] != 0",
        "input_format": "vector<int>& asteroids",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "asteroids = [5,10,-5]",
                "output": "[5,10]",
                "explanation": "For the given input asteroids = [5,10,-5], the expected output is [5,10]."
            },
            {
                "input": "asteroids = [8,-8]",
                "output": "[]",
                "explanation": "For the given input asteroids = [8,-8], the expected output is []."
            },
            {
                "input": "asteroids = [10,2,-5]",
                "output": "[10]",
                "explanation": "For the given input asteroids = [10,2,-5], the expected output is [10]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Asteroid Collision.",
        "execution_config": {
            "functionName": "asteroidCollision",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "asteroids",
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
        "id": "064b2b29-7e5b-48e9-a864-05071832a1f3",
        "title": "Largest Rectangle in Histogram",
        "topic": "Stacks & Queues",
        "difficulty": "Hard",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
        "constraints": "1 <= heights.length <= 10^5\n0 <= heights[i] <= 10^4",
        "input_format": "vector<int>& heights",
        "output_format": "int",
        "examples": [
            {
                "input": "heights = [2,1,5,6,2,3]",
                "output": "10",
                "explanation": "For the given input heights = [2,1,5,6,2,3], the expected output is 10."
            },
            {
                "input": "heights = [2,4]",
                "output": "4",
                "explanation": "For the given input heights = [2,4], the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Largest Rectangle in Histogram.",
        "execution_config": {
            "functionName": "largestRectangleArea",
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
        "id": "7cbf3064-d06c-497c-ad9a-02a8f0fb3fa2",
        "title": "Sliding Window Maximum",
        "topic": "Stacks & Queues",
        "difficulty": "Hard",
        "patterns": [
            "Monotonic Queue",
            "Sliding Window"
        ],
        "data_structures": [
            "Deque",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(k)",
        "description": "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. Return the max sliding window.",
        "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\n1 <= k <= nums.length",
        "input_format": "vector<int>& nums, int k",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
                "output": "[3,3,5,5,6,7]",
                "explanation": "For the given input nums = [1,3,-1,-3,5,3,6,7], k = 3, the expected output is [3,3,5,5,6,7]."
            },
            {
                "input": "nums = [1], k = 1",
                "output": "[1]",
                "explanation": "For the given input nums = [1], k = 1, the expected output is [1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sliding Window Maximum.",
        "execution_config": {
            "functionName": "maxSlidingWindow",
            "returnType": "vector<int>",
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
        "id": "758a20f5-0598-4e31-a96c-b3caafc1fcb5",
        "title": "Remove Duplicate Letters Lexicographically Smallest",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack",
            "Greedy"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.",
        "constraints": "1 <= s.length <= 10^4\ns consists of lowercase English letters.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"bcabc\"",
                "output": "\"abc\"",
                "explanation": "For the given input s = \"bcabc\", the expected output is \"abc\"."
            },
            {
                "input": "s = \"cbacdcbc\"",
                "output": "\"acdb\"",
                "explanation": "For the given input s = \"cbacdcbc\", the expected output is \"acdb\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove Duplicate Letters Lexicographically Smallest.",
        "execution_config": {
            "functionName": "removeDuplicateLetters",
            "returnType": "string",
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
        "id": "00fae76d-6a62-4322-a61c-bea2cd865261",
        "title": "Minimum Remove to Make Valid Parentheses",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack",
            "String"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string s of '(' , ')' and lowercase English characters. Remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.",
        "constraints": "1 <= s.length <= 10^5\ns[i] is either '(' , ')', or lowercase English letter.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"lee(t(c)o)de)\"",
                "output": "\"lee(t(c)o)de\"",
                "explanation": "For the given input s = \"lee(t(c)o)de)\", the expected output is \"lee(t(c)o)de\"."
            },
            {
                "input": "s = \"a)b(c)d\"",
                "output": "\"ab(c)d\"",
                "explanation": "For the given input s = \"a)b(c)d\", the expected output is \"ab(c)d\"."
            },
            {
                "input": "s = \")(\"",
                "output": "\"\"",
                "explanation": "For the given input s = \")(\", the expected output is \"\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Remove to Make Valid Parentheses.",
        "execution_config": {
            "functionName": "minRemoveToMakeValid",
            "returnType": "string",
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
        "id": "6cb6d49f-c3a4-4e25-abc2-2c8818e885b5",
        "title": "Validate Stack Sequences",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack",
            "Simulation"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.",
        "constraints": "1 <= pushed.length <= 1000\n0 <= pushed[i] <= 1000\nAll the elements of pushed are unique.\npopped.length == pushed.length\npopped is a permutation of pushed.",
        "input_format": "vector<int>& pushed, vector<int>& popped",
        "output_format": "bool",
        "examples": [
            {
                "input": "pushed = [1,2,3,4,5], popped = [4,5,3,2,1]",
                "output": "true",
                "explanation": "For the given input pushed = [1,2,3,4,5], popped = [4,5,3,2,1], the expected output is true."
            },
            {
                "input": "pushed = [1,2,3,4,5], popped = [4,3,5,1,2]",
                "output": "false",
                "explanation": "For the given input pushed = [1,2,3,4,5], popped = [4,3,5,1,2], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Validate Stack Sequences.",
        "execution_config": {
            "functionName": "validateStackSequences",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "pushed",
                    "type": "vector<int>&"
                },
                {
                    "name": "popped",
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
        "id": "58660293-6f4d-4bec-a66b-c5378aa0b0e0",
        "title": "132 Pattern Exists",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j]. Return true if there is a 132 pattern in nums.",
        "constraints": "n == nums.length\n1 <= n <= 2 * 10^5\n-10^9 <= nums[i] <= 10^9",
        "input_format": "vector<int>& nums",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [1,2,3,4]",
                "output": "false",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is false."
            },
            {
                "input": "nums = [3,1,4,2]",
                "output": "true",
                "explanation": "For the given input nums = [3,1,4,2], the expected output is true."
            },
            {
                "input": "nums = [-1,3,2,0]",
                "output": "true",
                "explanation": "For the given input nums = [-1,3,2,0], the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for 132 Pattern Exists.",
        "execution_config": {
            "functionName": "find132pattern",
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
        "id": "c879ae54-2ac2-4c04-a346-0d776f925cfb",
        "title": "Baseball Game Total Points",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Stack",
            "Simulation"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record. Given a list of operations, calculate the final sum of the points.",
        "constraints": "1 <= operations.length <= 1000\noperations[i] is \"C\", \"D\", \"+\", or a string representing an integer in range [-3 * 10^4, 3 * 10^4].",
        "input_format": "vector<string>& operations",
        "output_format": "int",
        "examples": [
            {
                "input": "operations = [\"5\",\"2\",\"C\",\"D\",\"+\"]",
                "output": "30",
                "explanation": "For the given input operations = [\"5\",\"2\",\"C\",\"D\",\"+\"], the expected output is 30."
            },
            {
                "input": "operations = [\"5\",\"-2\",\"4\",\"C\",\"D\",\"9\",\"+\",\"+\"]",
                "output": "27",
                "explanation": "For the given input operations = [\"5\",\"-2\",\"4\",\"C\",\"D\",\"9\",\"+\",\"+\"], the expected output is 27."
            },
            {
                "input": "operations = [\"1\",\"C\"]",
                "output": "0",
                "explanation": "For the given input operations = [\"1\",\"C\"], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Baseball Game Total Points.",
        "execution_config": {
            "functionName": "calPoints",
            "returnType": "int",
            "parameters": [
                {
                    "name": "operations",
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
        "id": "2aea2208-499d-492e-a269-c7f243ab02b4",
        "title": "Make The String Great",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string s of lower and upper case English letters. A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where they are the same letter with opposite cases. Return the string after making it good.",
        "constraints": "1 <= s.length <= 100\ns contains only lower and upper case English letters.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"leEeetcode\"",
                "output": "\"leetcode\"",
                "explanation": "For the given input s = \"leEeetcode\", the expected output is \"leetcode\"."
            },
            {
                "input": "s = \"abBAcC\"",
                "output": "\"\"",
                "explanation": "For the given input s = \"abBAcC\", the expected output is \"\"."
            },
            {
                "input": "s = \"s\"",
                "output": "\"s\"",
                "explanation": "For the given input s = \"s\", the expected output is \"s\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Make The String Great.",
        "execution_config": {
            "functionName": "makeGood",
            "returnType": "string",
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
        "id": "50ee473a-072c-4fe2-a0a5-7676f3ba46f2",
        "title": "Final Prices With a Special Discount in a Shop",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array prices where prices[i] is the price of the ith item in a shop. There is a special discount: for item i, you receive a discount equal to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Return final prices.",
        "constraints": "1 <= prices.length <= 500\n1 <= prices[i] <= 1000",
        "input_format": "vector<int>& prices",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "prices = [8,4,6,2,3]",
                "output": "[4,2,4,2,3]",
                "explanation": "For the given input prices = [8,4,6,2,3], the expected output is [4,2,4,2,3]."
            },
            {
                "input": "prices = [1,2,3,4,5]",
                "output": "[1,2,3,4,5]",
                "explanation": "For the given input prices = [1,2,3,4,5], the expected output is [1,2,3,4,5]."
            },
            {
                "input": "prices = [10,1,1,6]",
                "output": "[9,0,1,6]",
                "explanation": "For the given input prices = [10,1,1,6], the expected output is [9,0,1,6]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Final Prices With a Special Discount in a Shop.",
        "execution_config": {
            "functionName": "finalPrices",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "prices",
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
        "id": "1779be11-6499-4328-a39d-8bed64fccd4e",
        "title": "Crawler Log Folder Minimum Operations",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Stack",
            "Simulation"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "The LeetCode file system keeps a log each time some user performs a change folder operation: \"../\" move to parent, \"./\" remain in same, \"x/\" move to child. Return the minimum number of operations needed to go back to the main folder.",
        "constraints": "1 <= logs.length <= 1000\n2 <= logs[i].length <= 10\nlogs[i] contains lowercase English letters, digits, '.', and '/'.",
        "input_format": "vector<string>& logs",
        "output_format": "int",
        "examples": [
            {
                "input": "logs = [\"d1/\",\"d2/\",\"../\",\"d21/\",\"./\"]",
                "output": "2",
                "explanation": "For the given input logs = [\"d1/\",\"d2/\",\"../\",\"d21/\",\"./\"], the expected output is 2."
            },
            {
                "input": "logs = [\"d1/\",\"d2/\",\"./\",\"d3/\",\"../\",\"d31/\"]",
                "output": "3",
                "explanation": "For the given input logs = [\"d1/\",\"d2/\",\"./\",\"d3/\",\"../\",\"d31/\"], the expected output is 3."
            },
            {
                "input": "logs = [\"d1/\",\"../\",\"../\",\"../\"]",
                "output": "0",
                "explanation": "For the given input logs = [\"d1/\",\"../\",\"../\",\"../\"], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Crawler Log Folder Minimum Operations.",
        "execution_config": {
            "functionName": "minOperations",
            "returnType": "int",
            "parameters": [
                {
                    "name": "logs",
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
        "id": "92dee0ca-2cfc-4b9b-a3e3-78f0cb7b284d",
        "title": "Number of Students Unable to Eat Lunch",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Queue",
            "Simulation"
        ],
        "data_structures": [
            "Queue",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "The school cafeteria offers circular and square sandwiches at lunch break. The students stand in a queue and sandwiches are in a stack. If the student at front prefers the sandwich on top, they take it and leave; otherwise they go to the back of the queue. Return the number of students unable to eat.",
        "constraints": "1 <= students.length, sandwiches.length <= 100\nstudents.length == sandwiches.length\nsandwiches[i] and students[i] is 0 or 1.",
        "input_format": "vector<int>& students, vector<int>& sandwiches",
        "output_format": "int",
        "examples": [
            {
                "input": "students = [1,1,0,0], sandwiches = [0,1,0,1]",
                "output": "0",
                "explanation": "For the given input students = [1,1,0,0], sandwiches = [0,1,0,1], the expected output is 0."
            },
            {
                "input": "students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]",
                "output": "3",
                "explanation": "For the given input students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of Students Unable to Eat Lunch.",
        "execution_config": {
            "functionName": "countStudents",
            "returnType": "int",
            "parameters": [
                {
                    "name": "students",
                    "type": "vector<int>&"
                },
                {
                    "name": "sandwiches",
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
        "id": "7427fec6-a136-4acf-ab85-96a6a351cf55",
        "title": "Maximum Nesting Depth of the Parentheses",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Stack",
            "Simulation"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "A string is a valid parentheses string (VPS) if it is valid. Given a VPS represented as string s, return the nesting depth of s.",
        "constraints": "1 <= s.length <= 100\ns consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"(1+(2*3)+((8)/4))+1\"",
                "output": "3",
                "explanation": "For the given input s = \"(1+(2*3)+((8)/4))+1\", the expected output is 3."
            },
            {
                "input": "s = \"(1)+((2))+(((3)))\"",
                "output": "3",
                "explanation": "For the given input s = \"(1)+((2))+(((3)))\", the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Nesting Depth of the Parentheses.",
        "execution_config": {
            "functionName": "maxDepth",
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
        "id": "736b2f64-656d-4682-a1f6-69e8e5bbb995",
        "title": "Online Stock Span Simulation",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day. The span is the maximum number of consecutive days (starting today and going backward) for which the stock price was less than or equal to today's price. Given prices array, return all spans.",
        "constraints": "1 <= prices.length <= 10^4\n1 <= prices[i] <= 10^5",
        "input_format": "vector<int>& prices",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "prices = [100,80,60,70,60,75,85]",
                "output": "[1,1,1,2,1,4,6]",
                "explanation": "For the given input prices = [100,80,60,70,60,75,85], the expected output is [1,1,1,2,1,4,6]."
            },
            {
                "input": "prices = [31,41,48,59,79]",
                "output": "[1,2,3,4,5]",
                "explanation": "For the given input prices = [31,41,48,59,79], the expected output is [1,2,3,4,5]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Online Stock Span Simulation.",
        "execution_config": {
            "functionName": "calculateSpans",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "prices",
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
        "id": "651d3888-bafd-4fe6-a4ff-16b7085f745a",
        "title": "Car Fleet Count",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack",
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "There are n cars at given miles away from the starting mile 0, traveling to reach the mile target. You are given position and speed arrays. A car can never pass another car ahead of it, but it can catch up and drive bump-to-bump at the same speed forming a fleet. Return the number of car fleets that arrive at the destination.",
        "constraints": "n == position.length == speed.length\n1 <= n <= 10^5\n0 < target <= 10^6\n0 <= position[i] < target\nAll values in position are unique.\n0 < speed[i] <= 10^6",
        "input_format": "int target, vector<int>& position, vector<int>& speed",
        "output_format": "int",
        "examples": [
            {
                "input": "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
                "output": "3",
                "explanation": "For the given input target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3], the expected output is 3."
            },
            {
                "input": "target = 10, position = [3], speed = [3]",
                "output": "1",
                "explanation": "For the given input target = 10, position = [3], speed = [3], the expected output is 1."
            },
            {
                "input": "target = 100, position = [0,2,4], speed = [4,2,1]",
                "output": "1",
                "explanation": "For the given input target = 100, position = [0,2,4], speed = [4,2,1], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Car Fleet Count.",
        "execution_config": {
            "functionName": "carFleet",
            "returnType": "int",
            "parameters": [
                {
                    "name": "target",
                    "type": "int"
                },
                {
                    "name": "position",
                    "type": "vector<int>&"
                },
                {
                    "name": "speed",
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
        "id": "44e60202-0695-4037-a803-55743eb0716f",
        "title": "Sum of Subarray Minimums",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 10^9 + 7.",
        "constraints": "1 <= arr.length <= 3 * 10^4\n1 <= arr[i] <= 3 * 10^4",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [3,1,2,4]",
                "output": "17",
                "explanation": "For the given input arr = [3,1,2,4], the expected output is 17."
            },
            {
                "input": "arr = [11,81,94,43,3]",
                "output": "444",
                "explanation": "For the given input arr = [11,81,94,43,3], the expected output is 444."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sum of Subarray Minimums.",
        "execution_config": {
            "functionName": "sumSubarrayMins",
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
        "id": "fd2b57e0-360c-4f9a-ab54-2490272aedf2",
        "title": "Score of Parentheses",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a balanced parentheses string s, return the score of the string. () has score 1. AB has score A + B. (A) has score 2 * A.",
        "constraints": "2 <= s.length <= 50\ns consists of only '(' and ')'.\ns is a balanced parentheses string.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"()\"",
                "output": "1",
                "explanation": "For the given input s = \"()\", the expected output is 1."
            },
            {
                "input": "s = \"(())\"",
                "output": "2",
                "explanation": "For the given input s = \"(())\", the expected output is 2."
            },
            {
                "input": "s = \"()()\"",
                "output": "2",
                "explanation": "For the given input s = \"()()\", the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Score of Parentheses.",
        "execution_config": {
            "functionName": "scoreOfParentheses",
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
        "id": "5d373239-f58c-4971-a589-0d74b3880257",
        "title": "Remove K Digits Smallest Number",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack",
            "Greedy"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.",
        "constraints": "1 <= k <= num.length <= 10^5\nnum consists of only digits.\nnum does not have any leading zeros except for the zero itself.",
        "input_format": "string num, int k",
        "output_format": "string",
        "examples": [
            {
                "input": "num = \"1432219\", k = 3",
                "output": "\"1219\"",
                "explanation": "For the given input num = \"1432219\", k = 3, the expected output is \"1219\"."
            },
            {
                "input": "num = \"10200\", k = 1",
                "output": "\"200\"",
                "explanation": "For the given input num = \"10200\", k = 1, the expected output is \"200\"."
            },
            {
                "input": "num = \"10\", k = 2",
                "output": "\"0\"",
                "explanation": "For the given input num = \"10\", k = 2, the expected output is \"0\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove K Digits Smallest Number.",
        "execution_config": {
            "functionName": "removeKdigits",
            "returnType": "string",
            "parameters": [
                {
                    "name": "num",
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
        "id": "0a24156e-5347-432d-a279-f7f5555b7eb1",
        "title": "Maximal Rectangle in Binary Matrix",
        "topic": "Stacks & Queues",
        "difficulty": "Hard",
        "patterns": [
            "Monotonic Stack",
            "Dynamic Programming"
        ],
        "data_structures": [
            "Stack",
            "Matrix"
        ],
        "expected_time": "O(rows * cols)",
        "expected_space": "O(cols)",
        "description": "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
        "constraints": "rows == matrix.length\ncols == matrix[i].length\n1 <= row, cols <= 200\nmatrix[i][j] is '0' or '1'.",
        "input_format": "vector<vector<int>>& matrix",
        "output_format": "int",
        "examples": [
            {
                "input": "matrix = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]",
                "output": "6",
                "explanation": "For the given input matrix = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]], the expected output is 6."
            },
            {
                "input": "matrix = [[0]]",
                "output": "0",
                "explanation": "For the given input matrix = [[0]], the expected output is 0."
            },
            {
                "input": "matrix = [[1]]",
                "output": "1",
                "explanation": "For the given input matrix = [[1]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximal Rectangle in Binary Matrix.",
        "execution_config": {
            "functionName": "maximalRectangle",
            "returnType": "int",
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
        "id": "10d4173d-57c6-4d7d-ae31-d5fd08bfb43f",
        "title": "Check If Word Is Valid After Substitutions",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack",
            "String"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string s, determine if it is valid. A string s is valid if starting from an empty string \"\", we can repeatedly insert \"abc\" at any position until the string becomes s.",
        "constraints": "1 <= s.length <= 2 * 10^4\ns consists of letters 'a', 'b', and 'c'.",
        "input_format": "string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"aabcbc\"",
                "output": "true",
                "explanation": "For the given input s = \"aabcbc\", the expected output is true."
            },
            {
                "input": "s = \"abcabcababcc\"",
                "output": "true",
                "explanation": "For the given input s = \"abcabcababcc\", the expected output is true."
            },
            {
                "input": "s = \"abccba\"",
                "output": "false",
                "explanation": "For the given input s = \"abccba\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check If Word Is Valid After Substitutions.",
        "execution_config": {
            "functionName": "isValid",
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
        "id": "d7b377ca-c8df-42d4-ad63-223d96ab8dc5",
        "title": "Minimum Cost Tree From Leaf Values",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack",
            "Greedy"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array arr of positive integers, consider the (binary) trees such that each node has either 0 or 2 children, and the values of arr correspond to the values of each leaf in an in-order traversal. Return the smallest possible sum of the values of each non-leaf node.",
        "constraints": "2 <= arr.length <= 40\n1 <= arr[i] <= 15\nIt is guaranteed that the answer fits into a 32-bit signed integer.",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [6,2,4]",
                "output": "32",
                "explanation": "For the given input arr = [6,2,4], the expected output is 32."
            },
            {
                "input": "arr = [4,11]",
                "output": "44",
                "explanation": "For the given input arr = [4,11], the expected output is 44."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Cost Tree From Leaf Values.",
        "execution_config": {
            "functionName": "mctFromLeafValues",
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
        "id": "55743716-aeb6-40fe-a01b-6b0257245346",
        "title": "Build an Array With Stack Operations",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack",
            "Simulation"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array target and an integer n. You have an empty stack and read a stream of integers 1 through n in order. Return the stack operations needed to build target using 'Push' and 'Pop'.",
        "constraints": "1 <= target.length <= 100\n1 <= n <= 100\n1 <= target[i] <= n\ntarget is strictly increasing.",
        "input_format": "vector<int>& target, int n",
        "output_format": "vector<string>",
        "examples": [
            {
                "input": "target = [1,3], n = 3",
                "output": "[\"Push\",\"Push\",\"Pop\",\"Push\"]",
                "explanation": "For the given input target = [1,3], n = 3, the expected output is [\"Push\",\"Push\",\"Pop\",\"Push\"]."
            },
            {
                "input": "target = [1,2,3], n = 3",
                "output": "[\"Push\",\"Push\",\"Push\"]",
                "explanation": "For the given input target = [1,2,3], n = 3, the expected output is [\"Push\",\"Push\",\"Push\"]."
            },
            {
                "input": "target = [1,2], n = 4",
                "output": "[\"Push\",\"Push\"]",
                "explanation": "For the given input target = [1,2], n = 4, the expected output is [\"Push\",\"Push\"]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Build an Array With Stack Operations.",
        "execution_config": {
            "functionName": "buildArray",
            "returnType": "vector<string>",
            "parameters": [
                {
                    "name": "target",
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
        "id": "4c8fa58f-3860-495b-ad54-ab47ac0d4494",
        "title": "Minimum Additions to Make Valid String",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack",
            "Greedy"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string word to which you can insert letters \"a\", \"b\" or \"c\" anywhere and any number of times, return the minimum number of letters that must be inserted so that word becomes valid (consisting of concatenations of \"abc\").",
        "constraints": "1 <= word.length <= 50\nword consists of letters \"a\", \"b\", and \"c\" only.",
        "input_format": "string word",
        "output_format": "int",
        "examples": [
            {
                "input": "word = \"b\"",
                "output": "2",
                "explanation": "For the given input word = \"b\", the expected output is 2."
            },
            {
                "input": "word = \"aaa\"",
                "output": "6",
                "explanation": "For the given input word = \"aaa\", the expected output is 6."
            },
            {
                "input": "word = \"abc\"",
                "output": "0",
                "explanation": "For the given input word = \"abc\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Additions to Make Valid String.",
        "execution_config": {
            "functionName": "addMinimum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "word",
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
        "id": "d9f5ae69-25e9-4e31-a1e9-3822c763c356",
        "title": "Maximum Width Ramp",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i. Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.",
        "constraints": "2 <= nums.length <= 5 * 10^4\n0 <= nums[i] <= 5 * 10^4",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [6,0,8,2,1,5]",
                "output": "4",
                "explanation": "For the given input nums = [6,0,8,2,1,5], the expected output is 4."
            },
            {
                "input": "nums = [9,8,1,0,1,9,4,0,4,1]",
                "output": "7",
                "explanation": "For the given input nums = [9,8,1,0,1,9,4,0,4,1], the expected output is 7."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Width Ramp.",
        "execution_config": {
            "functionName": "maxWidthRamp",
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
        "id": "864622c4-37d5-478f-a2a3-99b88590ae76",
        "title": "Sum of Subarray Ranges",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray. Return the sum of all subarray ranges of nums.",
        "constraints": "1 <= nums.length <= 1000\n-10^9 <= nums[i] <= 10^9",
        "input_format": "vector<int>& nums",
        "output_format": "long long",
        "examples": [
            {
                "input": "nums = [1,2,3]",
                "output": "4",
                "explanation": "For the given input nums = [1,2,3], the expected output is 4."
            },
            {
                "input": "nums = [1,3,3]",
                "output": "4",
                "explanation": "For the given input nums = [1,3,3], the expected output is 4."
            },
            {
                "input": "nums = [4,-2,-3,4,1]",
                "output": "59",
                "explanation": "For the given input nums = [4,-2,-3,4,1], the expected output is 59."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sum of Subarray Ranges.",
        "execution_config": {
            "functionName": "subArrayRanges",
            "returnType": "long long",
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
        "id": "2fc8ba20-b67e-4522-a3d5-0d7b8bb65a57",
        "title": "Longest Valid Parentheses Length",
        "topic": "Stacks & Queues",
        "difficulty": "Hard",
        "patterns": [
            "Stack",
            "Dynamic Programming"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
        "constraints": "0 <= s.length <= 3 * 10^4\ns[i] is '(' or ')'.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"(()\"",
                "output": "2",
                "explanation": "For the given input s = \"(()\", the expected output is 2."
            },
            {
                "input": "s = \")()())\"",
                "output": "4",
                "explanation": "For the given input s = \")()())\", the expected output is 4."
            },
            {
                "input": "s = \"\"",
                "output": "0",
                "explanation": "For the given input s = \"\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Valid Parentheses Length.",
        "execution_config": {
            "functionName": "longestValidParentheses",
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
        "id": "f9e0e7be-6a79-4dfc-af0b-023bd2aff7e9",
        "title": "Minimum String Length After Removing Substrings",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given a string s consisting only of uppercase English letters. You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings \"AB\" or \"CD\" from s. Return the minimum possible length of the resulting string.",
        "constraints": "1 <= s.length <= 100\ns consists only of uppercase English letters.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"ABFCACDB\"",
                "output": "2",
                "explanation": "For the given input s = \"ABFCACDB\", the expected output is 2."
            },
            {
                "input": "s = \"ACB3D\"",
                "output": "5",
                "explanation": "For the given input s = \"ACB3D\", the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum String Length After Removing Substrings.",
        "execution_config": {
            "functionName": "minLength",
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
        "id": "ab96b7e3-b5cc-4f3a-a252-e6c236add8bb",
        "title": "Clear Digits and Their Preceding Characters",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given a string s. Your task is to remove all digits by doing this operation repeatedly: Delete the first digit and the closest non-digit character to its left. Return the resulting string after removing all digits.",
        "constraints": "1 <= s.length <= 100\ns consists only of lowercase English letters and digits.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"abc\"",
                "output": "\"abc\"",
                "explanation": "For the given input s = \"abc\", the expected output is \"abc\"."
            },
            {
                "input": "s = \"cb34\"",
                "output": "\"\"",
                "explanation": "For the given input s = \"cb34\", the expected output is \"\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Clear Digits and Their Preceding Characters.",
        "execution_config": {
            "functionName": "clearDigits",
            "returnType": "string",
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
        "id": "a49982b4-d0bf-4359-a58a-338dff46d5c2",
        "title": "Maximum Number of Coins Collected in Subarray",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of coin counts, find the maximum contiguous subarray product with positive numbers.",
        "constraints": "1 <= nums.length <= 1000\n1 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,3]",
                "output": "6",
                "explanation": "For the given input nums = [1,2,3], the expected output is 6."
            },
            {
                "input": "nums = [5,4,1,9]",
                "output": "19",
                "explanation": "For the given input nums = [5,4,1,9], the expected output is 19."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Number of Coins Collected in Subarray.",
        "execution_config": {
            "functionName": "maxCoinSum",
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
        "id": "33bd028c-ba24-4963-a04a-96e5682288f3",
        "title": "Backspace String Final Content",
        "topic": "Stacks & Queues",
        "difficulty": "Easy",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string s containing characters and '#', simulate a text editor where '#' is a backspace. Return the final string.",
        "constraints": "1 <= s.length <= 1000",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"a#bc#d\"",
                "output": "\"bd\"",
                "explanation": "For the given input s = \"a#bc#d\", the expected output is \"bd\"."
            },
            {
                "input": "s = \"###abc\"",
                "output": "\"abc\"",
                "explanation": "For the given input s = \"###abc\", the expected output is \"abc\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Backspace String Final Content.",
        "execution_config": {
            "functionName": "cleanString",
            "returnType": "string",
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
        "id": "067c4606-62e6-4556-acdb-d5f590b36b39",
        "title": "Remove K Adjacent Duplicates In String",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them. We repeatedly make k duplicate removals on s until we no longer can. Return the final string.",
        "constraints": "1 <= s.length <= 10^5\n2 <= k <= 10^4\ns only contains lowercase English letters.",
        "input_format": "string s, int k",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"abcd\", k = 2",
                "output": "\"abcd\"",
                "explanation": "For the given input s = \"abcd\", k = 2, the expected output is \"abcd\"."
            },
            {
                "input": "s = \"deeedbbcccbdaa\", k = 3",
                "output": "\"aa\"",
                "explanation": "For the given input s = \"deeedbbcccbdaa\", k = 3, the expected output is \"aa\"."
            },
            {
                "input": "s = \"pbbcggttciiippooaais\", k = 2",
                "output": "\"ps\"",
                "explanation": "For the given input s = \"pbbcggttciiippooaais\", k = 2, the expected output is \"ps\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove K Adjacent Duplicates In String.",
        "execution_config": {
            "functionName": "removeDuplicatesK",
            "returnType": "string",
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
        "id": "b7ddcdea-984b-4244-a3c8-c19fcedff5c3",
        "title": "Check Valid Parentheses With Asterisks",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Stack"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string s containing '(', ')' and '*', where '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string \"\". Return true if s is valid.",
        "constraints": "1 <= s.length <= 100\ns[i] is '(', ')' or '*'.",
        "input_format": "string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"()\"",
                "output": "true",
                "explanation": "For the given input s = \"()\", the expected output is true."
            },
            {
                "input": "s = \"(*)\"",
                "output": "true",
                "explanation": "For the given input s = \"(*)\", the expected output is true."
            },
            {
                "input": "s = \"(*))\"",
                "output": "true",
                "explanation": "For the given input s = \"(*))\", the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check Valid Parentheses With Asterisks.",
        "execution_config": {
            "functionName": "checkValidString",
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
        "id": "023861ce-959e-412c-a1b7-4ac2f537c5b2",
        "title": "Queue Reconstruction by Height",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Queue"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "You are given an array of people, people, where people[i] = [h_i, k_i] represents the ith person of height h_i with exactly k_i other people in front who have a height greater than or equal to h_i. Reconstruct and return the queue that is represented by the input array people.",
        "constraints": "1 <= people.length <= 2000\n0 <= h_i <= 10^6\n0 <= k_i < people.length",
        "input_format": "vector<vector<int>>& people",
        "output_format": "vector<vector<int>>",
        "examples": [
            {
                "input": "people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]",
                "output": "[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]",
                "explanation": "For the given input people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]], the expected output is [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]."
            },
            {
                "input": "people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]",
                "output": "[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]",
                "explanation": "For the given input people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]], the expected output is [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Queue Reconstruction by Height.",
        "execution_config": {
            "functionName": "reconstructQueue",
            "returnType": "vector<vector<int>>",
            "parameters": [
                {
                    "name": "people",
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
        "id": "d39addf9-b5ab-4c6c-ad0b-d685a050f0c2",
        "title": "Design Hit Counter Hits Count",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Queue",
            "Design"
        ],
        "data_structures": [
            "Queue",
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given a list of hit timestamps in seconds (strictly increasing), return the number of hits in the past 300 seconds (i.e. [timestamp - 299, timestamp]).",
        "constraints": "1 <= timestamps.length <= 10^4\n1 <= timestamps[i] <= 2 * 10^9",
        "input_format": "vector<int>& timestamps, int queryTime",
        "output_format": "int",
        "examples": [
            {
                "input": "timestamps = [1,2,3,300], queryTime = 300",
                "output": "4",
                "explanation": "For the given input timestamps = [1,2,3,300], queryTime = 300, the expected output is 4."
            },
            {
                "input": "timestamps = [1,2,3,300], queryTime = 301",
                "output": "3",
                "explanation": "For the given input timestamps = [1,2,3,300], queryTime = 301, the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Design Hit Counter Hits Count.",
        "execution_config": {
            "functionName": "getHitsInWindow",
            "returnType": "int",
            "parameters": [
                {
                    "name": "timestamps",
                    "type": "vector<int>&"
                },
                {
                    "name": "queryTime",
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
        "id": "5a2ab7df-6010-4d36-a998-1a3c652a028b",
        "title": "Minimum Operations to Empty Array Using Counts",
        "topic": "Stacks & Queues",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given a 0-indexed array nums consisting of positive integers. In one operation you can choose two elements with equal values and delete them, or choose three elements with equal values and delete them. Return the minimum number of operations required to empty the array, or -1 if impossible.",
        "constraints": "2 <= nums.length <= 10^5\n1 <= nums[i] <= 10^6",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,3,3,2,2,4,2,3,4]",
                "output": "4",
                "explanation": "For the given input nums = [2,3,3,2,2,4,2,3,4], the expected output is 4."
            },
            {
                "input": "nums = [2,1,2,2,3,3]",
                "output": "-1",
                "explanation": "For the given input nums = [2,1,2,2,3,3], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Operations to Empty Array Using Counts.",
        "execution_config": {
            "functionName": "minOperations",
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

export default STACK_QUEUE_PROBLEMS;
