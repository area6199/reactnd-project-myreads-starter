import React from "react";
import "./App.css";
import "./BooksAPI.js";
import * as BooksAPI from "./BooksAPI.js";
import { Route } from "react-router-dom";
import Shelf from "./Shelf";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    booksShelfed:[]
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    })
  }
  changeShelf = (bookID, shelfToMove) => {    
      BooksAPI.update(bookID, shelfToMove).then(books => {
        BooksAPI.getAll().then(books => {
          this.setState({
            books
          })
        })
      })
    
  }



  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Shelf books={this.state.books} 
          onChangeShelf = {this.changeShelf}/>}
        />

        <Route
          path="/search"
          render={() => (
            <div>
              <SearchPage />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
