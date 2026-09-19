import { supabase } from "../lib/supabase.js";
import { getAuthRedirectUrl } from "./authService.js";

const LOCAL_STORAGE_KEY_PREFIX = "codemedic_profile_";

/**
 * Get unified user profile from Supabase Auth metadata and public.users table.
 */
export async function getUserProfile(userId) {
    if (!userId) return null;

    try {
        // 1. Get current auth user to read user_metadata
        const { data: authData, error: authError } = await supabase.auth.getUser();
        const authUser = authData?.user;
        const meta = authUser?.user_metadata || {};

        // 2. Fetch from public.users table
        const { data: dbUser, error: dbError } = await supabase
            .from("users")
            .select("*")
            .eq("id", userId)
            .maybeSingle();

        if (dbError && dbError.code !== "PGRST116") {
            console.warn("Public users table read note:", dbError.message);
        }

        const email = authUser?.email || dbUser?.email || "";
        const defaultUsername = email ? email.split("@")[0] : "coder";

        const profile = {
            id: userId,
            email: email,
            name: meta.name || dbUser?.name || defaultUsername,
            username: meta.username || defaultUsername,
            role: meta.role || "Student",
            bio: meta.bio || "",
            avatar_url: meta.avatar_url || "",
            college: meta.college || "",
            location: meta.location || "",
            website: meta.website || "",
            github: meta.github || "",
            linkedin: meta.linkedin || "",
            platform_handles: {
                leetcode: meta.platform_handles?.leetcode || "",
                codeforces: meta.platform_handles?.codeforces || "",
                codechef: meta.platform_handles?.codechef || "",
                hackerrank: meta.platform_handles?.hackerrank || "",
                atcoder: meta.platform_handles?.atcoder || "",
                geeksforgeeks: meta.platform_handles?.geeksforgeeks || "",
                github: meta.platform_handles?.github || meta.github || ""
            },
            privacy_settings: {
                show_on_leaderboard: meta.privacy_settings?.show_on_leaderboard ?? true,
                show_on_friends_leaderboard: meta.privacy_settings?.show_on_friends_leaderboard ?? true,
                public_profile: meta.privacy_settings?.public_profile ?? true,
                show_following: meta.privacy_settings?.show_following ?? true,
                show_followers: meta.privacy_settings?.show_followers ?? true
            },
            notification_settings: {
                comments: meta.notification_settings?.comments ?? true,
                replies: meta.notification_settings?.replies ?? true,
                mentions: meta.notification_settings?.mentions ?? true,
                upvotes: meta.notification_settings?.upvotes ?? true,
                new_followers: meta.notification_settings?.new_followers ?? true,
                daily_reminder: meta.notification_settings?.daily_reminder ?? true,
                revision_reminder: meta.notification_settings?.revision_reminder ?? true,
                streak_reminder: meta.notification_settings?.streak_reminder ?? true,
                weak_topic_reminder: meta.notification_settings?.weak_topic_reminder ?? true,
                analysis_completed: meta.notification_settings?.analysis_completed ?? true,
                practice_recommendations: meta.notification_settings?.practice_recommendations ?? true
            },
            earned_badges: meta.earned_badges || [],
            created_at: dbUser?.created_at || authUser?.created_at || new Date().toISOString()
        };

        // Cache locally
        try {
            localStorage.setItem(`${LOCAL_STORAGE_KEY_PREFIX}${userId}`, JSON.stringify(profile));
        } catch (_) {}

        return profile;
    } catch (err) {
        console.error("Error fetching user profile:", err);
        // Fallback to local cache if offline/error
        try {
            const cached = localStorage.getItem(`${LOCAL_STORAGE_KEY_PREFIX}${userId}`);
            if (cached) return JSON.parse(cached);
        } catch (_) {}
        return null;
    }
}

/**
 * Update user profile in Supabase Auth user_metadata and sync name to public.users.
 */
