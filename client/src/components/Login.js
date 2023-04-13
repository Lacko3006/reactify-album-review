import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN } from "../apollo/queries";
import "../index.css";
import auth from '../authentication/auth'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [login] = useLazyQuery(LOGIN);

  const usernameChange = e => {
    setUsername(e.target.value)
  }

  const passwordChange = e => {
    setPassword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      variables: {
        username, password
      }
    }).then(it => {
      if (it.error) {
        setError('Login details wrong')
      } else {
        auth.login(it.data.login.token)
      }
    })
  }

  return (
    <section className="wrapper">
      <div className="form signup">
        <header>Login</header>
        <form onSubmit={onSubmit}>
          <input id="name-signup" type="text" placeholder="Enter Username" value={username} onChange={usernameChange} />
          <input id="password-signup" type="password" placeholder="Enter Password" value={password} onChange={passwordChange} />
          <input className="login-form" type="submit" value="Login" />
          {error ? <p>{error}</p> : ''}
        </form>
      </div>
    </section>
  )
}