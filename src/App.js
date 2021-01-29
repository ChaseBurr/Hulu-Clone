import "./App.css";

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
               <Route path="/" component={Home} />
               <Route path="/tv" component={TV} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
