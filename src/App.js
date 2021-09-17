import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Eshot from "./pages/Eshot";
import Izban from "./pages/Izban"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Eshot}></Route>
        <Route path="/İzban" exact component={Izban}></Route>
      </Switch>
    </Router>
  );
};

export default App;
