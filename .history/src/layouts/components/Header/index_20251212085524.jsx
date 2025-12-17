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
        <header className={clsx(styles.header, styles.scrolled)}>
            <Div className={styles.container}>
                <Div className={clsx(styles.headerInner)}>
                    {/* styles.headerInner: là class module của file header, "headerInner" lấy từ component con tương úng */}
                    <Logo
                        src="./logo/logo.svg"
                        alt="LogoImg"
                        className={styles.logo}
                    />
                    <Navigation />
                    <Actions />
                    {/* Actions ở đây không truyền className thì lấy từ component con */}
                </Div>
            </Div>
        </header>
    );
}

export default Header;
