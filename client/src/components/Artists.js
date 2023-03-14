import React from "react";
import "../index.css";

export default function Artisits() {
  return (<section className="artists">
  <div className="artist-name">
    <h1>Artist</h1>
    <ol>
      {/* {{#each dbArtistData as |artist|}} */}
      <li><span>
     <a href="/artist/{{artist.id}}"> </a> 
      </span></li>
      {/* {{/each}} */}
    </ol>
    
</div>
</section>
  );
}