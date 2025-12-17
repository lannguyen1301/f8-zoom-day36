import PropTypes from "prop-types";
function Aside({ className, children }) {
    return <Aside className={className}>{children}</Aside>;
}

Aside.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Aside;
