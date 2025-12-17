import PropTypes from "prop-types";
function Main({ className, children }) {
    return <Main className={className}>{children}</Main>;
}

Main.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Main;
