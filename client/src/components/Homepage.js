import React from "react";
import "../index.css";

let styles = {
    marginLeft: "196px",
}

export default function Homepage() {
  return (
    <div  style={styles}>
      <section id="hero">
        <div className="container">
          <div className="info">
            <h1>Welcome to RhythmReview</h1>
            <h2>Using Rythem Raters</h2>
            <p>
              Rythem Raters mission is to unlock the potential of human
              creativity by giving a million creative artists the opportunity to
              live off their art and billions of fans the opportunity to enjoy
              and be comment on the art these artists come up with. We believe
              achieving this mission on our platform is made possible by
              welcoming different forms of fanatical expression, ideas,
              perspectives and voices.
            </p>
            <a href="/album">Review today</a>
          </div>
        </div>
      </section>
    </div>
  );
}
