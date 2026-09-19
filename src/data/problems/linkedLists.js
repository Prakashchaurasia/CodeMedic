/**
 * Linked Lists Problems Dataset (25 problems)
 * CodeMedic Verified DSA Collection
 */

export const LINKED_LIST_PROBLEMS = [
    {
        "id": "094c7b8b-0631-43ac-ad10-3919ab3f629d",
        "title": "Reverse Singly Linked List",
        "topic": "Linked Lists",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        "constraints": "The number of nodes in the list is the range [0, 5000].\n-5000 <= Node.val <= 5000",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4,5]",
                "output": "[5,4,3,2,1]",
                "explanation": "For the given input head = [1,2,3,4,5], the expected output is [5,4,3,2,1]."
            },
            {
                "input": "head = [1,2]",
                "output": "[2,1]",
                "explanation": "For the given input head = [1,2], the expected output is [2,1]."
            },
            {
                "input": "head = []",
                "output": "[]",
                "explanation": "For the given input head = [], the expected output is []."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reverse Singly Linked List.",
        "execution_config": {
            "functionName": "reverseList",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "ae966d1c-eea3-45b7-a5a5-0bf336abba13",
        "title": "Middle of the Linked List",
        "topic": "Linked Lists",
        "difficulty": "Easy",
        "patterns": [
            "Fast and Slow Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
        "constraints": "The number of nodes in the list is in the range [1, 100].\n1 <= Node.val <= 100",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4,5]",
                "output": "[3,4,5]",
                "explanation": "For the given input head = [1,2,3,4,5], the expected output is [3,4,5]."
            },
            {
                "input": "head = [1,2,3,4,5,6]",
                "output": "[4,5,6]",
                "explanation": "For the given input head = [1,2,3,4,5,6], the expected output is [4,5,6]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Middle of the Linked List.",
        "execution_config": {
            "functionName": "middleNode",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "a6d16bb0-4bd0-41b5-a8d2-7fdc42b45904",
        "title": "Merge Two Sorted Linked Lists",
        "topic": "Linked Lists",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(1)",
        "description": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list and return the head of the new merged list.",
        "constraints": "The number of nodes in both lists is in the range [0, 50].\n-100 <= Node.val <= 100\nBoth list1 and list2 are sorted in non-decreasing order.",
        "input_format": "ListNode* list1, ListNode* list2",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "list1 = [1,2,4], list2 = [1,3,4]",
                "output": "[1,1,2,3,4,4]",
                "explanation": "For the given input list1 = [1,2,4], list2 = [1,3,4], the expected output is [1,1,2,3,4,4]."
            },
            {
                "input": "list1 = [], list2 = []",
                "output": "[]",
                "explanation": "For the given input list1 = [], list2 = [], the expected output is []."
            },
            {
                "input": "list1 = [], list2 = [0]",
                "output": "[0]",
                "explanation": "For the given input list1 = [], list2 = [0], the expected output is [0]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Merge Two Sorted Linked Lists.",
        "execution_config": {
            "functionName": "mergeTwoLists",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "list1",
                    "type": "ListNode*"
                },
                {
                    "name": "list2",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "7d2b8fe8-d65d-4908-a765-5427bbeab100",
        "title": "Remove Nth Node From End of List",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Fast and Slow Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
        "constraints": "The number of nodes in the list is sz.\n1 <= sz <= 30\n0 <= Node.val <= 100\n1 <= n <= sz",
        "input_format": "ListNode* head, int n",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4,5], n = 2",
                "output": "[1,2,3,5]",
                "explanation": "For the given input head = [1,2,3,4,5], n = 2, the expected output is [1,2,3,5]."
            },
            {
                "input": "head = [1], n = 1",
                "output": "[]",
                "explanation": "For the given input head = [1], n = 1, the expected output is []."
            },
            {
                "input": "head = [1,2], n = 1",
                "output": "[1]",
                "explanation": "For the given input head = [1,2], n = 1, the expected output is [1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove Nth Node From End of List.",
        "execution_config": {
            "functionName": "removeNthFromEnd",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
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
        "id": "40e2909a-c47c-4d6b-aab3-1c61226cb7b5",
        "title": "Remove Duplicates from Sorted List",
        "topic": "Linked Lists",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
        "constraints": "The number of nodes in the list is in the range [0, 300].\n-100 <= Node.val <= 100\nThe list is guaranteed to be sorted in ascending order.",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,1,2]",
                "output": "[1,2]",
                "explanation": "For the given input head = [1,1,2], the expected output is [1,2]."
            },
            {
                "input": "head = [1,1,2,3,3]",
                "output": "[1,2,3]",
                "explanation": "For the given input head = [1,1,2,3,3], the expected output is [1,2,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove Duplicates from Sorted List.",
        "execution_config": {
            "functionName": "deleteDuplicates",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "fa3e80dd-2a0d-4df3-af07-7577715ad914",
        "title": "Remove Duplicates from Sorted List II",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.",
        "constraints": "The number of nodes in the list is in the range [0, 300].\n-100 <= Node.val <= 100\nThe list is guaranteed to be sorted in ascending order.",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,3,4,4,5]",
                "output": "[1,2,5]",
                "explanation": "For the given input head = [1,2,3,3,4,4,5], the expected output is [1,2,5]."
            },
            {
                "input": "head = [1,1,1,2,3]",
                "output": "[2,3]",
                "explanation": "For the given input head = [1,1,1,2,3], the expected output is [2,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove Duplicates from Sorted List II.",
        "execution_config": {
            "functionName": "deleteDuplicatesII",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "f2b67aa8-b997-40bd-a054-d8c945de4e52",
        "title": "Palindrome Linked List",
        "topic": "Linked Lists",
        "difficulty": "Easy",
        "patterns": [
            "Fast and Slow Pointers",
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
        "constraints": "The number of nodes in the list is in the range [1, 10^5].\n0 <= Node.val <= 9",
        "input_format": "ListNode* head",
        "output_format": "bool",
        "examples": [
            {
                "input": "head = [1,2,2,1]",
                "output": "true",
                "explanation": "For the given input head = [1,2,2,1], the expected output is true."
            },
            {
                "input": "head = [1,2]",
                "output": "false",
                "explanation": "For the given input head = [1,2], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Palindrome Linked List.",
        "execution_config": {
            "functionName": "isPalindrome",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "83817e45-33d6-45c2-a144-f3348c2fedcc",
        "title": "Odd Even Linked List",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list. (The 1st node is odd, 2nd node is even, etc.)",
        "constraints": "The number of nodes in the linked list is in the range [0, 10^4].\n-10^6 <= Node.val <= 10^6",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4,5]",
                "output": "[1,3,5,2,4]",
                "explanation": "For the given input head = [1,2,3,4,5], the expected output is [1,3,5,2,4]."
            },
            {
                "input": "head = [2,1,3,5,6,4,7]",
                "output": "[2,3,6,7,1,5,4]",
                "explanation": "For the given input head = [2,1,3,5,6,4,7], the expected output is [2,3,6,7,1,5,4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Odd Even Linked List.",
        "execution_config": {
            "functionName": "oddEvenList",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "2fbc95f7-05b0-4898-adb8-2747a813e02f",
        "title": "Add Two Numbers Represented by Linked Lists",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(max(n, m))",
        "expected_space": "O(max(n, m))",
        "description": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
        "constraints": "The number of nodes in each linked list is in the range [1, 100].\n0 <= Node.val <= 9\nIt is guaranteed that the list represents a number that does not have leading zeros.",
        "input_format": "ListNode* l1, ListNode* l2",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "l1 = [2,4,3], l2 = [5,6,4]",
                "output": "[7,0,8]",
                "explanation": "For the given input l1 = [2,4,3], l2 = [5,6,4], the expected output is [7,0,8]."
            },
            {
                "input": "l1 = [0], l2 = [0]",
                "output": "[0]",
                "explanation": "For the given input l1 = [0], l2 = [0], the expected output is [0]."
            },
            {
                "input": "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
                "output": "[8,9,9,9,0,0,0,1]",
                "explanation": "For the given input l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9], the expected output is [8,9,9,9,0,0,0,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Add Two Numbers Represented by Linked Lists.",
        "execution_config": {
            "functionName": "addTwoNumbers",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "l1",
                    "type": "ListNode*"
                },
                {
                    "name": "l2",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "2901456e-927d-4442-a60e-59fca80c571e",
        "title": "Swap Nodes in Pairs",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Recursion",
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)",
        "constraints": "The number of nodes in the list is in the range [0, 100].\n0 <= Node.val <= 100",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4]",
                "output": "[2,1,4,3]",
                "explanation": "For the given input head = [1,2,3,4], the expected output is [2,1,4,3]."
            },
            {
                "input": "head = []",
                "output": "[]",
                "explanation": "For the given input head = [], the expected output is []."
            },
            {
                "input": "head = [1]",
                "output": "[1]",
                "explanation": "For the given input head = [1], the expected output is [1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Swap Nodes in Pairs.",
        "execution_config": {
            "functionName": "swapPairs",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "23d629f5-4508-4dc6-a4be-483e29b0e230",
        "title": "Rotate Linked List by K",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a linked list, rotate the list to the right by k places.",
        "constraints": "The number of nodes in the list is in the range [0, 500].\n-100 <= Node.val <= 100\n0 <= k <= 2 * 10^9",
        "input_format": "ListNode* head, int k",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4,5], k = 2",
                "output": "[4,5,1,2,3]",
                "explanation": "For the given input head = [1,2,3,4,5], k = 2, the expected output is [4,5,1,2,3]."
            },
            {
                "input": "head = [0,1,2], k = 4",
                "output": "[2,0,1]",
                "explanation": "For the given input head = [0,1,2], k = 4, the expected output is [2,0,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Rotate Linked List by K.",
        "execution_config": {
            "functionName": "rotateRight",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
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
        "id": "d8ff4a20-5422-40b7-a971-780d4fbe5bca",
        "title": "Partition List Around Value X",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x while preserving relative order.",
        "constraints": "The number of nodes in the list is in the range [0, 200].\n-100 <= Node.val <= 100\n-200 <= x <= 200",
        "input_format": "ListNode* head, int x",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,4,3,2,5,2], x = 3",
                "output": "[1,2,2,4,3,5]",
                "explanation": "For the given input head = [1,4,3,2,5,2], x = 3, the expected output is [1,2,2,4,3,5]."
            },
            {
                "input": "head = [2,1], x = 2",
                "output": "[1,2]",
                "explanation": "For the given input head = [2,1], x = 2, the expected output is [1,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Partition List Around Value X.",
        "execution_config": {
            "functionName": "partition",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
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
        "id": "595478a2-e429-4048-a793-b0ff1bf53199",
        "title": "Convert Binary Linked List to Integer",
        "topic": "Linked Lists",
        "difficulty": "Easy",
        "patterns": [
            "Bit Manipulation"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value of the number in the linked list.",
        "constraints": "The Linked List is not empty.\nNumber of nodes will not exceed 30.\nEach node's value is either 0 or 1.",
        "input_format": "ListNode* head",
        "output_format": "int",
        "examples": [
            {
                "input": "head = [1,0,1]",
                "output": "5",
                "explanation": "For the given input head = [1,0,1], the expected output is 5."
            },
            {
                "input": "head = [0]",
                "output": "0",
                "explanation": "For the given input head = [0], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Convert Binary Linked List to Integer.",
        "execution_config": {
            "functionName": "getDecimalValue",
            "returnType": "int",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "d06b1a35-eae5-4022-a587-2af10e9845e5",
        "title": "Delete the Middle Node of a Linked List",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Fast and Slow Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.",
        "constraints": "The number of nodes in the list is in the range [1, 10^5].\n1 <= Node.val <= 10^5",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,3,4,7,1,2,6]",
                "output": "[1,3,4,1,2,6]",
                "explanation": "For the given input head = [1,3,4,7,1,2,6], the expected output is [1,3,4,1,2,6]."
            },
            {
                "input": "head = [1,2,3,4]",
                "output": "[1,2,4]",
                "explanation": "For the given input head = [1,2,3,4], the expected output is [1,2,4]."
            },
            {
                "input": "head = [2,1]",
                "output": "[2]",
                "explanation": "For the given input head = [2,1], the expected output is [2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Delete the Middle Node of a Linked List.",
        "execution_config": {
            "functionName": "deleteMiddle",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "c91415fb-5662-4721-a806-e35c0d4a2eda",
        "title": "Maximum Twin Sum of a Linked List",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Fast and Slow Pointers",
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node. The twin sum is the sum of a node and its twin. Return the maximum twin sum of the linked list.",
        "constraints": "The number of nodes in the list is an even integer in the range [2, 10^5].\n1 <= Node.val <= 10^5",
        "input_format": "ListNode* head",
        "output_format": "int",
        "examples": [
            {
                "input": "head = [5,4,2,1]",
                "output": "6",
                "explanation": "For the given input head = [5,4,2,1], the expected output is 6."
            },
            {
                "input": "head = [4,2,2,3]",
                "output": "7",
                "explanation": "For the given input head = [4,2,2,3], the expected output is 7."
            },
            {
                "input": "head = [1,100000]",
                "output": "100001",
                "explanation": "For the given input head = [1,100000], the expected output is 100001."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Twin Sum of a Linked List.",
        "execution_config": {
            "functionName": "pairSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "7db99386-836d-4e88-aa6a-c1dda7439971",
        "title": "Merge Nodes in Between Zeros",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0. For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. Return the modified list without 0's.",
        "constraints": "The number of nodes in the list is in the range [3, 2 * 10^5].\n0 <= Node.val <= 1000\nThere are no two consecutive nodes with Node.val == 0.",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [0,3,1,0,4,5,2,0]",
                "output": "[4,11]",
                "explanation": "For the given input head = [0,3,1,0,4,5,2,0], the expected output is [4,11]."
            },
            {
                "input": "head = [0,1,0,3,0,2,2,0]",
                "output": "[1,3,4]",
                "explanation": "For the given input head = [0,1,0,3,0,2,2,0], the expected output is [1,3,4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Merge Nodes in Between Zeros.",
        "execution_config": {
            "functionName": "mergeNodes",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "01f02fc3-e40b-47f5-a6ce-07ef7e84c9ba",
        "title": "Reorder List Interleaved",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Fast and Slow Pointers",
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given the head of a singly linked-list: L0 -> L1 -> ... -> Ln - 1 -> Ln. Reorder the list to be on the following form: L0 -> Ln -> L1 -> Ln - 1 -> L2 -> Ln - 2 -> ... and return the head.",
        "constraints": "The number of nodes in the list is in the range [1, 5 * 10^4].\n1 <= Node.val <= 1000",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4]",
                "output": "[1,4,2,3]",
                "explanation": "For the given input head = [1,2,3,4], the expected output is [1,4,2,3]."
            },
            {
                "input": "head = [1,2,3,4,5]",
                "output": "[1,5,2,4,3]",
                "explanation": "For the given input head = [1,2,3,4,5], the expected output is [1,5,2,4,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reorder List Interleaved.",
        "execution_config": {
            "functionName": "reorderList",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "5d56214b-5ea1-4f8c-a0bf-bc49d1371c94",
        "title": "Remove Nodes With Greater Value on Right",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Linked List",
            "Stack"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given the head of a linked list. Remove every node which has a node with a greater value anywhere to the right side of it. Return the head of the modified linked list.",
        "constraints": "The number of nodes in the given list is in the range [1, 10^5].\n1 <= Node.val <= 10^5",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [5,2,13,3,8]",
                "output": "[13,8]",
                "explanation": "For the given input head = [5,2,13,3,8], the expected output is [13,8]."
            },
            {
                "input": "head = [1,1,1,1]",
                "output": "[1,1,1,1]",
                "explanation": "For the given input head = [1,1,1,1], the expected output is [1,1,1,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Remove Nodes With Greater Value on Right.",
        "execution_config": {
            "functionName": "removeNodes",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "ea2e62f9-c5a4-4c4d-a573-5bb571ad8e38",
        "title": "Next Greater Node In Linked List",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Monotonic Stack"
        ],
        "data_structures": [
            "Linked List",
            "Stack",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given the head of a linked list with n nodes. For each node in the list, find the value of the next greater node. Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If such a node does not exist, answer[i] = 0.",
        "constraints": "The number of nodes in the list is n.\n1 <= n <= 10^4\n1 <= Node.val <= 10^9",
        "input_format": "ListNode* head",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "head = [2,1,5]",
                "output": "[5,5,0]",
                "explanation": "For the given input head = [2,1,5], the expected output is [5,5,0]."
            },
            {
                "input": "head = [2,7,4,3,5]",
                "output": "[7,0,5,5,0]",
                "explanation": "For the given input head = [2,7,4,3,5], the expected output is [7,0,5,5,0]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Next Greater Node In Linked List.",
        "execution_config": {
            "functionName": "nextLargerNodes",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "dadcb6d5-8887-4f92-a1df-4018f3ba76c3",
        "title": "Split Linked List in K Parts Sizes",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List",
            "Array"
        ],
        "expected_time": "O(n + k)",
        "expected_space": "O(k)",
        "description": "Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts. Return the sizes of each of the k parts.",
        "constraints": "The number of nodes in the list is in the range [0, 1000].\n0 <= Node.val <= 1000\n1 <= k <= 50",
        "input_format": "ListNode* head, int k",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "head = [1,2,3], k = 5",
                "output": "[1,1,1,0,0]",
                "explanation": "For the given input head = [1,2,3], k = 5, the expected output is [1,1,1,0,0]."
            },
            {
                "input": "head = [1,2,3,4,5,6,7,8,9,10], k = 3",
                "output": "[4,3,3]",
                "explanation": "For the given input head = [1,2,3,4,5,6,7,8,9,10], k = 3, the expected output is [4,3,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Split Linked List in K Parts Sizes.",
        "execution_config": {
            "functionName": "splitListPartSizes",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
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
        "id": "1884288a-a9b8-41d9-a75f-8aed6f6770a3",
        "title": "Reverse Linked List Sublist",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list (1-indexed).",
        "constraints": "The number of nodes in the list is n.\n1 <= n <= 500\n-500 <= Node.val <= 500\n1 <= left <= right <= n",
        "input_format": "ListNode* head, int left, int right",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4,5], left = 2, right = 4",
                "output": "[1,4,3,2,5]",
                "explanation": "For the given input head = [1,2,3,4,5], left = 2, right = 4, the expected output is [1,4,3,2,5]."
            },
            {
                "input": "head = [5], left = 1, right = 1",
                "output": "[5]",
                "explanation": "For the given input head = [5], left = 1, right = 1, the expected output is [5]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reverse Linked List Sublist.",
        "execution_config": {
            "functionName": "reverseBetween",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
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
        "id": "4d001e0e-9860-4c5c-a65e-848391566a3d",
        "title": "Swap Kth Node from Beginning and End",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given the head of a linked list, and an integer k. Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (1-indexed).",
        "constraints": "The number of nodes in the list is n.\n1 <= k <= n <= 10^5\n0 <= Node.val <= 100",
        "input_format": "ListNode* head, int k",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,2,3,4,5], k = 2",
                "output": "[1,4,3,2,5]",
                "explanation": "For the given input head = [1,2,3,4,5], k = 2, the expected output is [1,4,3,2,5]."
            },
            {
                "input": "head = [7,9,6,6,7,8,3,0,9,5], k = 5",
                "output": "[7,9,6,6,8,7,3,0,9,5]",
                "explanation": "For the given input head = [7,9,6,6,7,8,3,0,9,5], k = 5, the expected output is [7,9,6,6,8,7,3,0,9,5]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Swap Kth Node from Beginning and End.",
        "execution_config": {
            "functionName": "swapNodes",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
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
        "id": "6fcd6087-73d8-4026-a06a-bce4d67187df",
        "title": "Double a Number Represented as a Linked List",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Simulation"
        ],
        "data_structures": [
            "Linked List"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes. Return the head of the linked list after doubling it.",
        "constraints": "The number of nodes in the list is in the range [1, 10^4]\n0 <= Node.val <= 9",
        "input_format": "ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "head = [1,8,9]",
                "output": "[3,7,8]",
                "explanation": "For the given input head = [1,8,9], the expected output is [3,7,8]."
            },
            {
                "input": "head = [9,9,9]",
                "output": "[1,9,9,8]",
                "explanation": "For the given input head = [9,9,9], the expected output is [1,9,9,8]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Double a Number Represented as a Linked List.",
        "execution_config": {
            "functionName": "doubleIt",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "29847607-ad34-4449-a911-3264427ab292",
        "title": "Delete Nodes Present in Exclusion Set",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Hashing"
        ],
        "data_structures": [
            "Linked List",
            "Hash Set"
        ],
        "expected_time": "O(n + m)",
        "expected_space": "O(m)",
        "description": "You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.",
        "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^5\nThe number of nodes in the list is in the range [1, 10^5].",
        "input_format": "vector<int>& nums, ListNode* head",
        "output_format": "ListNode*",
        "examples": [
            {
                "input": "nums = [1,2,3], head = [1,2,3,4,5]",
                "output": "[4,5]",
                "explanation": "For the given input nums = [1,2,3], head = [1,2,3,4,5], the expected output is [4,5]."
            },
            {
                "input": "nums = [1], head = [1,2,1,2,1,2]",
                "output": "[2,2,2]",
                "explanation": "For the given input nums = [1], head = [1,2,1,2,1,2], the expected output is [2,2,2]."
            },
            {
                "input": "nums = [5], head = [1,2,3,4]",
                "output": "[1,2,3,4]",
                "explanation": "For the given input nums = [5], head = [1,2,3,4], the expected output is [1,2,3,4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Delete Nodes Present in Exclusion Set.",
        "execution_config": {
            "functionName": "modifiedList",
            "returnType": "ListNode*",
            "parameters": [
                {
                    "name": "nums",
                    "type": "vector<int>&"
                },
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "d1423075-8c7f-4f8c-a61c-bddb1ddca6dd",
        "title": "Nodes Between Critical Points Distances",
        "topic": "Linked Lists",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers"
        ],
        "data_structures": [
            "Linked List",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "A critical point in a linked list is defined as either a local maxima or a local minima. Given a linked list, return an array of length 2 containing [minDistance, maxDistance] between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].",
        "constraints": "The number of nodes in the list is in the range [2, 10^5].\n1 <= Node.val <= 10^5",
        "input_format": "ListNode* head",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "head = [3,1]",
                "output": "[-1,-1]",
                "explanation": "For the given input head = [3,1], the expected output is [-1,-1]."
            },
            {
                "input": "head = [5,3,1,2,5,1,2]",
                "output": "[1,3]",
                "explanation": "For the given input head = [5,3,1,2,5,1,2], the expected output is [1,3]."
            },
            {
                "input": "head = [1,3,2,2,3,2,2,2,7]",
                "output": "[3,3]",
                "explanation": "For the given input head = [1,3,2,2,3,2,2,2,7], the expected output is [3,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Nodes Between Critical Points Distances.",
        "execution_config": {
            "functionName": "nodesBetweenCriticalPoints",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "head",
                    "type": "ListNode*"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    }
];

export default LINKED_LIST_PROBLEMS;
