/**
 * Trees & BST Problems Dataset (45 problems)
 * CodeMedic Verified DSA Collection
 */

export const TREE_PROBLEMS = [
    {
        "id": "4255a497-dd17-4111-a33c-823eb87f84d3",
        "title": "Binary Tree Inorder Traversal Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a 0-indexed array representation of a complete binary tree where index 0 is root, index 2*i+1 is left child, and index 2*i+2 is right child (with -1 indicating a null node), return the inorder traversal of its nodes' values.",
        "constraints": "0 <= tree.length <= 100\n-100 <= tree[i] <= 100",
        "input_format": "vector<int>& tree",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "tree = [1,-1,2,-1,-1,3]",
                "output": "[1,3,2]",
                "explanation": "For the given input tree = [1,-1,2,-1,-1,3], the expected output is [1,3,2]."
            },
            {
                "input": "tree = []",
                "output": "[]",
                "explanation": "For the given input tree = [], the expected output is []."
            },
            {
                "input": "tree = [1]",
                "output": "[1]",
                "explanation": "For the given input tree = [1], the expected output is [1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Binary Tree Inorder Traversal Array.",
        "execution_config": {
            "functionName": "inorderTraversal",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "5d9293a6-0efb-4a24-a357-de397c5983c3",
        "title": "Binary Tree Preorder Traversal Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the array representation of a binary tree, return the preorder traversal of its nodes' values.",
        "constraints": "0 <= tree.length <= 100\n-100 <= tree[i] <= 100",
        "input_format": "vector<int>& tree",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "tree = [1,-1,2,-1,-1,3]",
                "output": "[1,2,3]",
                "explanation": "For the given input tree = [1,-1,2,-1,-1,3], the expected output is [1,2,3]."
            },
            {
                "input": "tree = [1,2,3,4,5]",
                "output": "[1,2,4,5,3]",
                "explanation": "For the given input tree = [1,2,3,4,5], the expected output is [1,2,4,5,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Binary Tree Preorder Traversal Array.",
        "execution_config": {
            "functionName": "preorderTraversal",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "c68c3f44-3613-40a8-a128-02520a1fdb66",
        "title": "Binary Tree Postorder Traversal Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the array representation of a binary tree, return the postorder traversal of its nodes' values.",
        "constraints": "0 <= tree.length <= 100\n-100 <= tree[i] <= 100",
        "input_format": "vector<int>& tree",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "tree = [1,-1,2,-1,-1,3]",
                "output": "[3,2,1]",
                "explanation": "For the given input tree = [1,-1,2,-1,-1,3], the expected output is [3,2,1]."
            },
            {
                "input": "tree = [1,2,3,4,5]",
                "output": "[4,5,2,3,1]",
                "explanation": "For the given input tree = [1,2,3,4,5], the expected output is [4,5,2,3,1]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Binary Tree Postorder Traversal Array.",
        "execution_config": {
            "functionName": "postorderTraversal",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "2c9df2fc-a6ae-429a-ac01-3d27c0c6cfa2",
        "title": "Maximum Depth of Binary Tree Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given the array representation of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
        "constraints": "0 <= tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [3,9,20,-1,-1,15,7]",
                "output": "3",
                "explanation": "For the given input tree = [3,9,20,-1,-1,15,7], the expected output is 3."
            },
            {
                "input": "tree = [1,-1,2]",
                "output": "2",
                "explanation": "For the given input tree = [1,-1,2], the expected output is 2."
            },
            {
                "input": "tree = []",
                "output": "0",
                "explanation": "For the given input tree = [], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Depth of Binary Tree Array.",
        "execution_config": {
            "functionName": "maxDepth",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "a41b6eb9-6a36-4781-af49-ce94c2081912",
        "title": "Symmetric Tree Array Representation",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "Recursion"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given the array representation of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
        "constraints": "1 <= tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "bool",
        "examples": [
            {
                "input": "tree = [1,2,2,3,4,4,3]",
                "output": "true",
                "explanation": "For the given input tree = [1,2,2,3,4,4,3], the expected output is true."
            },
            {
                "input": "tree = [1,2,2,-1,3,-1,3]",
                "output": "false",
                "explanation": "For the given input tree = [1,2,2,-1,3,-1,3], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Symmetric Tree Array Representation.",
        "execution_config": {
            "functionName": "isSymmetric",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "c7e9c3bc-b8e1-43df-a9b3-af16131f2435",
        "title": "Diameter of Tree from Edge List",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Graph"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the number of nodes n (labeled 0 to n-1) and a list of undirected edges representing a tree, return the diameter of the tree. The diameter of a tree is the length of the longest path between any two nodes in a tree.",
        "constraints": "1 <= n <= 10^4\nedges.length == n - 1",
        "input_format": "int n, vector<vector<int>>& edges",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 5, edges = [[0,1],[0,2],[1,3],[1,4]]",
                "output": "3",
                "explanation": "For the given input n = 5, edges = [[0,1],[0,2],[1,3],[1,4]], the expected output is 3."
            },
            {
                "input": "n = 3, edges = [[0,1],[1,2]]",
                "output": "2",
                "explanation": "For the given input n = 3, edges = [[0,1],[1,2]], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Diameter of Tree from Edge List.",
        "execution_config": {
            "functionName": "treeDiameter",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "edges",
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
        "id": "e0b9c0d2-8405-4f0b-a9e4-3743328bddee",
        "title": "Validate Binary Search Tree from Inorder Sequence",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "Tree Traversal",
            "BST"
        ],
        "data_structures": [
            "BST",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an integer array representing the inorder traversal of a candidate binary search tree, return true if and only if it represents a valid strictly increasing binary search tree.",
        "constraints": "1 <= nodes.length <= 10^4\n-10^9 <= nodes[i] <= 10^9",
        "input_format": "vector<int>& nodes",
        "output_format": "bool",
        "examples": [
            {
                "input": "nodes = [1,2,3,4,5]",
                "output": "true",
                "explanation": "For the given input nodes = [1,2,3,4,5], the expected output is true."
            },
            {
                "input": "nodes = [2,1,3]",
                "output": "false",
                "explanation": "For the given input nodes = [2,1,3], the expected output is false."
            },
            {
                "input": "nodes = [1,1,2]",
                "output": "false",
                "explanation": "For the given input nodes = [1,1,2], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Validate Binary Search Tree from Inorder Sequence.",
        "execution_config": {
            "functionName": "isValidBST",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "nodes",
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
        "id": "0d40d7e5-9296-4404-a0e5-fd6072fe5258",
        "title": "Range Sum of BST Elements",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "BST"
        ],
        "data_structures": [
            "BST",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the array of all elements present in a Binary Search Tree, return the sum of values of all nodes with a value in the inclusive range [low, high].",
        "constraints": "1 <= bstElements.length <= 2 * 10^4\n1 <= bstElements[i] <= 10^5\n1 <= low <= high <= 10^5",
        "input_format": "vector<int>& bstElements, int low, int high",
        "output_format": "int",
        "examples": [
            {
                "input": "bstElements = [10,5,15,3,7,18], low = 7, high = 15",
                "output": "32",
                "explanation": "For the given input bstElements = [10,5,15,3,7,18], low = 7, high = 15, the expected output is 32."
            },
            {
                "input": "bstElements = [10,5,15,3,7,13,18,1,6], low = 6, high = 10",
                "output": "23",
                "explanation": "For the given input bstElements = [10,5,15,3,7,13,18,1,6], low = 6, high = 10, the expected output is 23."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Range Sum of BST Elements.",
        "execution_config": {
            "functionName": "rangeSumBST",
            "returnType": "int",
            "parameters": [
                {
                    "name": "bstElements",
                    "type": "vector<int>&"
                },
                {
                    "name": "low",
                    "type": "int"
                },
                {
                    "name": "high",
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
        "id": "33e9991a-1333-4753-a1bd-5cf2a7e94fd7",
        "title": "Kth Smallest Element in a BST",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "Tree Traversal",
            "BST"
        ],
        "data_structures": [
            "BST",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of all node values in a Binary Search Tree, return the kth smallest value (1-indexed) in the tree.",
        "constraints": "1 <= k <= bstElements.length <= 10^4\n0 <= bstElements[i] <= 10^4\nAll the values of bstElements are unique.",
        "input_format": "vector<int>& bstElements, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "bstElements = [3,1,4,2], k = 1",
                "output": "1",
                "explanation": "For the given input bstElements = [3,1,4,2], k = 1, the expected output is 1."
            },
            {
                "input": "bstElements = [5,3,6,2,4,1], k = 3",
                "output": "3",
                "explanation": "For the given input bstElements = [5,3,6,2,4,1], k = 3, the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Kth Smallest Element in a BST.",
        "execution_config": {
            "functionName": "kthSmallest",
            "returnType": "int",
            "parameters": [
                {
                    "name": "bstElements",
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
        "id": "7a14c23c-9a34-4dcc-ac63-91994db61241",
        "title": "Sorted Array to Balanced BST Root Value",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "Divide and Conquer",
            "BST"
        ],
        "data_structures": [
            "BST",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(log n)",
        "description": "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree and return the value of the root node.",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in a strictly increasing order.",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [-10,-3,0,5,9]",
                "output": "0",
                "explanation": "For the given input nums = [-10,-3,0,5,9], the expected output is 0."
            },
            {
                "input": "nums = [1,3]",
                "output": "3",
                "explanation": "For the given input nums = [1,3], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sorted Array to Balanced BST Root Value.",
        "execution_config": {
            "functionName": "sortedArrayToBSTRoot",
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
        "id": "96797ebd-8186-49a5-a0f8-38dd7fc63f93",
        "title": "Count Non-Null Tree Nodes",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "Binary Search",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given the array representation of a binary tree where -1 represents empty child slots, return the number of valid non-null nodes in the tree.",
        "constraints": "0 <= tree.length <= 5 * 10^4\n-100 <= tree[i] <= 100",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [1,2,3,4,5,6]",
                "output": "6",
                "explanation": "For the given input tree = [1,2,3,4,5,6], the expected output is 6."
            },
            {
                "input": "tree = []",
                "output": "0",
                "explanation": "For the given input tree = [], the expected output is 0."
            },
            {
                "input": "tree = [1]",
                "output": "1",
                "explanation": "For the given input tree = [1], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Non-Null Tree Nodes.",
        "execution_config": {
            "functionName": "countNodes",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "873698e8-c288-49f3-ad1c-8fa4abd21b57",
        "title": "Path Sum Exists in Tree Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given the array representation of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.",
        "constraints": "tree.length <= 1000\n-1000 <= targetSum <= 1000",
        "input_format": "vector<int>& tree, int targetSum",
        "output_format": "bool",
        "examples": [
            {
                "input": "tree = [5,4,8,11,-1,13,4,7,2,-1,-1,-1,1], targetSum = 22",
                "output": "true",
                "explanation": "For the given input tree = [5,4,8,11,-1,13,4,7,2,-1,-1,-1,1], targetSum = 22, the expected output is true."
            },
            {
                "input": "tree = [1,2,3], targetSum = 5",
                "output": "false",
                "explanation": "For the given input tree = [1,2,3], targetSum = 5, the expected output is false."
            },
            {
                "input": "tree = [], targetSum = 0",
                "output": "false",
                "explanation": "For the given input tree = [], targetSum = 0, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Path Sum Exists in Tree Array.",
        "execution_config": {
            "functionName": "hasPathSum",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "tree",
                    "type": "vector<int>&"
                },
                {
                    "name": "targetSum",
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
        "id": "794fe9d3-16bb-481f-aa88-b7e48701b890",
        "title": "Lowest Common Ancestor in Parent Array",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(h)",
        "expected_space": "O(h)",
        "description": "Given a tree of n nodes where parent[i] denotes the parent of node i (with parent[root] = -1), find the lowest common ancestor of nodes p and q.",
        "constraints": "1 <= n <= 10^4\n0 <= p, q < n",
        "input_format": "vector<int>& parent, int p, int q",
        "output_format": "int",
        "examples": [
            {
                "input": "parent = [-1,0,0,1,1,2,2], p = 3, q = 4",
                "output": "1",
                "explanation": "For the given input parent = [-1,0,0,1,1,2,2], p = 3, q = 4, the expected output is 1."
            },
            {
                "input": "parent = [-1,0,0,1,1,2,2], p = 3, q = 5",
                "output": "0",
                "explanation": "For the given input parent = [-1,0,0,1,1,2,2], p = 3, q = 5, the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Lowest Common Ancestor in Parent Array.",
        "execution_config": {
            "functionName": "lowestCommonAncestor",
            "returnType": "int",
            "parameters": [
                {
                    "name": "parent",
                    "type": "vector<int>&"
                },
                {
                    "name": "p",
                    "type": "int"
                },
                {
                    "name": "q",
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
        "id": "08e7b3ab-4c46-453b-ad0b-d0431a771afb",
        "title": "Binary Tree Right Side View Array",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "BFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the array representation of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
        "constraints": "0 <= tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "tree = [1,2,3,-1,5,-1,4]",
                "output": "[1,3,4]",
                "explanation": "For the given input tree = [1,2,3,-1,5,-1,4], the expected output is [1,3,4]."
            },
            {
                "input": "tree = [1,-1,3]",
                "output": "[1,3]",
                "explanation": "For the given input tree = [1,-1,3], the expected output is [1,3]."
            },
            {
                "input": "tree = []",
                "output": "[]",
                "explanation": "For the given input tree = [], the expected output is []."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Binary Tree Right Side View Array.",
        "execution_config": {
            "functionName": "rightSideView",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "2d1695be-36f1-4e59-a7a1-7bb8cbfd2e3c",
        "title": "Invert Binary Tree Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "Recursion"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the complete binary tree array representation, invert the tree (swap left and right child subtrees recursively) and return the resulting tree array.",
        "constraints": "0 <= tree.length <= 100",
        "input_format": "vector<int>& tree",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "tree = [4,2,7,1,3,6,9]",
                "output": "[4,7,2,3,1,9,6]",
                "explanation": "For the given input tree = [4,2,7,1,3,6,9], the expected output is [4,7,2,3,1,9,6]."
            },
            {
                "input": "tree = [2,1,3]",
                "output": "[2,3,1]",
                "explanation": "For the given input tree = [2,1,3], the expected output is [2,3,1]."
            },
            {
                "input": "tree = []",
                "output": "[]",
                "explanation": "For the given input tree = [], the expected output is []."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Invert Binary Tree Array.",
        "execution_config": {
            "functionName": "invertTree",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "1380bed2-dc30-4d5f-acb2-7aa36db82f78",
        "title": "Sum of Left Leaves in Tree Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given the array representation of a binary tree, return the sum of all left leaves.",
        "constraints": "tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [3,9,20,-1,-1,15,7]",
                "output": "24",
                "explanation": "For the given input tree = [3,9,20,-1,-1,15,7], the expected output is 24."
            },
            {
                "input": "tree = [1]",
                "output": "0",
                "explanation": "For the given input tree = [1], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sum of Left Leaves in Tree Array.",
        "execution_config": {
            "functionName": "sumOfLeftLeaves",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "f8a14ca7-fea8-4a5e-a397-61b32b32a0a0",
        "title": "Minimum Absolute Difference in BST",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "Tree Traversal",
            "BST"
        ],
        "data_structures": [
            "BST",
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "Given an array of values of nodes in a Binary Search Tree, return the minimum absolute difference between the values of any two different nodes in the tree.",
        "constraints": "2 <= bstElements.length <= 10^4\n0 <= bstElements[i] <= 10^5",
        "input_format": "vector<int>& bstElements",
        "output_format": "int",
        "examples": [
            {
                "input": "bstElements = [4,2,6,1,3]",
                "output": "1",
                "explanation": "For the given input bstElements = [4,2,6,1,3], the expected output is 1."
            },
            {
                "input": "bstElements = [1,0,48,12,49]",
                "output": "1",
                "explanation": "For the given input bstElements = [1,0,48,12,49], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Absolute Difference in BST.",
        "execution_config": {
            "functionName": "getMinimumDifference",
            "returnType": "int",
            "parameters": [
                {
                    "name": "bstElements",
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
        "id": "9757ec9c-68fe-46ab-ae10-1163cf45843f",
        "title": "Find Mode Values in BST Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "Tree Traversal",
            "Hashing"
        ],
        "data_structures": [
            "BST",
            "Array",
            "Hash Map"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of node values from a Binary Search Tree (with duplicates permitted), return all the mode(s) (i.e. the most frequently occurred element) in it sorted in ascending order.",
        "constraints": "1 <= bstElements.length <= 10^4",
        "input_format": "vector<int>& bstElements",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "bstElements = [1,2,2]",
                "output": "[2]",
                "explanation": "For the given input bstElements = [1,2,2], the expected output is [2]."
            },
            {
                "input": "bstElements = [0]",
                "output": "[0]",
                "explanation": "For the given input bstElements = [0], the expected output is [0]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Mode Values in BST Array.",
        "execution_config": {
            "functionName": "findMode",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "bstElements",
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
        "id": "1421ea36-380f-4cbf-a851-30d61504ebb5",
        "title": "Find Pair With Target Sum in BST Keys",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "Two Pointers",
            "Hashing"
        ],
        "data_structures": [
            "BST",
            "Hash Set"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an array of unique node values from a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.",
        "constraints": "1 <= bstElements.length <= 10^4\n-10^4 <= bstElements[i], k <= 10^4",
        "input_format": "vector<int>& bstElements, int k",
        "output_format": "bool",
        "examples": [
            {
                "input": "bstElements = [5,3,6,2,4,7], k = 9",
                "output": "true",
                "explanation": "For the given input bstElements = [5,3,6,2,4,7], k = 9, the expected output is true."
            },
            {
                "input": "bstElements = [5,3,6,2,4,7], k = 28",
                "output": "false",
                "explanation": "For the given input bstElements = [5,3,6,2,4,7], k = 28, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Pair With Target Sum in BST Keys.",
        "execution_config": {
            "functionName": "findTarget",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "bstElements",
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
        "id": "8103c75f-baf6-4afb-a026-80fec3258875",
        "title": "Univalued Binary Tree Check",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "A binary tree is uni-valued if every node in the tree has the same value. Given the array representation of a binary tree, return true if and only if the given tree is uni-valued.",
        "constraints": "1 <= tree.length <= 100",
        "input_format": "vector<int>& tree",
        "output_format": "bool",
        "examples": [
            {
                "input": "tree = [1,1,1,1,1,-1,1]",
                "output": "true",
                "explanation": "For the given input tree = [1,1,1,1,1,-1,1], the expected output is true."
            },
            {
                "input": "tree = [2,2,2,5,2]",
                "output": "false",
                "explanation": "For the given input tree = [2,2,2,5,2], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Univalued Binary Tree Check.",
        "execution_config": {
            "functionName": "isUnivalTree",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "bf3b3cc1-7829-4bc3-a756-eac398f9c63b",
        "title": "Maximum Subtree Sum in Directed Tree",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given n nodes labeled 0 to n-1 with weights given in nodeWeights and edges representing child connections [parent, child], return the maximum sum of any subtree.",
        "constraints": "1 <= n <= 10^4\n-10^4 <= nodeWeights[i] <= 10^4\nedges.length == n - 1",
        "input_format": "int n, vector<vector<int>>& edges, vector<int>& nodeWeights",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 4, edges = [[0,1],[0,2],[1,3]], nodeWeights = [1,-2,3,4]",
                "output": "6",
                "explanation": "For the given input n = 4, edges = [[0,1],[0,2],[1,3]], nodeWeights = [1,-2,3,4], the expected output is 6."
            },
            {
                "input": "n = 3, edges = [[0,1],[1,2]], nodeWeights = [-1,-2,-3]",
                "output": "-3",
                "explanation": "For the given input n = 3, edges = [[0,1],[1,2]], nodeWeights = [-1,-2,-3], the expected output is -3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Subtree Sum in Directed Tree.",
        "execution_config": {
            "functionName": "maxSubtreeSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "edges",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "nodeWeights",
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
        "id": "fe00e5be-5098-44a5-a357-a008110765fc",
        "title": "Construct Tree from Preorder and Inorder Root Value",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "Divide and Conquer",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, return the value of the root node.",
        "constraints": "1 <= preorder.length <= 3000\ninorder.length == preorder.length\npreorder and inorder consist of unique values.",
        "input_format": "vector<int>& preorder, vector<int>& inorder",
        "output_format": "int",
        "examples": [
            {
                "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
                "output": "3",
                "explanation": "For the given input preorder = [3,9,20,15,7], inorder = [9,3,15,20,7], the expected output is 3."
            },
            {
                "input": "preorder = [-1], inorder = [-1]",
                "output": "-1",
                "explanation": "For the given input preorder = [-1], inorder = [-1], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Construct Tree from Preorder and Inorder Root Value.",
        "execution_config": {
            "functionName": "buildTreeRoot",
            "returnType": "int",
            "parameters": [
                {
                    "name": "preorder",
                    "type": "vector<int>&"
                },
                {
                    "name": "inorder",
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
        "id": "657c4209-7054-4abe-af66-7d7e33ba804f",
        "title": "Closest Value in BST Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "Binary Search",
            "BST"
        ],
        "data_structures": [
            "BST",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given an array of values in a binary search tree and a target double value, return the value in the BST that is closest to the target. If there are multiple answers, return the smaller one.",
        "constraints": "1 <= bstElements.length <= 10^4\n0 <= bstElements[i] <= 10^9\n-10^9 <= target <= 10^9",
        "input_format": "vector<int>& bstElements, double target",
        "output_format": "int",
        "examples": [
            {
                "input": "bstElements = [4,2,5,1,3], target = 3.714286",
                "output": "4",
                "explanation": "For the given input bstElements = [4,2,5,1,3], target = 3.714286, the expected output is 4."
            },
            {
                "input": "bstElements = [1], target = 4.428571",
                "output": "1",
                "explanation": "For the given input bstElements = [1], target = 4.428571, the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Closest Value in BST Array.",
        "execution_config": {
            "functionName": "closestValue",
            "returnType": "int",
            "parameters": [
                {
                    "name": "bstElements",
                    "type": "vector<int>&"
                },
                {
                    "name": "target",
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
        "id": "d8080733-9280-48b9-a097-fb9959c9b790",
        "title": "Binary Tree Level Sizes",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "BFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the array representation of a binary tree, return the number of nodes at each level from root to bottom.",
        "constraints": "0 <= tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "tree = [3,9,20,-1,-1,15,7]",
                "output": "[1,2,2]",
                "explanation": "For the given input tree = [3,9,20,-1,-1,15,7], the expected output is [1,2,2]."
            },
            {
                "input": "tree = [1]",
                "output": "[1]",
                "explanation": "For the given input tree = [1], the expected output is [1]."
            },
            {
                "input": "tree = []",
                "output": "[]",
                "explanation": "For the given input tree = [], the expected output is []."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Binary Tree Level Sizes.",
        "execution_config": {
            "functionName": "treeLevelSizes",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "cfc472b5-8ea7-4526-a7a8-56b3c7fb0606",
        "title": "Maximum Value at Each Tree Level",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "BFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the array representation of a binary tree, return an array of the largest value in each row of the tree.",
        "constraints": "0 <= tree.length <= 10^4\n-2^31 <= tree[i] <= 2^31 - 1",
        "input_format": "vector<int>& tree",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "tree = [1,3,2,5,3,-1,9]",
                "output": "[1,3,9]",
                "explanation": "For the given input tree = [1,3,2,5,3,-1,9], the expected output is [1,3,9]."
            },
            {
                "input": "tree = [1,2,3]",
                "output": "[1,3]",
                "explanation": "For the given input tree = [1,2,3], the expected output is [1,3]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Value at Each Tree Level.",
        "execution_config": {
            "functionName": "largestValues",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "a9ed31d7-1fb4-4701-a94e-31d8222754de",
        "title": "Deepest Leaves Sum in Tree Array",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given the array representation of a binary tree, return the sum of values of its deepest leaves.",
        "constraints": "1 <= tree.length <= 10^4",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [1,2,3,4,5,-1,6,7,-1,-1,-1,-1,-1,-1,8]",
                "output": "15",
                "explanation": "For the given input tree = [1,2,3,4,5,-1,6,7,-1,-1,-1,-1,-1,-1,8], the expected output is 15."
            },
            {
                "input": "tree = [6,7,8,2,7,1,3,9,-1,1,4,-1,-1,-1,5]",
                "output": "19",
                "explanation": "For the given input tree = [6,7,8,2,7,1,3,9,-1,1,4,-1,-1,-1,5], the expected output is 19."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Deepest Leaves Sum in Tree Array.",
        "execution_config": {
            "functionName": "deepestLeavesSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "3523e187-8a49-4942-ab10-91b016aab02e",
        "title": "Count Good Nodes in Tree Array",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given a binary tree array, a node X in the tree is named good if in the path from the root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree.",
        "constraints": "1 <= tree.length <= 10^4\n-10^4 <= tree[i] <= 10^4",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [3,1,4,3,-1,1,5]",
                "output": "4",
                "explanation": "For the given input tree = [3,1,4,3,-1,1,5], the expected output is 4."
            },
            {
                "input": "tree = [3,3,-1,4,2]",
                "output": "3",
                "explanation": "For the given input tree = [3,3,-1,4,2], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Good Nodes in Tree Array.",
        "execution_config": {
            "functionName": "goodNodes",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "bb50e175-4264-4bc9-aece-c8872248cf7b",
        "title": "Leaf-Similar Trees Check",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n1 + n2)",
        "expected_space": "O(h1 + h2)",
        "description": "Two binary trees are leaf-similar if their leaf value sequences are the same. Given array representations of two trees, return true if and only if they are leaf-similar.",
        "constraints": "1 <= tree1.length, tree2.length <= 1000",
        "input_format": "vector<int>& tree1, vector<int>& tree2",
        "output_format": "bool",
        "examples": [
            {
                "input": "tree1 = [3,5,1,6,2,9,8,-1,-1,7,4], tree2 = [3,5,1,6,7,4,2,-1,-1,-1,-1,-1,-1,9,8]",
                "output": "true",
                "explanation": "For the given input tree1 = [3,5,1,6,2,9,8,-1,-1,7,4], tree2 = [3,5,1,6,7,4,2,-1,-1,-1,-1,-1,-1,9,8], the expected output is true."
            },
            {
                "input": "tree1 = [1,2,3], tree2 = [1,3,2]",
                "output": "false",
                "explanation": "For the given input tree1 = [1,2,3], tree2 = [1,3,2], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Leaf-Similar Trees Check.",
        "execution_config": {
            "functionName": "leafSimilar",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "tree1",
                    "type": "vector<int>&"
                },
                {
                    "name": "tree2",
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
        "id": "4bb35dd6-37bc-4a96-a417-0cbc40e45021",
        "title": "Sum Root to Leaf Binary Numbers",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "Bit Manipulation"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "You are given the array representation of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number. Return the sum of these numbers.",
        "constraints": "1 <= tree.length <= 1000\ntree[i] is 0, 1, or -1.",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [1,0,1,0,1,0,1]",
                "output": "22",
                "explanation": "For the given input tree = [1,0,1,0,1,0,1], the expected output is 22."
            },
            {
                "input": "tree = [0]",
                "output": "0",
                "explanation": "For the given input tree = [0], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Sum Root to Leaf Binary Numbers.",
        "execution_config": {
            "functionName": "sumRootToLeaf",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "c18d30a1-b374-4bfe-a532-81aa9abebb8e",
        "title": "Max Difference Between Node and Ancestor",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given the array representation of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.",
        "constraints": "2 <= tree.length <= 5000\n0 <= tree[i] <= 10^5",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [8,3,10,1,6,-1,14,-1,-1,4,7,-1,-1,13]",
                "output": "7",
                "explanation": "For the given input tree = [8,3,10,1,6,-1,14,-1,-1,4,7,-1,-1,13], the expected output is 7."
            },
            {
                "input": "tree = [1,-1,2,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,3]",
                "output": "3",
                "explanation": "For the given input tree = [1,-1,2,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,3], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Max Difference Between Node and Ancestor.",
        "execution_config": {
            "functionName": "maxAncestorDiff",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "f5a8f23f-cf13-478f-ab95-c93bd31e43ff",
        "title": "Cousin Nodes Check in Tree Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "BFS",
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Two nodes of a binary tree are cousins if they have the same depth with different parents. Given tree array and values x and y, return true if they are cousins.",
        "constraints": "2 <= tree.length <= 100",
        "input_format": "vector<int>& tree, int x, int y",
        "output_format": "bool",
        "examples": [
            {
                "input": "tree = [1,2,3,4], x = 4, y = 3",
                "output": "false",
                "explanation": "For the given input tree = [1,2,3,4], x = 4, y = 3, the expected output is false."
            },
            {
                "input": "tree = [1,2,3,-1,4,-1,5], x = 5, y = 4",
                "output": "true",
                "explanation": "For the given input tree = [1,2,3,-1,4,-1,5], x = 5, y = 4, the expected output is true."
            },
            {
                "input": "tree = [1,2,3,-1,4], x = 2, y = 3",
                "output": "false",
                "explanation": "For the given input tree = [1,2,3,-1,4], x = 2, y = 3, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Cousin Nodes Check in Tree Array.",
        "execution_config": {
            "functionName": "isCousins",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "tree",
                    "type": "vector<int>&"
                },
                {
                    "name": "x",
                    "type": "int"
                },
                {
                    "name": "y",
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
        "id": "3fa55005-44d9-456f-af39-1e0ca0965266",
        "title": "Second Minimum Node in Binary Tree Array",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a special binary tree where each node has either 0 or 2 children and node.val = min(left.val, right.val), return the second minimum value in the tree. If no second minimum exists, return -1.",
        "constraints": "1 <= tree.length <= 25",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [2,2,5,-1,-1,5,7]",
                "output": "5",
                "explanation": "For the given input tree = [2,2,5,-1,-1,5,7], the expected output is 5."
            },
            {
                "input": "tree = [2,2,2]",
                "output": "-1",
                "explanation": "For the given input tree = [2,2,2], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Second Minimum Node in Binary Tree Array.",
        "execution_config": {
            "functionName": "findSecondMinimumValue",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "2c9ab9e7-286c-4234-abb9-ea0ab338d369",
        "title": "Merge Two Binary Trees Arrays",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "Recursion"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(max(n1, n2))",
        "expected_space": "O(max(n1, n2))",
        "description": "You are given two binary tree arrays. Overlap one tree on top of the other: when two nodes overlap, sum their values. Return the merged tree array.",
        "constraints": "0 <= tree1.length, tree2.length <= 100",
        "input_format": "vector<int>& tree1, vector<int>& tree2",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "tree1 = [1,3,2,5], tree2 = [2,1,3,-1,4,-1,7]",
                "output": "[3,4,5,5,4,-1,7]",
                "explanation": "For the given input tree1 = [1,3,2,5], tree2 = [2,1,3,-1,4,-1,7], the expected output is [3,4,5,5,4,-1,7]."
            },
            {
                "input": "tree1 = [1], tree2 = [1,2]",
                "output": "[2,2]",
                "explanation": "For the given input tree1 = [1], tree2 = [1,2], the expected output is [2,2]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Merge Two Binary Trees Arrays.",
        "execution_config": {
            "functionName": "mergeTrees",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "tree1",
                    "type": "vector<int>&"
                },
                {
                    "name": "tree2",
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
        "id": "d3ae0a66-8b06-48a1-aa1b-23a63ed984fb",
        "title": "Check If All Leaves Are at Same Level",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "BFS",
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given a tree array representation, return true if all leaf nodes are located at the exact same depth level, or false otherwise.",
        "constraints": "1 <= tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "bool",
        "examples": [
            {
                "input": "tree = [1,2,3,4,5,6,7]",
                "output": "true",
                "explanation": "For the given input tree = [1,2,3,4,5,6,7], the expected output is true."
            },
            {
                "input": "tree = [1,2,3,4,-1,-1,-1]",
                "output": "false",
                "explanation": "For the given input tree = [1,2,3,4,-1,-1,-1], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Check If All Leaves Are at Same Level.",
        "execution_config": {
            "functionName": "checkLeavesLevel",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "30a1f0fb-4355-415b-afd4-b43ffbb44f49",
        "title": "Increasing Order Search Tree Inorder Values",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "BST",
            "Tree Traversal"
        ],
        "data_structures": [
            "BST",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the root-level array of a binary search tree, rearrange the tree in in-order so that the leftmost node is now the root of the tree, and every node has no left child and only one right child. Return the node values in order.",
        "constraints": "1 <= bstElements.length <= 100",
        "input_format": "vector<int>& bstElements",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "bstElements = [5,3,6,2,4,-1,8,1,-1,-1,-1,7,9]",
                "output": "[1,2,3,4,5,6,7,8,9]",
                "explanation": "For the given input bstElements = [5,3,6,2,4,-1,8,1,-1,-1,-1,7,9], the expected output is [1,2,3,4,5,6,7,8,9]."
            },
            {
                "input": "bstElements = [5,1,7]",
                "output": "[1,5,7]",
                "explanation": "For the given input bstElements = [5,1,7], the expected output is [1,5,7]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Increasing Order Search Tree Inorder Values.",
        "execution_config": {
            "functionName": "increasingBST",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "bstElements",
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
        "id": "c0128ac4-eada-4cd1-ab27-46448da4fc59",
        "title": "Count Tree Paths With Target Sum",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "Prefix Sum",
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array",
            "Hash Map"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given the array representation of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum. The path does not need to start or end at the root or a leaf, but it must go downwards.",
        "constraints": "tree.length <= 1000\n-10^9 <= targetSum <= 10^9",
        "input_format": "vector<int>& tree, long long targetSum",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [10,5,-3,3,2,-1,11,3,-2,-1,1], targetSum = 8",
                "output": "3",
                "explanation": "For the given input tree = [10,5,-3,3,2,-1,11,3,-2,-1,1], targetSum = 8, the expected output is 3."
            },
            {
                "input": "tree = [5,4,8,11,-1,13,4,7,2,-1,-1,5,1], targetSum = 22",
                "output": "3",
                "explanation": "For the given input tree = [5,4,8,11,-1,13,4,7,2,-1,-1,5,1], targetSum = 22, the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Tree Paths With Target Sum.",
        "execution_config": {
            "functionName": "pathSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
                    "type": "vector<int>&"
                },
                {
                    "name": "targetSum",
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
        "id": "d6707f40-a534-44b8-a9c4-1c9edbdbd4f9",
        "title": "Find Duplicate Subtree Signatures Count",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "Hashing"
        ],
        "data_structures": [
            "Tree",
            "Hash Map"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a tree array representation, return the count of distinct duplicate subtree structures that appear more than once in the tree.",
        "constraints": "1 <= tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [1,2,3,4,-1,2,4,-1,-1,-1,-1,4]",
                "output": "2",
                "explanation": "For the given input tree = [1,2,3,4,-1,2,4,-1,-1,-1,-1,4], the expected output is 2."
            },
            {
                "input": "tree = [2,1,1]",
                "output": "1",
                "explanation": "For the given input tree = [2,1,1], the expected output is 1."
            },
            {
                "input": "tree = [2,2,2,3,-1,3,-1]",
                "output": "2",
                "explanation": "For the given input tree = [2,2,2,3,-1,3,-1], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Duplicate Subtree Signatures Count.",
        "execution_config": {
            "functionName": "countDuplicateSubtrees",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "8ef2c78e-9bd7-4991-a4ae-9f7fe40d5065",
        "title": "Maximum Level Sum of a Binary Tree",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "BFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given the array representation of a binary tree, the level of its root is 1, the level of its children is 2, and so on. Return the smallest level x such that the sum of all the values of nodes at level x is maximal.",
        "constraints": "1 <= tree.length <= 10^4\n-10^5 <= tree[i] <= 10^5",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [1,7,0,7,-8,-1,-1]",
                "output": "2",
                "explanation": "For the given input tree = [1,7,0,7,-8,-1,-1], the expected output is 2."
            },
            {
                "input": "tree = [989,-1,10250,-1,-1,98693,-89388,-1,-1,-1,-1,-1,-1,-1,-32127]",
                "output": "2",
                "explanation": "For the given input tree = [989,-1,10250,-1,-1,98693,-89388,-1,-1,-1,-1,-1,-1,-1,-32127], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Level Sum of a Binary Tree.",
        "execution_config": {
            "functionName": "maxLevelSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "bfa53ab8-e496-4a59-a4bb-c7eb28e8242e",
        "title": "Tree Path Values Product",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given a tree array, return the maximum product of any root-to-leaf path containing only non-negative integers.",
        "constraints": "1 <= tree.length <= 100",
        "input_format": "vector<int>& tree",
        "output_format": "long long",
        "examples": [
            {
                "input": "tree = [2,3,4,5,2]",
                "output": "30",
                "explanation": "For the given input tree = [2,3,4,5,2], the expected output is 30."
            },
            {
                "input": "tree = [1,2,3]",
                "output": "3",
                "explanation": "For the given input tree = [1,2,3], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Tree Path Values Product.",
        "execution_config": {
            "functionName": "maxPathProduct",
            "returnType": "long long",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "3b4f25f8-be75-4a65-ab27-4f1c4578fb2e",
        "title": "Min Time to Collect All Apples in a Tree",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "Graph"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices given by hasApple array. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting and ending at vertex 0.",
        "constraints": "1 <= n <= 10^5\nedges.length == n - 1\nhasApple.length == n",
        "input_format": "int n, vector<vector<int>>& edges, vector<int>& hasApple",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [0,0,1,0,1,1,0]",
                "output": "8",
                "explanation": "For the given input n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [0,0,1,0,1,1,0], the expected output is 8."
            },
            {
                "input": "n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [0,0,1,0,1,0,0]",
                "output": "6",
                "explanation": "For the given input n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [0,0,1,0,1,0,0], the expected output is 6."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Min Time to Collect All Apples in a Tree.",
        "execution_config": {
            "functionName": "minTime",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "edges",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "hasApple",
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
        "id": "f55681e5-cc01-49f4-aa66-0d69cf73f255",
        "title": "Longest Path With Different Adjacent Characters",
        "topic": "Trees & BST",
        "difficulty": "Hard",
        "patterns": [
            "DFS",
            "Dynamic Programming"
        ],
        "data_structures": [
            "Tree",
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "You are given a tree with n nodes labeled from 0 to n - 1 rooted at node 0, given by parent array. You are also given a string s of length n. Return the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them.",
        "constraints": "n == parent.length == s.length\n1 <= n <= 10^5\nparent[0] == -1\ns consists of lowercase English letters.",
        "input_format": "vector<int>& parent, string s",
        "output_format": "int",
        "examples": [
            {
                "input": "parent = [-1,0,0,1,1,2], s = \"abacbe\"",
                "output": "3",
                "explanation": "For the given input parent = [-1,0,0,1,1,2], s = \"abacbe\", the expected output is 3."
            },
            {
                "input": "parent = [-1,0,0,0], s = \"aabc\"",
                "output": "3",
                "explanation": "For the given input parent = [-1,0,0,0], s = \"aabc\", the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Longest Path With Different Adjacent Characters.",
        "execution_config": {
            "functionName": "longestPath",
            "returnType": "int",
            "parameters": [
                {
                    "name": "parent",
                    "type": "vector<int>&"
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
        "id": "5ff8178f-e3b5-474f-a18e-2c9b8e83608f",
        "title": "Smallest String Starting From Leaf",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Tree",
            "String"
        ],
        "expected_time": "O(n * h)",
        "expected_space": "O(h)",
        "description": "You are given the array representation of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'. Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.",
        "constraints": "1 <= tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "string",
        "examples": [
            {
                "input": "tree = [0,1,2,3,4,3,4]",
                "output": "\"dba\"",
                "explanation": "For the given input tree = [0,1,2,3,4,3,4], the expected output is \"dba\"."
            },
            {
                "input": "tree = [25,1,3,1,3,0,2]",
                "output": "\"adz\"",
                "explanation": "For the given input tree = [25,1,3,1,3,0,2], the expected output is \"adz\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Smallest String Starting From Leaf.",
        "execution_config": {
            "functionName": "smallestFromLeaf",
            "returnType": "string",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "61b140da-d6b3-4ecd-a272-dbeabf7046c1",
        "title": "Max Difference Value in Tree",
        "topic": "Trees & BST",
        "difficulty": "Easy",
        "patterns": [
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Given a tree array, return the difference between the maximum node value and minimum node value in the entire tree.",
        "constraints": "2 <= tree.length <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [10,2,15,1,8]",
                "output": "14",
                "explanation": "For the given input tree = [10,2,15,1,8], the expected output is 14."
            },
            {
                "input": "tree = [5,5,5]",
                "output": "0",
                "explanation": "For the given input tree = [5,5,5], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Max Difference Value in Tree.",
        "execution_config": {
            "functionName": "treeValueRange",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "b7487912-6ebf-4f0b-a207-e26fdcd0d673",
        "title": "Count Nodes Equal to Average of Subtree",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Tree",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(h)",
        "description": "Given the array representation of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree (rounded down to the nearest integer).",
        "constraints": "1 <= tree.length <= 1000\n0 <= tree[i] <= 1000",
        "input_format": "vector<int>& tree",
        "output_format": "int",
        "examples": [
            {
                "input": "tree = [4,8,5,0,1,-1,6]",
                "output": "5",
                "explanation": "For the given input tree = [4,8,5,0,1,-1,6], the expected output is 5."
            },
            {
                "input": "tree = [1]",
                "output": "1",
                "explanation": "For the given input tree = [1], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Nodes Equal to Average of Subtree.",
        "execution_config": {
            "functionName": "averageOfSubtree",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tree",
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
        "id": "87bf6edb-02ed-42a8-ab52-281f441a29b0",
        "title": "Distance Between Two Nodes in BST Keys",
        "topic": "Trees & BST",
        "difficulty": "Medium",
        "patterns": [
            "BST",
            "Two Pointers"
        ],
        "data_structures": [
            "BST",
            "Array"
        ],
        "expected_time": "O(h)",
        "expected_space": "O(1)",
        "description": "Given a sorted array of BST keys and two values p and q present in the BST, return the shortest path distance (number of edges) between node p and node q in the BST.",
        "constraints": "2 <= bstElements.length <= 10^4\np and q exist in bstElements.",
        "input_format": "vector<int>& bstElements, int p, int q",
        "output_format": "int",
        "examples": [
            {
                "input": "bstElements = [1,2,3,4,5,6,7], p = 1, q = 7",
                "output": "6",
                "explanation": "For the given input bstElements = [1,2,3,4,5,6,7], p = 1, q = 7, the expected output is 6."
            },
            {
                "input": "bstElements = [2,5,8], p = 2, q = 8",
                "output": "2",
                "explanation": "For the given input bstElements = [2,5,8], p = 2, q = 8, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Distance Between Two Nodes in BST Keys.",
        "execution_config": {
            "functionName": "distanceInBST",
            "returnType": "int",
            "parameters": [
                {
                    "name": "bstElements",
                    "type": "vector<int>&"
                },
                {
                    "name": "p",
                    "type": "int"
                },
                {
                    "name": "q",
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

export default TREE_PROBLEMS;
