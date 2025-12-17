function Register() {
    return (
        <>
            <div class="container">

    <!-- Bên trái: Form đăng nhập -->
    <div class="login-side">
      <div class="logo">
        <i class="fas fa-compass"></i>
        Navis
      </div>

      <h2>Sign in to Navis</h2>

      <div class="social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-google"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>

      <div class="or">or use your email account:</div>

      <form>
        <div class="input-group">
          <i class="fas fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </div>

        <div class="input-group">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>

        <div class="forgot">
          <a href="#">Forgot your password?</a>
        </div>

        <button type="submit" class="btn-login">SIGN IN</button>
      </form>
    </div>

    <!-- Bên phải: Hello Friend + Nút Sign Up -->
    <div class="welcome-side">
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details<br>and start journey with us</p>
      <button class="btn-signup">SIGN UP</button>
    </div>

  </div>
        </>
    );
}
export default Register;
