import "./App.css";

// Component imports
import { Row } from "./components/exports";

// API
import requests from "./requests";

function App() {
   return (
      <div className="App">
         <Row
            isLarge
            header="HULU ORIGINALS"
            fetchUrl={requests.fetchHuluOriginals}
         />
         <Row header="MOVIES FOR YOU" fetchUrl={requests.fetchComedyMovies} />
         <Row
            isLarge
            header="FX ON HULU"
            fetchUrl={requests.fetchComedyMovies}
         />
      </div>
   );
}

export default App;
