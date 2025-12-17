import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
// useNavigate: Ý nghĩa: hook để điều hướng trong React Router. Nhiệm vụ: thay đổi URL và đưa người dùng đến route khác. Chức năng: hỗ trợ điều hướng tuyệt đối, tương đối, thay thế history, và điều hướng có điều kiện.
// useParams: Ý nghĩa: hook để truy xuất tham số động từ URL. Nhiệm vụ: cung cấp dữ liệu từ URL cho component. Chức năng: giúp bạn hiển thị nội dung hoặc gọi API dựa trên tham số trong route (ví dụ id, slug, category).
import { useState, useEffect } from "react";

// Styles Module
import styles from "./Contact.module.scss";

// Styles Global
import "@styles/main.scss";
import "@components/Comment/Comment.module.scss";

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
import Section from "@ui/Section";
import Para from "@ui/Para";

function Contact() {
    return (
        <>
            <Section className="container">
                <Div className={styles.contactInner}>
                    <Div className={styles.contactWrapperLeft}>
                        <Title className={styles.contactTitle}>
                            Contact Me
                        </Title>
                        <Div className={styles.emailGroup}>
                            <Span className={styles.labelEmail}>Email:</Span>
                            <Para className={styles.contactDesc}>
                                lannguyen@gmail.com
                            </Para>
                        </Div>

                        <Div className={styles.phoneGroup}>
                            <Span className={styles.labelPhone}>Phone:</Span>
                            <Para className={styles.contactDesc}>
                                +84 919344773
                            </Para>
                        </Div>

                        <Div className={styles.addressGroup}>
                            <Span className={styles.labelAdd}>Address:</Span>
                            <Para className={styles.contactDesc}>
                                46/32 Nguyễn Công Hoan, Phú Nhuận
                            </Para>
                        </Div>

                        <Div className={styles.socialGroup}>
                            <Span className={styles.labelSocial}>
                                Follow me
                            </Span>
                            <Section className={styles.socialList}>
                                <Link className={styles.socialLink} to="#">
                                    <i className="fa-brands fa-square-facebook"></i>
                                </Link>
                                <Link className={styles.socialLink} to="#">
                                    <i className="fa-brands fa-square-google-plus"></i>
                                </Link>
                                <Link className={styles.socialLink} to="#">
                                    <i className="fa-brands fa-square-threads"></i>
                                </Link>
                                <Link className={styles.socialLink} to="#">
                                    <i className="fa-brands fa-square-twitter"></i>
                                </Link>
                            </Section>
                        </Div>
                    </Div>

                    <Div className={styles.contactWrapperRight}>
                        <Form
                            className={styles.formInner}
                            // onSubmit={handleSubmit}
                        >
                            {/* chưa ok */}
                            <Input
                                className={styles.inputName}
                                // autoFocus
                                // name="name"
                                placeholder="Your name"
                                // value={form.name}
                                // onChange={handleChange}
                                type="text"
                                required
                                spellCheck
                            />
                            {/* chưa ok */}
                            <Input
                                className={styles.inputEmail}
                                // name="email"
                                placeholder="Your email"
                                // value={form.email}
                                // onChange={handleChange}
                                type="email"
                                spellCheck
                                required
                            />

                            {/* đã ok */}
                            <TextArea
                                className={styles.InputTextArea}
                                // value={form.body}
                                // name="body"
                                // onChange={handleChange}
                            />

                            <Button className={styles.btn} type="submit">
                                Send Comment
                            </Button>
                        </Form>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default Contact;
