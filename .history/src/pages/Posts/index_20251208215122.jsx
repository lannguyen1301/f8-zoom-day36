import { Link } from "react-router";
import clsx from "clsx";

// Styles Module
import styles from "./Posts.module.scss";

// Styles Global
import "@styles/main.scss";

import Section from "@ui/Section";
import Div from "@ui/Div";
import Img from "@ui/Img";
import Title from "@ui/Title";
import Para from "@ui/Para";
import Span from "@ui/Span";
import SubTitle from "@ui/SubTitle";
import SubsectionTitle from "@ui/SubsectionTitle";
import Article from "@ui/Article";

function Post() {
    return (
        <main className={styles.container}>
            <Title className={styles.Title}>Dịch vụ chăm sóc thú cưng</Title>
            <Section className={styles.cardRow}>
                <Div className={styles.card}>
                    <Img
                        src="https://via.placeholder.com/300x180"
                        alt="HTML Syntax"
                        className={styles.cardImg}
                    />
                    <Div className={styles.cardBody}>
                        <SubTitle className={styles.cardTitle}>
                            HTML Syntax
                        </SubTitle>
                        <Para className={styles.cardDesc}>
                            Learn how HTML works and how to write clean syntax
                            for modern websites.
                        </Para>
                        <aLink to="/" className={styles.cardBtn}>
                            Read More
                        </aLink>
                    </Div>
                </Div>

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
            </Section>
        </main>
    );
}
export default Post;
