import { Link, NavLink } from "react-router";
import "@styles/main.scss";
import styles from "./AuthSidebar.module.scss";
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

const navItems = [
    {
        to: "/register",
        title: "Sign Up",
        icon: "fa-regular fa-registered",
    },
    {
        to: "/login",
        title: "Log In",
        icon: "fa-solid fa-arrow-right-to-bracket",
    },
    {
        to: "/forgotpassword",
        title: "Forgot Password",
        icon: "fa-solid fa-unlock-keyhole",
    },
];
function AuthSidebar() {
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
    return (
        <Aside className={styles.sidebar} aria-label="Primary">
            <Logo src="./logo/logo.svg" alt="LogoImg" className={styles.logo} />
            <SubsectionTitle className={styles.sidebarTitle}>
                Tài khoản
            </SubsectionTitle>
            <Nav className={styles.menu}>
                <Ul className={styles.sidebarList}>{renderNavItems()}</Ul>
            </Nav>
        </Aside>
    );
}
export default AuthSidebar;
