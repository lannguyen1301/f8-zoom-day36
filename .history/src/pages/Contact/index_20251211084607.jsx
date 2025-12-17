// import { Link } from "react-router-dom";
import { Link } from "react-router";
// useNavigate: Ý nghĩa: hook để điều hướng trong React Router. Nhiệm vụ: thay đổi URL và đưa người dùng đến route khác. Chức năng: hỗ trợ điều hướng tuyệt đối, tương đối, thay thế history, và điều hướng có điều kiện.
// useParams: Ý nghĩa: hook để truy xuất tham số động từ URL. Nhiệm vụ: cung cấp dữ liệu từ URL cho component. Chức năng: giúp bạn hiển thị nội dung hoặc gọi API dựa trên tham số trong route (ví dụ id, slug, category).
import { useState, useEffect } from "react";

// Styles Module
import styles from "./Contact.module.scss";

// Styles Global
import "@styles/main.scss";

// ui
import Div from "@ui/Div";
import Title from "@ui/Title";
import Form from "@ui/Form";
import Input from "@ui/Input";
import Button from "@ui/Button";
import Span from "@ui/Span";
import TextArea from "@ui/TextArea";
import Section from "@ui/Section";
import Para from "@ui/Para";
import Label from "@ui/Label";

function Contact() {
    const initialForm = {
        name: "",
        email: "",
        body: "",
    };

    const [form, setForm] = useState(initialForm);

    // event handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // event handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.body) return;

        console.log("Contact message:", form);
        setForm(initialForm);
    };
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
                            onSubmit={handleSubmit}
                        >
                            {/* chưa ok */}
                            <Label
                                htmlFor="name"
                                className={styles.labelInputName}
                            >
                                Your name:
                            </Label>
                            <Input
                                className={styles.inputName}
                                autoFocus
                                id="name"
                                name="name"
                                placeholder="Your name"
                                value={form.name}
                                onChange={handleChange}
                                type="text"
                                required
                                spellCheck
                            />
                            {/* chưa ok */}
                            <Label
                                htmlFor="email"
                                className={styles.labelInputEmail}
                            >
                                Your email:
                            </Label>
                            <Input
                                id="email"
                                className={styles.inputEmail}
                                name="email"
                                placeholder="Your email"
                                value={form.email}
                                onChange={handleChange}
                                type="email"
                                spellCheck
                                required
                            />

                            {/* đã ok */}
                            <Label
                                htmlFor="Message"
                                className={styles.labelTextAreaMessage}
                            >
                                Message:
                            </Label>
                            <TextArea
                                id="Message"
                                className={styles.InputTextArea}
                                value={form.body}
                                name="body"
                                onChange={handleChange}
                                required
                            />

                            <Button className={styles.btn} type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Div>
                </Div>

                <Para>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim, perferendis distinctio molestiae ad, nam non delectus
                    ducimus fuga doloremque nostrum laborum, exercitationem quos
                    in aperiam optio autem eius nihil iure ut sed aut sit?
                    Inventore non cupiditate molestias modi a? Ipsam hic at sit?
                    Hic ab error eos accusantium voluptas, nihil nulla
                    voluptatibus. Qui eius obcaecati velit, optio vero quaerat
                    tenetur maiores quidem, quasi enim fugit unde consequatur
                    natus nobis voluptatibus in a voluptates, quo blanditiis
                    placeat. Laudantium excepturi a, nulla odit, asperiores
                    quas, quod maiores voluptates nemo consectetur similique
                    animi porro ea nesciunt eaque. Expedita, excepturi sunt
                    accusamus reprehenderit architecto, illo sapiente
                    recusandae, optio aspernatur et totam id molestias deserunt
                    deleniti! Tempora quo atque incidunt error. Autem esse rerum
                    harum libero, fugit rem, itaque facere, beatae maiores quo
                    ullam minus? Eius nisi expedita illo optio minus,
                    consectetur ullam nobis, facere commodi culpa aliquam earum
                    rerum error veritatis accusamus sint tenetur consequatur est
                    laboriosam voluptate nihil! Inventore magnam cupiditate
                    consectetur facilis, alias voluptatum voluptas expedita
                    deserunt dicta id temporibus necessitatibus rem suscipit,
                    minima labore. Deserunt aspernatur laudantium nulla sint!
                    Aliquam est debitis iusto ex quidem tempore ratione earum,
                    rerum autem, minus, nesciunt ea nisi amet tenetur placeat
                    qui nihil. Minima!
                </Para>
            </Section>
        </>
    );
}
export default Contact;
