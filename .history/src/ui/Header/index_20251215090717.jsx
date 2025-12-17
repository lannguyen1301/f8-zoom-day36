import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Div.module.scss";
function Header({ className, children, style }) {
    return (
        <header className={className} style={style}>
            {children}
        </header>
    );
}

Header.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Header;
