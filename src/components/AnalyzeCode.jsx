import { useState } from "react";
import { supabase } from "../lib/supabase";
import { analyzeSubmittedCode } from "../services/codeAnalysis";
import { analyzeWithAI } from "../services/aiAnalysis";

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

    const [problemAttemptId, setProblemAttemptId] = useState(null);

    const [thinkingError, setThinkingError] = useState("");

    const [thinkingSaving, setThinkingSaving] = useState(false);


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
    
    async function submitThinking() {
         
        setThinkingError("");

        if (!problem) {
            setThinkingError("No problem selected.");
            return;
        }

        if (selectedDataStructures.length === 0) {
            setThinkingError(
                "Please select at least one data structure."
            );
            return;
        }

        if (selectedPatterns.length === 0) {
            setThinkingError(
                "Please select at least one pattern."
            );
            return;
        }

        if (!selectedComplexity) {
            setThinkingError(
                "Please select an expected time complexity."
            );
            return;
        }

        setThinkingSaving(true);

        const {
            data: { user },
            error: userError
        } = await supabase.auth.getUser();


        if (userError || !user) {

            setThinkingError(
                "Unable to identify the logged-in user."
            );

            setThinkingSaving(false);

            return;
        }


        const { error } = await supabase
            .from("thinking_attempts")
            .insert({
                user_id: user.id,
                problem_id: problem.id,
                data_structures_selected: selectedDataStructures,
                patterns_selected: selectedPatterns,
                expected_time: selectedComplexity
            });


        setThinkingSaving(false);


        if (error) {

            console.error(
                "Thinking attempt save error:",
                error
            );

            setThinkingError(
                "Unable to save your thinking. Please try again."
            );

            return;
        }


        setThinkingSubmitted(true);
    }


    async function analyzeCode() {
            if (code.trim() === "") {
                alert("Please write your code first.");
                return;
            }

            setIsAnalyzing(true);

            const {
                data: { user },
                error: userError
            } = await supabase.auth.getUser();

            if (userError || !user) {
                console.error("User fetch error:", userError);
                alert("Unable to identify the logged-in user.");
                setIsAnalyzing(false);
                return;
            }

            const { data: attempt, error: attemptError } =
                await supabase
                    .from("problem_attempts")
                    .insert({
                        user_id: user.id,
                        problem_id: problem.id,
                        language: language,
                        submitted_code: code,
                        status: "submitted"
                    })
                    .select()
                    .single();

            if (attemptError) {
                console.error(
                    "Problem attempt save error:",
                    attemptError
                );

                alert("Unable to save your code submission.");
                setIsAnalyzing(false);
                return;
            }

            setProblemAttemptId(attempt.id);

            console.log(
                "Problem attempt saved:",
                attempt
            );

            // Student's thinking before coding
            const thinking = {
                dataStructures: selectedDataStructures,
                patterns: selectedPatterns,
                complexity: selectedComplexity
            };

            // First run our basic analyzer
            const basicResult = analyzeSubmittedCode({
                code,
                language,
                problem,
                thinking
            });

            // Then send everything to Gemini
            const result = await analyzeWithAI({
                problem,
                thinking,
                code,
                language,
                basicAnalysis: basicResult
            });

            console.log(
                "AI diagnosis received:",
                result
            );


            setAnalysis(result);

            setHintIndex(-1);
            setShowExplanation(false);
            setShowOptimization(false);

            const { error: analysisError } = await supabase
                .from("code_analyses")
                .insert({
                    attempt_id: attempt.id,
                    correctness: result.correctness,
                    approach: result.approach,
                    brute_force: result.brute_force,
                    time_complexity: result.time_complexity,
                    space_complexity: result.space_complexity,
                    actual_data_structures:
                        result.actual_data_structures,
                    actual_patterns:
                        result.actual_patterns,
                    weakness:
                        result.weakness,
                    explanation:
                        result.explanation,
                    optimization:
                        result.optimization
                });

            if (analysisError) {
                console.error(
                    "Code analysis save error:",
                    analysisError
                );
            }

            setIsAnalyzing(false);

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


                    {thinkingError && (
                        <p className="auth-error">
                            {thinkingError}
                        </p>
                    )}


                    <button
                        className="thinking-submit-button"
                        onClick={submitThinking}
                        disabled={
                            selectedDataStructures.length === 0 ||
                            selectedPatterns.length === 0 ||
                            selectedComplexity === "" ||
                            thinkingSaving ||
                            thinkingSubmitted
                        }
                    >
                        {thinkingSaving
                            ? "Saving..."
                            : thinkingSubmitted
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
                                {analysis.brute_force ? "Yes" : "No"}
                            </h3>

                        </div>


                        <div className="analysis-card">

                            <span>
                                Your Time Complexity
                            </span>

                            <h3>
                                {analysis.time_complexity}
                            </h3>

                        </div>


                        <div className="analysis-card">

                            <span>
                                Your Space Complexity
                            </span>

                            <h3>
                                {analysis.space_complexity}
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
                                        {analysis.actual_data_structures?.join(" + ") ||
                                            "Not detected"}
                                    </strong>

                                </div>


                                <div className="comparison-item">

                                    <span>
                                        Pattern
                                    </span>

                                    <strong>
                                        {analysis.actual_patterns?.join(" + ") ||
                                            "Not detected"}
                                    </strong>

                                </div>


                                <div className="comparison-item">

                                    <span>
                                        Time Complexity
                                    </span>

                                    <strong>
                                        {analysis.time_complexity || "Unknown"}
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
                                {analysis.thinking_observation ||
                                    "No observation available."}
                            </p>

                        </div>


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
                                        {analysis.explanation ||
                                            "No explanation available."}
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