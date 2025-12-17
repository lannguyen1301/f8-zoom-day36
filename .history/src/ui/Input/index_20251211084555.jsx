import PropTypes from "prop-types";
import styles from "./Input.module.scss";

// Component Input
function Input({
    id,
    className,
    placeholder = "",
    name = "",
    type,
    onChange,
    autoFocus = false,
    value = "",
    spellCheck = false,
    required = false,
    ...props
}) {
    return (
        <input
            id={id}
            className={className || styles.inputText}
            placeholder={placeholder}
            type={type}
            name={name}
            onChange={onChange}
            spellCheck={spellCheck}
            value={value}
            required={required}
            autoFocus={autoFocus}
            {...props}
        />
    );
}

Input.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    spellCheck: PropTypes.bool,
    value: PropTypes.string,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

export default Input;
