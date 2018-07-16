import React, { Component } from "react"
import ShelfSelection from "./ShelfSelection"


export default class BooksSlectedAfterShelf extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books
            .filter(bookf => bookf.shelf === this.props.shelf)
            .map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks.smallThumbnail
                        })`
                      }}
                    />
                    <ShelfSelection />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}
