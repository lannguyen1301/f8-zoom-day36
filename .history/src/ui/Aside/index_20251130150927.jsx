import PropTypes from "prop-types";
function Section({ className, children }) {
    return <section className={className}>{children}</section>;
}

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Section;
