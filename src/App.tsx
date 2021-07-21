import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/style.scss";

import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
