import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spa from "./pages/Spa";
// import NoMatch from "./pages/NoMatch";
import './App.css';


// TODO:
//    Setup Routers
//    Build Spa Page
//    Build 404 page
//    <Route component={NoMatch} />

const App = () => (
  <Router>
    <div className="spa">
      <Switch>
        <Route exact path="/" component={Spa}  />
      </Switch>
    </div>
  </Router>
)

export default App;
