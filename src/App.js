import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/shop/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
