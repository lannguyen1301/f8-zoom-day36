import PropTypes from "prop-types";
function Label({ className, children, ...rest }) {
    return (
        <label className={className} {...rest}>
            {children}
        </label>
    );
}

Label.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Label;
