import React from "react";
import "../index.css";

let styles = {
  marginLeft: "196px",
};

export default function Homepage() {
  return (
    <div style={styles}>
      <section id="hero">
        <div className="container">
          <div className="info">
            <h1>Welcome to Rhythm Review</h1>
            <h2>Using Rythym Raters</h2>
            <p>
              Rythym Raters mission is to unlock the potential of human
              creativity by giving millions of creative artists the opportunity to
              live off their art while also allowing their fans the opportunity to enjoy
              and as well as comment. Our users can alphabetically view a plethora of
              artist and albums and peruse to their heart's content. They can
              also opt to use our search button allowing them to view a
              particular search with ease.
            </p>
            <a href="/album">Review today</a>
          </div>
        </div>
      </section>
    </div>
  );
}
