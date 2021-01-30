import "./App.css";

// Component imports
import { Navbar } from "./components/exports";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import { Home, TV, Movies, Hubs } from "./pages/exports";

// App Component
function App() {
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
