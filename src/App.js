import "./App.css";

// Component imports
import { Row, Header, RowLong, Navbar } from "./components/exports";

// API
import requests from "./requests";

function App() {
   return (
      <div className="App">
         <Navbar />
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

export default App;
