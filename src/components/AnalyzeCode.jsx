import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { analyzeSubmittedCode } from "../services/codeAnalysis";
import { analyzeWithAI } from "../services/aiAnalysis";
import { preloadCppExecutor, subscribeRuntimeStatus, getRuntimeStatus } from "../services/cppExecutor";
import { SUPPORTED_LANGUAGES, getLanguageConfig } from "../services/languageService";
import { inferExecutionConfig } from "../services/executionHarness";
import CodeEditor from "./CodeEditor";

function AnalyzeCode({ problem, setPage }) {
    const [selectedLanguage, setSelectedLanguage] = useState("cpp");
    const [cppRuntimeStatus, setCppRuntimeStatus] = useState(getRuntimeStatus());

    useEffect(() => {
        preloadCppExecutor();
        return subscribeRuntimeStatus((status) => {
            setCppRuntimeStatus(status);
        });
    }, []);

    const langConfig = getLanguageConfig(selectedLanguage);
    const language = langConfig.shortName;

    // Execution state
    const [isExecuting, setIsExecuting] = useState(false);
    const [executionResult, setExecutionResult] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [problemTestCases, setProblemTestCases] = useState([]);

    // AI Analysis state
    const [analysis, setAnalysis] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Hints that appear before code analysis
    const [visibleProblemHint, setVisibleProblemHint] = useState(-1);

    // 8-Level Progressive Help State (Level 0 is basic diagnosis, 1 to 7 are revealed on demand)
    // 0: Basic Diagnosis
    // 1: Understand Mistake
    // 2: Hint 1
    // 3: Hint 2
    // 4: Hint 3
    // 5: Optimized Approach
    // 6: Detailed Explanation
    // 7: Full Solution
    const [helpLevel, setHelpLevel] = useState(0);

    // Thinking state
    const [selectedDataStructures, setSelectedDataStructures] = useState([]);
    const [selectedPatterns, setSelectedPatterns] = useState([]);
    const [selectedComplexity, setSelectedComplexity] = useState("");
    const [thinkingSubmitted, setThinkingSubmitted] = useState(false);
    const [thinkingError, setThinkingError] = useState("");
    const [thinkingSaving, setThinkingSaving] = useState(false);

    // Submission / Attempt state
    const [problemAttemptId, setProblemAttemptId] = useState(null);

    // Initialize starter code and fetch test cases when problem or language changes
    useEffect(() => {
        if (problem) {
            const currentLang = getLanguageConfig(selectedLanguage);
            const starter = currentLang.generateStarterCode(problem);
            setCode(starter);
            setExecutionResult(null);
            setAnalysis(null);
            setHelpLevel(0);
            setThinkingSubmitted(false);
            setSelectedDataStructures([]);
            setSelectedPatterns([]);
            setSelectedComplexity("");
            setVisibleProblemHint(-1);

            // Fetch stored test cases if problem has a database UUID
            const isDbUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(problem.id || "");
            if (isDbUuid) {
                supabase
                    .from("problem_test_cases")
                    .select("id, input, expected_output, is_hidden")
                    .eq("problem_id", problem.id)
                    .then(({ data, error }) => {
                        if (!error && Array.isArray(data) && data.length > 0) {
                            setProblemTestCases(data);
                        } else {
                            setProblemTestCases([]);
                        }
                    })
                    .catch(() => setProblemTestCases([]));
            } else {
                setProblemTestCases([]);
            }
        }
    }, [problem?.id, problem?.title, selectedLanguage]);

    function handleLanguageChange(newLangId) {
        setSelectedLanguage(newLangId);
        const nextLang = getLanguageConfig(newLangId);
        if (problem) {
            setCode(nextLang.generateStarterCode(problem));
        }
        setExecutionResult(null);
        setProblemAttemptId(null);
    }

    const problemPatterns =
        problem?.patterns ||
        (problem?.pattern ? [problem.pattern] : []);

    const problemDataStructures =
        problem?.data_structures ||
        (problem?.dataStructure ? [problem.dataStructure] : []);

    const expectedTime =
        problem?.expected_time ||
        problem?.expectedTime ||
        "";

    const expectedSpace =
        problem?.expected_space ||
        problem?.expectedSpace ||
        "";

    const inputFormat =
        problem?.input_format ||
        problem?.inputFormat ||
        "";

    const outputFormat =
        problem?.output_format ||
        problem?.outputFormat ||
        "";

    const learningObjective =
        problem?.learning_objective ||
        problem?.learningObjective ||
        "";

    const problemHints = Array.isArray(problem?.hints)
        ? problem.hints
        : [];

    const examples = Array.isArray(problem?.examples)
        ? problem.examples
        : [];

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
                selectedDataStructures.filter((s) => s !== item)
            );
        } else {
            setSelectedDataStructures([...selectedDataStructures, item]);
        }
    }

    function togglePattern(item) {
        if (selectedPatterns.includes(item)) {
            setSelectedPatterns(selectedPatterns.filter((p) => p !== item));
        } else {
            setSelectedPatterns([...selectedPatterns, item]);
        }
    }

    async function submitThinking() {
        setThinkingError("");

        if (!problem) {
            setThinkingError("No problem selected.");
            return;
        }

        if (selectedDataStructures.length === 0) {
            setThinkingError("Please select at least one data structure.");
            return;
        }

        if (selectedPatterns.length === 0) {
            setThinkingError("Please select at least one pattern.");
            return;
        }

        if (!selectedComplexity) {
            setThinkingError("Please select an expected time complexity.");
            return;
        }

        setThinkingSaving(true);

        const {
            data: { user },
            error: userError
        } = await supabase.auth.getUser();

        if (userError || !user) {
            setThinkingError("Unable to identify the logged-in user.");
            setThinkingSaving(false);
            return;
        }

        if (problem.id) {
            const isDbUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(problem.id);
            if (isDbUuid) {
                const { error } = await supabase
                    .from("thinking_attempts")
                    .insert({
                        user_id: user.id,
                        problem_id: problem.id,
                        data_structures_selected: selectedDataStructures,
                        patterns_selected: selectedPatterns,
                        expected_time: selectedComplexity
                    });

                if (error) {
                    console.error("Thinking attempt save error:", error);
                }
            }
        }

        setThinkingSaving(false);
        setThinkingSubmitted(true);
    }

    // Execute code locally in browser via Emception WASM and drive complete learning workflow
    async function handleRunCode() {
        if (code.trim() === "") {
            alert("Please write your code first.");
            return;
        }

        if (!problem) {
            alert("Please select a problem first.");
            return;
        }

        const problemConfig = inferExecutionConfig(problem);
        if (problemConfig?.requiresRegeneration) {
            alert("This legacy generated problem does not contain a canonical function specification. Please generate a new problem from the Practice Generator.");
            return;
        }

        setIsExecuting(true);
        setExecutionResult(null);

        try {
            const activeLang = getLanguageConfig(selectedLanguage);
            const result = await activeLang.execute(code, problem, problemTestCases);
            console.log("Local execution result:", result);
            setExecutionResult(result);
            setActiveTab(0);
            // Immediately release execution UI state so button returns to ready state
            setIsExecuting(false);

            // Now drive the complete CodeMedic learning analysis and persistence workflow
            (async () => {
                let aiResult = null;
                try {
                    // For runnable code (Accepted, Wrong Answer, Runtime Error, TLE), perform code & thinking analysis
                    if (result.status !== "Compilation Error" && result.status !== "Execution Error") {
                        setIsAnalyzing(true);
                        const thinking = {
                            dataStructures: selectedDataStructures,
                            patterns: selectedPatterns,
                            complexity: selectedComplexity
                        };

                        const basicResult = analyzeSubmittedCode({
                            code,
                            language,
                            problem,
                            thinking
                        });

                        aiResult = await analyzeWithAI({
                            problem,
                            thinking,
                            code,
                            language,
                            basicAnalysis: basicResult,
                            executionResult: result
                        });

                        setAnalysis(aiResult);
                        setHelpLevel(0);
                        setIsAnalyzing(false);
                    } else {
                        setAnalysis(null);
                    }

                    // Persist attempt and analysis to Supabase
                    const {
                        data: { user },
                        error: userError
                    } = await supabase.auth.getUser();

                    if (!userError && user && problem.id) {
                        const isDbUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(problem.id);
                        if (isDbUuid) {
                            const { data: savedAttempt, error: attemptError } = await supabase
                                .from("problem_attempts")
                                .insert({
                                    user_id: user.id,
                                    problem_id: problem.id,
                                    language: language || "C++",
                                    submitted_code: code,
                                    status: result.status || (result.success ? "Accepted" : "Wrong Answer")
                                })
                                .select()
                                .single();

                            if (attemptError) {
                                console.error("Problem attempt save error on run:", attemptError);
                            } else if (savedAttempt) {
                                setProblemAttemptId(savedAttempt.id);

                                if (aiResult) {
                                    await supabase
                                        .from("code_analyses")
                                        .insert({
                                            attempt_id: savedAttempt.id,
                                            correctness: aiResult.correctness || (result.status === "Accepted" ? "Accepted" : "Incorrect"),
                                            approach: aiResult.approach || "Analysis provided",
                                            brute_force: aiResult.brute_force || false,
                                            time_complexity: aiResult.time_complexity || "Unknown",
                                            space_complexity: aiResult.space_complexity || "Unknown",
                                            actual_data_structures: aiResult.actual_data_structures || [],
                                            actual_patterns: aiResult.actual_patterns || [],
                                            weakness: aiResult.weakness || "None noted",
                                            explanation: aiResult.explanation || "",
                                            optimization: aiResult.optimization || ""
                                        });
                                }
                            }
                        }
                    }
                } catch (workflowErr) {
                    console.error("Workflow post-execution error:", workflowErr);
                } finally {
                    setIsAnalyzing(false);
                }
            })();
        } catch (err) {
            console.error("Execution error:", err);
            const errResult = {
                success: false,
                status: "Execution Error",
                message: err?.message || "Execution failed",
                testCases: [],
                passedTests: 0,
                totalTests: 0,
                compilationError: null
            };
            setExecutionResult(errResult);
            setIsExecuting(false);

            (async () => {
                try {
                    const { data: { user } } = await supabase.auth.getUser();
                    if (user && problem.id) {
                        const isDbUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(problem.id);
                        if (isDbUuid) {
                            const { data: savedAttempt } = await supabase.from("problem_attempts").insert({
                                user_id: user.id,
                                problem_id: problem.id,
                                language: language || "C++",
                                submitted_code: code,
                                status: "Execution Error"
                            }).select().single();
                            if (savedAttempt) {
                                setProblemAttemptId(savedAttempt.id);
                            }
                        }
                    }
                } catch (_) {}
            })();
        } finally {
            setIsExecuting(false);
        }
    }

    // Submit for Gemini AI diagnosis (strictly reuses existing executionResult)
    async function analyzeCode() {
        if (code.trim() === "") {
            alert("Please write your code first.");
            return;
        }

        if (!problem) {
            alert("Please select a problem first.");
            return;
        }

        if (!executionResult) {
            alert("Please run your code first to obtain execution results before diagnosing.");
            return;
        }

        setIsAnalyzing(true);

        try {
            const {
                data: { user },
                error: userError
            } = await supabase.auth.getUser();

            if (userError || !user) {
                alert("Unable to identify the logged-in user.");
                setIsAnalyzing(false);
                return;
            }

            const thinking = {
                dataStructures: selectedDataStructures,
                patterns: selectedPatterns,
                complexity: selectedComplexity
            };

            const basicResult = analyzeSubmittedCode({
                code,
                language,
                problem,
                thinking
            });

            // Call Gemini via Edge function or structured fallback
            const result = await analyzeWithAI({
                problem,
                thinking,
                code,
                language,
                basicAnalysis: basicResult,
                executionResult: executionResult
            });

            console.log("AI diagnosis received:", result);
            setAnalysis(result);
            setHelpLevel(0); // Reset to Level 0 (Basic diagnosis)

            // Save problem attempt & code analysis in Supabase if valid UUID
            if (problem.id) {
                const isDbUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(problem.id);
                if (isDbUuid) {
                    let attemptId = problemAttemptId;

                    // If an attempt was not yet saved during run (e.g. race condition), create one now
                    if (!attemptId) {
                        const { data: savedAttempt, error: attemptError } = await supabase
                            .from("problem_attempts")
                            .insert({
                                user_id: user.id,
                                problem_id: problem.id,
                                language: language || "C++",
                                submitted_code: code,
                                status: executionResult?.status || "Attempted"
                            })
                            .select()
                            .single();

                        if (!attemptError && savedAttempt) {
                            attemptId = savedAttempt.id;
                            setProblemAttemptId(savedAttempt.id);
                        }
                    }

                    if (attemptId) {
                        // Save code analysis in Supabase linked to attempt
                        const { error: analysisError } = await supabase
                            .from("code_analyses")
                            .insert({
                                attempt_id: attemptId,
                                correctness: result.correctness || (executionResult?.status === "Accepted" ? "Correct" : "Incorrect"),
                                approach: result.approach || "Analysis provided",
                                brute_force: result.brute_force || false,
                                time_complexity: result.time_complexity || "Unknown",
                                space_complexity: result.space_complexity || "Unknown",
                                actual_data_structures: result.actual_data_structures || [],
                                actual_patterns: result.actual_patterns || [],
                                weakness: result.weakness || "None noted",
                                explanation: result.explanation || "",
                                optimization: result.optimization || ""
                            });

                        if (analysisError) {
                            console.error("Code analysis save error:", analysisError);
                        }
                    }
                }
            }
        } catch (error) {
            console.error("Code analysis failed:", error);
            alert(error?.message || "Something went wrong while analyzing your code.");
        } finally {
            setIsAnalyzing(false);
        }
    }

    function showNextProblemHint() {
        if (problemHints.length > 0 && visibleProblemHint < problemHints.length - 1) {
            setVisibleProblemHint(visibleProblemHint + 1);
        }
    }

    function clearCode() {
        const activeLang = getLanguageConfig(selectedLanguage);
        const starter = activeLang.generateStarterCode(problem);
        setCode(starter);
        setExecutionResult(null);
        setProblemAttemptId(null);
        setAnalysis(null);
        setHelpLevel(0);
    }

    const lineCount = code === "" ? 0 : code.split("\n").length;
    const analysisHints = Array.isArray(analysis?.hints) ? analysis.hints : [];
    const problemConfig = inferExecutionConfig(problem);

    // Helper to get status color badge
    function getStatusBadgeStyle(status) {
        switch (status) {
            case "Accepted":
                return { background: "rgba(34, 197, 94, 0.2)", color: "#4ade80", border: "1px solid #22c55e" };
            case "Wrong Answer":
                return { background: "rgba(239, 68, 68, 0.2)", color: "#f87171", border: "1px solid #ef4444" };
            case "Compilation Error":
                return { background: "rgba(245, 158, 11, 0.2)", color: "#fbbf24", border: "1px solid #f59e0b" };
            case "Runtime Error":
                return { background: "rgba(239, 68, 68, 0.2)", color: "#ef4444", border: "1px solid #dc2626" };
            case "Time Limit Exceeded":
                return { background: "rgba(249, 115, 22, 0.2)", color: "#fb923c", border: "1px solid #f97316" };
            case "Memory Limit Exceeded":
                return { background: "rgba(168, 85, 247, 0.2)", color: "#c084fc", border: "1px solid #a855f7" };
            case "Execution Error":
                return { background: "rgba(100, 116, 139, 0.2)", color: "#94a3b8", border: "1px solid #64748b" };
            default:
                return { background: "rgba(148, 163, 184, 0.2)", color: "#94a3b8", border: "1px solid #64748b" };
        }
    }

    if (!problem) {
        return (
            <section className="analyze-page">
                <div
                    style={{
                        textAlign: "center",
                        padding: "60px 24px",
                        background: "rgba(30, 41, 59, 0.4)",
                        borderRadius: "12px",
                        border: "1px dashed rgba(255, 255, 255, 0.15)",
                        margin: "40px auto",
                        maxWidth: "600px"
                    }}
                >
                    <div style={{ fontSize: "48px", marginBottom: "16px" }}>🩺</div>
                    <h2 style={{ color: "#fff", marginBottom: "8px" }}>No Problem Selected</h2>
                    <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
                        Select a problem from the Practice Library or generate a customized one to start your thinking diagnosis and C++ coding.
                    </p>
                    <button
                        onClick={() => setPage && setPage("Practice Problem")}
                        style={{
                            background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                            color: "#fff",
                            padding: "12px 24px",
                            borderRadius: "8px",
                            border: "none",
                            fontWeight: "600",
                            cursor: "pointer",
                            fontSize: "15px"
                        }}
                    >
                        Browse Practice Problems →
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="analyze-page">
            {/* =========================
                HEADER
            ========================= */}
            <div className="analyze-header">
                <div>
                    <p className="section-label">CODE DIAGNOSIS & LEARNING</p>
                    <h2>Analyze Your Code</h2>
                    <p>
                        Think first. Code second. CodeMedic analyzes your approach and reveals thinking gaps.
                    </p>
                </div>
            </div>

            {/* =========================
                BEFORE YOU CODE (THINKING PANEL)
            ========================= */}
            <section className="thinking-panel" style={{ marginBottom: "28px" }}>
                <div className="thinking-header">
                    <div>
                        <p className="section-label">STEP 1: BEFORE YOU CODE</p>
                        <h2>How are you approaching this problem?</h2>
                        <p>
                            Select the data structure, pattern, and complexity you plan to use before writing your solution.
                        </p>
                    </div>
                </div>

                {/* DATA STRUCTURES */}
                <div className="thinking-section">
                    <h3>1. Which data structure(s) do you plan to use?</h3>
                    <div className="choice-grid">
                        {dataStructures.map((item) => (
                            <button
                                key={item}
                                className={
                                    selectedDataStructures.includes(item)
                                        ? "choice-button selected"
                                        : "choice-button"
                                }
                                onClick={() => toggleDataStructure(item)}
                                disabled={thinkingSubmitted}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PATTERNS */}
                <div className="thinking-section">
                    <h3>2. Which algorithmic pattern(s) do you recognize?</h3>
                    <div className="choice-grid">
                        {patterns.map((item) => (
                            <button
                                key={item}
                                className={
                                    selectedPatterns.includes(item)
                                        ? "choice-button selected"
                                        : "choice-button"
                                }
                                onClick={() => togglePattern(item)}
                                disabled={thinkingSubmitted}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* COMPLEXITY */}
                <div className="thinking-section">
                    <h3>3. What time complexity do you expect?</h3>
                    <div className="choice-grid complexity-grid">
                        {["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"].map((item) => (
                            <button
                                key={item}
                                className={
                                    selectedComplexity === item
                                        ? "choice-button selected"
                                        : "choice-button"
                                }
                                onClick={() => setSelectedComplexity(item)}
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
                        <span>Data Structures: {selectedDataStructures.length}</span>
                        <span>Patterns: {selectedPatterns.length}</span>
                        <span>Complexity: {selectedComplexity || "Not selected"}</span>
                    </div>

                    {thinkingError && <p className="auth-error">{thinkingError}</p>}

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
                            ? "Thinking Locked ✓"
                            : "Lock My Thinking"}
                    </button>
                </div>
            </section>

            {/* =========================
                MAIN CODING LAYOUT
            ========================= */}
            <div className="analyze-layout">
                {/* PROBLEM DETAILS PANEL */}
                <div className="problem-panel">
                    <div className="panel-header">
                        <span>PROBLEM</span>
                        <span className="difficulty-badge">{problem?.difficulty || "Easy"}</span>
                    </div>

                    <h3>{problem?.title || "Select a Problem"}</h3>
                    <p className="problem-description">
                        {problem?.description || "Select a problem from the Practice section to begin."}
                    </p>

                    <div className="problem-topic">{problem?.topic || "DSA"}</div>

                    {problemConfig?.requiresRegeneration && (
                        <div style={{
                            background: "rgba(245, 158, 11, 0.15)",
                            border: "1px solid #f59e0b",
                            color: "#fcd34d",
                            padding: "12px 16px",
                            borderRadius: "8px",
                            margin: "12px 0 16px 0",
                            fontSize: "14px",
                            lineHeight: "1.5"
                        }}>
                            ⚠️ <strong>Function Specification Missing:</strong> This legacy problem does not define a canonical function specification. Please generate a new problem from the Practice Generator.
                        </div>
                    )}

                    {/* EXAMPLES */}
                    {examples.length > 0 && (
                        <div className="problem-detail-section">
                            <h4>🧪 Examples</h4>
                            <div className="problem-examples">
                                {examples.map((example, index) => (
                                    <div className="problem-example" key={index}>
                                        <strong>Example {index + 1}</strong>
                                        <div className="example-block">
                                            <span>Input:</span>
                                            <code>{example.input}</code>
                                        </div>
                                        <div className="example-block">
                                            <span>Output:</span>
                                            <code>{example.output}</code>
                                        </div>
                                        {example.explanation && (
                                            <div className="example-explanation">
                                                <span>Explanation:</span>
                                                <p>{example.explanation}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CONSTRAINTS */}
                    {problem?.constraints && (
                        <div className="problem-detail-section">
                            <h4>📌 Constraints</h4>
                            <div className="problem-detail-box">{problem.constraints}</div>
                        </div>
                    )}

                    {/* PRE-CODING HINTS */}
                    {problemHints.length > 0 && (
                        <div className="problem-detail-section">
                            <div className="problem-hints-header">
                                <p className="section-label">NEED A HINT?</p>
                                <h4>💡 Progressive Hints</h4>
                                <p>Revealed one at a time to help you think without spoiling the solution.</p>
                            </div>

                            <div className="problem-hints-list">
                                {problemHints.slice(0, visibleProblemHint + 1).map((hint, index) => (
                                    <div className="problem-hint-card" key={index}>
                                        <div className="problem-hint-number">Hint {index + 1}</div>
                                        <p>{hint}</p>
                                    </div>
                                ))}
                            </div>

                            {visibleProblemHint < problemHints.length - 1 && (
                                <button
                                    type="button"
                                    className="next-hint-button"
                                    onClick={showNextProblemHint}
                                >
                                    💡 Show Hint {visibleProblemHint + 2}
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* CODE EDITOR & RUNNER PANEL */}
                <div className="code-panel">
                    <div className="panel-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                        <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "1.2px", color: "#64748b" }}>
                            FUNCTION-ONLY SOLUTION
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <label htmlFor="code-language-select" style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "600" }}>
                                Language:
                            </label>
                            <select
                                id="code-language-select"
                                className="language-select"
                                value={selectedLanguage}
                                onChange={(event) => handleLanguageChange(event.target.value)}
                                style={{
                                    background: "#0f172a",
                                    border: "1px solid #1e293b",
                                    color: "#38bdf8",
                                    borderRadius: "6px",
                                    padding: "4px 8px",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    outline: "none"
                                }}
                            >
                                {SUPPORTED_LANGUAGES.map((lang) => (
                                    <option key={lang.id} value={lang.id}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                            {selectedLanguage === "cpp" ? (
                                cppRuntimeStatus === "warming" ? (
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            background: "rgba(245, 158, 11, 0.12)",
                                            color: "#fbbf24",
                                            border: "1px solid rgba(245, 158, 11, 0.3)",
                                            padding: "3px 8px",
                                            borderRadius: "4px",
                                            fontSize: "10px",
                                            fontWeight: "700",
                                            letterSpacing: "0.5px"
                                        }}
                                        title="Compiler is preloading and caching in the background"
                                    >
                                        <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#fbbf24" }} />
                                        Preparing C++ environment...
                                    </span>
                                ) : cppRuntimeStatus === "ready" ? (
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            background: "rgba(34, 197, 94, 0.12)",
                                            color: "#4ade80",
                                            border: "1px solid rgba(34, 197, 94, 0.3)",
                                            padding: "3px 8px",
                                            borderRadius: "4px",
                                            fontSize: "10px",
                                            fontWeight: "700",
                                            letterSpacing: "0.5px"
                                        }}
                                        title="C++ environment is warmed and ready for sub-second execution"
                                    >
                                        <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80" }} />
                                        C++ environment ready
                                    </span>
                                ) : (
                                    <span
                                        style={{
                                            background: "rgba(56, 189, 248, 0.12)",
                                            color: "#38bdf8",
                                            border: "1px solid rgba(56, 189, 248, 0.25)",
                                            padding: "3px 8px",
                                            borderRadius: "4px",
                                            fontSize: "10px",
                                            fontWeight: "700",
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        ⚡ BROWSER WASM
                                    </span>
                                )
                            ) : (
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        background: "rgba(56, 189, 248, 0.12)",
                                        color: "#38bdf8",
                                        border: "1px solid rgba(56, 189, 248, 0.25)",
                                        padding: "3px 8px",
                                        borderRadius: "4px",
                                        fontSize: "10px",
                                        fontWeight: "700",
                                        letterSpacing: "0.5px"
                                    }}
                                >
                                    <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8" }} />
                                    JS environment ready
                                </span>
                            )}
                        </div>
                    </div>

                    <CodeEditor
                        value={code}
                        onChange={(newCode) => {
                            setCode(newCode);
                            if (executionResult) setExecutionResult(null);
                            if (problemAttemptId) setProblemAttemptId(null);
                        }}
                        disabled={isExecuting}
                        height="420px"
                        language={getLanguageConfig(selectedLanguage).monacoLang}
                        compilationError={executionResult?.compilationError}
                    />

                    <div className="code-meta">
                        <span>Lines: {lineCount}</span>
                        <span>Characters: {code.length}</span>
                        <span>⚡ Zero-server local browser execution</span>
                    </div>

                    <div className="code-actions" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <button
                            className="clear-button"
                            onClick={clearCode}
                            disabled={code.length === 0}
                        >
                            Reset
                        </button>

                        <button
                            className="run-button"
                            style={{
                                background: problemConfig?.requiresRegeneration ? "#475569" : "#059669",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "none",
                                fontWeight: "600",
                                cursor: (code.trim() === "" || isExecuting || problemConfig?.requiresRegeneration) ? "not-allowed" : "pointer"
                            }}
                            onClick={handleRunCode}
                            disabled={code.trim() === "" || isExecuting || problemConfig?.requiresRegeneration}
                            title={problemConfig?.requiresRegeneration ? "This legacy problem requires regeneration" : undefined}
                        >
                            {isExecuting
                                ? (selectedLanguage === "cpp" ? "Compiling & Running..." : "Running...")
                                : (selectedLanguage === "cpp" && cppRuntimeStatus === "warming")
                                    ? "⏳ Preparing C++ environment..."
                                    : "▶ Run Code"}
                        </button>

                        <button
                            className="analyze-button"
                            onClick={analyzeCode}
                            disabled={code.trim() === "" || isAnalyzing || isExecuting || !executionResult}
                            title={!executionResult ? "Run your code first to verify results before diagnosing" : "Diagnose with AI"}
                            style={{
                                opacity: (!executionResult || isExecuting || isAnalyzing) ? 0.6 : 1,
                                cursor: (!executionResult || isExecuting || isAnalyzing) ? "not-allowed" : "pointer"
                            }}
                        >
                            {isAnalyzing ? "Diagnosing with AI..." : "🩺 Diagnose with AI"}
                        </button>
                    </div>

                    {/* =========================
                        EXECUTION RESULTS PANEL
                    ========================= */}
                    {executionResult && (
                        <div
                            className="execution-panel"
                            style={{
                                marginTop: "20px",
                                background: "rgba(15, 23, 42, 0.8)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "8px",
                                padding: "18px"
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <span
                                        style={{
                                            padding: "6px 12px",
                                            borderRadius: "6px",
                                            fontWeight: "700",
                                            fontSize: "13px",
                                            ...getStatusBadgeStyle(executionResult.status)
                                        }}
                                    >
                                        {executionResult.status}
                                    </span>
                                    <span style={{ color: "#cbd5e1", fontSize: "14px" }}>
                                        {executionResult.message}
                                    </span>
                                </div>
                                {executionResult.executionTimeMs > 0 && (
                                    <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                                        ⏱ {executionResult.executionTimeMs.toFixed(1)} ms
                                    </span>
                                )}
                            </div>

                            {/* Compilation error box */}
                            {executionResult.compilationError && (
                                <pre
                                    style={{
                                        background: "rgba(239, 68, 68, 0.1)",
                                        border: "1px solid #ef4444",
                                        borderRadius: "6px",
                                        padding: "12px",
                                        color: "#fca5a5",
                                        fontSize: "13px",
                                        fontFamily: "monospace",
                                        whiteSpace: "pre-wrap"
                                    }}
                                >
                                    {executionResult.compilationError}
                                </pre>
                            )}

                            {/* Time Limit Exceeded details box */}
                            {executionResult.status === "Time Limit Exceeded" && (
                                <div
                                    style={{
                                        background: "rgba(249, 115, 22, 0.12)",
                                        border: "1px solid rgba(249, 115, 22, 0.35)",
                                        borderRadius: "6px",
                                        padding: "14px",
                                        color: "#fdba74",
                                        fontSize: "13px",
                                        lineHeight: "1.6"
                                    }}
                                >
                                    <div style={{ fontWeight: "700", color: "#fb923c", marginBottom: "4px" }}>
                                        ⏱ Execution Time Limit Exceeded (~{executionResult.executionTimeMs || 4000} ms)
                                    </div>
                                    <div>
                                        Your code ran for longer than the permitted execution limit (4000 ms). Common causes include:
                                    </div>
                                    <ul style={{ margin: "6px 0 0 18px", padding: 0 }}>
                                        <li><strong>Infinite Loop:</strong> Loop condition (e.g. <code>while (i &lt; j)</code>) never terminates due to pointers not moving.</li>
                                        <li><strong>Operator Precedence:</strong> In C++, <code>/</code> has higher precedence than <code>+</code>. An expression like <code>int mid = i + j / 2;</code> evaluates as <code>i + (j / 2)</code>. Use <code>i + (j - i) / 2</code> or <code>(i + j) / 2</code> instead.</li>
                                        <li><strong>Time Complexity:</strong> The algorithm may be O(N²) or exponential where an O(N) or O(log N) approach is expected.</li>
                                    </ul>
                                </div>
                            )}

                            {/* Execution / Infrastructure Error details box */}
                            {executionResult.status === "Execution Error" && (
                                <div
                                    style={{
                                        background: "rgba(100, 116, 139, 0.15)",
                                        border: "1px solid rgba(100, 116, 139, 0.35)",
                                        borderRadius: "6px",
                                        padding: "14px",
                                        color: "#cbd5e1",
                                        fontSize: "13px",
                                        lineHeight: "1.6"
                                    }}
                                >
                                    <div style={{ fontWeight: "700", color: "#94a3b8", marginBottom: "4px" }}>
                                        ⚙️ Execution Infrastructure Notice
                                    </div>
                                    <div>{executionResult.message}</div>
                                    <div style={{ marginTop: "6px", fontSize: "12px", color: "#64748b" }}>
                                        The in-browser compiler environment was safely reset. Your solution algorithm was not marked incorrect or penalized. You can click <strong>Run Code</strong> again to retry.
                                    </div>
                                </div>
                            )}

                            {/* Test Cases Tabs */}
                            {executionResult.testCases && executionResult.testCases.length > 0 && (
                                <div>
                                    <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "8px", marginBottom: "12px" }}>
                                        {executionResult.testCases.map((tc, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveTab(idx)}
                                                style={{
                                                    background: activeTab === idx ? "rgba(59, 130, 246, 0.3)" : "transparent",
                                                    color: activeTab === idx ? "#60a5fa" : "#94a3b8",
                                                    border: activeTab === idx ? "1px solid #3b82f6" : "1px solid transparent",
                                                    borderRadius: "6px",
                                                    padding: "6px 12px",
                                                    fontSize: "13px",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                }}
                                            >
                                                <span>Case {idx + 1}</span>
                                                <span>{tc.passed ? "✓" : "✗"}</span>
                                            </button>
                                        ))}
                                    </div>

                                    {executionResult.testCases[activeTab] && (
                                        <div style={{ fontSize: "13px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                            <div>
                                                <strong style={{ color: "#94a3b8" }}>Input:</strong>
                                                <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "8px", borderRadius: "4px", fontFamily: "monospace", color: "#f8fafc", marginTop: "2px" }}>
                                                    {executionResult.testCases[activeTab].input}
                                                </div>
                                            </div>
                                            <div>
                                                <strong style={{ color: "#94a3b8" }}>Expected:</strong>
                                                <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "8px", borderRadius: "4px", fontFamily: "monospace", color: "#4ade80", marginTop: "2px" }}>
                                                    {executionResult.testCases[activeTab].expected}
                                                </div>
                                            </div>
                                            <div>
                                                <strong style={{ color: "#94a3b8" }}>Your Output:</strong>
                                                <div style={{
                                                    background: "rgba(30, 41, 59, 0.6)",
                                                    padding: "8px",
                                                    borderRadius: "4px",
                                                    fontFamily: "monospace",
                                                    color: executionResult.testCases[activeTab].passed ? "#4ade80" : "#f87171",
                                                    marginTop: "2px"
                                                }}>
                                                    {executionResult.testCases[activeTab].actual}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* =========================
                DIAGNOSIS & PROGRESSIVE HELP
            ========================= */}
            {analysis && (
                <section className="analysis-result" style={{ marginTop: "36px" }}>
                    <div className="analysis-result-header">
                        <div>
                            <p className="section-label">STEP 2: THINKING DIAGNOSIS</p>
                            <h2>CodeMedic Educational Diagnosis</h2>
                            <p className="diagnosis-subtitle">
                                Comparing what you planned before coding vs. what you actually implemented.
                            </p>
                        </div>
                    </div>

                    {/* BASIC DIAGNOSIS METRICS */}
                    <div className="analysis-grid">
                        <div className="analysis-card">
                            <span>Execution Status</span>
                            <h3>{executionResult?.status || analysis.correctness}</h3>
                        </div>

                        <div className="analysis-card">
                            <span>Detected Approach</span>
                            <h3>{analysis.approach}</h3>
                        </div>

                        <div className="analysis-card">
                            <span>Brute Force</span>
                            <h3>{analysis.brute_force ? "Yes" : "No"}</h3>
                        </div>

                        <div className="analysis-card">
                            <span>Time Complexity</span>
                            <h3>{analysis.time_complexity}</h3>
                        </div>

                        <div className="analysis-card">
                            <span>Space Complexity</span>
                            <h3>{analysis.space_complexity}</h3>
                        </div>
                    </div>

                    {/* =========================
                        THINKING VS IMPLEMENTATION COMPARISON
                    ========================= */}
                    <div className="thinking-comparison" style={{ margin: "28px 0" }}>
                        <div className="comparison-column">
                            <p className="comparison-label">YOUR PLANNED THINKING</p>
                            <h3>Before Coding</h3>
                            <div className="comparison-item">
                                <span>Data Structures</span>
                                <strong>{selectedDataStructures.join(" + ") || "None"}</strong>
                            </div>
                            <div className="comparison-item">
                                <span>Patterns</span>
                                <strong>{selectedPatterns.join(" + ") || "None"}</strong>
                            </div>
                            <div className="comparison-item">
                                <span>Expected Complexity</span>
                                <strong>{selectedComplexity || "Not selected"}</strong>
                            </div>
                        </div>

                        <div className="comparison-divider">VS</div>

                        <div className="comparison-column">
                            <p className="comparison-label">ACTUAL IMPLEMENTATION</p>
                            <h3>What You Wrote</h3>
                            <div className="comparison-item">
                                <span>Data Structures</span>
                                <strong>{analysis.actual_data_structures?.join(" + ") || "Not detected"}</strong>
                            </div>
                            <div className="comparison-item">
                                <span>Pattern</span>
                                <strong>{analysis.actual_patterns?.join(" + ") || "Not detected"}</strong>
                            </div>
                            <div className="comparison-item">
                                <span>Actual Complexity</span>
                                <strong>{analysis.time_complexity || "Unknown"}</strong>
                            </div>
                        </div>
                    </div>

                    {/* THINKING OBSERVATION / MISMATCH ALERT */}
                    {analysis.thinking_observation && (
                        <div
                            className="thinking-observation"
                            style={{
                                background: "rgba(59, 130, 246, 0.1)",
                                borderLeft: "4px solid #3b82f6",
                                padding: "18px",
                                borderRadius: "0 8px 8px 0",
                                margin: "20px 0"
                            }}
                        >
                            <p className="comparison-label" style={{ color: "#60a5fa", fontWeight: "700" }}>
                                💡 THINKING OBSERVATION & GAP ANALYSIS
                            </p>
                            <p style={{ margin: 0, fontSize: "15px", color: "#e2e8f0", lineHeight: "1.6" }}>
                                {analysis.thinking_observation}
                            </p>
                        </div>
                    )}

                    {/* =========================
                        8-LEVEL PROGRESSIVE HELP SYSTEM
                    ========================= */}
                    <div style={{ marginTop: "32px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "24px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                            <div>
                                <p className="section-label">STEP 3: PROGRESSIVE ASSISTANCE</p>
                                <h3>Guided Help System (Level {helpLevel}/7)</h3>
                                <p style={{ color: "#94a3b8", fontSize: "14px", margin: "4px 0 0 0" }}>
                                    Control how much help you unlock. Learn progressively without spoiling the full solution.
                                </p>
                            </div>

                            {helpLevel < 7 && (
                                <button
                                    onClick={() => setHelpLevel(helpLevel + 1)}
                                    style={{
                                        background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
                                        color: "#fff",
                                        border: "none",
                                        padding: "10px 20px",
                                        borderRadius: "6px",
                                        fontWeight: "600",
                                        cursor: "pointer"
                                    }}
                                >
                                    Unlock Level {helpLevel + 1} →
                                </button>
                            )}
                        </div>

                        {/* LEVEL 1: UNDERSTAND MISTAKE */}
                        {helpLevel >= 1 && (
                            <div className="help-section" style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px", borderRadius: "8px", margin: "12px 0" }}>
                                <h4 style={{ color: "#fbbf24", margin: "0 0 8px 0" }}>🔍 Level 1: Understand Your Mistake & Weakness</h4>
                                <p style={{ color: "#e2e8f0", margin: 0 }}>
                                    {analysis.weakness || analysis.explanation || "No critical weakness identified."}
                                </p>
                            </div>
                        )}

                        {/* LEVEL 2: HINT 1 */}
                        {helpLevel >= 2 && analysisHints[0] && (
                            <div className="help-section" style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px", borderRadius: "8px", margin: "12px 0" }}>
                                <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>💡 Level 2: Hint 1 (General Direction)</h4>
                                <p style={{ color: "#e2e8f0", margin: 0 }}>{analysisHints[0]}</p>
                            </div>
                        )}

                        {/* LEVEL 3: HINT 2 */}
                        {helpLevel >= 3 && analysisHints[1] && (
                            <div className="help-section" style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px", borderRadius: "8px", margin: "12px 0" }}>
                                <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>💡 Level 3: Hint 2 (Algorithmic Guidance)</h4>
                                <p style={{ color: "#e2e8f0", margin: 0 }}>{analysisHints[1]}</p>
                            </div>
                        )}

                        {/* LEVEL 4: HINT 3 */}
                        {helpLevel >= 4 && analysisHints[2] && (
                            <div className="help-section" style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px", borderRadius: "8px", margin: "12px 0" }}>
                                <h4 style={{ color: "#38bdf8", margin: "0 0 8px 0" }}>💡 Level 4: Hint 3 (Implementation Guidance)</h4>
                                <p style={{ color: "#e2e8f0", margin: 0 }}>{analysisHints[2]}</p>
                            </div>
                        )}

                        {/* LEVEL 5: OPTIMIZED APPROACH */}
                        {helpLevel >= 5 && (
                            <div className="help-section" style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px", borderRadius: "8px", margin: "12px 0" }}>
                                <h4 style={{ color: "#a855f7", margin: "0 0 8px 0" }}>⚡ Level 5: Optimized Approach Direction</h4>
                                <p style={{ color: "#e2e8f0", margin: 0 }}>
                                    {analysis.optimization || "Aim for optimal single-pass or logarithmic complexity."}
                                </p>
                            </div>
                        )}

                        {/* LEVEL 6: DETAILED EXPLANATION */}
                        {helpLevel >= 6 && (
                            <div className="help-section" style={{ background: "rgba(30, 41, 59, 0.5)", padding: "16px", borderRadius: "8px", margin: "12px 0" }}>
                                <h4 style={{ color: "#34d399", margin: "0 0 8px 0" }}>📖 Level 6: Detailed Step-by-Step Explanation</h4>
                                <p style={{ color: "#e2e8f0", margin: 0, whiteSpace: "pre-wrap" }}>
                                    {analysis.explanation || "Detailed step-by-step reasoning."}
                                </p>
                            </div>
                        )}

                        {/* LEVEL 7: FULL REFERENCE SOLUTION */}
                        {helpLevel >= 7 && (
                            <div className="help-section" style={{ background: "rgba(15, 23, 42, 0.9)", border: "1px solid #10b981", padding: "18px", borderRadius: "8px", margin: "12px 0" }}>
                                <h4 style={{ color: "#4ade80", margin: "0 0 8px 0" }}>🏆 Level 7: Reference C++ Solution</h4>
                                <pre style={{ color: "#a7f3d0", fontFamily: "'Fira Code', monospace", fontSize: "13px", overflowX: "auto", margin: 0 }}>
                                    {analysis.reference_solution || `// Reference Solution for ${problem?.title || "Problem"}
// Time Complexity: ${problem?.expected_time || "Optimal"}
// Space Complexity: ${problem?.expected_space || "Optimal"}

class Solution {
public:
    // Optimal implementation
};`}
                                </pre>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </section>
    );
}

export default AnalyzeCode;