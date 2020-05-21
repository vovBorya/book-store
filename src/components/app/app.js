import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CartPage, HomePage} from "../pages";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart/" exact component={CartPage} />
      </Switch>
    </Router>
  )
}

export default App