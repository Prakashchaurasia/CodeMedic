import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import {
    getUserAttempts,
    calculateSolvedProblems,
    calculateAttemptedProblems,
    calculateCurrentStreak
} from "../services/dashboardService";
import { calculateDSAHealth, DSA_TOPICS } from "../services/dsaHealthService";
import {
    getUserProfile,
    updateUserProfile,
    updatePlatformHandle
} from "../services/profileService";
import { evaluateAndSyncBadges, BADGE_DEFINITIONS } from "../services/badgeService";
import "./Profile.css";

// Platform external URL formatters
const PLATFORM_CONFIGS = [
    {
        id: "leetcode",
        name: "LeetCode",
        icon: "⚡",
        color: "#ffa116",
        getUrl: (handle) => `https://leetcode.com/u/${handle}/`
    },
    {
        id: "codeforces",
        name: "Codeforces",
        icon: "⚔️",
        color: "#3b82f6",
        getUrl: (handle) => `https://codeforces.com/profile/${handle}`
    },
    {
        id: "codechef",
        name: "CodeChef",
        icon: "🍳",
        color: "#8b5cf6",
        getUrl: (handle) => `https://www.codechef.com/users/${handle}`
    },
    {
        id: "hackerrank",
        name: "HackerRank",
        icon: "🟩",
        color: "#10b981",
        getUrl: (handle) => `https://www.hackerrank.com/profile/${handle}`
    },
    {
        id: "atcoder",
        name: "AtCoder",
        icon: "🔷",
        color: "#06b6d4",
        getUrl: (handle) => `https://atcoder.jp/users/${handle}`
    },
    {
        id: "geeksforgeeks",
        name: "GeeksforGeeks",
        icon: "🌿",
        color: "#22c55e",
        getUrl: (handle) => `https://www.geeksforgeeks.org/user/${handle}/`
    },
    {
        id: "github",
        name: "GitHub",
        icon: "🐙",
        color: "#e2e8f0",
        getUrl: (handle) => `https://github.com/${handle}`
    }
];

// Topic classifications
const SKILL_TIERS = {
    Advanced: ["Dynamic Programming", "Graphs", "Backtracking"],
    Intermediate: ["Trees", "Binary Search", "Stack", "Queue", "Linked Lists", "Greedy"],
    Fundamental: ["Arrays", "Strings", "Hashing", "Recursion"]
};

