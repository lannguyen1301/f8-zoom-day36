import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "../../../ui/Logo";
import Navigation from "../Navigation";
import Action from "../Actions";
//
import LogoImg from "../../public/logo.png";
function Header() {
    return (
        <header className={styles.header}>
            <Logo src={LogoImg} alt={LogoImg} className="" />
            <Navigation />
            <Action />
        </header>
    );
}

export default Header;
