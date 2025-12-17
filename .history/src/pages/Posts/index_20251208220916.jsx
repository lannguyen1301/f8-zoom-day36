import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
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
    const (params, setParams) = useSearchParams();
    console.log(pa);
    
    return (
        <main className={styles.container}>
            <Title className={styles.Title}>Dịch vụ chăm sóc thú cưng</Title>
            <Section className={styles.cardRow}>
                {/* Card 1 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-01.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 2 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-02.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 3 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-03.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 4 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-04.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 2 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-02.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 1 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-01.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 3 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-03.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 4 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-04.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 3 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-03.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 1 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-01.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 2 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-02.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 4 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-04.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 4 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-04.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 1 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-01.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 4 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-04.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 2 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-02.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 3 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-03.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 1 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-01.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 2 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-02.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>

                {/* Card 3 */}
                <Div className={styles.card}>
                    <Img
                        src="/images/pet-03.png"
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
                        <Link to="/" className={styles.cardBtn}>
                            Read More
                        </Link>
                    </Div>
                </Div>
            </Section>
        </main>
    );
}
export default Post;
