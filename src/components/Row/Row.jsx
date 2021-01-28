import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import "./Row.css";

import {
   posterGradient,
   contentBackground,
   buttonBackground,
} from "./../RandomColoring";

// TODO add random colors to each large poster

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ header, isLarge, fetchUrl }) {
   const [shows, setShows] = useState([]);
   let gradientNumber = 0;

   useEffect(() => {
      async function fetchData() {
         const { data } = await axios.get(fetchUrl);
         setShows(data.results);
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <div className="row">
         <h2 className="row__header">{header}</h2>
         <div className="posters">
            {shows.map((show) => (
               <>
                  <div
                     key={shows.id}
                     className={`${isLarge ? "poster__large" : "poster"}`}
                  >
                     <img
                        src={`${base_url}${
                           isLarge ? show.poster_path : show.backdrop_path
                        }`}
                        alt={show.name}
                     />
                     {isLarge && (
                        <>
                           {
                              (gradientNumber = Math.floor(
                                 Math.random() * posterGradient.length
                              ))
                           }
                           <div
                              className="poster__gradient"
                              style={{
                                 background: posterGradient[gradientNumber],
                              }}
                           ></div>
                           <div
                              className="poster__content"
                              style={{
                                 background: contentBackground[gradientNumber],
                              }}
                           >
                              <p>Start Watching</p>
                              <h2>{show?.name || show?.original_title}</h2>
                              <div
                                 className="play__button"
                                 style={{
                                    background:
                                       buttonBackground[gradientNumber],
                                 }}
                              >
                                 <button>
                                    <i className="fas fa-play"></i>
                                 </button>
                                 <h4>PLAY</h4>
                              </div>
                           </div>
                        </>
                     )}
                  </div>
               </>
            ))}
         </div>
      </div>
   );
}

export default Row;
