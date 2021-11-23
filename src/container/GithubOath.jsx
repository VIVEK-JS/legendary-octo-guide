import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import HomePage from "../components/HomePage/HomePage";
import Repo from "../components/Repo/Repo";
import Faq from "../components/FAQ/Faq";
import { Switch, Route, Redirect } from "react-router-dom";

const GithubOauth = () => (
  <Switch>
    <Route exact path="/">
      <LoginForm />
    </Route>
    <Route path="/home">
      <HomePage />
    </Route>
    <Route path="/repo/pagenumber/:pnumber">
      <Repo />
    </Route>
    <Route path="/faq">
      <Faq />
    </Route>
    <Route path="/logout">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default GithubOauth;
