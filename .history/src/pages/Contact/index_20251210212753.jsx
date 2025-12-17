import { useParams, useNavigate } from "react-router";
// useNavigate: Ý nghĩa: hook để điều hướng trong React Router. Nhiệm vụ: thay đổi URL và đưa người dùng đến route khác. Chức năng: hỗ trợ điều hướng tuyệt đối, tương đối, thay thế history, và điều hướng có điều kiện.
// useParams: Ý nghĩa: hook để truy xuất tham số động từ URL. Nhiệm vụ: cung cấp dữ liệu từ URL cho component. Chức năng: giúp bạn hiển thị nội dung hoặc gọi API dựa trên tham số trong route (ví dụ id, slug, category).
import { useState, useEffect } from "react";

// Styles Module
import styles from "./Contact.module.scss";

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

function Contact() {
    return (
        <>
            <Section className="container">
                <Div className={styles.contactInner}>
                    <Title>Contact Me</Title>
                </Div>
            </Section>
        </>
    );
}
export default Contact;
