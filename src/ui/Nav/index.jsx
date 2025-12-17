import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Nav.module.scss";
function Nav({ className, children, ...rest }) {
    return (
        <nav className={className} {...rest}>
            {children}
        </nav>
    );
}

Nav.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Nav;
