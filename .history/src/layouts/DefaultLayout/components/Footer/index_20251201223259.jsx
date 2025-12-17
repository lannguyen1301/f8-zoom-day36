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
                <Para>©Copyright & Design By Uihut</Para>
                <Ul>
                    <Li>
                        <Link to="/contact">Contact</Link>
                    </Li>
                    <Li>
                        <Link to="/privacy">Privacy</Link>
                    </Li>
                </Ul>
                <Link></Link>
            </footer>
        </>
    );
}

export default Footer;
