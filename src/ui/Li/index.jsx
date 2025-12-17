import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Li.module.scss";
function Li({ className, children, ...rest }) {
    return (
        <li className={clsx(styles.li, className)} {...rest}>
            {children}
        </li>
    );
}

Li.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Li;
