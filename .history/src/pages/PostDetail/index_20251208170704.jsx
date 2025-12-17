import styles from "./PostDetail.module.scss";
function PostDetail() {
    return (
        <>
            <h1>Post Detail</h1>
            <section className={styles.cardRow}>
                <div className={styles.card}>
                    <img
                        src="https://via.placeholder.com/300x180"
                        alt="HTML Syntax"
                        className={styles.cardImg}
                    />
                    <div className={styles.cardBody}>
                        <h2 className={styles.cardTitle}>HTML Syntax</h2>
                        <p className={styles.cardDesc}>
                            Learn how HTML works and how to write clean syntax
                            for modern websites.
                        </p>
                        <a href="#" className={styles.cardBtn}>
                            Read More
                        </a>
                    </div>
                </div>

                {/* <!-- Lặp lại 3 card nữa --> */}
                <div className={styles.card}>
                    <img
                        src="https://via.placeholder.com/300x180"
                        alt="CSS Basics"
                        className={styles.cardImg}
                    />
                    <div className={styles.cardBody}>
                        <h2 className={styles.cardTitle}>CSS Basics</h2>
                        <p className={styles.cardDesc}>
                            Understand the fundamentals of styling with CSS and
                            responsive design.
                        </p>
                        <a href="#" className={styles.cardBtn}>
                            Read More
                        </a>
                    </div>
                </div>

                <div className={styles.card}>
                    <img
                        src="https://via.placeholder.com/300x180"
                        alt="JavaScript Intro"
                        className={styles.cardImg}
                    />
                    <div className={styles.cardBody}>
                        <h2 className={styles.cardTitle}>JavaScript Intro</h2>
                        <p className={styles.cardDesc}>
                            Dive into JavaScript and learn how to make your site
                            interactive.
                        </p>
                        <a href="#" className={styles.cardBtn}>
                            Read More
                        </a>
                    </div>
                </div>

                <div className={styles.card}>
                    <img
                        src="https://via.placeholder.com/300x180"
                        alt="Web Accessibility"
                        className={styles.cardImg}
                    />
                    <div className={styles.cardBody}>
                        <h2 className={styles.cardTitle}>Web Accessibility</h2>
                        <p className={styles.cardDesc}>
                            Make your website usable for everyone with
                            accessibility best practices.
                        </p>
                        <a href="#" className={styles.cardBtn}>
                            Read More
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PostDetail;
