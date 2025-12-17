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

function AuthSidebar() {
    return (
        <Aside className={styles.sidebar} aria-label="Primary">
            <Logo src="./logo/logo.svg" alt="LogoImg" className={styles.logo} />
            <SubsectionTitle className={styles.sidebarTitle}>
                Tài khoản
            </SubsectionTitle>
            <Nav className={styles.menu}>
                <Ul>
                    <Li>
                        <Link
                            href="#"
                            className={styles.active}
                            aria-current="page"
                        >
                            <i
                                className="fas fa-th-large"
                                aria-hidden="true"
                            ></i>
                            <Span>Sign Up</Span>
                        </Link>
                    </Li>
                    <Li>
                        <Link to="register">
                            <i className="fas fa-cog" aria-hidden="true"></i>
                            <Span>Register</Span>
                        </Link>
                    </Li>
                    <Li>
                        <Link to="#">
                            <i class="fa-solid fa-registered"></i>
                            <Span>Forgot Password</Span>
                        </Link>
                    </Li>
                </Ul>
            </Nav>
        </Aside>
    );
}
export default AuthSidebar;
