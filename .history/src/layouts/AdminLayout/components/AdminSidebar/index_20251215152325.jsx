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
    const navItems = [
        {
            to: "/admin",
            title: "Dashboard",
            icon: "fa-solid fa-chart-pie",
        },
        {
            to: "/admin/users",
            title: "Users",
            icon: "fa-solid fa-users",
        },
        {
            to: "/admin/setting",
            title: "Setting",
            icon: "fa-solid fa-screwdriver-wrench",
        },
    ];

    return (
const renderNavItems = () => {
        return navItems.map((item, index) => (
            <Li key={index} className={styles.sidebarItem}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.sidebarActionLink
                    }
                    to={item.to}
                >
                    {item.title}
                </NavLink>
            </Li>
        ));
    };


        <Aside className={styles.sidebar}>
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
        </Aside>
    );
}

export default AdminSidebar;

<Div className={styles.appBodyNavigation}>
    <Nav className={styles.navigation}>
        <Link to="/">
            <i class="fa-solid fa-chart-pie"></i>
            <Span>Dashboard</Span>
        </Link>
        <Link to="/">
            <i class="fa-solid fa-users"></i>
            <Span>Users</Span>
        </Link>
        <Link to="/">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            <Span>Setting</Span>
        </Link>
    </Nav>
    <Footer className={styles.footer}>
        <SubTitle className={styles.footerHead}>
            Almeria<small>©</small>
        </SubTitle>
        <Div className={styles.footerCopyRight}>
            Almeria ©<br />
            All Rights Reserved 2021
        </Div>
    </Footer>
</Div>;
