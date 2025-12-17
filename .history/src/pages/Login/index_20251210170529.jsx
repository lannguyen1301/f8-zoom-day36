import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Login.module.scss";
// import { login } from "@component/login";

// componetn ui
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

import "@styles/main.scss";

function Login() {
    return (
        <>
            <Section className="container">
                <Div className={styles.loginContainer}>
                    <Div className={styles.card}>
                        <Div className={styles.cardImage}>
                            <SubTitle className={styles.cardHeading}>
                                Get started
                                <small>Let us create your account</small>
                            </SubTitle>
                        </Div>
                        <Form className={styles.cardForm}>
                            <Div className={styles.input}>
                                <Input
                                    type="text"
                                    className={styles.inputField}
                                    value="Alexander Parkinson"
                                    required
                                />
                                <Label className={styles.inputLabel}>
                                    Full name
                                </Label>
                            </Div>
                            <Div className={styles.input}>
                                <Input
                                    type="text"
                                    className={styles.inputField}
                                    value="vlockn@gmail.com"
                                    required
                                />
                                <Label className={styles.inputLabel}>
                                    Email
                                </Label>
                            </Div>
                            <Div className={styles.input}>
                                <Input
                                    type="password"
                                    className={styles.inputField}
                                    required
                                />
                                <Label className={styles.inputLabel}>
                                    Password
                                </Label>
                            </Div>
                            <Div className={styles.action}>
                                <Button className={styles.actionButton}>
                                    Get started
                                </Button>
                            </Div>
                        </Form>
                        <Div className={styles.cardInfo}>
                            <Para>
                                By signing up you are agreeing to our{" "}
                                <Link to="#">Terms and Conditions</Link>
                            </Para>
                        </Div>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default Login;
