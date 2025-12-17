// import PropTypes from "prop-types";
// import styles from "./TextArea.module.scss";

// // Component Text Area
// function TextArea({
//     className,
//     name = "body",
//     id,
//     onChange,
//     placeholder = "Write a comments",
//     value = "",
//     required = true,
// }) {
//     return (
//         <textarea
//             name={name}
//             id={id}
//             className={className || styles.textarea}
//             placeholder={placeholder}
//             onChange={onChange}
//             value={value}
//             required={required}
//         />
//     );
// }
// TextArea.propTypes = {
//     className: PropTypes.string,
//     name: PropTypes.string,
//     id: PropTypes.string,
//     onChange: PropTypes.func,
//     placeholder: PropTypes.string,
// };
// export default TextArea;

import PropTypes from "prop-types";
import styles from "./TextArea.module.scss";

function TextArea({
    className,
    name = "body",
    id,
    onChange,
    placeholder = "Write a comment",
    value,
    required = false,
    ...props
}) {
    return (
        <textarea
            name={name}
            id={id}
            className={className || styles.textarea}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={required}
            {...props}
        />
    );
}

TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
};

export default TextArea;
