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
import Section from "@ui/Section";
import Para from "@ui/Para";
import Logo from "@ui/Logo";

import "@styles/main.scss";
function Register() {
    return (
        <>
            <Div class="container">

    {/* <!-- Bên trái: Form đăng nhập --> */}
    <Div class="login-side">
      <Div class="logo">
        <i class="fas fa-compass"></i>
        Navis
      </Div>

      <SubTitle>Sign in to Navis</SubTitle>

      <Div class="social">
        <Link to="#"><i class="fab fa-facebook-f"></i></Link>
        <Link to="#"><i class="fab fa-google"></i></Link>
        <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
      </Div>

      <Div class="or">or use your email account:</Div>

      <form>
        <Div class="input-group">
          <i class="fas fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </Div>

        <Div class="input-group">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </Div>

        <Div class="forgot">
          <a href="#">Forgot your password?</a>
        </Div>

        <button type="submit" class="btn-login">SIGN IN</button>
      </form>
    </Div>

    {/* <!-- Bên phải: Hello Friend + Nút Sign Up --> */}
    <Div class="welcome-side">
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details<br>and start journey with us</p>
      <button class="btn-signup">SIGN UP</button>
    </Div>

  </Div>
        </>
    );
}
export default Register;
