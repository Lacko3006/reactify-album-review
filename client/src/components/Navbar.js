import React from "react";
import "../index.css";

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
              <a href="/login">Sign Up</a>
            </li>

            <li className="divider">|</li>
          </ul>
          <button type="button">
            <a href="/login">Log In</a>
          </button>
        </div>
      </div>
    </div>
  );
}
