import PropTypes from "prop-types";
function Ul({ className, children, ...rest }) {
    return (
        <ul className={className} {...rest}>
            {children}
        </ul>
    );
}

Ul.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Ul;
