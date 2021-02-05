import React from "react";

import { Row, RowLong, RowGenre } from "./../components/exports";
import requests from "./../requests";

function Movies() {
     const generes = [
          { name: "action", key: 1 },
          { name: "Adult Animation", key: 2 },
          { name: "Adventure", key: 3 },
          { name: "Animals & Nature", key: 4 },
          { name: "Anime", key: 5 },
          { name: "Comedy", key: 6 },
          { name: "Cooking", key: 7 },
          { name: "Crime", key: 8 },
     ];

     return (
          <div className="container">
               <RowGenre header="Genres" generes={generes} />
               <Row
                    isLarge
                    header="POPULAR"
                    fetchUrl={requests.fetchTrending}
               />
               <Row header="action" fetchUrl={requests.fetchActionMovies} />
               <Row
                    header="Adult animation"
                    fetchUrl={requests.fetchTrending}
               />
               <RowLong
                    header="Most liked"
                    fetchUrl={requests.fetchHuluOriginals}
               />
               <Row
                    isLarge
                    header="Featured"
                    fetchUrl={requests.fetchTopRated}
               />
          </div>
     );
}

export default Movies;
