import PropTypes from "prop-types";
function Label({ className, children, ...rest }) {
    return (
        <Label className={className} {...rest}>
            {children}
        </Label>
    );
}

Label.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Label;
