import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import Loading from "./Loading";

const Bookshelf = ({ name, books, loading }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        {loading && <Loading />}
        <ol className="books-grid">
          {books.map(book => <Book key={book.id} book={book} />)}
        </ol>
      </div>
    </div>
  );
};
Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Bookshelf;
