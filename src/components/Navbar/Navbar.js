import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
   const [scroll, setScroll] = useState(false);

   window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
         setScroll(true);
      } else setScroll(false);
   });
   return (
      <nav className={scroll && "navbar__filled"}>
         <img
            className="nav__logo"
            src="https://cdn.worldvectorlogo.com/logos/hulu.svg"
            alt=""
         />
         <ul className="nav__items">
            <li className="nav__item">
               <Link to="/">HOME</Link>
            </li>
            <li className="nav__item">MY STUFF</li>
            <li className="nav__item">
               <Link to="/tv">TV SHOWS</Link>
            </li>
            <li className="nav__item">MOVIES</li>
            <li className="nav__item">HUBS</li>
         </ul>
         <div className="user_items">
            <i className="fas fa-search"></i>
            <i className="fas fa-user"></i>
         </div>
      </nav>
   );
}

export default Navbar;
