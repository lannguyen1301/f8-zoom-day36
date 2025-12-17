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
                <div class="container">
                    <div class="card">
                        <div class="card-image">
                            <h2 class="card-heading">
                                Get started
                                <small>Let us create your account</small>
                            </h2>
                        </div>
                        <form class="card-form">
                            <div class="input">
                                <input
                                    type="text"
                                    class="input-field"
                                    value="Alexander Parkinson"
                                    required
                                />
                                <label class="input-label">Full name</label>
                            </div>
                            <div class="input">
                                <input
                                    type="text"
                                    class="input-field"
                                    value="vlockn@gmail.com"
                                    required
                                />
                                <label class="input-label">Email</label>
                            </div>
                            <div class="input">
                                <input
                                    type="password"
                                    class="input-field"
                                    required
                                />
                                <label class="input-label">Password</label>
                            </div>
                            <div class="action">
                                <button class="action-button">
                                    Get started
                                </button>
                            </div>
                        </form>
                        <div class="card-info">
                            <p>
                                By signing up you are agreeing to our{" "}
                                <a href="#">Terms and Conditions</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
export default Login;