function Profile({ user, setPage, onProfileUpdated }) {
    const userId = user?.id;

    const [loading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState(null);
    const [stats, setStats] = useState({
        solvedProblems: 0,
        attemptedProblems: 0,
        currentStreak: 0,
        totalSubmissions: 0
    });
    const [attemptsList, setAttemptsList] = useState([]);
    const [dsaHealth, setDsaHealth] = useState(null);
    const [badgeState, setBadgeState] = useState({
        earnedBadges: [],
        lockedBadges: [],
        allBadges: []
    });
    const [badgeFilter, setBadgeFilter] = useState("all"); // 'all' | 'earned' | 'locked'

    // Edit Modal state
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editForm, setEditForm] = useState({
        name: "",
        username: "",
        bio: "",
        avatar_url: "",
        college: "",
        location: "",
        website: "",
        github: "",
        linkedin: ""
    });
    const [savingProfile, setSavingProfile] = useState(false);
    const [notificationMsg, setNotificationMsg] = useState("");

    // Platform inline editing state
    const [editingPlatform, setEditingPlatform] = useState(null);
    const [platformInputValue, setPlatformInputValue] = useState("");
    const [platformSaving, setPlatformSaving] = useState(false);

    // Fetch and sync all real data
    useEffect(() => {
        let isMounted = true;

        async function loadProfileData() {
            if (!userId) return;
            setLoading(true);

            try {
                // 1. Fetch unified profile
                const p = await getUserProfile(userId);

                // 2. Fetch attempts from single source of truth
                const attempts = await getUserAttempts(userId);

                // 3. Compute real stats using single source of truth
                const solved = calculateSolvedProblems(attempts);
                const attempted = calculateAttemptedProblems(attempts);
                const streak = calculateCurrentStreak(attempts);
                const totalSubs = attempts.length;

                // 4. Fetch DSA health for real skills breakdown
                const health = await calculateDSAHealth(userId);

                // 5. Evaluate and sync badges
                const badges = await evaluateAndSyncBadges({
                    userId,
                    solvedProblems: solved,
                    currentStreak: streak,
                    attempts,
                    existingBadges: p?.earned_badges || []
                });

                if (isMounted) {
                    setProfileData(p);
                    setStats({
                        solvedProblems: solved,
                        attemptedProblems: attempted,
                        currentStreak: streak,
                        totalSubmissions: totalSubs
                    });
                    setAttemptsList(attempts);
                    setDsaHealth(health);
                    setBadgeState(badges);

                    // Initialize edit form
                    setEditForm({
                        name: p?.name || "",
                        username: p?.username || "",
                        bio: p?.bio || "",
                        avatar_url: p?.avatar_url || "",
                        college: p?.college || "",
                        location: p?.location || "",
                        website: p?.website || "",
                        github: p?.github || "",
                        linkedin: p?.linkedin || ""
                    });
                }
            } catch (err) {
                console.error("Error loading profile:", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadProfileData();

        return () => {
            isMounted = false;
        };
    }, [userId]);

    // Handle Edit Profile Save
    async function handleSaveProfile(e) {
        e.preventDefault();
        setSavingProfile(true);
        try {
            const updated = await updateUserProfile(userId, editForm);
            setProfileData(updated);
            setIsEditModalOpen(false);
            showToast("Profile updated successfully!");
            if (onProfileUpdated) onProfileUpdated(updated);
        } catch (err) {
            console.error("Save profile error:", err);
            showToast("Failed to update profile. " + (err.message || ""));
        } finally {
            setSavingProfile(false);
        }
    }

    // Handle Platform Save
    async function handleSavePlatform(platformId) {
        setPlatformSaving(true);
        try {
            const updated = await updatePlatformHandle(userId, platformId, platformInputValue);
            setProfileData(updated);
            setEditingPlatform(null);
            setPlatformInputValue("");
            showToast(`${platformId} handle updated!`);
            if (onProfileUpdated) onProfileUpdated(updated);
        } catch (err) {
            console.error("Save platform handle error:", err);
            showToast("Failed to save platform handle.");
        } finally {
            setPlatformSaving(false);
        }
    }

    // Handle Platform Disconnect
    async function handleDisconnectPlatform(platformId) {
        setPlatformSaving(true);
        try {
            const updated = await updatePlatformHandle(userId, platformId, "");
            setProfileData(updated);
            showToast(`${platformId} disconnected.`);
            if (onProfileUpdated) onProfileUpdated(updated);
        } catch (err) {
            console.error("Disconnect platform error:", err);
            showToast("Failed to disconnect platform.");
        } finally {
            setPlatformSaving(false);
        }
    }

    function showToast(msg) {
        setNotificationMsg(msg);
        setTimeout(() => setNotificationMsg(""), 3500);
    }

    const displayName = profileData?.name || user?.email?.split("@")[0] || "CodeMedic Solver";
    const username = profileData?.username || user?.email?.split("@")[0] || "coder";
    const initials = displayName.charAt(0).toUpperCase();

    const displayedBadges =
        badgeFilter === "earned"
            ? badgeState.earnedBadges
            : badgeFilter === "locked"
            ? badgeState.lockedBadges
            : badgeState.allBadges;

    if (loading && !profileData) {
        return (
            <div className="profile-container">
                <div className="profile-loading-card">
                    <div className="profile-spinner"></div>
                    <p>Loading CodeMedic Profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-container">
            {/* TOAST NOTIFICATION */}
            {notificationMsg && (
                <div className="profile-toast">
                    {notificationMsg}
                </div>
            )}

            {/* 1. PROFILE HEADER */}
            <div className="profile-header-card">
                <div className="profile-header-main">
                    <div className="profile-avatar-large">
                        {profileData?.avatar_url ? (
                            <img
                                src={profileData.avatar_url}
                                alt={displayName}
                                onError={(e) => {
                                    e.target.style.display = "none";
                                }}
                            />
                        ) : null}
                        <span className="avatar-fallback-text">{initials}</span>
                    </div>

                    <div className="profile-details">
                        <div className="profile-name-row">
                            <h1 className="profile-display-name">{displayName}</h1>
                            <span className="profile-username">@{username}</span>
                            <span className="profile-role-badge">{profileData?.role || "Student"}</span>
                        </div>

                        <p className="profile-bio">
                            {profileData?.bio || "Problem solver on CodeMedic. Practicing data structures and algorithms."}
                        </p>

                        <div className="profile-meta-row">
                            {profileData?.college && (
                                <span className="profile-meta-item">
                                    <span className="meta-icon">🎓</span> {profileData.college}
                                </span>
                            )}
                            {profileData?.location && (
                                <span className="profile-meta-item">
                                    <span className="meta-icon">📍</span> {profileData.location}
                                </span>
                            )}
                            <span className="profile-meta-item">
                                <span className="meta-icon">📅</span> Joined {new Date(profileData?.created_at || Date.now()).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="profile-social-links">
                            {profileData?.github && (
                                <a
                                    href={`https://github.com/${profileData.github.replace(/^@/, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-pill"
                                >
                                    <span>🐙</span> GitHub
                                </a>
                            )}
                            {profileData?.linkedin && (
                                <a
                                    href={profileData.linkedin.startsWith("http") ? profileData.linkedin : `https://${profileData.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-pill"
                                >
                                    <span>💼</span> LinkedIn
                                </a>
                            )}
                            {profileData?.website && (
                                <a
                                    href={profileData.website.startsWith("http") ? profileData.website : `https://${profileData.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-pill"
                                >
                                    <span>🌐</span> Website
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side of Header: Actions & CodeMedic Identity Badge */}
                <div className="profile-header-aside">
                    <button
                        className="btn-edit-profile"
                        onClick={() => setIsEditModalOpen(true)}
                    >
                        <span>✏️</span> Edit Profile
                    </button>

                    {/* =========================================================
                        CODEMEDIC IDENTITY BADGE (ALWAYS PRESENT, NOT AN ACHIEVEMENT)
                    ========================================================= */}
                    <div className="codemedic-identity-badge" title="Official CodeMedic Member & Problem Solver">
                        <div className="identity-badge-glow"></div>
                        <div className="identity-badge-inner">
                            <div className="identity-badge-shield">
                                <div className="identity-badge-symbol">
                                    <span className="code-bracket">&lt;</span>
                                    <span className="pulse-heartbeat">♥</span>
                                    <span className="code-bracket">&gt;</span>
                                </div>
                            </div>
                            <div className="identity-badge-info">
                                <span className="identity-badge-brand">CODEMEDIC</span>
                                <span className="identity-badge-tag">OFFICIAL SOLVER</span>
                                <span className="identity-badge-desc">Problem-Solving Journey Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. CODING STATISTICS (SINGLE SOURCE OF TRUTH REUSING DASHBOARD SERVICE) */}
            <div className="profile-stats-grid">
                <div className="profile-stat-card">
                    <div className="stat-icon-wrapper stat-solved">
                        <span>✓</span>
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{stats.solvedProblems}</div>
                        <div className="stat-label">Problems Solved</div>
                        <div className="stat-subtext">Unique Accepted problems</div>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <div className="stat-icon-wrapper stat-attempted">
                        <span>▣</span>
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{stats.attemptedProblems}</div>
                        <div className="stat-label">Problems Attempted</div>
                        <div className="stat-subtext">Unique problems practiced</div>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <div className="stat-icon-wrapper stat-streak">
                        <span>🔥</span>
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{stats.currentStreak} <span className="stat-unit">days</span></div>
                        <div className="stat-label">Current Streak</div>
                        <div className="stat-subtext">Consecutive active solving days</div>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <div className="stat-icon-wrapper stat-submissions">
                        <span>📊</span>
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{stats.totalSubmissions}</div>
                        <div className="stat-label">Total Submissions</div>
                        <div className="stat-subtext">Recorded code evaluations</div>
                    </div>
                </div>
            </div>

            {/* 3. TWO-COLUMN CONTENT AREA: LEFT (SKILLS & ACHIEVEMENTS) | RIGHT (PLATFORMS & RECENT ACTIVITY) */}
            <div className="profile-body-grid">
                {/* LEFT COLUMN */}
                <div className="profile-col-left">

                    {/* SECTION: SKILLS */}
                    <div className="profile-section-card">
                        <div className="section-header-row">
                            <h2 className="section-title">
                                <span className="title-icon">◈</span> DSA Skills Breakdown
                            </h2>
                            <span className="section-badge">Real Activity</span>
                        </div>
                        <p className="section-description">
                            Topic progress derived directly from your CodeMedic submissions and DSA health diagnostics.
                        </p>

                        <div className="skills-tiers-container">
                            {Object.entries(SKILL_TIERS).map(([tierName, topics]) => (
                                <div key={tierName} className="skill-tier-block">
                                    <div className="tier-header">
                                        <span className={`tier-badge tier-${tierName.toLowerCase()}`}>{tierName}</span>
                                    </div>
                                    <div className="tier-topics-list">
                                        {topics.map((topicName) => {
                                            const topicScore = (dsaHealth?.topicScores || []).find(
                                                (t) => t.topic.toLowerCase() === topicName.toLowerCase()
                                            );
                                            const attempted = topicScore?.attempted || 0;
                                            const solved = topicScore?.solved || 0;

                                            return (
                                                <div key={topicName} className="skill-topic-item">
                                                    <div className="topic-header-line">
                                                        <span className="topic-name">{topicName}</span>
                                                        <span className="topic-counts">
                                                            <strong className={solved > 0 ? "highlight-solved" : ""}>{solved}</strong> solved / {attempted} attempted
                                                        </span>
                                                    </div>
                                                    <div className="topic-progress-bar">
                                                        <div
                                                            className="topic-progress-fill"
                                                            style={{
                                                                width: `${attempted > 0 ? Math.min(100, Math.round((solved / Math.max(attempted, 5)) * 100)) : 0}%`
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION: ACHIEVEMENT BADGES (ORIGINAL CODEMEDIC BADGES) */}
                    <div className="profile-section-card">
                        <div className="section-header-row">
                            <h2 className="section-title">
                                <span className="title-icon">🎖️</span> Achievement Badges
                            </h2>
                            <div className="badge-filter-tabs">
                                <button
                                    className={`badge-filter-btn ${badgeFilter === "all" ? "active" : ""}`}
                                    onClick={() => setBadgeFilter("all")}
                                >
                                    All ({badgeState.allBadges.length})
                                </button>
                                <button
                                    className={`badge-filter-btn ${badgeFilter === "earned" ? "active" : ""}`}
                                    onClick={() => setBadgeFilter("earned")}
                                >
                                    Earned ({badgeState.earnedBadges.length})
                                </button>
                                <button
                                    className={`badge-filter-btn ${badgeFilter === "locked" ? "active" : ""}`}
                                    onClick={() => setBadgeFilter("locked")}
                                >
                                    Locked ({badgeState.lockedBadges.length})
                                </button>
                            </div>
                        </div>
                        <p className="section-description">
                            Original CodeMedic achievements awarded exclusively upon fulfilling verified problem-solving criteria.
                        </p>

                        {displayedBadges.length === 0 ? (
                            <div className="empty-badges-msg">
                                {badgeFilter === "earned"
                                    ? "No badges earned yet. Solve your first problem to unlock First Diagnosis!"
                                    : "No badges match this filter."}
                            </div>
                        ) : (
                            <div className="badges-grid">
                                {displayedBadges.map((badge) => (
                                    <div
                                        key={badge.id}
                                        className={`badge-card ${badge.isEarned ? "badge-earned" : "badge-locked"}`}
                                    >
                                        <div className="badge-icon-wrap">
                                            <span className="badge-icon">{badge.icon}</span>
                                            {badge.isEarned ? (
                                                <span className="badge-status-check" title="Earned">✓</span>
                                            ) : (
                                                <span className="badge-status-lock" title="Locked">🔒</span>
                                            )}
                                        </div>

                                        <div className="badge-details">
                                            <div className="badge-title-row">
                                                <h3 className="badge-name">{badge.name}</h3>
                                                <span className={`badge-tier-tag tier-${badge.badgeType || "standard"}`}>
                                                    {badge.category}
                                                </span>
                                            </div>

                                            <p className="badge-desc">{badge.description}</p>

                                            {badge.isEarned ? (
                                                <div className="badge-earned-date">
                                                    ✓ Earned on {new Date(badge.earned_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                                </div>
                                            ) : (
                                                <div className="badge-locked-progress">
                                                    <div className="locked-criteria">
                                                        Requirement: {badge.criteriaDescription}
                                                    </div>
                                                    <div className="locked-bar">
                                                        <div
                                                            className="locked-bar-fill"
                                                            style={{ width: `${badge.progressPercent || 0}%` }}
                                                        ></div>
                                                    </div>
                                                    <div className="locked-percent">
                                                        {badge.currentValue || 0} / {badge.targetValue} ({badge.progressPercent || 0}%)
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="profile-col-right">

                    {/* SECTION: CODING PLATFORMS */}
                    <div className="profile-section-card">
                        <div className="section-header-row">
                            <h2 className="section-title">
                                <span className="title-icon">🔗</span> Coding Platforms
                            </h2>
                            <span className="section-badge">Direct Profile Links</span>
                        </div>
                        <p className="section-description">
                            Link your competitive programming handles to showcase your cross-platform journey.
                        </p>

                        <div className="platforms-list">
                            {PLATFORM_CONFIGS.map((platform) => {
                                const handle = profileData?.platform_handles?.[platform.id] || "";
                                const isConnected = Boolean(handle && handle.trim().length > 0);
                                const isEditing = editingPlatform === platform.id;

                                return (
                                    <div key={platform.id} className={`platform-card ${isConnected ? "platform-connected" : ""}`}>
                                        <div className="platform-card-left">
                                            <div
                                                className="platform-avatar-badge"
                                                style={{ borderColor: platform.color }}
                                            >
                                                <span>{platform.icon}</span>
                                            </div>
                                            <div className="platform-names">
                                                <div className="platform-name">{platform.name}</div>
                                                {isConnected ? (
                                                    <div className="platform-handle">
                                                        @{handle}
                                                        <span className="connected-status-dot" title="Connected"></span>
                                                    </div>
                                                ) : (
                                                    <div className="platform-not-connected">Not connected</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="platform-card-actions">
                                            {isEditing ? (
                                                <div className="platform-inline-edit">
                                                    <input
                                                        type="text"
                                                        placeholder={`Enter ${platform.name} username`}
                                                        value={platformInputValue}
                                                        onChange={(e) => setPlatformInputValue(e.target.value)}
                                                        className="platform-input"
                                                        autoFocus
                                                    />
                                                    <button
                                                        className="btn-save-sm"
                                                        onClick={() => handleSavePlatform(platform.id)}
                                                        disabled={platformSaving}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        className="btn-cancel-sm"
                                                        onClick={() => {
                                                            setEditingPlatform(null);
                                                            setPlatformInputValue("");
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : isConnected ? (
                                                <div className="platform-connected-btns">
                                                    <a
                                                        href={platform.getUrl(handle)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-external-profile"
                                                    >
                                                        View Profile ↗
                                                    </a>
                                                    <button
                                                        className="btn-icon-action"
                                                        title="Edit Handle"
                                                        onClick={() => {
                                                            setEditingPlatform(platform.id);
                                                            setPlatformInputValue(handle);
                                                        }}
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        className="btn-icon-action btn-disconnect"
                                                        title="Disconnect Platform"
                                                        onClick={() => handleDisconnectPlatform(platform.id)}
                                                        disabled={platformSaving}
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    className="btn-connect-platform"
                                                    onClick={() => {
                                                        setEditingPlatform(platform.id);
                                                        setPlatformInputValue("");
                                                    }}
                                                >
                                                    + Connect
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* SECTION: RECENT ACTIVITY */}
                    <div className="profile-section-card">
                        <div className="section-header-row">
                            <h2 className="section-title">
                                <span className="title-icon">⏱️</span> Recent Activity
                            </h2>
                            {attemptsList.length > 0 && (
                                <button
                                    className="btn-view-all-submissions"
                                    onClick={() => setPage && setPage("Progress")}
                                >
                                    View all submissions →
                                </button>
                            )}
                        </div>
                        <p className="section-description">
                            Real problem submissions executed in CodeMedic.
                        </p>

                        {attemptsList.length === 0 ? (
                            <div className="empty-submissions-msg">
                                No submissions yet. Start solving problems in Practice Problems!
                            </div>
                        ) : (
                            <div className="recent-activity-list">
                                {attemptsList.slice(0, 6).map((att) => {
                                    const statusLower = (att.status || "").toLowerCase().trim();
                                    const isAccepted = statusLower === "accepted" || statusLower === "solved";
                                    const isWA = statusLower === "wrong answer";
                                    const isCE = statusLower === "compilation error";
                                    const isRE = statusLower === "runtime error";

                                    let badgeClass = "status-other";
                                    if (isAccepted) badgeClass = "status-accepted";
                                    else if (isWA) badgeClass = "status-wa";
                                    else if (isCE) badgeClass = "status-ce";
                                    else if (isRE) badgeClass = "status-re";

                                    const problemTitle = att.problems?.title || "Practice Problem";
                                    const topic = att.problems?.topic || "DSA";
                                    const difficulty = att.problems?.difficulty || "Medium";

                                    return (
                                        <div key={att.id} className="activity-item-card">
                                            <div className="activity-item-header">
                                                <strong className="activity-problem-title">{problemTitle}</strong>
                                                <span className={`activity-status-pill ${badgeClass}`}>
                                                    {att.status || "Evaluated"}
                                                </span>
                                            </div>
                                            <div className="activity-item-meta">
                                                <span className="activity-topic-tag">{topic}</span>
                                                <span className="activity-diff-tag">{difficulty}</span>
                                                <span className="activity-date">
                                                    {new Date(att.created_at).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                        hour: "2-digit",
                                                        minute: "2-digit"
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* =========================================================
                EDIT PROFILE MODAL
            ========================================================= */}
            {isEditModalOpen && (
                <div className="profile-modal-backdrop" onClick={() => setIsEditModalOpen(false)}>
                    <div className="profile-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Edit Profile</h2>
                            <button
                                className="modal-close-btn"
                                onClick={() => setIsEditModalOpen(false)}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSaveProfile} className="modal-form">
                            <div className="modal-grid-2">
                                <div className="form-group">
                                    <label>Display Name</label>
                                    <input
                                        type="text"
                                        value={editForm.name}
                                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                        placeholder="e.g. CodeMedic Solver"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        value={editForm.username}
                                        onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                                        placeholder="e.g. codemedic_pro"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Bio / Tagline</label>
                                <textarea
                                    value={editForm.bio}
                                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                                    placeholder="Tell the community about your DSA goals..."
                                    rows={3}
                                />
                            </div>

                            <div className="modal-grid-2">
                                <div className="form-group">
                                    <label>Avatar URL (optional)</label>
                                    <input
                                        type="url"
                                        value={editForm.avatar_url}
                                        onChange={(e) => setEditForm({ ...editForm, avatar_url: e.target.value })}
                                        placeholder="https://example.com/avatar.jpg"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>College / Organization</label>
                                    <input
                                        type="text"
                                        value={editForm.college}
                                        onChange={(e) => setEditForm({ ...editForm, college: e.target.value })}
                                        placeholder="e.g. Stanford University"
                                    />
                                </div>
                            </div>

                            <div className="modal-grid-3">
                                <div className="form-group">
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        value={editForm.location}
                                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                                        placeholder="City, Country"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Personal Website</label>
                                    <input
                                        type="text"
                                        value={editForm.website}
                                        onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
                                        placeholder="https://portfolio.dev"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>GitHub Username</label>
                                    <input
                                        type="text"
                                        value={editForm.github}
                                        onChange={(e) => setEditForm({ ...editForm, github: e.target.value })}
                                        placeholder="e.g. octocat"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>LinkedIn URL</label>
                                <input
                                    type="text"
                                    value={editForm.linkedin}
                                    onChange={(e) => setEditForm({ ...editForm, linkedin: e.target.value })}
                                    placeholder="e.g. linkedin.com/in/username"
                                />
                            </div>

                            <div className="modal-actions">
                                <button
                                    type="button"
                                    className="btn-modal-cancel"
                                    onClick={() => setIsEditModalOpen(false)}
                                    disabled={savingProfile}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn-modal-save"
                                    disabled={savingProfile}
                                >
                                    {savingProfile ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
