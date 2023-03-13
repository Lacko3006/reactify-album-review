import React from "react";
import "../index.css";
import logo from "../images/rr-logo.jpg";

export default function Navbar() {
  return (
    <div>
      <div className="sidebarz">
        <div className="logo">
          <marquee behavior="alternate" scrollamount="2">
            <marquee behavior="alternate" scrollamount="2" direction="down">
              <img src={logo} alt="Rhythm-Review-Logo" />
            </marquee>
          </marquee>
        </div>
        <div className="navz">
          <ul>
            <li>
              <a href="/">
                <span className="fa fa-home"></span>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="fa fa-search"></span>
                <span>Search</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="fa fas fa-book"></span>
                <span>Your Libary</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navz">
          <ul>
            <li>
              <a href="/artist">
                <span className="fa fas fa-plus-square"></span>
                <span>Artist</span>
              </a>
            </li>

            <li>
              <a href="/album">
                <span className="fa fas fa-heart"></span>
                <span>Albums</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
