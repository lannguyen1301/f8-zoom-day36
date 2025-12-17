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
import "@styles/main.scss";

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
                            <Img src="./logo/logo.svg" />
                        </Span>
                        <Title className={styles.logoTitle}>
                            <Span>Almeria</Span>
                            <Span>NeoBank</Span>
                        </Title>
                    </Div>
                </Div>
                <Div className={styles.appHeaderNavigation}>
                    <Div className={styles.tabs}>
                        <Link to="/">Overview</Link>
                        <Link to="/" className={styles.active}>
                            Payments
                        </Link>
                        <Link to="/">Cards</Link>
                        <Link to="/">Account</Link>
                        <Link to="/">System</Link>
                        <Link to="/">Business</Link>
                    </Div>
                </Div>
                <Div className={styles.appHeaderActions}>
                    <Button className={styles.userProfile}>
                        <Span>Matheo Peterson</Span>
                        <Span>
                            <Img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
                        </Span>
                    </Button>
                    <Div className={styles.appHeaderActionsButtons}>
                        <Button
                            className={clsx(styles.iconButton, styles.large)}
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                        <Button
                            className={clsx(styles.iconButton, styles.large)}
                        >
                            <i className="fa-regular fa-bell"></i>
                        </Button>
                    </Div>
                </Div>
                <Div className={styles.appHeaderMobile}>
                    <Button className={clsx(styles.iconButton, styles.large)}>
                        <i className="ph-list"></i>
                    </Button>
                </Div>
            </Header>
        </>
    );
}

export default AdminHeader;
