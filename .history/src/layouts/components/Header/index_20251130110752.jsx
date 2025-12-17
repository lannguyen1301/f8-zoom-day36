import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "../../../ui/Logo";
import Navigation from "../Navigation";
import Action from "../Action";
function Header() {
    return (
        <>
            <header>
                <Logo src />
                <Navigation />
                <Action />
            </header>
        </>
    );
}

export default Header;
