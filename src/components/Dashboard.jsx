import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";
import { getDashboardData } from "../services/dashboardService";


function Dashboard({ userName, setPage }) {

    const [dashboardData, setDashboardData] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");


    /*
        Load dashboard data
    */
    async function loadDashboard() {

        try {
            setLoading(true);
            setError("");


            const {
                data: sessionData
            } = await supabase.auth.getSession();


            const user =
                sessionData?.session?.user;


            if (!user) {

                setError(
                    "Unable to identify user."
                );

                return;
            }


            const data =
                await getDashboardData(
                    user.id
                );


            console.log(
                "Dashboard data:",
                data
            );


            setDashboardData(data);

        } catch (error) {

            console.error(
                "Dashboard loading error:",
                error
            );


            setError(
                "Unable to load dashboard data."
            );

        } finally {

            setLoading(false);

        }

    }


    /*
        Load dashboard when page opens.
    */
    useEffect(() => {

        loadDashboard();

    }, []);


    /*
        Loading state
    */
    if (loading) {

        return (
            <section className="dashboard-page">

                <div className="dashboard-loading">

                    <div className="loading-spinner"></div>

                    <h2>
                        Loading your DSA journey...
                    </h2>

                    <p>
                        Fetching your latest progress.
                    </p>

                </div>

            </section>
        );

    }


    /*
        Error state
    */
    if (error) {

        return (
            <section className="dashboard-page">

                <div className="dashboard-error">

                    <div className="error-icon">
                        !
                    </div>

                    <h2>
                        Something went wrong
                    </h2>

                    <p>
                        {error}
                    </p>

                    <button
                        className="retry-button"
                        onClick={loadDashboard}
                    >
                        Try Again
                    </button>

                </div>

            </section>
        );

    }


    if (!dashboardData) {
        return null;
    }


    /*
        Extract dashboard values
    */

    const {
        solvedProblems,
        attemptedProblems,
        totalProblems,
        remainingProblems,
        todayActivity,
        currentStreak,
        weeklyActivity,
        recentProblems
    } = dashboardData;


    /*
        Convert weekly activity object
        into an array for the chart.
    */

    const weeklyEntries =
        Object.entries(
            weeklyActivity || {}
        );


    const chartValues =
        weeklyEntries.map(
            ([date, count]) => ({
                date,
                count
            })
        );


    /*
        Find maximum activity for
        chart scaling.
    */

    const maxActivity =
        Math.max(
            ...chartValues.map(
                (item) => item.count
            ),
            1
        );


    /*
        Format date for chart.
    */

    function getDayName(dateString) {

        const date =
            new Date(
                `${dateString}T00:00:00`
            );


        return date.toLocaleDateString(
            "en-US",
            {
                weekday: "short"
            }
        );

    }


    /*
        Generate SVG points dynamically.
    */

    const chartWidth = 600;
    const chartHeight = 180;


    const chartPoints =
        chartValues.map(
            (item, index) => {

                const x =
                    chartValues.length === 1
                        ? chartWidth / 2
                        : (
                            index /
                            (chartValues.length - 1)
                        ) *
                        chartWidth;


                const normalized =
                    item.count /
                    maxActivity;


                const y =
                    chartHeight -
                    (
                        normalized *
                        150
                    );


                return {
                    x,
                    y
                };

            }
        );


    const polylinePoints =
        chartPoints
            .map(
                (point) =>
                    `${point.x},${point.y}`
            )
            .join(" ");


    /*
        Create area path.
    */

    let areaPath = "";

    if (chartPoints.length > 0) {

        areaPath =
            `M ${chartPoints[0].x} ${chartPoints[0].y} `;

        chartPoints
            .slice(1)
            .forEach((point) => {

                areaPath +=
                    `L ${point.x} ${point.y} `;

            });


        areaPath +=
            `L ${chartWidth} ${chartHeight} `;

        areaPath +=
            `L 0 ${chartHeight} Z`;

    }


    /*
        Determine whether today
        is part of the current streak.
    */

    const today = new Date();

    const todayKey =
        today.toLocaleDateString(
            "en-CA"
        );


    const todayIsActive =
        weeklyActivity?.[todayKey] > 0;


    /*
        Dynamic streak days.

        Show the last 7 calendar days.
    */

    const streakDays = [];

    for (let i = 6; i >= 0; i--) {

        const date =
            new Date();

        date.setDate(
            date.getDate() - i
        );


        const dateKey =
            date.toLocaleDateString(
                "en-CA"
            );


        streakDays.push({

            key: dateKey,

            day:
                date.toLocaleDateString(
                    "en-US",
                    {
                        weekday: "short"
                    }
                ).charAt(0),

            active:
                weeklyActivity?.[
                    dateKey
                ] > 0

        });

    }


    /*
        Dynamic percentage
        for overall progress.
    */

    const progressPercentage =
        totalProblems > 0
            ? Math.round(
                (
                    solvedProblems /
                    totalProblems
                ) *
                100
            )
            : 0;


    return (

        <section className="dashboard-page">


            {/* =================================================
                WELCOME
            ================================================= */}

            <div className="dashboard-welcome">

                <div>

                    <p className="dashboard-eyebrow">
                        YOUR DSA JOURNEY
                    </p>


                    <h1>

                        Welcome back,{" "}

                        <span>
                            {userName || "Student"}!
                        </span>{" "}

                        👋

                    </h1>


                    <p className="dashboard-subtitle">

                        Keep solving, keep improving.
                        Your next breakthrough is closer
                        than you think.

                    </p>

                </div>


                <div className="motivation-card">

                    <span className="motivation-icon">
                        ✦
                    </span>


                    <div>

                        <strong>
                            Consistency turns effort
                            into mastery.
                        </strong>


                        <p>
                            — CodeMedic
                        </p>

                    </div>

                </div>

            </div>


            {/* =================================================
                STATISTICS
            ================================================= */}

            <div className="dashboard-stats">


                {/* SOLVED */}

                <div className="dashboard-stat-card solved-card">

                    <div className="stat-icon">
                        ✓
                    </div>


                    <div className="stat-content">

                        <span>
                            PROBLEMS SOLVED
                        </span>


                        <strong>
                            {solvedProblems}
                        </strong>


                        <small className="stat-positive">

                            {solvedProblems > 0
                                ? "Keep building your streak"
                                : "Start solving today"
                            }

                        </small>

                    </div>

                </div>


                {/* TOTAL */}

                <div className="dashboard-stat-card problems-card">

                    <div className="stat-icon">
                        ▥
                    </div>


                    <div className="stat-content">

                        <span>
                            TOTAL PROBLEMS
                        </span>


                        <strong>
                            {totalProblems}
                        </strong>


                        <small>
                            {progressPercentage}% completed
                        </small>

                    </div>

                </div>


                {/* STREAK */}

                <div className="dashboard-stat-card streak-card">

                    <div className="stat-icon">
                        🔥
                    </div>


                    <div className="stat-content">

                        <span>
                            CURRENT STREAK
                        </span>


                        <strong>
                            {currentStreak}{" "}
                            {currentStreak === 1
                                ? "day"
                                : "days"
                            }
                        </strong>


                        <small>
                            {todayIsActive
                                ? "Today's practice counted"
                                : "Practice today to continue"
                            }
                        </small>

                    </div>

                </div>

            </div>


            {/* =================================================
                TODAY ACTIVITY
            ================================================= */}

            <div className="today-activity-card">

                <div>

                    <span className="today-icon">
                        ⚡
                    </span>


                    <div>

                        <strong>
                            Today's Activity
                        </strong>


                        <p>
                            Problems practiced today
                        </p>

                    </div>

                </div>


                <strong className="today-count">
                    {todayActivity}
                </strong>

            </div>


            {/* =================================================
                MAIN ANALYTICS GRID
            ================================================= */}

            <div className="dashboard-main-grid">


                {/* =================================================
                    PROGRESS
                ================================================= */}

                <div className="dashboard-panel progress-panel">


                    <div className="panel-header">

                        <div>

                            <div className="panel-title">

                                <span className="panel-icon blue">
                                    ▥
                                </span>


                                <h2>
                                    Your Progress
                                </h2>

                            </div>


                            <p>
                                Your activity during the last 7 days
                            </p>

                        </div>


                        <button
                            className="panel-link"
                            onClick={() =>
                                setPage("Progress")
                            }
                        >
                            View Details →
                        </button>

                    </div>


                    {/* CHART */}

                    <div className="progress-chart">

                        <div className="chart-y-axis">

                            <span>
                                {maxActivity}
                            </span>

                            <span>
                                {Math.ceil(
                                    maxActivity * 0.75
                                )}
                            </span>

                            <span>
                                {Math.ceil(
                                    maxActivity * 0.5
                                )}
                            </span>

                            <span>
                                {Math.ceil(
                                    maxActivity * 0.25
                                )}
                            </span>

                            <span>
                                0
                            </span>

                        </div>


                        <div className="chart-area">

                            <div className="chart-grid-line line-1"></div>
                            <div className="chart-grid-line line-2"></div>
                            <div className="chart-grid-line line-3"></div>
                            <div className="chart-grid-line line-4"></div>
                            <div className="chart-grid-line line-5"></div>


                            {chartPoints.length > 0 && (

                                <svg
                                    className="progress-svg"
                                    viewBox="0 0 600 180"
                                    preserveAspectRatio="none"
                                >

                                    <defs>

                                        <linearGradient
                                            id="progressFill"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >

                                            <stop
                                                offset="0%"
                                                stopColor="rgba(59,130,246,0.30)"
                                            />

                                            <stop
                                                offset="100%"
                                                stopColor="rgba(59,130,246,0)"
                                            />

                                        </linearGradient>

                                    </defs>


                                    <path
                                        d={areaPath}
                                        fill="url(#progressFill)"
                                    />


                                    <polyline
                                        points={polylinePoints}
                                        fill="none"
                                        stroke="#4f7cff"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                </svg>

                            )}


                            {/* CHART POINTS */}

                            <div className="chart-points">

                                {chartPoints.map(
                                    (point, index) => (

                                        <span
                                            key={index}
                                            style={{
                                                left: `${(
                                                    point.x /
                                                    chartWidth
                                                ) *
                                                    100}%`,

                                                bottom: `${(
                                                    (
                                                        chartHeight -
                                                        point.y
                                                    ) /
                                                    150
                                                ) *
                                                    150
                                                }px`
                                            }}
                                        ></span>

                                    )
                                )}

                            </div>


                            {/* X AXIS */}

                            <div className="chart-x-axis">

                                {chartValues.map(
                                    (item) => (

                                        <span
                                            key={
                                                item.date
                                            }
                                        >
                                            {getDayName(
                                                item.date
                                            )}
                                        </span>

                                    )
                                )}

                            </div>

                        </div>

                    </div>


                    {/* PROGRESS SUMMARY */}

                    <div className="progress-summary">


                        <div>

                            <span className="summary-dot solved"></span>

                            <span>
                                Solved
                            </span>

                            <strong>
                                {solvedProblems}
                            </strong>

                        </div>


                        <div>

                            <span className="summary-dot attempted"></span>

                            <span>
                                Attempted
                            </span>

                            <strong>
                                {attemptedProblems}
                            </strong>

                        </div>


                        <div>

                            <span className="summary-dot remaining"></span>

                            <span>
                                Remaining
                            </span>

                            <strong>
                                {remainingProblems}
                            </strong>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    RIGHT COLUMN
                ================================================= */}

                <div className="dashboard-side-column">


                    {/* DAILY STREAK */}

                    <div className="dashboard-panel streak-panel">


                        <div className="panel-header">

                            <div className="panel-title">

                                <span className="panel-icon orange">
                                    🔥
                                </span>


                                <h2>
                                    Daily Streak
                                </h2>

                            </div>


                            <span className="panel-arrow">
                                →
                            </span>

                        </div>


                        <div className="streak-days">

                            {streakDays.map(
                                (item) => (

                                    <div
                                        className="streak-day"
                                        key={
                                            item.key
                                        }
                                    >

                                        <div
                                            className={
                                                item.active
                                                    ? "streak-circle completed"
                                                    : "streak-circle"
                                            }
                                        >

                                            {item.active
                                                ? "✓"
                                                : ""
                                            }

                                        </div>


                                        <span>
                                            {item.day}
                                        </span>

                                    </div>

                                )
                            )}

                        </div>


                        <p className="streak-message">

                            {todayIsActive
                                ? "Great work! You practiced today."
                                : "Practice a problem today to keep your streak alive."
                            }

                        </p>

                    </div>


                    {/* QUICK ACTIONS */}

                    <div className="dashboard-panel quick-actions-panel">


                        <div className="panel-header">

                            <div className="panel-title">

                                <span className="panel-icon yellow">
                                    ⚡
                                </span>


                                <h2>
                                    Quick Actions
                                </h2>

                            </div>

                        </div>


                        <div className="quick-actions-grid">


                            <button
                                onClick={() =>
                                    setPage(
                                        "Practice Problem"
                                    )
                                }
                            >

                                <span className="quick-icon blue-bg">
                                    ▣
                                </span>


                                <div>

                                    <strong>
                                        Solve Problems →
                                    </strong>


                                    <small>
                                        Practice from our
                                        curated list
                                    </small>

                                </div>

                            </button>


                            <button
                                onClick={() =>
                                    setPage(
                                        "Generate & Practice"
                                    )
                                }
                            >

                                <span className="quick-icon purple-bg">
                                    ✦
                                </span>


                                <div>

                                    <strong>
                                        Generate Problem →
                                    </strong>


                                    <small>
                                        Get a custom problem
                                    </small>

                                </div>

                            </button>


                            <button
                                onClick={() =>
                                    setPage(
                                        "Analyze Code"
                                    )
                                }
                            >

                                <span className="quick-icon cyan-bg">
                                    &lt;/&gt;
                                </span>


                                <div>

                                    <strong>
                                        Analyze Code →
                                    </strong>


                                    <small>
                                        Get AI feedback
                                    </small>

                                </div>

                            </button>


                            <button
                                onClick={() =>
                                    setPage(
                                        "Progress"
                                    )
                                }
                            >

                                <span className="quick-icon green-bg">
                                    ▥
                                </span>


                                <div>

                                    <strong>
                                        View Progress →
                                    </strong>


                                    <small>
                                        Track improvement
                                    </small>

                                </div>

                            </button>

                        </div>

                    </div>

                </div>

            </div>


            {/* =================================================
                LOWER GRID
            ================================================= */}

            <div className="dashboard-lower-grid">


                {/* RECENT PROBLEMS */}

                <div className="dashboard-panel recent-panel">


                    <div className="panel-header">

                        <div className="panel-title">

                            <span className="panel-icon cyan">
                                ▤
                            </span>


                            <h2>
                                Recent Problems
                            </h2>

                        </div>


                        <button
                            className="panel-link"
                            onClick={() =>
                                setPage(
                                    "Practice Problem"
                                )
                            }
                        >
                            View All →
                        </button>

                    </div>


                    <div className="recent-problems-list">


                        {recentProblems.length === 0 ? (

                            <div className="empty-dashboard-state">

                                <div>
                                    ▣
                                </div>

                                <strong>
                                    No problems practiced yet
                                </strong>

                                <p>
                                    Start solving your first
                                    problem to see it here.
                                </p>

                                <button
                                    onClick={() =>
                                        setPage(
                                            "Practice Problem"
                                        )
                                    }
                                >
                                    Start Practicing →
                                </button>

                            </div>

                        ) : (

                            recentProblems.map(
                                (problem) => (

                                    <div
                                        className="recent-problem"
                                        key={
                                            problem.id
                                        }
                                    >

                                        <div
                                            className={
                                                problem.status
                                                    ?.toLowerCase() ===
                                                    "solved"
                                                    ? "problem-status solved"
                                                    : "problem-status"
                                            }
                                        >

                                            {problem.status
                                                ?.toLowerCase() ===
                                            "solved"
                                                ? "✓"
                                                : ""
                                            }

                                        </div>


                                        <div className="recent-problem-name">

                                            <strong>
                                                {
                                                    problem.title
                                                }
                                            </strong>

                                        </div>


                                        <span className="topic-badge">
                                            {
                                                problem.topic
                                            }
                                        </span>


                                        <span
                                            className={
                                                `difficulty-tag ${
                                                    problem.difficulty
                                                        ?.toLowerCase()
                                                }`
                                            }
                                        >
                                            {
                                                problem.difficulty
                                            }
                                        </span>


                                        <span
                                            className={
                                                problem.status
                                                    ?.toLowerCase() ===
                                                    "solved"
                                                    ? "recent-status solved-text"
                                                    : "recent-status"
                                            }
                                        >
                                            {
                                                problem.status
                                            }
                                        </span>

                                    </div>

                                )
                            )

                        )}

                    </div>

                </div>


                {/* =================================================
                    RECOMMENDED
                ================================================= */}

                <div className="dashboard-panel recommended-panel">


                    <div className="panel-header">

                        <div className="panel-title">

                            <span className="panel-icon pink">
                                ◉
                            </span>


                            <h2>
                                Recommended for You
                            </h2>

                        </div>


                        <button
                            className="panel-link"
                            onClick={() =>
                                setPage(
                                    "Practice Problem"
                                )
                            }
                        >
                            View All →
                        </button>

                    </div>


                    <div className="recommended-card">


                        <div>

                            <span className="recommended-label">
                                KEEP BUILDING
                            </span>


                            <h3>
                                Practice Your Next Problem
                            </h3>


                            <p>
                                Continue your DSA journey
                                and build stronger problem-solving
                                skills.
                            </p>


                            <div className="recommended-tags">

                                <span>
                                    DSA
                                </span>

                                <span>
                                    Practice
                                </span>

                            </div>

                        </div>


                        <button
                            className="recommend-arrow"
                            onClick={() =>
                                setPage(
                                    "Practice Problem"
                                )
                            }
                        >
                            →
                        </button>

                    </div>

                </div>

            </div>


            {/* =================================================
                DSA HEALTH PREVIEW
            ================================================= */}

            <div className="dashboard-health-section">


                <div className="health-header">

                    <div>

                        <p className="dashboard-eyebrow">
                            PERSONALIZED INSIGHT
                        </p>


                        <h2>
                            Your DSA Health
                        </h2>

                    </div>


                    <button
                        className="panel-link"
                        onClick={() =>
                            setPage(
                                "DSA Health"
                            )
                        }
                    >
                        View Full Health →
                    </button>

                </div>


                <div className="health-cards">


                    <div className="health-card">

                        <div className="health-card-top">

                            <span>
                                Arrays
                            </span>


                            <strong>
                                Good
                            </strong>

                        </div>


                        <div className="health-progress">

                            <div
                                style={{
                                    width: "82%"
                                }}
                            ></div>

                        </div>


                        <small>
                            82% health
                        </small>

                    </div>


                    <div className="health-card">

                        <div className="health-card-top">

                            <span>
                                Linked List
                            </span>


                            <strong>
                                Good
                            </strong>

                        </div>


                        <div className="health-progress">

                            <div
                                style={{
                                    width: "70%"
                                }}
                            ></div>

                        </div>


                        <small>
                            70% health
                        </small>

                    </div>


                    <div className="health-card weak">

                        <div className="health-card-top">

                            <span>
                                Recursion
                            </span>


                            <strong>
                                Needs Practice
                            </strong>

                        </div>


                        <div className="health-progress">

                            <div
                                style={{
                                    width: "38%"
                                }}
                            ></div>

                        </div>


                        <small>
                            38% health
                        </small>

                    </div>

                </div>

            </div>


        </section>

    );
}


export default Dashboard;