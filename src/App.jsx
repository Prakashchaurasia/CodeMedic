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


function App() {

    const [session, setSession] =
        useState(null);

    const [profile, setProfile] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [showSignup, setShowSignup] =
        useState(false);

    const [page, setPage] =
        useState("Dashboard");

    const [selectedProblem, setSelectedProblem] =
        useState(null);

    const [mobileSidebarOpen, setMobileSidebarOpen] =
        useState(false);


    /*
        Get the user's profile
        from public.users
    */
    async function fetchProfile(userId) {

        const { data, error } =
            await supabase
                .from("users")
                .select("*")
                .eq("id", userId)
                .single();


        if (error) {

            console.error(
                "Profile fetch error:",
                error
            );

            return;
        }


        setProfile(data);
    }


    /*
        Check the current
        Supabase authentication session
    */
    useEffect(() => {

        async function getSession() {

            const { data } =
                await supabase.auth.getSession();


            setSession(data.session);


            if (data.session) {

                await fetchProfile(
                    data.session.user.id
                );

            }


            setLoading(false);
        }


        getSession();


        /*
            Listen for login/logout
            and authentication changes
        */
        const {
            data: {
                subscription
            },
        } =
            supabase.auth.onAuthStateChange(
                (_event, newSession) => {

                    setSession(newSession);


                    if (newSession) {

                        fetchProfile(
                            newSession.user.id
                        );

                    } else {

                        setProfile(null);

                    }

                }
            );


        return () => {

            subscription.unsubscribe();

        };

    }, []);


    /*
        Open Analyze Code page
        with the selected problem
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

                    <h1>
                        CodeMedic
                    </h1>

                    <p className="auth-subtitle">
                        Loading...
                    </p>

                </div>

            </div>

        );

    }


    /*
        User is not logged in
    */
    if (!session) {

        /*
            Show Signup page
        */
        if (showSignup) {

            return (

                <Signup
                    onSwitchToLogin={() =>
                        setShowSignup(false)
                    }
                />

            );

        }


        /*
            Show Login page
        */
        return (

            <Login

                onSwitchToSignup={() =>
                    setShowSignup(true)
                }

                onLoginSuccess={(user) => {

                    console.log(
                        "Logged in user:",
                        user
                    );

                }}

            />

        );

    }


    /*
        User is logged in
    */
    return (

        <div className="app">

            {/* =========================
                TOP NAVBAR
            ========================== */}

            <Navbar

                onMenuClick={() =>
                    setMobileSidebarOpen(true)
                }

            />


            <div className="layout">


                {/* =========================
                    SIDEBAR
                ========================== */}

                <Sidebar

                    page={page}

                    setPage={setPage}

                    isMobileOpen={
                        mobileSidebarOpen
                    }

                    onClose={() =>
                        setMobileSidebarOpen(false)
                    }

                />


                {/* =========================
                    MAIN CONTENT
                ========================== */}

                <main className="main-content">


                    {/* Page title */}

                    {page !== "Generate & Practice" && (

                        <h1 className="page-title">

                            {page}

                        </h1>

                    )}


                    {/* =========================
                        DASHBOARD
                    ========================== */}

                    {page === "Dashboard" && (

                        <Dashboard

                            userName={
                                profile?.name
                            }

                            setPage={
                                setPage
                            }

                        />

                    )}


                    {/* =========================
                        PRACTICE PROBLEMS
                    ========================== */}

                    {page === "Practice Problem" && (

                        <Problems

                            onAnalyze={
                                openAnalyzeCode
                            }

                        />

                    )}


                    {/* =========================
                        GENERATE & PRACTICE
                    ========================== */}

                    {page === "Generate & Practice" && (

                        <GeneratePractice />

                    )}


                    {/* =========================
                        ANALYZE CODE
                    ========================== */}

                    {page === "Analyze Code" && (

                        <AnalyzeCode

                            problem={
                                selectedProblem
                            }

                        />

                    )}


                    {/* =========================
                        OTHER PAGES
                    ========================== */}

                    {page !== "Dashboard" &&
                        page !== "Practice Problem" &&
                        page !== "Generate & Practice" &&
                        page !== "Analyze Code" && (

                            <section
                                className="page-placeholder"
                            >

                                <h2>
                                    {page}
                                </h2>

                                <p>
                                    This section will be built
                                    in the next steps.
                                </p>

                            </section>

                        )}

                </main>

            </div>

        </div>

    );
}


export default App;