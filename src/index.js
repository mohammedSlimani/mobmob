import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch,Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './_helpers';


// core components
import Admin from "./layouts/Admin.jsx";

import "./assets/css/material-dashboard-react.css?v=1.2.0";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import LandingPage from "./views/LandingPage/LandingPage"
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/login-page" component={LoginPage} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/" component={LandingPage} />
        <Redirect from="/admin" to="/admin/kids" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
