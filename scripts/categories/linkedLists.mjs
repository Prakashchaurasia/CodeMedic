import { createProblem } from "../problem_blueprints.mjs";

export function getLinkedListProblems() {
    return [
        // 1. Reverse Linked List
        createProblem({
            title: "Reverse Singly Linked List",
            topic: "Linked Lists",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
            constraints: "The number of nodes in the list is the range [0, 5000].\n-5000 <= Node.val <= 5000",
            fnName: "reverseList",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 2, 3, 4, 5]],
                [[1, 2]],
                [[]]
            ],
            solver: (arr) => arr.slice().reverse()
        }),

        // 2. Middle of the Linked List
        createProblem({
            title: "Middle of the Linked List",
            topic: "Linked Lists",
            difficulty: "Easy",
            patterns: ["Fast and Slow Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
            constraints: "The number of nodes in the list is in the range [1, 100].\n1 <= Node.val <= 100",
            fnName: "middleNode",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 2, 3, 4, 5]],
                [[1, 2, 3, 4, 5, 6]]
            ],
            solver: (arr) => {
                const mid = Math.floor(arr.length / 2);
                return arr.slice(mid);
            }
        }),

        // 3. Merge Two Sorted Lists
        createProblem({
            title: "Merge Two Sorted Linked Lists",
            topic: "Linked Lists",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(1)",
            description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list and return the head of the new merged list.",
            constraints: "The number of nodes in both lists is in the range [0, 50].\n-100 <= Node.val <= 100\nBoth list1 and list2 are sorted in non-decreasing order.",
            fnName: "mergeTwoLists",
            returnType: "ListNode*",
            params: [
                { name: "list1", type: "ListNode*" },
                { name: "list2", type: "ListNode*" }
            ],
            rawExamples: [
                [[1, 2, 4], [1, 3, 4]],
                [[], []],
                [[], [0]]
            ],
            solver: (l1, l2) => [...l1, ...l2].sort((a, b) => a - b)
        }),

        // 4. Remove Nth Node From End of List
        createProblem({
            title: "Remove Nth Node From End of List",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Fast and Slow Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
            constraints: "The number of nodes in the list is sz.\n1 <= sz <= 30\n0 <= Node.val <= 100\n1 <= n <= sz",
            fnName: "removeNthFromEnd",
            returnType: "ListNode*",
            params: [
                { name: "head", type: "ListNode*" },
                { name: "n", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], 2],
                [[1], 1],
                [[1, 2], 1]
            ],
            solver: (arr, n) => {
                const copy = [...arr];
                copy.splice(copy.length - n, 1);
                return copy;
            }
        }),

        // 5. Remove Duplicates from Sorted List
        createProblem({
            title: "Remove Duplicates from Sorted List",
            topic: "Linked Lists",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
            constraints: "The number of nodes in the list is in the range [0, 300].\n-100 <= Node.val <= 100\nThe list is guaranteed to be sorted in ascending order.",
            fnName: "deleteDuplicates",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 1, 2]],
                [[1, 1, 2, 3, 3]]
            ],
            solver: (arr) => Array.from(new Set(arr))
        }),

        // 6. Remove Duplicates from Sorted List II
        createProblem({
            title: "Remove Duplicates from Sorted List II",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.",
            constraints: "The number of nodes in the list is in the range [0, 300].\n-100 <= Node.val <= 100\nThe list is guaranteed to be sorted in ascending order.",
            fnName: "deleteDuplicatesII",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 2, 3, 3, 4, 4, 5]],
                [[1, 1, 1, 2, 3]]
            ],
            solver: (arr) => {
                const freq = {};
                for (const x of arr) freq[x] = (freq[x] || 0) + 1;
                return arr.filter(x => freq[x] === 1);
            }
        }),

        // 7. Palindrome Linked List
        createProblem({
            title: "Palindrome Linked List",
            topic: "Linked Lists",
            difficulty: "Easy",
            patterns: ["Fast and Slow Pointers", "Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
            constraints: "The number of nodes in the list is in the range [1, 10^5].\n0 <= Node.val <= 9",
            fnName: "isPalindrome",
            returnType: "bool",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 2, 2, 1]],
                [[1, 2]]
            ],
            solver: (arr) => {
                const rev = [...arr].reverse();
                return arr.every((v, i) => v === rev[i]);
            }
        }),

        // 8. Odd Even Linked List
        createProblem({
            title: "Odd Even Linked List",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list. (The 1st node is odd, 2nd node is even, etc.)",
            constraints: "The number of nodes in the linked list is in the range [0, 10^4].\n-10^6 <= Node.val <= 10^6",
            fnName: "oddEvenList",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 2, 3, 4, 5]],
                [[2, 1, 3, 5, 6, 4, 7]]
            ],
            solver: (arr) => {
                const odds = arr.filter((_, i) => i % 2 === 0);
                const evens = arr.filter((_, i) => i % 2 === 1);
                return [...odds, ...evens];
            }
        }),

        // 9. Add Two Numbers
        createProblem({
            title: "Add Two Numbers Represented by Linked Lists",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Simulation"],
            dataStructures: ["Linked List"],
            expectedTime: "O(max(n, m))",
            expectedSpace: "O(max(n, m))",
            description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
            constraints: "The number of nodes in each linked list is in the range [1, 100].\n0 <= Node.val <= 9\nIt is guaranteed that the list represents a number that does not have leading zeros.",
            fnName: "addTwoNumbers",
            returnType: "ListNode*",
            params: [
                { name: "l1", type: "ListNode*" },
                { name: "l2", type: "ListNode*" }
            ],
            rawExamples: [
                [[2, 4, 3], [5, 6, 4]],
                [[0], [0]],
                [[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]]
            ],
            solver: (l1, l2) => {
                let carry = 0, i = 0, j = 0;
                const res = [];
                while (i < l1.length || j < l2.length || carry) {
                    let sum = carry;
                    if (i < l1.length) sum += l1[i++];
                    if (j < l2.length) sum += l2[j++];
                    res.push(sum % 10);
                    carry = Math.floor(sum / 10);
                }
                return res;
            }
        }),

        // 10. Swap Nodes in Pairs
        createProblem({
            title: "Swap Nodes in Pairs",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Recursion", "Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)",
            constraints: "The number of nodes in the list is in the range [0, 100].\n0 <= Node.val <= 100",
            fnName: "swapPairs",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 2, 3, 4]],
                [[]],
                [[1]]
            ],
            solver: (arr) => {
                const copy = [...arr];
                for (let i = 0; i < copy.length - 1; i += 2) {
                    const tmp = copy[i];
                    copy[i] = copy[i + 1];
                    copy[i + 1] = tmp;
                }
                return copy;
            }
        }),

        // 11. Rotate List by K
        createProblem({
            title: "Rotate Linked List by K",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a linked list, rotate the list to the right by k places.",
            constraints: "The number of nodes in the list is in the range [0, 500].\n-100 <= Node.val <= 100\n0 <= k <= 2 * 10^9",
            fnName: "rotateRight",
            returnType: "ListNode*",
            params: [
                { name: "head", type: "ListNode*" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], 2],
                [[0, 1, 2], 4]
            ],
            solver: (arr, k) => {
                if (arr.length === 0) return [];
                const shift = k % arr.length;
                if (shift === 0) return arr;
                return [...arr.slice(arr.length - shift), ...arr.slice(0, arr.length - shift)];
            }
        }),

        // 12. Partition List around X
        createProblem({
            title: "Partition List Around Value X",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x while preserving relative order.",
            constraints: "The number of nodes in the list is in the range [0, 200].\n-100 <= Node.val <= 100\n-200 <= x <= 200",
            fnName: "partition",
            returnType: "ListNode*",
            params: [
                { name: "head", type: "ListNode*" },
                { name: "x", type: "int" }
            ],
            rawExamples: [
                [[1, 4, 3, 2, 5, 2], 3],
                [[2, 1], 2]
            ],
            solver: (arr, x) => {
                const less = arr.filter(v => v < x);
                const greater = arr.filter(v => v >= x);
                return [...less, ...greater];
            }
        }),

        // 13. Convert Binary Number in a Linked List to Integer
        createProblem({
            title: "Convert Binary Linked List to Integer",
            topic: "Linked Lists",
            difficulty: "Easy",
            patterns: ["Bit Manipulation"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value of the number in the linked list.",
            constraints: "The Linked List is not empty.\nNumber of nodes will not exceed 30.\nEach node's value is either 0 or 1.",
            fnName: "getDecimalValue",
            returnType: "int",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 0, 1]],
                [[0]]
            ],
            solver: (arr) => parseInt(arr.join(""), 2)
        }),

        // 14. Delete the Middle Node of a Linked List
        createProblem({
            title: "Delete the Middle Node of a Linked List",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Fast and Slow Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.",
            constraints: "The number of nodes in the list is in the range [1, 10^5].\n1 <= Node.val <= 10^5",
            fnName: "deleteMiddle",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 3, 4, 7, 1, 2, 6]],
                [[1, 2, 3, 4]],
                [[2, 1]]
            ],
            solver: (arr) => {
                if (arr.length <= 1) return [];
                const mid = Math.floor(arr.length / 2);
                const copy = [...arr];
                copy.splice(mid, 1);
                return copy;
            }
        }),

        // 15. Maximum Twin Sum of a Linked List
        createProblem({
            title: "Maximum Twin Sum of a Linked List",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Fast and Slow Pointers", "Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node. The twin sum is the sum of a node and its twin. Return the maximum twin sum of the linked list.",
            constraints: "The number of nodes in the list is an even integer in the range [2, 10^5].\n1 <= Node.val <= 10^5",
            fnName: "pairSum",
            returnType: "int",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[5, 4, 2, 1]],
                [[4, 2, 2, 3]],
                [[1, 100000]]
            ],
            solver: (arr) => {
                const n = arr.length;
                let maxSum = 0;
                for (let i = 0; i < n / 2; i++) {
                    maxSum = Math.max(maxSum, arr[i] + arr[n - 1 - i]);
                }
                return maxSum;
            }
        }),

        // 16. Merge Nodes in Between Zeros
        createProblem({
            title: "Merge Nodes in Between Zeros",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0. For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. Return the modified list without 0's.",
            constraints: "The number of nodes in the list is in the range [3, 2 * 10^5].\n0 <= Node.val <= 1000\nThere are no two consecutive nodes with Node.val == 0.",
            fnName: "mergeNodes",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[0, 3, 1, 0, 4, 5, 2, 0]],
                [[0, 1, 0, 3, 0, 2, 2, 0]]
            ],
            solver: (arr) => {
                const res = [];
                let sum = 0;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] === 0) {
                        res.push(sum);
                        sum = 0;
                    } else {
                        sum += arr[i];
                    }
                }
                return res;
            }
        }),

        // 17. Reorder List
        createProblem({
            title: "Reorder List Interleaved",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Fast and Slow Pointers", "Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given the head of a singly linked-list: L0 -> L1 -> ... -> Ln - 1 -> Ln. Reorder the list to be on the following form: L0 -> Ln -> L1 -> Ln - 1 -> L2 -> Ln - 2 -> ... and return the head.",
            constraints: "The number of nodes in the list is in the range [1, 5 * 10^4].\n1 <= Node.val <= 1000",
            fnName: "reorderList",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 2, 3, 4]],
                [[1, 2, 3, 4, 5]]
            ],
            solver: (arr) => {
                const res = [];
                let l = 0, r = arr.length - 1;
                while (l <= r) {
                    if (l === r) {
                        res.push(arr[l]);
                    } else {
                        res.push(arr[l]);
                        res.push(arr[r]);
                    }
                    l++; r--;
                }
                return res;
            }
        }),

        // 18. Remove Nodes From Linked List
        createProblem({
            title: "Remove Nodes With Greater Value on Right",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Linked List", "Stack"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given the head of a linked list. Remove every node which has a node with a greater value anywhere to the right side of it. Return the head of the modified linked list.",
            constraints: "The number of nodes in the given list is in the range [1, 10^5].\n1 <= Node.val <= 10^5",
            fnName: "removeNodes",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[5, 2, 13, 3, 8]],
                [[1, 1, 1, 1]]
            ],
            solver: (arr) => {
                const stack = [];
                for (const x of arr) {
                    while (stack.length > 0 && stack[stack.length - 1] < x) {
                        stack.pop();
                    }
                    stack.push(x);
                }
                return stack;
            }
        }),

        // 19. Next Greater Node In Linked List
        createProblem({
            title: "Next Greater Node In Linked List",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Monotonic Stack"],
            dataStructures: ["Linked List", "Stack", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given the head of a linked list with n nodes. For each node in the list, find the value of the next greater node. Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If such a node does not exist, answer[i] = 0.",
            constraints: "The number of nodes in the list is n.\n1 <= n <= 10^4\n1 <= Node.val <= 10^9",
            fnName: "nextLargerNodes",
            returnType: "vector<int>",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[2, 1, 5]],
                [[2, 7, 4, 3, 5]]
            ],
            solver: (arr) => {
                const ans = new Array(arr.length).fill(0);
                const stack = []; // indices
                for (let i = 0; i < arr.length; i++) {
                    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
                        ans[stack.pop()] = arr[i];
                    }
                    stack.push(i);
                }
                return ans;
            }
        }),

        // 20. Split Linked List in Parts Lengths
        createProblem({
            title: "Split Linked List in K Parts Sizes",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List", "Array"],
            expectedTime: "O(n + k)",
            expectedSpace: "O(k)",
            description: "Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts. Return the sizes of each of the k parts.",
            constraints: "The number of nodes in the list is in the range [0, 1000].\n0 <= Node.val <= 1000\n1 <= k <= 50",
            fnName: "splitListPartSizes",
            returnType: "vector<int>",
            params: [
                { name: "head", type: "ListNode*" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3], 5],
                [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3]
            ],
            solver: (arr, k) => {
                const n = arr.length;
                const base = Math.floor(n / k);
                let extra = n % k;
                const sizes = [];
                for (let i = 0; i < k; i++) {
                    sizes.push(base + (extra > 0 ? 1 : 0));
                    if (extra > 0) extra--;
                }
                return sizes;
            }
        }),

        // 21. Reverse Linked List II
        createProblem({
            title: "Reverse Linked List Sublist",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list (1-indexed).",
            constraints: "The number of nodes in the list is n.\n1 <= n <= 500\n-500 <= Node.val <= 500\n1 <= left <= right <= n",
            fnName: "reverseBetween",
            returnType: "ListNode*",
            params: [
                { name: "head", type: "ListNode*" },
                { name: "left", type: "int" },
                { name: "right", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], 2, 4],
                [[5], 1, 1]
            ],
            solver: (arr, left, right) => {
                const copy = [...arr];
                const sub = copy.slice(left - 1, right).reverse();
                copy.splice(left - 1, right - left + 1, ...sub);
                return copy;
            }
        }),

        // 22. Swapping Nodes in a Linked List
        createProblem({
            title: "Swap Kth Node from Beginning and End",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given the head of a linked list, and an integer k. Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (1-indexed).",
            constraints: "The number of nodes in the list is n.\n1 <= k <= n <= 10^5\n0 <= Node.val <= 100",
            fnName: "swapNodes",
            returnType: "ListNode*",
            params: [
                { name: "head", type: "ListNode*" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 5], 2],
                [[7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 5]
            ],
            solver: (arr, k) => {
                const copy = [...arr];
                const tmp = copy[k - 1];
                copy[k - 1] = copy[copy.length - k];
                copy[copy.length - k] = tmp;
                return copy;
            }
        }),

        // 23. Double a Number Represented as a Linked List
        createProblem({
            title: "Double a Number Represented as a Linked List",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Simulation"],
            dataStructures: ["Linked List"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes. Return the head of the linked list after doubling it.",
            constraints: "The number of nodes in the list is in the range [1, 10^4]\n0 <= Node.val <= 9",
            fnName: "doubleIt",
            returnType: "ListNode*",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[1, 8, 9]],
                [[9, 9, 9]]
            ],
            solver: (arr) => {
                let carry = 0;
                const rev = [...arr].reverse();
                const res = [];
                for (const d of rev) {
                    const prod = d * 2 + carry;
                    res.push(prod % 10);
                    carry = Math.floor(prod / 10);
                }
                if (carry) res.push(carry);
                return res.reverse();
            }
        }),

        // 24. Delete Nodes From Linked List Present in Array
        createProblem({
            title: "Delete Nodes Present in Exclusion Set",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Hashing"],
            dataStructures: ["Linked List", "Hash Set"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(m)",
            description: "You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.",
            constraints: "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^5\nThe number of nodes in the list is in the range [1, 10^5].",
            fnName: "modifiedList",
            returnType: "ListNode*",
            params: [
                { name: "nums", type: "vector<int>&" },
                { name: "head", type: "ListNode*" }
            ],
            rawExamples: [
                [[1, 2, 3], [1, 2, 3, 4, 5]],
                [[1], [1, 2, 1, 2, 1, 2]],
                [[5], [1, 2, 3, 4]]
            ],
            solver: (nums, head) => {
                const set = new Set(nums);
                return head.filter(v => !set.has(v));
            }
        }),

        // 25. Find the Minimum and Maximum Distance Between Critical Points
        createProblem({
            title: "Nodes Between Critical Points Distances",
            topic: "Linked Lists",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Linked List", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "A critical point in a linked list is defined as either a local maxima or a local minima. Given a linked list, return an array of length 2 containing [minDistance, maxDistance] between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].",
            constraints: "The number of nodes in the list is in the range [2, 10^5].\n1 <= Node.val <= 10^5",
            fnName: "nodesBetweenCriticalPoints",
            returnType: "vector<int>",
            params: [{ name: "head", type: "ListNode*" }],
            rawExamples: [
                [[3, 1]],
                [[5, 3, 1, 2, 5, 1, 2]],
                [[1, 3, 2, 2, 3, 2, 2, 2, 7]]
            ],
            solver: (arr) => {
                const crit = [];
                for (let i = 1; i < arr.length - 1; i++) {
                    if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) || (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
                        crit.push(i);
                    }
                }
                if (crit.length < 2) return [-1, -1];
                let minDist = Infinity;
                for (let i = 1; i < crit.length; i++) {
                    minDist = Math.min(minDist, crit[i] - crit[i - 1]);
                }
                const maxDist = crit[crit.length - 1] - crit[0];
                return [minDist, maxDist];
            }
        })
    ];
}
