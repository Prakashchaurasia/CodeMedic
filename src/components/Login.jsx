import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { resendVerificationEmail, sendPasswordResetEmail, formatAuthError } from "../services/authService";

function Login({ onSwitchToSignup, onLoginSuccess, initialError }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(initialError || "");
    const [infoMessage, setInfoMessage] = useState("");

    // Resend verification state
    const [resendingVerification, setResendingVerification] = useState(false);
    const [showResendPrompt, setShowResendPrompt] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(0);

    // Forgot password state
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetLoading, setResetLoading] = useState(false);
    const [resetCooldown, setResetCooldown] = useState(0);

    // Cooldown countdown timer for resending verification
    useEffect(() => {
        if (resendCooldown <= 0) return;
        const timer = setInterval(() => {
            setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [resendCooldown]);

    // Cooldown countdown timer for password reset
    useEffect(() => {
        if (resetCooldown <= 0) return;
        const timer = setInterval(() => {
            setResetCooldown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [resetCooldown]);

    useEffect(() => {
        if (initialError) {
            setError(initialError);
            if (initialError.toLowerCase().includes("expired") || initialError.toLowerCase().includes("verification") || initialError.toLowerCase().includes("rate limit")) {
                setShowResendPrompt(true);
            }
        }
    }, [initialError]);

    async function handleLogin(event) {
        event.preventDefault();

        // Prevent duplicate submissions
        if (loading) return;

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
            const friendlyMsg = formatAuthError(loginError, "login");
            setError(friendlyMsg);
            if (
                loginError.message.toLowerCase().includes("email not confirmed") ||
                loginError.message.toLowerCase().includes("email rate limit")
            ) {
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

        if (resendingVerification || resendCooldown > 0) return;

        setResendingVerification(true);
        setError("");
        setInfoMessage("");

        try {
            await resendVerificationEmail(email.trim());
            setResendCooldown(60);
            setInfoMessage("Verification email has been resent! Please check your inbox and spam folder.");
            setShowResendPrompt(false);
        } catch (err) {
            setError(formatAuthError(err, "resend"));
        } finally {
            setResendingVerification(false);
        }
    }

    async function handleForgotPassword(event) {
        event.preventDefault();

        if (resetLoading || resetCooldown > 0) return;

        setError("");
        setInfoMessage("");

        if (!email.trim()) {
            setError("Please enter your email address to receive a password reset link.");
            return;
        }

        setResetLoading(true);

        try {
            await sendPasswordResetEmail(email.trim());
            setResetCooldown(60);
            setInfoMessage("Password reset email sent! Please check your inbox and spam folder.");
            setShowForgotPassword(false);
        } catch (err) {
            setError(formatAuthError(err, "password_reset"));
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
                            disabled={resetLoading || resetCooldown > 0}
                        >
                            {resetLoading
                                ? "Sending Link..."
                                : (resetCooldown > 0
                                    ? `Wait ${resetCooldown}s before resending`
                                    : "Send Reset Link")}
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
                                        disabled={resendingVerification || resendCooldown > 0}
                                        style={{
                                            background: (resendingVerification || resendCooldown > 0) ? "rgba(100, 116, 139, 0.1)" : "rgba(56, 189, 248, 0.1)",
                                            border: (resendingVerification || resendCooldown > 0) ? "1px solid rgba(100, 116, 139, 0.3)" : "1px solid rgba(56, 189, 248, 0.3)",
                                            color: (resendingVerification || resendCooldown > 0) ? "#64748b" : "#38bdf8",
                                            borderRadius: "6px",
                                            padding: "6px 12px",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            cursor: (resendingVerification || resendCooldown > 0) ? "not-allowed" : "pointer",
                                            width: "100%",
                                            textAlign: "center"
                                        }}
                                    >
                                        {resendingVerification
                                            ? "Sending..."
                                            : (resendCooldown > 0
                                                ? `Resend available in ${resendCooldown}s`
                                                : "Resend Verification Email")}
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