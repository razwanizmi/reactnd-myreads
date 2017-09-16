import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";
import shelfNames from "../utils/shelfNames";

const Main = ({ books, loading, updateBook }) => (
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
            updateBook={updateBook}
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);
Main.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Main;
