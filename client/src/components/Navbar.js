import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="main-container">
      <div className="topbar">
        <div className="prev-next-button">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
        </div>

        <div className="topnav">
          <ul>
            <li>
              <Link to="/login">Sign Up</Link>
            </li>

            <li className="divider">|</li>
          </ul>
          <button type="button">
          <Link to="/login">Log In</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
