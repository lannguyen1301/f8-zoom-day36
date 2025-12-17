import PropTypes from "prop-types";
function Li({ className, children }) {
    return <lii className={className}>{children}</lii>;
}

Li.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Li;
