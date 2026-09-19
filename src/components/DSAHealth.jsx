import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { calculateDSAHealth } from "../services/dsaHealthService";

function DSAHealth({ setPage }) {
    const [healthData, setHealthData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadHealth() {
        setLoading(true);
        setError("");
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const userId = session?.user?.id;
            const data = await calculateDSAHealth(userId);
            setHealthData(data);
        } catch (err) {
            console.error("Failed to load DSA health:", err);
            setError("Unable to compute your DSA health.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadHealth();
    }, []);

    if (loading) {
        return (
            <div className="dashboard-loading" style={{ padding: "60px", textAlign: "center" }}>
                <div className="loading-spinner"></div>
                <h2>Analyzing your DSA thinking health...</h2>
                <p>Synthesizing your attempts, complexity patterns, and reasoning accuracy.</p>
            </div>
        );
    }

    if (error || !healthData) {
        return (
            <div className="dashboard-error" style={{ padding: "40px", textAlign: "center" }}>
                <h2>Unable to load health metrics</h2>
                <p>{error || "Please try again later."}</p>
                <button className="retry-button" onClick={loadHealth}>Retry</button>
            </div>
        );
    }

    const {
        overallScore,
        topicScores,
        strongTopics,
        weakTopics,
        repeatedWeaknesses,
        totalAttempted,
        totalSolved
    } = healthData;

    return (
        <section className="dsa-health-page" style={{ padding: "20px 0" }}>
            {/* Header */}
            <div style={{ marginBottom: "28px" }}>
                <p className="section-label" style={{ color: "#38bdf8", fontWeight: "700", letterSpacing: "1px" }}>
                    DIAGNOSTIC INTELLIGENCE
                </p>
                <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#fff", margin: "4px 0 8px 0" }}>
                    DSA Health & Reasoning Profile
                </h1>
                <p style={{ color: "#94a3b8", fontSize: "15px", maxWidth: "700px" }}>
                    Your DSA Health is not a simple solved count. It reflects how well you identify patterns, understand complexity constraints, and avoid brute-force pitfalls.
                </p>
            </div>

            {/* Overall Score Card + Summary */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "32px" }}>
                {/* Health Index Card */}
                <div
                    style={{
                        background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        padding: "24px",
                        display: "flex",
                        alignItems: "center",
                        gap: "24px"
                    }}
                >
                    <div
                        style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: "50%",
                            background: overallScore >= 70 ? "rgba(34, 197, 94, 0.15)" : (overallScore >= 50 ? "rgba(245, 158, 11, 0.15)" : "rgba(239, 68, 68, 0.15)"),
                            border: `4px solid ${overallScore >= 70 ? "#22c55e" : (overallScore >= 50 ? "#f59e0b" : "#ef4444")}`,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <span style={{ fontSize: "28px", fontWeight: "800", color: "#fff" }}>{overallScore}%</span>
                        <span style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase" }}>Health</span>
                    </div>

                    <div>
                        <span style={{ fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
                            OVERALL DSA HEALTH
                        </span>
                        <h3 style={{ fontSize: "18px", color: "#fff", margin: "4px 0" }}>
                            {overallScore >= 75 ? "Optimal Reasoning" : (overallScore >= 55 ? "Developing Fundamentals" : "Needs Targeted Practice")}
                        </h3>
                        <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
                            Based on {totalAttempted} attempts and {totalSolved} unique solves.
                        </p>
                    </div>
                </div>

                {/* Strong vs Weak Summary */}
                <div
                    style={{
                        background: "rgba(30, 41, 59, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "12px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >
                    <div>
                        <div style={{ marginBottom: "12px" }}>
                            <strong style={{ color: "#4ade80", fontSize: "13px", display: "block", marginBottom: "4px" }}>
                                ✓ Strong Topics
                            </strong>
                            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                {strongTopics.length > 0 ? (
                                    strongTopics.map((t, idx) => (
                                        <span key={idx} className="topic-badge" style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80" }}>
                                            {t}
                                        </span>
                                    ))
                                ) : (
                                    <span style={{ color: "#94a3b8", fontSize: "13px" }}>Solve more problems to identify strengths</span>
                                )}
                            </div>
                        </div>

                        <div>
                            <strong style={{ color: "#f87171", fontSize: "13px", display: "block", marginBottom: "4px" }}>
                                ⚠ Priority Weak Topics
                            </strong>
                            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                {weakTopics.length > 0 ? (
                                    weakTopics.map((t, idx) => (
                                        <span key={idx} className="topic-badge" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171" }}>
                                            {t}
                                        </span>
                                    ))
                                ) : (
                                    <span style={{ color: "#94a3b8", fontSize: "13px" }}>No critical weaknesses detected</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setPage("Revision")}
                        style={{
                            marginTop: "16px",
                            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "10px",
                            fontWeight: "600",
                            fontSize: "13px",
                            cursor: "pointer",
                            width: "100%"
                        }}
                    >
                        Start Targeted Revision on Weak Topics →
                    </button>
                </div>
            </div>

            {/* Repeated Weaknesses & Thinking Gaps */}
            {repeatedWeaknesses.length > 0 && (
                <div
                    style={{
                        background: "rgba(245, 158, 11, 0.08)",
                        border: "1px solid rgba(245, 158, 11, 0.25)",
                        borderRadius: "12px",
                        padding: "20px",
                        marginBottom: "36px"
                    }}
                >
                    <h3 style={{ color: "#fbbf24", margin: "0 0 8px 0", fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span>⚠</span> Detected Thinking Biases & Repeated Mistakes
                    </h3>
                    <p style={{ color: "#e2e8f0", fontSize: "14px", margin: "0 0 14px 0" }}>
                        Instead of only telling you what went wrong on one problem, CodeMedic tracks concepts you repeatedly struggle with across multiple attempts:
                    </p>
                    <ul style={{ margin: 0, paddingLeft: "20px", color: "#fef3c7", fontSize: "14px", lineHeight: "1.8" }}>
                        {repeatedWeaknesses.map((rw, idx) => (
                            <li key={idx}>{rw}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Topic by Topic Health Breakdown */}
            <div>
                <h3 style={{ fontSize: "18px", color: "#fff", marginBottom: "16px" }}>
                    Topic-by-Topic Diagnostic Breakdown
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
                    {topicScores.map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: "rgba(30, 41, 59, 0.5)",
                                border: "1px solid rgba(255, 255, 255, 0.06)",
                                borderRadius: "10px",
                                padding: "18px"
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                                <strong style={{ color: "#f1f5f9", fontSize: "15px" }}>{item.topic}</strong>
                                <span
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: "600",
                                        color: item.status === "Good" ? "#4ade80" : (item.status === "Moderate" ? "#fbbf24" : "#f87171")
                                    }}
                                >
                                    {item.status}
                                </span>
                            </div>

                            <div style={{ height: "8px", background: "rgba(15, 23, 42, 0.8)", borderRadius: "4px", overflow: "hidden", marginBottom: "10px" }}>
                                <div
                                    style={{
                                        width: `${item.score}%`,
                                        height: "100%",
                                        background: item.status === "Good" 
                                            ? "linear-gradient(90deg, #10b981, #34d399)" 
                                            : (item.status === "Moderate" ? "linear-gradient(90deg, #f59e0b, #fbbf24)" : "linear-gradient(90deg, #ef4444, #f87171)")
                                    }}
                                ></div>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#94a3b8" }}>
                                <span>{item.score}% Health</span>
                                <span>{item.solved}/{item.attempted} Solved</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DSAHealth;
