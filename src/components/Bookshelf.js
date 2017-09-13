import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ name, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => <Book key={book.id} book={book} />)}
        </ol>
      </div>
    </div>
  );
};
Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default Bookshelf;
