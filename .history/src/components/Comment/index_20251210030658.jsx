import { useParams, useNavigate } from "react-router";
// useNavigate: Ý nghĩa: hook để điều hướng trong React Router. Nhiệm vụ: thay đổi URL và đưa người dùng đến route khác. Chức năng: hỗ trợ điều hướng tuyệt đối, tương đối, thay thế history, và điều hướng có điều kiện.
// useParams: Ý nghĩa: hook để truy xuất tham số động từ URL. Nhiệm vụ: cung cấp dữ liệu từ URL cho component. Chức năng: giúp bạn hiển thị nội dung hoặc gọi API dựa trên tham số trong route (ví dụ id, slug, category).
import { useState, useEffect } from "react";

// Styles Module
import styles from "./Comment.module.scss";

// Styles Global
import "@styles/main.scss";

// components
import Loading from "@components/Loading";

// ui

import Div from "@ui/Div";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import Img from "@ui/Img";
import Form from "@ui/Form";
import Input from "@ui/Input";
import Button from "@ui/Button";
import Span from "@ui/Span";
import TextArea from "@ui/TextArea";

import { getAvatarUrl } from "./components/getAvatarUrl";

function Comment({ postId }) {
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
        fetch(`${API_URL}/posts/${postId}/comments`)
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((error) => {
                console.error("Lỗi comment API:", error);
            })
            .finally(() => {
                // setLoading(false)
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                // giả lập mạng chậm để xuất hiện loading
            });
    }, [postId]);

    // event handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // event handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.body) return;

        const newComment = {
            id: comments.length + 1,
            name: form.name,
            email: form.email,
            body: form.body,
        };

        setComments((prev) => [...comments, newComment]);
        setForm(initialForm);
    };
    return (
        <>
            <Div className={styles.commentWrapper}>
                <SubTitle className={styles.commentSubTitle}>
                    Comment System
                </SubTitle>
                <Form className={styles.formInner} onSubmit={handleSubmit}>
                    {/* chưa ok */}
                    <Input
                        className={styles.inputName}
                        autoFocus
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        required
                        spellCheck
                    />
                    {/* chưa ok */}
                    <Input
                        className={styles.inputEmail}
                        autoFocus
                        name="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        spellCheck
                    />

                    {/* đã ok */}
                    <TextArea
                        value={form.body}
                        name="body"
                        onChange={handleChange}
                        className={styles.InputTextArea}
                    />

                    <Button className={styles.btn} type="submit">
                        Send Comment
                    </Button>
                </Form>
                <Div className={styles.commentList}>
                    {loading ? (
                        <Loading />
                    ) : (
                        comments.map((comment) => (
                            <Div
                                className={styles.commentCard}
                                key={comment.id}
                            >
                                <Img
                                    className={styles.bgUiImg}
                                    alt={comment.name}
                                    src={getAvatarUrl(comment.name)}
                                    name={comment.name}
                                />

                                <Div className={styles.commentContent}>
                                    <Div className={styles.commentHeader}>
                                        <Div>
                                            <SubTitle>{comment.name}</SubTitle>
                                            <Span>{comment.email}</Span>
                                        </Div>
                                        <Span>2 hrs ago</Span>
                                    </Div>
                                    <Div className={styles.text}>
                                        {comment.body}
                                    </Div>
                                </Div>
                            </Div>
                        ))
                    )}
                </Div>
            </Div>
        </>
    );
}

export default Comment;