export async function updateUserProfile(userId, updates) {
    if (!userId) throw new Error("User ID is required to update profile.");

    try {
        // 1. Get current metadata
        const { data: authData } = await supabase.auth.getUser();
        const currentMeta = authData?.user?.user_metadata || {};

        const mergedMeta = {
            ...currentMeta,
            ...updates,
            platform_handles: {
                ...(currentMeta.platform_handles || {}),
                ...(updates.platform_handles || {})
            },
            privacy_settings: {
                ...(currentMeta.privacy_settings || {}),
                ...(updates.privacy_settings || {})
            },
            notification_settings: {
                ...(currentMeta.notification_settings || {}),
                ...(updates.notification_settings || {})
            }
        };

        // 2. Persist to Supabase Auth user_metadata
        const { data: updatedAuth, error: authUpdateError } = await supabase.auth.updateUser({
            data: mergedMeta
        });

        if (authUpdateError) {
            throw authUpdateError;
        }

        // 3. Sync name to public.users if updated
        if (updates.name) {
            await supabase
                .from("users")
                .update({ name: updates.name })
                .eq("id", userId);
        }

        // 4. Update cache
        const updatedProfile = await getUserProfile(userId);
        return updatedProfile;
    } catch (err) {
        console.error("Error updating user profile:", err);
        throw err;
    }
}

/**
 * Update coding platform handles.
 */
export async function updatePlatformHandle(userId, platform, handle) {
    const profile = await getUserProfile(userId);
    const platform_handles = {
        ...(profile?.platform_handles || {}),
        [platform]: (handle || "").trim()
    };
    return updateUserProfile(userId, { platform_handles });
}

/**
 * Update privacy preferences.
 */
export async function updatePrivacySettings(userId, privacyUpdates) {
    const profile = await getUserProfile(userId);
    const privacy_settings = {
        ...(profile?.privacy_settings || {}),
        ...privacyUpdates
    };
    return updateUserProfile(userId, { privacy_settings });
}

/**
 * Update notification preferences.
 */
export async function updateNotificationSettings(userId, notificationUpdates) {
    const profile = await getUserProfile(userId);
    const notification_settings = {
        ...(profile?.notification_settings || {}),
        ...notificationUpdates
    };
    return updateUserProfile(userId, { notification_settings });
}

/**
 * Update user email in Supabase Auth with environment-aware redirect.
 */
export async function updateUserEmail(newEmail) {
    if (!newEmail || !newEmail.includes("@")) {
        throw new Error("Please enter a valid email address.");
    }
    const { data, error } = await supabase.auth.updateUser(
        { email: newEmail },
        { emailRedirectTo: getAuthRedirectUrl() }
    );
    if (error) throw error;
    return data;
}

/**
 * Update user password in Supabase Auth.
 */
export async function updateUserPassword(newPassword) {
    if (!newPassword || newPassword.length < 6) {
        throw new Error("Password must be at least 6 characters.");
    }
    const { data, error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw error;
    return data;
}

/**
 * Calculate user points based on real problem attempts and streaks.
 * 10 points per Accepted problem, 2 points per attempt, 5 bonus points per streak day.
 */
export function calculateUserPoints(attempts, streak = 0) {
    if (!attempts || attempts.length === 0) {
        return {
            totalPoints: 0,
            solvePoints: 0,
            attemptPoints: 0,
            streakBonus: 0,
            history: []
        };
    }

    let solvePoints = 0;
    let attemptPoints = 0;
    const history = [];

    // Track unique solves for +10 points award
    const solvedSet = new Set();

    attempts.forEach(att => {
        const isAccepted =
            (att.status || "").toLowerCase() === "accepted" ||
            (att.status || "").toLowerCase() === "solved";

        if (isAccepted && !solvedSet.has(att.problem_id)) {
            solvedSet.add(att.problem_id);
            solvePoints += 10;
            history.push({
                id: `pts-solve-${att.id}`,
                title: att.problems?.title ? `Accepted: ${att.problems.title}` : "Problem Solved",
                type: "SOLVE",
                points: 10,
                date: att.created_at
            });
        } else {
            attemptPoints += 2;
            history.push({
                id: `pts-att-${att.id}`,
                title: att.problems?.title ? `Practice Attempt: ${att.problems.title}` : "Practice Attempt",
                type: "ATTEMPT",
                points: 2,
                date: att.created_at
            });
        }
    });

    const streakBonus = (streak || 0) * 5;
    if (streakBonus > 0) {
        history.unshift({
            id: `pts-streak-${Date.now()}`,
            title: `${streak}-Day Solving Streak Bonus`,
            type: "STREAK",
            points: streakBonus,
            date: new Date().toISOString()
        });
    }

    const totalPoints = solvePoints + attemptPoints + streakBonus;

    return {
        totalPoints,
        solvePoints,
        attemptPoints,
        streakBonus,
        history: history.slice(0, 20) // Most recent 20 events
    };
}
