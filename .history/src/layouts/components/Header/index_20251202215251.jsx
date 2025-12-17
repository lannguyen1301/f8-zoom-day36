import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "@ui";
import Navigation from "../Navigation";
import Action from "../Actions";
//
// import LogoImg from "../../public/logo.png";
function Header() {
    return (
        <header className={styles.header}>
            <Logo src="/logo.png" alt={LogoImg} className="" />
            <Navigation />
            <Action />
        </header>
    );
}

export default Header;
