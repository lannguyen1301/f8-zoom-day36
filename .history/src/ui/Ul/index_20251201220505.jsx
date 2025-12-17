import PropTypes from "prop-types";
function Ul({ className, children }) {
    return <ul className={className}>{children}</ul>;
}

Ul.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Ul;
