import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { render } from "react-dom";

import "assets/scss/style.scss";

import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
