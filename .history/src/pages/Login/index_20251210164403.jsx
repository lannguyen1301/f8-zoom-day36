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
import Title from "@ui/Title";
import Section from "@ui/Section";

import "@styles/main.scss";

function Login() {
    return (
        <>
            <Section className="container">
                <Div className={styles.container} id="container">
                    <Div
                        className={clsx(
                            styles.formContainer,
                            styles.signUpContainer
                        )}
                    >
                        <Form action="#">
                            <Title>Login</Title>
                            <Para>Welcome back to the pet shop!</Para>
                            <Div className={styles.socialContainer}>
                                <Link to="/" className={styles.social}>
                                    {/* <i className="fab fa-facebook-f"></i> */}
                                </Link>
                                <Link to="/" className={styles.social}>
                                    {/* <i className="fab fa-google-plus-g"></i> */}
                                </Link>
                                <Link to="/" className={styles.social}>
                                    {/* <i className="fab fa-linkedin-in"></i> */}
                                </Link>
                            </Div>
                            {/* <Span>or use your email for registration</Span> */}
                            {/* <Input type="text" placeholder="Name" /> */}
                            {/* <Input type="email" placeholder="Email" /> */}
                            {/* <Input type="password" placeholder="Password" /> */}
                            {/* <Button>Sign Up</Button> */}
                        </Form>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default Login;
