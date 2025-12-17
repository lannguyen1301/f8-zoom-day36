import clsx from "clsx";
import styles from "./Footer.module.scss";
import Logo from "../../../ui/Logo";
import Navigation from "../Navigation";
import Action from "../Action";
function Footer() {
    return (
        <>
            <footer>
                <Logo src={Logo.png} alert={Logo} className="" />
                <Navigation />
                <Action />
            </footer>
        </>
    );
}

export default Footer;
