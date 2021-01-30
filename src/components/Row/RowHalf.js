import React, { useEffect, useState } from "react";
import axios from "./../../axios";
import { leftGradient } from "./../RandomColoring";

const base_url = "https://image.tmdb.org/t/p/original";

function RowHalf({ header, fetchUrl }) {
   const [show, setShow] = useState([]);
   const [show2, setShow2] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const { data } = await axios.get(fetchUrl);
         setShow(data.results[Math.floor(Math.random() * data.results.length)]);
         setShow2(
            data.results[Math.floor(Math.random() * data.results.length)]
         );
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <>
         <div className="row">
            <h2 className="row__header">{header}</h2>
            <div className="posters">
               <div
                  className="row__half"
                  style={{
                     backgroundSize: "cover",
                     backgroundImage: `url(${base_url}${show.backdrop_path})`,
                  }}
               >
                  <div
                     className="row_half_gradient"
                     style={{
                        background:
                           leftGradient[
                              Math.floor(Math.random() * leftGradient.length)
                           ],
                     }}
                  ></div>
                  <div className="row__half__content">
                     <h1>{show?.name || show?.original_title}</h1>
                     <button className="btn btn-outline">DETAILS</button>
                  </div>
               </div>
               <div
                  className="row__half"
                  style={{
                     backgroundSize: "cover",
                     backgroundImage: `url(${base_url}${show2.backdrop_path})`,
                  }}
               >
                  <div
                     className="row_half_gradient"
                     style={{
                        background:
                           leftGradient[
                              Math.floor(Math.random() * leftGradient.length)
                           ],
                     }}
                  ></div>
                  <div className="row__half__content">
                     <h1>{show2?.name || show2?.original_title}</h1>
                     <button className="btn btn-outline">DETAILS</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default RowHalf;
