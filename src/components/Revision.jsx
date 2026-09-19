import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { getRevisionQuestions, recordRevisionAttempt } from "../services/revisionService";
import { calculateDSAHealth } from "../services/dsaHealthService";

function Revision({ setPage }) {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [weakTopics, setWeakTopics] = useState([]);

    async function loadRevision() {
        setLoading(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const userId = session?.user?.id;

            // Fetch current DSA health to detect student's weak topics
            const health = await calculateDSAHealth(userId);
            setWeakTopics(health.weakTopics || []);

            // Fetch revision questions prioritized for those weak topics
            const qList = await getRevisionQuestions(health.weakTopics || []);
            setQuestions(qList);
        } catch (err) {
            console.error("Failed to load revision:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadRevision();
    }, []);

    const currentQuestion = questions[currentIndex];

    async function handleAnswerSubmit() {
        if (!selectedOption || isSubmitted) return;

        const isCorrect = selectedOption === currentQuestion.correct_answer;
        if (isCorrect) {
            setScore(score + 1);
        }
        setIsSubmitted(true);

        const { data: { session } } = await supabase.auth.getSession();
        const userId = session?.user?.id;
        await recordRevisionAttempt(userId, currentQuestion.id, selectedOption, isCorrect);
    }

    function handleNext() {
        setSelectedOption("");
        setIsSubmitted(false);
        setCurrentIndex(currentIndex + 1);
    }

    function handleRestart() {
        setCurrentIndex(0);
        setSelectedOption("");
        setIsSubmitted(false);
        setScore(0);
        loadRevision();
    }

    if (loading) {
        return (
            <div className="dashboard-loading" style={{ padding: "60px", textAlign: "center" }}>
                <div className="loading-spinner"></div>
                <h2>Personalizing your revision queue...</h2>
                <p>Prioritizing concepts based on your DSA weakness signals.</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div style={{ padding: "40px", textAlign: "center" }}>
                <h2>No revision questions available</h2>
                <button className="retry-button" onClick={loadRevision}>Try Again</button>
            </div>
        );
    }

    // Finished screen
    if (currentIndex >= questions.length) {
        return (
            <section style={{ maxWidth: "650px", margin: "40px auto", padding: "32px", background: "rgba(30, 41, 59, 0.7)", borderRadius: "12px", textAlign: "center" }}>
                <span style={{ fontSize: "48px" }}>🎉</span>
                <h2 style={{ color: "#fff", margin: "16px 0 8px 0" }}>Revision Session Complete!</h2>
                <p style={{ color: "#94a3b8", fontSize: "16px" }}>
                    You scored <strong style={{ color: "#4ade80" }}>{score}</strong> out of <strong style={{ color: "#fff" }}>{questions.length}</strong> concepts correctly.
                </p>

                <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "24px" }}>
                    <button
                        onClick={handleRestart}
                        style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            padding: "10px 20px",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                    >
                        Practice Again
                    </button>
                    <button
                        onClick={() => setPage("Practice Problem")}
                        style={{
                            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 20px",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                    >
                        Apply in Coding Problems →
                    </button>
                </div>
            </section>
        );
    }

    const isWeakTarget = weakTopics.some(
        wt => wt.toLowerCase() === (currentQuestion.topic || "").toLowerCase()
    );

    return (
        <section className="revision-page" style={{ maxWidth: "750px", margin: "20px auto" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                    <p className="section-label" style={{ color: "#f59e0b", fontWeight: "700" }}>
                        CONCEPT REVISION
                    </p>
                    <h2 style={{ color: "#fff", margin: "2px 0" }}>Personalized Knowledge Check</h2>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", color: "#94a3b8" }}>
                    Question {currentIndex + 1} of {questions.length}
                </div>
            </div>

            {/* Question Card */}
            <div
                style={{
                    background: "rgba(30, 41, 59, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "28px"
                }}
            >
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px" }}>
                    <span className="topic-badge">{currentQuestion.topic}</span>
                    {currentQuestion.pattern && (
                        <span style={{ fontSize: "12px", color: "#94a3b8", background: "rgba(255, 255, 255, 0.06)", padding: "3px 8px", borderRadius: "4px" }}>
                            {currentQuestion.pattern}
                        </span>
                    )}
                    {isWeakTarget && (
                        <span style={{ fontSize: "11px", color: "#fbbf24", background: "rgba(245, 158, 11, 0.15)", padding: "3px 8px", borderRadius: "4px", fontWeight: "600" }}>
                            🎯 Targeted Weakness
                        </span>
                    )}
                </div>

                <h3 style={{ color: "#f8fafc", fontSize: "18px", lineHeight: "1.5", margin: "0 0 24px 0" }}>
                    {currentQuestion.question}
                </h3>

                {/* Options */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                    {currentQuestion.options?.map((option, idx) => {
                        let btnStyle = {
                            background: "rgba(15, 23, 42, 0.6)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            color: "#e2e8f0"
                        };

                        if (selectedOption === option && !isSubmitted) {
                            btnStyle = {
                                background: "rgba(59, 130, 246, 0.25)",
                                border: "1px solid #3b82f6",
                                color: "#60a5fa"
                            };
                        }

                        if (isSubmitted) {
                            if (option === currentQuestion.correct_answer) {
                                btnStyle = {
                                    background: "rgba(34, 197, 94, 0.2)",
                                    border: "1px solid #22c55e",
                                    color: "#4ade80"
                                };
                            } else if (selectedOption === option && option !== currentQuestion.correct_answer) {
                                btnStyle = {
                                    background: "rgba(239, 68, 68, 0.2)",
                                    border: "1px solid #ef4444",
                                    color: "#f87171"
                                };
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => !isSubmitted && setSelectedOption(option)}
                                disabled={isSubmitted}
                                style={{
                                    ...btnStyle,
                                    padding: "14px 18px",
                                    borderRadius: "8px",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    cursor: isSubmitted ? "default" : "pointer",
                                    transition: "all 0.15s ease"
                                }}
                            >
                                <span style={{ fontWeight: "700", marginRight: "10px" }}>
                                    {String.fromCharCode(65 + idx)}.
                                </span>
                                {option}
                            </button>
                        );
                    })}
                </div>

                {/* Explanation Box after submission */}
                {isSubmitted && (
                    <div
                        style={{
                            background: selectedOption === currentQuestion.correct_answer
                                ? "rgba(34, 197, 94, 0.08)"
                                : "rgba(239, 68, 68, 0.08)",
                            borderLeft: `4px solid ${
                                selectedOption === currentQuestion.correct_answer ? "#22c55e" : "#ef4444"
                            }`,
                            padding: "16px",
                            borderRadius: "0 8px 8px 0",
                            marginBottom: "20px"
                        }}
                    >
                        <strong
                            style={{
                                color: selectedOption === currentQuestion.correct_answer ? "#4ade80" : "#f87171",
                                display: "block",
                                marginBottom: "6px"
                            }}
                        >
                            {selectedOption === currentQuestion.correct_answer ? "✓ Correct Reasoning" : "✗ Incorrect Observation"}
                        </strong>
                        <p style={{ margin: 0, color: "#cbd5e1", fontSize: "14px", lineHeight: "1.6" }}>
                            {currentQuestion.explanation}
                        </p>
                    </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {!isSubmitted ? (
                        <button
                            onClick={handleAnswerSubmit}
                            disabled={!selectedOption}
                            style={{
                                background: selectedOption
                                    ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                                    : "rgba(255, 255, 255, 0.1)",
                                color: selectedOption ? "#fff" : "#94a3b8",
                                border: "none",
                                padding: "10px 24px",
                                borderRadius: "8px",
                                fontWeight: "600",
                                cursor: selectedOption ? "pointer" : "not-allowed"
                            }}
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            style={{
                                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                                color: "#fff",
                                border: "none",
                                padding: "10px 24px",
                                borderRadius: "8px",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}
                        >
                            Next Concept →
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Revision;
