import { supabase } from "../lib/supabase";


/*
    Get all problem attempts of the current user.
*/
async function getUserAttempts(userId) {

    const { data, error } = await supabase
        .from("problem_attempts")
        .select(`
            id,
            problem_id,
            status,
            language,
            created_at,
            problems (
                id,
                title,
                topic,
                difficulty
            )
        `)
        .eq("user_id", userId)
        .order("created_at", {
            ascending: false
        });

    if (error) {
        console.error(
            "Dashboard attempts error:",
            error
        );

        throw error;
    }

    return data || [];
}


/*
    Problems solved.

    One problem is counted only once,
    even if the student submitted it multiple times.
*/
function calculateSolvedProblems(attempts) {
    const solvedProblemIds = new Set();
    attempts.forEach((attempt) => {
        const s = (attempt.status || "").toLowerCase().trim();
        if (s === "accepted" || s === "solved") {
            solvedProblemIds.add(attempt.problem_id);
        }
    });
    return solvedProblemIds.size;
}

/*
    Number of unique problems attempted.
*/
function calculateAttemptedProblems(attempts) {
    const attemptedProblemIds = new Set();
    attempts.forEach((attempt) => {
        attemptedProblemIds.add(attempt.problem_id);
    });
    return attemptedProblemIds.size;
}

/*
    Get today's activity count.
    Every problem practice counts as one activity.
*/
function calculateTodayActivity(attempts) {
    const today = new Date().toLocaleDateString("en-CA");
    return attempts.filter((attempt) => {
        const attemptDate = new Date(attempt.created_at).toLocaleDateString("en-CA");
        return attemptDate === today;
    }).length;
}

/*
    Get activity count for the last 7 calendar days.
*/
function calculateWeeklyActivity(attempts) {
    const activity = {};
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateKey = date.toLocaleDateString("en-CA");
        activity[dateKey] = 0;
    }

    attempts.forEach((attempt) => {
        const dateKey = new Date(attempt.created_at).toLocaleDateString("en-CA");
        if (Object.prototype.hasOwnProperty.call(activity, dateKey)) {
            activity[dateKey]++;
        }
    });

    return activity;
}

/*
    Calculate current streak.
    IMPORTANT: Only successful Accepted (or solved) submissions qualify a day as active.
    Multiple Accepted problems on the same day count as ONE streak day.
*/
function calculateCurrentStreak(attempts) {
    if (!attempts || attempts.length === 0) {
        return 0;
    }

    const activeDates = new Set();
    attempts.forEach((attempt) => {
        const s = (attempt.status || "").toLowerCase().trim();
        // Only Accepted / solved submissions contribute to the solving streak
        if (s === "accepted" || s === "solved") {
            const dateKey = new Date(attempt.created_at).toLocaleDateString("en-CA");
            activeDates.add(dateKey);
        }
    });

    if (activeDates.size === 0) {
        return 0;
    }

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayKey = today.toLocaleDateString("en-CA");

    let checkDate = new Date(today);
    if (!activeDates.has(todayKey)) {
        checkDate.setDate(checkDate.getDate() - 1);
        const yesterdayKey = checkDate.toLocaleDateString("en-CA");
        if (!activeDates.has(yesterdayKey)) {
            return 0;
        }
    }

    while (true) {
        const dateKey = checkDate.toLocaleDateString("en-CA");
        if (!activeDates.has(dateKey)) {
            break;
        }
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
    }

    return streak;
}

/*
    Get recent problems.
    Strictly returns unique problems that have been successfully solved (Accepted).
    Most recently Accepted problems appear first.
*/
function getRecentProblems(attempts) {
    const seen = new Set();
    const recent = [];

    for (const attempt of attempts) {
        const s = (attempt.status || "").toLowerCase().trim();
        // Only Accepted / solved attempts qualify as recent solved problems
        if (s !== "accepted" && s !== "solved") {
            continue;
        }

        if (seen.has(attempt.problem_id)) {
            continue;
        }

        seen.add(attempt.problem_id);

        recent.push({
            id: attempt.problem_id,
            title: attempt.problems?.title || "Unknown Problem",
            topic: attempt.problems?.topic || "Unknown",
            difficulty: attempt.problems?.difficulty || "Unknown",
            status: "Accepted",
            createdAt: attempt.created_at
        });

        if (recent.length === 5) {
            break;
        }
    }

    return recent;
}

/*
    Main Dashboard function.
*/
export async function getDashboardData(userId) {
    if (!userId) {
        throw new Error("User ID is required.");
    }

    const attempts = await getUserAttempts(userId);

    const { data: dbProblems, error: probError } = await supabase
        .from("problems")
        .select("id, is_generated, generated_by");

    if (probError) {
        console.error("Total problems error:", probError);
        throw probError;
    }

    // Filter problems accessible to this user
    const userAccessibleProblems = (dbProblems || []).filter(
        p => !p.is_generated || p.generated_by === userId
    );

    const totalProblems = userAccessibleProblems.length;
    const solvedProblems = calculateSolvedProblems(attempts);
    const attemptedProblems = calculateAttemptedProblems(attempts);
    const todayActivity = calculateTodayActivity(attempts);
    const weeklyActivity = calculateWeeklyActivity(attempts);
    const currentStreak = calculateCurrentStreak(attempts);
    const recentProblems = getRecentProblems(attempts);


    return {

        solvedProblems,

        attemptedProblems,

        totalProblems,

        remainingProblems:
            Math.max(
                totalProblems -
                solvedProblems,
                0
            ),

        todayActivity,

        currentStreak,

        weeklyActivity,

        recentProblems

    };
}