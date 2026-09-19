import { useState } from "react";
import { supabase } from "../lib/supabase";

function GeneratePractice({ onStartCoding }) {

    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [pattern, setPattern] = useState("");
    const [dataStructure, setDataStructure] = useState("");
    const [complexity, setComplexity] = useState("");

    const [generatedProblem, setGeneratedProblem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    /*
     * STEP 29
     *
     * Status of hidden test-case generation.
     *
     * We keep this separate from the main loading state
     * so the UI can tell the user that the problem has been
     * created and its hidden tests are now being prepared.
     */

    const [testCaseStatus, setTestCaseStatus] = useState("");
    const [testCaseCount, setTestCaseCount] = useState(0);


    async function handleGenerate() {

        if (!topic || !difficulty) {
            setError("Please select Topic and Difficulty.");
            return;
        }

        setLoading(true);
        setError("");
        setGeneratedProblem(null);

        setTestCaseStatus("");
        setTestCaseCount(0);


        /*
         * ============================================================
         * STEP 1
         * Get the currently logged-in user's session.
         * ============================================================
         *
         * We need the access token because both Edge Functions
         * require an authenticated user.
         */

        const {
            data: { session },
            error: sessionError
        } = await supabase.auth.getSession();


        if (sessionError || !session) {

            console.error(
                "Session error:",
                sessionError
            );

            setError(
                "Your login session has expired. Please log in again."
            );

            setLoading(false);
            return;
        }


        /*
         * ============================================================
         * STEP 2
         * Prepare problem-generation requirements.
         * ============================================================
         */

        const requirements = {
            topic,
            difficulty,
            pattern,
            dataStructure,
            complexity
        };


        console.log(
            "Sending problem generation request:",
            requirements
        );


        /*
         * ============================================================
         * STEP 3
         * Generate the problem.
         * ============================================================
         *
         * The Edge Function:
         *
         * Gemini
         *    ↓
         * Generate problem
         *    ↓
         * Save problem in Supabase
         *    ↓
         * Return the saved problem
         *
         * IMPORTANT:
         *
         * data.problem.id is the REAL database UUID.
         */

        const {
            data,
            error: functionError
        } = await supabase.functions.invoke(
            "generate-problem",
            {
                body: requirements,

                headers: {
                    Authorization:
                        `Bearer ${session.access_token}`
                }
            }
        );


        /*
         * ============================================================
         * STEP 4
         * Check problem-generation error.
         * ============================================================
         */

        if (functionError) {

            console.error(
                "Problem generation error:",
                functionError
            );

            setError(
                functionError.message ||
                "Unable to generate problem. Please try again."
            );

            setLoading(false);
            return;
        }


        console.log(
            "Generated problem received:",
            data
        );


        console.log(
            "Generated hints:",
            data?.problem?.hints
        );


        /*
         * ============================================================
         * STEP 5
         * Validate generated problem.
         * ============================================================
         */

        if (!data?.success || !data?.problem) {

            setError(
                data?.error ||
                "Problem generation failed."
            );

            setLoading(false);
            return;
        }


        /*
         * ============================================================
         * STEP 6
         * Get the REAL problem ID.
         * ============================================================
         *
         * This is the most important part of Step 29.
         *
         * We DO NOT use a hardcoded problem ID.
         *
         * Every generated problem receives its own UUID.
         */

        const problemId = data.problem.id;


        if (!problemId) {

            console.error(
                "Generated problem does not contain an ID:",
                data.problem
            );

            setError(
                "Problem was generated, but its database ID is missing."
            );

            setLoading(false);
            return;
        }


        console.log(
            "New generated problem ID:",
            problemId
        );


        /*
         * Display the generated problem immediately.
         */

        setGeneratedProblem(data.problem);


        /*
         * ============================================================
         * STEP 29
         * Generate 55 hidden test cases for THIS problem.
         * ============================================================
         *
         * The important relationship is:
         *
         * generatedProblem.id
         *          ↓
         *      problemId
         *          ↓
         * generate-test-cases
         *          ↓
         * Gemini generates tests for THIS problem
         *          ↓
         * problem_test_cases
         *
         * Therefore:
         *
         * Problem A → its own 55 tests
         * Problem B → its own 55 tests
         * Problem C → its own 55 tests
         *
         * No test cases are shared between problems.
         */

        setTestCaseStatus(
            "Generating 55 hidden test cases..."
        );


        console.log(
            "STEP 29: Generating hidden tests for problem:",
            problemId
        );


        const {
            data: testCaseData,
            error: testCaseError
        } = await supabase.functions.invoke(
            "generate-test-cases",
            {
                body: {
                    problemId: problemId
                },

                headers: {
                    Authorization:
                        `Bearer ${session.access_token}`
                }
            }
        );


        /*
         * ============================================================
         * STEP 29A
         * Check test-case generation error.
         * ============================================================
         */

        if (testCaseError) {

            console.error(
                "Test case generation error:",
                testCaseError
            );


            /*
             * The problem itself was successfully generated.
             *
             * But its hidden tests failed to generate.
             *
             * We therefore DO NOT pretend that the problem
             * is ready for execution.
             */

            setTestCaseStatus(
                "Problem created, but hidden test generation failed."
            );


            setError(
                "Problem was generated successfully, but its hidden test cases could not be created. Please try again."
            );


            setLoading(false);
            return;
        }


        console.log(
            "Test case generation response:",
            testCaseData
        );


        /*
         * ============================================================
         * STEP 29B
         * Validate test-case generation response.
         * ============================================================
         */

        if (
            !testCaseData?.success ||
            !testCaseData?.testCount
        ) {

            console.error(
                "Invalid test-case generation response:",
                testCaseData
            );


            setTestCaseStatus(
                "Hidden test generation failed."
            );


            setError(
                testCaseData?.error ||
                "Problem was generated, but hidden test cases were not created."
            );


            setLoading(false);
            return;
        }


        /*
         * ============================================================
         * STEP 29C
         * Success!
         * ============================================================
         */

        console.log(
            "Hidden test cases generated successfully."
        );


        console.log(
            "Problem ID:",
            problemId
        );


        console.log(
            "Test count:",
            testCaseData.testCount
        );


        setTestCaseCount(
            testCaseData.testCount
        );


        setTestCaseStatus(
            `✓ ${testCaseData.testCount} hidden test cases ready`
        );


        /*
         * The entire generation process is now complete.
         */

        setLoading(false);
    }


    return (
        <section className="generate-workspace">

            {/* LEFT CONTROL PANEL */}

            <aside className="generator-panel">

                <div className="generator-heading">

                    <div className="generator-icon">
                        ✨
                    </div>

                    <div>
                        <h2>
                            Generate <span>& Practice</span>
                        </h2>

                        <p>
                            Tell us what you want to practice
                            and CodeMedic will create a
                            unique problem for you.
                        </p>
                    </div>

                </div>


                <div className="generator-form">

                    {/* TOPIC */}

                    <div className="generator-field">

                        <label>
                            Topic
                        </label>

                        <select
                            value={topic}
                            onChange={(event) =>
                                setTopic(event.target.value)
                            }
                        >

                            <option value="">
                                Select Topic
                            </option>

                            <option value="Arrays">
                                Arrays
                            </option>

                            <option value="Strings">
                                Strings
                            </option>

                            <option value="Linked List">
                                Linked List
                            </option>

                            <option value="Stack">
                                Stack
                            </option>

                            <option value="Queue">
                                Queue
                            </option>

                            <option value="Binary Search">
                                Binary Search
                            </option>

                            <option value="Trees">
                                Trees
                            </option>

                            <option value="Graphs">
                                Graphs
                            </option>

                            <option value="Greedy">
                                Greedy
                            </option>

                            <option value="Dynamic Programming">
                                Dynamic Programming
                            </option>

                        </select>

                    </div>


                    {/* DIFFICULTY */}

                    <div className="generator-field">

                        <label>
                            Difficulty
                        </label>

                        <select
                            value={difficulty}
                            onChange={(event) =>
                                setDifficulty(event.target.value)
                            }
                        >

                            <option value="">
                                Select Difficulty
                            </option>

                            <option value="Easy">
                                Easy
                            </option>

                            <option value="Medium">
                                Medium
                            </option>

                            <option value="Hard">
                                Hard
                            </option>

                        </select>

                    </div>


                    {/* PATTERN */}

                    <div className="generator-field">

                        <label>
                            Pattern
                        </label>

                        <select
                            value={pattern}
                            onChange={(event) =>
                                setPattern(event.target.value)
                            }
                        >

                            <option value="">
                                Select Pattern
                            </option>

                            <option value="Hashing">
                                Hashing
                            </option>

                            <option value="Two Pointer">
                                Two Pointer
                            </option>

                            <option value="Sliding Window">
                                Sliding Window
                            </option>

                            <option value="Binary Search">
                                Binary Search
                            </option>

                            <option value="Recursion">
                                Recursion
                            </option>

                            <option value="Backtracking">
                                Backtracking
                            </option>

                            <option value="Greedy">
                                Greedy
                            </option>

                            <option value="Dynamic Programming">
                                Dynamic Programming
                            </option>

                            <option value="BFS">
                                BFS
                            </option>

                            <option value="DFS">
                                DFS
                            </option>

                        </select>

                    </div>


                    {/* DATA STRUCTURE */}

                    <div className="generator-field">

                        <label>
                            Data Structure
                        </label>

                        <select
                            value={dataStructure}
                            onChange={(event) =>
                                setDataStructure(event.target.value)
                            }
                        >

                            <option value="">
                                Select Data Structure
                            </option>

                            <option value="Array">
                                Array
                            </option>

                            <option value="Hash Map">
                                Hash Map
                            </option>

                            <option value="Hash Set">
                                Hash Set
                            </option>

                            <option value="Stack">
                                Stack
                            </option>

                            <option value="Queue">
                                Queue
                            </option>

                            <option value="Linked List">
                                Linked List
                            </option>

                            <option value="Tree">
                                Tree
                            </option>

                            <option value="Heap">
                                Heap
                            </option>

                            <option value="Graph">
                                Graph
                            </option>

                        </select>

                    </div>


                    {/* COMPLEXITY */}

                    <div className="generator-field">

                        <label>
                            Expected Time Complexity
                        </label>

                        <select
                            value={complexity}
                            onChange={(event) =>
                                setComplexity(event.target.value)
                            }
                        >

                            <option value="">
                                Select Complexity
                            </option>

                            <option value="O(1)">
                                O(1)
                            </option>

                            <option value="O(log n)">
                                O(log n)
                            </option>

                            <option value="O(n)">
                                O(n)
                            </option>

                            <option value="O(n log n)">
                                O(n log n)
                            </option>

                            <option value="O(n²)">
                                O(n²)
                            </option>

                        </select>

                    </div>


                    {/* GENERATE BUTTON */}

                    <button
                        className="generate-problem-btn"
                        onClick={handleGenerate}
                        disabled={loading}
                    >

                        {loading
                            ? "Generating..."
                            : "✨ Generate Problem"
                        }

                    </button>

                </div>


                {/* SMALL INFO CARD */}

                <div className="generator-info">

                    <div className="info-icon">
                        💡
                    </div>

                    <div>

                        <h4>
                            Personalized Practice
                        </h4>

                        <p>
                            Generate original problems
                            based on your selected topic,
                            pattern and difficulty.
                        </p>

                        <div className="info-points">

                            <span>
                                ✓ Original problems
                            </span>

                            <span>
                                ✓ Focused practice
                            </span>

                            <span>
                                ✓ Matches your requirements
                            </span>

                        </div>

                    </div>

                </div>


                {/* STEP 29 STATUS */}

                {testCaseStatus && (

                    <div
                        className="generator-info"
                        style={{
                            marginTop: "20px"
                        }}
                    >

                        <div className="info-icon">
                            🧪
                        </div>

                        <div>

                            <h4>
                                Hidden Tests
                            </h4>

                            <p>
                                {testCaseStatus}
                            </p>

                            {testCaseCount > 0 && (

                                <p
                                    style={{
                                        marginTop: "8px"
                                    }}
                                >
                                    🔒 These tests remain hidden
                                    from the student.
                                </p>

                            )}

                        </div>

                    </div>

                )}

            </aside>


            {/* RIGHT PROBLEM AREA */}

            <main className="problem-workspace">

                {!generatedProblem && !loading && (

                    <div className="empty-problem-state">

                        <div className="empty-icon">
                            ✨
                        </div>

                        <h2>
                            Your problem will appear here
                        </h2>

                        <p>
                            Select your requirements and
                            generate a problem to start practicing.
                        </p>

                    </div>

                )}


                {loading && (

                    <div className="empty-problem-state">

                        <div className="loading-spinner">
                            ⟳
                        </div>

                        <h2>
                            Creating your problem...
                        </h2>

                        <p>
                            CodeMedic is preparing your problem
                            and its hidden test cases.
                        </p>

                    </div>

                )}


                {error && (

                    <div className="generation-error">
                        {error}
                    </div>

                )}


                {generatedProblem && (

                    <div className="generated-problem-container">

                        {/* PROBLEM HEADER */}

                        <div className="problem-top">

                            <div>

                                <div className="generated-label">
                                    ✨ GENERATED PROBLEM
                                </div>

                                <h1>
                                    {generatedProblem.title}
                                </h1>

                                <div className="problem-tags">

                                    <span>
                                        📘 {generatedProblem.topic}
                                    </span>

                                    <span>
                                        🎯 {generatedProblem.pattern}
                                    </span>

                                    <span>
                                        🗂 {generatedProblem.dataStructure}
                                    </span>

                                    <span>
                                        ◉ {generatedProblem.expectedTime}
                                    </span>

                                </div>

                            </div>


                            <div className="difficulty-badge">
                                {generatedProblem.difficulty}
                            </div>

                        </div>


                        {/* PROBLEM STATEMENT */}

                        <div className="problem-section">

                            <h2>
                                📄 Problem Statement
                            </h2>

                            <p className="problem-description">
                                {generatedProblem.description}
                            </p>

                        </div>


                        {/* INFORMATION GRID */}

                        <div className="problem-info-grid">

                            <div className="problem-info-card">

                                <h3>
                                    ⚙ Constraints
                                </h3>

                                <p>
                                    {generatedProblem.constraints}
                                </p>

                            </div>


                            <div className="problem-info-card">

                                <h3>
                                    💻 Input Format
                                </h3>

                                <p>
                                    {generatedProblem.inputFormat}
                                </p>

                            </div>


                            <div className="problem-info-card">

                                <h3>
                                    📤 Output Format
                                </h3>

                                <p>
                                    {generatedProblem.outputFormat}
                                </p>

                            </div>


                            <div className="problem-info-card">

                                <h3>
                                    🧠 Learning Objective
                                </h3>

                                <p>
                                    {generatedProblem.learningObjective}
                                </p>

                            </div>

                        </div>


                        {/* EXAMPLES */}

                        <div className="examples-section">

                            <h2>
                                🧪 Examples
                            </h2>

                            <div className="examples-grid">

                                {generatedProblem.examples?.map(
                                    (example, index) => (

                                        <div
                                            className="example-card"
                                            key={index}
                                        >

                                            <div className="example-header">

                                                <span>
                                                    Example {index + 1}
                                                </span>

                                                <button>
                                                    Copy
                                                </button>

                                            </div>

                                            <div className="example-code">

                                                <strong>
                                                    Input:
                                                </strong>

                                                <pre>
                                                    {example.input}
                                                </pre>


                                                <strong>
                                                    Output:
                                                </strong>

                                                <pre>
                                                    {example.output}
                                                </pre>

                                            </div>


                                            <p className="example-explanation">

                                                <strong>
                                                    Explanation:
                                                </strong>{" "}

                                                {example.explanation}

                                            </p>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>


                        {/* START SOLVING */}

                        <div className="start-solving">

                            <div>

                                <h3>
                                    Ready to solve?
                                </h3>

                                <p>
                                    {testCaseCount > 0
                                        ? `Your problem is ready with ${testCaseCount} hidden test cases.`
                                        : "Try solving this problem yourself before asking CodeMedic for help."
                                    }
                                </p>

                            </div>


                            <button
                                onClick={() =>
                                    onStartCoding(generatedProblem)
                                }
                                disabled={testCaseCount === 0}
                                title={
                                    testCaseCount === 0
                                        ? "Hidden test cases are still being prepared."
                                        : "Start coding"
                                }
                            >
                                {testCaseCount > 0
                                    ? "Start Coding →"
                                    : "Preparing Tests..."
                                }
                            </button>

                        </div>

                    </div>

                )}

            </main>

        </section>
    );
}

export default GeneratePractice;