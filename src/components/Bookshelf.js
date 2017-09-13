import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ name, books, shelves }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => <Book key={book.id} book={book} shelves={shelves} />)}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  shelves: PropTypes.object.isRequired
};

export default Bookshelf;
