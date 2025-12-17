import PropTypes from "prop-types";
function Para({ className, children }) {
    return <p className={className}>{children}</p>;
}

Para.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Para;
