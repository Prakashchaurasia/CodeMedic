import { supabase } from "../lib/supabase.js";

/**
 * Definition of all CodeMedic Original Achievement Badges.
 * All designs and concepts are original to CodeMedic's coding + clinical problem-solving identity.
 */
export const BADGE_DEFINITIONS = [
    {
        id: "first_solve",
        name: "First Diagnosis",
        category: "Milestones",
        description: "Submit your very first Accepted solution on CodeMedic.",
        criteriaDescription: "Solve 1 problem with Accepted status",
        icon: "🩺",
        badgeType: "bronze",
        targetValue: 1,
        evaluator: ({ solvedProblems }) => ({
            isEligible: solvedProblems >= 1,
            currentValue: solvedProblems,
            progressPercent: Math.min(100, Math.round((solvedProblems / 1) * 100))
        })
    },
    {
        id: "streak_7",
        name: "7-Day Clinical Rhythm",
        category: "Consistency",
        description: "Maintain a consecutive 7-day daily problem-solving streak.",
        criteriaDescription: "Maintain a 7-day solving streak",
        icon: "⚡",
        badgeType: "silver",
        targetValue: 7,
        evaluator: ({ currentStreak }) => ({
            isEligible: currentStreak >= 7,
            currentValue: currentStreak,
            progressPercent: Math.min(100, Math.round((currentStreak / 7) * 100))
        })
    },
    {
        id: "streak_30",
        name: "30-Day Vitals",
        category: "Consistency",
        description: "Maintain a 30-day streak of daily problem-solving discipline.",
        criteriaDescription: "Maintain a 30-day solving streak",
        icon: "🔥",
        badgeType: "gold",
        targetValue: 30,
        evaluator: ({ currentStreak }) => ({
            isEligible: currentStreak >= 30,
            currentValue: currentStreak,
            progressPercent: Math.min(100, Math.round((currentStreak / 30) * 100))
        })
    },
    {
        id: "streak_90",
        name: "Quarterly Discipline",
        category: "Consistency",
        description: "Achieve 90 consecutive calendar days of active problem solving.",
        criteriaDescription: "Maintain a 90-day solving streak",
        icon: "🛡️",
        badgeType: "platinum",
        targetValue: 90,
        evaluator: ({ currentStreak }) => ({
            isEligible: currentStreak >= 90,
            currentValue: currentStreak,
            progressPercent: Math.min(100, Math.round((currentStreak / 90) * 100))
        })
    },
    {
        id: "streak_180",
        name: "Semi-Annual Residency",
        category: "Consistency",
        description: "Achieve 180 consecutive calendar days of active problem solving.",
        criteriaDescription: "Maintain a 180-day solving streak",
        icon: "💎",
        badgeType: "diamond",
        targetValue: 180,
        evaluator: ({ currentStreak }) => ({
            isEligible: currentStreak >= 180,
            currentValue: currentStreak,
            progressPercent: Math.min(100, Math.round((currentStreak / 180) * 100))
        })
    },
    {
        id: "streak_365",
        name: "365-Day Iron Will",
        category: "Consistency",
        description: "Solve problems every single day for an entire 365-day year.",
        criteriaDescription: "Maintain a 365-day solving streak",
        icon: "👑",
        badgeType: "legendary",
        targetValue: 365,
        evaluator: ({ currentStreak }) => ({
            isEligible: currentStreak >= 365,
            currentValue: currentStreak,
            progressPercent: Math.min(100, Math.round((currentStreak / 365) * 100))
        })
    },
    {
        id: "dsa_explorer",
        name: "DSA Explorer",
        category: "Exploration",
        description: "Successfully solve problems across at least 3 distinct DSA topics.",
        criteriaDescription: "Solve problems in 3 different DSA topics",
        icon: "🧭",
        badgeType: "silver",
        targetValue: 3,
        evaluator: ({ topicsSolvedCount }) => ({
            isEligible: topicsSolvedCount >= 3,
            currentValue: topicsSolvedCount,
            progressPercent: Math.min(100, Math.round((topicsSolvedCount / 3) * 100))
        })
    },
    {
        id: "topic_specialist",
        name: "Topic Specialist",
        category: "Mastery",
        description: "Solve 5 or more problems in a single specific topic area.",
        criteriaDescription: "Solve 5 problems in any single topic",
        icon: "🎯",
        badgeType: "gold",
        targetValue: 5,
        evaluator: ({ maxTopicSolved }) => ({
            isEligible: maxTopicSolved >= 5,
            currentValue: maxTopicSolved,
            progressPercent: Math.min(100, Math.round((maxTopicSolved / 5) * 100))
        })
    },
    {
        id: "milestone_25",
        name: "Clinical Specialist",
        category: "Milestones",
        description: "Successfully diagnose and solve 25 unique coding problems.",
        criteriaDescription: "Solve 25 unique problems",
        icon: "🔬",
        badgeType: "silver",
        targetValue: 25,
        evaluator: ({ solvedProblems }) => ({
            isEligible: solvedProblems >= 25,
            currentValue: solvedProblems,
            progressPercent: Math.min(100, Math.round((solvedProblems / 25) * 100))
        })
    },
    {
        id: "milestone_50",
        name: "Senior Resident",
        category: "Milestones",
        description: "Successfully solve 50 unique coding challenges.",
        criteriaDescription: "Solve 50 unique problems",
        icon: "🌟",
        badgeType: "gold",
        targetValue: 50,
        evaluator: ({ solvedProblems }) => ({
            isEligible: solvedProblems >= 50,
            currentValue: solvedProblems,
            progressPercent: Math.min(100, Math.round((solvedProblems / 50) * 100))
        })
    },
    {
        id: "century_club_100",
        name: "CodeMedic Centurion",
        category: "Milestones",
        description: "Enter the elite Centurion tier with 100 unique problems solved.",
        criteriaDescription: "Solve 100 unique problems",
        icon: "⚔️",
        badgeType: "legendary",
        targetValue: 100,
        evaluator: ({ solvedProblems }) => ({
            isEligible: solvedProblems >= 100,
            currentValue: solvedProblems,
            progressPercent: Math.min(100, Math.round((solvedProblems / 100) * 100))
        })
    },
    {
        id: "monthly_practice",
        name: "Full Rotation",
        category: "Consistency",
        description: "Satisfy daily solving practice for every day of a calendar month.",
        criteriaDescription: "Complete a full 30-day calendar month of daily practice",
        icon: "📅",
        badgeType: "platinum",
        targetValue: 30,
        evaluator: ({ currentStreak }) => ({
            isEligible: currentStreak >= 30,
            currentValue: currentStreak,
            progressPercent: Math.min(100, Math.round((currentStreak / 30) * 100))
        })
    }
];

