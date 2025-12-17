import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Img.module.scss";
function Img({ className, src, alt }) {
    return <img className={className} src={src} alt={alt} />;
}

Img.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
export default Img;
