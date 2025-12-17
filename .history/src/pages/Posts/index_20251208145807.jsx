import { Link } from "react-router";
import clsx from "clsx";
import styles from "./Posts.module.scss";
import Section from "@ui/Section";
import Div from "@ui/Div";
import Img from "@ui/Img";
import Para from "@ui/Para";
import Span from "@ui/Span";
import SubTitle from "@ui/SubTitle";
import SubsectionTitle from "@ui/SubsectionTitle";
import Article from "@ui/Article";

function Post() {
    return (
        <>
            <Section className={styles.info}>
                <Img className={styles.postImg}></Img>
            </Section>
        </>
    );
}
export default Post;
