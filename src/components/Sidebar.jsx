function Sidebar({ page, setPage }) {
    const menuItems = [
        "Dashboard",
        "Problems",
        "Analyze Code",
        "DSA Health",
        "Progress",
        "Settings"
    ];

    return (
        <aside className="sidebar">

            <div className="sidebar-title">
                <span>CODEMEDIC</span>
            </div>

            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className={page === item ? "active" : ""}
                        onClick={() => setPage(item)}
                    >
                        <span className="menu-dot"></span>
                        {item}
                    </li>
                ))}
            </ul>

        </aside>
    );
}

export default Sidebar;