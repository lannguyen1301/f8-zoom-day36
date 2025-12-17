function Section({ className, children }) {
    return <section>{children}</section>;
}

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Section;
