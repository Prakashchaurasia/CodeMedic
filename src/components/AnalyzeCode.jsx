import { useState } from "react";

function AnalyzeCode({ problem }) {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("C++");

    const [analysis, setAnalysis] = useState(null);

    const [hintIndex, setHintIndex] = useState(-1);

    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const [showExplanation, setShowExplanation] = useState(false);

    const [showOptimization, setShowOptimization] = useState(false);

    const [selectedDataStructures, setSelectedDataStructures] =
        useState([]);

    const [selectedPatterns, setSelectedPatterns] =
        useState([]);

    const [selectedComplexity, setSelectedComplexity] =
        useState("");

    const [thinkingSubmitted, setThinkingSubmitted] =
        useState(false);


    const dataStructures = [
        "Array",
        "String",
        "Hash Map",
        "Hash Set",
        "Stack",
        "Queue",
        "Linked List",
        "Tree",
        "Heap",
        "Graph"
    ];


    const patterns = [
        "Brute Force",
        "Two Pointer",
        "Sliding Window",
        "Hashing",
        "Binary Search",
        "Prefix Sum",
        "Recursion",
        "Backtracking",
        "Greedy",
        "Dynamic Programming",
        "BFS",
        "DFS"
    ];


    function toggleDataStructure(item) {

        if (selectedDataStructures.includes(item)) {

            setSelectedDataStructures(
                selectedDataStructures.filter(
                    (structure) => structure !== item
                )
            );

        } else {

            setSelectedDataStructures([
                ...selectedDataStructures,
                item
            ]);

        }
    }


    function togglePattern(item) {

        if (selectedPatterns.includes(item)) {

            setSelectedPatterns(
                selectedPatterns.filter(
                    (pattern) => pattern !== item
                )
            );

        } else {

            setSelectedPatterns([
                ...selectedPatterns,
                item
            ]);

        }
    }
    
    function getThinkingResult() {
        if (!problem) {
            return {
                title: "No Problem Selected",
                message: "Select a problem before analyzing your thinking."
            };
        }

        const dataStructureMatch =
            selectedDataStructures.some((structure) =>
                problem.dataStructures?.includes(structure)
            );

        const patternMatch =
            selectedPatterns.some((pattern) =>
                problem.patterns?.includes(pattern)
            );

        const complexityMatch =
            selectedComplexity === problem.expectedTime;

        if (
            dataStructureMatch &&
            patternMatch &&
            complexityMatch
        ) {
            return {
                title: "Strong Match ✓",
                message:
                    "Your initial problem-solving direction matches the expected approach."
            };
        }

        if (!patternMatch) {
            return {
                title: "Pattern Recognition Needs Practice",
                message:
                    "Your selected pattern does not match the pattern CodeMedic expected for this problem."
            };
        }

        if (!dataStructureMatch) {
            return {
                title: "Data Structure Selection Needs Practice",
                message:
                    "Your selected data structure does not match the expected data structure for this problem."
            };
        }

        if (!complexityMatch) {
            return {
                title: "Complexity Estimation Needs Practice",
                message:
                    "Your expected time complexity differs from the expected complexity for this problem."
            };
        }

        return {
            title: "Mixed Result",
            message:
                "Some parts of your initial thinking match, while others need more practice."
        };
    }
    
    function getThinkingResult() {
        if (!problem) {
            return {
                title: "No Problem Selected",
                message:
                    "Select a problem before analyzing your thinking."
            };
        }

        const dataStructureMatch =
            selectedDataStructures.some((structure) =>
                problem.dataStructures?.includes(structure)
            );

        const patternMatch =
            selectedPatterns.some((pattern) =>
                problem.patterns?.includes(pattern)
            );

        const complexityMatch =
            selectedComplexity === problem.expectedTime;

        if (
            dataStructureMatch &&
            patternMatch &&
            complexityMatch
        ) {
            return {
                title: "Strong Match ✓",
                message:
                    "Your initial problem-solving direction matches the expected approach."
            };
        }

        if (!patternMatch) {
            return {
                title: "Pattern Recognition Needs Practice",
                message:
                    "Your selected pattern does not match the expected pattern for this problem."
            };
        }

        if (!dataStructureMatch) {
            return {
                title: "Data Structure Selection Needs Practice",
                message:
                    "Your selected data structure does not match the expected data structure for this problem."
            };
        }

        if (!complexityMatch) {
            return {
                title: "Complexity Estimation Needs Practice",
                message:
                    "Your expected time complexity differs from the expected complexity for this problem."
            };
        }

        return {
            title: "Mixed Result",
            message:
                "Some parts of your initial thinking match, while others need more practice."
        };
    }

    function analyzeCode() {

        if (code.trim() === "") {
            alert("Please write your code first.");
            return;
        }

        setIsAnalyzing(true);

        setTimeout(() => {

            const result = {

                correctness: "Likely Correct",

                approach: "Brute Force",

                bruteForce: "Yes",

                timeComplexity: "O(n²)",

                spaceComplexity: "O(1)",


                actualDataStructures: [
                    "Array"
                ],

                actualPattern: "Brute Force",


                thinkingObservation:
                    "You identified the possibility of using a Hash Map, but your implementation uses a brute-force approach.",


                explanation:
                    "Your solution checks every possible pair of elements. The logic can find the answer, but the number of comparisons grows quickly as the input becomes larger.",


                optimization:
                    "Think about whether you can remember values you have already seen while traversing the array.",


                hints: [

                    "Think about what information you need to remember while traversing the array.",

                    "Can you store previously seen values somewhere?",

                    "Can you use that stored information to avoid checking every possible pair?"

                ]

            };


            setAnalysis(result);

            setHintIndex(-1);

            setShowExplanation(false);

            setShowOptimization(false);

            setIsAnalyzing(false);

        }, 1000);
    }


    function showNextHint() {

        if (
            analysis &&
            hintIndex < analysis.hints.length - 1
        ) {

            setHintIndex(hintIndex + 1);

        }
    }


    function clearCode() {

        setCode("");

        setAnalysis(null);

        setHintIndex(-1);

        setShowExplanation(false);

        setShowOptimization(false);

    }


    const lineCount =
        code === ""
            ? 0
            : code.split("\n").length;

    const thinkingResult =
    thinkingSubmitted
        ? getThinkingResult()
        : null;

    return (

        <section className="analyze-page">


            {/* =========================
                HEADER
            ========================= */}

            <div className="analyze-header">

                <div>

                    <p className="section-label">
                        CODE DIAGNOSIS
                    </p>

                    <h2>
                        Analyze Your Code
                    </h2>

                    <p>
                        Think first. Code second. CodeMedic
                        analyzes how you approach problems.
                    </p>

                </div>

            </div>


            {/* =========================
                BEFORE YOU CODE
            ========================= */}

            <section className="thinking-panel">

                <div className="thinking-header">

                    <div>

                        <p className="section-label">
                            BEFORE YOU CODE
                        </p>

                        <h2>
                            How are you thinking about this problem?
                        </h2>

                        <p>
                            Select everything you think could be
                            useful. There can be more than one
                            correct choice.
                        </p>

                    </div>

                </div>


                {/* DATA STRUCTURES */}

                <div className="thinking-section">

                    <h3>
                        1. Which data structure(s) would you consider?
                    </h3>

                    <div className="choice-grid">

                        {dataStructures.map((item) => (

                            <button
                                key={item}
                                className={
                                    selectedDataStructures.includes(item)
                                        ? "choice-button selected"
                                        : "choice-button"
                                }
                                onClick={() =>
                                    toggleDataStructure(item)
                                }
                                disabled={thinkingSubmitted}
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                </div>


                {/* PATTERNS */}

                <div className="thinking-section">

                    <h3>
                        2. Which pattern(s) do you recognize?
                    </h3>

                    <div className="choice-grid">

                        {patterns.map((item) => (

                            <button
                                key={item}
                                className={
                                    selectedPatterns.includes(item)
                                        ? "choice-button selected"
                                        : "choice-button"
                                }
                                onClick={() =>
                                    togglePattern(item)
                                }
                                disabled={thinkingSubmitted}
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                </div>


                {/* COMPLEXITY */}

                <div className="thinking-section">

                    <h3>
                        3. What time complexity do you expect?
                    </h3>

                    <div className="choice-grid complexity-grid">

                        {[
                            "O(1)",
                            "O(log n)",
                            "O(n)",
                            "O(n log n)",
                            "O(n²)",
                            "O(2ⁿ)"
                        ].map((item) => (

                            <button
                                key={item}
                                className={
                                    selectedComplexity === item
                                        ? "choice-button selected"
                                        : "choice-button"
                                }
                                onClick={() =>
                                    setSelectedComplexity(item)
                                }
                                disabled={thinkingSubmitted}
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                </div>


                {/* THINKING SUMMARY */}

                <div className="thinking-summary">

                    <div className="thinking-summary-info">

                        <span>
                            Data Structures:{" "}
                            {selectedDataStructures.length}
                        </span>

                        <span>
                            Patterns:{" "}
                            {selectedPatterns.length}
                        </span>

                        <span>
                            Complexity:{" "}
                            {selectedComplexity || "Not selected"}
                        </span>

                    </div>


                    <button
                        className="thinking-submit-button"
                        onClick={() =>
                            setThinkingSubmitted(true)
                        }
                        disabled={
                            selectedDataStructures.length === 0 ||
                            selectedPatterns.length === 0 ||
                            selectedComplexity === ""
                        }
                    >
                        {thinkingSubmitted
                            ? "Thinking Submitted ✓"
                            : "Lock My Thinking"
                        }
                    </button>

                </div>

            </section>


            {/* =========================
                CODE EDITOR
            ========================= */}

            <div className="analyze-layout">


                {/* PROBLEM */}

                <div className="problem-panel">

                    <div className="panel-header">

                        <span>
                            PROBLEM
                        </span>

                        <span className="difficulty-badge">
                            {problem?.difficulty || "Easy"}
                        </span>

                    </div>


                    <h3>
                        {problem?.title || "Select a Problem"}
                    </h3>


                    <p>
                        {problem?.description ||
                            "Select a problem from the Problems section to begin analysis."
                        }
                    </p>


                    <div className="problem-topic">
                        {problem?.topic || "DSA"}
                    </div>

                </div>


                {/* CODE */}

                <div className="code-panel">

                    <div className="panel-header">

                        <span>
                            YOUR CODE
                        </span>


                        <select
                            className="language-select"
                            value={language}
                            onChange={(event) =>
                                setLanguage(event.target.value)
                            }
                        >

                            <option value="C++">
                                C++
                            </option>

                            <option value="Java">
                                Java
                            </option>

                            <option value="Python">
                                Python
                            </option>

                            <option value="JavaScript">
                                JavaScript
                            </option>

                        </select>

                    </div>


                    <textarea
                        value={code}
                        onChange={(event) =>
                            setCode(event.target.value)
                        }
                        placeholder={`Write your ${language} solution here...`}
                        spellCheck="false"
                    />


                    <div className="code-meta">

                        <span>
                            Lines: {lineCount}
                        </span>

                        <span>
                            Characters: {code.length}
                        </span>

                    </div>


                    <div className="code-actions">

                        <button
                            className="clear-button"
                            onClick={clearCode}
                            disabled={code.length === 0}
                        >
                            Clear
                        </button>


                        <button
                            className="analyze-button"
                            onClick={analyzeCode}
                            disabled={
                                code.trim() === "" ||
                                isAnalyzing ||
                                !thinkingSubmitted
                            }
                        >

                            {isAnalyzing
                                ? "Analyzing..."
                                : "Analyze Code"
                            }

                        </button>

                    </div>

                </div>

            </div>


            {/* =========================
                DIAGNOSIS RESULT
            ========================= */}

            {analysis && (

                <section className="analysis-result">


                    <div className="analysis-result-header">

                        <div>

                            <p className="section-label">
                                DIAGNOSIS RESULT
                            </p>

                            <h2>
                                Here's what CodeMedic found
                            </h2>

                            <p className="diagnosis-subtitle">
                                We found some observations about
                                your current approach.
                            </p>

                        </div>

                    </div>


                    {/* BASIC DIAGNOSIS */}

                    <div className="analysis-grid">

                        <div className="analysis-card">

                            <span>
                                Correctness
                            </span>

                            <h3>
                                {analysis.correctness}
                            </h3>

                        </div>


                        <div className="analysis-card">

                            <span>
                                Your Approach
                            </span>

                            <h3>
                                {analysis.approach}
                            </h3>

                        </div>


                        <div className="analysis-card">

                            <span>
                                Brute Force
                            </span>

                            <h3>
                                {analysis.bruteForce}
                            </h3>

                        </div>


                        <div className="analysis-card">

                            <span>
                                Your Time Complexity
                            </span>

                            <h3>
                                {analysis.timeComplexity}
                            </h3>

                        </div>


                        <div className="analysis-card">

                            <span>
                                Your Space Complexity
                            </span>

                            <h3>
                                {analysis.spaceComplexity}
                            </h3>

                        </div>

                    </div>


                    {/* =========================
                        THINKING COMPARISON
                    ========================= */}

                    <div className="thinking-comparison">

                        {/* STUDENT THINKING */}

                        <div className="comparison-column">

                            <p className="comparison-label">
                                YOUR THINKING
                            </p>

                            <h3>
                                Before Coding
                            </h3>


                            <div className="comparison-item">

                                <span>
                                    Data Structures
                                </span>

                                <strong>
                                    {selectedDataStructures.join(" + ")}
                                </strong>

                            </div>


                            <div className="comparison-item">

                                <span>
                                    Patterns
                                </span>

                                <strong>
                                    {selectedPatterns.join(" + ")}
                                </strong>

                            </div>


                            <div className="comparison-item">

                                <span>
                                    Expected Time
                                </span>

                                <strong>
                                    {selectedComplexity}
                                </strong>

                            </div>

                        </div>


                        {/* VS */}

                        <div className="comparison-divider">
                            VS
                        </div>


                        {/* ACTUAL IMPLEMENTATION */}

                        <div className="comparison-column">

                            <p className="comparison-label">
                                YOUR IMPLEMENTATION
                            </p>

                            <h3>
                                What CodeMedic Found
                            </h3>


                            <div className="comparison-item">

                                <span>
                                    Data Structure
                                </span>

                                <strong>
                                    {analysis.actualDataStructures.join(" + ")}
                                </strong>

                            </div>


                            <div className="comparison-item">

                                <span>
                                    Pattern
                                </span>

                                <strong>
                                    {analysis.actualPattern}
                                </strong>

                            </div>


                            <div className="comparison-item">

                                <span>
                                    Time Complexity
                                </span>

                                <strong>
                                    {analysis.timeComplexity}
                                </strong>

                            </div>

                        </div>

                    </div>


                    {/* CODEMEDIC OBSERVATION */}

                    <div className="thinking-observation">

                        <p className="comparison-label">
                            CODEMEDIC OBSERVATION
                        </p>

                        <p>
                            {analysis.thinkingObservation}
                        </p>

                    </div>

                    {thinkingResult && (
                        <div className="thinking-result">
                            <p className="comparison-label">
                                THINKING DIAGNOSIS
                            </p>

                            <h3>
                                {thinkingResult.title}
                            </h3>

                            <p>
                                {thinkingResult.message}
                            </p>
                        </div>
                    )}


                    {/* =========================
                        UNDERSTAND MISTAKE
                    ========================= */}

                    <div className="help-section">

                        <h3>
                            Want to understand your approach?
                        </h3>

                        <p>
                            CodeMedic won't reveal the solution.
                            It will help you understand the issue
                            step by step.
                        </p>


                        {!showExplanation && (

                            <button
                                className="help-button"
                                onClick={() =>
                                    setShowExplanation(true)
                                }
                            >
                                Understand My Mistake
                            </button>

                        )}


                        {showExplanation && (

                            <div className="revealed-help">

                                <h4>
                                    What CodeMedic noticed
                                </h4>

                                <p>
                                    {analysis.explanation}
                                </p>

                            </div>

                        )}

                    </div>


                    {/* =========================
                        PROGRESSIVE HINTS
                    ========================= */}

                    <div className="help-section hint-section">

                        <h3>
                            💡 Need a Hint?
                        </h3>

                        <p>
                            Hints are revealed one at a time.
                        </p>


                        {hintIndex >= 0 && (

                            <div className="revealed-help">

                                <p>
                                    {analysis.hints[hintIndex]}
                                </p>

                            </div>

                        )}


                        {hintIndex <
                            analysis.hints.length - 1 ? (

                            <button
                                className="hint-button"
                                onClick={showNextHint}
                            >

                                {hintIndex === -1
                                    ? "Get Hint 1"
                                    : `Get Hint ${hintIndex + 2}`
                                }

                            </button>

                        ) : (

                            <p className="hint-complete">
                                You've received all available hints.
                            </p>

                        )}

                    </div>


                    {/* =========================
                        OPTIMIZATION
                    ========================= */}

                    <div className="help-section">

                        <h3>
                            Want to explore optimization?
                        </h3>

                        <p>
                            Try thinking about your approach
                            before revealing this section.
                        </p>


                        {!showOptimization && (

                            <button
                                className="help-button"
                                onClick={() =>
                                    setShowOptimization(true)
                                }
                            >
                                Show Optimization
                            </button>

                        )}


                        {showOptimization && (

                            <div className="revealed-help">

                                <h4>
                                    Optimization Direction
                                </h4>

                                <p>
                                    {analysis.optimization}
                                </p>

                            </div>

                        )}

                    </div>

                </section>

            )}

        </section>
    );
}

export default AnalyzeCode;