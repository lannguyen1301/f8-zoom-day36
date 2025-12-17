import PropTypes from "prop-types";
function Para({ className, children }) {
    return <section className={className}>{children}</section>;
}

Para.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Para;
