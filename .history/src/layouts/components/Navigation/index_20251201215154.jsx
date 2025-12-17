import { NavLink } from "react-router";

import styles from "./Navigation.module.scss";

const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/about",
        title: "About",
    },
    {
        to: "/posts",
        title: "Posts",
    },
    {
        to: "/contact",
        title: "Contact",
    },
    {
        to: "/privacy",
        title: "Privacy",
    },
];
function Navigation() {
    const renderNavItems = () => {
        return navItems.map((item, index) => (
            <li key={index} className={styles.item}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                    to={item.to}
                >
            </li>
        ));
    };
    return (
        <nav>
            <ul>{renderNavItems()}</ul>
        </nav>
    );
}

export default Navigation;
