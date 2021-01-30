import React from "react";

function RowGenre({ header, generes }) {
   return (
      <div className="row genre_row">
         <h2 className="row__header">{header}</h2>
         <div className="posters row_id_genre">
            <button
               className="button__left"
               onClick={() => {
                  document.querySelector(`.row_id_genre`).scrollLeft -= 1000;
               }}
            >
               <i className="fas fa-arrow-left"></i>
            </button>

            {generes.map((genre) => (
               <div className="genre" key={genre.key}>
                  <div className="genre__name">
                     <h1>{genre.name}</h1>
                  </div>
               </div>
            ))}

            <button
               className="button__right"
               onClick={() => {
                  document.querySelector(`.row_id_genre`).scrollLeft += 1000;
               }}
            >
               <i className="fas fa-arrow-right"></i>
            </button>
         </div>
      </div>
   );
}

export default RowGenre;
