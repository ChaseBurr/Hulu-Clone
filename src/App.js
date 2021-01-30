import "./App.css";

import { useState } from "react";

// Component imports
import { Navbar } from "./components/exports";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import { Home, TV } from "./pages/exports";

// App Component
function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/tv" component={TV} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
