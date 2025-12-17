import PropTypes from "prop-types";
import styles from "./Loading.module.scss";
function Loading({ className, variantLoading = "loadingCircle" }) {
    return (
        <div
            className={`${styles.loader} ${styles[variantLoading]} ${className || ""}`}
        ></div>
    );
    // className nhận class .loader làm giá trị mặc định, nếu không truyền className vào thì giá trị sẽ là ""
}
Loading.propTypes = {
    className: PropTypes.string,
    variantLoading: PropTypes.oneOf([
        "loadingCircle",
        "loadingCirclePoint",
        "loadingRoundNested",
        "loadingCircleNested",
        "loadingSquareNested",
        "loadingNumberPercent",
        "loadingTimelineLoading",
        "loadingTwoGear",
    ]),
};
export default Loading;

// CÁCH CHUẨN (BEST PRACTICE 2025)
// function LoaderComp({ className }) {
//   return (
//     <div className={`${styles.loader} ${className || ""}`}></div>
//   );
// }
