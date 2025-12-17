import clsx from "clsx";
import styles from "./Login.module.scss";
// import { login } from "@component/login";

// componetn ui
import Div from "@ui/Div";
import Button from "@ui/Button";
import SubTitle from "@ui/SubTitle";
import Input from "@ui/Input";
import Span from "@ui/Span";

function Login() {
    return (
        <>
            <Div class="formStructor">
                <Div class="signup">
                    <SubTitle class="formTitle" id="signup">
                        <Span>or</Span>Sign up
                    </SubTitle>
                    <Div class="formHolder">
                        <Input type="text" class="input" placeholder="Name" />
                        <Input type="email" class="input" placeholder="Email" />
                        <Input
                            type="password"
                            class="input"
                            placeholder="Password"
                        />
                    </Div>
                    <Button class="submitBtn">Sign up</Button>
                </Div>
                <Div class="login slide-up">
                    <Div class="center">
                        <h2 class="formTitle" id="login">
                            <span>or</span>Log in
                        </h2>
                        <Div class="formHolder">
                            <input
                                type="email"
                                class="input"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                class="input"
                                placeholder="Password"
                            />
                        </Div>
                        <Button class="submitBtn">Log in</Button>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
export default Login;
