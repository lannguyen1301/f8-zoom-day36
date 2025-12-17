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

function Login() {
    return (
        <>
            <Div class="container" id="container">
                <Div class="form-container sign-up-container">
                    <Form action="#">
                        <h1>Login</h1>
                        <p>Welcome back to the pet shop!</p>
                        <div class="social-container">
                            <a href="#" class="social">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </Form>
                </Div>
                <Div class="form-container sign-in-container">
                    <Form action="#">
                        <Title>Sign in</Title>
                        <Div class="social-container">
                            <Link href="#" class="social">
                                <i class="fab fa-facebook-f"></i>
                            </Link>
                            <Link href="#" class="social">
                                <i class="fab fa-google-plus-g"></i>
                            </Link>
                            <Link href="#" class="social">
                                <i class="fab fa-linkedin-in"></i>
                            </Link>
                        </Div>
                        <Span>or use your account</Span>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Link href="#">Forgot your password?</Link>
                        <Button>Sign In</Button>
                    </Form>
                </Div>
                <Div class="overlay-container">
                    <Div class="overlay">
                        <Div class="overlay-panel overlay-left">
                            <Title>Welcome Back!</Title>
                            <Para>
                                To keep connected with us please login with your
                                personal info
                            </Para>
                            <Button class="ghost" id="signIn">
                                Sign In
                            </Button>
                        </Div>
                        <Div class="overlay-panel overlay-right">
                            <Title>Hello, Friend!</Title>
                            <Para>
                                Enter your personal details and start journey
                                with us
                            </Para>
                            <Button class="ghost" id="signUp">
                                Sign Up
                            </Button>
                        </Div>
                    </Div>
                </Div>
            </Div>

            <footer>
                <Para>
                    Created with <i class="fa fa-heart"></i> by
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
            </footer>
        </>
    );
}
export default Login;
