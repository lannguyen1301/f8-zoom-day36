import { Link } from "react-router";
import styles from "./Pagination.module.scss";

function Pagination() {
    return (
        <>
            <div>
                <Link>First</Link>
                <Link>Preview</Link>
                <Link>Next</Link>
                <Link>Last</Link>
            </div>
        </>
    );
}
export default Pagination;
