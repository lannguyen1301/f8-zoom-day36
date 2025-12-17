import PropTypes from "prop-types";
function SubTitle({ className, children, ...rest }) {
    return (
        <h2 className={className} {...rest}>
            {children}
        </h2>
    );
}

SubTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default SubTitle;
