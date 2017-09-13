import React from "react";
import PropTypes from "prop-types";
import shelfNames from "../utils/shelfNames";

const Book = ({ book }) => {
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
              {Object.keys(shelfNames).map(keyName => (
                <option key={keyName} value={keyName}>
                  {shelfNames[keyName]}
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
  book: PropTypes.object.isRequired
};

export default Book;
