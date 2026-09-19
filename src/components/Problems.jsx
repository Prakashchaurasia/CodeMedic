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

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(25);

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

    // Reset pagination to page 1 whenever any filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search, topic, difficulty, pattern, dataStructure, origin, pageSize]);

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

        const probTopic = (problem.topic || "").toLowerCase();
        const selectedTopic = topic.toLowerCase();
        let matchesTopic = topic === "All" || probTopic === selectedTopic;
        if (!matchesTopic && topic !== "All") {
            if (selectedTopic === "linked list" || selectedTopic === "linked lists") {
                matchesTopic = probTopic.includes("linked list");
            } else if (selectedTopic === "trees" || selectedTopic === "trees & bst") {
                matchesTopic = probTopic.includes("tree");
            } else if (selectedTopic === "stacks & queues") {
                matchesTopic = probTopic.includes("stack") || probTopic.includes("queue");
            } else if (selectedTopic === "recursion & backtracking") {
                matchesTopic = probTopic.includes("recursion") || probTopic.includes("backtrack");
            } else if (selectedTopic === "two pointers") {
                matchesTopic = probTopic.includes("pointer");
            }
        }

        const matchesDifficulty =
            difficulty === "All" ||
            problem.difficulty?.toLowerCase() === difficulty.toLowerCase();

        const problemPatterns = Array.isArray(problem.patterns) 
            ? problem.patterns 
            : (problem.pattern ? [problem.pattern] : []);
        const matchesPattern =
            pattern === "All" ||
            problemPatterns.some(p => p.toLowerCase().includes(pattern.toLowerCase()));

        const problemDS = Array.isArray(problem.data_structures)
            ? problem.data_structures
            : (problem.dataStructure ? [problem.dataStructure] : []);
        const matchesDS =
            dataStructure === "All" ||
            problemDS.some(ds => ds.toLowerCase().includes(dataStructure.toLowerCase()));

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

    // Pagination calculations
    const totalPages = Math.max(1, Math.ceil(filteredProblems.length / pageSize));
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredProblems.length);
    const paginatedProblems = filteredProblems.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

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
                    Master algorithmic patterns with interactive thinking diagnosis across {problems.length > 0 ? `${problems.length}+` : "450+"} curated problems.
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
                    <option value="All">All Topics ({problems.length})</option>
                    <option value="Arrays">Arrays</option>
                    <option value="Strings">Strings</option>
                    <option value="Hashing">Hashing</option>
                    <option value="Two Pointers">Two Pointers</option>
                    <option value="Binary Search">Binary Search</option>
                    <option value="Stacks & Queues">Stacks & Queues</option>
                    <option value="Linked Lists">Linked Lists</option>
                    <option value="Trees & BST">Trees & BST</option>
                    <option value="Heaps">Heaps / Priority Queues</option>
                    <option value="Graphs">Graphs</option>
                    <option value="Dynamic Programming">Dynamic Programming</option>
                    <option value="Greedy">Greedy</option>
                    <option value="Bit Manipulation">Bit Manipulation</option>
                    <option value="Recursion & Backtracking">Recursion & Backtracking</option>
                </select>

                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="All">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <select value={pattern} onChange={(e) => setPattern(e.target.value)}>
                    <option value="All">All Patterns</option>
                    <option value="Hashing">Hashing</option>
                    <option value="Two Pointer">Two Pointers</option>
                    <option value="Sliding Window">Sliding Window</option>
                    <option value="Binary Search">Binary Search</option>
                    <option value="Prefix Sum">Prefix Sum</option>
                    <option value="Fast & Slow Pointer">Fast & Slow Pointers</option>
                    <option value="Monotonic Stack">Monotonic Stack</option>
                    <option value="Top K Elements">Top K Elements</option>
                    <option value="BFS">BFS Traversal</option>
                    <option value="DFS">DFS Traversal</option>
                    <option value="Greedy">Greedy Choice</option>
                    <option value="Dynamic Programming">Dynamic Programming</option>
                    <option value="Backtracking">Backtracking</option>
                    <option value="Bit Manipulation">Bit Manipulation</option>
                    <option value="Topological Sort">Topological Sort</option>
                    <option value="Union Find">Union Find</option>
                </select>

                <select value={dataStructure} onChange={(e) => setDataStructure(e.target.value)}>
                    <option value="All">All Data Structures</option>
                    <option value="Array">Array</option>
                    <option value="String">String</option>
                    <option value="Hash Map">Hash Map</option>
                    <option value="Hash Set">Hash Set</option>
                    <option value="Linked List">Linked List</option>
                    <option value="Stack">Stack</option>
                    <option value="Queue">Queue</option>
                    <option value="Heap">Heap / Priority Queue</option>
                    <option value="Binary Tree">Binary Tree</option>
                    <option value="BST">Binary Search Tree</option>
                    <option value="Graph">Graph</option>
                    <option value="Trie">Trie</option>
                </select>

                <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
                    <option value="All">All Sources</option>
                    <option value="Curated">Curated Library</option>
                    <option value="Generated">My Generated Problems</option>
                </select>
            </div>

            {loading && <p style={{ color: "#94a3b8", padding: "20px 0" }}>Loading problems...</p>}

            {error && <p className="auth-error">{error}</p>}

            {!loading && !error && filteredProblems.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px" }}>
                    <p style={{ color: "#94a3b8", fontSize: "16px" }}>No problems found matching your active filters.</p>
                    <button
                        className="retry-button"
                        style={{
                            marginTop: "12px",
                            padding: "8px 16px",
                            background: "#1e293b",
                            color: "#38bdf8",
                            border: "1px solid #334155",
                            borderRadius: "6px",
                            cursor: "pointer"
                        }}
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
                <>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "16px 0 12px 0",
                        color: "#94a3b8",
                        fontSize: "13px",
                        flexWrap: "wrap",
                        gap: "8px"
                    }}>
                        <span>
                            Showing <strong style={{ color: "#e2e8f0" }}>{startIndex + 1}–{endIndex}</strong> of <strong style={{ color: "#e2e8f0" }}>{filteredProblems.length}</strong> problems
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span>Per page:</span>
                            <select
                                value={pageSize}
                                onChange={(e) => setPageSize(Number(e.target.value))}
                                style={{
                                    background: "#0f172a",
                                    color: "#e2e8f0",
                                    border: "1px solid #1e293b",
                                    borderRadius: "4px",
                                    padding: "2px 8px",
                                    fontSize: "12px"
                                }}
                            >
                                <option value={15}>15</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                        </div>
                    </div>

                    <div className="problem-list">
                        {paginatedProblems.map((problem) => (
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

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            marginTop: "28px",
                            marginBottom: "20px",
                            flexWrap: "wrap"
                        }}>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                style={{
                                    padding: "8px 14px",
                                    background: currentPage === 1 ? "#0f172a" : "#1e293b",
                                    color: currentPage === 1 ? "#475569" : "#e2e8f0",
                                    border: "1px solid #334155",
                                    borderRadius: "6px",
                                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                                    fontSize: "13px",
                                    fontWeight: "500"
                                }}
                            >
                                ← Prev
                            </button>

                            {/* Page numbers */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                                .reduce((acc, p, idx, arr) => {
                                    if (idx > 0 && p - arr[idx - 1] > 1) {
                                        acc.push("...");
                                    }
                                    acc.push(p);
                                    return acc;
                                }, [])
                                .map((item, idx) => item === "..." ? (
                                    <span key={`dots-${idx}`} style={{ color: "#64748b", padding: "0 4px" }}>...</span>
                                ) : (
                                    <button
                                        key={`page-${item}`}
                                        onClick={() => handlePageChange(item)}
                                        style={{
                                            padding: "6px 12px",
                                            background: currentPage === item ? "#2563eb" : "#101a2b",
                                            color: currentPage === item ? "#ffffff" : "#cbd5e1",
                                            border: currentPage === item ? "1px solid #3b82f6" : "1px solid #1e293b",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "13px",
                                            fontWeight: currentPage === item ? "700" : "400"
                                        }}
                                    >
                                        {item}
                                    </button>
                                ))
                            }

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                style={{
                                    padding: "8px 14px",
                                    background: currentPage === totalPages ? "#0f172a" : "#1e293b",
                                    color: currentPage === totalPages ? "#475569" : "#e2e8f0",
                                    border: "1px solid #334155",
                                    borderRadius: "6px",
                                    cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                                    fontSize: "13px",
                                    fontWeight: "500"
                                }}
                            >
                                Next →
                            </button>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}

export default Problems;