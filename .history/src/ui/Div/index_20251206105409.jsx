import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Div.module.scss";
function Div({ className, children }) {
    return <div className={className}>{children}</div>;
}

Div.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Div;
