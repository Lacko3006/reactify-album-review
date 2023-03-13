import React from "react";
import "../index.css";

export default function Albums() {
  return (
    <section className="album">
      <h1>Albums</h1>
      {/* {{#each dbAlbumData as |album|}} */}
      <div className="album-details">
        <ol>
          <li>
            <span>
              {/* <a href="/album/{{album.id}}"></a><a href="/album/{{album.id}}">{{album.album}}</a> */}
              {/* <p>By: {{album.artist_name}}</p> */}
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
