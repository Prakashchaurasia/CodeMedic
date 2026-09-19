import { useState } from "react";

function ProblemDetails({ problem, onBack, onAnalyze }) {
    const [revealedHint, setRevealedHint] = useState(-1);

    if (!problem) return null;

    const patterns = Array.isArray(problem.patterns)
        ? problem.patterns
        : (problem.pattern ? [problem.pattern] : []);

    const dataStructures = Array.isArray(problem.data_structures)
        ? problem.data_structures
        : (problem.dataStructure ? [problem.dataStructure] : []);

    const examples = Array.isArray(problem.examples)
        ? problem.examples
        : [];

    const hints = Array.isArray(problem.hints)
        ? problem.hints
        : [];

    return (
        <section className="problem-details">
            <button className="back-button" onClick={onBack}>
                ← Back to Problems
            </button>

            <div className="problem-details-card" style={{ maxWidth: "900px", margin: "0 auto", padding: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                    <div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
                            <span className="topic-badge">{problem.topic || "General DSA"}</span>
                            <span className={`difficulty-tag ${(problem.difficulty || "medium").toLowerCase()}`}>
                                {problem.difficulty || "Medium"}
                            </span>
                            {problem.is_generated && (
                                <span className="source-tag" style={{ background: "rgba(168, 85, 247, 0.2)", color: "#c084fc", padding: "4px 8px", borderRadius: "6px", fontSize: "12px" }}>
                                    ✦ Gemini Generated
                                </span>
                            )}
                        </div>
                        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#fff", margin: "0 0 8px 0" }}>
                            {problem.title}
                        </h1>
                    </div>

                    <button
                        className="start-coding-btn"
                        style={{
                            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                            color: "#fff",
                            padding: "12px 24px",
                            borderRadius: "8px",
                            border: "none",
                            fontWeight: "600",
                            cursor: "pointer",
                            boxShadow: "0 4px 14px rgba(37, 99, 235, 0.4)"
                        }}
                        onClick={() => onAnalyze(problem)}
                    >
                        Start Coding →
                    </button>
                </div>

                {/* Problem Description */}
                <div style={{ margin: "24px 0", lineHeight: "1.7", color: "#e2e8f0" }}>
                    <h3 style={{ color: "#94a3b8", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                        Problem Statement
                    </h3>
                    <p style={{ whiteSpace: "pre-wrap" }}>{problem.description}</p>
                </div>

                {/* Examples */}
                {examples.length > 0 && (
                    <div style={{ margin: "28px 0" }}>
                        <h3 style={{ color: "#94a3b8", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                            Examples
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            {examples.map((ex, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: "rgba(30, 41, 59, 0.6)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        borderRadius: "8px",
                                        padding: "16px"
                                    }}
                                >
                                    <strong style={{ color: "#38bdf8", display: "block", marginBottom: "6px" }}>
                                        Example {idx + 1}
                                    </strong>
                                    <div style={{ fontSize: "14px", fontFamily: "monospace", color: "#f8fafc", marginBottom: "4px" }}>
                                        <strong>Input:</strong> {ex.input}
                                    </div>
                                    <div style={{ fontSize: "14px", fontFamily: "monospace", color: "#4ade80", marginBottom: "6px" }}>
                                        <strong>Output:</strong> {ex.output}
                                    </div>
                                    {ex.explanation && (
                                        <div style={{ fontSize: "13px", color: "#94a3b8" }}>
                                            <strong>Explanation:</strong> {ex.explanation}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Constraints */}
                {problem.constraints && (
                    <div style={{ margin: "24px 0" }}>
                        <h3 style={{ color: "#94a3b8", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                            Constraints
                        </h3>
                        <pre style={{
                            background: "rgba(15, 23, 42, 0.6)",
                            padding: "14px",
                            borderRadius: "8px",
                            color: "#cbd5e1",
                            fontSize: "13px",
                            fontFamily: "monospace",
                            whiteSpace: "pre-wrap"
                        }}>
                            {problem.constraints}
                        </pre>
                    </div>
                )}

                {/* Input & Output Format */}
                {(problem.input_format || problem.output_format) && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "24px 0" }}>
                        {problem.input_format && (
                            <div style={{ background: "rgba(30, 41, 59, 0.4)", padding: "14px", borderRadius: "8px" }}>
                                <strong style={{ color: "#94a3b8", fontSize: "12px", textTransform: "uppercase" }}>Input Format</strong>
                                <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#f1f5f9" }}>{problem.input_format}</p>
                            </div>
                        )}
                        {problem.output_format && (
                            <div style={{ background: "rgba(30, 41, 59, 0.4)", padding: "14px", borderRadius: "8px" }}>
                                <strong style={{ color: "#94a3b8", fontSize: "12px", textTransform: "uppercase" }}>Output Format</strong>
                                <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#f1f5f9" }}>{problem.output_format}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Pre-coding Progressive Hints */}
                {hints.length > 0 && (
                    <div style={{ margin: "28px 0" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                            <h3 style={{ color: "#94a3b8", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                Progressive Hints ({revealedHint + 1}/{hints.length})
                            </h3>
                            {revealedHint < hints.length - 1 && (
                                <button
                                    onClick={() => setRevealedHint(revealedHint + 1)}
                                    style={{
                                        background: "transparent",
                                        border: "1px solid #3b82f6",
                                        color: "#60a5fa",
                                        padding: "6px 14px",
                                        borderRadius: "6px",
                                        fontSize: "13px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Reveal Hint {revealedHint + 2}
                                </button>
                            )}
                        </div>

                        {revealedHint >= 0 && (
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                {hints.slice(0, revealedHint + 1).map((hint, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            background: "rgba(59, 130, 246, 0.1)",
                                            borderLeft: "4px solid #3b82f6",
                                            padding: "12px 16px",
                                            borderRadius: "0 8px 8px 0",
                                            color: "#dbeafe",
                                            fontSize: "14px"
                                        }}
                                    >
                                        <strong style={{ color: "#60a5fa", marginRight: "8px" }}>Hint {idx + 1}:</strong>
                                        {hint}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Learning Objective */}
                {problem.learning_objective && (
                    <div style={{
                        marginTop: "24px",
                        background: "rgba(16, 185, 129, 0.08)",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        borderRadius: "8px",
                        padding: "16px"
                    }}>
                        <strong style={{ color: "#34d399", display: "block", marginBottom: "4px", fontSize: "13px", textTransform: "uppercase" }}>
                            ✦ Learning Objective
                        </strong>
                        <p style={{ margin: 0, color: "#a7f3d0", fontSize: "14px" }}>
                            {problem.learning_objective}
                        </p>
                    </div>
                )}

                {/* Bottom CTA */}
                <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
                    <button
                        className="start-coding-btn"
                        style={{
                            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                            color: "#fff",
                            padding: "14px 28px",
                            borderRadius: "8px",
                            border: "none",
                            fontWeight: "600",
                            fontSize: "15px",
                            cursor: "pointer",
                            boxShadow: "0 4px 14px rgba(37, 99, 235, 0.4)"
                        }}
                        onClick={() => onAnalyze(problem)}
                    >
                        Solve in Analyze Code →
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProblemDetails;