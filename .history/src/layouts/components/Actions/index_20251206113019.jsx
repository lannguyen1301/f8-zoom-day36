import { Link } from "react-router";
import clsx from "clsx";
import Div from "@ui/Div";
import styles from "./Actions.module.scss";

function Actions() {
    return (
        <>
            <Div className={styles.headerAction}>
                <Link className={clsx(styles.headerActionLink)} to="/register">
                    Sign up
                </Link>

                <Link
                    className={clsx("btn", styles.headerActionBtn)}
                    to="/login"
                >
                    Log in
                </Link>
            </Div>
        </>
    );
}

export default Actions;

{
    /* <div class="header-action">
    <a href="#!" class="header-action__link">
        Sign in
    </a>
    <a href="#!" class="btn header-action__btn">
        Sign up
    </a>
</div>; */
}
