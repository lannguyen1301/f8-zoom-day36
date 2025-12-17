import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./Logo.module.scss";
// import logo from "../../../assets/img/logo.png";
import clsx from "clsx";

function Logo({ className, imgClass, src, alt }) {
    return (
        <Link to="/" className={clsx(styles.link, className)}>
            <img
                src={src}
                alt={alt}
                className={clsx(styles.logo, imgClass)}
            ></img>
        </Link>
    );
}
Logo.propTypes = {
    className: PropTypes.string,
    imgClass: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

Logo.defaultProps = {
    alt: "Logo",
    src: "../../assets/img/fallback-logo.png",
};
// Logo.defaultProps có alt mặc định là logo nếu không truyền alt vào
export default Logo;
