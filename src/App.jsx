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
import { preloadCppExecutor } from "./services/cppExecutor";
import { getUserProfile } from "./services/profileService";
import { parseAuthUrlParams, clearAuthUrlParams } from "./services/authService";

function App() {
    useEffect(() => {
        preloadCppExecutor();
    }, []);
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showSignup, setShowSignup] = useState(false);
    const [authNotification, setAuthNotification] = useState(null);
    const [page, setPage] = useState("Dashboard");
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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
                setSession(data.session);

                if (data.session) {
                    setAuthNotification(null);
                    clearAuthUrlParams();
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
                setAuthNotification(null);
                clearAuthUrlParams();
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