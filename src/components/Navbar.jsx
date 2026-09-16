import { useState } from "react";
import { supabase } from "../lib/supabase";

function Navbar({ onMenuClick }) {

    const [showProfile, setShowProfile] = useState(false);

    async function handleLogout() {

        const { error } =
            await supabase.auth.signOut();

        if (error) {
            console.error(
                "Logout error:",
                error
            );
        }
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

            <div className="brand">

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
                            P
                        </div>

                        <div className="profile-info">

                            <strong>
                                Prakash Kumar
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
                                    Prakash Kumar
                                </strong>

                                <span>
                                    Student
                                </span>

                            </div>

                            <button>
                                Profile
                            </button>

                            <button>
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