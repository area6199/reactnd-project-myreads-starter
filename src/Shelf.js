import React, { Component } from "react"
import { Link } from "react-router-dom"
import ShelfSelection from "./ShelfSelection"
import BooksSlectedAfterShelf from "./BooksSlectedAfterShelf"

class Shelf extends Component {  

  render() {
    const booksInShelf = this.props.books


    return (
      <div>
        <h1>Shelf</h1>

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BooksSlectedAfterShelf
                  books = {booksInShelf}
                  shelf = 'currentlyReading'
                  />
                
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BooksSlectedAfterShelf
                  books = {booksInShelf}
                  shelf = 'wantToRead'
                  />

              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BooksSlectedAfterShelf
                  books = {booksInShelf}
                  shelf = 'read'
                  />

              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </a>
          </div>
        </div>

        <Link to="/search" className="search">
          Search
        </Link>
      </div>
    );
  }
}
export default Shelf;
