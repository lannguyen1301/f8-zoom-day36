import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Footer.module.scss";
import Logo from "@ui/Logo";
import Para from "@ui/Para";
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import Div from "@ui/Div";
function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <Div className={clsx("container")}>
                    <Div className={styles.footerInner}>
                        <Div className={styles.footerLeft}>
                            <Logo
                                src="./logo/logo.svg"
                                alt="Logo"
                                className={""}
                            />
                        </Div>
                        <Div className={styles.footerRight}>
                            <Ul>
                                <Li>
                                    <Link to="/contact">Contact</Link>
                                </Li>
                                <Li>
                                    <Link to="/privacy">Privacy</Link>
                                </Li>
                                <Li>
                                    <Link to="/admin">Admin</Link>
                                </Li>
                            </Ul>
                        </Div>
                    </Div>
                    <Para>©Copyright & Design By Uihut</Para>
                </Div>
            </footer>
        </>
    );
}

export default Footer;
