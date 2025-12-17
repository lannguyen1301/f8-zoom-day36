import clsx from "clsx";
import styles from "./Login.module.scss";
// import { login } from "@component/login";

// componetn ui
import Div from "@ui/Div";
import Button from "@ui/Button";
import SubTitle from "@ui/SubTitle";

function Login() {
    return (
        <>
            <Div class="formStructor">
                <Div class="signup">
                    <SubTitle class="formTitle" id="signup">
                        <span>or</span>Sign up
                    </SubTitle>
                    <div class="formHolder">
                        <input type="text" class="input" placeholder="Name" />
                        <input type="email" class="input" placeholder="Email" />
                        <input
                            type="password"
                            class="input"
                            placeholder="Password"
                        />
                    </div>
                    <button class="submitBtn">Sign up</button>
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
