import { useEffect, useState } from "react";

import "./App.css";

import { supabase } from "./lib/supabase";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import StatCard from "./components/StatCard";
import TopicCard from "./components/TopicCard";
import ProblemCard from "./components/ProblemCard";
import Problems from "./components/Problems";
import AnalyzeCode from "./components/AnalyzeCode";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {

    const [session, setSession] = useState(null);

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);

    const [showSignup, setShowSignup] = useState(false);

    const [page, setPage] = useState("Dashboard");

    const [selectedProblem, setSelectedProblem] = useState(null);


    // Get the user's profile from public.users
    async function fetchProfile(userId) {

        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("id", userId)
            .single();

        if (error) {

            console.error("Profile fetch error:", error);

            return;
        }

        setProfile(data);
    }


    // Check the current session
    useEffect(() => {

        async function getSession() {

            const { data } = await supabase.auth.getSession();

            setSession(data.session);

            if (data.session) {

                await fetchProfile(data.session.user.id);

            }

            setLoading(false);
        }

        getSession();


        // Listen for login/logout changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(
            (_event, newSession) => {

                setSession(newSession);

                if (newSession) {

                    fetchProfile(newSession.user.id);

                } else {

                    setProfile(null);

                }
            }
        );


        return () => {

            subscription.unsubscribe();

        };

    }, []);


    // Open Analyze Code page
    function openAnalyzeCode(problem) {

        setSelectedProblem(problem);

        setPage("Analyze Code");
    }


    // Loading screen
    if (loading) {

        return (
            <div className="auth-page">

                <div className="auth-card">

                    <h1>CodeMedic</h1>

                    <p className="auth-subtitle">
                        Loading...
                    </p>

                </div>

            </div>
        );
    }


    // User is not logged in
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


    // User is logged in
    return (
        <div className="app">

            <Navbar />

            <div className="layout">

                <Sidebar
                    page={page}
                    setPage={setPage}
                />

                <main className="main-content">

                    <h1 className="page-title">
                        {page}
                    </h1>


                    {page === "Dashboard" && (
                        <>

                            <Welcome
                                userName={profile?.name}
                            />


                            <section className="statistics">

                                <StatCard
                                    title="Problems Solved"
                                    value="24"
                                />

                                <StatCard
                                    title="Weak Topics"
                                    value="3"
                                />

                                <StatCard
                                    title="Current Streak"
                                    value="7 days"
                                />

                            </section>


                            <section className="dsa-health">

                                <h2>DSA Health</h2>

                                <div className="topic-list">

                                    <TopicCard
                                        topic="Arrays"
                                        status="Good"
                                    />

                                    <TopicCard
                                        topic="Linked List"
                                        status="Good"
                                    />

                                    <TopicCard
                                        topic="Recursion"
                                        status="Weak"
                                    />

                                </div>

                            </section>


                            <section className="recent-problems">

                                <h2>Recent Problems</h2>

                                <div className="problem-list">

                                    <ProblemCard
                                        title="Two Sum"
                                        topic="Arrays"
                                        difficulty="Easy"
                                        status="Solved"
                                    />

                                    <ProblemCard
                                        title="Reverse Linked List"
                                        topic="Linked List"
                                        difficulty="Easy"
                                        status="Solved"
                                    />

                                </div>

                            </section>

                        </>
                    )}


                    {page === "Problems" && (

                        <Problems
                            onAnalyze={openAnalyzeCode}
                        />

                    )}


                    {page === "Analyze Code" && (

                        <AnalyzeCode
                            problem={selectedProblem}
                        />

                    )}


                    {page !== "Dashboard" &&
                        page !== "Problems" &&
                        page !== "Analyze Code" && (

                            <section className="page-placeholder">

                                <h2>{page}</h2>

                                <p>
                                    This section will be built in the next steps.
                                </p>

                            </section>

                        )}

                </main>

            </div>

        </div>
    );
}

export default App;