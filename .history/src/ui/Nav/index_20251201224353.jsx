import PropTypes from "prop-types";
function Nav({ className, children, ...rest }) {
    return (
        <nav className={className} {...rest}>
            {children}
        </nav>
    );
}

Nav.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Nav;
