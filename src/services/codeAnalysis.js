function detectDataStructures(code) {
    const dataStructures = [];

    if (
        code.includes("vector<") ||
        code.includes("vector <")
    ) {
        dataStructures.push("Array");
    }

    if (
        code.includes("unordered_map") ||
        code.includes("map<") ||
        code.includes("map <")
    ) {
        dataStructures.push("Hash Map");
    }

    if (
        code.includes("unordered_set") ||
        code.includes("set<") ||
        code.includes("set <")
    ) {
        dataStructures.push("Hash Set");
    }

    if (
        code.includes("stack<") ||
        code.includes("stack <")
    ) {
        dataStructures.push("Stack");
    }

    if (
        code.includes("queue<") ||
        code.includes("queue <")
    ) {
        dataStructures.push("Queue");
    }

    if (
        code.includes("list<") ||
        code.includes("list <")
    ) {
        dataStructures.push("Linked List");
    }

    if (
        code.includes("priority_queue") ||
        code.includes("priority_queue <")
    ) {
        dataStructures.push("Heap");
    }

    if (
        code.includes("unordered_map") ||
        code.includes("unordered_set")
    ) {
        // Already detected above.
    }

    if (code.includes("TreeNode")) {
        dataStructures.push("Tree");
    }

    if (
        code.includes("graph") ||
        code.includes("Graph")
    ) {
        dataStructures.push("Graph");
    }

    if (dataStructures.length === 0) {
        dataStructures.push("Array");
    }

    return [...new Set(dataStructures)];
}


