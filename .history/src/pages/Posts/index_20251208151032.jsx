import { Link } from "react-router";
import clsx from "clsx";
import styles from "./Posts.module.scss";
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
                            <SubTitle></SubTitle>
                            <Para></Para>
                        </Div>
                    </Link>
                </Div>
            </Section>
        </>
    );
}
export default Post;
