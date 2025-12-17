import { Link } from "react-router";
import { useParams } from "react-router";
import clsx from "clsx";
import styles from "./Pagination.module.scss";
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import Section from "@ui/Section";

function Pagination({ page, totalPages, setPage }) {
    const firstPage = page === 1;
    const lastPage = page === totalPages;
    return (
        <Section className={styles.pagination}>
            <Ul styles={{ display: "flex" }}>
                {Array(5)
                    .fill(null)
                    .map((_, index) => {
                        const pageNum = index + 1;
                        const isActive = page === pageNum;

                        return (
                            <Li
                                key={index}
                                style={{
                                    border: "1px solid #333",
                                    padding: "2px 4px",
                                    color: isActive ? "#fff" : "#333",
                                    background: isActive ? "#333" : "#fff",
                                }}
                                onClick={() => {
                                    console.log("Tải trang: ", pageNum);
                                    setPage(pageNum);
                                }}
                            >
                                {pageNum}
                            </Li>
                        );
                    })}
            </Ul>
        </Section>
    );
}
export default Pagination;