/**
 * Evaluate badge criteria against genuine user data and persist newly earned badges.
 * Idempotent: Can be called multiple times without duplicate badges or changing earned_at.
 */
export async function evaluateAndSyncBadges({
    userId,
    solvedProblems = 0,
    currentStreak = 0,
    attempts = [],
    existingBadges = []
}) {
    if (!userId) {
        return {
            earnedBadges: [],
            lockedBadges: BADGE_DEFINITIONS.map(b => ({
                ...b,
                isEarned: false,
                currentValue: 0,
                progressPercent: 0
            })),
            allBadges: []
        };
    }

    // 1. Calculate topic metrics from attempts
    const topicSolvedMap = new Map();
    const solvedProblemIds = new Set();

    attempts.forEach(att => {
        const isAccepted =
            (att.status || "").toLowerCase() === "accepted" ||
            (att.status || "").toLowerCase() === "solved";

        if (isAccepted && !solvedProblemIds.has(att.problem_id)) {
            solvedProblemIds.add(att.problem_id);
            const topic = att.problems?.topic || "General";
            topicSolvedMap.set(topic, (topicSolvedMap.get(topic) || 0) + 1);
        }
    });

    const topicsSolvedCount = topicSolvedMap.size;
    let maxTopicSolved = 0;
    for (const count of topicSolvedMap.values()) {
        if (count > maxTopicSolved) maxTopicSolved = count;
    }

    const evaluationContext = {
        solvedProblems: Math.max(solvedProblems, solvedProblemIds.size),
        currentStreak,
        topicsSolvedCount,
        maxTopicSolved,
        totalAttempts: attempts.length
    };

    // 2. Map existing earned badges by id
    const earnedMap = new Map();
    (existingBadges || []).forEach(b => {
        if (b && b.id) {
            earnedMap.set(b.id, b);
        }
    });

    let newBadgeAwarded = false;
    const allBadges = [];
    const earnedBadges = [];
    const lockedBadges = [];

    BADGE_DEFINITIONS.forEach(badgeDef => {
        const evalResult = badgeDef.evaluator(evaluationContext);
        const alreadyEarned = earnedMap.get(badgeDef.id);

        if (alreadyEarned) {
            // Keep original earned_at date
            const badgeRecord = {
                ...badgeDef,
                isEarned: true,
                earned_at: alreadyEarned.earned_at || new Date().toISOString(),
                currentValue: evalResult.currentValue,
                progressPercent: 100
            };
            allBadges.push(badgeRecord);
            earnedBadges.push(badgeRecord);
        } else if (evalResult.isEligible) {
            // Newly earned!
            const newRecord = {
                ...badgeDef,
                isEarned: true,
                earned_at: new Date().toISOString(),
                currentValue: evalResult.currentValue,
                progressPercent: 100
            };
            earnedMap.set(badgeDef.id, newRecord);
            allBadges.push(newRecord);
            earnedBadges.push(newRecord);
            newBadgeAwarded = true;
        } else {
            // Locked badge
            const lockedRecord = {
                ...badgeDef,
                isEarned: false,
                currentValue: evalResult.currentValue,
                progressPercent: evalResult.progressPercent
            };
            allBadges.push(lockedRecord);
            lockedBadges.push(lockedRecord);
        }
    });

    // 3. Persist to Supabase if any new badge was earned
    if (newBadgeAwarded) {
        try {
            const { data: authData } = await supabase.auth.getUser();
            const currentMeta = authData?.user?.user_metadata || {};
            const updatedEarnedList = Array.from(earnedMap.values()).map(b => ({
                id: b.id,
                name: b.name,
                earned_at: b.earned_at,
                category: b.category
            }));

            await supabase.auth.updateUser({
                data: {
                    ...currentMeta,
                    earned_badges: updatedEarnedList
                }
            });
        } catch (err) {
            console.error("Error persisting newly earned badges:", err);
        }
    }

    return {
        earnedBadges,
        lockedBadges,
        allBadges
    };
}
