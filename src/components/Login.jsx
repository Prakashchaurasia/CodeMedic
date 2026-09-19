import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { resendVerificationEmail, sendPasswordResetEmail } from "../services/authService";

function Login({ onSwitchToSignup, onLoginSuccess, initialError }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(initialError || "");
    const [infoMessage, setInfoMessage] = useState("");

    // Resend verification state
    const [resendingVerification, setResendingVerification] = useState(false);
    const [showResendPrompt, setShowResendPrompt] = useState(false);

    // Forgot password state
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetLoading, setResetLoading] = useState(false);

    useEffect(() => {
        if (initialError) {
            setError(initialError);
            if (initialError.toLowerCase().includes("expired") || initialError.toLowerCase().includes("verification")) {
                setShowResendPrompt(true);
            }
        }
    }, [initialError]);

    async function handleLogin(event) {
        event.preventDefault();

        setError("");
        setInfoMessage("");
        setShowResendPrompt(false);

        if (!email.trim()) {
            setError("Please enter your email.");
            return;
        }

        if (!password) {
            setError("Please enter your password.");
            return;
        }

        setLoading(true);

        const { data, error: loginError } =
            await supabase.auth.signInWithPassword({
                email: email.trim(),
                password: password,
            });

        setLoading(false);

        if (loginError) {
            setError(loginError.message);
            if (loginError.message.toLowerCase().includes("email not confirmed")) {
                setShowResendPrompt(true);
            }
            return;
        }

        console.log("Login successful:", data.user);
        onLoginSuccess(data.user);
    }

    async function handleResendVerification() {
        if (!email.trim()) {
            setError("Please enter your email above to resend the verification link.");
            return;
        }

        setResendingVerification(true);
        setError("");
        setInfoMessage("");

        try {
            await resendVerificationEmail(email.trim());
            setInfoMessage("Verification email has been resent! Please check your inbox and spam folder.");
            setShowResendPrompt(false);
        } catch (err) {
            setError(err?.message || "Failed to resend verification email. Please try again.");
        } finally {
            setResendingVerification(false);
        }
    }

    async function handleForgotPassword(event) {
        event.preventDefault();

        setError("");
        setInfoMessage("");

        if (!email.trim()) {
            setError("Please enter your email address to receive a password reset link.");
            return;
        }

        setResetLoading(true);

        try {
            await sendPasswordResetEmail(email.trim());
            setInfoMessage("Password reset email sent! Please check your inbox.");
            setShowForgotPassword(false);
        } catch (err) {
            setError(err?.message || "Failed to send password reset email. Please try again.");
        } finally {
            setResetLoading(false);
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>CodeMedic</h1>
                <h2>{showForgotPassword ? "Reset Password" : "Welcome Back"}</h2>

                <p className="auth-subtitle">
                    {showForgotPassword
                        ? "Enter your account email to receive a password reset link."
                        : "Login to continue your DSA journey."}
                </p>

                {showForgotPassword ? (
                    <form onSubmit={handleForgotPassword}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        {error && <p className="auth-error">{error}</p>}
                        {infoMessage && <p className="auth-success">{infoMessage}</p>}

                        <button
                            type="submit"
                            className="auth-button"
                            disabled={resetLoading}
                        >
                            {resetLoading ? "Sending Link..." : "Send Reset Link"}
                        </button>

                        <div style={{ textAlign: "center", marginTop: "16px" }}>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowForgotPassword(false);
                                    setError("");
                                }}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "#94a3b8",
                                    cursor: "pointer",
                                    fontSize: "13px"
                                }}
                            >
                                ← Back to Login
                            </button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <label style={{ margin: 0 }}>Password</label>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowForgotPassword(true);
                                        setError("");
                                        setInfoMessage("");
                                    }}
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        color: "#38bdf8",
                                        fontSize: "12px",
                                        cursor: "pointer",
                                        padding: 0
                                    }}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                style={{ marginTop: "6px" }}
                            />
                        </div>

                        {error && (
                            <div style={{ marginBottom: "12px" }}>
                                <p className="auth-error" style={{ margin: "0 0 6px 0" }}>
                                    {error}
                                </p>
                                {showResendPrompt && (
                                    <button
                                        type="button"
                                        onClick={handleResendVerification}
                                        disabled={resendingVerification}
                                        style={{
                                            background: "rgba(56, 189, 248, 0.1)",
                                            border: "1px solid rgba(56, 189, 248, 0.3)",
                                            color: "#38bdf8",
                                            borderRadius: "6px",
                                            padding: "6px 12px",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            cursor: resendingVerification ? "not-allowed" : "pointer",
                                            width: "100%",
                                            textAlign: "center"
                                        }}
                                    >
                                        {resendingVerification ? "Sending..." : "Resend Verification Email"}
                                    </button>
                                )}
                            </div>
                        )}

                        {infoMessage && (
                            <p className="auth-success">
                                {infoMessage}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="auth-button"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                )}

                {!showForgotPassword && (
                    <div className="auth-switch">
                        <span>Don't have an account?</span>
                        <button type="button" onClick={onSwitchToSignup}>
                            Create Account
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;