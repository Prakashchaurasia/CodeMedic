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
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import { getUserProfile } from "./services/profileService";
import { parseAuthUrlParams, clearAuthUrlParams } from "./services/authService";

function App() {
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showSignup, setShowSignup] = useState(false);
    const [authNotification, setAuthNotification] = useState(null);
    const [page, setPage] = useState(() => {
        try {
            return sessionStorage.getItem("codemedic_active_page") || "Dashboard";
        } catch (_) {
            return "Dashboard";
        }
    });
    const [selectedProblem, setSelectedProblem] = useState(() => {
        try {
            const saved = sessionStorage.getItem("codemedic_selected_problem");
            return saved ? JSON.parse(saved) : null;
        } catch (_) {
            return null;
        }
    });
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    useEffect(() => {
        try {
            sessionStorage.setItem("codemedic_active_page", page);
        } catch (_) {}
    }, [page]);

    /*
        Full logout handler: completely resets all in-memory user and protected state
    */
    function handleFullLogout() {
        setSession(null);
        setProfile(null);
        setSelectedProblem(null);
        setPage("Dashboard");
        setShowSignup(false);
        setMobileSidebarOpen(false);
        setAuthNotification(null);
        try {
            const keysToRemove = [];
            for (let i = 0; i < sessionStorage.length; i++) {
                const k = sessionStorage.key(i);
                if (k && k.startsWith("codemedic_")) {
                    keysToRemove.push(k);
                }
            }
            keysToRemove.forEach((k) => sessionStorage.removeItem(k));
        } catch (_) {}
    }

    /*
        Get the user's unified profile
    */
    async function fetchProfile(userId) {
        try {
            const data = await getUserProfile(userId);
            if (data) {
                setProfile(data);
            }
        } catch (err) {
            console.error("Profile fetch error:", err);
        }
    }

    /*
        Check the current Supabase authentication session and URL callback state
    */
    useEffect(() => {
        // 1. Inspect URL for auth error callback or expired tokens
        const authParams = parseAuthUrlParams();
        if (authParams.hasError) {
            setAuthNotification(authParams.userFriendlyMessage);
            clearAuthUrlParams();
        }

        async function getSession() {
            try {
                const { data } = await supabase.auth.getSession();
                if (data.session && data.session.user) {
                    setSession(data.session);
                    setAuthNotification(null);
                    clearAuthUrlParams();
                    await fetchProfile(data.session.user.id);
                } else {
                    handleFullLogout();
                }
            } catch (err) {
                console.error("Get session error:", err);
                handleFullLogout();
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
        } = supabase.auth.onAuthStateChange((event, newSession) => {
            console.log("Supabase auth event:", event, !!newSession);
            if (event === "SIGNED_OUT" || !newSession || !newSession.user) {
                handleFullLogout();
            } else if (newSession && newSession.user) {
                setSession(newSession);
                setAuthNotification(null);
                clearAuthUrlParams();
                fetchProfile(newSession.user.id);
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
        try {
            if (problem) {
                sessionStorage.setItem("codemedic_selected_problem", JSON.stringify(problem));
            } else {
                sessionStorage.removeItem("codemedic_selected_problem");
            }
        } catch (_) {}
        setPage("Analyze Code");
    }

    /*
        Loading screen: do not render protected pages before session is verified
    */
    if (loading) {
        return (
            <div className="auth-page">
                <div className="auth-card">
                    <h1>CodeMedic</h1>
                    <p className="auth-subtitle">Checking your session...</p>
                </div>
            </div>
        );
    }

    /*
        User is not logged in
    */
    if (!session || !session.user) {
        if (showSignup) {
            return (
                <Signup
                    onSwitchToLogin={() => {
                        setAuthNotification(null);
                        setShowSignup(false);
                    }}
                />
            );
        }

        return (
            <Login
                initialError={authNotification}
                onSwitchToSignup={() => {
                    setAuthNotification(null);
                    setShowSignup(true);
                }}
                onLoginSuccess={(user) => {
                    setAuthNotification(null);
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
                setPage={setPage}
                profile={profile}
                user={session?.user}
                onLogout={handleFullLogout}
            />

            <div className="layout">
                <Sidebar
                    page={page}
                    setPage={setPage}
                    isMobileOpen={mobileSidebarOpen}
                    onClose={() => setMobileSidebarOpen(false)}
                />

                <main className="main-content">
                    {page !== "Generate & Practice" && page !== "Profile" && page !== "Settings" && (
                        <h1 className="page-title">{page}</h1>
                    )}

                    {page === "Dashboard" && (
                        <Dashboard
                            userName={profile?.name || session?.user?.email?.split("@")[0] || "Student"}
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
                            userId={session?.user?.id}
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

                    {page === "Profile" && (
                        <Profile
                            user={session.user}
                            setPage={setPage}
                            onProfileUpdated={(updated) => setProfile(updated)}
                        />
                    )}

                    {page === "Settings" && (
                        <Settings
                            user={session.user}
                            setPage={setPage}
                            onProfileUpdated={(updated) => setProfile(updated)}
                        />
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;