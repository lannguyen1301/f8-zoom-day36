import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./Logo.module.scss";

function Logo() {
    return (
        <Link to="/" className={styles.logo}>
            <img
                src="./assets/logo/logo.svg"
                alt="Lucy"
                class={styles.logo}
            ></img>
        </Link>
    );
}
Logo.propTypes = {
    //
};
export default Logo;
