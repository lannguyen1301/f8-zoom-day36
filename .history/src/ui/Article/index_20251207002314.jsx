import PropTypes from "prop-types";
function Article({ className, children, ...rest }) {
    return (
        <article className={className} {...rest}>
            {children}
        </article>
    );
}

Article.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Article;
