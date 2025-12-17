import PropTypes from "prop-types";
function Para({ className, children, ...rest }) {
    return (
        <p className={className} {...rest}>
            {children}
        </p>
    );
}

Para.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Para;
