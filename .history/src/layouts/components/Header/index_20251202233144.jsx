import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "@ui/Logo";
import Navigation from "@layouts/components/Navigation";
import Actions from "@layouts/components/Actions";
//
// import LogoImg from "../../public/logo.png";
function Header() {
    return (
        <header className={styles.header}>
            <Logo src="/logo.png" alt="LogoImg" className="" />
            <Navigation />
            <Actions />
        </header>
    );
}

export default Header;
