import { useEffect, useState } from "react";

import ProblemCard from "./ProblemCard";
import ProblemDetails from "./ProblemDetails";

import { supabase } from "../lib/supabase";

function Problems({ onAnalyze }) {

    const [search, setSearch] = useState("");
    const [topic, setTopic] = useState("All");
    const [difficulty, setDifficulty] = useState("All");

    const [selectedProblem, setSelectedProblem] = useState(null);

    const [problems, setProblems] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    // Fetch problems from Supabase
    useEffect(() => {

        async function fetchProblems() {

            setLoading(true);
            setError("");

            const { data, error } = await supabase
                .from("problems")
                .select("*")
                .order("created_at", {
                    ascending: false
                });

            if (error) {

                console.error("Problems fetch error:", error);

                setError(
                    "Unable to load problems. Please try again."
                );

                setLoading(false);

                return;
            }
            
            console.log("Problems received from Supabase:", data);
            setProblems(data || []);

            setLoading(false);
        }

        fetchProblems();

    }, []);


    function changeStatus(id) {

        setProblems(
            problems.map((problem) =>
                problem.id === id
                    ? {
                        ...problem,
                        status:
                            problem.status === "Solved"
                                ? "Not Solved"
                                : "Solved"
                    }
                    : problem
            )
        );
    }


    const filteredProblems = problems.filter((problem) => {

        const matchesSearch = problem.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesTopic =
            topic === "All" ||
            problem.topic === topic;

        const matchesDifficulty =
            difficulty === "All" ||
            problem.difficulty === difficulty;

        return (
            matchesSearch &&
            matchesTopic &&
            matchesDifficulty
        );

    });


    if (selectedProblem) {

        const currentProblem = problems.find(
            (problem) =>
                problem.id === selectedProblem.id
        );

        return (
            <ProblemDetails
                problem={currentProblem}
                onBack={() => setSelectedProblem(null)}
                onAnalyze={onAnalyze}
            />
        );
    }


    return (
        <section className="problems-page">

            <div className="problems-header">

                <h2>DSA Problems</h2>

                <p>
                    Practice problems and track your progress.
                </p>

            </div>


            <div className="problem-filters">

                <input
                    className="problem-search"
                    type="text"
                    placeholder="Search problems..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />


                <select
                    value={topic}
                    onChange={(event) =>
                        setTopic(event.target.value)
                    }
                >

                    <option value="All">
                        All Topics
                    </option>

                    <option value="Arrays">
                        Arrays
                    </option>

                    <option value="Linked List">
                        Linked List
                    </option>

                    <option value="Recursion">
                        Recursion
                    </option>

                    <option value="Dynamic Programming">
                        Dynamic Programming
                    </option>

                    <option value="Trees">
                        Trees
                    </option>

                </select>


                <select
                    value={difficulty}
                    onChange={(event) =>
                        setDifficulty(event.target.value)
                    }
                >

                    <option value="All">
                        All Difficulties
                    </option>

                    <option value="Easy">
                        Easy
                    </option>

                    <option value="Medium">
                        Medium
                    </option>

                    <option value="Hard">
                        Hard
                    </option>

                </select>

            </div>


            {loading && (
                <p>
                    Loading problems...
                </p>
            )}


            {error && (
                <p className="auth-error">
                    {error}
                </p>
            )}


            {!loading &&
                !error &&
                filteredProblems.length === 0 && (

                    <p>
                        No problems found.
                    </p>

                )}


            {!loading && !error && (

                <div className="problem-list">

                    {filteredProblems.map((problem) => (

                        <ProblemCard
                            key={problem.id}

                            title={problem.title}

                            topic={problem.topic}

                            difficulty={problem.difficulty}

                            status={
                                problem.status ||
                                "Not Solved"
                            }

                            onStatusChange={() =>
                                changeStatus(problem.id)
                            }

                            onOpen={() =>
                                setSelectedProblem(problem)
                            }
                        />

                    ))}

                </div>

            )}

        </section>
    );
}

export default Problems;