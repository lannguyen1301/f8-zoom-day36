import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.scss";

function AdminSidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>Admin Panel</h2>

            <nav className={styles.nav}>
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/user"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    Users
                </NavLink>

                <NavLink
                    to="/admin/setting"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                >
                    Settings
                </NavLink>
            </nav>
        </aside>
    );
}

export default AdminSidebar;
