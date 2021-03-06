import React from "react";
import PropTypes from "prop-types";
import shelfNames from "../utils/shelfNames";

const Book = ({ book, updateBook }) => {
  const noCoverLink = "https://i.imgur.com/vzUcRvF.jpg";

  const handleChange = e => {
    const shelf = e.target.value;

    updateBook(book, shelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks !== undefined
                ? book.imageLinks.thumbnail
                : noCoverLink})`
            }}
          />
          <div className="book-shelf-changer">
            <select value={book.shelf || "none"} onChange={handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              {Object.keys(shelfNames).map(keyName => (
                <option key={keyName} value={keyName}>
                  {shelfNames[keyName]}
                </option>
              ))}
              {book.shelf && book.shelf !== "none" &&
                <option value="none">None</option>
              }
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Book;
