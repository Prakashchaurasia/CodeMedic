import { useState } from "react";
import { supabase } from "../lib/supabase";

function Navbar({ onMenuClick, setPage, profile, user }) {

    const [showProfile, setShowProfile] = useState(false);

    const displayName = profile?.name || user?.user_metadata?.name || user?.email?.split("@")[0] || "CodeMedic Solver";
    const initials = displayName.charAt(0).toUpperCase();
    const role = profile?.role || "Student";

    async function handleLogout() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Logout error:", error);
        }
    }

    function handleNavigate(target) {
        if (setPage) {
            setPage(target);
        }
        setShowProfile(false);
    }

    return (
        <header className="top-navbar">

            {/* MOBILE MENU */}

            <button
                className="mobile-menu-button"
                onClick={onMenuClick}
                aria-label="Open navigation"
            >
                ☰
            </button>


            {/* BRAND */}

            <div className="brand" onClick={() => setPage && setPage("Dashboard")} style={{ cursor: "pointer" }}>

                <div className="brand-icon">
                    &lt;/&gt;
                </div>

                <div className="brand-text">

                    <span className="brand-name">
                        Code<span>Medic</span>
                    </span>

                    <span className="brand-tagline">
                        Heal Your DSA Skills
                    </span>

                </div>

            </div>


            {/* SEARCH */}

            <div className="global-search">

                <span className="search-icon">
                    ⌕
                </span>

                <input
                    type="text"
                    placeholder="Search problems, topics, or anything..."
                />

                <span className="search-shortcut">
                    Ctrl K
                </span>

            </div>


            {/* RIGHT SIDE */}

            <div className="navbar-actions">

                {/* NOTIFICATION */}

                <button
                    className="notification-button"
                    aria-label="Notifications"
                >
                    ♧
                    <span className="notification-dot"></span>
                </button>


                {/* PROFILE */}

                <div className="profile-wrapper">

                    <button
                        className="profile-button"
                        onClick={() =>
                            setShowProfile(
                                !showProfile
                            )
                        }
                    >

                        <div className="profile-avatar">
                            {profile?.avatar_url ? (
                                <img
                                    src={profile.avatar_url}
                                    alt={displayName}
                                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                                />
                            ) : (
                                initials
                            )}
                        </div>

                        <div className="profile-info">

                            <strong>
                                {displayName}
                            </strong>

                            <span>
                                Keep Learning •
                            </span>

                        </div>

                        <span className="profile-arrow">
                            ˅
                        </span>

                    </button>


                    {showProfile && (

                        <div className="profile-menu">

                            <div className="profile-menu-header">

                                <strong>
                                    {displayName}
                                </strong>

                                <span>
                                    {role}
                                </span>

                            </div>

                            <button onClick={() => handleNavigate("Profile")}>
                                Profile
                            </button>

                            <button onClick={() => handleNavigate("Settings")}>
                                Settings
                            </button>

                            <button
                                className="logout-button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </header>
    );
}

export default Navbar;