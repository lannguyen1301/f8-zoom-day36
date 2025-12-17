import { Link } from "react-router";
import styles from "./Pagination.module.scss";

function Pagination() {
    return (
        <>
            <div>
                <Link>First</Link>
                <Link>Preview</Link>
                <Link>1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link>4</Link>
                <Link>5</Link>
                <Link>Next</Link>
                <Link>Last</Link>
            </div>
        </>
    );
}
export default Pagination;
