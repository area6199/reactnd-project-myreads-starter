import React from "react";
import "./App.css";
import "./BooksAPI.js";
import * as BooksAPI from "./BooksAPI.js";
import { Route } from "react-router-dom";
import Shelf from "./Shelf";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  // get books in library
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }
  // method to change the shelf of a book
  changeShelf = (bookID, shelfToMove) => {
    BooksAPI.update(bookID, shelfToMove).then(books => {
      BooksAPI.getAll().then(books => {
        this.setState({
          books
        });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Shelf books={this.state.books} onChangeShelf={this.changeShelf} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <div>
              <SearchPage onChangeShelf={this.changeShelf} />{" "}
            </div>
          )}
        />{" "}
      </div>
    );
  }
}

export default BooksApp;
