import { Link, NavLink } from "react-router";
import "@styles/main.scss";
import styles from "./AdminSidebar.module.scss";

// Components
import Section from "@ui/Section";
import Div from "@ui/Div";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import Para from "@ui/Para";
import SubsectionTitle from "@ui/SubsectionTitle";
import Aside from "@ui/Aside";
import Img from "@ui/Img";
import Logo from "@ui/Logo";
import Nav from "@ui/Nav";
import Span from "@ui/Span";
import Ul from "@ui/Ul";
import Li from "@ui/Li";

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
