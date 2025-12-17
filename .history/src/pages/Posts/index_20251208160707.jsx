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
        <>
            <Section className={styles.info}>
                <Img className={styles.postImg} />
                <Title className={styles.postTitle}>
                    Bài viết về chăm sóc thú cưng
                </Title>
            </Section>
            <Section className={styles.cardsWrapper}>
                <Div className={styles.cardGridSpace}>
                    <Link className={styles.card} to={"/"}>
                        <Div>
                            <SubTitle className={styles.cardSubTitle}>
                                HTML Syntax
                            </SubTitle>
                            <Para className={styles.cardPara}>
                                The syntax of a language is how it works. How to
                                actually write it. Learn HTML syntax…
                            </Para>
                            <Div className={styles.date}>18 Dec 2025</Div>
                            <Div className={styles.tags}>
                                <Link to={"./"} className={styles.tag}>
                                    Read me
                                </Link>
                            </Div>
                        </Div>
                    </Link>
                </Div>
            </Section>
        </>
    );
}
export default Post;
