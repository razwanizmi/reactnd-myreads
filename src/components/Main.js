import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "../utils/BooksAPI";
import shelfNames from "../utils/shelfNames";

class Main extends Component {
  state = {
    books: [],
    loading: true
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books, loading: false }));
  }

  render() {
    const { books, loading } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object.keys(shelfNames).map(keyName => (
              <Bookshelf
                key={keyName}
                name={shelfNames[keyName]}
                books={books.filter(book => book.shelf === keyName)}
                loading={loading}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Main;