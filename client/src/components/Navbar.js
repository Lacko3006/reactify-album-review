import React from "react";
import "../index.css";
import logo from "../images/rr-logo.jpg";

export default function Navbar() {
  return (
    <div>
      <div class="sidebarz">
        <div class="logo">
          <marquee behavior="alternate" scrollamount="2">
            <marquee behavior="alternate" scrollamount="2" direction="down">
              <img src={logo} alt="Rhythm-Review-Logo" />
            </marquee>
          </marquee>
        </div>
        <div class="navz">
          <ul>
            <li>
              <a href="/">
                <span class="fa fa-home"></span>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="fa fa-search"></span>
                <span>Search</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="fa fas fa-book"></span>
                <span>Your Libary</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="navz">
          <ul>
            <li>
              <a href="/artist">
                <span class="fa fas fa-plus-square"></span>
                <span>Artist</span>
              </a>
            </li>

            <li>
              <a href="/album">
                <span class="fa fas fa-heart"></span>
                <span>Albums</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
