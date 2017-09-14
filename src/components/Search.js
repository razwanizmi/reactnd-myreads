import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";

class Search extends Component {
  state = {
    term: "",
    books: []
  };

  handleChange = event => {
    const term = event.target.value;

    this.setState({ term });
    this.searchTerm(term);
  };

  searchTerm = term => {
    if (term === "") {
      this.setState({ books: [] });
    }

    if (term !== "") {
      BooksAPI.search(term).then(books => {
        if (Array.isArray(books)) {
          return this.setState({ books });
        }
        this.setState({ books: [] });
      });
    }
  };

  render() {
    const { term, books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={term}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => <Book key={book.id} book={book} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
