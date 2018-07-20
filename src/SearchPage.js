import React, { Component } from "react";
import BooksSlectedAfterShelf from "./BooksSlectedAfterShelf";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

export default class SearchPage extends Component {
  state = {
    books: [],
    query: ""
  };

  handleChange = event => {
    let booksInShelf = [];
    let searchedBooksShelfed = [];
    let addToShelf = true;

    this.setState({
      query: event.target.value
    });
    if (event.target.value !== "") {
      BooksAPI.search(event.target.value).then(searchedbooks => {
        // checks if a book is already in a shelf and add this property to
        //  the searched books in order to display this property
        if (typeof searchedbooks.error === "undefined") {
          BooksAPI.getAll().then(requestBooks => {
            booksInShelf = requestBooks;

            searchedbooks.forEach(elSearch => {
              booksInShelf.forEach(elShelf => {
                if (elShelf.id === elSearch.id) {
                  elSearch.shelf = elShelf.shelf;
                  searchedBooksShelfed.push(elSearch);
                  addToShelf = false;
                }
              });
              if (addToShelf) {
                searchedBooksShelfed.push(elSearch);
              }
              addToShelf = true;
            });
            this.setState({
              books: searchedBooksShelfed
            });
          });
        }
        searchedBooksShelfed = [];
      });
    } else {
      this.setState({
        books: []
      });
    }
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <a className="close-search"> Close </a>{" "}
            </Link>
            <div className="search-books-input-wrapper">
              {" "}
              {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
              <input
                id="search-books"
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.handleChange}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="search-books-results">
            <ol className="books-grid">
              {" "}
              {(typeof this.state.books !== "undefined" &&
                (this.state.books.length > 0 && (
                  <BooksSlectedAfterShelf
                    books={this.state.books}
                    onChangeShelf={this.props.onChangeShelf}
                  />
                ))) || <p> no search results </p>}
            </ol>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
