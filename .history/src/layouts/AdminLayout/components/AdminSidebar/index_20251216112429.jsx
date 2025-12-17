import { Link, NavLink } from "react-router";
import "@styles/main.scss";
import styles from "./AdminSidebar.module.scss";

// Components
import Div from "@ui/Div";
import Footer from "@ui/Footer";
import SubTitle from "@ui/SubTitle";
import Aside from "@ui/Aside";
import Nav from "@ui/Nav";
import Ul from "@ui/Ul";
import Li from "@ui/Li";

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
        to: "/admin/settings",
        title: "Settings",
        icon: "fa-solid fa-screwdriver-wrench",
    },
];

function AdminSidebar() {
    const renderNavItems = () => {
        return navItems.map((item, index) => (
            <Li key={index} className={styles.sidebarItem}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.sidebarActionLink
                    }
                    to={item.to}
                >
                    <i className={item.icon}></i>
                    {item.title}
                </NavLink>
            </Li>
        ));
    };
    return (
        <Aside className={styles.sidebar}>
            <Nav className={styles.navigation}>
                <Ul>{renderNavItems()}</Ul>
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
        </Aside>
    );
}

export default AdminSidebar;
