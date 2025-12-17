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
            <Ul className={styles.paginationList}>
                <Li
                    key="first"
                    className={clsx(
                        styles.paginationControl,
                        firstPage && styles.paginationItemDisabled
                    )}
                    onClick={() => {
                        if (!firstPage) {
                            setPage(1);
                        }
                    }}
                >
                    First
                </Li>
                {/* First Page */}

                <Li
                    key="prev"
                    className={clsx(
                        styles.paginationControl,
                        firstPage && styles.paginationItemDisabled
                    )}
                    onClick={() => {
                        if (!firstPage) {
                            setPage((prev) => prev - 1);
                        }
                    }}
                >
                    Prev
                </Li>
                {/* Prev Page */}

                {Array(totalPages)
                    .fill(null)
                    .map((_, index) => {
                        const pageNum = index + 1;
                        const isActive = page === pageNum;

                        return (
                            <Li
                                key={index}
                                className={clsx(
                                    styles.paginationItem,
                                    isActive && styles.paginationItemActive
                                )}
                                onClick={() => {
                                    console.log("Tải trang: ", pageNum);
                                    setPage(pageNum);
                                }}
                            >
                                {pageNum}
                            </Li>
                        );
                    })}
                {/* Page Numb */}

                <Li
                    key="next"
                    className={clsx(
                        styles.paginationControl,
                        lastPage && styles.paginationItemDisabled
                    )}
                    onClick={() => {
                        if (!lastPage) {
                            setPage((prev) => prev + 1);
                        }
                    }}
                >
                    Next
                </Li>
                {/* Next Page */}

                <Li
                    key="last"
                    className={clsx(
                        styles.paginationControl,
                        lastPage && styles.paginationItemDisabled
                    )}
                    onClick={() => {
                        if (!lastPage) {
                            setPage(totalPages);
                        }
                    }}
                >
                    Last
                </Li>
                {/* Last Page */}
            </Ul>
        </Section>
    );
}
export default Pagination;
