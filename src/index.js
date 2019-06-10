import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch,Redirect } from "react-router-dom";

// core components
import Admin from "./layouts/Admin.jsx";
import Parent from "./layouts/Parent.jsx";
import Teacher from "./layouts/Teacher.jsx";

import "./assets/css/material-dashboard-react.css?v=1.2.0";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import LandingPage from "./views/LandingPage/LandingPage"
import AppsListing from "./views/AppsListing/AppsListing.js";
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/teacher" component={Teacher}/>
      <Route path="/parent" component={Parent}/>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
