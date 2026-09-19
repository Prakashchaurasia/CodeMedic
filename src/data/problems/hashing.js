/**
 * Hashing Problems Dataset (35 problems)
 * CodeMedic Verified DSA Collection
 */

export const HASHING_PROBLEMS = [
    {
        "id": "8883fc25-77fd-40e3-af3c-bd574282df17",
        "title": "Contains Duplicate",
        "topic": "Hashing",
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
        "description": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
        "input_format": "vector<int>& nums",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [1,2,3,1]",
                "output": "true",
                "explanation": "For the given input nums = [1,2,3,1], the expected output is true."
            },
            {
                "input": "nums = [1,2,3,4]",
                "output": "false",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is false."
            },
            {
                "input": "nums = [1,1,1,3,3,4,3,2,4,2]",
                "output": "true",
                "explanation": "For the given input nums = [1,1,1,3,3,4,3,2,4,2], the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Contains Duplicate.",
        "execution_config": {
            "functionName": "containsDuplicate",
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
        "id": "cb3a31da-abcf-4c95-a67a-fce7f3a71dbf",
        "title": "Contains Duplicate II",
        "topic": "Hashing",
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
        "expected_space": "O(min(n, k))",
        "description": "Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.",
        "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9\n0 <= k <= 10^5",
        "input_format": "vector<int>& nums, int k",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [1,2,3,1], k = 3",
                "output": "true",
                "explanation": "For the given input nums = [1,2,3,1], k = 3, the expected output is true."
            },
            {
                "input": "nums = [1,0,1,1], k = 1",
                "output": "true",
                "explanation": "For the given input nums = [1,0,1,1], k = 1, the expected output is true."
            },
            {
                "input": "nums = [1,2,3,1,2,3], k = 2",
                "output": "false",
                "explanation": "For the given input nums = [1,2,3,1,2,3], k = 2, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Contains Duplicate II.",
        "execution_config": {
            "functionName": "containsNearbyDuplicate",
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
        "id": "66955788-73af-4c34-a69d-955a7a29b250",
        "title": "Subarray Sum Equals K",
        "topic": "Hashing",
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
        "learning_objective": "Master algorithmic problem solving for Subarray Sum Equals K.",
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
        "id": "394f6b3d-b21e-442a-aa23-cee601ff3808",
        "title": "Longest Consecutive Sequence",
        "topic": "Hashing",
        "difficulty": "Medium",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(n) runtime.",
        "constraints": "0 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [100,4,200,1,3,2]",
                "output": "4",
                "explanation": "For the given input nums = [100,4,200,1,3,2], the expected output is 4."
            },
            {
                "input": "nums = [0,3,7,2,5,8,4,6,0,1]",
                "output": "9",
                "explanation": "For the given input nums = [0,3,7,2,5,8,4,6,0,1], the expected output is 9."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Consecutive Sequence.",
        "execution_config": {
            "functionName": "longestConsecutive",
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
        "id": "db7662ff-b9e0-45a3-ad2d-39fa5870bd97",
        "title": "Intersection of Two Arrays",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "Array"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(n + m)",
        "description": "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and sorted in ascending order.",
        "constraints": "1 <= nums1.length, nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 1000",
        "input_format": "vector<int>& nums1, vector<int>& nums2",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums1 = [1,2,2,1], nums2 = [2,2]",
                "output": "[2]",
                "explanation": "For the given input nums1 = [1,2,2,1], nums2 = [2,2], the expected output is [2]."
            },
            {
                "input": "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
                "output": "[4,9]",
                "explanation": "For the given input nums1 = [4,9,5], nums2 = [9,4,9,8,4], the expected output is [4,9]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Intersection of Two Arrays.",
        "execution_config": {
            "functionName": "intersection",
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
        "id": "99cc8abe-6686-4ba2-adc5-40fae5352677",
        "title": "Intersection of Two Arrays II",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(min(n, m))",
        "description": "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays. Return the result sorted in ascending order.",
        "constraints": "1 <= nums1.length, nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 1000",
        "input_format": "vector<int>& nums1, vector<int>& nums2",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums1 = [1,2,2,1], nums2 = [2,2]",
                "output": "[2,2]",
                "explanation": "For the given input nums1 = [1,2,2,1], nums2 = [2,2], the expected output is [2,2]."
            },
            {
                "input": "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
                "output": "[4,9]",
                "explanation": "For the given input nums1 = [4,9,5], nums2 = [9,4,9,8,4], the expected output is [4,9]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Intersection of Two Arrays II.",
        "execution_config": {
            "functionName": "intersect",
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
        "id": "072a576d-a5d5-435b-a271-56ec6e8e415f",
        "title": "Four Sum II Count",
        "topic": "Hashing",
        "difficulty": "Medium",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n^2)",
        "description": "Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0.",
        "constraints": "n == nums1.length == nums2.length == nums3.length == nums4.length\n1 <= n <= 200\n-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28 - 1",
        "input_format": "vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4",
        "output_format": "int",
        "examples": [
            {
                "input": "nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]",
                "output": "2",
                "explanation": "For the given input nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2], the expected output is 2."
            },
            {
                "input": "nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]",
                "output": "1",
                "explanation": "For the given input nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Four Sum II Count.",
        "execution_config": {
            "functionName": "fourSumCount",
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
                    "name": "nums3",
                    "type": "vector<int>&"
                },
                {
                    "name": "nums4",
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
        "id": "4f31dc64-1cff-4182-a12e-22b6de973b04",
        "title": "Number of Good Pairs",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.",
        "constraints": "1 <= nums.length <= 100\n1 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,3,1,1,3]",
                "output": "4",
                "explanation": "For the given input nums = [1,2,3,1,1,3], the expected output is 4."
            },
            {
                "input": "nums = [1,1,1,1]",
                "output": "6",
                "explanation": "For the given input nums = [1,1,1,1], the expected output is 6."
            },
            {
                "input": "nums = [1,2,3]",
                "output": "0",
                "explanation": "For the given input nums = [1,2,3], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of Good Pairs.",
        "execution_config": {
            "functionName": "numIdenticalPairs",
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
        "id": "7c3216b1-805c-4f9b-a063-b824dc709a62",
        "title": "Unique Number of Occurrences",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Hash Set"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.",
        "constraints": "1 <= arr.length <= 1000\n-1000 <= arr[i] <= 1000",
        "input_format": "vector<int>& arr",
        "output_format": "bool",
        "examples": [
            {
                "input": "arr = [1,2,2,1,1,3]",
                "output": "true",
                "explanation": "For the given input arr = [1,2,2,1,1,3], the expected output is true."
            },
            {
                "input": "arr = [1,2]",
                "output": "false",
                "explanation": "For the given input arr = [1,2], the expected output is false."
            },
            {
                "input": "arr = [-3,0,1,-3,1,1,1,-3,10,0]",
                "output": "true",
                "explanation": "For the given input arr = [-3,0,1,-3,1,1,1,-3,10,0], the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Unique Number of Occurrences.",
        "execution_config": {
            "functionName": "uniqueOccurrences",
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
        "id": "ff47224e-debe-4317-ab04-678918ad4c61",
        "title": "Jewels and Stones Count",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "String"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(n)",
        "description": "You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.",
        "constraints": "1 <= jewels.length, stones.length <= 50\njewels and stones consist of only English letters.\nAll the characters of jewels are unique.",
        "input_format": "string jewels, string stones",
        "output_format": "int",
        "examples": [
            {
                "input": "jewels = \"aA\", stones = \"aAAbbbb\"",
                "output": "3",
                "explanation": "For the given input jewels = \"aA\", stones = \"aAAbbbb\", the expected output is 3."
            },
            {
                "input": "jewels = \"z\", stones = \"ZZ\"",
                "output": "0",
                "explanation": "For the given input jewels = \"z\", stones = \"ZZ\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Jewels and Stones Count.",
        "execution_config": {
            "functionName": "numJewelsInStones",
            "returnType": "int",
            "parameters": [
                {
                    "name": "jewels",
                    "type": "string"
                },
                {
                    "name": "stones",
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
        "id": "716e4228-1d44-4958-a809-25fcf1584591",
        "title": "Ransom Note Can Construct",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(1)",
        "description": "Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.",
        "constraints": "1 <= ransomNote.length, magazine.length <= 10^5\nransomNote and magazine consist of lowercase English letters.",
        "input_format": "string ransomNote, string magazine",
        "output_format": "bool",
        "examples": [
            {
                "input": "ransomNote = \"a\", magazine = \"b\"",
                "output": "false",
                "explanation": "For the given input ransomNote = \"a\", magazine = \"b\", the expected output is false."
            },
            {
                "input": "ransomNote = \"aa\", magazine = \"ab\"",
                "output": "false",
                "explanation": "For the given input ransomNote = \"aa\", magazine = \"ab\", the expected output is false."
            },
            {
                "input": "ransomNote = \"aa\", magazine = \"aab\"",
                "output": "true",
                "explanation": "For the given input ransomNote = \"aa\", magazine = \"aab\", the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Ransom Note Can Construct.",
        "execution_config": {
            "functionName": "canConstruct",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "ransomNote",
                    "type": "string"
                },
                {
                    "name": "magazine",
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
        "id": "141f84b2-d657-4e84-a003-25d13403e0ea",
        "title": "Isomorphic Strings",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.",
        "constraints": "1 <= s.length <= 5 * 10^4\nt.length == s.length\ns and t consist of any valid ascii character.",
        "input_format": "string s, string t",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"egg\", t = \"add\"",
                "output": "true",
                "explanation": "For the given input s = \"egg\", t = \"add\", the expected output is true."
            },
            {
                "input": "s = \"foo\", t = \"bar\"",
                "output": "false",
                "explanation": "For the given input s = \"foo\", t = \"bar\", the expected output is false."
            },
            {
                "input": "s = \"paper\", t = \"title\"",
                "output": "true",
                "explanation": "For the given input s = \"paper\", t = \"title\", the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Isomorphic Strings.",
        "execution_config": {
            "functionName": "isIsomorphic",
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
        "id": "9ffb26fc-25e7-4a5a-a331-be0a9ea078a2",
        "title": "Distribute Candies",
        "topic": "Hashing",
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
        "description": "Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. The doctor advised Alice to only eat n / 2 of the candies she has. Return the maximum number of different types of candies she can eat.",
        "constraints": "n == candyType.length\n2 <= n <= 10^4\nn is even.\n-10^5 <= candyType[i] <= 10^5",
        "input_format": "vector<int>& candyType",
        "output_format": "int",
        "examples": [
            {
                "input": "candyType = [1,1,2,2,3,3]",
                "output": "3",
                "explanation": "For the given input candyType = [1,1,2,2,3,3], the expected output is 3."
            },
            {
                "input": "candyType = [1,1,2,3]",
                "output": "2",
                "explanation": "For the given input candyType = [1,1,2,3], the expected output is 2."
            },
            {
                "input": "candyType = [6,6,6,6]",
                "output": "1",
                "explanation": "For the given input candyType = [6,6,6,6], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Distribute Candies.",
        "execution_config": {
            "functionName": "distributeCandies",
            "returnType": "int",
            "parameters": [
                {
                    "name": "candyType",
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
        "id": "a7f79ca7-9323-4b94-a030-d9e56fc885f5",
        "title": "Find Lucky Integer in an Array",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value. Return the largest lucky integer in the array. If there is no lucky integer return -1.",
        "constraints": "1 <= arr.length <= 500\n1 <= arr[i] <= 500",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [2,2,3,4]",
                "output": "2",
                "explanation": "For the given input arr = [2,2,3,4], the expected output is 2."
            },
            {
                "input": "arr = [1,2,2,3,3,3]",
                "output": "3",
                "explanation": "For the given input arr = [1,2,2,3,3,3], the expected output is 3."
            },
            {
                "input": "arr = [2,2,2,3,3]",
                "output": "-1",
                "explanation": "For the given input arr = [2,2,2,3,3], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Lucky Integer in an Array.",
        "execution_config": {
            "functionName": "findLucky",
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
        "id": "a30d1bec-31a3-4b0c-aab0-f9e6ec74b8f8",
        "title": "Contiguous Array Max Length",
        "topic": "Hashing",
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
        "description": "Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.",
        "constraints": "1 <= nums.length <= 10^5\nnums[i] is either 0 or 1.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [0,1]",
                "output": "2",
                "explanation": "For the given input nums = [0,1], the expected output is 2."
            },
            {
                "input": "nums = [0,1,0]",
                "output": "2",
                "explanation": "For the given input nums = [0,1,0], the expected output is 2."
            },
            {
                "input": "nums = [0,0,1,0,0,0,1,1]",
                "output": "6",
                "explanation": "For the given input nums = [0,0,1,0,0,0,1,1], the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Contiguous Array Max Length.",
        "execution_config": {
            "functionName": "findMaxLength",
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
        "id": "3215ae1f-8427-48f2-ab53-af71f0f1cc43",
        "title": "Subarray Sums Divisible by K",
        "topic": "Hashing",
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
        "description": "Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.",
        "constraints": "1 <= nums.length <= 3 * 10^4\n-10^4 <= nums[i] <= 10^4\n2 <= k <= 10^4",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [4,5,0,-2,-3,1], k = 5",
                "output": "7",
                "explanation": "For the given input nums = [4,5,0,-2,-3,1], k = 5, the expected output is 7."
            },
            {
                "input": "nums = [5], k = 9",
                "output": "0",
                "explanation": "For the given input nums = [5], k = 9, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Subarray Sums Divisible by K.",
        "execution_config": {
            "functionName": "subarraysDivByK",
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
        "id": "d034adf9-e095-4a27-a31f-130d58019952",
        "title": "Continuous Subarray Sum Exists",
        "topic": "Hashing",
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
        "expected_space": "O(min(n, k))",
        "description": "Given an integer array nums and an integer k, return true if nums has a good subarray, or false otherwise. A good subarray is a subarray of at least length 2 whose elements sum up to a multiple of k.",
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
        "learning_objective": "Master algorithmic problem solving for Continuous Subarray Sum Exists.",
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
        "id": "59357cd8-0d63-4efb-aa49-7438f112a013",
        "title": "Degree of an Array Shortest Subarray",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements. Find the smallest length of a contiguous subarray of nums that has the same degree as nums.",
        "constraints": "1 <= nums.length <= 50,000\n0 <= nums[i] < 50,000",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,2,2,3,1]",
                "output": "2",
                "explanation": "For the given input nums = [1,2,2,3,1], the expected output is 2."
            },
            {
                "input": "nums = [1,2,2,3,1,4,2]",
                "output": "6",
                "explanation": "For the given input nums = [1,2,2,3,1,4,2], the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Degree of an Array Shortest Subarray.",
        "execution_config": {
            "functionName": "findShortestSubArray",
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
        "id": "dc9b2aac-8a04-423a-a02d-0bbad9908184",
        "title": "Set Mismatch",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, one number got duplicated to another number in the set, which results in repetition of one number and loss of another number. Find [duplicate, missing].",
        "constraints": "2 <= nums.length <= 10^4\n1 <= nums[i] <= 10^4",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,2,2,4]",
                "output": "[2,3]",
                "explanation": "For the given input nums = [1,2,2,4], the expected output is [2,3]."
            },
            {
                "input": "nums = [1,1]",
                "output": "[1,2]",
                "explanation": "For the given input nums = [1,1], the expected output is [1,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Set Mismatch.",
        "execution_config": {
            "functionName": "findErrorNums",
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
        "id": "8acf5b0c-fad3-4d1d-abd5-ba0dde4141d4",
        "title": "Check If Array Pairs Are Divisible by k",
        "topic": "Hashing",
        "difficulty": "Medium",
        "patterns": [
            "Hashing",
            "Math"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(k)",
        "description": "Given an array of integers arr of even length n and an integer k. We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k. Return true If you can find a way to do that or false otherwise.",
        "constraints": "arr.length == n\n1 <= n <= 10^5\nn is even.\n-10^9 <= arr[i] <= 10^9\n1 <= k <= 10^5",
        "input_format": "vector<int>& arr, int k",
        "output_format": "bool",
        "examples": [
            {
                "input": "arr = [1,2,3,4,5,10,6,7,8,9], k = 5",
                "output": "true",
                "explanation": "For the given input arr = [1,2,3,4,5,10,6,7,8,9], k = 5, the expected output is true."
            },
            {
                "input": "arr = [1,2,3,4,5,6], k = 7",
                "output": "true",
                "explanation": "For the given input arr = [1,2,3,4,5,6], k = 7, the expected output is true."
            },
            {
                "input": "arr = [1,2,3,4,5,6], k = 10",
                "output": "false",
                "explanation": "For the given input arr = [1,2,3,4,5,6], k = 10, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check If Array Pairs Are Divisible by k.",
        "execution_config": {
            "functionName": "canArrange",
            "returnType": "bool",
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
        "id": "f214a13e-b4a4-49ac-a189-f1bad83999ce",
        "title": "Minimum Index Sum of Two Lists",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(n)",
        "description": "Given two arrays of strings list1 and list2, find the common strings with the least index sum. Return all the common strings with the least index sum sorted alphabetically.",
        "constraints": "1 <= list1.length, list2.length <= 1000\n1 <= list1[i].length, list2[i].length <= 30\nlist1 and list2 consist of spaces ' ' and English letters.\nAll strings of list1 and list2 are unique within each list.",
        "input_format": "vector<string>& list1, vector<string>& list2",
        "output_format": "vector<string>",
        "examples": [
            {
                "input": "list1 = [\"Shogun\",\"Tapioca Express\",\"Burger King\",\"KFC\"], list2 = [\"Piatti\",\"The Grill at Torrey Pines\",\"Hungry Hunter Steakhouse\",\"Shogun\"]",
                "output": "[\"Shogun\"]",
                "explanation": "For the given input list1 = [\"Shogun\",\"Tapioca Express\",\"Burger King\",\"KFC\"], list2 = [\"Piatti\",\"The Grill at Torrey Pines\",\"Hungry Hunter Steakhouse\",\"Shogun\"], the expected output is [\"Shogun\"]."
            },
            {
                "input": "list1 = [\"Shogun\",\"Tapioca Express\",\"Burger King\",\"KFC\"], list2 = [\"KFC\",\"Shogun\",\"Burger King\"]",
                "output": "[\"Shogun\"]",
                "explanation": "For the given input list1 = [\"Shogun\",\"Tapioca Express\",\"Burger King\",\"KFC\"], list2 = [\"KFC\",\"Shogun\",\"Burger King\"], the expected output is [\"Shogun\"]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Index Sum of Two Lists.",
        "execution_config": {
            "functionName": "findRestaurant",
            "returnType": "vector<string>",
            "parameters": [
                {
                    "name": "list1",
                    "type": "vector<string>&"
                },
                {
                    "name": "list2",
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
        "id": "65bf4909-ec77-4f8e-a38c-febc5c67662e",
        "title": "Sort Characters By Frequency",
        "topic": "Hashing",
        "difficulty": "Medium",
        "patterns": [
            "Hashing",
            "Sorting"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n log k)",
        "expected_space": "O(n)",
        "description": "Given a string s, sort it in decreasing order based on the frequency of the characters. If frequencies are equal, alphabetical tie-breaking applies.",
        "constraints": "1 <= s.length <= 5 * 10^5\ns consists of uppercase and lowercase English letters and digits.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"tree\"",
                "output": "\"eert\"",
                "explanation": "For the given input s = \"tree\", the expected output is \"eert\"."
            },
            {
                "input": "s = \"cccaaa\"",
                "output": "\"aaaccc\"",
                "explanation": "For the given input s = \"cccaaa\", the expected output is \"aaaccc\"."
            },
            {
                "input": "s = \"Aabb\"",
                "output": "\"bbaA\"",
                "explanation": "For the given input s = \"Aabb\", the expected output is \"bbaA\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sort Characters By Frequency.",
        "execution_config": {
            "functionName": "frequencySort",
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
        "id": "98fd2243-c4d3-4b90-ad76-8faa31493db9",
        "title": "Find Players With Zero Losses Count",
        "topic": "Hashing",
        "difficulty": "Medium",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array matches where matches[i] = [winner_i, loser_i] indicates that the player winner_i defeated player loser_i in a match. Return the count of players that have not lost any matches.",
        "constraints": "1 <= matches.length <= 10^5\nmatches[i].length == 2\n1 <= winner_i, loser_i <= 10^5\nwinner_i != loser_i",
        "input_format": "vector<vector<int>>& matches",
        "output_format": "int",
        "examples": [
            {
                "input": "matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]",
                "output": "3",
                "explanation": "For the given input matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]], the expected output is 3."
            },
            {
                "input": "matches = [[2,3],[1,3],[5,4],[6,4]]",
                "output": "4",
                "explanation": "For the given input matches = [[2,3],[1,3],[5,4],[6,4]], the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Players With Zero Losses Count.",
        "execution_config": {
            "functionName": "findUndefeatedPlayersCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "matches",
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
        "id": "a411ceee-9286-41ae-a62e-92b61ef911a3",
        "title": "Optimal Partition of String",
        "topic": "Hashing",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. Return the minimum number of substrings in such a partition.",
        "constraints": "1 <= s.length <= 10^5\ns consists of only English lowercase letters.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"abacaba\"",
                "output": "4",
                "explanation": "For the given input s = \"abacaba\", the expected output is 4."
            },
            {
                "input": "s = \"ssssss\"",
                "output": "6",
                "explanation": "For the given input s = \"ssssss\", the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Optimal Partition of String.",
        "execution_config": {
            "functionName": "partitionString",
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
        "id": "e86d14e2-b3de-445d-a716-47b7a8f3007f",
        "title": "Destination City",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Set"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given the array paths, where paths[i] = [cityA_i, cityB_i] means there exists a direct path from cityA to cityB. Return the destination city, that is, the city without any path outgoing to another city.",
        "constraints": "1 <= paths.length <= 100\npaths[i].length == 2\n1 <= cityA_i.length, cityB_i.length <= 10\ncityA_i != cityB_i",
        "input_format": "vector<vector<string>>& paths",
        "output_format": "string",
        "examples": [
            {
                "input": "paths = [[\"London\",\"New York\"],[\"New York\",\"Lima\"],[\"Lima\",\"Sao Paulo\"]]",
                "output": "\"Sao Paulo\"",
                "explanation": "For the given input paths = [[\"London\",\"New York\"],[\"New York\",\"Lima\"],[\"Lima\",\"Sao Paulo\"]], the expected output is \"Sao Paulo\"."
            },
            {
                "input": "paths = [[\"B\",\"C\"],[\"D\",\"B\"],[\"C\",\"A\"]]",
                "output": "\"A\"",
                "explanation": "For the given input paths = [[\"B\",\"C\"],[\"D\",\"B\"],[\"C\",\"A\"]], the expected output is \"A\"."
            },
            {
                "input": "paths = [[\"A\",\"Z\"]]",
                "output": "\"Z\"",
                "explanation": "For the given input paths = [[\"A\",\"Z\"]], the expected output is \"Z\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Destination City.",
        "execution_config": {
            "functionName": "destCity",
            "returnType": "string",
            "parameters": [
                {
                    "name": "paths",
                    "type": "vector<vector<string>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "19e2d048-223d-4bf5-acc5-1d0abdcb2778",
        "title": "Maximum Number of Pairs in Array",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given a 0-indexed integer array nums. In one operation you may form a pair of equal elements and remove them. Return an integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers.",
        "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [1,3,2,1,3,2,2]",
                "output": "[3,1]",
                "explanation": "For the given input nums = [1,3,2,1,3,2,2], the expected output is [3,1]."
            },
            {
                "input": "nums = [1,1]",
                "output": "[1,0]",
                "explanation": "For the given input nums = [1,1], the expected output is [1,0]."
            },
            {
                "input": "nums = [0]",
                "output": "[0,1]",
                "explanation": "For the given input nums = [0], the expected output is [0,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Number of Pairs in Array.",
        "execution_config": {
            "functionName": "numberOfPairs",
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
        "id": "68a00edf-7649-4ee0-a831-f412b6310f00",
        "title": "Find the Difference of Two Arrays",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "Array"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(n + m)",
        "description": "Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where answer[0] is a list of all distinct integers in nums1 which are not present in nums2, and answer[1] is in nums2 not in nums1. Sort both inner lists in ascending order.",
        "constraints": "1 <= nums1.length, nums2.length <= 1000\n-1000 <= nums1[i], nums2[i] <= 1000",
        "input_format": "vector<int>& nums1, vector<int>& nums2",
        "output_format": "vector<vector<int>>",
        "examples": [
            {
                "input": "nums1 = [1,2,3], nums2 = [2,4,6]",
                "output": "[[1,3],[4,6]]",
                "explanation": "For the given input nums1 = [1,2,3], nums2 = [2,4,6], the expected output is [[1,3],[4,6]]."
            },
            {
                "input": "nums1 = [1,2,3,3], nums2 = [1,1,2,2]",
                "output": "[[3],[]]",
                "explanation": "For the given input nums1 = [1,2,3,3], nums2 = [1,1,2,2], the expected output is [[3],[]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find the Difference of Two Arrays.",
        "execution_config": {
            "functionName": "findDifference",
            "returnType": "vector<vector<int>>",
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
        "id": "80a33397-54ce-4244-a6e7-fe2af4124813",
        "title": "Two Out of Three Distinct Values",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "Array"
        ],
        "expected_time": "O(n1 + n2 + n3)",
        "expected_space": "O(n1 + n2 + n3)",
        "description": "Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. Return the array sorted in ascending order.",
        "constraints": "1 <= nums1.length, nums2.length, nums3.length <= 100\n1 <= nums1[i], nums2[j], nums3[k] <= 100",
        "input_format": "vector<int>& nums1, vector<int>& nums2, vector<int>& nums3",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]",
                "output": "[2,3]",
                "explanation": "For the given input nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3], the expected output is [2,3]."
            },
            {
                "input": "nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]",
                "output": "[1,2,3]",
                "explanation": "For the given input nums1 = [3,1], nums2 = [2,3], nums3 = [1,2], the expected output is [1,2,3]."
            },
            {
                "input": "nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]",
                "output": "[]",
                "explanation": "For the given input nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5], the expected output is []."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Two Out of Three Distinct Values.",
        "execution_config": {
            "functionName": "twoOutOfThree",
            "returnType": "vector<int>",
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
                    "name": "nums3",
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
        "id": "40490924-acfa-473a-ad9e-797949429581",
        "title": "Count Equal and Divisible Pairs in an Array",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.",
        "constraints": "1 <= nums.length <= 100\n1 <= nums[i] <= 100\n1 <= k <= 100",
        "input_format": "vector<int>& nums, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,1,2,2,2,1,3], k = 2",
                "output": "4",
                "explanation": "For the given input nums = [3,1,2,2,2,1,3], k = 2, the expected output is 4."
            },
            {
                "input": "nums = [1,2,3,4], k = 1",
                "output": "0",
                "explanation": "For the given input nums = [1,2,3,4], k = 1, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Equal and Divisible Pairs in an Array.",
        "execution_config": {
            "functionName": "countPairs",
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
        "id": "f5c2b1ad-a7ca-4224-ae6e-251cbcb4ce85",
        "title": "Check If N and Its Double Exist",
        "topic": "Hashing",
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
        "description": "Given an array arr of integers, check if there exist two indices i and j such that: i != j, 0 <= i, j < arr.length, and arr[i] == 2 * arr[j].",
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
        "learning_objective": "Master algorithmic problem solving for Check If N and Its Double Exist.",
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
        "id": "3a8ce33e-2d94-4fc3-aca8-6405b9bca95f",
        "title": "Divide Array Into Equal Pairs Possible",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given an integer array nums consisting of 2 * n integers. You need to divide nums into n pairs such that each element belongs to exactly one pair and the elements present in a pair are equal. Return true if nums can be divided into n pairs, otherwise return false.",
        "constraints": "nums.length == 2 * n\n1 <= n <= 500\n1 <= nums[i] <= 500",
        "input_format": "vector<int>& nums",
        "output_format": "bool",
        "examples": [
            {
                "input": "nums = [3,2,3,2,2,2]",
                "output": "true",
                "explanation": "For the given input nums = [3,2,3,2,2,2], the expected output is true."
            },
            {
                "input": "nums = [1,2,3,4]",
                "output": "false",
                "explanation": "For the given input nums = [1,2,3,4], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Divide Array Into Equal Pairs Possible.",
        "execution_config": {
            "functionName": "divideArray",
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
        "id": "4af36757-1b83-4957-a784-9743f12ab030",
        "title": "Largest Unique Number",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.",
        "constraints": "1 <= nums.length <= 2000\n0 <= nums[i] <= 1000",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [5,7,3,9,4,9,8,3,1]",
                "output": "8",
                "explanation": "For the given input nums = [5,7,3,9,4,9,8,3,1], the expected output is 8."
            },
            {
                "input": "nums = [9,9,8,8]",
                "output": "-1",
                "explanation": "For the given input nums = [9,9,8,8], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Largest Unique Number.",
        "execution_config": {
            "functionName": "largestUniqueNumber",
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
        "id": "2d907c00-ec65-40a2-ab4c-4c908e7c954e",
        "title": "Count Elements with X + 1 Present",
        "topic": "Hashing",
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
        "description": "Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.",
        "constraints": "1 <= arr.length <= 1000\n0 <= arr[i] <= 1000",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [1,2,3]",
                "output": "2",
                "explanation": "For the given input arr = [1,2,3], the expected output is 2."
            },
            {
                "input": "arr = [1,1,3,3,5,5,7,7]",
                "output": "0",
                "explanation": "For the given input arr = [1,1,3,3,5,5,7,7], the expected output is 0."
            },
            {
                "input": "arr = [1,1,2,2]",
                "output": "2",
                "explanation": "For the given input arr = [1,1,2,2], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Elements with X + 1 Present.",
        "execution_config": {
            "functionName": "countElements",
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
        "id": "8de07d38-6acf-4861-aa34-7bff10bb2a66",
        "title": "Check If Row and Column Contains All Numbers",
        "topic": "Hashing",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Set",
            "Matrix"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive). Given an n x n integer matrix matrix, return true if the matrix is valid.",
        "constraints": "n == matrix.length == matrix[i].length\n1 <= n <= 100\n1 <= matrix[i][j] <= n",
        "input_format": "vector<vector<int>>& matrix",
        "output_format": "bool",
        "examples": [
            {
                "input": "matrix = [[1,2,3],[3,1,2],[2,3,1]]",
                "output": "true",
                "explanation": "For the given input matrix = [[1,2,3],[3,1,2],[2,3,1]], the expected output is true."
            },
            {
                "input": "matrix = [[1,1,1],[1,2,3],[1,2,3]]",
                "output": "false",
                "explanation": "For the given input matrix = [[1,1,1],[1,2,3],[1,2,3]], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check If Row and Column Contains All Numbers.",
        "execution_config": {
            "functionName": "checkValid",
            "returnType": "bool",
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
        "id": "ec8b8e7a-8fd1-4369-af66-b01328305f74",
        "title": "Make Sum Divisible by P Shortest Subarray",
        "topic": "Hashing",
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
        "description": "Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. Return the length of the smallest subarray that you need to remove, or -1 if impossible.",
        "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^9\n1 <= p <= 10^9",
        "input_format": "vector<int>& nums, int p",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [3,1,4,2], p = 6",
                "output": "1",
                "explanation": "For the given input nums = [3,1,4,2], p = 6, the expected output is 1."
            },
            {
                "input": "nums = [6,3,5,2], p = 9",
                "output": "2",
                "explanation": "For the given input nums = [6,3,5,2], p = 9, the expected output is 2."
            },
            {
                "input": "nums = [1,2,3], p = 3",
                "output": "0",
                "explanation": "For the given input nums = [1,2,3], p = 3, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Make Sum Divisible by P Shortest Subarray.",
        "execution_config": {
            "functionName": "minSubarray",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "p",
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

export default HASHING_PROBLEMS;
