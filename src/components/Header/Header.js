import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import "./Header.css";
import { leftGradient } from "./../RandomColoring";

const base_url = "https://image.tmdb.org/t/p/original";

function Header({ fetchUrl }) {
   const [show, setShow] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const { data } = await axios.get(fetchUrl);
         setShow(data.results[Math.floor(Math.random() * data.results.length)]);
      }
      fetchData();
   }, []);

   return (
      <header
         className="header"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url(${base_url}${show?.backdrop_path})`,
         }}
      >
         <div className="header__content">
            <h1>{show?.name || show?.original_title}</h1>
            <p>{show.overview}</p>
            <div className="header__buttons">
               <button className="btn btn-filled">
                  <i className="fas fa-play"></i> PLAY
               </button>
               <button className="btn btn-outline">DETAILS</button>
            </div>
         </div>
         <div
            className="header__gradient"
            style={{
               background:
                  leftGradient[Math.floor(Math.random() * leftGradient.length)],
            }}
         ></div>
      </header>
   );
}

export default Header;
