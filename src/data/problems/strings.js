/**
 * Strings Problems Dataset (40 problems)
 * CodeMedic Verified DSA Collection
 */

export const STRING_PROBLEMS = [
    {
        "id": "77189a11-4fc8-437c-ade2-0d363346b29e",
        "title": "Longest Common Prefix",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "String Matching"
        ],
        "data_structures": [
            "String",
            "Array"
        ],
        "expected_time": "O(n * m)",
        "expected_space": "O(1)",
        "description": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
        "constraints": "1 <= strs.length <= 200\n0 <= strs[i].length <= 200\nstrs[i] consists of only lowercase English letters.",
        "input_format": "vector<string>& strs",
        "output_format": "string",
        "examples": [
            {
                "input": "strs = [\"flower\",\"flow\",\"flight\"]",
                "output": "\"fl\"",
                "explanation": "For the given input strs = [\"flower\",\"flow\",\"flight\"], the expected output is \"fl\"."
            },
            {
                "input": "strs = [\"dog\",\"racecar\",\"car\"]",
                "output": "\"\"",
                "explanation": "For the given input strs = [\"dog\",\"racecar\",\"car\"], the expected output is \"\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Common Prefix.",
        "execution_config": {
            "functionName": "longestCommonPrefix",
            "returnType": "string",
            "parameters": [
                {
                    "name": "strs",
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
        "id": "6f893f58-5e54-46c8-a495-e6f497e3114f",
        "title": "Reverse Words in a String",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space.",
        "constraints": "1 <= s.length <= 10^4\ns contains English letters, digits, and spaces ' '.\nThere is at least one word in s.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"the sky is blue\"",
                "output": "\"blue is sky the\"",
                "explanation": "For the given input s = \"the sky is blue\", the expected output is \"blue is sky the\"."
            },
            {
                "input": "s = \"  hello world  \"",
                "output": "\"world hello\"",
                "explanation": "For the given input s = \"  hello world  \", the expected output is \"world hello\"."
            },
            {
                "input": "s = \"a good   example\"",
                "output": "\"example good a\"",
                "explanation": "For the given input s = \"a good   example\", the expected output is \"example good a\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reverse Words in a String.",
        "execution_config": {
            "functionName": "reverseWords",
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
        "id": "14ca0c2c-0c4a-4ccd-ab24-740baba64216",
        "title": "Valid Anagram",
        "topic": "Strings",
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
        "description": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
        "constraints": "1 <= s.length, t.length <= 5 * 10^4\ns and t consist of lowercase English letters.",
        "input_format": "string s, string t",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"anagram\", t = \"nagaram\"",
                "output": "true",
                "explanation": "For the given input s = \"anagram\", t = \"nagaram\", the expected output is true."
            },
            {
                "input": "s = \"rat\", t = \"car\"",
                "output": "false",
                "explanation": "For the given input s = \"rat\", t = \"car\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Valid Anagram.",
        "execution_config": {
            "functionName": "isAnagram",
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
        "id": "6b072822-ae18-4a4a-a2eb-0c8837881d10",
        "title": "String Compression Length",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Array",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string chars, compress it using the following algorithm: For each group of consecutive repeating characters, if the group length is 1, append the character; otherwise, append the character followed by the group's length. Return the length of the compressed string.",
        "constraints": "1 <= chars.length <= 2000\nchars consists of lowercase English letters.",
        "input_format": "string chars",
        "output_format": "int",
        "examples": [
            {
                "input": "chars = \"aabbccc\"",
                "output": "6",
                "explanation": "For the given input chars = \"aabbccc\", the expected output is 6."
            },
            {
                "input": "chars = \"a\"",
                "output": "1",
                "explanation": "For the given input chars = \"a\", the expected output is 1."
            },
            {
                "input": "chars = \"abbbbbbbbbbbb\"",
                "output": "4",
                "explanation": "For the given input chars = \"abbbbbbbbbbbb\", the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for String Compression Length.",
        "execution_config": {
            "functionName": "compressLength",
            "returnType": "int",
            "parameters": [
                {
                    "name": "chars",
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
        "id": "7f1bf898-a652-4def-a353-ef05ca66018a",
        "title": "Valid Palindrome II",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
        "constraints": "1 <= s.length <= 10^5\ns consists of lowercase English letters.",
        "input_format": "string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"aba\"",
                "output": "true",
                "explanation": "For the given input s = \"aba\", the expected output is true."
            },
            {
                "input": "s = \"abca\"",
                "output": "true",
                "explanation": "For the given input s = \"abca\", the expected output is true."
            },
            {
                "input": "s = \"abc\"",
                "output": "false",
                "explanation": "For the given input s = \"abc\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Valid Palindrome II.",
        "execution_config": {
            "functionName": "validPalindrome",
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
        "id": "8c5d3572-b64c-437d-ac47-0aaab14ea7a5",
        "title": "First Unique Character in a String",
        "topic": "Strings",
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
        "description": "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
        "constraints": "1 <= s.length <= 10^5\ns consists of only lowercase English letters.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"leetcode\"",
                "output": "0",
                "explanation": "For the given input s = \"leetcode\", the expected output is 0."
            },
            {
                "input": "s = \"loveleetcode\"",
                "output": "2",
                "explanation": "For the given input s = \"loveleetcode\", the expected output is 2."
            },
            {
                "input": "s = \"aabb\"",
                "output": "-1",
                "explanation": "For the given input s = \"aabb\", the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for First Unique Character in a String.",
        "execution_config": {
            "functionName": "firstUniqChar",
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
        "id": "f1117ad8-64e8-4acc-ac08-33dbfb8b7646",
        "title": "Is Subsequence",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given two strings s and t, return true if s is a subsequence of t, or false otherwise.",
        "constraints": "0 <= s.length <= 100\n0 <= t.length <= 10^4\ns and t consist only of lowercase English letters.",
        "input_format": "string s, string t",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"abc\", t = \"ahbgdc\"",
                "output": "true",
                "explanation": "For the given input s = \"abc\", t = \"ahbgdc\", the expected output is true."
            },
            {
                "input": "s = \"axc\", t = \"ahbgdc\"",
                "output": "false",
                "explanation": "For the given input s = \"axc\", t = \"ahbgdc\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Is Subsequence.",
        "execution_config": {
            "functionName": "isSubsequence",
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
        "id": "8f916479-e5ac-4811-a12e-649fce267955",
        "title": "Longest Palindromic Substring Length",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Dynamic Programming"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(1)",
        "description": "Given a string s, return the length of the longest palindromic substring in s.",
        "constraints": "1 <= s.length <= 1000\ns consist of only digits and English letters.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"babad\"",
                "output": "3",
                "explanation": "For the given input s = \"babad\", the expected output is 3."
            },
            {
                "input": "s = \"cbbd\"",
                "output": "2",
                "explanation": "For the given input s = \"cbbd\", the expected output is 2."
            },
            {
                "input": "s = \"racecar\"",
                "output": "7",
                "explanation": "For the given input s = \"racecar\", the expected output is 7."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Palindromic Substring Length.",
        "execution_config": {
            "functionName": "longestPalindromeLen",
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
        "id": "9d20d6e7-f739-4280-ae5e-b82addf52eee",
        "title": "Count Substrings That Differ by One Character",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Dynamic Programming",
            "Trie"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n * m)",
        "expected_space": "O(1)",
        "description": "Given two strings s and t, find the number of pairs of substrings (one from s, one from t) of equal length that differ by exactly one character.",
        "constraints": "1 <= s.length, t.length <= 100\ns and t consist of lowercase English letters only.",
        "input_format": "string s, string t",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"aba\", t = \"baba\"",
                "output": "6",
                "explanation": "For the given input s = \"aba\", t = \"baba\", the expected output is 6."
            },
            {
                "input": "s = \"ab\", t = \"bb\"",
                "output": "3",
                "explanation": "For the given input s = \"ab\", t = \"bb\", the expected output is 3."
            },
            {
                "input": "s = \"a\", t = \"a\"",
                "output": "0",
                "explanation": "For the given input s = \"a\", t = \"a\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Substrings That Differ by One Character.",
        "execution_config": {
            "functionName": "countSubstrings",
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
        "id": "b7a2d759-a5fb-4225-a2ef-4a53456f8ebb",
        "title": "Roman to Integer",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a roman numeral s, convert it to an integer. Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.",
        "constraints": "1 <= s.length <= 15\ns contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"III\"",
                "output": "3",
                "explanation": "For the given input s = \"III\", the expected output is 3."
            },
            {
                "input": "s = \"LVIII\"",
                "output": "58",
                "explanation": "For the given input s = \"LVIII\", the expected output is 58."
            },
            {
                "input": "s = \"MCMXCIV\"",
                "output": "1994",
                "explanation": "For the given input s = \"MCMXCIV\", the expected output is 1994."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Roman to Integer.",
        "execution_config": {
            "functionName": "romanToInt",
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
        "id": "20f997af-afc3-49e5-afd0-11371e5f9201",
        "title": "Integer to Roman",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "Given an integer num, convert it to a roman numeral string.",
        "constraints": "1 <= num <= 3999",
        "input_format": "int num",
        "output_format": "string",
        "examples": [
            {
                "input": "num = 3",
                "output": "\"III\"",
                "explanation": "For the given input num = 3, the expected output is \"III\"."
            },
            {
                "input": "num = 58",
                "output": "\"LVIII\"",
                "explanation": "For the given input num = 58, the expected output is \"LVIII\"."
            },
            {
                "input": "num = 1994",
                "output": "\"MCMXCIV\"",
                "explanation": "For the given input num = 1994, the expected output is \"MCMXCIV\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Integer to Roman.",
        "execution_config": {
            "functionName": "intToRoman",
            "returnType": "string",
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
        "id": "531973b4-0543-4ce8-abf0-3f30e8a3f848",
        "title": "String to Integer (atoi)",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function). Clamp to [-2^31, 2^31 - 1].",
        "constraints": "0 <= s.length <= 200\ns consists of English letters, digits, ' ', '+', '-', and '.'.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"42\"",
                "output": "42",
                "explanation": "For the given input s = \"42\", the expected output is 42."
            },
            {
                "input": "s = \"   -42\"",
                "output": "-42",
                "explanation": "For the given input s = \"   -42\", the expected output is -42."
            },
            {
                "input": "s = \"4193 with words\"",
                "output": "4193",
                "explanation": "For the given input s = \"4193 with words\", the expected output is 4193."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for String to Integer (atoi).",
        "execution_config": {
            "functionName": "myAtoi",
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
        "id": "df4d8805-6bb7-4080-a011-73dfc2d138dc",
        "title": "Multiply Strings",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "String",
            "Array"
        ],
        "expected_time": "O(n * m)",
        "expected_space": "O(n + m)",
        "description": "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.",
        "constraints": "1 <= num1.length, num2.length <= 200\nnum1 and num2 consist of digits only.\nBoth num1 and num2 do not contain any leading zero, except the number 0 itself.",
        "input_format": "string num1, string num2",
        "output_format": "string",
        "examples": [
            {
                "input": "num1 = \"2\", num2 = \"3\"",
                "output": "\"6\"",
                "explanation": "For the given input num1 = \"2\", num2 = \"3\", the expected output is \"6\"."
            },
            {
                "input": "num1 = \"123\", num2 = \"456\"",
                "output": "\"56088\"",
                "explanation": "For the given input num1 = \"123\", num2 = \"456\", the expected output is \"56088\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Multiply Strings.",
        "execution_config": {
            "functionName": "multiply",
            "returnType": "string",
            "parameters": [
                {
                    "name": "num1",
                    "type": "string"
                },
                {
                    "name": "num2",
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
        "id": "892ca79c-96c0-43bd-a3b0-30661ec7982d",
        "title": "Add Binary",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Simulation",
            "Bit Manipulation"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(max(n, m))",
        "expected_space": "O(max(n, m))",
        "description": "Given two binary strings a and b, return their sum as a binary string.",
        "constraints": "1 <= a.length, b.length <= 10^4\na and b consist only of '0' or '1' characters.\nEach string does not contain leading zeros except for the zero itself.",
        "input_format": "string a, string b",
        "output_format": "string",
        "examples": [
            {
                "input": "a = \"11\", b = \"1\"",
                "output": "\"100\"",
                "explanation": "For the given input a = \"11\", b = \"1\", the expected output is \"100\"."
            },
            {
                "input": "a = \"1010\", b = \"1011\"",
                "output": "\"10101\"",
                "explanation": "For the given input a = \"1010\", b = \"1011\", the expected output is \"10101\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Add Binary.",
        "execution_config": {
            "functionName": "addBinary",
            "returnType": "string",
            "parameters": [
                {
                    "name": "a",
                    "type": "string"
                },
                {
                    "name": "b",
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
        "id": "00fcefd7-4b81-40e0-a149-b3cf3d5ebce8",
        "title": "Simplify Canonical Path",
        "topic": "Strings",
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
        "description": "Given an absolute path for a Unix-style file system, simplify it to its canonical path.",
        "constraints": "1 <= path.length <= 3000\npath consists of English letters, digits, period '.', slash '/' or '_'.\npath is a valid absolute Unix path.",
        "input_format": "string path",
        "output_format": "string",
        "examples": [
            {
                "input": "path = \"/home/\"",
                "output": "\"/home\"",
                "explanation": "For the given input path = \"/home/\", the expected output is \"/home\"."
            },
            {
                "input": "path = \"/../\"",
                "output": "\"/\"",
                "explanation": "For the given input path = \"/../\", the expected output is \"/\"."
            },
            {
                "input": "path = \"/home//foo/\"",
                "output": "\"/home/foo\"",
                "explanation": "For the given input path = \"/home//foo/\", the expected output is \"/home/foo\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Simplify Canonical Path.",
        "execution_config": {
            "functionName": "simplifyPath",
            "returnType": "string",
            "parameters": [
                {
                    "name": "path",
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
        "id": "1ed1f778-d759-4fb4-a3df-375591de66ee",
        "title": "Decode String",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Stack",
            "Recursion"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.",
        "constraints": "1 <= s.length <= 30\ns consists of lowercase English letters, digits, and square brackets '[]'.\ns is guaranteed to be a valid input.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"3[a]2[bc]\"",
                "output": "\"aaabcbc\"",
                "explanation": "For the given input s = \"3[a]2[bc]\", the expected output is \"aaabcbc\"."
            },
            {
                "input": "s = \"3[a2[c]]\"",
                "output": "\"accaccacc\"",
                "explanation": "For the given input s = \"3[a2[c]]\", the expected output is \"accaccacc\"."
            },
            {
                "input": "s = \"2[abc]3[cd]ef\"",
                "output": "\"abcabccdcdcdef\"",
                "explanation": "For the given input s = \"2[abc]3[cd]ef\", the expected output is \"abcabccdcdcdef\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Decode String.",
        "execution_config": {
            "functionName": "decodeString",
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
        "id": "b66dda36-16ed-47fb-a200-f848d55e4683",
        "title": "Count Binary Substrings",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.",
        "constraints": "1 <= s.length <= 10^5\ns[i] is either '0' or '1'.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"00110011\"",
                "output": "6",
                "explanation": "For the given input s = \"00110011\", the expected output is 6."
            },
            {
                "input": "s = \"10101\"",
                "output": "4",
                "explanation": "For the given input s = \"10101\", the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Binary Substrings.",
        "execution_config": {
            "functionName": "countBinarySubstrings",
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
        "id": "42aa0a64-6c89-4526-a400-f6aa48719e95",
        "title": "Custom Sort String",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Hashing",
            "Sorting"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(1)",
        "description": "You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously. Permute the characters of s so that they match the order that order was sorted.",
        "constraints": "1 <= order.length <= 26\n1 <= s.length <= 200\norder and s consist of lowercase English letters.\nAll characters in order are unique.",
        "input_format": "string order, string s",
        "output_format": "string",
        "examples": [
            {
                "input": "order = \"cba\", s = \"abcd\"",
                "output": "\"cbad\"",
                "explanation": "For the given input order = \"cba\", s = \"abcd\", the expected output is \"cbad\"."
            },
            {
                "input": "order = \"cbafg\", s = \"abcd\"",
                "output": "\"cbad\"",
                "explanation": "For the given input order = \"cbafg\", s = \"abcd\", the expected output is \"cbad\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Custom Sort String.",
        "execution_config": {
            "functionName": "customSortString",
            "returnType": "string",
            "parameters": [
                {
                    "name": "order",
                    "type": "string"
                },
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
        "id": "040b7080-8c64-4c9e-a962-d73821379f81",
        "title": "Remove All Adjacent Duplicates In String",
        "topic": "Strings",
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
        "description": "You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them. We repeatedly make duplicate removals on s until we no longer can. Return the final string after all such duplicate removals have been made.",
        "constraints": "1 <= s.length <= 10^5\ns consists of lowercase English letters.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"abbaca\"",
                "output": "\"ca\"",
                "explanation": "For the given input s = \"abbaca\", the expected output is \"ca\"."
            },
            {
                "input": "s = \"azxxzy\"",
                "output": "\"ay\"",
                "explanation": "For the given input s = \"azxxzy\", the expected output is \"ay\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove All Adjacent Duplicates In String.",
        "execution_config": {
            "functionName": "removeDuplicates",
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
        "id": "83176bcc-91b3-4825-a05e-92a793742061",
        "title": "Minimum Add to Make Parentheses Valid",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Stack",
            "Greedy"
        ],
        "data_structures": [
            "Stack",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "A parentheses string is valid if and only if: It is the empty string, it can be written as AB, or it can be written as (A). Given a parentheses string s, return the minimum number of moves required to make s valid.",
        "constraints": "1 <= s.length <= 1000\ns[i] is either '(' or ')'.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"())\"",
                "output": "1",
                "explanation": "For the given input s = \"())\", the expected output is 1."
            },
            {
                "input": "s = \"(((\"",
                "output": "3",
                "explanation": "For the given input s = \"(((\", the expected output is 3."
            },
            {
                "input": "s = \"()()\"",
                "output": "0",
                "explanation": "For the given input s = \"()()\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Add to Make Parentheses Valid.",
        "execution_config": {
            "functionName": "minAddToMakeValid",
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
        "id": "a7bedba5-812f-499f-aa22-8883606f03ec",
        "title": "Reverse Only Letters",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string s, reverse the string according to the following rules: All characters that are not characters stay in the same position; all characters that are letters reverse their positions.",
        "constraints": "1 <= s.length <= 100\ns consists of characters with ASCII values in the range [33, 122].",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"ab-cd\"",
                "output": "\"dc-ba\"",
                "explanation": "For the given input s = \"ab-cd\", the expected output is \"dc-ba\"."
            },
            {
                "input": "s = \"a-bC-dEf-ghIj\"",
                "output": "\"j-Ih-gfE-dCba\"",
                "explanation": "For the given input s = \"a-bC-dEf-ghIj\", the expected output is \"j-Ih-gfE-dCba\"."
            },
            {
                "input": "s = \"Test1ng-Leet=code-Q!\"",
                "output": "\"Qedo1ct-eeLg=ntse-T!\"",
                "explanation": "For the given input s = \"Test1ng-Leet=code-Q!\", the expected output is \"Qedo1ct-eeLg=ntse-T!\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reverse Only Letters.",
        "execution_config": {
            "functionName": "reverseOnlyLetters",
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
        "id": "fbe9d380-113c-4416-ac41-3c3d06e0274d",
        "title": "Word Pattern",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a pattern and a string s, find if s follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.",
        "constraints": "1 <= pattern.length <= 300\npattern contains only lower-case English letters.\n1 <= s.length <= 3000\ns contains only lowercase English letters and spaces ' '.",
        "input_format": "string pattern, string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "pattern = \"abba\", s = \"dog cat cat dog\"",
                "output": "true",
                "explanation": "For the given input pattern = \"abba\", s = \"dog cat cat dog\", the expected output is true."
            },
            {
                "input": "pattern = \"abba\", s = \"dog cat cat fish\"",
                "output": "false",
                "explanation": "For the given input pattern = \"abba\", s = \"dog cat cat fish\", the expected output is false."
            },
            {
                "input": "pattern = \"aaaa\", s = \"dog cat cat dog\"",
                "output": "false",
                "explanation": "For the given input pattern = \"aaaa\", s = \"dog cat cat dog\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Word Pattern.",
        "execution_config": {
            "functionName": "wordPattern",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "pattern",
                    "type": "string"
                },
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
        "id": "55fd2ee7-431b-46d9-a593-4d8995afc2ca",
        "title": "Compare Version Numbers",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(n + m)",
        "description": "Given two version numbers, version1 and version2, compare them. If version1 < version2 return -1, if version1 > version2 return 1, otherwise return 0.",
        "constraints": "1 <= version1.length, version2.length <= 500\nversion1 and version2 only contain digits and '.'.",
        "input_format": "string version1, string version2",
        "output_format": "int",
        "examples": [
            {
                "input": "version1 = \"1.01\", version2 = \"1.001\"",
                "output": "0",
                "explanation": "For the given input version1 = \"1.01\", version2 = \"1.001\", the expected output is 0."
            },
            {
                "input": "version1 = \"1.0\", version2 = \"1.0.0\"",
                "output": "0",
                "explanation": "For the given input version1 = \"1.0\", version2 = \"1.0.0\", the expected output is 0."
            },
            {
                "input": "version1 = \"0.1\", version2 = \"1.1\"",
                "output": "-1",
                "explanation": "For the given input version1 = \"0.1\", version2 = \"1.1\", the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Compare Version Numbers.",
        "execution_config": {
            "functionName": "compareVersion",
            "returnType": "int",
            "parameters": [
                {
                    "name": "version1",
                    "type": "string"
                },
                {
                    "name": "version2",
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
        "id": "8f34b3f5-9d5a-464e-a03a-d55c9dd280a8",
        "title": "Zigzag Conversion",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "String",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "The string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows. Write the code that will take a string and make this conversion given a number of rows.",
        "constraints": "1 <= s.length <= 1000\ns consists of English letters, ',' and '.'.\n1 <= numRows <= 1000",
        "input_format": "string s, int numRows",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"PAYPALISHIRING\", numRows = 3",
                "output": "\"PAHNAPLSIIGYIR\"",
                "explanation": "For the given input s = \"PAYPALISHIRING\", numRows = 3, the expected output is \"PAHNAPLSIIGYIR\"."
            },
            {
                "input": "s = \"PAYPALISHIRING\", numRows = 4",
                "output": "\"PINALSIGYAHRPI\"",
                "explanation": "For the given input s = \"PAYPALISHIRING\", numRows = 4, the expected output is \"PINALSIGYAHRPI\"."
            },
            {
                "input": "s = \"A\", numRows = 1",
                "output": "\"A\"",
                "explanation": "For the given input s = \"A\", numRows = 1, the expected output is \"A\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Zigzag Conversion.",
        "execution_config": {
            "functionName": "convert",
            "returnType": "string",
            "parameters": [
                {
                    "name": "s",
                    "type": "string"
                },
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
        "id": "354a4c08-ffb7-45d4-ab90-7987ff2b88a6",
        "title": "Reorganize String Possible",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Heap"
        ],
        "data_structures": [
            "Hash Map",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string s, return true if the characters of s can be rearranged such that any two adjacent characters are not the same, or false otherwise.",
        "constraints": "1 <= s.length <= 500\ns consists of lowercase English letters.",
        "input_format": "string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"aab\"",
                "output": "true",
                "explanation": "For the given input s = \"aab\", the expected output is true."
            },
            {
                "input": "s = \"aaab\"",
                "output": "false",
                "explanation": "For the given input s = \"aaab\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reorganize String Possible.",
        "execution_config": {
            "functionName": "reorganizePossible",
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
        "id": "c72439c2-1af7-4afd-ab48-43e8880edc5e",
        "title": "Minimum Deletions for Unique Frequencies",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Hashing"
        ],
        "data_structures": [
            "Hash Map",
            "Set"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "A string s is called good if there are no two different characters in s that have the same frequency. Given a string s, return the minimum number of characters you need to delete to make s good.",
        "constraints": "1 <= s.length <= 10^5\ns contains only lowercase English letters.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"aab\"",
                "output": "0",
                "explanation": "For the given input s = \"aab\", the expected output is 0."
            },
            {
                "input": "s = \"aaabbbcc\"",
                "output": "2",
                "explanation": "For the given input s = \"aaabbbcc\", the expected output is 2."
            },
            {
                "input": "s = \"ceabaacb\"",
                "output": "2",
                "explanation": "For the given input s = \"ceabaacb\", the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Deletions for Unique Frequencies.",
        "execution_config": {
            "functionName": "minDeletions",
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
        "id": "4bd9abd2-9247-45bb-afd9-3180aca740a6",
        "title": "Find Index of First Occurrence in String",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers",
            "String Matching"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n * m)",
        "expected_space": "O(1)",
        "description": "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
        "constraints": "1 <= haystack.length, needle.length <= 10^4\nhaystack and needle consist of only lowercase English characters.",
        "input_format": "string haystack, string needle",
        "output_format": "int",
        "examples": [
            {
                "input": "haystack = \"sadbutsad\", needle = \"sad\"",
                "output": "0",
                "explanation": "For the given input haystack = \"sadbutsad\", needle = \"sad\", the expected output is 0."
            },
            {
                "input": "haystack = \"leetcode\", needle = \"leeto\"",
                "output": "-1",
                "explanation": "For the given input haystack = \"leetcode\", needle = \"leeto\", the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Index of First Occurrence in String.",
        "execution_config": {
            "functionName": "strStr",
            "returnType": "int",
            "parameters": [
                {
                    "name": "haystack",
                    "type": "string"
                },
                {
                    "name": "needle",
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
        "id": "e168c7f3-74ac-43ec-a374-e708cc05df6e",
        "title": "Length of Last Word",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.",
        "constraints": "1 <= s.length <= 10^4\ns consists of only English letters and spaces ' '.\nThere will be at least one word in s.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"Hello World\"",
                "output": "5",
                "explanation": "For the given input s = \"Hello World\", the expected output is 5."
            },
            {
                "input": "s = \"   fly me   to   the moon  \"",
                "output": "4",
                "explanation": "For the given input s = \"   fly me   to   the moon  \", the expected output is 4."
            },
            {
                "input": "s = \"luffy is still joyboy\"",
                "output": "6",
                "explanation": "For the given input s = \"luffy is still joyboy\", the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Length of Last Word.",
        "execution_config": {
            "functionName": "lengthOfLastWord",
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
        "id": "415b14b5-2b3c-4b3e-a999-870d7eb15ccb",
        "title": "Check if One String Swap Can Make Strings Equal",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Hashing",
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string and swap the characters at these indices. Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.",
        "constraints": "1 <= s1.length, s2.length <= 100\ns1.length == s2.length\ns1 and s2 consist of only lowercase English letters.",
        "input_format": "string s1, string s2",
        "output_format": "bool",
        "examples": [
            {
                "input": "s1 = \"bank\", s2 = \"kanb\"",
                "output": "true",
                "explanation": "For the given input s1 = \"bank\", s2 = \"kanb\", the expected output is true."
            },
            {
                "input": "s1 = \"attack\", s2 = \"defend\"",
                "output": "false",
                "explanation": "For the given input s1 = \"attack\", s2 = \"defend\", the expected output is false."
            },
            {
                "input": "s1 = \"kelb\", s2 = \"kelb\"",
                "output": "true",
                "explanation": "For the given input s1 = \"kelb\", s2 = \"kelb\", the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check if One String Swap Can Make Strings Equal.",
        "execution_config": {
            "functionName": "areAlmostEqual",
            "returnType": "bool",
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
        "id": "0d5e7e5b-a865-4ed7-a1ed-18117fceaef0",
        "title": "Maximum Number of Balloons",
        "topic": "Strings",
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
        "description": "Given a string text, you want to use the characters of text to form as many instances of the word \"balloon\" as possible. You can use each character in text at most once. Return the maximum number of instances that can be formed.",
        "constraints": "1 <= text.length <= 10^4\ntext consists of lower case English letters only.",
        "input_format": "string text",
        "output_format": "int",
        "examples": [
            {
                "input": "text = \"nlaebolko\"",
                "output": "1",
                "explanation": "For the given input text = \"nlaebolko\", the expected output is 1."
            },
            {
                "input": "text = \"loonbalxballpoon\"",
                "output": "2",
                "explanation": "For the given input text = \"loonbalxballpoon\", the expected output is 2."
            },
            {
                "input": "text = \"leetcode\"",
                "output": "0",
                "explanation": "For the given input text = \"leetcode\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Number of Balloons.",
        "execution_config": {
            "functionName": "maxNumberOfBalloons",
            "returnType": "int",
            "parameters": [
                {
                    "name": "text",
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
        "id": "b3c2923a-c027-472a-a37e-0fdbed697e62",
        "title": "Goat Latin",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Convert the sentence to 'Goat Latin' according to standard rules: words beginning with a vowel append 'ma'; words beginning with a consonant move the first letter to end and append 'ma'. Each word appends 'a' corresponding to its 1-based index.",
        "constraints": "1 <= sentence.length <= 150\nsentence consists of English letters and spaces.",
        "input_format": "string sentence",
        "output_format": "string",
        "examples": [
            {
                "input": "sentence = \"I speak Goat Latin\"",
                "output": "\"Imaa peaksmaaa oatGmaaaa atinLmaaaaa\"",
                "explanation": "For the given input sentence = \"I speak Goat Latin\", the expected output is \"Imaa peaksmaaa oatGmaaaa atinLmaaaaa\"."
            },
            {
                "input": "sentence = \"The quick brown fox jumped over the lazy dog\"",
                "output": "\"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa\"",
                "explanation": "For the given input sentence = \"The quick brown fox jumped over the lazy dog\", the expected output is \"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Goat Latin.",
        "execution_config": {
            "functionName": "toGoatLatin",
            "returnType": "string",
            "parameters": [
                {
                    "name": "sentence",
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
        "id": "fca41f8d-173e-49dd-a5b2-08e85275c841",
        "title": "Detect Capital Use",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "We define the usage of capitals in a word to be right when either all letters are capitals, all letters are lowercase, or only the first letter is capital. Return true if word capital usage is valid.",
        "constraints": "1 <= word.length <= 100\nword consists of lowercase and uppercase English letters.",
        "input_format": "string word",
        "output_format": "bool",
        "examples": [
            {
                "input": "word = \"USA\"",
                "output": "true",
                "explanation": "For the given input word = \"USA\", the expected output is true."
            },
            {
                "input": "word = \"FlaG\"",
                "output": "false",
                "explanation": "For the given input word = \"FlaG\", the expected output is false."
            },
            {
                "input": "word = \"leetcode\"",
                "output": "true",
                "explanation": "For the given input word = \"leetcode\", the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Detect Capital Use.",
        "execution_config": {
            "functionName": "detectCapitalUse",
            "returnType": "bool",
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
        "id": "ed824336-ccc4-4e54-a262-324295667f1c",
        "title": "Reverse String Return",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string s, return the reversed string.",
        "constraints": "1 <= s.length <= 10^5\ns consists of printable ASCII characters.",
        "input_format": "string s",
        "output_format": "string",
        "examples": [
            {
                "input": "s = \"hello\"",
                "output": "\"olleh\"",
                "explanation": "For the given input s = \"hello\", the expected output is \"olleh\"."
            },
            {
                "input": "s = \"Hannah\"",
                "output": "\"hannaH\"",
                "explanation": "For the given input s = \"Hannah\", the expected output is \"hannaH\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reverse String Return.",
        "execution_config": {
            "functionName": "reverseString",
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
        "id": "ba644c28-7609-479e-a88c-650d59f3f63c",
        "title": "Count Anagram Occurrences in String",
        "topic": "Strings",
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
        "expected_space": "O(1)",
        "description": "Given two strings s and p, return the count of p's anagram substrings in s.",
        "constraints": "1 <= s.length, p.length <= 3 * 10^4\ns and p consist of lowercase English letters.",
        "input_format": "string s, string p",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"cbaebabacd\", p = \"abc\"",
                "output": "2",
                "explanation": "For the given input s = \"cbaebabacd\", p = \"abc\", the expected output is 2."
            },
            {
                "input": "s = \"abab\", p = \"ab\"",
                "output": "3",
                "explanation": "For the given input s = \"abab\", p = \"ab\", the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Anagram Occurrences in String.",
        "execution_config": {
            "functionName": "countAnagrams",
            "returnType": "int",
            "parameters": [
                {
                    "name": "s",
                    "type": "string"
                },
                {
                    "name": "p",
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
        "id": "cc6446f3-4529-43a4-aaf6-95e9f735b82a",
        "title": "Count Repeated 10-Letter Sequences",
        "topic": "Strings",
        "difficulty": "Medium",
        "patterns": [
            "Hashing",
            "Sliding Window"
        ],
        "data_structures": [
            "Hash Map",
            "Set"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a string s that represents a DNA sequence, return the number of 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.",
        "constraints": "1 <= s.length <= 10^5\ns[i] is either 'A', 'C', 'G', or 'T'.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT\"",
                "output": "2",
                "explanation": "For the given input s = \"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT\", the expected output is 2."
            },
            {
                "input": "s = \"AAAAAAAAAAAAA\"",
                "output": "1",
                "explanation": "For the given input s = \"AAAAAAAAAAAAA\", the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Repeated 10-Letter Sequences.",
        "execution_config": {
            "functionName": "countRepeatedDnaSequences",
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
        "id": "59ae7875-9393-4b31-a222-c0fe6ae221bd",
        "title": "Is Valid Integer String",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a string s, return true if s represents a valid signed or unsigned integer without leading or trailing spaces or invalid characters.",
        "constraints": "1 <= s.length <= 20",
        "input_format": "string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"123\"",
                "output": "true",
                "explanation": "For the given input s = \"123\", the expected output is true."
            },
            {
                "input": "s = \"-456\"",
                "output": "true",
                "explanation": "For the given input s = \"-456\", the expected output is true."
            },
            {
                "input": "s = \"+78\"",
                "output": "true",
                "explanation": "For the given input s = \"+78\", the expected output is true."
            },
            {
                "input": "s = \"12a3\"",
                "output": "false",
                "explanation": "For the given input s = \"12a3\", the expected output is false."
            },
            {
                "input": "s = \"--5\"",
                "output": "false",
                "explanation": "For the given input s = \"--5\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Is Valid Integer String.",
        "execution_config": {
            "functionName": "isValidInteger",
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
        "id": "3b895dfd-6ed9-4118-a35c-be4d5aadecfc",
        "title": "Greatest Common Divisor of Strings",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Math",
            "String Matching"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(1)",
        "description": "For two strings s and t, we say \"t divides s\" if and only if s = t + t + ... + t. Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.",
        "constraints": "1 <= str1.length, str2.length <= 1000\nstr1 and str2 consist of English uppercase letters.",
        "input_format": "string str1, string str2",
        "output_format": "string",
        "examples": [
            {
                "input": "str1 = \"ABCABC\", str2 = \"ABC\"",
                "output": "\"ABC\"",
                "explanation": "For the given input str1 = \"ABCABC\", str2 = \"ABC\", the expected output is \"ABC\"."
            },
            {
                "input": "str1 = \"ABABAB\", str2 = \"ABAB\"",
                "output": "\"AB\"",
                "explanation": "For the given input str1 = \"ABABAB\", str2 = \"ABAB\", the expected output is \"AB\"."
            },
            {
                "input": "str1 = \"LEET\", str2 = \"CODE\"",
                "output": "\"\"",
                "explanation": "For the given input str1 = \"LEET\", str2 = \"CODE\", the expected output is \"\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Greatest Common Divisor of Strings.",
        "execution_config": {
            "functionName": "gcdOfStrings",
            "returnType": "string",
            "parameters": [
                {
                    "name": "str1",
                    "type": "string"
                },
                {
                    "name": "str2",
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
        "id": "65503fdf-61ba-4e1b-ac7e-78bb237ec254",
        "title": "Check if All Characters Have Equal Occurrences",
        "topic": "Strings",
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
        "description": "Given a string s, return true if all the characters that appear in s have the same number of occurrences, or false otherwise.",
        "constraints": "1 <= s.length <= 1000\ns consists of lowercase English letters.",
        "input_format": "string s",
        "output_format": "bool",
        "examples": [
            {
                "input": "s = \"abacbc\"",
                "output": "true",
                "explanation": "For the given input s = \"abacbc\", the expected output is true."
            },
            {
                "input": "s = \"aaabb\"",
                "output": "false",
                "explanation": "For the given input s = \"aaabb\", the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check if All Characters Have Equal Occurrences.",
        "execution_config": {
            "functionName": "areOccurrencesEqual",
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
        "id": "7bc51224-33bb-4de2-aafd-754e362144a3",
        "title": "Count Consistent Strings",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Set",
            "String"
        ],
        "expected_time": "O(n * m)",
        "expected_space": "O(1)",
        "description": "You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed. Return the number of consistent strings in the array words.",
        "constraints": "1 <= words.length <= 10^4\n1 <= allowed.length <= 26\n1 <= words[i].length <= 10\nThe characters in allowed are distinct.\nwords[i] and allowed contain only lowercase English letters.",
        "input_format": "string allowed, vector<string>& words",
        "output_format": "int",
        "examples": [
            {
                "input": "allowed = \"ab\", words = [\"ad\",\"bd\",\"aaab\",\"baa\",\"badab\"]",
                "output": "2",
                "explanation": "For the given input allowed = \"ab\", words = [\"ad\",\"bd\",\"aaab\",\"baa\",\"badab\"], the expected output is 2."
            },
            {
                "input": "allowed = \"abc\", words = [\"a\",\"b\",\"c\",\"ab\",\"ac\",\"bc\",\"abc\"]",
                "output": "7",
                "explanation": "For the given input allowed = \"abc\", words = [\"a\",\"b\",\"c\",\"ab\",\"ac\",\"bc\",\"abc\"], the expected output is 7."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Consistent Strings.",
        "execution_config": {
            "functionName": "countConsistentStrings",
            "returnType": "int",
            "parameters": [
                {
                    "name": "allowed",
                    "type": "string"
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
        "id": "ed5fad97-1b30-4b8a-a525-6db06a22fe36",
        "title": "Maximum Repeating Substring",
        "topic": "Strings",
        "difficulty": "Easy",
        "patterns": [
            "String Matching"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n * m)",
        "expected_space": "O(1)",
        "description": "For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. Return the maximum k-repeating value of word in sequence.",
        "constraints": "1 <= sequence.length <= 100\n1 <= word.length <= 100\nsequence and word contain only lowercase English letters.",
        "input_format": "string sequence, string word",
        "output_format": "int",
        "examples": [
            {
                "input": "sequence = \"ababc\", word = \"ab\"",
                "output": "2",
                "explanation": "For the given input sequence = \"ababc\", word = \"ab\", the expected output is 2."
            },
            {
                "input": "sequence = \"ababc\", word = \"ba\"",
                "output": "1",
                "explanation": "For the given input sequence = \"ababc\", word = \"ba\", the expected output is 1."
            },
            {
                "input": "sequence = \"ababc\", word = \"ac\"",
                "output": "0",
                "explanation": "For the given input sequence = \"ababc\", word = \"ac\", the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Repeating Substring.",
        "execution_config": {
            "functionName": "maxRepeating",
            "returnType": "int",
            "parameters": [
                {
                    "name": "sequence",
                    "type": "string"
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
    }
];

export default STRING_PROBLEMS;
