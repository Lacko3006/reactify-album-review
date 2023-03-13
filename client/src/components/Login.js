import React, { useState } from "react";
import "../index.css";


export default function Login() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const usernameChange = e => {
    setUsername(e.target.value)
  }

  const emailChange = e => {
    setEmail(e.target.value)
  }

  const passwordChange = e => {
    setPassword(e.target.value)
  }

  return (
    <section className="wrapper">
      <div className="form signup">
        <header>Signup</header>
        <form action="#">
          <input id="name-signup" type="text" placeholder="username" value={username} onChange={usernameChange} />
          <input id="email-signup" type="email" placeholder="email" value={email} onChange={emailChange} />
          <input id="password-signup" type="password" placeholder="password" value={password} onChange={passwordChange} />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
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