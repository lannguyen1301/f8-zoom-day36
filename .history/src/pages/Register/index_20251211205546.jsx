import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Login.module.scss";

// componetn ui
import Div from "@ui/Div";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import Form from "@ui/Form";
import Input from "@ui/Input";
import Button from "@ui/Button";
import Span from "@ui/Span";
import Section from "@ui/Section";
import Para from "@ui/Para";
import Logo from "@ui/Logo";

import "@styles/main.scss";

function Login() {
    return (
        <>
            <Section className="container">
                <Div className={styles.container}>
                    {/* <!-- Left Side --> */}
                    <Div className={styles.left}>
                        <Div className={styles.logo}>
                            {/* <i className="fas fa-compass"></i> Navis */}
                            <Logo
                                src="./logo/logo.svg"
                                alt="Logo"
                                className={""}
                            />
                            <Para>Pet Care Service</Para>
                        </Div>
                        <Div className={styles.welcome}>
                            <Title className={styles.welcomeTitle}>
                                Welcome Back!
                            </Title>
                            <Para className={styles.welcomeDesc}>
                                To keep connected with us please login with your
                                personal info
                            </Para>
                            <Button className={styles.btnSignup}>
                                SIGN IN
                            </Button>
                        </Div>
                    </Div>

                    {/* <!-- Right Side --> */}
                    <Div className={styles.right}>
                        <SubTitle className={styles.rightTitle}>
                            Create Account
                        </SubTitle>

                        <Div className={styles.socialButtons}>
                            <Div className={styles.socialBtn}>
                                <i
                                    className={clsx(
                                        "fab fa-facebook-f",
                                        styles.socialIcon
                                    )}
                                ></i>
                            </Div>
                            <Div className={styles.socialBtn}>
                                <i
                                    className={clsx(
                                        "fab fa-google",
                                        styles.socialIcon
                                    )}
                                ></i>
                            </Div>
                            <Div className={styles.socialBtn}>
                                <i
                                    className={clsx(
                                        "fab fa-linkedin-in",
                                        styles.socialIcon
                                    )}
                                ></i>
                            </Div>
                        </Div>

                        <Div className={styles.divider}>
                            <Span className={styles.dividerSpan}>
                                or use your email for registration:
                            </Span>
                        </Div>

                        <Form>
                            <Div className={styles.formGroup}>
                                <Div className={styles.inputWrapper}>
                                    <i
                                        className={clsx(
                                            "fas fa-user",
                                            styles.inputWrapperIcon
                                        )}
                                    ></i>
                                    <Input
                                        className={styles.inputWrapperItem}
                                        type="text"
                                        placeholder="Name"
                                        required
                                    />
                                </Div>
                            </Div>

                            <Div className={styles.formGroup}>
                                <Div className={styles.inputWrapper}>
                                    <i
                                        className={clsx(
                                            "fas fa-envelope",
                                            styles.inputWrapperIcon
                                        )}
                                    ></i>
                                    <Input
                                        className={styles.inputWrapperItem}
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </Div>
                            </Div>

                            <Div className={styles.formGroup}>
                                <Div className={styles.inputWrapper}>
                                    <i
                                        className={clsx(
                                            "fas fa-lock",
                                            styles.inputWrapperIcon
                                        )}
                                    ></i>
                                    <Input
                                        className={styles.inputWrapperItem}
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </Div>
                            </Div>

                            <Button type="submit" className={styles.btnSignup}>
                                SIGN UP
                            </Button>
                        </Form>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default Login;
