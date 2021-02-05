import React from "react";
import "./App.css";

// Component imports
import { Navbar } from "./components/exports.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import { Home, TV, Movies, Hubs } from "./pages/exports";
// const env = require("dotenv").config();

// App Component
function App() {
     console.log(process.env.REACT_APP_API_KEY);
     return (
          <div className="App">
               <Router>
                    <Navbar />
                    <Switch>
                         <Route exact path="/" component={Home} />
                         <Route exact path="/tv" component={TV} />
                         <Route exact path="/movies" component={Movies} />
                         <Route exact path="/hubs" component={Hubs} />
                    </Switch>
               </Router>
          </div>
     );
}

export default App;
