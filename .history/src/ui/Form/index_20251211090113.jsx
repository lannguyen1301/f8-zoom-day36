import PropTypes from "prop-types";
import styles from "./Form.module.scss";

// Component Form
function Form({ className, children, onSubmit, ...rest }) {
    return (
        <form
            onSubmit={onSubmit}
            className={className || styles.form}
            {...rest}
        >
            {children}
        </form>
    );
}

Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func,
};
export default Form;
