import PropTypes from "prop-types";
import styles from "./Form.module.scss";

// Component Form
function Form({ className, children, onSubmit, ...rest }) {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    );
}

Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Form;
