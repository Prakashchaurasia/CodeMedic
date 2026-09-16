import { useState } from "react";
import { supabase } from "../lib/supabase";

function GeneratePractice() {

    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [pattern, setPattern] = useState("");
    const [dataStructure, setDataStructure] = useState("");
    const [complexity, setComplexity] = useState("");

    const [generatedProblem, setGeneratedProblem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleGenerate() {

        if (!topic || !difficulty) {
            setError("Please select Topic and Difficulty.");
            return;
        }

        setLoading(true);
        setError("");
        setGeneratedProblem(null);

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

        const { data, error } =
            await supabase.functions.invoke(
                "generate-problem",
                {
                    body: requirements
                }
            );

        if (error) {

            console.error(
                "Problem generation error:",
                error
            );

            setError(
                "Unable to generate problem. Please try again."
            );

            setLoading(false);
            return;
        }

        console.log(
            "Generated problem received:",
            data
        );

        if (!data?.success || !data?.problem) {

            setError(
                data?.error ||
                "Problem generation failed."
            );

            setLoading(false);
            return;
        }

        setGeneratedProblem(data.problem);
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
                            CodeMedic AI is preparing a
                            problem based on your requirements.
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
                                    Try solving this problem
                                    yourself before asking CodeMedic
                                    for help.
                                </p>

                            </div>

                            <button>
                                Start Coding →
                            </button>

                        </div>

                    </div>

                )}

            </main>

        </section>
    );
}

export default GeneratePractice;