import PropTypes from "prop-types";
import styles from "./Loading.module.scss";
function Loading({ className }) {
    return <div className={`${styles.loader} ${className || ""}`}></div>;
    // className nhận class .loader làm giá trị mặc định, nếu không truyền className vào thì giá trị sẽ alf ""
}
Loading.propTypes = {
    className: PropTypes.string,
};
export default Loading;
