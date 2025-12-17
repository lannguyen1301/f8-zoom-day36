import PropTypes from "prop-types";
import styles from "./Loading.module.scss";
function Loading({ className }) {
    return <span class="loader"></span>;
}
Loading.propTypes = {
    className: PropTypes.string,
};
export default Loading;
