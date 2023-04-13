import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_USER } from "../apollo/mutations";
import "../index.css";
import auth from "../authentication/auth"


export default function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [addUser] = useMutation(ADD_USER);

  const usernameChange = e => {
    setUsername(e.target.value)
  }

  const emailChange = e => {
    setEmail(e.target.value)
  }

  const passwordChange = e => {
    setPassword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addUser({
      variables: {
        username, email, password
      }
    }).then(it => {
      auth.login(it.data.addUser.token)
    }).catch(it => {
      setError(it.message)
    })
  }

  return (
    <section className="wrapper">
      <div className="form signup">
        <header>Signup</header>
        <form onSubmit={onSubmit}>
          <input id="name-signup" type="text" placeholder="Enter Username" value={username} onChange={usernameChange} />
          <input id="email-signup" type="email" placeholder="Enter Email" value={email} onChange={emailChange} />
          <input id="password-signup" type="password" placeholder="Enter Password" value={password} onChange={passwordChange} />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input className="signup-form" type="submit" value="Signup" />
          {error ? <p>{error}</p> : ''}
        </form>
      </div>
    </section>
  )
}