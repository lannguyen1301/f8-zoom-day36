import PropTypes from "prop-types";
function Div({ className, children }) {
    return <Div>{children}</Div>;
}

Div.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Div;
