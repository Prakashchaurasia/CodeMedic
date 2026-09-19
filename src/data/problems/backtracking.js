/**
 * Recursion & Backtracking Problems Dataset (20 problems)
 * CodeMedic Verified DSA Collection
 */

export const BACKTRACKING_PROBLEMS = [
    {
        "id": "d822a947-bb0f-4e02-a8cb-b60014782d1c",
        "title": "Subsets (Power Set) Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(2^n)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums of unique elements, return the total count of subsets (the power set) that can be generated.",
        "constraints": "1 <= nums.length <= 10\n-10 <= nums[i] <= 10\nAll the numbers of nums are unique.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,3]",
                "output": "8",
                "explanation": "For the given input nums = [1,2,3], the expected output is 8."
            },
            {
                "input": "nums = [0]",
                "output": "2",
                "explanation": "For the given input nums = [0], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Subsets (Power Set) Count.",
        "execution_config": {
            "functionName": "subsetsCount",
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
        "id": "3f2092d5-5132-4340-adfd-a31bbc7e316b",
        "title": "Unique Permutations Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n!)",
        "expected_space": "O(n)",
        "description": "Given an array nums of distinct integers, return the number of possible permutations.",
        "constraints": "1 <= nums.length <= 8\n-10 <= nums[i] <= 10\nAll the integers of nums are unique.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,3]",
                "output": "6",
                "explanation": "For the given input nums = [1,2,3], the expected output is 6."
            },
            {
                "input": "nums = [0,1]",
                "output": "2",
                "explanation": "For the given input nums = [0,1], the expected output is 2."
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
        "learning_objective": "Master algorithmic problem solving for Unique Permutations Count.",
        "execution_config": {
            "functionName": "permuteCount",
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
        "id": "63a00935-852f-4eea-a6b6-63cc534b80cd",
        "title": "Combination Sum Count of Ways",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(2^t)",
        "expected_space": "O(t)",
        "description": "Given an array of distinct integers candidates and a target integer target, return the number of unique combinations of candidates where the chosen numbers sum to target. The same number may be chosen unlimited times.",
        "constraints": "1 <= candidates.length <= 30\n2 <= candidates[i] <= 40\nAll elements of candidates are distinct.\n1 <= target <= 40",
        "input_format": "vector<int>& candidates, int target",
        "output_format": "int",
        "examples": [
            {
                "input": "candidates = [2,3,6,7], target = 7",
                "output": "2",
                "explanation": "For the given input candidates = [2,3,6,7], target = 7, the expected output is 2."
            },
            {
                "input": "candidates = [2,3,5], target = 8",
                "output": "3",
                "explanation": "For the given input candidates = [2,3,5], target = 8, the expected output is 3."
            },
            {
                "input": "candidates = [2], target = 1",
                "output": "0",
                "explanation": "For the given input candidates = [2], target = 1, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Combination Sum Count of Ways.",
        "execution_config": {
            "functionName": "combinationSumCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "candidates",
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
        "id": "5f7c52f9-25f2-4c93-a942-e744fa68cd50",
        "title": "Generate Parentheses Combinations Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(4^n / sqrt(n))",
        "expected_space": "O(n)",
        "description": "Given n pairs of parentheses, return the number of combinations of well-formed parentheses that can be generated (Catalan number).",
        "constraints": "1 <= n <= 8",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 3",
                "output": "5",
                "explanation": "For the given input n = 3, the expected output is 5."
            },
            {
                "input": "n = 1",
                "output": "1",
                "explanation": "For the given input n = 1, the expected output is 1."
            },
            {
                "input": "n = 4",
                "output": "14",
                "explanation": "For the given input n = 4, the expected output is 14."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Generate Parentheses Combinations Count.",
        "execution_config": {
            "functionName": "generateParenthesisCount",
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
        "id": "4ee255c4-8551-46c6-a301-036bc3a8b018",
        "title": "Letter Combinations of a Phone Number Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "String",
            "Array"
        ],
        "expected_time": "O(4^n)",
        "expected_space": "O(n)",
        "description": "Given a string containing digits from 2-9 inclusive, return the number of all possible letter combinations that the number could represent based on telephone buttons.",
        "constraints": "0 <= digits.length <= 4\ndigits[i] is a digit in the range ['2', '9'].",
        "input_format": "string digits",
        "output_format": "int",
        "examples": [
            {
                "input": "digits = \"23\"",
                "output": "9",
                "explanation": "For the given input digits = \"23\", the expected output is 9."
            },
            {
                "input": "digits = \"\"",
                "output": "0",
                "explanation": "For the given input digits = \"\", the expected output is 0."
            },
            {
                "input": "digits = \"2\"",
                "output": "3",
                "explanation": "For the given input digits = \"2\", the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Letter Combinations of a Phone Number Count.",
        "execution_config": {
            "functionName": "letterCombinationsCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "digits",
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
        "id": "5761cc61-54de-4286-a086-bf9a3aa5b807",
        "title": "N-Queens Total Solutions Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Hard",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n!)",
        "expected_space": "O(n)",
        "description": "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return the number of distinct solutions to the n-queens puzzle.",
        "constraints": "1 <= n <= 9",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 4",
                "output": "2",
                "explanation": "For the given input n = 4, the expected output is 2."
            },
            {
                "input": "n = 1",
                "output": "1",
                "explanation": "For the given input n = 1, the expected output is 1."
            },
            {
                "input": "n = 5",
                "output": "10",
                "explanation": "For the given input n = 5, the expected output is 10."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for N-Queens Total Solutions Count.",
        "execution_config": {
            "functionName": "totalNQueens",
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
        "id": "fb2d9a2a-fe48-487b-a56c-ec756d3883b4",
        "title": "Word Search Exists in Matrix",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking",
            "DFS"
        ],
        "data_structures": [
            "Matrix",
            "String"
        ],
        "expected_time": "O(m * n * 3^l)",
        "expected_space": "O(l)",
        "description": "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontal or vertical).",
        "constraints": "m == board.length\nn = board[i].length\n1 <= m, n <= 6\n1 <= word.length <= 15\nboard and word consist of only lowercase and uppercase English letters.",
        "input_format": "vector<vector<string>>& board, string word",
        "output_format": "bool",
        "examples": [
            {
                "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
                "output": "true",
                "explanation": "For the given input board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\", the expected output is true."
            },
            {
                "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"",
                "output": "true",
                "explanation": "For the given input board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\", the expected output is true."
            },
            {
                "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\"",
                "output": "false",
                "explanation": "For the given input board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Word Search Exists in Matrix.",
        "execution_config": {
            "functionName": "exist",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "board",
                    "type": "vector<vector<string>>&"
                },
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
        "id": "fdf88ed4-3108-418f-ac66-4e1fa21f43ed",
        "title": "Palindrome Partitioning Ways Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking",
            "Dynamic Programming"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n * 2^n)",
        "expected_space": "O(n)",
        "description": "Given a string s, partition s such that every substring of the partition is a palindrome. Return the total number of possible palindrome partitionings of s.",
        "constraints": "1 <= s.length <= 16\ns contains only lowercase English letters.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"aab\"",
                "output": "2",
                "explanation": "For the given input s = \"aab\", the expected output is 2."
            },
            {
                "input": "s = \"a\"",
                "output": "1",
                "explanation": "For the given input s = \"a\", the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Palindrome Partitioning Ways Count.",
        "execution_config": {
            "functionName": "partitionCount",
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
        "id": "cdce6e83-41d1-4ed2-abf4-63d7afad3d83",
        "title": "Combinations of K Numbers Out of N Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking",
            "Math"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(k)",
        "expected_space": "O(1)",
        "description": "Given two integers n and k, return the total count of combinations of k numbers chosen from the range [1, n] (n choose k).",
        "constraints": "1 <= n <= 20\n1 <= k <= n",
        "input_format": "int n, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 4, k = 2",
                "output": "6",
                "explanation": "For the given input n = 4, k = 2, the expected output is 6."
            },
            {
                "input": "n = 1, k = 1",
                "output": "1",
                "explanation": "For the given input n = 1, k = 1, the expected output is 1."
            },
            {
                "input": "n = 5, k = 3",
                "output": "10",
                "explanation": "For the given input n = 5, k = 3, the expected output is 10."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Combinations of K Numbers Out of N Count.",
        "execution_config": {
            "functionName": "combineCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
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
        "id": "2c876c2c-7709-4e64-aa49-a4f67734e871",
        "title": "Combination Sum III Count of Valid Sets",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(9 choose k)",
        "expected_space": "O(k)",
        "description": "Find all valid combinations of k numbers that sum up to n such that only numbers 1 through 9 are used and each number is used at most once. Return the number of valid combinations.",
        "constraints": "2 <= k <= 9\n1 <= n <= 60",
        "input_format": "int k, int n",
        "output_format": "int",
        "examples": [
            {
                "input": "k = 3, n = 7",
                "output": "1",
                "explanation": "For the given input k = 3, n = 7, the expected output is 1."
            },
            {
                "input": "k = 3, n = 9",
                "output": "3",
                "explanation": "For the given input k = 3, n = 9, the expected output is 3."
            },
            {
                "input": "k = 4, n = 1",
                "output": "0",
                "explanation": "For the given input k = 4, n = 1, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Combination Sum III Count of Valid Sets.",
        "execution_config": {
            "functionName": "combinationSum3Count",
            "returnType": "int",
            "parameters": [
                {
                    "name": "k",
                    "type": "int"
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
        "id": "57f76a59-8dab-44f5-a23a-b4801084e350",
        "title": "Beautiful Arrangement Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(k)",
        "expected_space": "O(n)",
        "description": "Suppose you have n integers labeled 1 through n. A permutation is beautiful if for every 1 <= i <= n: either perm[i] % i == 0 or i % perm[i] == 0. Return the number of beautiful arrangements.",
        "constraints": "1 <= n <= 15",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 2",
                "output": "2",
                "explanation": "For the given input n = 2, the expected output is 2."
            },
            {
                "input": "n = 1",
                "output": "1",
                "explanation": "For the given input n = 1, the expected output is 1."
            },
            {
                "input": "n = 3",
                "output": "3",
                "explanation": "For the given input n = 3, the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Beautiful Arrangement Count.",
        "execution_config": {
            "functionName": "countArrangement",
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
        "id": "87d898ba-dd76-4755-a00e-6fbebca24197",
        "title": "Matchsticks to Square Possible",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking",
            "0/1 Knapsack"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(4^n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. Return true if you can make this square and false otherwise.",
        "constraints": "1 <= matchsticks.length <= 15\n1 <= matchsticks[i] <= 10^8",
        "input_format": "vector<int>& matchsticks",
        "output_format": "bool",
        "examples": [
            {
                "input": "matchsticks = [1,1,2,2,2]",
                "output": "true",
                "explanation": "For the given input matchsticks = [1,1,2,2,2], the expected output is true."
            },
            {
                "input": "matchsticks = [3,3,3,3,4]",
                "output": "false",
                "explanation": "For the given input matchsticks = [3,3,3,3,4], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Matchsticks to Square Possible.",
        "execution_config": {
            "functionName": "makesquare",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "matchsticks",
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
        "id": "9db2e125-3fc5-498e-ac12-19058b3a054e",
        "title": "Partition to K Equal Sum Subsets Possible",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(k^n)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.",
        "constraints": "1 <= k <= nums.length <= 16\n1 <= nums[i] <= 10^4\nThe frequency of each element is in the range [1, 4].",
        "input_format": "vector<int>& nums, int k",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [4,3,2,3,5,2,1], k = 4",
                "output": "true",
                "explanation": "For the given input nums = [4,3,2,3,5,2,1], k = 4, the expected output is true."
            },
            {
                "input": "nums = [1,2,3,4], k = 3",
                "output": "false",
                "explanation": "For the given input nums = [1,2,3,4], k = 3, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Partition to K Equal Sum Subsets Possible.",
        "execution_config": {
            "functionName": "canPartitionKSubsets",
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
        "id": "922c525e-e448-48c9-ab81-571b5fee107a",
        "title": "Letter Case Permutation Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(2^letters)",
        "expected_space": "O(1)",
        "description": "Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string. Return the count of all distinct possible strings that can be produced.",
        "constraints": "1 <= s.length <= 12\ns consists of lowercase English letters, uppercase English letters, and digits.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"a1b2\"",
                "output": "4",
                "explanation": "For the given input s = \"a1b2\", the expected output is 4."
            },
            {
                "input": "s = \"3z4\"",
                "output": "2",
                "explanation": "For the given input s = \"3z4\", the expected output is 2."
            },
            {
                "input": "s = \"12345\"",
                "output": "1",
                "explanation": "For the given input s = \"12345\", the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Letter Case Permutation Count.",
        "execution_config": {
            "functionName": "letterCasePermutationCount",
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
        "id": "e1e7950b-d78c-4102-a4c5-94c65d529f41",
        "title": "Binary Watch Possible Times Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Easy",
        "patterns": [
            "Backtracking",
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "A binary watch has 4 LEDs on the top to represent hours (0-11), and 6 LEDs on the bottom to represent minutes (0-59). Given an integer turnedOn which represents the number of LEDs that are currently on, return the number of valid times the watch could represent.",
        "constraints": "0 <= turnedOn <= 10",
        "input_format": "int turnedOn",
        "output_format": "int",
        "examples": [
            {
                "input": "turnedOn = 1",
                "output": "10",
                "explanation": "For the given input turnedOn = 1, the expected output is 10."
            },
            {
                "input": "turnedOn = 9",
                "output": "0",
                "explanation": "For the given input turnedOn = 9, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Binary Watch Possible Times Count.",
        "execution_config": {
            "functionName": "readBinaryWatchCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "turnedOn",
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
        "id": "b281408f-5232-4215-ae97-ba41467857d9",
        "title": "Restore IP Addresses Valid Count",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros. Given a string s containing only digits, return the number of valid IP addresses that can be formed.",
        "constraints": "1 <= s.length <= 20\ns consists of digits only.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"25525511135\"",
                "output": "2",
                "explanation": "For the given input s = \"25525511135\", the expected output is 2."
            },
            {
                "input": "s = \"0000\"",
                "output": "1",
                "explanation": "For the given input s = \"0000\", the expected output is 1."
            },
            {
                "input": "s = \"101023\"",
                "output": "5",
                "explanation": "For the given input s = \"101023\", the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Restore IP Addresses Valid Count.",
        "execution_config": {
            "functionName": "restoreIpAddressesCount",
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
        "id": "25aa98d6-559a-40e5-aa99-41a168db459b",
        "title": "Permutation Sequence Kth Value",
        "topic": "Recursion & Backtracking",
        "difficulty": "Hard",
        "patterns": [
            "Math",
            "Recursion"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "By listing and labeling all permutations of {1, 2, ..., n} in increasing order, return the kth permutation sequence as a string.",
        "constraints": "1 <= n <= 9\n1 <= k <= n!",
        "input_format": "int n, int k",
        "output_format": "string",
        "examples": [
            {
                "input": "n = 3, k = 3",
                "output": "\"213\"",
                "explanation": "For the given input n = 3, k = 3, the expected output is \"213\"."
            },
            {
                "input": "n = 4, k = 9",
                "output": "\"2314\"",
                "explanation": "For the given input n = 4, k = 9, the expected output is \"2314\"."
            },
            {
                "input": "n = 3, k = 1",
                "output": "\"123\"",
                "explanation": "For the given input n = 3, k = 1, the expected output is \"123\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Permutation Sequence Kth Value.",
        "execution_config": {
            "functionName": "getPermutation",
            "returnType": "string",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
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
        "id": "fb4b008a-73e5-4704-a888-16c341d80648",
        "title": "Max Length of Concatenated String with Unique Characters",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking",
            "Bit Manipulation"
        ],
        "data_structures": [
            "String",
            "Array"
        ],
        "expected_time": "O(2^n)",
        "expected_space": "O(n)",
        "description": "You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters. Return the maximum possible length of s.",
        "constraints": "1 <= arr.length <= 16\n1 <= arr[i].length <= 26\narr[i] contains only lowercase English letters.",
        "input_format": "vector<string>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [\"un\",\"iq\",\"ue\"]",
                "output": "4",
                "explanation": "For the given input arr = [\"un\",\"iq\",\"ue\"], the expected output is 4."
            },
            {
                "input": "arr = [\"cha\",\"r\",\"act\",\"ers\"]",
                "output": "6",
                "explanation": "For the given input arr = [\"cha\",\"r\",\"act\",\"ers\"], the expected output is 6."
            },
            {
                "input": "arr = [\"abcdefghijklmnopqrstuvwxyz\"]",
                "output": "26",
                "explanation": "For the given input arr = [\"abcdefghijklmnopqrstuvwxyz\"], the expected output is 26."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Max Length of Concatenated String with Unique Characters.",
        "execution_config": {
            "functionName": "maxLength",
            "returnType": "int",
            "parameters": [
                {
                    "name": "arr",
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
        "id": "68907916-2d00-47e1-a3b4-a7e63ead3ab2",
        "title": "Valid Sudoku Initial Board Check",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Hashing",
            "Matrix"
        ],
        "data_structures": [
            "Matrix",
            "Hash Set"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the mention rules (1-9 without repetition in rows, cols, or 3x3 subboxes). Empty cells are represented by 0.",
        "constraints": "board.length == 9\nboard[i].length == 9\n0 <= board[i][j] <= 9",
        "input_format": "vector<vector<int>>& board",
        "output_format": "bool",
        "examples": [
            {
                "input": "board = [[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]]",
                "output": "true",
                "explanation": "For the given input board = [[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]], the expected output is true."
            },
            {
                "input": "board = [[8,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]]",
                "output": "false",
                "explanation": "For the given input board = [[8,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Valid Sudoku Initial Board Check.",
        "execution_config": {
            "functionName": "isValidSudoku",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "board",
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
        "id": "5ab315fd-2a64-412e-a8a3-3d91e59608bd",
        "title": "Count Max Bitwise-OR Subsets",
        "topic": "Recursion & Backtracking",
        "difficulty": "Medium",
        "patterns": [
            "Backtracking",
            "Bit Manipulation"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(2^n)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR.",
        "constraints": "1 <= nums.length <= 16\n1 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,1]",
                "output": "2",
                "explanation": "For the given input nums = [3,1], the expected output is 2."
            },
            {
                "input": "nums = [2,2,2]",
                "output": "7",
                "explanation": "For the given input nums = [2,2,2], the expected output is 7."
            },
            {
                "input": "nums = [3,2,1,5]",
                "output": "6",
                "explanation": "For the given input nums = [3,2,1,5], the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Max Bitwise-OR Subsets.",
        "execution_config": {
            "functionName": "countMaxOrSubsets",
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

export default BACKTRACKING_PROBLEMS;
