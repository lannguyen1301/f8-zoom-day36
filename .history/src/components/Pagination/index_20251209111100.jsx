import { Link } from "react-router";
import styles from "./Pagination.module.scss";
import Ul from "@ui/Ul";

function Pagination() {
    return (
        <>
            <div>
                <Ul>
                    <Link>First</Link>
                    <Link>Preview</Link>
                    <Link>1</Link>
                    <Link>2</Link>
                    <Link>3</Link>
                    <Link>4</Link>
                    <Link>5</Link>
                    <Link>Next</Link>
                    <Link>Last</Link>
                </Ul>
            </div>
        </>
    );
}
export default Pagination;
