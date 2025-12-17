import PropTypes from "prop-types";
function Title({ className, children, ...rest }) {
    return (
        <h2 className={className} {...rest}>
            {children}
        </h2>
    );
}

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Title;
