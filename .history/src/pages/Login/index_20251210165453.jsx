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
                <Div class="loginContainer">
                    <Div class="card">
                        <Div class="cardImage">
                            <SubTitle class="cardHeading">
                                Get started
                                <small>Let us create your account</small>
                            </SubTitle>
                        </Div>
                        <Form class="cardForm">
                            <Div class="input">
                                <Input
                                    type="text"
                                    class="inputField"
                                    value="Alexander Parkinson"
                                    required
                                />
                                <Label class="inputLabel">Full name</Label>
                            </Div>
                            <Div class="input">
                                <Input
                                    type="text"
                                    class="inputField"
                                    value="vlockn@gmail.com"
                                    required
                                />
                                <Label class="inputLabel">Email</Label>
                            </Div>
                            <Div class="input">
                                <Input
                                    type="password"
                                    class="inputField"
                                    required
                                />
                                <Label class="inputLabel">Password</Label>
                            </Div>
                            <Div class="action">
                                <Button class="actionButton">
                                    Get started
                                </Button>
                            </Div>
                        </Form>
                        <Div class="cardInfo">
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
