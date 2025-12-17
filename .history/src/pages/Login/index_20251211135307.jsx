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
                <div class="container">
                    {/* <!-- Left Side --> */}
                    <div class="left">
                        <div class="logo">
                            <i class="fas fa-compass"></i> Navis
                        </div>
                        <div class="welcome">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button class="btn-signin">SIGN IN</button>
                        </div>
                    </div>

                    {/* <!-- Right Side --> */}
                    <div class="right">
                        <h2>Create Account</h2>

                        <div class="social-buttons">
                            <div class="social-btn">
                                <i class="fab fa-facebook-f"></i>
                            </div>
                            <div class="social-btn">
                                <i class="fab fa-google"></i>
                            </div>
                            <div class="social-btn">
                                <i class="fab fa-linkedin-in"></i>
                            </div>
                        </div>

                        <div class="divider">
                            <span>or use your email for registration:</span>
                        </div>

                        <form>
                            <div class="form-group">
                                <div class="input-wrapper">
                                    <i class="fas fa-user"></i>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-wrapper">
                                    <i class="fas fa-envelope"></i>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-wrapper">
                                    <i class="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
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
