import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import auth from "../authentication/auth";

export default function Navbar() {
  return (
    <div className="main-container">
      <div className="topbar">
        <div className="prev-next-button">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
        </div>

        <div className="topnav">
          {!auth.loggedIn() ? (
            <>
              <ul>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>

                <li className="divider">|</li>
              </ul>
              <button type="button">
                <Link to="/login">Log In</Link>
              </button>
            </>
          ) : (
            <>
              <p>Hi {auth.getProfile().data.username}</p>
              <button type="button" onClick={auth.logout}>Log Out</button>
            </>
          )
          }
        </div>
      </div>
    </div>
  );
}
