/**
 * Heaps Problems Dataset (20 problems)
 * CodeMedic Verified DSA Collection
 */

export const HEAP_PROBLEMS = [
    {
        "id": "dffc3496-6784-43c4-a8b3-4c59ba8e4440",
        "title": "Kth Largest Element in an Array",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Quickselect"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log k)",
        "expected_space": "O(k)",
        "description": "Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
        "constraints": "1 <= k <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,2,1,5,6,4], k = 2",
                "output": "5",
                "explanation": "For the given input nums = [3,2,1,5,6,4], k = 2, the expected output is 5."
            },
            {
                "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
                "output": "4",
                "explanation": "For the given input nums = [3,2,3,1,2,4,5,5,6], k = 4, the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Kth Largest Element in an Array.",
        "execution_config": {
            "functionName": "findKthLargest",
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
        "id": "84f64cd0-42ba-45f9-a018-8cb8923d0ee1",
        "title": "Top K Frequent Elements",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Hashing"
        ],
        "data_structures": [
            "Priority Queue",
            "Hash Map"
        ],
        "expected_time": "O(n log k)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums and an integer k, return the k most frequent elements sorted in ascending order.",
        "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\nk is in the range [1, the number of unique elements in the array].",
        "input_format": "vector<int>& nums, int k",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,1,1,2,2,3], k = 2",
                "output": "[1,2]",
                "explanation": "For the given input nums = [1,1,1,2,2,3], k = 2, the expected output is [1,2]."
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
        "learning_objective": "Master algorithmic problem solving for Top K Frequent Elements.",
        "execution_config": {
            "functionName": "topKFrequent",
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
        "id": "4c78d5c8-d7a1-4d5c-a6d4-d1f7267a676a",
        "title": "Last Stone Weight",
        "topic": "Heaps",
        "difficulty": "Easy",
        "patterns": [
            "Heap",
            "Simulation"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given an array of integers stones where stones[i] is the weight of the ith stone. Each turn, choose the heaviest two stones with weights x and y with x <= y: if x == y both destroyed; if x != y, stone of weight y - x remains. Return the weight of the last remaining stone (or 0).",
        "constraints": "1 <= stones.length <= 30\n1 <= stones[i] <= 1000",
        "input_format": "vector<int>& stones",
        "output_format": "int",
        "examples": [
            {
                "input": "stones = [2,7,4,1,8,1]",
                "output": "1",
                "explanation": "For the given input stones = [2,7,4,1,8,1], the expected output is 1."
            },
            {
                "input": "stones = [1]",
                "output": "1",
                "explanation": "For the given input stones = [1], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Last Stone Weight.",
        "execution_config": {
            "functionName": "lastStoneWeight",
            "returnType": "int",
            "parameters": [
                {
                    "name": "stones",
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
        "id": "50f9ed73-5433-40a0-a9f8-4845281529c5",
        "title": "Relative Ranks of Athletes",
        "topic": "Heaps",
        "difficulty": "Easy",
        "patterns": [
            "Heap",
            "Sorting"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. Return an array answer where answer[i] is the rank: \"Gold Medal\", \"Silver Medal\", \"Bronze Medal\", or \"4\", \"5\", etc.",
        "constraints": "n == score.length\n1 <= n <= 10^4\n0 <= score[i] <= 10^6\nAll the values in score are unique.",
        "input_format": "vector<int>& score",
        "output_format": "vector<string>",
        "examples": [
            {
                "input": "score = [5,4,3,2,1]",
                "output": "[\"Gold Medal\",\"Silver Medal\",\"Bronze Medal\",\"4\",\"5\"]",
                "explanation": "For the given input score = [5,4,3,2,1], the expected output is [\"Gold Medal\",\"Silver Medal\",\"Bronze Medal\",\"4\",\"5\"]."
            },
            {
                "input": "score = [10,3,8,9,4]",
                "output": "[\"Gold Medal\",\"5\",\"Bronze Medal\",\"Silver Medal\",\"4\"]",
                "explanation": "For the given input score = [10,3,8,9,4], the expected output is [\"Gold Medal\",\"5\",\"Bronze Medal\",\"Silver Medal\",\"4\"]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Relative Ranks of Athletes.",
        "execution_config": {
            "functionName": "findRelativeRanks",
            "returnType": "vector<string>",
            "parameters": [
                {
                    "name": "score",
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
        "id": "7d46dc31-0a8a-4182-a525-1a9ed5fa558a",
        "title": "Maximum Product of Two Elements in an Array",
        "topic": "Heaps",
        "difficulty": "Easy",
        "patterns": [
            "Heap"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).",
        "constraints": "2 <= nums.length <= 500\n1 <= nums[i] <= 10^3",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,4,5,2]",
                "output": "12",
                "explanation": "For the given input nums = [3,4,5,2], the expected output is 12."
            },
            {
                "input": "nums = [1,5,4,5]",
                "output": "16",
                "explanation": "For the given input nums = [1,5,4,5], the expected output is 16."
            },
            {
                "input": "nums = [3,7]",
                "output": "12",
                "explanation": "For the given input nums = [3,7], the expected output is 12."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Product of Two Elements in an Array.",
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
        "id": "e7368167-3543-4272-a1e3-9e5df92cd75f",
        "title": "Minimum Cost to Connect Sticks",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Greedy"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You have some number of sticks with positive integer lengths. You can connect any two sticks of lengths x and y by paying a cost of x + y. Return the minimum cost to connect all sticks into one stick.",
        "constraints": "1 <= sticks.length <= 10^4\n1 <= sticks[i] <= 10^4",
        "input_format": "vector<int>& sticks",
        "output_format": "int",
        "examples": [
            {
                "input": "sticks = [2,4,3]",
                "output": "14",
                "explanation": "For the given input sticks = [2,4,3], the expected output is 14."
            },
            {
                "input": "sticks = [1,8,3,5]",
                "output": "30",
                "explanation": "For the given input sticks = [1,8,3,5], the expected output is 30."
            },
            {
                "input": "sticks = [5]",
                "output": "0",
                "explanation": "For the given input sticks = [5], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Cost to Connect Sticks.",
        "execution_config": {
            "functionName": "connectSticks",
            "returnType": "int",
            "parameters": [
                {
                    "name": "sticks",
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
        "id": "20542772-2ea4-4063-ab3b-e19585635d0f",
        "title": "Reduce Array Size to The Half",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Greedy"
        ],
        "data_structures": [
            "Priority Queue",
            "Hash Map"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array. Return the minimum size of the set so that at least half of the integers of the array are removed.",
        "constraints": "2 <= arr.length <= 10^5\narr.length is even.\n1 <= arr[i] <= 10^5",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [3,3,3,3,5,5,5,2,2,7]",
                "output": "2",
                "explanation": "For the given input arr = [3,3,3,3,5,5,5,2,2,7], the expected output is 2."
            },
            {
                "input": "arr = [7,7,7,7,7,7]",
                "output": "1",
                "explanation": "For the given input arr = [7,7,7,7,7,7], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reduce Array Size to The Half.",
        "execution_config": {
            "functionName": "minSetSize",
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
        "id": "0c525afb-324d-43e2-a684-ec6287b40d39",
        "title": "K Pairs With Smallest Sums Smallest Sum",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(k log k)",
        "expected_space": "O(k)",
        "description": "You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k. Define a pair (u, v) which consists of one element from nums1 and one element from nums2. Return the sum of the kth pair with the smallest sum.",
        "constraints": "1 <= nums1.length, nums2.length <= 10^4\n-10^9 <= nums1[i], nums2[i] <= 10^9\n1 <= k <= 1000",
        "input_format": "vector<int>& nums1, vector<int>& nums2, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums1 = [1,7,11], nums2 = [2,4,6], k = 3",
                "output": "7",
                "explanation": "For the given input nums1 = [1,7,11], nums2 = [2,4,6], k = 3, the expected output is 7."
            },
            {
                "input": "nums1 = [1,1,2], nums2 = [1,2,3], k = 2",
                "output": "2",
                "explanation": "For the given input nums1 = [1,1,2], nums2 = [1,2,3], k = 2, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for K Pairs With Smallest Sums Smallest Sum.",
        "execution_config": {
            "functionName": "kthSmallestPairSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums1",
                    "type": "vector<int>&"
                },
                {
                    "name": "nums2",
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
        "id": "88aa8e84-6d25-4883-ac1f-7d9471cb0e47",
        "title": "Take Gifts From the Richest Pile",
        "topic": "Heaps",
        "difficulty": "Easy",
        "patterns": [
            "Heap",
            "Simulation"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(k log n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array gifts denoting the number of gifts in various piles. Every second for k seconds: choose the pile with the maximum gifts and leave behind floor(sqrt(gifts)). Return the remaining number of gifts.",
        "constraints": "1 <= gifts.length <= 1000\n1 <= gifts[i] <= 10^9\n1 <= k <= 1000",
        "input_format": "vector<int>& gifts, int k",
        "output_format": "long long",
        "examples": [
            {
                "input": "gifts = [25,64,9,4,100], k = 4",
                "output": "29",
                "explanation": "For the given input gifts = [25,64,9,4,100], k = 4, the expected output is 29."
            },
            {
                "input": "gifts = [1,1,1,1], k = 4",
                "output": "4",
                "explanation": "For the given input gifts = [1,1,1,1], k = 4, the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Take Gifts From the Richest Pile.",
        "execution_config": {
            "functionName": "pickGifts",
            "returnType": "long long",
            "parameters": [
                {
                    "name": "gifts",
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
        "id": "81594853-86b8-4023-af31-b55c31533a73",
        "title": "Minimum Operations to Halve Array Sum",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Greedy"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given an array nums of positive integers. In each operation, you can choose any number from nums and reduce it to exactly half the number. Return the minimum number of operations to reduce the sum of nums by at least half.",
        "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^7",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [5,19,8,1]",
                "output": "3",
                "explanation": "For the given input nums = [5,19,8,1], the expected output is 3."
            },
            {
                "input": "nums = [3,8,20]",
                "output": "3",
                "explanation": "For the given input nums = [3,8,20], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Operations to Halve Array Sum.",
        "execution_config": {
            "functionName": "halveArray",
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
        "id": "f59476ed-15e5-429d-acd3-4e09ed713490",
        "title": "Find Subsequence of Length K With Largest Sum",
        "topic": "Heaps",
        "difficulty": "Easy",
        "patterns": [
            "Heap",
            "Sorting"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest possible sum. Return the subsequence retaining the original order.",
        "constraints": "1 <= nums.length <= 1000\n-10^5 <= nums[i] <= 10^5\n1 <= k <= nums.length",
        "input_format": "vector<int>& nums, int k",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [2,1,3,3], k = 2",
                "output": "[3,3]",
                "explanation": "For the given input nums = [2,1,3,3], k = 2, the expected output is [3,3]."
            },
            {
                "input": "nums = [-1,-2,3,4], k = 3",
                "output": "[-1,3,4]",
                "explanation": "For the given input nums = [-1,-2,3,4], k = 3, the expected output is [-1,3,4]."
            },
            {
                "input": "nums = [3,4,3,3], k = 2",
                "output": "[3,4]",
                "explanation": "For the given input nums = [3,4,3,3], k = 2, the expected output is [3,4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Subsequence of Length K With Largest Sum.",
        "execution_config": {
            "functionName": "maxSubsequence",
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
        "id": "e88c2985-1aa6-470d-a973-af69801345e9",
        "title": "Maximum Subsequence Score",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Greedy",
            "Sorting"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "Given two 0-indexed integer arrays nums1 and nums2 of equal length n and an integer k. Choose a subsequence of indices of length k such that (sum of nums1 elements) * (min of nums2 elements) is maximized. Return the maximum possible score.",
        "constraints": "n == nums1.length == nums2.length\n1 <= n <= 10^5\n0 <= nums1[i], nums2[i] <= 10^5\n1 <= k <= n",
        "input_format": "vector<int>& nums1, vector<int>& nums2, int k",
        "output_format": "long long",
        "examples": [
            {
                "input": "nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3",
                "output": "12",
                "explanation": "For the given input nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3, the expected output is 12."
            },
            {
                "input": "nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1",
                "output": "30",
                "explanation": "For the given input nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1, the expected output is 30."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Subsequence Score.",
        "execution_config": {
            "functionName": "maxScore",
            "returnType": "long long",
            "parameters": [
                {
                    "name": "nums1",
                    "type": "vector<int>&"
                },
                {
                    "name": "nums2",
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
        "id": "aea98f2b-e074-4a5e-a0a3-bf7f75c7704f",
        "title": "Maximum Frequency in Reorganize String",
        "topic": "Heaps",
        "difficulty": "Easy",
        "patterns": [
            "Heap",
            "Hashing"
        ],
        "data_structures": [
            "Priority Queue",
            "Hash Map"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string s, return the frequency of the most common character in s.",
        "constraints": "1 <= s.length <= 500",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"aab\"",
                "output": "2",
                "explanation": "For the given input s = \"aab\", the expected output is 2."
            },
            {
                "input": "s = \"aaab\"",
                "output": "3",
                "explanation": "For the given input s = \"aaab\", the expected output is 3."
            },
            {
                "input": "s = \"leetcode\"",
                "output": "3",
                "explanation": "For the given input s = \"leetcode\", the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Frequency in Reorganize String.",
        "execution_config": {
            "functionName": "maxCharFrequency",
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
        "id": "0eaedaf9-f98f-4789-a8d9-f8cbccd1d01a",
        "title": "Sort Array by Value Counts Descending",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Hashing"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.",
        "constraints": "1 <= nums.length <= 100\n-100 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,1,2,2,2,3]",
                "output": "[3,1,1,2,2,2]",
                "explanation": "For the given input nums = [1,1,2,2,2,3], the expected output is [3,1,1,2,2,2]."
            },
            {
                "input": "nums = [2,3,1,3,2]",
                "output": "[1,3,3,2,2]",
                "explanation": "For the given input nums = [2,3,1,3,2], the expected output is [1,3,3,2,2]."
            },
            {
                "input": "nums = [-1,1,-6,4,5,-6,1,4,1]",
                "output": "[5,-1,4,4,-6,-6,1,1,1]",
                "explanation": "For the given input nums = [-1,1,-6,4,5,-6,1,4,1], the expected output is [5,-1,4,4,-6,-6,1,1,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sort Array by Value Counts Descending.",
        "execution_config": {
            "functionName": "frequencySort",
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
        "id": "69658139-9a98-42a1-abdc-c262905e6ebf",
        "title": "Make Array Zero by Subtracting Equal Amounts",
        "topic": "Heaps",
        "difficulty": "Easy",
        "patterns": [
            "Heap",
            "Hash Set"
        ],
        "data_structures": [
            "Priority Queue",
            "Hash Set"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given a non-negative integer array nums. In one operation, you must choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums, and subtract x from each positive element in nums. Return minimum operations to make all elements zero.",
        "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,5,0,3,5]",
                "output": "3",
                "explanation": "For the given input nums = [1,5,0,3,5], the expected output is 3."
            },
            {
                "input": "nums = [0]",
                "output": "0",
                "explanation": "For the given input nums = [0], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Make Array Zero by Subtracting Equal Amounts.",
        "execution_config": {
            "functionName": "minimumOperations",
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
        "id": "9ccb1ac6-145f-4e61-a95c-4ebfe46aaab9",
        "title": "The K Weakest Rows in a Matrix",
        "topic": "Heaps",
        "difficulty": "Easy",
        "patterns": [
            "Heap",
            "Sorting"
        ],
        "data_structures": [
            "Priority Queue",
            "Matrix"
        ],
        "expected_time": "O(m log m)",
        "expected_space": "O(m)",
        "description": "You are given an m x n binary matrix of 1's (soldiers) and 0's (civilians). The soldiers are positioned in front of the civilians. Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.",
        "constraints": "m == mat.length\nn == mat[i].length\n2 <= n, m <= 100\n1 <= k <= m",
        "input_format": "vector<vector<int>>& mat, int k",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3",
                "output": "[2,0,3]",
                "explanation": "For the given input mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3, the expected output is [2,0,3]."
            },
            {
                "input": "mat = [[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], k = 2",
                "output": "[0,2]",
                "explanation": "For the given input mat = [[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], k = 2, the expected output is [0,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for The K Weakest Rows in a Matrix.",
        "execution_config": {
            "functionName": "kWeakestRows",
            "returnType": "vector<int>",
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
        "id": "ea8746f8-aa1a-4869-a4e6-ff9b424708eb",
        "title": "Median of Sorted Numbers Array",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Two Pointers"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given a sorted array of numbers nums, return the median as a floating-point number.",
        "constraints": "1 <= nums.length <= 10^4",
        "input_format": "vector<int>& nums",
        "output_format": "double",
        "examples": [
            {
                "input": "nums = [1,2,3]",
                "output": "2",
                "explanation": "For the given input nums = [1,2,3], the expected output is 2."
            },
            {
                "input": "nums = [1,2,3,4]",
                "output": "2.5",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is 2.5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Median of Sorted Numbers Array.",
        "execution_config": {
            "functionName": "findMedian",
            "returnType": "double",
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
        "id": "ba0ada61-6476-49cd-acff-e20be93ea3ed",
        "title": "Maximum Number of Events That Can Be Attended",
        "topic": "Heaps",
        "difficulty": "Medium",
        "patterns": [
            "Heap",
            "Greedy"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given an array of events where events[i] = [startDay_i, endDay_i]. Every event i starts at startDay_i and ends at endDay_i. You can attend at most one event at any day. Return the maximum number of events you can attend.",
        "constraints": "1 <= events.length <= 10^5\nevents[i].length == 2\n1 <= startDay_i <= endDay_i <= 10^5",
        "input_format": "vector<vector<int>>& events",
        "output_format": "int",
        "examples": [
            {
                "input": "events = [[1,2],[2,3],[3,4]]",
                "output": "3",
                "explanation": "For the given input events = [[1,2],[2,3],[3,4]], the expected output is 3."
            },
            {
                "input": "events = [[1,2],[2,3],[3,4],[1,2]]",
                "output": "4",
                "explanation": "For the given input events = [[1,2],[2,3],[3,4],[1,2]], the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Number of Events That Can Be Attended.",
        "execution_config": {
            "functionName": "maxEvents",
            "returnType": "int",
            "parameters": [
                {
                    "name": "events",
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
        "id": "fd312458-5f9d-430e-a2db-6d87c49284fa",
        "title": "Minimum Elements Difference Among K Groups",
        "topic": "Heaps",
        "difficulty": "Hard",
        "patterns": [
            "Heap",
            "Sliding Window"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log k)",
        "expected_space": "O(k)",
        "description": "You have k lists of sorted integers. Find the minimum span (max - min) of a range that includes at least one number from each of the k lists.",
        "constraints": "nums.length == k\n1 <= k <= 3500\n1 <= nums[i].length <= 50",
        "input_format": "vector<vector<int>>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
                "output": "4",
                "explanation": "For the given input nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]], the expected output is 4."
            },
            {
                "input": "nums = [[1,2,3],[1,2,3],[1,2,3]]",
                "output": "0",
                "explanation": "For the given input nums = [[1,2,3],[1,2,3],[1,2,3]], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Elements Difference Among K Groups.",
        "execution_config": {
            "functionName": "smallestRangeSpan",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
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
        "id": "1b4167e8-e875-4a97-a3ea-73b0436416a5",
        "title": "IPO Maximum Capital",
        "topic": "Heaps",
        "difficulty": "Hard",
        "patterns": [
            "Heap",
            "Greedy"
        ],
        "data_structures": [
            "Priority Queue",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "Suppose LeetCode will start its IPO soon. You are given n projects with profits and minimum capital required. Given k projects and initial capital w, return the final maximized capital.",
        "constraints": "1 <= k <= 10^5\n0 <= w <= 10^9\nn == profits.length == capital.length\n1 <= n <= 10^5\n0 <= profits[i] <= 10^4\n0 <= capital[i] <= 10^9",
        "input_format": "int k, int w, vector<int>& profits, vector<int>& capital",
        "output_format": "int",
        "examples": [
            {
                "input": "k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]",
                "output": "4",
                "explanation": "For the given input k = 2, w = 0, profits = [1,2,3], capital = [0,1,1], the expected output is 4."
            },
            {
                "input": "k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]",
                "output": "6",
                "explanation": "For the given input k = 3, w = 0, profits = [1,2,3], capital = [0,1,2], the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for IPO Maximum Capital.",
        "execution_config": {
            "functionName": "findMaximizedCapital",
            "returnType": "int",
            "parameters": [
                {
                    "name": "k",
                    "type": "int"
                },
                {
                    "name": "w",
                    "type": "int"
                },
                {
                    "name": "profits",
                    "type": "vector<int>&"
                },
                {
                    "name": "capital",
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

export default HEAP_PROBLEMS;
