import clsx from "clsx";
import styles from "./AdminHeader.module.scss";
import { Link, NavLink } from "react-router";
import Header from "@ui/Header";
import Logo from "@ui/Logo";
import Img from "@ui/Img";
import Title from "@ui/Title";
import Span from "@ui/Span";
import Div from "@ui/Div";
import Button from "@ui/Button";
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import Nav from "@ui/Nav";
import "@styles/main.scss";

const navItems = [
    {
        to: "/admin",
        title: "Dashboard",
        // icon: "fa-solid fa-chart-pie",
    },
    {
        to: "/admin/users",
        title: "Users",
        // icon: "fa-solid fa-users",
    },
    {
        to: "/admin/settings",
        title: "Settings",
        // icon: "fa-solid fa-screwdriver-wrench",
    },
];

function AdminHeader() {
    const renderNavItems = () => {
        return navItems.map((item, index) => (
            <Li key={index} className={styles.navbarItem}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.navbarLink
                    }
                    to={item.to}
                >
                    {item.title}
                </NavLink>
            </Li>
        ));
    };

    return (
        <>
            <Header className={styles.appHeader}>
                <Div className={styles.appHeaderLogo}>
                    <Div className={styles.logo}>
                        <Span className={styles.logoIcon}>
                            <Img
                                className={styles.logoStyle}
                                src="./logo/logo.svg"
                            />
                        </Span>
                    </Div>
                </Div>
                <Div className={styles.appHeaderNavigation}>
                    <Nav className={styles.navbar}>
                        <Ul className={styles.tabs}>{renderNavItems()}</Ul>
                    </Nav>
                </Div>
            </Header>
        </>
    );
}

export default AdminHeader;
