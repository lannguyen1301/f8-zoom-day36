import PropTypes from "prop-types";
function SubTitle({ className, children, ...rest }) {
    return (
        <p className={className} {...rest}>
            {children}
        </p>
    );
}

SubTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default SubTitle;
