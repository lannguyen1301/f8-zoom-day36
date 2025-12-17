import clsx from "clsx";
import styles from "./Header.module.scss";
function Header() {
    return (
        <>
            <header>
                <Logo />
                <Navigation />
                <Action />
            </header>
        </>
    );
}

export default Header;
