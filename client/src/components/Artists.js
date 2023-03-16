import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ARTISTS } from "../apollo/queries";
import "../index.css";

export default function Artists() {
    const { loading, data: albumData } = useQuery(GET_ARTISTS);

    return (
        <section className="album">
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <>
                    <h1 className="text-light">Artists</h1>

                    <div className="album-details row g-2">
                        {albumData.getArtists.map(it => {
                          return (
                              <div className="col-12 col-sm-6 col-md-4">
                                <div className="bg-light text-dark p-2 rounded">
                                  <div>Name: {it.name}</div>
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