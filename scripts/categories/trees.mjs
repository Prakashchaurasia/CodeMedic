import { createProblem } from "../problem_blueprints.mjs";

export function getTreeProblems() {
    return [
        // 1. Binary Tree Inorder Traversal
        createProblem({
            title: "Binary Tree Inorder Traversal Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a 0-indexed array representation of a complete binary tree where index 0 is root, index 2*i+1 is left child, and index 2*i+2 is right child (with -1 indicating a null node), return the inorder traversal of its nodes' values.",
            constraints: "0 <= tree.length <= 100\n-100 <= tree[i] <= 100",
            fnName: "inorderTraversal",
            returnType: "vector<int>",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, -1, 2, -1, -1, 3]],
                [[]],
                [[1]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0) return [];
                const res = [];
                const dfs = (idx) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    dfs(2 * idx + 1);
                    res.push(tree[idx]);
                    dfs(2 * idx + 2);
                };
                dfs(0);
                return res;
            }
        }),

        // 2. Binary Tree Preorder Traversal
        createProblem({
            title: "Binary Tree Preorder Traversal Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the array representation of a binary tree, return the preorder traversal of its nodes' values.",
            constraints: "0 <= tree.length <= 100\n-100 <= tree[i] <= 100",
            fnName: "preorderTraversal",
            returnType: "vector<int>",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, -1, 2, -1, -1, 3]],
                [[1, 2, 3, 4, 5]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0) return [];
                const res = [];
                const dfs = (idx) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    res.push(tree[idx]);
                    dfs(2 * idx + 1);
                    dfs(2 * idx + 2);
                };
                dfs(0);
                return res;
            }
        }),

        // 3. Binary Tree Postorder Traversal
        createProblem({
            title: "Binary Tree Postorder Traversal Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the array representation of a binary tree, return the postorder traversal of its nodes' values.",
            constraints: "0 <= tree.length <= 100\n-100 <= tree[i] <= 100",
            fnName: "postorderTraversal",
            returnType: "vector<int>",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, -1, 2, -1, -1, 3]],
                [[1, 2, 3, 4, 5]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0) return [];
                const res = [];
                const dfs = (idx) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    dfs(2 * idx + 1);
                    dfs(2 * idx + 2);
                    res.push(tree[idx]);
                };
                dfs(0);
                return res;
            }
        }),

        // 4. Maximum Depth of Binary Tree
        createProblem({
            title: "Maximum Depth of Binary Tree Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given the array representation of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
            constraints: "0 <= tree.length <= 1000",
            fnName: "maxDepth",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[3, 9, 20, -1, -1, 15, 7]],
                [[1, -1, 2]],
                [[]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0) return 0;
                const dfs = (idx) => {
                    if (idx >= tree.length || tree[idx] === -1) return 0;
                    return 1 + Math.max(dfs(2 * idx + 1), dfs(2 * idx + 2));
                };
                return dfs(0);
            }
        }),

        // 5. Symmetric Tree
        createProblem({
            title: "Symmetric Tree Array Representation",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "Recursion"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given the array representation of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
            constraints: "1 <= tree.length <= 1000",
            fnName: "isSymmetric",
            returnType: "bool",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 2, 3, 4, 4, 3]],
                [[1, 2, 2, -1, 3, -1, 3]]
            ],
            solver: (tree) => {
                const isMirror = (t1, t2) => {
                    if (t1 >= tree.length && t2 >= tree.length) return true;
                    const v1 = (t1 < tree.length) ? tree[t1] : -1;
                    const v2 = (t2 < tree.length) ? tree[t2] : -1;
                    if (v1 === -1 && v2 === -1) return true;
                    if (v1 !== v2) return false;
                    return isMirror(2 * t1 + 1, 2 * t2 + 2) && isMirror(2 * t1 + 2, 2 * t2 + 1);
                };
                return isMirror(1, 2);
            }
        }),

        // 6. Diameter of Binary Tree
        createProblem({
            title: "Diameter of Tree from Edge List",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Graph"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the number of nodes n (labeled 0 to n-1) and a list of undirected edges representing a tree, return the diameter of the tree. The diameter of a tree is the length of the longest path between any two nodes in a tree.",
            constraints: "1 <= n <= 10^4\nedges.length == n - 1",
            fnName: "treeDiameter",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "edges", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [5, [[0, 1], [0, 2], [1, 3], [1, 4]]],
                [3, [[0, 1], [1, 2]]]
            ],
            solver: (n, edges) => {
                if (n <= 1) return 0;
                const adj = Array.from({ length: n }, () => []);
                for (const [u, v] of edges) {
                    adj[u].push(v);
                    adj[v].push(u);
                }
                const bfs = (start) => {
                    const dist = new Array(n).fill(-1);
                    dist[start] = 0;
                    const q = [start];
                    let farNode = start;
                    while (q.length > 0) {
                        const u = q.shift();
                        if (dist[u] > dist[farNode]) farNode = u;
                        for (const v of adj[u]) {
                            if (dist[v] === -1) {
                                dist[v] = dist[u] + 1;
                                q.push(v);
                            }
                        }
                    }
                    return { farNode, maxDist: dist[farNode] };
                };
                const { farNode } = bfs(0);
                return bfs(farNode).maxDist;
            }
        }),

        // 7. Validate Binary Search Tree from Inorder
        createProblem({
            title: "Validate Binary Search Tree from Inorder Sequence",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["Tree Traversal", "BST"],
            dataStructures: ["BST", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an integer array representing the inorder traversal of a candidate binary search tree, return true if and only if it represents a valid strictly increasing binary search tree.",
            constraints: "1 <= nodes.length <= 10^4\n-10^9 <= nodes[i] <= 10^9",
            fnName: "isValidBST",
            returnType: "bool",
            params: [{ name: "nodes", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 4, 5]],
                [[2, 1, 3]],
                [[1, 1, 2]]
            ],
            solver: (nodes) => {
                for (let i = 1; i < nodes.length; i++) {
                    if (nodes[i] <= nodes[i - 1]) return false;
                }
                return true;
            }
        }),

        // 8. Range Sum of BST
        createProblem({
            title: "Range Sum of BST Elements",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "BST"],
            dataStructures: ["BST", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the array of all elements present in a Binary Search Tree, return the sum of values of all nodes with a value in the inclusive range [low, high].",
            constraints: "1 <= bstElements.length <= 2 * 10^4\n1 <= bstElements[i] <= 10^5\n1 <= low <= high <= 10^5",
            fnName: "rangeSumBST",
            returnType: "int",
            params: [
                { name: "bstElements", type: "vector<int>&" },
                { name: "low", type: "int" },
                { name: "high", type: "int" }
            ],
            rawExamples: [
                [[10, 5, 15, 3, 7, 18], 7, 15],
                [[10, 5, 15, 3, 7, 13, 18, 1, 6], 6, 10]
            ],
            solver: (bstElements, low, high) => {
                return bstElements.filter(x => x >= low && x <= high).reduce((a, b) => a + b, 0);
            }
        }),

        // 9. Kth Smallest Element in a BST
        createProblem({
            title: "Kth Smallest Element in a BST",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["Tree Traversal", "BST"],
            dataStructures: ["BST", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of all node values in a Binary Search Tree, return the kth smallest value (1-indexed) in the tree.",
            constraints: "1 <= k <= bstElements.length <= 10^4\n0 <= bstElements[i] <= 10^4\nAll the values of bstElements are unique.",
            fnName: "kthSmallest",
            returnType: "int",
            params: [
                { name: "bstElements", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[3, 1, 4, 2], 1],
                [[5, 3, 6, 2, 4, 1], 3]
            ],
            solver: (bstElements, k) => {
                const sorted = [...bstElements].sort((a, b) => a - b);
                return sorted[k - 1];
            }
        }),

        // 10. Convert Sorted Array to Balanced BST Level Order
        createProblem({
            title: "Sorted Array to Balanced BST Root Value",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["Divide and Conquer", "BST"],
            dataStructures: ["BST", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(log n)",
            description: "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree and return the value of the root node.",
            constraints: "1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in a strictly increasing order.",
            fnName: "sortedArrayToBSTRoot",
            returnType: "int",
            params: [{ name: "nums", type: "vector<int>&" }],
            rawExamples: [
                [[-10, -3, 0, 5, 9]],
                [[1, 3]]
            ],
            solver: (nums) => {
                const mid = Math.floor(nums.length / 2);
                return nums[mid];
            }
        }),

        // 11. Count Complete Tree Nodes
        createProblem({
            title: "Count Non-Null Tree Nodes",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["Binary Search", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the array representation of a binary tree where -1 represents empty child slots, return the number of valid non-null nodes in the tree.",
            constraints: "0 <= tree.length <= 5 * 10^4\n-100 <= tree[i] <= 100",
            fnName: "countNodes",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 4, 5, 6]],
                [[]],
                [[1]]
            ],
            solver: (tree) => tree.filter(x => x !== -1).length
        }),

        // 12. Path Sum in Tree Array
        createProblem({
            title: "Path Sum Exists in Tree Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given the array representation of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.",
            constraints: "tree.length <= 1000\n-1000 <= targetSum <= 1000",
            fnName: "hasPathSum",
            returnType: "bool",
            params: [
                { name: "tree", type: "vector<int>&" },
                { name: "targetSum", type: "int" }
            ],
            rawExamples: [
                [[5, 4, 8, 11, -1, 13, 4, 7, 2, -1, -1, -1, 1], 22],
                [[1, 2, 3], 5],
                [[], 0]
            ],
            solver: (tree, targetSum) => {
                if (!tree || tree.length === 0 || tree[0] === -1) return false;
                const dfs = (idx, curSum) => {
                    if (idx >= tree.length || tree[idx] === -1) return false;
                    const val = tree[idx];
                    const left = 2 * idx + 1;
                    const right = 2 * idx + 2;
                    const isLeaf = (left >= tree.length || tree[left] === -1) && (right >= tree.length || tree[right] === -1);
                    if (isLeaf) return curSum + val === targetSum;
                    return dfs(left, curSum + val) || dfs(right, curSum + val);
                };
                return dfs(0, 0);
            }
        }),

        // 13. Lowest Common Ancestor in Parent Array
        createProblem({
            title: "Lowest Common Ancestor in Parent Array",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(h)",
            expectedSpace: "O(h)",
            description: "Given a tree of n nodes where parent[i] denotes the parent of node i (with parent[root] = -1), find the lowest common ancestor of nodes p and q.",
            constraints: "1 <= n <= 10^4\n0 <= p, q < n",
            fnName: "lowestCommonAncestor",
            returnType: "int",
            params: [
                { name: "parent", type: "vector<int>&" },
                { name: "p", type: "int" },
                { name: "q", type: "int" }
            ],
            rawExamples: [
                [[-1, 0, 0, 1, 1, 2, 2], 3, 4],
                [[-1, 0, 0, 1, 1, 2, 2], 3, 5]
            ],
            solver: (parent, p, q) => {
                const ancestors = new Set();
                let cur = p;
                while (cur !== -1) {
                    ancestors.add(cur);
                    cur = parent[cur];
                }
                cur = q;
                while (cur !== -1) {
                    if (ancestors.has(cur)) return cur;
                    cur = parent[cur];
                }
                return -1;
            }
        }),

        // 14. Binary Tree Right Side View
        createProblem({
            title: "Binary Tree Right Side View Array",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["BFS", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the array representation of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
            constraints: "0 <= tree.length <= 1000",
            fnName: "rightSideView",
            returnType: "vector<int>",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, -1, 5, -1, 4]],
                [[1, -1, 3]],
                [[]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0 || tree[0] === -1) return [];
                const levels = [];
                const dfs = (idx, depth) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    if (depth >= levels.length) levels.push(tree[idx]);
                    else levels[depth] = tree[idx];
                    dfs(2 * idx + 1, depth + 1);
                    dfs(2 * idx + 2, depth + 1);
                };
                dfs(0, 0);
                return levels;
            }
        }),

        // 15. Invert Binary Tree Array
        createProblem({
            title: "Invert Binary Tree Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "Recursion"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the complete binary tree array representation, invert the tree (swap left and right child subtrees recursively) and return the resulting tree array.",
            constraints: "0 <= tree.length <= 100",
            fnName: "invertTree",
            returnType: "vector<int>",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[4, 2, 7, 1, 3, 6, 9]],
                [[2, 1, 3]],
                [[]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0) return [];
                const res = [...tree];
                const invert = (idx) => {
                    if (idx >= tree.length) return;
                    const left = 2 * idx + 1;
                    const right = 2 * idx + 2;
                    if (left < tree.length && right < tree.length) {
                        const tmp = res[left];
                        res[left] = res[right];
                        res[right] = tmp;
                        invert(left);
                        invert(right);
                    }
                };
                invert(0);
                return res;
            }
        }),

        // 16. Sum of Left Leaves
        createProblem({
            title: "Sum of Left Leaves in Tree Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given the array representation of a binary tree, return the sum of all left leaves.",
            constraints: "tree.length <= 1000",
            fnName: "sumOfLeftLeaves",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[3, 9, 20, -1, -1, 15, 7]],
                [[1]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0) return 0;
                let sum = 0;
                const dfs = (idx, isLeft) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    const left = 2 * idx + 1;
                    const right = 2 * idx + 2;
                    const isLeaf = (left >= tree.length || tree[left] === -1) && (right >= tree.length || tree[right] === -1);
                    if (isLeaf && isLeft) sum += tree[idx];
                    dfs(left, true);
                    dfs(right, false);
                };
                dfs(0, false);
                return sum;
            }
        }),

        // 17. Minimum Absolute Difference in BST
        createProblem({
            title: "Minimum Absolute Difference in BST",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["Tree Traversal", "BST"],
            dataStructures: ["BST", "Array"],
            expectedTime: "O(n log n)",
            expectedSpace: "O(n)",
            description: "Given an array of values of nodes in a Binary Search Tree, return the minimum absolute difference between the values of any two different nodes in the tree.",
            constraints: "2 <= bstElements.length <= 10^4\n0 <= bstElements[i] <= 10^5",
            fnName: "getMinimumDifference",
            returnType: "int",
            params: [{ name: "bstElements", type: "vector<int>&" }],
            rawExamples: [
                [[4, 2, 6, 1, 3]],
                [[1, 0, 48, 12, 49]]
            ],
            solver: (bstElements) => {
                const sorted = [...bstElements].sort((a, b) => a - b);
                let minDiff = Infinity;
                for (let i = 1; i < sorted.length; i++) {
                    minDiff = Math.min(minDiff, sorted[i] - sorted[i - 1]);
                }
                return minDiff;
            }
        }),

        // 18. Find Mode in Binary Search Tree
        createProblem({
            title: "Find Mode Values in BST Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["Tree Traversal", "Hashing"],
            dataStructures: ["BST", "Array", "Hash Map"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of node values from a Binary Search Tree (with duplicates permitted), return all the mode(s) (i.e. the most frequently occurred element) in it sorted in ascending order.",
            constraints: "1 <= bstElements.length <= 10^4",
            fnName: "findMode",
            returnType: "vector<int>",
            params: [{ name: "bstElements", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 2]],
                [[0]]
            ],
            solver: (bstElements) => {
                const freq = {};
                for (const x of bstElements) freq[x] = (freq[x] || 0) + 1;
                const maxF = Math.max(...Object.values(freq));
                return Object.keys(freq).filter(k => freq[k] === maxF).map(Number).sort((a, b) => a - b);
            }
        }),

        // 19. Two Sum IV - Input BST Keys
        createProblem({
            title: "Find Pair With Target Sum in BST Keys",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["Two Pointers", "Hashing"],
            dataStructures: ["BST", "Hash Set"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an array of unique node values from a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.",
            constraints: "1 <= bstElements.length <= 10^4\n-10^4 <= bstElements[i], k <= 10^4",
            fnName: "findTarget",
            returnType: "bool",
            params: [
                { name: "bstElements", type: "vector<int>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[5, 3, 6, 2, 4, 7], 9],
                [[5, 3, 6, 2, 4, 7], 28]
            ],
            solver: (bstElements, k) => {
                const set = new Set();
                for (const x of bstElements) {
                    if (set.has(k - x)) return true;
                    set.add(x);
                }
                return false;
            }
        }),

        // 20. Univalued Binary Tree
        createProblem({
            title: "Univalued Binary Tree Check",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "A binary tree is uni-valued if every node in the tree has the same value. Given the array representation of a binary tree, return true if and only if the given tree is uni-valued.",
            constraints: "1 <= tree.length <= 100",
            fnName: "isUnivalTree",
            returnType: "bool",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 1, 1, 1, 1, -1, 1]],
                [[2, 2, 2, 5, 2]]
            ],
            solver: (tree) => {
                const valid = tree.filter(x => x !== -1);
                return valid.every(x => x === valid[0]);
            }
        }),

        // 21. Subtree with Maximum Sum
        createProblem({
            title: "Maximum Subtree Sum in Directed Tree",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given n nodes labeled 0 to n-1 with weights given in nodeWeights and edges representing child connections [parent, child], return the maximum sum of any subtree.",
            constraints: "1 <= n <= 10^4\n-10^4 <= nodeWeights[i] <= 10^4\nedges.length == n - 1",
            fnName: "maxSubtreeSum",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "edges", type: "vector<vector<int>>&" },
                { name: "nodeWeights", type: "vector<int>&" }
            ],
            rawExamples: [
                [4, [[0, 1], [0, 2], [1, 3]], [1, -2, 3, 4]],
                [3, [[0, 1], [1, 2]], [-1, -2, -3]]
            ],
            solver: (n, edges, nodeWeights) => {
                const adj = Array.from({ length: n }, () => []);
                for (const [u, v] of edges) adj[u].push(v);
                let maxSum = -Infinity;
                const dfs = (u) => {
                    let sum = nodeWeights[u];
                    for (const v of adj[u]) sum += dfs(v);
                    maxSum = Math.max(maxSum, sum);
                    return sum;
                };
                dfs(0);
                return maxSum;
            }
        }),

        // 22. Construct Tree from Traversals Root Value
        createProblem({
            title: "Construct Tree from Preorder and Inorder Root Value",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["Divide and Conquer", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, return the value of the root node.",
            constraints: "1 <= preorder.length <= 3000\ninorder.length == preorder.length\npreorder and inorder consist of unique values.",
            fnName: "buildTreeRoot",
            returnType: "int",
            params: [
                { name: "preorder", type: "vector<int>&" },
                { name: "inorder", type: "vector<int>&" }
            ],
            rawExamples: [
                [[3, 9, 20, 15, 7], [9, 3, 15, 20, 7]],
                [[-1], [-1]]
            ],
            solver: (preorder) => preorder[0]
        }),

        // 23. Closest Binary Search Tree Value
        createProblem({
            title: "Closest Value in BST Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["Binary Search", "BST"],
            dataStructures: ["BST", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given an array of values in a binary search tree and a target double value, return the value in the BST that is closest to the target. If there are multiple answers, return the smaller one.",
            constraints: "1 <= bstElements.length <= 10^4\n0 <= bstElements[i] <= 10^9\n-10^9 <= target <= 10^9",
            fnName: "closestValue",
            returnType: "int",
            params: [
                { name: "bstElements", type: "vector<int>&" },
                { name: "target", type: "double" }
            ],
            rawExamples: [
                [[4, 2, 5, 1, 3], 3.714286],
                [[1], 4.428571]
            ],
            solver: (bstElements, target) => {
                let closest = bstElements[0];
                for (const x of bstElements) {
                    if (Math.abs(x - target) < Math.abs(closest - target) || (Math.abs(x - target) === Math.abs(closest - target) && x < closest)) {
                        closest = x;
                    }
                }
                return closest;
            }
        }),

        // 24. Binary Tree Zigzag Level Counts
        createProblem({
            title: "Binary Tree Level Sizes",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["BFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the array representation of a binary tree, return the number of nodes at each level from root to bottom.",
            constraints: "0 <= tree.length <= 1000",
            fnName: "treeLevelSizes",
            returnType: "vector<int>",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[3, 9, 20, -1, -1, 15, 7]],
                [[1]],
                [[]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0 || tree[0] === -1) return [];
                const counts = [];
                const dfs = (idx, depth) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    if (depth >= counts.length) counts.push(0);
                    counts[depth]++;
                    dfs(2 * idx + 1, depth + 1);
                    dfs(2 * idx + 2, depth + 1);
                };
                dfs(0, 0);
                return counts;
            }
        }),

        // 25. Maximum Value in Tree Array
        createProblem({
            title: "Maximum Value at Each Tree Level",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["BFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the array representation of a binary tree, return an array of the largest value in each row of the tree.",
            constraints: "0 <= tree.length <= 10^4\n-2^31 <= tree[i] <= 2^31 - 1",
            fnName: "largestValues",
            returnType: "vector<int>",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 3, 2, 5, 3, -1, 9]],
                [[1, 2, 3]]
            ],
            solver: (tree) => {
                if (!tree || tree.length === 0 || tree[0] === -1) return [];
                const maxes = [];
                const dfs = (idx, depth) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    if (depth >= maxes.length) maxes.push(tree[idx]);
                    else maxes[depth] = Math.max(maxes[depth], tree[idx]);
                    dfs(2 * idx + 1, depth + 1);
                    dfs(2 * idx + 2, depth + 1);
                };
                dfs(0, 0);
                return maxes;
            }
        }),

        // 26. Deepest Leaves Sum
        createProblem({
            title: "Deepest Leaves Sum in Tree Array",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given the array representation of a binary tree, return the sum of values of its deepest leaves.",
            constraints: "1 <= tree.length <= 10^4",
            fnName: "deepestLeavesSum",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 4, 5, -1, 6, 7, -1, -1, -1, -1, -1, -1, 8]],
                [[6, 7, 8, 2, 7, 1, 3, 9, -1, 1, 4, -1, -1, -1, 5]]
            ],
            solver: (tree) => {
                let maxDepth = 0, sum = 0;
                const dfs = (idx, depth) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    if (depth > maxDepth) {
                        maxDepth = depth;
                        sum = tree[idx];
                    } else if (depth === maxDepth) {
                        sum += tree[idx];
                    }
                    dfs(2 * idx + 1, depth + 1);
                    dfs(2 * idx + 2, depth + 1);
                };
                dfs(0, 0);
                return sum;
            }
        }),

        // 27. Count Good Nodes in Binary Tree
        createProblem({
            title: "Count Good Nodes in Tree Array",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given a binary tree array, a node X in the tree is named good if in the path from the root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree.",
            constraints: "1 <= tree.length <= 10^4\n-10^4 <= tree[i] <= 10^4",
            fnName: "goodNodes",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[3, 1, 4, 3, -1, 1, 5]],
                [[3, 3, -1, 4, 2]]
            ],
            solver: (tree) => {
                let count = 0;
                const dfs = (idx, maxVal) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    if (tree[idx] >= maxVal) count++;
                    const newMax = Math.max(maxVal, tree[idx]);
                    dfs(2 * idx + 1, newMax);
                    dfs(2 * idx + 2, newMax);
                };
                dfs(0, -Infinity);
                return count;
            }
        }),

        // 28. Leaf-Similar Trees
        createProblem({
            title: "Leaf-Similar Trees Check",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n1 + n2)",
            expectedSpace: "O(h1 + h2)",
            description: "Two binary trees are leaf-similar if their leaf value sequences are the same. Given array representations of two trees, return true if and only if they are leaf-similar.",
            constraints: "1 <= tree1.length, tree2.length <= 1000",
            fnName: "leafSimilar",
            returnType: "bool",
            params: [
                { name: "tree1", type: "vector<int>&" },
                { name: "tree2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[3, 5, 1, 6, 2, 9, 8, -1, -1, 7, 4], [3, 5, 1, 6, 7, 4, 2, -1, -1, -1, -1, -1, -1, 9, 8]],
                [[1, 2, 3], [1, 3, 2]]
            ],
            solver: (tree1, tree2) => {
                const getLeaves = (tree) => {
                    const leaves = [];
                    const dfs = (idx) => {
                        if (idx >= tree.length || tree[idx] === -1) return;
                        const l = 2 * idx + 1, r = 2 * idx + 2;
                        const isLeaf = (l >= tree.length || tree[l] === -1) && (r >= tree.length || tree[r] === -1);
                        if (isLeaf) leaves.push(tree[idx]);
                        dfs(l); dfs(r);
                    };
                    dfs(0);
                    return leaves;
                };
                const l1 = getLeaves(tree1);
                const l2 = getLeaves(tree2);
                return l1.length === l2.length && l1.every((v, i) => v === l2[i]);
            }
        }),

        // 29. Sum Root to Leaf Binary Numbers
        createProblem({
            title: "Sum Root to Leaf Binary Numbers",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "Bit Manipulation"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "You are given the array representation of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number. Return the sum of these numbers.",
            constraints: "1 <= tree.length <= 1000\ntree[i] is 0, 1, or -1.",
            fnName: "sumRootToLeaf",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 0, 1, 0, 1, 0, 1]],
                [[0]]
            ],
            solver: (tree) => {
                let total = 0;
                const dfs = (idx, cur) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    cur = (cur << 1) | tree[idx];
                    const l = 2 * idx + 1, r = 2 * idx + 2;
                    const isLeaf = (l >= tree.length || tree[l] === -1) && (r >= tree.length || tree[r] === -1);
                    if (isLeaf) total += cur;
                    dfs(l, cur); dfs(r, cur);
                };
                dfs(0, 0);
                return total;
            }
        }),

        // 30. Maximum Difference Between Node and Ancestor
        createProblem({
            title: "Max Difference Between Node and Ancestor",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given the array representation of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.",
            constraints: "2 <= tree.length <= 5000\n0 <= tree[i] <= 10^5",
            fnName: "maxAncestorDiff",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[8, 3, 10, 1, 6, -1, 14, -1, -1, 4, 7, -1, -1, 13]],
                [[1, -1, 2, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, 3]]
            ],
            solver: (tree) => {
                let maxDiff = 0;
                const dfs = (idx, minVal, maxVal) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    const val = tree[idx];
                    maxDiff = Math.max(maxDiff, Math.abs(val - minVal), Math.abs(val - maxVal));
                    const newMin = Math.min(minVal, val);
                    const newMax = Math.max(maxVal, val);
                    dfs(2 * idx + 1, newMin, newMax);
                    dfs(2 * idx + 2, newMin, newMax);
                };
                if (tree.length > 0 && tree[0] !== -1) {
                    dfs(0, tree[0], tree[0]);
                }
                return maxDiff;
            }
        }),

        // 31. Cousin Nodes in Tree Check
        createProblem({
            title: "Cousin Nodes Check in Tree Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["BFS", "DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Two nodes of a binary tree are cousins if they have the same depth with different parents. Given tree array and values x and y, return true if they are cousins.",
            constraints: "2 <= tree.length <= 100",
            fnName: "isCousins",
            returnType: "bool",
            params: [
                { name: "tree", type: "vector<int>&" },
                { name: "x", type: "int" },
                { name: "y", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4], 4, 3],
                [[1, 2, 3, -1, 4, -1, 5], 5, 4],
                [[1, 2, 3, -1, 4], 2, 3]
            ],
            solver: (tree, x, y) => {
                let xDepth = -1, yDepth = -1, xParent = -1, yParent = -1;
                const dfs = (idx, depth, parent) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    if (tree[idx] === x) { xDepth = depth; xParent = parent; }
                    if (tree[idx] === y) { yDepth = depth; yParent = parent; }
                    dfs(2 * idx + 1, depth + 1, tree[idx]);
                    dfs(2 * idx + 2, depth + 1, tree[idx]);
                };
                dfs(0, 0, -1);
                return xDepth === yDepth && xParent !== yParent;
            }
        }),

        // 32. Second Minimum Node In a Binary Tree
        createProblem({
            title: "Second Minimum Node in Binary Tree Array",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a special binary tree where each node has either 0 or 2 children and node.val = min(left.val, right.val), return the second minimum value in the tree. If no second minimum exists, return -1.",
            constraints: "1 <= tree.length <= 25",
            fnName: "findSecondMinimumValue",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[2, 2, 5, -1, -1, 5, 7]],
                [[2, 2, 2]]
            ],
            solver: (tree) => {
                const valid = Array.from(new Set(tree.filter(x => x !== -1))).sort((a, b) => a - b);
                return valid.length >= 2 ? valid[1] : -1;
            }
        }),

        // 33. Merge Two Binary Trees Arrays
        createProblem({
            title: "Merge Two Binary Trees Arrays",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["DFS", "Recursion"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(max(n1, n2))",
            expectedSpace: "O(max(n1, n2))",
            description: "You are given two binary tree arrays. Overlap one tree on top of the other: when two nodes overlap, sum their values. Return the merged tree array.",
            constraints: "0 <= tree1.length, tree2.length <= 100",
            fnName: "mergeTrees",
            returnType: "vector<int>",
            params: [
                { name: "tree1", type: "vector<int>&" },
                { name: "tree2", type: "vector<int>&" }
            ],
            rawExamples: [
                [[1, 3, 2, 5], [2, 1, 3, -1, 4, -1, 7]],
                [[1], [1, 2]]
            ],
            solver: (tree1, tree2) => {
                const maxLen = Math.max(tree1.length, tree2.length);
                const res = [];
                for (let i = 0; i < maxLen; i++) {
                    const v1 = (i < tree1.length && tree1[i] !== -1) ? tree1[i] : null;
                    const v2 = (i < tree2.length && tree2[i] !== -1) ? tree2[i] : null;
                    if (v1 === null && v2 === null) res.push(-1);
                    else res.push((v1 || 0) + (v2 || 0));
                }
                while (res.length > 0 && res[res.length - 1] === -1) res.pop();
                return res;
            }
        }),

        // 34. Check If All Leaves Are at Same Level
        createProblem({
            title: "Check If All Leaves Are at Same Level",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["BFS", "DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given a tree array representation, return true if all leaf nodes are located at the exact same depth level, or false otherwise.",
            constraints: "1 <= tree.length <= 1000",
            fnName: "checkLeavesLevel",
            returnType: "bool",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 4, 5, 6, 7]],
                [[1, 2, 3, 4, -1, -1, -1]]
            ],
            solver: (tree) => {
                let leafDepth = -1;
                let ans = true;
                const dfs = (idx, depth) => {
                    if (idx >= tree.length || tree[idx] === -1 || !ans) return;
                    const l = 2 * idx + 1, r = 2 * idx + 2;
                    const isLeaf = (l >= tree.length || tree[l] === -1) && (r >= tree.length || tree[r] === -1);
                    if (isLeaf) {
                        if (leafDepth === -1) leafDepth = depth;
                        else if (leafDepth !== depth) ans = false;
                    }
                    dfs(l, depth + 1);
                    dfs(r, depth + 1);
                };
                dfs(0, 0);
                return ans;
            }
        }),

        // 35. Increasing Order Search Tree (BST Sorted Array)
        createProblem({
            title: "Increasing Order Search Tree Inorder Values",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["BST", "Tree Traversal"],
            dataStructures: ["BST", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the root-level array of a binary search tree, rearrange the tree in in-order so that the leftmost node is now the root of the tree, and every node has no left child and only one right child. Return the node values in order.",
            constraints: "1 <= bstElements.length <= 100",
            fnName: "increasingBST",
            returnType: "vector<int>",
            params: [{ name: "bstElements", type: "vector<int>&" }],
            rawExamples: [
                [[5, 3, 6, 2, 4, -1, 8, 1, -1, -1, -1, 7, 9]],
                [[5, 1, 7]]
            ],
            solver: (bstElements) => {
                return bstElements.filter(x => x !== -1).sort((a, b) => a - b);
            }
        }),

        // 36. Path Sum III Count
        createProblem({
            title: "Count Tree Paths With Target Sum",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["Prefix Sum", "DFS"],
            dataStructures: ["Tree", "Array", "Hash Map"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given the array representation of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum. The path does not need to start or end at the root or a leaf, but it must go downwards.",
            constraints: "tree.length <= 1000\n-10^9 <= targetSum <= 10^9",
            fnName: "pathSum",
            returnType: "int",
            params: [
                { name: "tree", type: "vector<int>&" },
                { name: "targetSum", type: "long long" }
            ],
            rawExamples: [
                [[10, 5, -3, 3, 2, -1, 11, 3, -2, -1, 1], 8],
                [[5, 4, 8, 11, -1, 13, 4, 7, 2, -1, -1, 5, 1], 22]
            ],
            solver: (tree, targetSum) => {
                const map = new Map();
                map.set(0, 1);
                let count = 0;
                const dfs = (idx, cur) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    cur += tree[idx];
                    if (map.has(cur - targetSum)) count += map.get(cur - targetSum);
                    map.set(cur, (map.get(cur) || 0) + 1);
                    dfs(2 * idx + 1, cur);
                    dfs(2 * idx + 2, cur);
                    map.set(cur, map.get(cur) - 1);
                };
                dfs(0, 0);
                return count;
            }
        }),

        // 37. Find Duplicate Subtrees Signatures
        createProblem({
            title: "Find Duplicate Subtree Signatures Count",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS", "Hashing"],
            dataStructures: ["Tree", "Hash Map"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a tree array representation, return the count of distinct duplicate subtree structures that appear more than once in the tree.",
            constraints: "1 <= tree.length <= 1000",
            fnName: "countDuplicateSubtrees",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 2, 3, 4, -1, 2, 4, -1, -1, -1, -1, 4]],
                [[2, 1, 1]],
                [[2, 2, 2, 3, -1, 3, -1]]
            ],
            solver: (tree) => {
                const counts = new Map();
                let dups = 0;
                const serialize = (idx) => {
                    if (idx >= tree.length || tree[idx] === -1) return "#";
                    const key = `${tree[idx]},${serialize(2 * idx + 1)},${serialize(2 * idx + 2)}`;
                    counts.set(key, (counts.get(key) || 0) + 1);
                    if (counts.get(key) === 2) dups++;
                    return key;
                };
                serialize(0);
                return dups;
            }
        }),

        // 38. Maximum Level Sum of a Binary Tree
        createProblem({
            title: "Maximum Level Sum of a Binary Tree",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["BFS", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given the array representation of a binary tree, the level of its root is 1, the level of its children is 2, and so on. Return the smallest level x such that the sum of all the values of nodes at level x is maximal.",
            constraints: "1 <= tree.length <= 10^4\n-10^5 <= tree[i] <= 10^5",
            fnName: "maxLevelSum",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[1, 7, 0, 7, -8, -1, -1]],
                [[989, -1, 10250, -1, -1, 98693, -89388, -1, -1, -1, -1, -1, -1, -1, -32127]]
            ],
            solver: (tree) => {
                const levelSums = [];
                const dfs = (idx, depth) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    if (depth >= levelSums.length) levelSums.push(0);
                    levelSums[depth] += tree[idx];
                    dfs(2 * idx + 1, depth + 1);
                    dfs(2 * idx + 2, depth + 1);
                };
                dfs(0, 0);
                let maxSum = -Infinity, bestLevel = 1;
                for (let i = 0; i < levelSums.length; i++) {
                    if (levelSums[i] > maxSum) {
                        maxSum = levelSums[i];
                        bestLevel = i + 1;
                    }
                }
                return bestLevel;
            }
        }),

        // 39. Sum of Distances in Tree Array Path
        createProblem({
            title: "Tree Path Values Product",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given a tree array, return the maximum product of any root-to-leaf path containing only non-negative integers.",
            constraints: "1 <= tree.length <= 100",
            fnName: "maxPathProduct",
            returnType: "long long",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[2, 3, 4, 5, 2]],
                [[1, 2, 3]]
            ],
            solver: (tree) => {
                let maxProd = 0;
                const dfs = (idx, prod) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    prod *= tree[idx];
                    const l = 2 * idx + 1, r = 2 * idx + 2;
                    const isLeaf = (l >= tree.length || tree[l] === -1) && (r >= tree.length || tree[r] === -1);
                    if (isLeaf) maxProd = Math.max(maxProd, prod);
                    dfs(l, prod); dfs(r, prod);
                };
                dfs(0, 1);
                return maxProd;
            }
        }),

        // 40. Minimum Time to Collect All Apples in a Tree
        createProblem({
            title: "Min Time to Collect All Apples in a Tree",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS"],
            dataStructures: ["Tree", "Graph"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices given by hasApple array. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting and ending at vertex 0.",
            constraints: "1 <= n <= 10^5\nedges.length == n - 1\nhasApple.length == n",
            fnName: "minTime",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "edges", type: "vector<vector<int>>&" },
                { name: "hasApple", type: "vector<int>&" } // 1 for true, 0 for false
            ],
            rawExamples: [
                [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [0, 0, 1, 0, 1, 1, 0]],
                [7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [0, 0, 1, 0, 1, 0, 0]]
            ],
            solver: (n, edges, hasApple) => {
                const adj = Array.from({ length: n }, () => []);
                for (const [u, v] of edges) {
                    adj[u].push(v);
                    adj[v].push(u);
                }
                const dfs = (node, parent) => {
                    let totalTime = 0;
                    for (const child of adj[node]) {
                        if (child === parent) continue;
                        const childTime = dfs(child, node);
                        if (childTime > 0 || hasApple[child] === 1) {
                            totalTime += childTime + 2;
                        }
                    }
                    return totalTime;
                };
                return dfs(0, -1);
            }
        }),

        // 41. Longest Path with Different Adjacent Characters
        createProblem({
            title: "Longest Path With Different Adjacent Characters",
            topic: "Trees & BST",
            difficulty: "Hard",
            patterns: ["DFS", "Dynamic Programming"],
            dataStructures: ["Tree", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given a tree with n nodes labeled from 0 to n - 1 rooted at node 0, given by parent array. You are also given a string s of length n. Return the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them.",
            constraints: "n == parent.length == s.length\n1 <= n <= 10^5\nparent[0] == -1\ns consists of lowercase English letters.",
            fnName: "longestPath",
            returnType: "int",
            params: [
                { name: "parent", type: "vector<int>&" },
                { name: "s", type: "string" }
            ],
            rawExamples: [
                [[-1, 0, 0, 1, 1, 2], "abacbe"],
                [[-1, 0, 0, 0], "aabc"]
            ],
            solver: (parent, s) => {
                const n = parent.length;
                const children = Array.from({ length: n }, () => []);
                for (let i = 1; i < n; i++) children[parent[i]].push(i);
                let maxLen = 1;
                const dfs = (u) => {
                    let longest = 0, secondLongest = 0;
                    for (const v of children[u]) {
                        const len = dfs(v);
                        if (s[u] !== s[v]) {
                            if (len > longest) {
                                secondLongest = longest;
                                longest = len;
                            } else if (len > secondLongest) {
                                secondLongest = len;
                            }
                        }
                    }
                    maxLen = Math.max(maxLen, longest + secondLongest + 1);
                    return longest + 1;
                };
                dfs(0);
                return maxLen;
            }
        }),

        // 42. Smallest String Starting From Leaf
        createProblem({
            title: "Smallest String Starting From Leaf",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS"],
            dataStructures: ["Tree", "String"],
            expectedTime: "O(n * h)",
            expectedSpace: "O(h)",
            description: "You are given the array representation of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'. Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.",
            constraints: "1 <= tree.length <= 1000",
            fnName: "smallestFromLeaf",
            returnType: "string",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[0, 1, 2, 3, 4, 3, 4]],
                [[25, 1, 3, 1, 3, 0, 2]]
            ],
            solver: (tree) => {
                let smallest = "~";
                const dfs = (idx, path) => {
                    if (idx >= tree.length || tree[idx] === -1) return;
                    const char = String.fromCharCode(97 + tree[idx]);
                    const cur = char + path;
                    const l = 2 * idx + 1, r = 2 * idx + 2;
                    const isLeaf = (l >= tree.length || tree[l] === -1) && (r >= tree.length || tree[r] === -1);
                    if (isLeaf) {
                        if (cur < smallest) smallest = cur;
                    }
                    dfs(l, cur); dfs(r, cur);
                };
                dfs(0, "");
                return smallest;
            }
        }),

        // 43. Maximum Difference Between Node and Any Descendant
        createProblem({
            title: "Max Difference Value in Tree",
            topic: "Trees & BST",
            difficulty: "Easy",
            patterns: ["Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a tree array, return the difference between the maximum node value and minimum node value in the entire tree.",
            constraints: "2 <= tree.length <= 1000",
            fnName: "treeValueRange",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[10, 2, 15, 1, 8]],
                [[5, 5, 5]]
            ],
            solver: (tree) => {
                const valid = tree.filter(x => x !== -1);
                return Math.max(...valid) - Math.min(...valid);
            }
        }),

        // 44. Count Nodes Equal to Average of Subtree
        createProblem({
            title: "Count Nodes Equal to Average of Subtree",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["DFS", "Tree Traversal"],
            dataStructures: ["Tree", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(h)",
            description: "Given the array representation of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree (rounded down to the nearest integer).",
            constraints: "1 <= tree.length <= 1000\n0 <= tree[i] <= 1000",
            fnName: "averageOfSubtree",
            returnType: "int",
            params: [{ name: "tree", type: "vector<int>&" }],
            rawExamples: [
                [[4, 8, 5, 0, 1, -1, 6]],
                [[1]]
            ],
            solver: (tree) => {
                let ans = 0;
                const dfs = (idx) => {
                    if (idx >= tree.length || tree[idx] === -1) return [0, 0];
                    const [lSum, lCnt] = dfs(2 * idx + 1);
                    const [rSum, rCnt] = dfs(2 * idx + 2);
                    const sum = lSum + rSum + tree[idx];
                    const count = lCnt + rCnt + 1;
                    if (Math.floor(sum / count) === tree[idx]) ans++;
                    return [sum, count];
                };
                dfs(0);
                return ans;
            }
        }),

        // 45. Find Distance Between Two Nodes in BST Array
        createProblem({
            title: "Distance Between Two Nodes in BST Keys",
            topic: "Trees & BST",
            difficulty: "Medium",
            patterns: ["BST", "Two Pointers"],
            dataStructures: ["BST", "Array"],
            expectedTime: "O(h)",
            expectedSpace: "O(1)",
            description: "Given a sorted array of BST keys and two values p and q present in the BST, return the shortest path distance (number of edges) between node p and node q in the BST.",
            constraints: "2 <= bstElements.length <= 10^4\np and q exist in bstElements.",
            fnName: "distanceInBST",
            returnType: "int",
            params: [
                { name: "bstElements", type: "vector<int>&" },
                { name: "p", type: "int" },
                { name: "q", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5, 6, 7], 1, 7],
                [[2, 5, 8], 2, 8]
            ],
            solver: (bstElements, p, q) => {
                const idxP = bstElements.indexOf(p);
                const idxQ = bstElements.indexOf(q);
                return Math.abs(idxP - idxQ);
            }
        })
    ];
}
