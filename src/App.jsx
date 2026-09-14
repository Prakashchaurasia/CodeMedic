import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import StatCard from "./components/StatCard";
import TopicCard from "./components/TopicCard";
import ProblemCard from "./components/ProblemCard";
import Problems from "./components/Problems";
import AnalyzeCode from "./components/AnalyzeCode";

function App() {

    const [page, setPage] = useState("Dashboard");

    const [selectedProblem, setSelectedProblem] = useState(null);


    function openAnalyzeCode(problem) {

        setSelectedProblem(problem);

        setPage("Analyze Code");

    }


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


                    {/* Dashboard */}

                    {page === "Dashboard" && (
                        <>

                            <Welcome />

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


                    {/* Problems */}

                    {page === "Problems" && (
                        <Problems
                            onAnalyze={openAnalyzeCode}
                        />
                    )}


                    {/* Analyze Code */}

                    {page === "Analyze Code" && (
                        <AnalyzeCode
                            problem={selectedProblem}
                        />
                    )}


                    {/* Other Pages */}

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