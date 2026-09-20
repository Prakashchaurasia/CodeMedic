import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import {
    getUserProfile,
    updateUserProfile,
    updatePrivacySettings,
    updateNotificationSettings,
    updateUserEmail,
    updateUserPassword,
    calculateUserPoints
} from "../services/profileService";
import { getUserAttempts, calculateCurrentStreak } from "../services/dashboardService";
import { formatAuthError } from "../services/authService";
import "./Settings.css";

const SETTINGS_SECTIONS = [
    { id: "account", label: "Account", icon: "👤" },
    { id: "profile", label: "Profile Settings", icon: "✏️" },
    { id: "privacy", label: "Privacy", icon: "🔒" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "billing", label: "Subscription & Billing", icon: "💳" },
    { id: "points", label: "Points", icon: "⭐" },
    { id: "orders", label: "Orders", icon: "📦" }
];

function Settings({ user, onProfileUpdated, setPage }) {
    const userId = user?.id;

    const [activeTab, setActiveTab] = useState("account");
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [pointsData, setPointsData] = useState({
        totalPoints: 0,
        solvePoints: 0,
        attemptPoints: 0,
        streakBonus: 0,
        history: []
    });

    // Account Form state
    const [newEmail, setNewEmail] = useState("");
    const [emailUpdating, setEmailUpdating] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordUpdating, setPasswordUpdating] = useState(false);

    // Profile Settings Form state
    const [profileForm, setProfileForm] = useState({
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
    const [profileSaving, setProfileSaving] = useState(false);

    // Privacy & Notification toggling states
    const [savingToggle, setSavingToggle] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function loadData() {
            if (!userId) return;
            setLoading(true);

            try {
                const p = await getUserProfile(userId);
                const attempts = await getUserAttempts(userId);
                const streak = calculateCurrentStreak(attempts);
                const pts = calculateUserPoints(attempts, streak);

                if (isMounted) {
                    setProfile(p);
                    setNewEmail(p?.email || user?.email || "");
                    setProfileForm({
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
                    setPointsData(pts);
                }
            } catch (err) {
                console.error("Error loading settings:", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadData();

        return () => {
            isMounted = false;
        };
    }, [userId]);

    function showToast(msg) {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(""), 3500);
    }

    // Account: Update Email
    async function handleUpdateEmail(e) {
        e.preventDefault();
        if (emailUpdating) return;
        setEmailUpdating(true);
        try {
            await updateUserEmail(newEmail);
            showToast("Confirmation email sent! Please check your inbox to confirm.");
        } catch (err) {
            console.error("Email update error:", err);
            showToast(formatAuthError(err, "email_change"));
        } finally {
            setEmailUpdating(false);
        }
    }

    // Account: Update Password
    async function handleUpdatePassword(e) {
        e.preventDefault();
        if (passwordUpdating) return;
        if (newPassword !== confirmPassword) {
            showToast("Passwords do not match.");
            return;
        }
        setPasswordUpdating(true);
        try {
            await updateUserPassword(newPassword);
            setNewPassword("");
            setConfirmPassword("");
            showToast("Password updated successfully!");
        } catch (err) {
            console.error("Password update error:", err);
            showToast(formatAuthError(err, "password_reset"));
        } finally {
            setPasswordUpdating(false);
        }
    }

    // Profile Settings: Save Form
    async function handleSaveProfileSettings(e) {
        e.preventDefault();
        setProfileSaving(true);
        try {
            const updated = await updateUserProfile(userId, profileForm);
            setProfile(updated);
            showToast("Profile settings saved successfully!");
            if (onProfileUpdated) onProfileUpdated(updated);
        } catch (err) {
            console.error("Profile settings update error:", err);
            showToast(err.message || "Failed to update profile settings.");
        } finally {
            setProfileSaving(false);
        }
    }

    // Privacy Toggle
    async function handlePrivacyToggle(key) {
        if (savingToggle) return;
        const currentVal = profile?.privacy_settings?.[key] ?? true;
        const newVal = !currentVal;

        // Optimistic update
        const updatedPrivacy = {
            ...(profile?.privacy_settings || {}),
            [key]: newVal
        };
        setProfile((prev) => ({
            ...prev,
            privacy_settings: updatedPrivacy
        }));

        setSavingToggle(true);
        try {
            const updated = await updatePrivacySettings(userId, { [key]: newVal });
            setProfile(updated);
            showToast("Privacy settings updated.");
            if (onProfileUpdated) onProfileUpdated(updated);
        } catch (err) {
            console.error("Privacy toggle error:", err);
            // Revert
            setProfile((prev) => ({
                ...prev,
                privacy_settings: {
                    ...(prev?.privacy_settings || {}),
                    [key]: currentVal
                }
            }));
            showToast("Failed to update privacy preference.");
        } finally {
            setSavingToggle(false);
        }
    }

    // Notification Toggle
    async function handleNotificationToggle(key) {
        if (savingToggle) return;
        const currentVal = profile?.notification_settings?.[key] ?? true;
        const newVal = !currentVal;

        // Optimistic update
        const updatedNotifications = {
            ...(profile?.notification_settings || {}),
            [key]: newVal
        };
        setProfile((prev) => ({
            ...prev,
            notification_settings: updatedNotifications
        }));

        setSavingToggle(true);
        try {
            const updated = await updateNotificationSettings(userId, { [key]: newVal });
            setProfile(updated);
            showToast("Notification preference updated.");
            if (onProfileUpdated) onProfileUpdated(updated);
        } catch (err) {
            console.error("Notification toggle error:", err);
            // Revert
            setProfile((prev) => ({
                ...prev,
                notification_settings: {
                    ...(prev?.notification_settings || {}),
                    [key]: currentVal
                }
            }));
            showToast("Failed to update notification preference.");
        } finally {
            setSavingToggle(false);
        }
    }

    if (loading && !profile) {
        return (
            <div className="settings-container">
                <div className="settings-loading-card">
                    <div className="settings-spinner"></div>
                    <p>Loading CodeMedic Settings...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="settings-container">
            {toastMessage && <div className="settings-toast">{toastMessage}</div>}

            <div className="settings-layout">
                {/* SIDEBAR NAVIGATION */}
                <aside className="settings-sidebar">
                    <div className="settings-sidebar-header">
                        <h2>Settings</h2>
                        <p>Manage your account & preferences</p>
                    </div>

                    <nav className="settings-nav">
                        {SETTINGS_SECTIONS.map((sec) => (
                            <button
                                key={sec.id}
                                className={`settings-nav-btn ${activeTab === sec.id ? "active" : ""}`}
                                onClick={() => setActiveTab(sec.id)}
                            >
                                <span className="nav-btn-icon">{sec.icon}</span>
                                <span className="nav-btn-label">{sec.label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="settings-sidebar-footer">
                        <button
                            className="btn-back-to-profile"
                            onClick={() => setPage && setPage("Profile")}
                        >
                            ← View Full Profile
                        </button>
                    </div>
                </aside>

                {/* MAIN CONTENT AREA */}
                <main className="settings-content">

                    {/* 1. ACCOUNT */}
                    {activeTab === "account" && (
                        <div className="settings-panel">
                            <div className="panel-header">
                                <h3>Account Information</h3>
                                <p>Manage your primary login credentials and security.</p>
                            </div>

                            <div className="settings-card">
                                <h4>Email Address</h4>
                                <p className="card-subtext">
                                    Your email is used for authentication, account recovery, and notifications.
                                </p>
                                <form onSubmit={handleUpdateEmail} className="account-form-row">
                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        placeholder="user@example.com"
                                        className="settings-input"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="btn-settings-primary"
                                        disabled={emailUpdating || newEmail === profile?.email}
                                    >
                                        {emailUpdating ? "Updating..." : "Update Email"}
                                    </button>
                                </form>
                                <div className="field-note">
                                    Current authenticated email: <strong>{profile?.email || user?.email}</strong>
                                </div>
                            </div>

                            <div className="settings-card">
                                <h4>Change Password</h4>
                                <p className="card-subtext">
                                    Ensure your account is protected with a secure password of at least 6 characters.
                                </p>
                                <form onSubmit={handleUpdatePassword} className="account-password-form">
                                    <div className="form-group">
                                        <label>New Password</label>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            placeholder="Enter new password"
                                            className="settings-input"
                                            required
                                            minLength={6}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm New Password</label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm new password"
                                            className="settings-input"
                                            required
                                            minLength={6}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-settings-primary"
                                        disabled={passwordUpdating || !newPassword}
                                    >
                                        {passwordUpdating ? "Saving..." : "Change Password"}
                                    </button>
                                </form>
                            </div>

                            <div className="settings-card">
                                <h4>Phone Number</h4>
                                <p className="card-subtext">
                                    SMS authentication and phone notifications.
                                </p>
                                <div className="status-banner status-inactive">
                                    <span>📱</span> No phone number linked. Phone authentication is currently not enabled for this project.
                                </div>
                            </div>

                            <div className="settings-card">
                                <h4>Authentication & Security</h4>
                                <p className="card-subtext">
                                    Multi-Factor Authentication (MFA) status.
                                </p>
                                <div className="status-banner status-active">
                                    <span>🛡️</span> Protected by Supabase Authenticated Session JWT. Single-Factor (Email/Password) active.
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 2. PROFILE SETTINGS */}
                    {activeTab === "profile" && (
                        <div className="settings-panel">
                            <div className="panel-header">
                                <h3>Profile Settings</h3>
                                <p>
                                    Updates here immediately synchronize with your public CodeMedic Profile and navbar.
                                </p>
                            </div>

                            <div className="settings-card">
                                <form onSubmit={handleSaveProfileSettings} className="profile-settings-form">
                                    <div className="form-row-2">
                                        <div className="form-group">
                                            <label>Display Name</label>
                                            <input
                                                type="text"
                                                value={profileForm.name}
                                                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                                                placeholder="e.g. CodeMedic Solver"
                                                className="settings-input"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                value={profileForm.username}
                                                onChange={(e) => setProfileForm({ ...profileForm, username: e.target.value })}
                                                placeholder="e.g. codemedic_pro"
                                                className="settings-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Bio / Personal Summary</label>
                                        <textarea
                                            value={profileForm.bio}
                                            onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                                            placeholder="Write a brief tagline or intro..."
                                            rows={3}
                                            className="settings-textarea"
                                        />
                                    </div>

                                    <div className="form-row-2">
                                        <div className="form-group">
                                            <label>Avatar Image URL</label>
                                            <input
                                                type="url"
                                                value={profileForm.avatar_url}
                                                onChange={(e) => setProfileForm({ ...profileForm, avatar_url: e.target.value })}
                                                placeholder="https://example.com/avatar.jpg"
                                                className="settings-input"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>College / University</label>
                                            <input
                                                type="text"
                                                value={profileForm.college}
                                                onChange={(e) => setProfileForm({ ...profileForm, college: e.target.value })}
                                                placeholder="e.g. Stanford University"
                                                className="settings-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row-3">
                                        <div className="form-group">
                                            <label>Location</label>
                                            <input
                                                type="text"
                                                value={profileForm.location}
                                                onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                                                placeholder="City, Country"
                                                className="settings-input"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Personal Website</label>
                                            <input
                                                type="text"
                                                value={profileForm.website}
                                                onChange={(e) => setProfileForm({ ...profileForm, website: e.target.value })}
                                                placeholder="https://..."
                                                className="settings-input"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>GitHub Username</label>
                                            <input
                                                type="text"
                                                value={profileForm.github}
                                                onChange={(e) => setProfileForm({ ...profileForm, github: e.target.value })}
                                                placeholder="e.g. octocat"
                                                className="settings-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>LinkedIn URL</label>
                                        <input
                                            type="text"
                                            value={profileForm.linkedin}
                                            onChange={(e) => setProfileForm({ ...profileForm, linkedin: e.target.value })}
                                            placeholder="linkedin.com/in/..."
                                            className="settings-input"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-settings-primary"
                                        disabled={profileSaving}
                                    >
                                        {profileSaving ? "Saving..." : "Save Profile Settings"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* 3. PRIVACY */}
                    {activeTab === "privacy" && (
                        <div className="settings-panel">
                            <div className="panel-header">
                                <h3>Privacy Preferences</h3>
                                <p>Control your visibility and profile exposure across CodeMedic.</p>
                            </div>

                            <div className="settings-card">
                                <div className="toggle-list">
                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Appear on CodeMedic Leaderboard</span>
                                            <span className="toggle-desc">
                                                Allow your solving rank and points to appear on the global community leaderboard.
                                            </span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.privacy_settings?.show_on_leaderboard ?? true}
                                                onChange={() => handlePrivacyToggle("show_on_leaderboard")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Appear on Friends & Study Group Leaderboards</span>
                                            <span className="toggle-desc">
                                                Share daily streak and problem counts with your study peers.
                                            </span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.privacy_settings?.show_on_friends_leaderboard ?? true}
                                                onChange={() => handlePrivacyToggle("show_on_friends_leaderboard")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Public Profile Visibility</span>
                                            <span className="toggle-desc">
                                                Allow other CodeMedic users to view your achievements and skills breakdown.
                                            </span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.privacy_settings?.public_profile ?? true}
                                                onChange={() => handlePrivacyToggle("public_profile")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Show Following List</span>
                                            <span className="toggle-desc">
                                                Display the creators and coders you follow on your profile.
                                            </span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.privacy_settings?.show_following ?? true}
                                                onChange={() => handlePrivacyToggle("show_following")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Show Followers List</span>
                                            <span className="toggle-desc">
                                                Display the students who follow your CodeMedic problem-solving journey.
                                            </span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.privacy_settings?.show_followers ?? true}
                                                onChange={() => handlePrivacyToggle("show_followers")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 4. NOTIFICATIONS */}
                    {activeTab === "notifications" && (
                        <div className="settings-panel">
                            <div className="panel-header">
                                <h3>Notification Preferences</h3>
                                <p>Configure learning alerts, streak warnings, and community notifications.</p>
                            </div>

                            <div className="settings-card">
                                <h4>CodeMedic Learning Alerts</h4>
                                <div className="toggle-list">
                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Daily Practice Reminder</span>
                                            <span className="toggle-desc">Receive a reminder to maintain your daily problem-solving routine.</span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.notification_settings?.daily_reminder ?? true}
                                                onChange={() => handleNotificationToggle("daily_reminder")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Streak Expiry Warning</span>
                                            <span className="toggle-desc">Alert before the calendar day ends if you haven't solved a problem yet.</span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.notification_settings?.streak_reminder ?? true}
                                                onChange={() => handleNotificationToggle("streak_reminder")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Revision Queue Alerts</span>
                                            <span className="toggle-desc">Notifications when problems are due for spaced repetition revision.</span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.notification_settings?.revision_reminder ?? true}
                                                onChange={() => handleNotificationToggle("revision_reminder")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">DSA Weak-Topic Diagnostics</span>
                                            <span className="toggle-desc">Suggestions when repeated time/space complexity weaknesses are detected.</span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.notification_settings?.weak_topic_reminder ?? true}
                                                onChange={() => handleNotificationToggle("weak_topic_reminder")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">AI Analysis Completion</span>
                                            <span className="toggle-desc">Notice when automated code diagnosis completes after submission.</span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.notification_settings?.analysis_completed ?? true}
                                                onChange={() => handleNotificationToggle("analysis_completed")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="settings-card">
                                <h4>Social & Community</h4>
                                <div className="toggle-list">
                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Discussion Comments & Replies</span>
                                            <span className="toggle-desc">Notify when another solver responds to your solution comments.</span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.notification_settings?.comments ?? true}
                                                onChange={() => handleNotificationToggle("comments")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <span className="toggle-title">Upvotes on Shared Analyses</span>
                                            <span className="toggle-desc">Notify when peers find your editorial breakdown helpful.</span>
                                        </div>
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={profile?.notification_settings?.upvotes ?? true}
                                                onChange={() => handleNotificationToggle("upvotes")}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 5. SUBSCRIPTION & BILLING */}
                    {activeTab === "billing" && (
                        <div className="settings-panel">
                            <div className="panel-header">
                                <h3>Subscription & Plan</h3>
                                <p>View your active CodeMedic membership tier and features.</p>
                            </div>

                            <div className="settings-card plan-showcase-card">
                                <div className="plan-badge">CURRENT ACTIVE PLAN</div>
                                <h2 className="plan-title">CodeMedic Community Edition</h2>
                                <div className="plan-price">
                                    $0 <span>/ forever free</span>
                                </div>
                                <p className="plan-description">
                                    Full access to the core diagnostic problem-solving environment and AI assistance.
                                </p>

                                <div className="plan-features-list">
                                    <div className="plan-feature-item">✓ Unlimited In-Browser C++ Execution (Emception WASM)</div>
                                    <div className="plan-feature-item">✓ AI Code Diagnosis & Time/Space Complexity Detection</div>
                                    <div className="plan-feature-item">✓ Automated Weakness Tracking & DSA Health Diagnostics</div>
                                    <div className="plan-feature-item">✓ Spaced Repetition Revision Queue</div>
                                    <div className="plan-feature-item">✓ Original Dynamic Badges & Coding Platform Sync</div>
                                </div>
                            </div>

                            <div className="settings-card">
                                <h4>Billing History</h4>
                                <p className="card-subtext">No billing records found. CodeMedic is completely free to use.</p>
                                <div className="status-banner status-active">
                                    <span>✓</span> No active payment subscriptions or charges pending.
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 6. POINTS */}
                    {activeTab === "points" && (
                        <div className="settings-panel">
                            <div className="panel-header">
                                <h3>CodeMedic Points</h3>
                                <p>Genuine points accumulated from verified submissions and active streaks.</p>
                            </div>

                            <div className="points-summary-grid">
                                <div className="points-summary-card points-total">
                                    <div className="points-val">{pointsData.totalPoints}</div>
                                    <div className="points-lbl">Total Points</div>
                                    <div className="points-desc">Earned across all problem practice</div>
                                </div>
                                <div className="points-summary-card">
                                    <div className="points-val">{pointsData.solvePoints}</div>
                                    <div className="points-lbl">Accepted Solves</div>
                                    <div className="points-desc">+10 points per unique problem</div>
                                </div>
                                <div className="points-summary-card">
                                    <div className="points-val">{pointsData.attemptPoints}</div>
                                    <div className="points-lbl">Practice Attempts</div>
                                    <div className="points-desc">+2 points per submitted attempt</div>
                                </div>
                                <div className="points-summary-card">
                                    <div className="points-val">{pointsData.streakBonus}</div>
                                    <div className="points-lbl">Streak Bonus</div>
                                    <div className="points-desc">+5 points per active streak day</div>
                                </div>
                            </div>

                            <div className="settings-card">
                                <h4>Recent Points Activity</h4>
                                {pointsData.history.length === 0 ? (
                                    <p className="card-subtext">No points recorded yet. Solve problems to earn points!</p>
                                ) : (
                                    <div className="points-history-list">
                                        {pointsData.history.map((item) => (
                                            <div key={item.id} className="points-history-item">
                                                <div className="points-item-left">
                                                    <span className="points-item-icon">
                                                        {item.type === "SOLVE" ? "🎯" : item.type === "STREAK" ? "🔥" : "▣"}
                                                    </span>
                                                    <div className="points-item-info">
                                                        <strong>{item.title}</strong>
                                                        <span>
                                                            {new Date(item.date).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="points-item-pts">+{item.points} pts</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* 7. ORDERS */}
                    {activeTab === "orders" && (
                        <div className="settings-panel">
                            <div className="panel-header">
                                <h3>Orders</h3>
                                <p>Past transactions, merchandise, or certificate orders.</p>
                            </div>

                            <div className="settings-card empty-state-card">
                                <div className="empty-icon">📦</div>
                                <h4>No orders yet.</h4>
                                <p className="card-subtext">
                                    CodeMedic is currently free to use. You have no pending or completed orders.
                                </p>
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}

export default Settings;
