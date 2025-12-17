import { Link } from "react-router";
import styles from "./Actions.module.scss";

function Actions() {
    return (
        <>
            <div className={styles.actionArea}>
                <Link className={styles.secondaryBtn} to="/register">
                    Sign up
                </Link>

                <Link className={styles.primaryBtn} to="/login">
                    Log in
                </Link>
            </div>
        </>
    );
}

export default Actions;

<!-- Header action  -->

                <div class="header-action">
                    <a href="#!" class="header-action__link">Sign in</a>
                    <a href="#!" class="btn header-action__btn">Sign up</a>
                </div>
