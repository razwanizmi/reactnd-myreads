import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: [],
    loading: true
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books, loading: false }));
  }

  render() {
    const { books, loading } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Main books={books} loading={loading} />}
        />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
