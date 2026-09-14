import { useState } from "react";
import { supabase } from "../lib/supabase";

function Login({ onSwitchToSignup, onLoginSuccess }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogin(event) {

        event.preventDefault();

        setError("");

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
            return;
        }

        console.log("Login successful:", data.user);

        onLoginSuccess(data.user);
    }

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>CodeMedic</h1>

                <h2>Welcome Back</h2>

                <p className="auth-subtitle">
                    Login to continue your DSA journey.
                </p>

                <form onSubmit={handleLogin}>

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                        />

                    </div>

                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />

                    </div>

                    {error && (
                        <p className="auth-error">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Logging in..."
                            : "Login"
                        }
                    </button>

                </form>

                <div className="auth-switch">

                    <span>
                        Don't have an account?
                    </span>

                    <button
                        type="button"
                        onClick={onSwitchToSignup}
                    >
                        Create Account
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Login;