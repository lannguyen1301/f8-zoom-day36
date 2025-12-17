import PropTypes from "prop-types";
function Aside({ className, children }) {
    return <aside className={className}>{children}</aside>;
}

Aside.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Aside;
