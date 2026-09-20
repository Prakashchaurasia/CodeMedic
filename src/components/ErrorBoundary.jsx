import React from "react";

/**
 * Application-level Error Boundary for CodeMedic.
 * Catches any unhandled React runtime errors anywhere in the component tree
 * and renders an elegant recovery UI instead of crashing to a blank screen.
 */
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("CodeMedic Application Error caught by ErrorBoundary:", error, errorInfo);
        this.setState({ errorInfo });
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        if (this.props.onReset) {
            this.props.onReset();
        }
    };

    handleGoToLogin = () => {
        try {
            sessionStorage.clear();
        } catch (_) {}
        window.location.href = "/";
    };

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #0a0f1d 0%, #030712 100%)",
                        color: "#f8fafc",
                        padding: "24px",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "600px",
                            width: "100%",
                            background: "rgba(15, 23, 42, 0.85)",
                            border: "1px solid rgba(239, 68, 68, 0.3)",
                            borderRadius: "16px",
                            padding: "36px",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🩺</div>
                        <h1
                            style={{
                                fontSize: "24px",
                                fontWeight: "700",
                                color: "#fff",
                                margin: "0 0 12px 0",
                            }}
                        >
                            Something went wrong
                        </h1>
                        <p
                            style={{
                                color: "#94a3b8",
                                fontSize: "15px",
                                lineHeight: "1.6",
                                margin: "0 0 24px 0",
                            }}
                        >
                            An unexpected error occurred while rendering the application. We have safely isolated the issue to prevent data loss.
                        </p>

                        {this.state.error && (
                            <div
                                style={{
                                    background: "rgba(239, 68, 68, 0.1)",
                                    border: "1px solid rgba(239, 68, 68, 0.25)",
                                    borderRadius: "8px",
                                    padding: "12px 16px",
                                    marginBottom: "24px",
                                    textAlign: "left",
                                    maxHeight: "150px",
                                    overflowY: "auto",
                                }}
                            >
                                <strong style={{ color: "#fca5a5", fontSize: "13px", display: "block", marginBottom: "4px" }}>
                                    Error Details:
                                </strong>
                                <pre
                                    style={{
                                        color: "#fecaca",
                                        fontSize: "12px",
                                        fontFamily: "'Fira Code', monospace",
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {this.state.error.message || String(this.state.error)}
                                </pre>
                            </div>
                        )}

                        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                            <button
                                type="button"
                                onClick={this.handleRetry}
                                style={{
                                    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "12px 24px",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.4)",
                                }}
                            >
                                ↺ Retry
                            </button>
                            <button
                                type="button"
                                onClick={this.handleGoToLogin}
                                style={{
                                    background: "rgba(30, 41, 59, 0.8)",
                                    color: "#cbd5e1",
                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                    borderRadius: "8px",
                                    padding: "12px 24px",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                }}
                            >
                                Go to Login
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
