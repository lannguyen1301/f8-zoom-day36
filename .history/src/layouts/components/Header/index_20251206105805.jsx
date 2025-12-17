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
                <Div className={clsx(styles.headerInner, "headerInner")}>
                    {/* styles.headerInner: là class module của file header, "headerInner" lấy từ component con tương úng */}
                    <Logo
                        src="/logo.png"
                        alt="LogoImg"
                        className={styles.logo}
                    />
                    <Navigation />
                    <Actions className={styles.headerAction} />
                </Div>
            </Div>
        </header>
    );
}

export default Header;
