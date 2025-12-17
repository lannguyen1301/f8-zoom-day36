import { useState, useEffect } from "react"; // import function from react
import { useSearchParams } from "react-router"; // import function useSearchParams from React Router
import { Link } from "react-router";
import clsx from "clsx";

// Styles Module
import styles from "./Posts.module.scss";

// Styles Global
import "@styles/main.scss";

// components
import Loading from "@components/Loading";
import LimitText from "@components/LimitText";
import Pagination from "@components/Pagination";

// ui
import Section from "@ui/Section";
import Div from "@ui/Div";
import Title from "@ui/Title";
import Para from "@ui/Para";
// import Ul from "@ui/Ul";
// import Li from "@ui/Li";
import SubTitle from "@ui/SubTitle";
import SubsectionTitle from "@ui/SubsectionTitle";

function Post() {
    const [params, setParams] = useSearchParams(); // giúp UI và URL đồng bộ, hỗ trợ phân trang, lọc dữ liệu, sort…
    console.log(params); // debug

    const [page, setPage] = useState(() => +params.get("page") || 1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const postsPerPage = 20; // số bài viết trên 1 trang
    const [totalPosts, setTotalPosts] = useState(0);

    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const firstPage = page === 1;
    const lastPage = page === totalPages;

    // lấy tất cả các bài viết
    useEffect(() => {
        const API_URL = "https://jsonplaceholder.typicode.com";

        fetch(`${API_URL}/posts`)
            .then((res) => res.json())
            .then((data) => {
                setTotalPosts(data.length); // api có 100 bài
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const API_URL = "https://jsonplaceholder.typicode.com";

        fetch(`${API_URL}/posts?_limit=20&_page=${page}`)
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
                }, 1000);
            });
    }, [page]);

    // phân trang
    // sau khi chuyển trang refesh vẫn không về lại trang đầu
    useEffect(() => {
        setParams(page <= 1 ? {} : { page });
    }, [page, setParams]);

    // Component Loading
    if (loading) {
        return <Loading className="loadingCircle" />;
    }

    return (
        <main className={clsx(styles.container, styles.containerShadow)}>
            <Title className={styles.title}>React - F8 Zoom Day 36</Title>
            {/* content */}
            <Section className={styles.productList}>
                {posts.map((post) => (
                    <Div key={post.id} className={styles.blogPost}>
                        <Div className={styles.containerCopy}>
                            <SubsectionTitle className={styles.subSectionTitle}>
                                12 January 2019
                            </SubsectionTitle>
                            <SubTitle className={styles.subTitle}>
                                {LimitText(post.title, 10)}
                            </SubTitle>
                            <Para className={styles.paraPost}>
                                {LimitText(post.body)}
                            </Para>
                            <Link
                                className={styles.btnPrimary}
                                to={`/posts/${post.id}`}
                            >
                                Read More
                            </Link>
                        </Div>
                    </Div>
                ))}
            </Section>

            {/* Phân trang */}
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </main>
    );
}
export default Post;
