import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Register.module.scss";

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
function Register() {
    return (
        <>
            <Div className={styles.container}>
                {/* <!-- Bên trái: Form đăng nhập --> */}
                <Div class="loginSide">
                    <Div class="logo">
                        <Logo src="./logo/logo.svg" alt="Logo" className={""} />
                        <Para>Pet Care Service</Para>
                    </Div>

                    <SubTitle>Sign in to Navis</SubTitle>

                    <Div class="social">
                        <Link to="#">
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#">
                            <i class="fab fa-google"></i>
                        </Link>
                        <Link to="#">
                            <i class="fab fa-linkedin-in"></i>
                        </Link>
                    </Div>

                    <Div class="or">or use your email account:</Div>

                    <Form>
                        <Div class="InputGroup">
                            <i class="fas fa-envelope"></i>
                            <Input type="email" placeholder="Email" required />
                        </Div>

                        <Div class="InputGroup">
                            <i class="fas fa-lock"></i>
                            <Input
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </Div>

                        <Div class="forgot">
                            <Link href="#">Forgot your password?</Link>
                        </Div>

                        <Button type="submit" class="btnLogin">
                            SIGN IN
                        </Button>
                    </Form>
                </Div>

                {/* <!-- Bên phải: Hello Friend + Nút Sign Up --> */}
                <Div class="welcomeSide">
                    <Title>Hello, Friend!</Title>
                    <p>
                        Enter your personal details
                        <br />
                        and start journey with us
                    </p>
                    <Button class="btnSignup">SIGN UP</Button>
                </Div>
            </Div>
        </>
    );
}
export default Register;
