import React, { Component } from "react";
import ShelfSelection from "./ShelfSelection";

export default class BooksSlectedAfterShelf extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {(typeof this.props.shelf !== "undefined" &&
            this.props.books
              .filter(bookf => bookf.shelf === this.props.shelf)
              .map(book => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={
                          (book.hasOwnProperty("imageLinks") === true && {
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                          }) || {
                            width: 128,
                            height: 193,
                            backgroundColor: "black"
                          }
                        }
                      />
                      <ShelfSelection
                        selectedBook={book}
                        onChangeShelf={this.props.onChangeShelf}
                      />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))) ||
            this.props.books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={
                        (book.hasOwnProperty("imageLinks") === true && {
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${book.imageLinks.thumbnail})`
                        }) || {
                          width: 128,
                          height: 193,
                          backgroundColor: "black"
                        }
                      }
                    />
                    <ShelfSelection
                      selectedBook={book}
                      onChangeShelf={this.props.onChangeShelf}
                    />
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

