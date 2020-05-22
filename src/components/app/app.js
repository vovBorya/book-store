import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CartPage, HomePage} from "../pages";
import Header from "../header";

const App = () => {

  return (
    <Router>
      <Header numItems={4} total={150} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart/" exact component={CartPage} />
      </Switch>
    </Router>
  )
}

export default App