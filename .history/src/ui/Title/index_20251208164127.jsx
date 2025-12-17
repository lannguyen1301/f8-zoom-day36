import PropTypes from "prop-types";
function Title({ className, children, ...rest }) {
    return (
        <h1 className={className} {...rest}>
            {children}
        </h1>
    );
}

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Title;
