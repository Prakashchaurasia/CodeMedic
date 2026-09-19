import { useEffect, useState } from "react";
import ProblemCard from "./ProblemCard";
import ProblemDetails from "./ProblemDetails";
import { supabase } from "../lib/supabase";
import { getProblemsForUser } from "../services/problemService";

function Problems({ onAnalyze }) {
    const [search, setSearch] = useState("");
    const [topic, setTopic] = useState("All");
    const [difficulty, setDifficulty] = useState("All");
    const [pattern, setPattern] = useState("All");
    const [dataStructure, setDataStructure] = useState("All");
    const [origin, setOrigin] = useState("All");

    const [selectedProblem, setSelectedProblem] = useState(null);
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadProblems() {
        setLoading(true);
        setError("");

        try {
            const { data: { session } } = await supabase.auth.getSession();
            const userId = session?.user?.id;
            const data = await getProblemsForUser(userId);
            setProblems(data);
        } catch (err) {
            console.error("Problems fetch error:", err);
            setError("Unable to load problems. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProblems();
    }, []);

    function changeStatus(id) {
        setProblems(
            problems.map((problem) =>
                problem.id === id
                    ? {
                        ...problem,
                        status: problem.status === "Solved" ? "Not Solved" : "Solved"
                    }
                    : problem
            )
        );
    }

    const filteredProblems = problems.filter((problem) => {
        const matchesSearch = (problem.title || "")
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesTopic =
            topic === "All" ||
            problem.topic?.toLowerCase() === topic.toLowerCase();

        const matchesDifficulty =
            difficulty === "All" ||
            problem.difficulty?.toLowerCase() === difficulty.toLowerCase();

        const problemPatterns = Array.isArray(problem.patterns) 
            ? problem.patterns 
            : (problem.pattern ? [problem.pattern] : []);
        const matchesPattern =
            pattern === "All" ||
            problemPatterns.some(p => p.toLowerCase() === pattern.toLowerCase());

        const problemDS = Array.isArray(problem.data_structures)
            ? problem.data_structures
            : (problem.dataStructure ? [problem.dataStructure] : []);
        const matchesDS =
            dataStructure === "All" ||
            problemDS.some(ds => ds.toLowerCase() === dataStructure.toLowerCase());

        const isGen = problem.is_generated === true;
        const matchesOrigin =
            origin === "All" ||
            (origin === "Curated" && !isGen) ||
            (origin === "Generated" && isGen);

        return (
            matchesSearch &&
            matchesTopic &&
            matchesDifficulty &&
            matchesPattern &&
            matchesDS &&
            matchesOrigin
        );
    });

    if (selectedProblem) {
        const currentProblem = problems.find(
            (p) => p.id === selectedProblem.id
        ) || selectedProblem;

        return (
            <ProblemDetails
                problem={currentProblem}
                onBack={() => setSelectedProblem(null)}
                onAnalyze={onAnalyze}
            />
        );
    }

    return (
        <section className="problems-page">
            <div className="problems-header">
                <h2>DSA Problem Library</h2>
                <p>
                    Master algorithmic patterns with interactive thinking diagnosis.
                </p>
            </div>

            <div className="problem-filters" style={{ flexWrap: "wrap", gap: "12px" }}>
                <input
                    className="problem-search"
                    type="text"
                    placeholder="Search problems by title..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    style={{ minWidth: "220px" }}
                />

                <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                    <option value="All">All Topics</option>
                    <option value="Arrays">Arrays</option>
                    <option value="Strings">Strings</option>
                    <option value="Linked List">Linked List</option>
                    <option value="Binary Search">Binary Search</option>
                    <option value="Dynamic Programming">Dynamic Programming</option>
                    <option value="Trees">Trees</option>
                    <option value="Recursion">Recursion</option>
                </select>

                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="All">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Easy+">Easy+</option>
                    <option value="Medium">Medium</option>
                    <option value="Medium+">Medium+</option>
                    <option value="Hard">Hard</option>
                    <option value="Hard+">Hard+</option>
                </select>

                <select value={pattern} onChange={(e) => setPattern(e.target.value)}>
                    <option value="All">All Patterns</option>
                    <option value="Hashing">Hashing</option>
                    <option value="Two Pointer">Two Pointer</option>
                    <option value="Sliding Window">Sliding Window</option>
                    <option value="Binary Search">Binary Search</option>
                    <option value="Prefix Sum">Prefix Sum</option>
                    <option value="Greedy">Greedy</option>
                    <option value="Dynamic Programming">Dynamic Programming</option>
                    <option value="Recursion">Recursion</option>
                    <option value="DFS">DFS</option>
                    <option value="BFS">BFS</option>
                </select>

                <select value={dataStructure} onChange={(e) => setDataStructure(e.target.value)}>
                    <option value="All">All Data Structures</option>
                    <option value="Array">Array</option>
                    <option value="String">String</option>
                    <option value="Hash Map">Hash Map</option>
                    <option value="Linked List">Linked List</option>
                    <option value="Stack">Stack</option>
                    <option value="Queue">Queue</option>
                    <option value="Tree">Tree</option>
                </select>

                <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
                    <option value="All">All Sources</option>
                    <option value="Curated">Curated Problems</option>
                    <option value="Generated">My Generated Problems</option>
                </select>
            </div>

            {loading && <p>Loading problems...</p>}

            {error && <p className="auth-error">{error}</p>}

            {!loading && !error && filteredProblems.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px" }}>
                    <p>No problems found matching your active filters.</p>
                    <button
                        className="retry-button"
                        style={{ marginTop: "12px" }}
                        onClick={() => {
                            setSearch("");
                            setTopic("All");
                            setDifficulty("All");
                            setPattern("All");
                            setDataStructure("All");
                            setOrigin("All");
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            )}

            {!loading && !error && filteredProblems.length > 0 && (
                <div className="problem-list">
                    {filteredProblems.map((problem) => (
                        <ProblemCard
                            key={problem.id}
                            title={problem.title}
                            topic={problem.topic}
                            difficulty={problem.difficulty}
                            status={problem.status || "Not Solved"}
                            onStatusChange={() => changeStatus(problem.id)}
                            onOpen={() => setSelectedProblem(problem)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Problems;