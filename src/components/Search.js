import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  };

  state = {
    term: "",
    results: []
  };

  handleChange = event => {
    const term = event.target.value;

    this.setState({ term });
    this.searchTerm(term);
  };

  searchTerm = term => {
    if (term === "") {
      return this.setState({ results: [] });
    }

    BooksAPI.search(term).then(results => {
      // Sometimes the API returns us {error: "empty query", items: Array(0)}
      // Ignoring this and rescuing with empty array instead
      if (Array.isArray(results)) {
        return this.setState({ results });
      }
      this.setState({ results: [] });
    });
  };

  handleUpdate = (book, shelf) => {
    this.props.updateBook(book, shelf);
    this.props.history.push({ pathname: "/" });
  };

  render() {
    const { term, results } = this.state;
    const { books } = this.props;

    const resultsWithShelf = results.map(result => {
      books.forEach(book => {
        if (book.id === result.id) {
          result.shelf = book.shelf;
        }
      });
      return result;
    });

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
            {resultsWithShelf.map(result => (
              <Book key={result.id} book={result} updateBook={this.handleUpdate} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
