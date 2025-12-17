import PropTypes from "prop-types";
function Nav({ className, children }) {
    return <nav className={className}>{children}</nav>;
}

Nav.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Nav;
