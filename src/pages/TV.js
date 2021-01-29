import React from "react";

import { Row, Header, RowLong } from "./../components/exports";
import requests from "./../requests";

function TV() {
   return (
      <div>
         <Header fetchUrl={requests.fetchActionMovies} />
      </div>
   );
}

export default TV;
