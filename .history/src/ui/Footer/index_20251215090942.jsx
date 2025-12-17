import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Header.module.scss";
function Footer({ className, children, style }) {
    return (
        <footer className={className} style={style}>
            {children}
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Footer;
