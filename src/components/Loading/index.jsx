import PropTypes from "prop-types";
import styles from "./Loading.module.scss";
function Loading({ className, variantLoading = "loadingCircle" }) {
    return (
        <div
            className={`${styles.loader} ${styles[variantLoading]} ${className || ""}`}
        ></div>
    );
    // className mặc định là loader, nếu variantLoading = loadingCircle thì lấy loadingCircle(haocwj style khác truyền vào từ component cha) nếu không truyền className thì là chuỗi rỗng
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

// cách dùng
{
    /* <Loading variantLoading='loadingCircle' /> thì component con sẽ nhận className là loadingCircle */
}
{
    /* <Loading variantLoading='loadingCirclePoint...' /> thì component con sẽ nhận className là loadingCirclePoint... */
}
