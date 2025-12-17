import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./Logo.module.scss";

function Logo({ className, src, alt }) {
    return (
        <Link to="/" className={styles.logo}>
            <img
                src="./assets/logo/logo.svg"
                alt="Lucy"
                className={styles.img}
            ></img>
        </Link>
    );
}
Logo.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
export default Logo;
