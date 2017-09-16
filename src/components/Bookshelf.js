import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import Loading from "./Loading";

const Bookshelf = ({ name, books, loading, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        {loading && <Loading />}
        {!loading &&
          <ol className="books-grid">
            {books.map(book => (
              <Book key={book.id} book={book} updateBook={updateBook} />
            ))}
          </ol>
        }
      </div>
    </div>
  );
};
Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Bookshelf;
