import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "../../../ui/Logo";
import Navigation from "../Navigation";
import Action from "../Action";
// 
imoirt LogoImg from '../../../../public/logo.png'
function Header() {
    return (
        <header className={styles.header}>
            <Logo src={Logo.png} alert={Logo} className="" />
            <Navigation />
            <Action />
        </header>
    );
}

export default Header;
