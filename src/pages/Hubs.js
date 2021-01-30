import React from "react";

import { Row, RowHalf } from "./../components/exports";
import requests from "./../requests";

function Hubs() {
   return (
      <div className="container">
         <RowHalf
            header="streaming only on hulu"
            fetchUrl={requests.fetchHuluOriginals}
         />
         <Row header="popular" fetchUrl={requests.fetchTrending} />
         <Row isLarge header="Comedy" fetchUrl={requests.fetchComedyMovies} />
         <Row header="popular" fetchUrl={requests.fetchHorrorMovies} />
      </div>
   );
}

export default Hubs;
