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
   const [isLoading, setIsLoading] = useState(false);
   const [rowId, setRowId] = useState(0);
   const randomRowId = Math.floor(Math.random() * 100);
   let gradientNumber = 0;

   useEffect(() => {
      async function fetchData() {
         const { data } = await axios.get(fetchUrl);
         setShows(data.results);
         setIsLoading(true);
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <>
         {isLoading && (
            <div className={`row`} key={rowId}>
               <h2 className="row__header">{header}</h2>
               <div className={`posters row_id_${randomRowId}`}>
                  <button
                     className="button__left"
                     onClick={() => {
                        document.querySelector(
                           `.row_id_${randomRowId}`
                        ).scrollLeft -= 1000;
                     }}
                  >
                     <i className="fas fa-arrow-left"></i>
                  </button>
                  {shows.map((show) => (
                     <>
                        <div
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
                                       background:
                                          posterGradient[gradientNumber],
                                    }}
                                 ></div>
                                 <div
                                    className="poster__content"
                                    style={{
                                       background:
                                          contentBackground[gradientNumber],
                                    }}
                                 >
                                    <p>Start Watching</p>
                                    <h2>
                                       {show?.name || show?.original_title}
                                    </h2>
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
                  <button
                     className="button__right"
                     onClick={() => {
                        document.querySelector(
                           `.row_id_${randomRowId}`
                        ).scrollLeft += 1000;
                     }}
                  >
                     <i className="fas fa-arrow-right"></i>
                  </button>
               </div>
            </div>
         )}
      </>
   );
}

export default Row;
