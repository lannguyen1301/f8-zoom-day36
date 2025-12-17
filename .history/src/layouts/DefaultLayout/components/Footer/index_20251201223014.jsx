import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Footer.module.scss";
import Logo from "../../../ui/Logo";
import Navigation from "../Navigation";
// import Action from "../Action";
function Footer() {
    return (
        <>
            <footer>
                <Logo src={Logo.png} alert={Logo} className="" />
                <Para>© Copyright & Design By Uihut</Para>
                <Navigation />
                {/* <Action /> */}
            </footer>
        </>
    );
}

export default Footer;
