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
                <Div class="container">
                    <Div class="card">
                        <Div class="card-image">
                            <SubTitle class="card-heading">
                                Get started
                                <small>Let us create your account</small>
                            </SubTitle>
                        </Div>
                        <Form class="card-form">
                            <Div class="input">
                                <Input
                                    type="text"
                                    class="input-field"
                                    value="Alexander Parkinson"
                                    required
                                />
                                <Label class="input-label">Full name</label>
                            </Div>
                            <Div class="input">
                                <input
                                    type="text"
                                    class="input-field"
                                    value="vlockn@gmail.com"
                                    required
                                />
                                <Label class="input-label">Email</label>
                            </Div>
                            <Div class="input">
                                <input
                                    type="password"
                                    class="input-field"
                                    required
                                />
                                <Label class="input-label">Password</label>
                            </Div>
                            <Div class="action">
                                <button class="action-button">
                                    Get started
                                </button>
                            </Div>
                        </Form>
                        <Div class="card-info">
                            <p>
                                By signing up you are agreeing to our{" "}
                                <a href="#">Terms and Conditions</a>
                            </p>
                        </Div>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default Login;
