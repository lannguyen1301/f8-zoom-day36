import { useParams, useNavigation } from "react-router";
// useNavigation: Ý nghĩa: hook để theo dõi trạng thái điều hướng trong React Router. Nhiệm vụ: cung cấp thông tin về quá trình chuyển trang hoặc gửi form. Chức năng: giúp bạn hiển thị loading spinner, disable nút, hoặc tạo UI “optimistic” khi dữ liệu đang thay đổi.
// useParams: Ý nghĩa: hook để truy xuất tham số động từ URL. Nhiệm vụ: cung cấp dữ liệu từ URL cho component. Chức năng: giúp bạn hiển thị nội dung hoặc gọi API dựa trên tham số trong route (ví dụ id, slug, category).
import { useState, useEffect } from "react";
import { Link } from "react-router";
import clsx from "clsx";

// Styles Module
import styles from "./PostDetail.module.scss";

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
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import SubTitle from "@ui/SubTitle";
import SubsectionTitle from "@ui/SubsectionTitle";

function PostDetail() {
    const params = useParams(); // hàm theo dõi trạng thái điều hướng trong React Router.
    const navigate = useNavigation(); // hàm chuyển hướng trong React Router.
    const [post, setPost] = useState(null); // post: bài viết, setPost: trạng thái của bài viết
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res) => res.json())
            .then((post) => {
                setPost(post);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    }, []);
    if (!post) return <Loading />;

    return (
        <>
            <main className="container">
                <Section className={styles.postDetail}>
                    <Title className={styles.titleDetail}>
                        {post.title} Post Detail
                    </Title>
                    <Para className={styles.paraDetail}>{post.body}</Para>
                </Section>
                <Section className={styles.postComment}></Section>
            </main>
        </>
    );
}
export default PostDetail;
