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
import Label from "@ui/Label";
import Para from "@ui/Para";

import "@styles/main.scss";

function Login() {
    return (
        <>
            <Section className="container">
                <Div class="container">
                    {/* <!-- Left Side --> */}
                    <Div class="left">
                        <Div class="logo">
                            <i class="fas fa-compass"></i> Navis
                        </Div>
                        <Div class="welcome">
                            <Title>Welcome Back!</Title>
                            <Para>
                                To keep connected with us please login with your
                                personal info
                            </Para>
                            <Button class="btn-signin">SIGN IN</Button>
                        </Div>
                    </Div>

                    {/* <!-- Right Side --> */}
                    <Div class="right">
                        <SubTitle>Create Account</SubTitle>

                        <Div class="social-buttons">
                            <Div class="social-btn">
                                <i class="fab fa-facebook-f"></i>
                            </Div>
                            <Div class="social-btn">
                                <i class="fab fa-google"></i>
                            </Div>
                            <Div class="social-btn">
                                <i class="fab fa-linkedin-in"></i>
                            </Div>
                        </div>

                        <Div class="divider">
                            <span>or use your email for registration:</span>
                        </Div>

                        <form>
                            <Div class="form-group">
                                <Div class="input-wrapper">
                                    <i class="fas fa-user"></i>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                    />
                                </Div>
                            </div>

                            <Div class="form-group">
                                <Div class="input-wrapper">
                                    <i class="fas fa-envelope"></i>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </Div>
                            </div>

                            <Div class="form-group">
                                <Div class="input-wrapper">
                                    <i class="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </Div>
                            </div>

                            <button type="submit" class="btn-signup">
                                SIGN UP
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}
export default Login;
