// import PropTypes from "prop-types";
// import clsx from "clsx";
// import styles from "./Button.module.scss";

// function Button({
//     primary = false,
//     rounded = false,
//     bordered = false,
//     title,
//     children,
//     onClick,
//     href,
//     size = "medium",
//     className,
//     ...passProps // các props còn lại sẽ được gộp vào biến passProps
// }) {
//     console.log(passProps);

//     const classNames = clsx(styles.wrapper, className, styles[size], {
//         [styles.primary]: primary,
//         [styles.rounded]: rounded,
//         [styles.bordered]: bordered,
//     });

//     // Biến button thành thẻ a khi có href
//     // Toán tử 3 ngôi
//     const Component = href ? "a" : "button";
//     // nếu có href thì lấy thẻ a, không thì lấy thẻ button
//     return (
//         <Component
//             {...passProps} // truyền các props còn lại vào component, tên biến là passProps do mình đặt
//             href={href}
//             className={classNames}
//             title={title}
//             onClick={onClick}
//         >
//             {children}
//         </Component>
//     );
// }

// Button.propTypes = {
//     primary: PropTypes.bool,
//     rounded: PropTypes.bool,
//     bordered: PropTypes.bool,
//     title: PropTypes.string,
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func,
//     href: PropTypes.string,
//     size: PropTypes.string,
//     className: PropTypes.string,
// };

// export default Button;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    title,
    children,
    onClick,
    href,
    to,
    size = "medium",
    className,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
    });

    // Xác định component bằng toán tử 3 ngôi (có to => Link, có href => a, mặc định => button)
    const Component = to ? Link : href ? "a" : "button";

    // Chuẩn bị props chung + riêng
    const props = {
        ...passProps, // lấy tất cả props còn lại mà bạn truyền vào Button
        className: classNames, // gán className đã xử lý bằng clsx
        title, // gán prop title
        onClick, // gán prop onClick
        ...(to ? { to } : {}), // nếu có prop `to` thì thêm { to: to } vào object
        ...(href ? { href } : {}), // nếu có prop `href` thì thêm { href: href } vào object
    };

    return <Component {...props}>{children}</Component>;
}

Button.propTypes = {
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
