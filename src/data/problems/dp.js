/**
 * Dynamic Programming Problems Dataset (50 problems)
 * CodeMedic Verified DSA Collection
 */

export const DP_PROBLEMS = [
    {
        "id": "614ed6ea-982e-4046-aa52-e2a000c32cbc",
        "title": "Min Cost Climbing Stairs",
        "topic": "Dynamic Programming",
        "difficulty": "Easy",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. Return the minimum cost to reach the top of the floor starting from index 0 or 1.",
        "constraints": "2 <= cost.length <= 1000\n0 <= cost[i] <= 999",
        "input_format": "vector<int>& cost",
        "output_format": "int",
        "examples": [
            {
                "input": "cost = [10,15,20]",
                "output": "15",
                "explanation": "For the given input cost = [10,15,20], the expected output is 15."
            },
            {
                "input": "cost = [1,100,1,1,1,100,1,1,100,1]",
                "output": "6",
                "explanation": "For the given input cost = [1,100,1,1,1,100,1,1,100,1], the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Min Cost Climbing Stairs.",
        "execution_config": {
            "functionName": "minCostClimbingStairs",
            "returnType": "int",
            "parameters": [
                {
                    "name": "cost",
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
        "id": "389267f8-42f6-43aa-a45e-4dc1f2c30160",
        "title": "House Robber Maximum Loot",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected. Return the maximum amount of money you can rob tonight without alerting the police.",
        "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 400",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,3,1]",
                "output": "4",
                "explanation": "For the given input nums = [1,2,3,1], the expected output is 4."
            },
            {
                "input": "nums = [2,7,9,3,1]",
                "output": "12",
                "explanation": "For the given input nums = [2,7,9,3,1], the expected output is 12."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for House Robber Maximum Loot.",
        "execution_config": {
            "functionName": "rob",
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
        "id": "98e692ea-a48f-4f14-ae17-9eddc5c7cf5c",
        "title": "House Robber II Circular Street",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Return the maximum amount of money you can rob tonight without alerting the police.",
        "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 1000",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,3,2]",
                "output": "3",
                "explanation": "For the given input nums = [2,3,2], the expected output is 3."
            },
            {
                "input": "nums = [1,2,3,1]",
                "output": "4",
                "explanation": "For the given input nums = [1,2,3,1], the expected output is 4."
            },
            {
                "input": "nums = [1,2,3]",
                "output": "3",
                "explanation": "For the given input nums = [1,2,3], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for House Robber II Circular Street.",
        "execution_config": {
            "functionName": "rob",
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
        "id": "bb4b78df-b741-4a0c-a342-48ee270feb69",
        "title": "Longest Increasing Subsequence Length",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP",
            "Binary Search"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        "constraints": "1 <= nums.length <= 2500\n-10^4 <= nums[i] <= 10^4",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [10,9,2,5,3,7,101,18]",
                "output": "4",
                "explanation": "For the given input nums = [10,9,2,5,3,7,101,18], the expected output is 4."
            },
            {
                "input": "nums = [0,1,0,3,2,3]",
                "output": "4",
                "explanation": "For the given input nums = [0,1,0,3,2,3], the expected output is 4."
            },
            {
                "input": "nums = [7,7,7,7,7,7,7]",
                "output": "1",
                "explanation": "For the given input nums = [7,7,7,7,7,7,7], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Increasing Subsequence Length.",
        "execution_config": {
            "functionName": "lengthOfLIS",
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
        "id": "2d7d1d70-631e-4452-a7ce-743935d12c80",
        "title": "Coin Change Minimum Coins",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "Unbounded Knapsack"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(amount * coins.length)",
        "expected_space": "O(amount)",
        "description": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up, return -1.",
        "constraints": "1 <= coins.length <= 12\n1 <= coins[i] <= 2^31 - 1\n0 <= amount <= 10^4",
        "input_format": "vector<int>& coins, int amount",
        "output_format": "int",
        "examples": [
            {
                "input": "coins = [1,2,5], amount = 11",
                "output": "3",
                "explanation": "For the given input coins = [1,2,5], amount = 11, the expected output is 3."
            },
            {
                "input": "coins = [2], amount = 3",
                "output": "-1",
                "explanation": "For the given input coins = [2], amount = 3, the expected output is -1."
            },
            {
                "input": "coins = [1], amount = 0",
                "output": "0",
                "explanation": "For the given input coins = [1], amount = 0, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Coin Change Minimum Coins.",
        "execution_config": {
            "functionName": "coinChange",
            "returnType": "int",
            "parameters": [
                {
                    "name": "coins",
                    "type": "vector<int>&"
                },
                {
                    "name": "amount",
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
        "id": "59041962-ea35-4989-af18-a500577007f3",
        "title": "Coin Change II Number of Combinations",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "Unbounded Knapsack"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(amount * coins.length)",
        "expected_space": "O(amount)",
        "description": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount.",
        "constraints": "1 <= coins.length <= 300\n1 <= coins[i] <= 5000\nAll values of coins are unique.\n0 <= amount <= 5000",
        "input_format": "int amount, vector<int>& coins",
        "output_format": "int",
        "examples": [
            {
                "input": "amount = 5, coins = [1,2,5]",
                "output": "4",
                "explanation": "For the given input amount = 5, coins = [1,2,5], the expected output is 4."
            },
            {
                "input": "amount = 3, coins = [2]",
                "output": "0",
                "explanation": "For the given input amount = 3, coins = [2], the expected output is 0."
            },
            {
                "input": "amount = 10, coins = [10]",
                "output": "1",
                "explanation": "For the given input amount = 10, coins = [10], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Coin Change II Number of Combinations.",
        "execution_config": {
            "functionName": "change",
            "returnType": "int",
            "parameters": [
                {
                    "name": "amount",
                    "type": "int"
                },
                {
                    "name": "coins",
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
        "id": "c82aacf1-d88a-4f4e-a690-f86ffff88905",
        "title": "Maximum Product Subarray",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, find a subarray that has the largest product, and return the product.",
        "constraints": "1 <= nums.length <= 2 * 10^4\n-10 <= nums[i] <= 10\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,3,-2,4]",
                "output": "6",
                "explanation": "For the given input nums = [2,3,-2,4], the expected output is 6."
            },
            {
                "input": "nums = [-2,0,-1]",
                "output": "0",
                "explanation": "For the given input nums = [-2,0,-1], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Product Subarray.",
        "execution_config": {
            "functionName": "maxProduct",
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
        "id": "169e46a8-78c0-46d9-a87d-18db6808de4c",
        "title": "Unique Paths in Grid",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(n)",
        "description": "There is a robot on an m x n grid located at top-left (0, 0). The robot can only move either down or right at any point in time. Return the number of possible unique paths to bottom-right (m - 1, n - 1).",
        "constraints": "1 <= m, n <= 100",
        "input_format": "int m, int n",
        "output_format": "int",
        "examples": [
            {
                "input": "m = 3, n = 7",
                "output": "28",
                "explanation": "For the given input m = 3, n = 7, the expected output is 28."
            },
            {
                "input": "m = 3, n = 2",
                "output": "3",
                "explanation": "For the given input m = 3, n = 2, the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Unique Paths in Grid.",
        "execution_config": {
            "functionName": "uniquePaths",
            "returnType": "int",
            "parameters": [
                {
                    "name": "m",
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
        "id": "3709b2a2-fce2-4c83-a836-9ae15627a7d7",
        "title": "Unique Paths II With Obstacles",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(n)",
        "description": "You are given an m x n integer array obstacleGrid where 1 marks an obstacle and 0 marks an empty space. Return the number of possible unique paths to reach the bottom-right corner.",
        "constraints": "m == obstacleGrid.length\nn == obstacleGrid[i].length\n1 <= m, n <= 100\nobstacleGrid[i][j] is 0 or 1.",
        "input_format": "vector<vector<int>>& obstacleGrid",
        "output_format": "int",
        "examples": [
            {
                "input": "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]",
                "output": "2",
                "explanation": "For the given input obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]], the expected output is 2."
            },
            {
                "input": "obstacleGrid = [[0,1],[0,0]]",
                "output": "1",
                "explanation": "For the given input obstacleGrid = [[0,1],[0,0]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Unique Paths II With Obstacles.",
        "execution_config": {
            "functionName": "uniquePathsWithObstacles",
            "returnType": "int",
            "parameters": [
                {
                    "name": "obstacleGrid",
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
        "id": "de6e2776-c954-44b0-ab84-1f2051809c89",
        "title": "Minimum Path Sum in Grid",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(n)",
        "description": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 200\n0 <= grid[i][j] <= 200",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
                "output": "7",
                "explanation": "For the given input grid = [[1,3,1],[1,5,1],[4,2,1]], the expected output is 7."
            },
            {
                "input": "grid = [[1,2,3],[4,5,6]]",
                "output": "12",
                "explanation": "For the given input grid = [[1,2,3],[4,5,6]], the expected output is 12."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Path Sum in Grid.",
        "execution_config": {
            "functionName": "minPathSum",
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
        "id": "9bfbc153-c198-4510-a749-f5e886cc6625",
        "title": "Partition Equal Subset Sum Possible",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "0/1 Knapsack"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n * sum)",
        "expected_space": "O(sum)",
        "description": "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.",
        "constraints": "1 <= nums.length <= 200\n1 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [1,5,11,5]",
                "output": "true",
                "explanation": "For the given input nums = [1,5,11,5], the expected output is true."
            },
            {
                "input": "nums = [1,2,3,5]",
                "output": "false",
                "explanation": "For the given input nums = [1,2,3,5], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Partition Equal Subset Sum Possible.",
        "execution_config": {
            "functionName": "canPartition",
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
        "id": "1ec1e94b-c285-44b8-a7b0-51e9a83de418",
        "title": "Longest Common Subsequence Length",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
        "constraints": "1 <= text1.length, text2.length <= 1000\ntext1 and text2 consist of only lowercase English characters.",
        "input_format": "string text1, string text2",
        "output_format": "int",
        "examples": [
            {
                "input": "text1 = \"abcde\", text2 = \"ace\"",
                "output": "3",
                "explanation": "For the given input text1 = \"abcde\", text2 = \"ace\", the expected output is 3."
            },
            {
                "input": "text1 = \"abc\", text2 = \"abc\"",
                "output": "3",
                "explanation": "For the given input text1 = \"abc\", text2 = \"abc\", the expected output is 3."
            },
            {
                "input": "text1 = \"abc\", text2 = \"def\"",
                "output": "0",
                "explanation": "For the given input text1 = \"abc\", text2 = \"def\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Common Subsequence Length.",
        "execution_config": {
            "functionName": "longestCommonSubsequence",
            "returnType": "int",
            "parameters": [
                {
                    "name": "text1",
                    "type": "string"
                },
                {
                    "name": "text2",
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
        "id": "b498fa3a-eb4b-4242-ac5a-b986e7a4cc4f",
        "title": "Edit Distance (Levenshtein Distance)",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2: Insert a character, Delete a character, or Replace a character.",
        "constraints": "0 <= word1.length, word2.length <= 500\nword1 and word2 consist of lowercase English letters.",
        "input_format": "string word1, string word2",
        "output_format": "int",
        "examples": [
            {
                "input": "word1 = \"horse\", word2 = \"ros\"",
                "output": "3",
                "explanation": "For the given input word1 = \"horse\", word2 = \"ros\", the expected output is 3."
            },
            {
                "input": "word1 = \"intention\", word2 = \"execution\"",
                "output": "5",
                "explanation": "For the given input word1 = \"intention\", word2 = \"execution\", the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Edit Distance (Levenshtein Distance).",
        "execution_config": {
            "functionName": "minDistance",
            "returnType": "int",
            "parameters": [
                {
                    "name": "word1",
                    "type": "string"
                },
                {
                    "name": "word2",
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
        "id": "2dfdd740-4189-45b1-a8e8-72ccc7797c3f",
        "title": "Word Break Possible",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Hash Set",
            "String"
        ],
        "expected_time": "O(n^3)",
        "expected_space": "O(n)",
        "description": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
        "constraints": "1 <= s.length <= 300\n1 <= wordDict.length <= 1000\n1 <= wordDict[i].length <= 20\ns and wordDict[i] consist of only lowercase English letters.\nAll the strings of wordDict are unique.",
        "input_format": "string s, vector<string>& wordDict",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
                "output": "true",
                "explanation": "For the given input s = \"leetcode\", wordDict = [\"leet\",\"code\"], the expected output is true."
            },
            {
                "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]",
                "output": "true",
                "explanation": "For the given input s = \"applepenapple\", wordDict = [\"apple\",\"pen\"], the expected output is true."
            },
            {
                "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
                "output": "false",
                "explanation": "For the given input s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Word Break Possible.",
        "execution_config": {
            "functionName": "wordBreak",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "s",
                    "type": "string"
                },
                {
                    "name": "wordDict",
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
        "id": "92bda11d-fd3b-4192-acd3-5b55848a55e0",
        "title": "Decode Ways Count",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "A message containing letters from A-Z can be encoded into numbers using 'A' -> \"1\", 'B' -> \"2\", ... 'Z' -> \"26\". Given a string s containing only digits, return the number of ways to decode it.",
        "constraints": "1 <= s.length <= 100\ns contains only digits and may contain leading zero(s).",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"12\"",
                "output": "2",
                "explanation": "For the given input s = \"12\", the expected output is 2."
            },
            {
                "input": "s = \"226\"",
                "output": "3",
                "explanation": "For the given input s = \"226\", the expected output is 3."
            },
            {
                "input": "s = \"06\"",
                "output": "0",
                "explanation": "For the given input s = \"06\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Decode Ways Count.",
        "execution_config": {
            "functionName": "numDecodings",
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
        "id": "2d5058b6-d1ab-46ae-a003-ebc3611ef7ff",
        "title": "Jump Game Can Reach End",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.",
        "constraints": "1 <= nums.length <= 10^4\n0 <= nums[i] <= 10^5",
        "input_format": "vector<int>& nums",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [2,3,1,1,4]",
                "output": "true",
                "explanation": "For the given input nums = [2,3,1,1,4], the expected output is true."
            },
            {
                "input": "nums = [3,2,1,0,4]",
                "output": "false",
                "explanation": "For the given input nums = [3,2,1,0,4], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Jump Game Can Reach End.",
        "execution_config": {
            "functionName": "canJump",
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
        "id": "f9cf82ee-e266-4858-a98a-bbb6d3fc28c6",
        "title": "Jump Game II Minimum Jumps",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "BFS"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Return the minimum number of jumps to reach nums[n - 1].",
        "constraints": "1 <= nums.length <= 10^4\n0 <= nums[i] <= 1000\nIt's guaranteed that you can reach nums[n - 1].",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,3,1,1,4]",
                "output": "2",
                "explanation": "For the given input nums = [2,3,1,1,4], the expected output is 2."
            },
            {
                "input": "nums = [2,3,0,1,4]",
                "output": "2",
                "explanation": "For the given input nums = [2,3,0,1,4], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Jump Game II Minimum Jumps.",
        "execution_config": {
            "functionName": "jump",
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
        "id": "b6eefbdf-fc78-4e1e-a8dc-fa9dd6372f4b",
        "title": "Triangle Minimum Total Path",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below.",
        "constraints": "1 <= triangle.length <= 200\ntriangle[0].length == 1\ntriangle[i].length == triangle[i - 1].length + 1\n-10^4 <= triangle[i][j] <= 10^4",
        "input_format": "vector<vector<int>>& triangle",
        "output_format": "int",
        "examples": [
            {
                "input": "triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]",
                "output": "11",
                "explanation": "For the given input triangle = [[2],[3,4],[6,5,7],[4,1,8,3]], the expected output is 11."
            },
            {
                "input": "triangle = [[-10]]",
                "output": "-10",
                "explanation": "For the given input triangle = [[-10]], the expected output is -10."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Triangle Minimum Total Path.",
        "execution_config": {
            "functionName": "minimumTotal",
            "returnType": "int",
            "parameters": [
                {
                    "name": "triangle",
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
        "id": "2d20a3d2-7b28-41fc-a9b3-130dc6584637",
        "title": "Count Palindromic Substrings",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "2D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(1)",
        "description": "Given a string s, return the number of palindromic substrings in it. A substring is a contiguous sequence of characters within the string.",
        "constraints": "1 <= s.length <= 1000\ns consists of lowercase English letters.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"abc\"",
                "output": "3",
                "explanation": "For the given input s = \"abc\", the expected output is 3."
            },
            {
                "input": "s = \"aaa\"",
                "output": "6",
                "explanation": "For the given input s = \"aaa\", the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Palindromic Substrings.",
        "execution_config": {
            "functionName": "countSubstrings",
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
        "id": "ba2567d1-54cf-4b05-ac55-0cc8685adb34",
        "title": "Target Sum Assignment Ways",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "0/1 Knapsack"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n * sum)",
        "expected_space": "O(sum)",
        "description": "You are given an integer array nums and an integer target. Build an expression out of nums by adding '+' or '-' before each integer. Return the number of different expressions that evaluate to target.",
        "constraints": "1 <= nums.length <= 20\n0 <= nums[i] <= 1000\n0 <= sum(nums[i]) <= 1000\n-1000 <= target <= 1000",
        "input_format": "vector<int>& nums, int target",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,1,1,1,1], target = 3",
                "output": "5",
                "explanation": "For the given input nums = [1,1,1,1,1], target = 3, the expected output is 5."
            },
            {
                "input": "nums = [1], target = 1",
                "output": "1",
                "explanation": "For the given input nums = [1], target = 1, the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Target Sum Assignment Ways.",
        "execution_config": {
            "functionName": "findTargetSumWays",
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
        "id": "bcb5fc99-8d5f-413e-adee-a28a6dd7ae85",
        "title": "Integer Break Maximum Product",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "Math",
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers. Return the maximum product you can get.",
        "constraints": "2 <= n <= 58",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 2",
                "output": "1",
                "explanation": "For the given input n = 2, the expected output is 1."
            },
            {
                "input": "n = 10",
                "output": "36",
                "explanation": "For the given input n = 10, the expected output is 36."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Integer Break Maximum Product.",
        "execution_config": {
            "functionName": "integerBreak",
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
        "id": "3c8d63cc-68a8-429e-aa04-aa67afcd825b",
        "title": "Perfect Squares Minimum Count",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP",
            "BFS"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n * sqrt(n))",
        "expected_space": "O(n)",
        "description": "Given an integer n, return the least number of perfect square numbers that sum to n.",
        "constraints": "1 <= n <= 10^4",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 12",
                "output": "3",
                "explanation": "For the given input n = 12, the expected output is 3."
            },
            {
                "input": "n = 13",
                "output": "2",
                "explanation": "For the given input n = 13, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Perfect Squares Minimum Count.",
        "execution_config": {
            "functionName": "numSquares",
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
        "id": "c73e4e19-52ba-4fee-ae01-e1961b5c5fb7",
        "title": "Combination Sum IV Permutations Count",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(target * nums.length)",
        "expected_space": "O(target)",
        "description": "Given an array of distinct integers nums and a target integer target, return the number of possible combinations (permutations) that add up to target.",
        "constraints": "1 <= nums.length <= 200\n1 <= nums[i] <= 1000\nAll elements of nums are unique.\n1 <= target <= 1000",
        "input_format": "vector<int>& nums, int target",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,3], target = 4",
                "output": "7",
                "explanation": "For the given input nums = [1,2,3], target = 4, the expected output is 7."
            },
            {
                "input": "nums = [9], target = 3",
                "output": "0",
                "explanation": "For the given input nums = [9], target = 3, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Combination Sum IV Permutations Count.",
        "execution_config": {
            "functionName": "combinationSum4",
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
        "id": "ef2cfe4f-86ac-4947-a72d-aaf4e78a9934",
        "title": "Maximal Square Area in Binary Matrix",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.",
        "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 300\nmatrix[i][j] is '0' or '1'.",
        "input_format": "vector<vector<int>>& matrix",
        "output_format": "int",
        "examples": [
            {
                "input": "matrix = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]",
                "output": "4",
                "explanation": "For the given input matrix = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]], the expected output is 4."
            },
            {
                "input": "matrix = [[0,1],[1,0]]",
                "output": "1",
                "explanation": "For the given input matrix = [[0,1],[1,0]], the expected output is 1."
            },
            {
                "input": "matrix = [[0]]",
                "output": "0",
                "explanation": "For the given input matrix = [[0]], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximal Square Area in Binary Matrix.",
        "execution_config": {
            "functionName": "maximalSquare",
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
        "id": "30a1ca1d-def8-45fd-a291-7e03ef0c5cbb",
        "title": "Minimum Falling Path Sum",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix. A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right.",
        "constraints": "n == matrix.length == matrix[i].length\n1 <= n <= 100\n-100 <= matrix[i][j] <= 100",
        "input_format": "vector<vector<int>>& matrix",
        "output_format": "int",
        "examples": [
            {
                "input": "matrix = [[2,1,3],[6,5,4],[7,8,9]]",
                "output": "13",
                "explanation": "For the given input matrix = [[2,1,3],[6,5,4],[7,8,9]], the expected output is 13."
            },
            {
                "input": "matrix = [[-19,57],[-40,-5]]",
                "output": "-59",
                "explanation": "For the given input matrix = [[-19,57],[-40,-5]], the expected output is -59."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Falling Path Sum.",
        "execution_config": {
            "functionName": "minFallingPathSum",
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
        "id": "cb0e63d9-425e-48b7-a631-2bb74614412e",
        "title": "Counting Bits Array",
        "topic": "Dynamic Programming",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation",
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
        "constraints": "0 <= n <= 10^5",
        "input_format": "int n",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "n = 2",
                "output": "[0,1,1]",
                "explanation": "For the given input n = 2, the expected output is [0,1,1]."
            },
            {
                "input": "n = 5",
                "output": "[0,1,1,2,1,2]",
                "explanation": "For the given input n = 5, the expected output is [0,1,1,2,1,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Counting Bits Array.",
        "execution_config": {
            "functionName": "countBits",
            "returnType": "vector<int>",
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
        "id": "828bf3f4-3d33-489b-affc-e7206703e546",
        "title": "N-th Tribonacci Number",
        "topic": "Dynamic Programming",
        "difficulty": "Easy",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0. Given n, return the value of Tn.",
        "constraints": "0 <= n <= 37",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 4",
                "output": "4",
                "explanation": "For the given input n = 4, the expected output is 4."
            },
            {
                "input": "n = 25",
                "output": "1389537",
                "explanation": "For the given input n = 25, the expected output is 1389537."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for N-th Tribonacci Number.",
        "execution_config": {
            "functionName": "tribonacci",
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
        "id": "8c6f221b-eafb-455d-ae44-a8bdb9ab270d",
        "title": "Pascal's Triangle Row K",
        "topic": "Dynamic Programming",
        "difficulty": "Easy",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(k^2)",
        "expected_space": "O(k)",
        "description": "Given an integer rowIndex, return the rowIndex-th (0-indexed) row of the Pascal's triangle.",
        "constraints": "0 <= rowIndex <= 33",
        "input_format": "int rowIndex",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "rowIndex = 3",
                "output": "[1,3,3,1]",
                "explanation": "For the given input rowIndex = 3, the expected output is [1,3,3,1]."
            },
            {
                "input": "rowIndex = 0",
                "output": "[1]",
                "explanation": "For the given input rowIndex = 0, the expected output is [1]."
            },
            {
                "input": "rowIndex = 1",
                "output": "[1,1]",
                "explanation": "For the given input rowIndex = 1, the expected output is [1,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Pascal's Triangle Row K.",
        "execution_config": {
            "functionName": "getRow",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "rowIndex",
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
        "id": "396aed75-c993-4c78-a38b-642ebe0bf607",
        "title": "Divisor Game Alice Wins",
        "topic": "Dynamic Programming",
        "difficulty": "Easy",
        "patterns": [
            "Math",
            "Game Theory"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Alice and Bob take turns playing a game, with Alice starting first. Choosing 0 < x < n such that n % x == 0 and replacing n with n - x. Return true if and only if Alice wins the game, assuming optimal play.",
        "constraints": "1 <= n <= 1000",
        "input_format": "int n",
        "output_format": "bool",
        "examples": [
            {
                "input": "n = 2",
                "output": "true",
                "explanation": "For the given input n = 2, the expected output is true."
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
        "learning_objective": "Master algorithmic problem solving for Divisor Game Alice Wins.",
        "execution_config": {
            "functionName": "divisorGame",
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
        "id": "4236b8bd-3e3d-475d-a982-fe8300e825ae",
        "title": "Longest Palindromic Subsequence Length",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n^2)",
        "description": "Given a string s, find the longest palindromic subsequence's length in s.",
        "constraints": "1 <= s.length <= 1000\ns consists only of lowercase English letters.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"bbbab\"",
                "output": "4",
                "explanation": "For the given input s = \"bbbab\", the expected output is 4."
            },
            {
                "input": "s = \"cbbd\"",
                "output": "2",
                "explanation": "For the given input s = \"cbbd\", the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Palindromic Subsequence Length.",
        "execution_config": {
            "functionName": "longestPalindromeSubseq",
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
        "id": "703f57d5-28d6-4b3c-a702-d01bf7fd8d12",
        "title": "Buy and Sell Stock with Cooldown",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "State Machine DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an array prices. Find the maximum profit you can achieve. After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).",
        "constraints": "1 <= prices.length <= 5000\n0 <= prices[i] <= 1000",
        "input_format": "vector<int>& prices",
        "output_format": "int",
        "examples": [
            {
                "input": "prices = [1,2,3,0,2]",
                "output": "3",
                "explanation": "For the given input prices = [1,2,3,0,2], the expected output is 3."
            },
            {
                "input": "prices = [1]",
                "output": "0",
                "explanation": "For the given input prices = [1], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Buy and Sell Stock with Cooldown.",
        "execution_config": {
            "functionName": "maxProfit",
            "returnType": "int",
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
        "id": "a76f3449-e7c8-4da5-af04-ffa511939f13",
        "title": "Buy and Sell Stock with Transaction Fee",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "State Machine DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an array prices and an integer fee representing a transaction fee for each stock sale. Return the maximum profit you can achieve.",
        "constraints": "1 <= prices.length <= 5 * 10^4\n1 <= prices[i] < 5 * 10^4\n0 <= fee < 5 * 10^4",
        "input_format": "vector<int>& prices, int fee",
        "output_format": "int",
        "examples": [
            {
                "input": "prices = [1,3,2,8,4,9], fee = 2",
                "output": "8",
                "explanation": "For the given input prices = [1,3,2,8,4,9], fee = 2, the expected output is 8."
            },
            {
                "input": "prices = [1,3,7,5,10,3], fee = 3",
                "output": "6",
                "explanation": "For the given input prices = [1,3,7,5,10,3], fee = 3, the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Buy and Sell Stock with Transaction Fee.",
        "execution_config": {
            "functionName": "maxProfitFee",
            "returnType": "int",
            "parameters": [
                {
                    "name": "prices",
                    "type": "vector<int>&"
                },
                {
                    "name": "fee",
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
        "id": "1b8949ab-6763-41b3-ad66-7722a936f7a6",
        "title": "Minimum Cost For Train Tickets",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(days.length)",
        "expected_space": "O(max_day)",
        "description": "You have planned train travel days in an integer array days. Train tickets are sold in 1-day, 7-day, and 30-day passes with prices in costs array. Return the minimum expenditures you need to travel every day in your list of days.",
        "constraints": "1 <= days.length <= 365\n1 <= days[i] <= 365\ncosts.length == 3",
        "input_format": "vector<int>& days, vector<int>& costs",
        "output_format": "int",
        "examples": [
            {
                "input": "days = [1,4,6,7,8,20], costs = [2,7,15]",
                "output": "11",
                "explanation": "For the given input days = [1,4,6,7,8,20], costs = [2,7,15], the expected output is 11."
            },
            {
                "input": "days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]",
                "output": "17",
                "explanation": "For the given input days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15], the expected output is 17."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Cost For Train Tickets.",
        "execution_config": {
            "functionName": "mincostTickets",
            "returnType": "int",
            "parameters": [
                {
                    "name": "days",
                    "type": "vector<int>&"
                },
                {
                    "name": "costs",
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
        "id": "b6c01719-8caa-438c-a5b2-ec25d0eec839",
        "title": "Maximum Length of Repeated Subarray",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n * m)",
        "expected_space": "O(n * m)",
        "description": "Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.",
        "constraints": "1 <= nums1.length, nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 100",
        "input_format": "vector<int>& nums1, vector<int>& nums2",
        "output_format": "int",
        "examples": [
            {
                "input": "nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]",
                "output": "3",
                "explanation": "For the given input nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7], the expected output is 3."
            },
            {
                "input": "nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]",
                "output": "5",
                "explanation": "For the given input nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Length of Repeated Subarray.",
        "execution_config": {
            "functionName": "findLength",
            "returnType": "int",
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
        "id": "6e16c134-09f4-43d2-a151-936e0379968b",
        "title": "Longest Arithmetic Subsequence with Difference",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.",
        "constraints": "1 <= arr.length <= 10^5\n-10^4 <= arr[i], difference <= 10^4",
        "input_format": "vector<int>& arr, int difference",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [1,2,3,4], difference = 1",
                "output": "4",
                "explanation": "For the given input arr = [1,2,3,4], difference = 1, the expected output is 4."
            },
            {
                "input": "arr = [1,3,5,7], difference = 1",
                "output": "1",
                "explanation": "For the given input arr = [1,3,5,7], difference = 1, the expected output is 1."
            },
            {
                "input": "arr = [1,5,7,8,5,3,4,2,1], difference = -2",
                "output": "4",
                "explanation": "For the given input arr = [1,5,7,8,5,3,4,2,1], difference = -2, the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Arithmetic Subsequence with Difference.",
        "execution_config": {
            "functionName": "longestSubsequence",
            "returnType": "int",
            "parameters": [
                {
                    "name": "arr",
                    "type": "vector<int>&"
                },
                {
                    "name": "difference",
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
        "id": "11e3f698-70da-423c-a229-2a41817fb963",
        "title": "Interleaving String Check",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.",
        "constraints": "0 <= s1.length, s2.length <= 100\n0 <= s3.length <= 200",
        "input_format": "string s1, string s2, string s3",
        "output_format": "bool",
        "examples": [
            {
                "input": "s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"",
                "output": "true",
                "explanation": "For the given input s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\", the expected output is true."
            },
            {
                "input": "s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\"",
                "output": "false",
                "explanation": "For the given input s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\", the expected output is false."
            },
            {
                "input": "s1 = \"\", s2 = \"\", s3 = \"\"",
                "output": "true",
                "explanation": "For the given input s1 = \"\", s2 = \"\", s3 = \"\", the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Interleaving String Check.",
        "execution_config": {
            "functionName": "isInterleave",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "s1",
                    "type": "string"
                },
                {
                    "name": "s2",
                    "type": "string"
                },
                {
                    "name": "s3",
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
        "id": "2d814f8d-c185-4553-a387-9b040b1a9907",
        "title": "Get Maximum in Generated Array",
        "topic": "Dynamic Programming",
        "difficulty": "Easy",
        "patterns": [
            "Simulation",
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given an integer n. An array nums of length n + 1 is generated such that nums[0] = 0, nums[1] = 1, nums[2 * i] = nums[i], nums[2 * i + 1] = nums[i] + nums[i + 1]. Return the maximum integer in nums.",
        "constraints": "0 <= n <= 100",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 7",
                "output": "3",
                "explanation": "For the given input n = 7, the expected output is 3."
            },
            {
                "input": "n = 2",
                "output": "1",
                "explanation": "For the given input n = 2, the expected output is 1."
            },
            {
                "input": "n = 3",
                "output": "2",
                "explanation": "For the given input n = 3, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Get Maximum in Generated Array.",
        "execution_config": {
            "functionName": "getMaximumGenerated",
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
        "id": "ca21d848-7906-4203-ae2c-12dbd0e41a01",
        "title": "Greatest Sum Divisible by Three",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.",
        "constraints": "1 <= nums.length <= 4 * 10^4\n1 <= nums[i] <= 10^4",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,6,5,1,8]",
                "output": "18",
                "explanation": "For the given input nums = [3,6,5,1,8], the expected output is 18."
            },
            {
                "input": "nums = [4]",
                "output": "0",
                "explanation": "For the given input nums = [4], the expected output is 0."
            },
            {
                "input": "nums = [1,2,3,4,4]",
                "output": "12",
                "explanation": "For the given input nums = [1,2,3,4,4], the expected output is 12."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Greatest Sum Divisible by Three.",
        "execution_config": {
            "functionName": "maxSumDivThree",
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
        "id": "6b96a38d-d7dd-4108-af80-f1f33adba234",
        "title": "Matrix Block Sum",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP",
            "Prefix Sum"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for: i - k <= r <= i + k, j - k <= c <= j + k.",
        "constraints": "m == mat.length\nn == mat[i].length\n1 <= m, n, k <= 100\n1 <= mat[i][j] <= 100",
        "input_format": "vector<vector<int>>& mat, int k",
        "output_format": "vector<vector<int>>",
        "examples": [
            {
                "input": "mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1",
                "output": "[[12,21,16],[27,45,33],[24,39,28]]",
                "explanation": "For the given input mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1, the expected output is [[12,21,16],[27,45,33],[24,39,28]]."
            },
            {
                "input": "mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2",
                "output": "[[45,45,45],[45,45,45],[45,45,45]]",
                "explanation": "For the given input mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2, the expected output is [[45,45,45],[45,45,45],[45,45,45]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Matrix Block Sum.",
        "execution_config": {
            "functionName": "matrixBlockSum",
            "returnType": "vector<vector<int>>",
            "parameters": [
                {
                    "name": "mat",
                    "type": "vector<vector<int>>&"
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
        "id": "b3aeb9d1-4233-4e2b-a2e6-724a7f6f229a",
        "title": "Delete Operations for Two Strings",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.",
        "constraints": "1 <= word1.length, word2.length <= 500\nword1 and word2 consist of lowercase English letters.",
        "input_format": "string word1, string word2",
        "output_format": "int",
        "examples": [
            {
                "input": "word1 = \"sea\", word2 = \"eat\"",
                "output": "2",
                "explanation": "For the given input word1 = \"sea\", word2 = \"eat\", the expected output is 2."
            },
            {
                "input": "word1 = \"leetcode\", word2 = \"etco\"",
                "output": "4",
                "explanation": "For the given input word1 = \"leetcode\", word2 = \"etco\", the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Delete Operations for Two Strings.",
        "execution_config": {
            "functionName": "minDistance",
            "returnType": "int",
            "parameters": [
                {
                    "name": "word1",
                    "type": "string"
                },
                {
                    "name": "word2",
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
        "id": "5ca7e08f-b463-416e-ab4d-172b40ab443d",
        "title": "Number of Longest Increasing Subsequences",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums, return the number of longest increasing subsequences.",
        "constraints": "1 <= nums.length <= 2000\n-10^6 <= nums[i] <= 10^6",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,3,5,4,7]",
                "output": "2",
                "explanation": "For the given input nums = [1,3,5,4,7], the expected output is 2."
            },
            {
                "input": "nums = [2,2,2,2,2]",
                "output": "5",
                "explanation": "For the given input nums = [2,2,2,2,2], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of Longest Increasing Subsequences.",
        "execution_config": {
            "functionName": "findNumberOfLIS",
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
        "id": "b523802a-f22b-4ae8-a7a3-02c95307867b",
        "title": "Russian Doll Envelopes Maximum Fits",
        "topic": "Dynamic Programming",
        "difficulty": "Hard",
        "patterns": [
            "Binary Search",
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope. One envelope can fit into another if and only if both width and height are strictly greater. Return the maximum number of envelopes you can Russian doll.",
        "constraints": "1 <= envelopes.length <= 10^5\nenvelopes[i].length == 2\n1 <= wi, hi <= 10^5",
        "input_format": "vector<vector<int>>& envelopes",
        "output_format": "int",
        "examples": [
            {
                "input": "envelopes = [[5,4],[6,4],[6,7],[2,3]]",
                "output": "3",
                "explanation": "For the given input envelopes = [[5,4],[6,4],[6,7],[2,3]], the expected output is 3."
            },
            {
                "input": "envelopes = [[1,1],[1,1],[1,1]]",
                "output": "1",
                "explanation": "For the given input envelopes = [[1,1],[1,1],[1,1]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Russian Doll Envelopes Maximum Fits.",
        "execution_config": {
            "functionName": "maxEnvelopes",
            "returnType": "int",
            "parameters": [
                {
                    "name": "envelopes",
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
        "id": "877143e9-88bd-43c6-af5b-92c0a15fcf99",
        "title": "Maximum Subarray Sum with One Deletion",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of integers, return the maximum sum for a non-empty subarray with at most one element deletion.",
        "constraints": "1 <= arr.length <= 10^5\n-10^4 <= arr[i] <= 10^4",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [1,-2,0,3]",
                "output": "4",
                "explanation": "For the given input arr = [1,-2,0,3], the expected output is 4."
            },
            {
                "input": "arr = [1,-2,-2,3]",
                "output": "3",
                "explanation": "For the given input arr = [1,-2,-2,3], the expected output is 3."
            },
            {
                "input": "arr = [-1,-1,-1,-1]",
                "output": "-1",
                "explanation": "For the given input arr = [-1,-1,-1,-1], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Subarray Sum with One Deletion.",
        "execution_config": {
            "functionName": "maximumSum",
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
        "id": "af2f8e32-b23c-414a-a81d-3fc9547b9763",
        "title": "Longest String Chain Length",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n * l^2)",
        "expected_space": "O(n)",
        "description": "Given a list of words, each word consists of English lowercase letters. wordA is a predecessor of wordB if inserting one letter into wordA makes it equal to wordB. Return the length of the longest possible word chain.",
        "constraints": "1 <= words.length <= 1000\n1 <= words[i].length <= 16",
        "input_format": "vector<string>& words",
        "output_format": "int",
        "examples": [
            {
                "input": "words = [\"a\",\"b\",\"ba\",\"bca\",\"bda\",\"bdca\"]",
                "output": "4",
                "explanation": "For the given input words = [\"a\",\"b\",\"ba\",\"bca\",\"bda\",\"bdca\"], the expected output is 4."
            },
            {
                "input": "words = [\"xbc\",\"pcxbcf\",\"xb\",\"cxbc\",\"pcxbc\"]",
                "output": "5",
                "explanation": "For the given input words = [\"xbc\",\"pcxbcf\",\"xb\",\"cxbc\",\"pcxbc\"], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest String Chain Length.",
        "execution_config": {
            "functionName": "longestStrChain",
            "returnType": "int",
            "parameters": [
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
        "id": "aa155198-6578-48f8-a0cc-a3a0962880da",
        "title": "Ones and Zeroes 2D Knapsack",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP",
            "Knapsack"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(len * m * n)",
        "expected_space": "O(m * n)",
        "description": "You are given an array of binary strings strs and two integers m and n. Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.",
        "constraints": "1 <= strs.length <= 600\n1 <= strs[i].length <= 100\n1 <= m, n <= 100",
        "input_format": "vector<string>& strs, int m, int n",
        "output_format": "int",
        "examples": [
            {
                "input": "strs = [\"10\",\"0001\",\"111001\",\"1\",\"0\"], m = 5, n = 3",
                "output": "4",
                "explanation": "For the given input strs = [\"10\",\"0001\",\"111001\",\"1\",\"0\"], m = 5, n = 3, the expected output is 4."
            },
            {
                "input": "strs = [\"10\",\"0\",\"1\"], m = 1, n = 1",
                "output": "2",
                "explanation": "For the given input strs = [\"10\",\"0\",\"1\"], m = 1, n = 1, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Ones and Zeroes 2D Knapsack.",
        "execution_config": {
            "functionName": "findMaxForm",
            "returnType": "int",
            "parameters": [
                {
                    "name": "strs",
                    "type": "vector<string>&"
                },
                {
                    "name": "m",
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
        "id": "af112100-9cbf-4f13-a65a-2f837df1dc2f",
        "title": "Knight Dialer Total Distinct Numbers",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "1D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "The chess knight has a distinct movement on a phone keypad. Given an integer n, return how many distinct phone numbers of length n we can dial modulo 10^9 + 7.",
        "constraints": "1 <= n <= 5000",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 1",
                "output": "10",
                "explanation": "For the given input n = 1, the expected output is 10."
            },
            {
                "input": "n = 2",
                "output": "20",
                "explanation": "For the given input n = 2, the expected output is 20."
            },
            {
                "input": "n = 3131",
                "output": "136006598",
                "explanation": "For the given input n = 3131, the expected output is 136006598."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Knight Dialer Total Distinct Numbers.",
        "execution_config": {
            "functionName": "knightDialer",
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
        "id": "c6f332a8-cf54-41ae-acd5-b8b24f2c4ebf",
        "title": "Minimum ASCII Delete Sum for Two Strings",
        "topic": "Dynamic Programming",
        "difficulty": "Medium",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.",
        "constraints": "1 <= s1.length, s2.length <= 1000\ns1 and s2 consist of lowercase English letters.",
        "input_format": "string s1, string s2",
        "output_format": "int",
        "examples": [
            {
                "input": "s1 = \"sea\", s2 = \"eat\"",
                "output": "231",
                "explanation": "For the given input s1 = \"sea\", s2 = \"eat\", the expected output is 231."
            },
            {
                "input": "s1 = \"delete\", s2 = \"leet\"",
                "output": "403",
                "explanation": "For the given input s1 = \"delete\", s2 = \"leet\", the expected output is 403."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum ASCII Delete Sum for Two Strings.",
        "execution_config": {
            "functionName": "minimumDeleteSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "s1",
                    "type": "string"
                },
                {
                    "name": "s2",
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
        "id": "e32777ec-bd6c-4aca-ae4d-b6da10079061",
        "title": "Distinct Subsequences Target Count",
        "topic": "Dynamic Programming",
        "difficulty": "Hard",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given two strings s and t, return the number of distinct subsequences of s which equals t.",
        "constraints": "1 <= s.length, t.length <= 1000\ns and t consist of English letters.",
        "input_format": "string s, string t",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"rabbbit\", t = \"rabbit\"",
                "output": "3",
                "explanation": "For the given input s = \"rabbbit\", t = \"rabbit\", the expected output is 3."
            },
            {
                "input": "s = \"babgbag\", t = \"bag\"",
                "output": "5",
                "explanation": "For the given input s = \"babgbag\", t = \"bag\", the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Distinct Subsequences Target Count.",
        "execution_config": {
            "functionName": "numDistinct",
            "returnType": "int",
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
        "id": "a0ef9f10-21cb-4837-abf1-a99aac671f90",
        "title": "Dungeon Game Minimum Initial Health",
        "topic": "Dynamic Programming",
        "difficulty": "Hard",
        "patterns": [
            "2D DP"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon grid. The knight starts at top-left. Points can increase or decrease health. Determine the knight's minimum initial health so that he is able to rescue the princess (health must never drop <= 0).",
        "constraints": "m == dungeon.length\nn == dungeon[i].length\n1 <= m, n <= 200\n-1000 <= dungeon[i][j] <= 1000",
        "input_format": "vector<vector<int>>& dungeon",
        "output_format": "int",
        "examples": [
            {
                "input": "dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]",
                "output": "7",
                "explanation": "For the given input dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]], the expected output is 7."
            },
            {
                "input": "dungeon = [[0]]",
                "output": "1",
                "explanation": "For the given input dungeon = [[0]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Dungeon Game Minimum Initial Health.",
        "execution_config": {
            "functionName": "calculateMinimumHP",
            "returnType": "int",
            "parameters": [
                {
                    "name": "dungeon",
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
        "id": "3702b157-2013-47bd-a9a3-cb874f8487fb",
        "title": "Super Egg Drop Minimum Moves",
        "topic": "Dynamic Programming",
        "difficulty": "Hard",
        "patterns": [
            "Binary Search",
            "2D DP"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(k * log n)",
        "expected_space": "O(k)",
        "description": "You are given k identical eggs and you have access to a building with n floors labeled from 1 to n. Return the minimum number of moves that you need to determine with certainty what the highest floor f is from which an egg will not break.",
        "constraints": "1 <= k <= 100\n1 <= n <= 10^4",
        "input_format": "int k, int n",
        "output_format": "int",
        "examples": [
            {
                "input": "k = 1, n = 2",
                "output": "2",
                "explanation": "For the given input k = 1, n = 2, the expected output is 2."
            },
            {
                "input": "k = 2, n = 6",
                "output": "3",
                "explanation": "For the given input k = 2, n = 6, the expected output is 3."
            },
            {
                "input": "k = 3, n = 14",
                "output": "4",
                "explanation": "For the given input k = 3, n = 14, the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Super Egg Drop Minimum Moves.",
        "execution_config": {
            "functionName": "superEggDrop",
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
    }
];

export default DP_PROBLEMS;
