import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../components/Main";
import Login from "../components/Formulary";
import Register from "../components/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
