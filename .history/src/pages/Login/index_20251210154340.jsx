import clsx from "clsx";
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
                    <form action="#">
                        <h1>Sign in</h1>
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
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
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
                <p>
                    Created with <i class="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">
                        Florin Pop
                    </a>
                    - Read how I created this and how you can join the challenge
                    <a
                        target="_blank"
                        href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
                    >
                        here
                    </a>
                    .
                </p>
            </footer>
        </>
    );
}
export default Login;
