import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import "assets/scss/style.scss";

import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/detail-page" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
