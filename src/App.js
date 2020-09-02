import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import Main from "./components/Main";
import Pokemon from "./components/Pokemon";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Navigation>
              <Main {...props} />
            </Navigation>
          )}
        />
        <Route
          exact
          path="/pokemon"
          render={(props) => (
            <Navigation>
              <Pokemon {...props} />
            </Navigation>
          )}
        />
      </Switch>
      <ReactQueryDevtools initialIsOpen={false} />
    </Router>
  );
}

export default App;
