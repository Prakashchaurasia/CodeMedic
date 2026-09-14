import { supabase } from "../lib/supabase";

function Navbar() {

    async function handleLogout() {

        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Logout error:", error);
        }
    }

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

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;