import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALBUMS } from "../apollo/queries";
import "../index.css";

export default function Albums() {
    const { loading, data: albumData } = useQuery(GET_ALBUMS);

    return (
        <section className="album">
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <>
                    <h1>Albums</h1>

                    <div className="album-details row g-2">
                        {albumData.getAlbums.map(it => {
                          return (
                              <div className="col-12 col-sm-6 col-md-4">
                                <div className="bg-light text-dark">
                                  <div>{it.name}</div>
                                  <div>{it.genre}</div>
                                  <div>{it.year}</div>
                                  {/* <div>{it.songs}</div> */}
                                </div>
                              </div>                            
                          )
                        })}
                    </div>
                </>
            )}
        </section>
    );
}
