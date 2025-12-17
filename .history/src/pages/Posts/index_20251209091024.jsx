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
            <Title className={styles.Title}>Dịch vụ chăm sóc thú cưng</Title>
            <Section className={styles.cardRow}>
                {posts.map((post) => (
                    <Div key={post.id} className={styles.card}>
                        <Div className={styles.cardBody}>
                            <SubTitle className={styles.cardTitle}>
                                {post.title}
                            </SubTitle>
                            <Para className={styles.cardDesc}>
                                Learn how HTML works and how to write clean
                                syntax for modern websites.
                            </Para>
                            <Link to="/" className={styles.cardBtn}>
                                Read More
                            </Link>
                        </Div>
                    </Div>
                ))}
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
                    {posts.map}
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
            </Section>

            <section class="product_list">
                <div class="blog_post">
                    <div class="container_copy">
                        <h3>12 January 2019</h3>
                        <h1>CSS Positioning</h1>
                        <p>
                            The position property specifies the type of
                            positioning method used for an element (static,
                            relative, absolute, fixed, or sticky).
                        </p>
                        <a class="btn_primary" href="#">
                            Read More
                        </a>
                    </div>
                </div>

                <div class="blog_post">
                    <div class="container_copy">
                        <h3>20 February 2020</h3>
                        <h1>Flexbox Guide</h1>
                        <p>
                            Learn how to align, justify, and distribute elements
                            using CSS Flexbox layout techniques.
                        </p>
                        <a class="btn_primary" href="#">
                            Read More
                        </a>
                    </div>
                </div>

                <div class="blog_post">
                    <div class="container_copy">
                        <h3>5 March 2021</h3>
                        <h1>Grid Layout</h1>
                        <p>
                            Master CSS Grid to build complex responsive layouts
                            with rows and columns.
                        </p>
                        <a class="btn_primary" href="#">
                            Read More
                        </a>
                    </div>
                </div>

                <div class="blog_post">
                    <div class="container_copy">
                        <h3>10 April 2022</h3>
                        <h1>Media Queries</h1>
                        <p>
                            Use media queries to make your website adapt to
                            different screen sizes and devices.
                        </p>
                        <a class="btn_primary" href="#">
                            Read More
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Post;
