import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import "./App.css";

const BooksApp = () => (
  <div className="app">
    <Route exact path="/" component={Main} />
    <Route path="/search" component={Search} />
  </div>
);

export default BooksApp;
