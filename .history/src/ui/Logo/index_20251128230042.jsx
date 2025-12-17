import PropTypes from "prop-types";
import { Link } from "react-router";
import styles from "./Logo.module.scss";

function Logo({ className, src, alt }) {
    return (
        <Link to="/" className={className}>
            <img src={src} alt={alt} className={styles.img}></img>
        </Link>
    );
}
Logo.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

Logo.defaultProps = {
    alt: "Logo",
};
// Logo.defaultProps có alt mặc định là logo nếu không truyền alt vào
export default Logo;
