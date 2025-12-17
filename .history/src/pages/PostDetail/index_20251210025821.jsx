import { useParams, useNavigate } from "react-router";
// useNavigate: Ý nghĩa: hook để điều hướng trong React Router. Nhiệm vụ: thay đổi URL và đưa người dùng đến route khác. Chức năng: hỗ trợ điều hướng tuyệt đối, tương đối, thay thế history, và điều hướng có điều kiện.
// useParams: Ý nghĩa: hook để truy xuất tham số động từ URL. Nhiệm vụ: cung cấp dữ liệu từ URL cho component. Chức năng: giúp bạn hiển thị nội dung hoặc gọi API dựa trên tham số trong route (ví dụ id, slug, category).
import { useState, useEffect } from "react";
import clsx from "clsx";

// Styles Module
import styles from "./PostDetail.module.scss";

// Styles Global
import "@styles/main.scss";

// components
import Loading from "@components/Loading";
import Comment from "@components/Comment";

// ui
import Section from "@ui/Section";
import Para from "@ui/Para";
import Title from "@ui/Title";

function PostDetail() {
    const { id } = useParams(); // hàm lấy tham số từ url trong React Router.
    const navigate = useNavigate(); // hàm chuyển hướng trong React Router.

    const [post, setPost] = useState(null); // post: bài viết, setPost: trạng thái của bài viết
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const API_URL = "https://jsonplaceholder.typicode.com";
        fetch(`${API_URL}/posts/${id}`)
            .then((res) => {
                // chuyển trang
                if (!res.ok) {
                    navigate("/posts", {
                        replace: true,
                    });
                    return;
                }
                return res.json();
            })
            .then((data) => {
                if (data) setPost(data);
            })
            .catch((error) => {
                console.error("Lỗi API:", error);
            })
            .finally(() => {
                setTimeout(() => setLoading(false), 700); // giả lập loading
            });

        // fetch Comment
        fetch(`${API_URL}/posts/${id}/comments`)
            .then((res) => res.json())
            .then((comments) => {
                setComments(comments);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setTimeout(() => setLoading(false), 1000);
            });
    }, [id]);

    if (loading || !post) return <Loading className="loadingCircle" />;

    return (
        <>
            <main className="container">
                <Section className={styles.postDetail}>
                    <Title className={styles.titleDetail}>{post.title}</Title>
                    <Para className={styles.paraDetail}>{post.body}</Para>
                </Section>
                <Section className={styles.postComment}>
                    <Comment postId={id} />
                </Section>
            </main>
        </>
    );
}
export default PostDetail;
