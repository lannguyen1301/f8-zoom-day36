import PropTypes from "prop-types";
function Li({ className, children, ...rest }) {
    return (
        <li className={className} {...rest}>
            {children}
        </li>
    );
}

Li.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Li;
