import { useState, useEffect } from "react";
import { signUpUser, resendVerificationEmail, formatAuthError } from "../services/authService";

function Signup({ onSwitchToLogin }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [registeredEmail, setRegisteredEmail] = useState("");
    const [resending, setResending] = useState(false);
    const [resendSuccess, setResendSuccess] = useState(false);
    const [cooldown, setCooldown] = useState(0);

    // Cooldown countdown timer
    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setInterval(() => {
            setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [cooldown]);

    async function handleSignup(event) {
        event.preventDefault();

        // Prevent duplicate in-flight submissions
        if (loading) return;

        setMessage("");
        setError("");
        setResendSuccess(false);

        if (!name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (!email.trim()) {
            setError("Please enter your email.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        const targetEmail = email.trim();
        const { error: signupError } = await signUpUser({
            email: targetEmail,
            password: password,
            name: name.trim(),
        });

        setLoading(false);

        if (signupError) {
            setError(formatAuthError(signupError, "signup"));
            return;
        }

        setRegisteredEmail(targetEmail);
        setCooldown(60);
        setMessage(
            "Account created successfully! Please check your email and verify your account."
        );

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    async function handleResend() {
        if (!registeredEmail || resending || cooldown > 0) return;
        setResending(true);
        setError("");
        try {
            await resendVerificationEmail(registeredEmail);
            setResendSuccess(true);
            setCooldown(60);
            setMessage("Verification email has been resent! Please check your inbox and spam folder.");
        } catch (err) {
            setError(formatAuthError(err, "resend"));
        } finally {
            setResending(false);
        }
    }

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>CodeMedic</h1>

                <h2>Create your account</h2>

                <p className="auth-subtitle">
                    Start improving your DSA problem-solving skills.
                </p>

                <form onSubmit={handleSignup}>

                    <div className="form-group">
                        <label>Name</label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

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
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                        />
                    </div>

                    {error && (
                        <p className="auth-error">
                            {error}
                        </p>
                    )}

                    {message && (
                        <div style={{ marginBottom: "16px" }}>
                            <p className="auth-success" style={{ margin: "0 0 8px 0" }}>
                                {message}
                            </p>
                            {registeredEmail && (
                                <div style={{ fontSize: "13px", color: "#94a3b8", textAlign: "center" }}>
                                    <span>Didn't receive the link? </span>
                                    <button
                                        type="button"
                                        onClick={handleResend}
                                        disabled={resending || cooldown > 0}
                                        style={{
                                            background: "transparent",
                                            border: "none",
                                            color: (resending || cooldown > 0) ? "#64748b" : "#38bdf8",
                                            textDecoration: (resending || cooldown > 0) ? "none" : "underline",
                                            cursor: (resending || cooldown > 0) ? "not-allowed" : "pointer",
                                            padding: 0,
                                            fontSize: "13px",
                                            fontWeight: "500"
                                        }}
                                    >
                                        {resending
                                            ? "Resending..."
                                            : (cooldown > 0
                                                ? `Resend available in ${cooldown}s`
                                                : (resendSuccess ? "Resend again" : "Resend Verification Email"))}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading ? "Creating account..." : "Create Account"}
                    </button>

                </form>

                <div className="auth-switch">

                    <span>
                        Already have an account?
                    </span>

                    <button
                        type="button"
                        onClick={onSwitchToLogin}
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Signup;