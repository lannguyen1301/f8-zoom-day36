import { useParams, useNavigate } from "react-router";
// useNavigate: Ý nghĩa: hook để điều hướng trong React Router. Nhiệm vụ: thay đổi URL và đưa người dùng đến route khác. Chức năng: hỗ trợ điều hướng tuyệt đối, tương đối, thay thế history, và điều hướng có điều kiện.
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
import Para from "@ui/Para";
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import SubsectionTitle from "@ui/SubsectionTitle";
import Img from "@ui/Img";
import Form from "@ui/Form";
import Input from "@ui/Input";
import Button from "@ui/Button";
import Span from "@ui/Span";

import { getAvatarUrl } from "./components/getAvatarUrl";

function PostDetail() {
    const params = useParams(); // hàm lấy tham số từ url trong React Router.
    const navigate = useNavigate(); // hàm chuyển hướng trong React Router.
    const [post, setPost] = useState(null); // post: bài viết, setPost: trạng thái của bài viết
    const [loading, setLoading] = useState(true);

    // Star khai báo function comment vào bên trong function PostDetail
    const Comment = () => {
        const initialForm = {
            name: "",
            email: "",
            body: "",
        };

        const [form, setForm] = useState(initialForm);
        const [comments, setComments] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const API_URL = "https://jsonplaceholder.typicode.com";
            fetch(`${api_url}/comments?postId=1`)
                .then((res) => res.json())
                .then((comments) => setComments(comments))
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    // setLoading(false)
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                    // giả lập mạng chậm để xuất hiện loading
                });
        }, []);
    };
    // End khai báo function comment vào bên trong function PostDetail

    useEffect(() => {
        const API_URL = "https://jsonplaceholder.typicode.com";
        fetch(`${API_URL}/posts/${params.id}`)
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
    if (loading || !post) return <Loading className="loadingCircle" />;

    return (
        <>
            <main className="container">
                <Section className={styles.postDetail}>
                    <Title className={styles.titleDetail}>{post.title}</Title>
                    <Para className={styles.paraDetail}>{post.body}</Para>
                </Section>
                {/* <Section className={styles.postComment}></Section> */}
            </main>
        </>
    );
}
export default PostDetail;
