import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./Logo.module.scss";
import clsx from "clsx";
import Img from "@ui/Img";
// import logo from "../../public/logo.png";

function Logo({ className, imgClass, src, alt }) {
    return (
        <Link to="/" className={clsx(styles.link, className)}>
            <Img
                src={src}
                alt={alt}
                className={clsx(styles.logo, imgClass)}
            ></Img>
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
    src: "/public/logo/fallback-logo.png",
};
// Logo.defaultProps có alt mặc định là logo nếu không truyền alt vào
export default Logo;
