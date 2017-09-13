import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, shelves }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select value={book.shelf}>
              <option value="none" disabled>
                Move to...
              </option>
              {Object.keys(shelves).map(shelf => (
                <option key={shelf} value={shelf}>
                  {shelves[shelf]}
                </option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.object.isRequired
};

export default Book;
