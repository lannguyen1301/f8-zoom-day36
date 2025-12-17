import PropTypes from "prop-types";
import styles from "./Loading.module.scss";
function Loading({ className }) {
    return <div class="loader"></div>;
}
Loading.propTypes = {
    className: PropTypes.string,
};
export default Loading;
