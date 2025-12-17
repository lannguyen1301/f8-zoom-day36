import PropTypes from "prop-types";
function Li({ className, children }) {
    return <li className={className}>{children}</li>;
}

Li.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Li;
