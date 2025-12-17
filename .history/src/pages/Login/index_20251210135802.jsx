import clsx from "clsx";
import styles from "./Login.module.scss";
// import { login } from "@component/login";

function Login() {
    return (
        <>
            <Div class="formStructor">
                <div class="signup">
                    <h2 class="formTitle" id="signup">
                        <span>or</span>Sign up
                    </h2>
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
                </div>
                <div class="login slide-up">
                    <div class="center">
                        <h2 class="formTitle" id="login">
                            <span>or</span>Log in
                        </h2>
                        <div class="formHolder">
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
                        </div>
                        <button class="submitBtn">Log in</button>
                    </div>
                </div>
            </Div>
        </>
    );
}
export default Login;
