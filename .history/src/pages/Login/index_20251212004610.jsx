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
            <Div className={styles.container}>
                {/* <!-- Bên trái: Form đăng nhập --> */}
                <Div className={styles.loginSide}>
                    <Div className={styles.logo}>
                        <Logo src="./logo/logo.svg" alt="Logo" className={""} />
                        <Para>Pet Care Service</Para>
                    </Div>

                    <SubTitle>Sign in to Pet Care Service</SubTitle>

                    <Div className={styles.social}>
                        <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link to="#">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </Div>

                    <Div className={styles.or}>or use your email account:</Div>

                    <Form>
                        <Div className={styles.InputGroup}>
                            <i className="fas fa-envelope"></i>
                            <Input type="email" placeholder="Email" required />
                        </Div>

                        <Div className={styles.InputGroup}>
                            <i className="fas fa-lock"></i>
                            <Input
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </Div>

                        <Div className={styles.forgot}>
                            <Link to="#">Forgot your password?</Link>
                        </Div>

                        <Button type="submit" className={styles.btnLogin}>
                            SIGN IN
                        </Button>
                    </Form>
                </Div>

                {/* <!-- Bên phải: Hello Friend + Nút Sign Up --> */}
                <Div className={styles.welcomeSide}>
                    <Title>Hello, Friend!</Title>
                    <Para>
                        Enter your personal details
                        <br />
                        and start journey with us
                    </Para>
                    <Button to="/register" className={styles.btnSignup}>
                        SIGN UP
                    </Button>
                </Div>
            </Div>
        </>
    );
}
export default Login;
