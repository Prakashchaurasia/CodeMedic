import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/supabase";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Problems from "./components/Problems";
import AnalyzeCode from "./components/AnalyzeCode";
import Signup from "./components/Signup";
import Login from "./components/Login";
import GeneratePractice from "./components/GeneratePractice";
import Dashboard from "./components/Dashboard";
import DSAHealth from "./components/DSAHealth";
import Progress from "./components/Progress";
import Revision from "./components/Revision";
import { preloadCppExecutor } from "./services/cppExecutor";

function App() {
    useEffect(() => {
        preloadCppExecutor();
    }, []);
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showSignup, setShowSignup] = useState(false);
    const [page, setPage] = useState("Dashboard");
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    /*
        Get the user's profile from public.users
    */
    async function fetchProfile(userId) {
        try {
            const { data, error } = await supabase
                .from("users")
                .select("*")
                .eq("id", userId)
                .single();

            if (error) {
                console.warn("Profile fetch note:", error.message);
                return;
            }

            setProfile(data);
        } catch (err) {
            console.error("Profile fetch error:", err);
        }
    }

    /*
        Check the current Supabase authentication session
    */
    useEffect(() => {
        async function getSession() {
            try {
                const { data } = await supabase.auth.getSession();
                setSession(data.session);

                if (data.session) {
                    await fetchProfile(data.session.user.id);
                }
            } catch (err) {
                console.error("Get session error:", err);
            } finally {
                setLoading(false);
            }
        }

        getSession();

        /*
            Listen for login/logout and authentication changes
        */
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, newSession) => {
            setSession(newSession);

            if (newSession) {
                fetchProfile(newSession.user.id);
            } else {
                setProfile(null);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    /*
        Open Analyze Code page with the selected problem
    */
    function openAnalyzeCode(problem) {
        setSelectedProblem(problem);
        setPage("Analyze Code");
    }

    /*
        Loading screen
    */
    if (loading) {
        return (
            <div className="auth-page">
                <div className="auth-card">
                    <h1>CodeMedic</h1>
                    <p className="auth-subtitle">Loading...</p>
                </div>
            </div>
        );
    }

    /*
        User is not logged in
    */
    if (!session) {
        if (showSignup) {
            return (
                <Signup
                    onSwitchToLogin={() => setShowSignup(false)}
                />
            );
        }

        return (
            <Login
                onSwitchToSignup={() => setShowSignup(true)}
                onLoginSuccess={(user) => {
                    console.log("Logged in user:", user);
                }}
            />
        );
    }

    /*
        Authenticated Main Application Shell
    */
    return (
        <div className="app">
            <Navbar
                onMenuClick={() => setMobileSidebarOpen(true)}
            />

            <div className="layout">
                <Sidebar
                    page={page}
                    setPage={setPage}
                    isMobileOpen={mobileSidebarOpen}
                    onClose={() => setMobileSidebarOpen(false)}
                />

                <main className="main-content">
                    {page !== "Generate & Practice" && (
                        <h1 className="page-title">{page}</h1>
                    )}

                    {page === "Dashboard" && (
                        <Dashboard
                            userName={profile?.name || session.user.email?.split("@")[0]}
                            setPage={setPage}
                            onOpenProblem={openAnalyzeCode}
                        />
                    )}

                    {page === "Practice Problem" && (
                        <Problems
                            onAnalyze={openAnalyzeCode}
                        />
                    )}

                    {page === "Generate & Practice" && (
                        <GeneratePractice
                            onStartCoding={openAnalyzeCode}
                        />
                    )}

                    {page === "Analyze Code" && (
                        <AnalyzeCode
                            problem={selectedProblem}
                            setPage={setPage}
                        />
                    )}

                    {page === "DSA Health" && (
                        <DSAHealth
                            setPage={setPage}
                        />
                    )}

                    {page === "Progress" && (
                        <Progress
                            onOpenProblem={openAnalyzeCode}
                        />
                    )}

                    {page === "Revision" && (
                        <Revision
                            setPage={setPage}
                        />
                    )}

                    {page === "Settings" && (
                        <section className="page-placeholder" style={{ padding: "30px", background: "rgba(30, 41, 59, 0.5)", borderRadius: "10px" }}>
                            <h2>Account Settings</h2>
                            <p style={{ color: "#94a3b8", marginTop: "8px" }}>
                                Logged in as: <strong style={{ color: "#fff" }}>{session.user.email}</strong>
                            </p>
                            <p style={{ color: "#94a3b8" }}>
                                User ID: <code style={{ color: "#38bdf8" }}>{session.user.id}</code>
                            </p>
                            <button
                                className="retry-button"
                                style={{ marginTop: "16px", background: "#ef4444" }}
                                onClick={() => supabase.auth.signOut()}
                            >
                                Sign Out
                            </button>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;