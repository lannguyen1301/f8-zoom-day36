import PropTypes from "prop-types";
import styles from "./Input.module.scss";

// Component Input
function Input({
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
    className: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    spellCheck: PropTypes.bool,
    value: PropTypes.string,
    required: PropTypes.bool,
    autoFocus: PropTypes.bool,
};

export default Input;
