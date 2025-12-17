import PropTypes from "prop-types";
function Div({ className, children }) {
    return <div className={className}>{children}</div>;
}

Div.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Div;