function detectNestedLoops(code) {
    const forLoops = code.match(/for\s*\(/g) || [];
    const whileLoops = code.match(/while\s*\(/g) || [];

    const totalLoops = forLoops.length + whileLoops.length;

    return totalLoops >= 2;
}


function detectRecursion(code) {
    const functionMatches = code.match(
        /\b[a-zA-Z_][a-zA-Z0-9_]*\s*\([^;]*\)\s*\{/g
    ) || [];

    for (const functionMatch of functionMatches) {
        const functionNameMatch =
            functionMatch.match(
                /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/
            );

        if (!functionNameMatch) {
            continue;
        }

        const functionName = functionNameMatch[1];

        const functionPattern = new RegExp(
            `\\b${functionName}\\s*\\(`
        );

        const occurrences =
            code.match(functionPattern) || [];

        if (occurrences.length > 1) {
            return true;
        }
    }

    return false;
}


function detectPatterns(code, dataStructures) {
    const patterns = [];

    const hasNestedLoops = detectNestedLoops(code);
    const hasRecursion = detectRecursion(code);

    if (hasNestedLoops) {
        patterns.push("Brute Force");
    }

    if (
        code.includes("unordered_map") ||
        code.includes("unordered_set") ||
        dataStructures.includes("Hash Map") ||
        dataStructures.includes("Hash Set")
    ) {
        patterns.push("Hashing");
    }

    if (hasRecursion) {
        patterns.push("Recursion");
    }

    if (
        code.includes("left") &&
        code.includes("right") &&
        code.includes("while")
    ) {
        patterns.push("Two Pointer");
    }

    if (
        code.includes("low") &&
        code.includes("high") &&
        code.includes("mid")
    ) {
        patterns.push("Binary Search");
    }

    if (patterns.length === 0) {
        patterns.push("Brute Force");
    }

    return [...new Set(patterns)];
}


function detectComplexity(code) {
    const hasNestedLoops = detectNestedLoops(code);

    const hasLoop =
        code.includes("for(") ||
        code.includes("for (") ||
        code.includes("while(") ||
        code.includes("while (");

    const usesHashMap =
        code.includes("unordered_map") ||
        code.includes("map<") ||
        code.includes("map <");

    const usesHashSet =
        code.includes("unordered_set") ||
        code.includes("set<") ||
        code.includes("set <");

    const usesStack =
        code.includes("stack<") ||
        code.includes("stack <");

    const usesQueue =
        code.includes("queue<") ||
        code.includes("queue <");

    const usesHeap =
        code.includes("priority_queue");

    let time = "O(1)";

    if (hasNestedLoops) {
        time = "O(n²)";
    } else if (hasLoop) {
        time = "O(n)";
    }

    let space = "O(1)";

    if (
        usesHashMap ||
        usesHashSet ||
        usesStack ||
        usesQueue ||
        usesHeap
    ) {
        space = "O(n)";
    }

    return {
        time,
        space
    };
}


function detectBruteForce(patterns) {
    return patterns.includes("Brute Force");
}


function compareThinkingWithImplementation(
    thinking,
    actualDataStructures,
    actualPatterns,
    actualComplexity
) {
    const thinkingDataStructures =
        thinking?.dataStructures || [];

    const thinkingPatterns =
        thinking?.patterns || [];

    const thinkingComplexity =
        thinking?.complexity || "";

    const dataStructureMatch =
        thinkingDataStructures.some((structure) =>
            actualDataStructures.includes(structure)
        );

    const patternMatch =
        thinkingPatterns.some((pattern) =>
            actualPatterns.includes(pattern)
        );

    const complexityMatch =
        thinkingComplexity === actualComplexity.time;

    if (
        dataStructureMatch &&
        patternMatch &&
        complexityMatch
    ) {
        return "Your implementation closely matches your planned approach.";
    }

    if (
        dataStructureMatch &&
        !patternMatch
    ) {
        return "You identified a suitable data structure, but your implementation uses a different algorithmic pattern.";
    }

    if (
        !dataStructureMatch &&
        patternMatch
    ) {
        return "Your algorithmic pattern is similar to your thinking, but the implemented data structure differs.";
    }

    if (!complexityMatch) {
        return "Your implementation has a different complexity than the one you expected.";
    }

    return "There is a difference between your planned approach and your implementation.";
}


export function analyzeSubmittedCode({
    code,
    language,
    problem,
    thinking
}) {
    if (!code || language !== "C++") {
        return {
            correctness: "Unable to Analyze",
            approach: "Unknown",
            bruteForce: false,
            timeComplexity: "Unknown",
            spaceComplexity: "Unknown",
            actualDataStructures: [],
            actualPatterns: [],
            weakness: "Currently basic analysis supports C++.",
            thinkingObservation:
                "CodeMedic currently performs basic C++ code analysis.",
            explanation:
                "Please submit C++ code for the current analyzer.",
            optimization:
                "More language support will be added later.",
            hints: []
        };
    }

    const actualDataStructures =
        detectDataStructures(code);

    const actualPatterns =
        detectPatterns(
            code,
            actualDataStructures
        );

    const complexity =
        detectComplexity(code);

    const bruteForce =
        detectBruteForce(actualPatterns);

    const thinkingObservation =
        compareThinkingWithImplementation(
            thinking,
            actualDataStructures,
            actualPatterns,
            complexity
        );

    let weakness = null;

    if (bruteForce) {
        weakness = "Brute force approach";
    }

    if (
        thinking?.complexity &&
        thinking.complexity !== complexity.time
    ) {
        weakness = "Complexity estimation";
    }

    return {
        correctness: "Needs Verification",

        approach:
            actualPatterns[0] || "Unknown",

        bruteForce,

        timeComplexity:
            complexity.time,

        spaceComplexity:
            complexity.space,

        actualDataStructures,

        actualPatterns,

        weakness,

        thinkingObservation,

        explanation:
            "CodeMedic performed a basic structural analysis of your C++ code. The current analyzer detects common data structures, patterns, and simple loop-based complexity.",

        optimization:
            bruteForce
                ? "Look for a way to reduce repeated work. Consider whether a suitable data structure or algorithmic pattern can make the solution more efficient."
                : "Your current structure does not show an obvious brute-force pattern from the basic analyzer.",

        hints: [
            "Look at the main operation your code performs repeatedly.",
            "Ask whether previously calculated information can be reused.",
            "Think about whether another data structure or algorithmic pattern can reduce unnecessary work."
        ]
    };
}