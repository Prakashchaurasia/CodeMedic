function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <div className="logo-icon">
                    <span>&lt;/&gt;</span>
                </div>

                <div className="logo-text">
                    <span className="code-text">Code</span>
                    <span className="medic-text">Medic</span>
                </div>
            </div>

            <div className="nav-links">
                <span>Dashboard</span>
                <span>Profile</span>
            </div>

        </nav>
    );
}

export default Navbar;