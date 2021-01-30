import React, { useEffect, useState } from "react";
import axios from "./../../axios";
import { leftGradient } from "./../RandomColoring";

const base_url = "https://image.tmdb.org/t/p/original";

function RowLong({ fetchUrl }) {
   const [show, setShow] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const { data } = await axios.get(fetchUrl);
         setShow(data.results[Math.floor(Math.random() * data.results.length)]);
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <div
         className="row row__long"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url(${base_url}${show?.backdrop_path})`,
         }}
      >
         <div className="row_long_content">
            <h4>WATCH MOVIE</h4>
            <h1>{show?.name || show?.original_title}</h1>
            <p>{show?.overview}</p>
            <div className="row_long_button">
               <button className="btn btn-filled">
                  <i className="fas fa-play"></i> PLAY
               </button>
               <button className="btn btn-outline">DETAILS</button>
            </div>
         </div>
         <div
            className="row_long_gradient"
            style={{
               background:
                  leftGradient[Math.floor(Math.random() * leftGradient.length)],
            }}
         ></div>
      </div>
   );
}

export default RowLong;
