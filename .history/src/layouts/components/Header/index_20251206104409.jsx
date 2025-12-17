import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "@ui/Logo";
import Div from "@ui/Div";
import Navigation from "@layouts/components/Navigation";
import Actions from "@layouts/components/Actions";
//
// import LogoImg from "../../public/logo.png";
function Header() {
    return (
        <header className={styles.header}>
            <Div className={styles.container}>
                <Div className={styles.headerInner}>
                    <Logo
                        src="/logo.png"
                        alt="LogoImg"
                        className={styles.logo}
                    />
                    <Navigation />
                    <Actions />
                </Div>
            </Div>
        </header>
    );
}

export default Header;
