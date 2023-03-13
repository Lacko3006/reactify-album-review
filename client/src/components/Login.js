import React from "react";
import "../index.css";


export default function Login() {
  return (
    <section class="wrapper">
      <div className="form signup">
        <header>Signup</header>
        <form action="#">
          <input id="name-signup" type="text" placeholder="Full name" required />
          <input id="email-signup" type="text" placeholder="Email address" required />
          <input id="password-signup" type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label for="signupCheck">I accept all terms & conditions</label>
          </div>
          <input className="signup-form" type="submit" value="Signup" />
        </form>
      </div>

      <div className="form login">
        <header>Login</header>
        <form action="#">
          <input id="email-login" type="text" placeholder="Email address" required />
          <input id="password-login" type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input className="login-form" type="submit" value="Login" />
        </form>
      </div>
    </section>
  )
}