import React from "react";

import { Row, Header, RowLong } from "./../components/exports";
import requests from "./../requests";

function Home() {
   return (
      <div>
         <Header fetchUrl={requests.fetchHuluOriginals} />
         <div className="container">
            <Row
               isLarge
               header="HULU ORIGINALS"
               fetchUrl={requests.fetchHuluOriginals}
            />
            <Row
               header="MOVIES FOR YOU"
               fetchUrl={requests.fetchComedyMovies}
            />
            <Row
               isLarge
               header="FX ON HULU"
               fetchUrl={requests.fetchHorrorMovies}
            />
            <RowLong fetchUrl={requests.fetchActionMovies} />
         </div>
      </div>
   );
}

export default Home;
