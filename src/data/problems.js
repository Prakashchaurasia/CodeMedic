const problems = [
    {
        id: 1,
        title: "Two Sum",
        topic: "Arrays",
        difficulty: "Easy",
        status: "Solved",
        description:
            "Find two numbers that add up to a target value.",

        dataStructures: ["Hash Map"],
        patterns: ["Hashing"],
        expectedTime: "O(n)",
        expectedSpace: "O(n)"
    },

    {
        id: 2,
        title: "Best Time to Buy and Sell Stock",
        topic: "Arrays",
        difficulty: "Easy",
        status: "Not Solved",
        description:
            "Find the maximum profit from buying and selling a stock.",

        dataStructures: ["Array"],
        patterns: ["Greedy"],
        expectedTime: "O(n)",
        expectedSpace: "O(1)"
    },

    {
        id: 3,
        title: "Reverse Linked List",
        topic: "Linked List",
        difficulty: "Easy",
        status: "Solved",
        description:
            "Reverse the nodes of a singly linked list.",

        dataStructures: ["Linked List"],
        patterns: ["Recursion"],
        expectedTime: "O(n)",
        expectedSpace: "O(1)"
    },

    {
        id: 4,
        title: "Fibonacci Number",
        topic: "Recursion",
        difficulty: "Easy",
        status: "Not Solved",
        description:
            "Calculate the Fibonacci number for a given position.",

        dataStructures: [],
        patterns: ["Dynamic Programming"],
        expectedTime: "O(n)",
        expectedSpace: "O(n)"
    },

    {
        id: 5,
        title: "Climbing Stairs",
        topic: "Dynamic Programming",
        difficulty: "Medium",
        status: "Not Solved",
        description:
            "Find the number of distinct ways to climb stairs.",

        dataStructures: ["Array"],
        patterns: ["Dynamic Programming"],
        expectedTime: "O(n)",
        expectedSpace: "O(n)"
    },

    {
        id: 6,
        title: "Binary Tree Inorder Traversal",
        topic: "Trees",
        difficulty: "Medium",
        status: "Not Solved",
        description:
            "Return the inorder traversal of a binary tree.",

        dataStructures: ["Tree"],
        patterns: ["DFS"],
        expectedTime: "O(n)",
        expectedSpace: "O(n)"
    }
];

export default problems;