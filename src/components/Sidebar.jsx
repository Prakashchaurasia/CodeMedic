function Sidebar({
    page,
    setPage,
    isMobileOpen,
    onClose
}) {

    function navigate(targetPage) {

        setPage(targetPage);

        if (onClose) {
            onClose();
        }
    }

    return (
        <>
            {/* MOBILE OVERLAY */}

            {isMobileOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={onClose}
                ></div>
            )}


            <aside
                className={`sidebar ${
                    isMobileOpen
                        ? "sidebar-mobile-open"
                        : ""
                }`}
            >

                {/* SIDEBAR HEADER */}

                <div className="sidebar-header">

                    <div className="sidebar-logo">
                        &lt;/&gt;
                    </div>

                    <div>
                        <div className="sidebar-brand">
                            CODEMEDIC
                        </div>

                        <div className="sidebar-subtitle">
                            DSA Learning Platform
                        </div>
                    </div>

                    {/* MOBILE CLOSE */}

                    <button
                        className="sidebar-close"
                        onClick={onClose}
                    >
                        ×
                    </button>

                </div>


                {/* NAVIGATION */}

                <nav className="sidebar-nav">

                    <div className="nav-section-title">
                        WORKSPACE
                    </div>


                    <button
                        className={
                            page === "Dashboard"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate("Dashboard")
                        }
                    >
                        <span className="nav-icon">
                            ⌂
                        </span>

                        <span>
                            Dashboard
                        </span>
                    </button>


                    <button
                        className={
                            page === "Practice Problem"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate(
                                "Practice Problem"
                            )
                        }
                    >
                        <span className="nav-icon">
                            ▣
                        </span>

                        <span>
                            Practice Problems
                        </span>
                    </button>


                    <button
                        className={
                            page ===
                            "Generate & Practice"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate(
                                "Generate & Practice"
                            )
                        }
                    >
                        <span className="nav-icon">
                            ✦
                        </span>

                        <span>
                            Generate & Practice
                        </span>
                    </button>


                    <button
                        className={
                            page === "Analyze Code"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate(
                                "Analyze Code"
                            )
                        }
                    >
                        <span className="nav-icon">
                            &lt;/&gt;
                        </span>

                        <span>
                            Analyze Code
                        </span>
                    </button>


                    <div className="nav-section-title">
                        INSIGHTS
                    </div>


                    <button
                        className={
                            page === "DSA Health"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate("DSA Health")
                        }
                    >
                        <span className="nav-icon">
                            ◈
                        </span>

                        <span>
                            DSA Health
                        </span>
                    </button>


                    <button
                        className={
                            page === "Progress"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate("Progress")
                        }
                    >
                        <span className="nav-icon">
                            ▥
                        </span>

                        <span>
                            Progress
                        </span>
                    </button>

                    <button
                        className={
                            page === "Revision"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate("Revision")
                        }
                    >
                        <span className="nav-icon">
                            ✦
                        </span>

                        <span>
                            Revision
                        </span>
                    </button>


                    <div className="nav-section-title">
                        ACCOUNT
                    </div>

                    <button
                        className={
                            page === "Profile"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate("Profile")
                        }
                    >
                        <span className="nav-icon">
                            👤
                        </span>

                        <span>
                            Profile
                        </span>
                    </button>

                    <button
                        className={
                            page === "Settings"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate("Settings")
                        }
                    >
                        <span className="nav-icon">
                            ⚙
                        </span>

                        <span>
                            Settings
                        </span>
                    </button>

                </nav>


                {/* SIDEBAR BOTTOM */}

                <div className="sidebar-bottom">

                    <div className="coding-tip">

                        <div className="tip-icon">
                            🚀
                        </div>

                        <div>

                            <strong>
                                Keep coding
                            </strong>

                            <p>
                                Small steps every day
                                lead to big results.
                            </p>

                        </div>

                    </div>

                </div>

            </aside>
        </>
    );
}

export default Sidebar;