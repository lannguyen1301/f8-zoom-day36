import PropTypes from "prop-types";
function SubsectionTitle({ className, children, ...rest }) {
    return (
        <h3 className={className} {...rest}>
            {children}
        </h3>
    );
}

SubsectionTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default SubsectionTitle;
