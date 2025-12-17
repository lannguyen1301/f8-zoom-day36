import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Link } from "react-router";
import clsx from "clsx";

// Styles Module
import styles from "./Posts.module.scss";

// Styles Global
import "@styles/main.scss";

// components
import Loading from "@components/Loading";

// ui
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
    const [params, setParams] = useSearchParams();
    console.log(params); // debug

    const [page, setPage] = useState(() => +params.get("page") || 1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`s://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 2500);
            });
    }, [page]);
    if (loading) {
        return <Loading className="loadingCircle" />;
    }

    return (
        <main className={styles.container}>
            <Title className={styles.title}>React - F8 Zoom Day 36</Title>
            <Section className={styles.cardRow}>
                {posts.map((post) => (
                    <Div key={post.id} className={styles.card}>
                        <Div className={styles.cardBody}>
                            <SubTitle className={styles.cardTitle}>
                                {post.title}
                            </SubTitle>
                            <Para className={styles.cardDesc}>{post.body}</Para>
                            <Link
                                to={`/posts/${post.id}`}
                                className={styles.cardBtn}
                            >
                                Read More
                            </Link>
                        </Div>
                    </Div>
                ))}
            </Section>

            <Title className={styles.title}>React - F8 Zoom Day 36</Title>
            <Section className={styles.productList}>
                {posts.map((post) => (
                    <Div key={post.id} className={styles.blogPost}></Div>
                ))}
                <Div className={styles.blogPost}>
                    <Div className={styles.containerCopy}>
                        <SubsectionTitle>12 January 2019</SubsectionTitle>
                        <SubTitle className={styles.subTitle}>
                            {post.title}
                        </SubTitle>
                        <Para className={styles.paraPost}>{post.body}</Para>
                        <Link
                            className={styles.btnPrimary}
                            to={`/posts/${post.id}`}
                        >
                            Read More
                        </Link>
                    </Div>
                </Div>
            </Section>
        </main>
    );
}
export default Post;
