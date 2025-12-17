import PropTypes from "prop-types";
import styles from "./Loading.module.scss";
function Loading({ className }) {
    return <div className={`${styles.loader} ${className || ""}`}></div>;
}
Loading.propTypes = {
    className: PropTypes.string,
};
export default Loading;
