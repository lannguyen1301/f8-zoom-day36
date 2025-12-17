import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Ul.module.scss";
function Ul({ className, children, ...rest }) {
    return (
        <ul className={className} {...rest}>
            {children}
        </ul>
    );
}

Ul.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Ul;
