import PropTypes from "prop-types";
function Span({ className, children }) {
    return <span className={className}>{children}</span>;
}

Span.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Span;
