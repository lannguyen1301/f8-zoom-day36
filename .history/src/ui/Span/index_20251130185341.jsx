import PropTypes from "prop-types";
function Span({ className, children }) {
    return <p className={className}>{children}</p>;
}

Span.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Span;
