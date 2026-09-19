import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function Progress({ onOpenProblem }) {
    const [attempts, setAttempts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedAttemptId, setExpandedAttemptId] = useState(null);

    async function loadHistory() {
        setLoading(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const userId = session?.user?.id;
            if (!userId) return;

            const { data, error } = await supabase
                .from("problem_attempts")
                .select(`
                    id,
                    problem_id,
                    status,
                    language,
                    submitted_code,
                    created_at,
                    problems (
                        id,
                        title,
                        topic,
                        difficulty,
                        description,
                        is_generated
                    ),
                    code_analyses (
                        correctness,
                        approach,
                        time_complexity,
                        space_complexity,
                        weakness,
                        explanation,
                        optimization
                    )
                `)
                .eq("user_id", userId)
                .order("created_at", { ascending: false });

            if (error) throw error;
            setAttempts(data || []);
        } catch (err) {
            console.error("Failed to load progress history:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadHistory();
    }, []);

    function toggleExpand(id) {
        setExpandedAttemptId(expandedAttemptId === id ? null : id);
    }

    function renderStatusBadge(status) {
        const s = (status || "").trim();
        switch (s) {
            case "Accepted":
                return <span style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>✓ Accepted</span>;
            case "Wrong Answer":
                return <span style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>✗ Wrong Answer</span>;
            case "Compilation Error":
                return <span style={{ background: "rgba(245, 158, 11, 0.15)", color: "#fbbf24", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>⚠ Compilation Error</span>;
            case "Runtime Error":
                return <span style={{ background: "rgba(239, 68, 68, 0.2)", color: "#ef4444", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>💥 Runtime Error</span>;
            case "Time Limit Exceeded":
                return <span style={{ background: "rgba(249, 115, 22, 0.15)", color: "#fb923c", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>⏱ Time Limit Exceeded</span>;
            case "Memory Limit Exceeded":
                return <span style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>💾 Memory Limit Exceeded</span>;
            case "Execution Error":
                return <span style={{ background: "rgba(100, 116, 139, 0.2)", color: "#94a3b8", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>⚙ Execution Error</span>;
            case "Solved":
            case "solved":
                return <span style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>✓ Solved</span>;
            default:
                return <span style={{ background: "rgba(148, 163, 184, 0.15)", color: "#94a3b8", padding: "3px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>{status || "Attempted"}</span>;
        }
    }

    if (loading) {
        return (
            <div className="dashboard-loading" style={{ padding: "60px", textAlign: "center" }}>
                <div className="loading-spinner"></div>
                <h2>Loading your learning history...</h2>
            </div>
        );
    }

    return (
        <section className="progress-history-page" style={{ padding: "20px 0" }}>
            <div style={{ marginBottom: "28px" }}>
                <p className="section-label" style={{ color: "#38bdf8", fontWeight: "700" }}>
                    LEARNING LOG
                </p>
                <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#fff", margin: "4px 0 8px 0" }}>
                    Submission History & Progress
                </h1>
                <p style={{ color: "#94a3b8", fontSize: "15px" }}>
                    Revisit past problem attempts, review previous AI diagnoses, and track your approach evolution over time.
                </p>
            </div>

            {attempts.length === 0 ? (
                <div style={{ padding: "60px 20px", textAlign: "center", background: "rgba(30, 41, 59, 0.4)", borderRadius: "12px" }}>
                    <div style={{ fontSize: "36px", marginBottom: "12px" }}>📝</div>
                    <h3 style={{ color: "#fff" }}>No coding submissions yet</h3>
                    <p style={{ color: "#94a3b8" }}>
                        Submit your code in Analyze Code to see your attempts and diagnoses recorded here.
                    </p>
                </div>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {attempts.map((att) => {
                        const problem = att.problems || { title: "Unknown Problem", topic: "DSA", difficulty: "Easy" };
                        const analysis = Array.isArray(att.code_analyses) ? att.code_analyses[0] : att.code_analyses;
                        const isSolved = att.status?.toLowerCase() === "solved" || att.status?.toLowerCase() === "accepted";
                        const isExpanded = expandedAttemptId === att.id;

                        const dateStr = new Date(att.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        });

                        return (
                            <div
                                key={att.id}
                                style={{
                                    background: "rgba(30, 41, 59, 0.6)",
                                    border: `1px solid ${isSolved ? "rgba(34, 197, 94, 0.2)" : "rgba(255, 255, 255, 0.08)"}`,
                                    borderRadius: "10px",
                                    padding: "20px"
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                                    <div>
                                        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px" }}>
                                            {renderStatusBadge(att.status)}
                                            <span className="topic-badge">{problem.topic}</span>
                                            <span className={`difficulty-tag ${(problem.difficulty || "").toLowerCase()}`}>
                                                {problem.difficulty}
                                            </span>
                                            {problem.is_generated && (
                                                <span style={{ fontSize: "11px", color: "#c084fc" }}>✦ Generated</span>
                                            )}
                                        </div>

                                        <h3 style={{ color: "#fff", margin: "4px 0", fontSize: "18px" }}>
                                            {problem.title}
                                        </h3>
                                        <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                                            Submitted {dateStr} • {att.language || "C++"}
                                        </span>
                                    </div>

                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <button
                                            onClick={() => toggleExpand(att.id)}
                                            style={{
                                                background: "rgba(255, 255, 255, 0.08)",
                                                color: "#cbd5e1",
                                                border: "none",
                                                borderRadius: "6px",
                                                padding: "8px 14px",
                                                fontSize: "13px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            {isExpanded ? "Hide Details" : "View Code & Analysis"}
                                        </button>

                                        {onOpenProblem && (
                                            <button
                                                onClick={() => onOpenProblem(problem)}
                                                style={{
                                                    background: "rgba(59, 130, 246, 0.2)",
                                                    color: "#60a5fa",
                                                    border: "1px solid #3b82f6",
                                                    borderRadius: "6px",
                                                    padding: "8px 14px",
                                                    fontSize: "13px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Re-open in Editor →
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Expanded Code & AI Analysis */}
                                {isExpanded && (
                                    <div style={{ marginTop: "18px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "16px" }}>
                                        {analysis && (
                                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "16px" }}>
                                                <div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "10px", borderRadius: "6px" }}>
                                                    <span style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" }}>Approach</span>
                                                    <div style={{ color: "#f8fafc", fontSize: "13px", fontWeight: "600" }}>{analysis.approach || "Standard"}</div>
                                                </div>
                                                <div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "10px", borderRadius: "6px" }}>
                                                    <span style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" }}>Time Complexity</span>
                                                    <div style={{ color: "#60a5fa", fontSize: "13px", fontWeight: "600" }}>{analysis.time_complexity || "O(n)"}</div>
                                                </div>
                                                <div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "10px", borderRadius: "6px" }}>
                                                    <span style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" }}>Space Complexity</span>
                                                    <div style={{ color: "#34d399", fontSize: "13px", fontWeight: "600" }}>{analysis.space_complexity || "O(1)"}</div>
                                                </div>
                                            </div>
                                        )}

                                        {analysis?.weakness && (
                                            <div style={{ background: "rgba(245, 158, 11, 0.1)", borderLeft: "3px solid #f59e0b", padding: "10px 14px", borderRadius: "0 6px 6px 0", marginBottom: "14px", fontSize: "13px", color: "#fef3c7" }}>
                                                <strong>Noted Weakness:</strong> {analysis.weakness}
                                            </div>
                                        )}

                                        <div>
                                            <strong style={{ color: "#94a3b8", fontSize: "12px", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                                                Submitted Solution
                                            </strong>
                                            <pre
                                                style={{
                                                    background: "rgba(15, 23, 42, 0.9)",
                                                    padding: "14px",
                                                    borderRadius: "8px",
                                                    color: "#e2e8f0",
                                                    fontFamily: "'Fira Code', monospace",
                                                    fontSize: "13px",
                                                    overflowX: "auto",
                                                    margin: 0
                                                }}
                                            >
                                                {att.submitted_code}
                                            </pre>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default Progress;
