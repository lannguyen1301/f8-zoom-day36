import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Footer.module.scss";
import Logo from "@ui/Logo";
import Para from "@ui/Para";
import Ul from "@ui/Ul";
import Li from "@ui/Li";
function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <Div className={"container"}></Div>
                <Logo src="./logo//logo.svg" alt="Logo" className={""} />
                <Para>©Copyright & Design By Uihut</Para>
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
            </footer>
        </>
    );
}

export default Footer;
