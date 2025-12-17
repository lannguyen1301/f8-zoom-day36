import { Link } from "react-router";
import styles from "./Pagination.module.scss";
import Ul from "@ui/Ul";
import Li from "@ui/Li";

function Pagination() {
    return (
        <>
            <div>
                <Ul>
                    <Li>
                        <Link to="./">First</Link>
                        <Link to="./">Preview</Link>
                        <Link to="./">1</Link>
                        <Link to="./">2</Link>
                        <Link to="./">3</Link>
                        <Link to="./">4</Link>
                        <Link to="./">5</Link>
                        <Link to="./">Next</Link>
                        <Link to="./">Last</Link>
                    </Li>
                </Ul>
            </div>
        </>
    );
}
export default Pagination;
