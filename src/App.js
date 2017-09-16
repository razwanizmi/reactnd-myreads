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

  updateBook = (book, shelf) => {
    this.setState({ loading: true });

    BooksAPI.update(book, shelf).then(() =>
      this.setState(prevState => {
        const books = prevState.books
          // Change shelf if an existing book is selected
          .map(b => {
            if (b.id === book.id) {
              b.shelf = shelf;
            }
            return b;
          })
          // Remove book if shelf changed to none
          .filter(b => b.shelf !== "none");

        const booksId = books.map(b => b.id);

        // Handler when new book is added (don't add book when shelf is none)
        if (shelf !== "none" && booksId.indexOf(book.id) === -1) {
          book.shelf = shelf;
          return { books: [...books, book], loading: false };
        }

        // Handler when existing book is modified
        return { books, loading: false };
      })
    );
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
          render={() => (
            <Main
              books={books}
              loading={loading}
              updateBook={this.updateBook}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search
              books={books}
              updateBook={this.updateBook}
              history={history}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
