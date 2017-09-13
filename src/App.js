import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Main books={this.state.books} />}
        />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
