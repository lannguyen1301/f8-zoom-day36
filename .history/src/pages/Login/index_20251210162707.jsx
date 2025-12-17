import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Login.module.scss";
// import { login } from "@component/login";

// componetn ui
import Div from "@ui/Div";
import Button from "@ui/Button";
import SubTitle from "@ui/SubTitle";
import Input from "@ui/Input";
import Span from "@ui/Span";
import Form from "@ui/Form";
import Para from "@ui/Para";
import Title from "@ui/Title";

import "@styles/main.scss";

function Login() {
    return (
        <>
            <Div className={styles.container} id="container">
                <Div className={clsx(styles.formContainer, styles.signUpContainer)}>
                    <Form action="#">
                        <Title>Login</Title>
                        <Para>Welcome back to the pet shop!</Para>
                        <Div className={styles.}socialContainer">
                            <Link to="/" className={styles.}social">
                                <i className={styles.fab fa-facebook-f}></i>
                            </Link>
                            <Link href="#" className={styles.}social">
                                <i className={styles.}fab fa-google-plus-g"></i>
                            </Link>
                            <Link href="#" className={styles.}social">
                                <i className={styles.}fab fa-linkedin-in"></i>
                            </Link>
                        </Div>
                        <Span>or use your email for registration</Span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Button>Sign Up</Button>
                    </Form>
                </Div>

                {/* <Div className={styles.}formContainer sign-in-container">
                    <Form action="#">
                        <Title>Sign in</Title>
                        <Div className={styles.}socialContainer">
                            <Link href="#" className={styles.}social">
                                <i className={styles.}fab fa-facebook-f"></i>
                            </Link>
                            <Link href="#" className={styles.}social">
                                <i className={styles.}fab fa-google-plus-g"></i>
                            </Link>
                            <Link href="#" className={styles.}social">
                                <i className={styles.}fab fa-linkedin-in"></i>
                            </Link>
                        </Div>
                        <Span>or use your account</Span>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Link href="#">Forgot your password?</Link>
                        <Button>Sign In</Button>
                    </Form>
                </Div> */}

                <Div className={styles.}overlayContainer">
                    <Div className={styles.}overlay">
                        {/* <Div className={styles.}overlayPanel overlayLeft">
                            <Title>Welcome Back!</Title>
                            <Para>
                                To keep connected with us please login with your
                                personal info
                            </Para>
                            <Button className={styles.}ghost" id="signIn">
                                Sign In
                            </Button>
                        </Div> */}
                        <Div className={styles.}overlayPanel overlayRight">
                            <Title>Hello, Friend!</Title>
                            <Para>
                                Enter your personal details and start journey
                                with us
                            </Para>
                            <Button className={styles.}ghost" id="signUp">
                                Sign Up
                            </Button>
                        </Div>
                    </Div>
                </Div>
            </Div>

            {/* <footer>
                <Para>
                    Created with <i className={styles.}fa fa-heart"></i> by
                    <Link target="_blank" href="https://florin-pop.com">
                        Florin Pop
                    </Link>
                    - Read how I created this and how you can join the challenge
                    <Link
                        target="_blank"
                        href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
                    >
                        here
                    </Link>
                    .
                </Para>
            </footer> */}
        </>
    );
}
export default Login;
