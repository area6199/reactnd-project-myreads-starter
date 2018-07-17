import React, { Component } from "react";
import BooksSlectedAfterShelf from "./BooksSlectedAfterShelf";
import * as BooksAPI from "./BooksAPI.js";
import { Link } from "react-router-dom";

export default class SearchPage extends Component {
  state = {
    books: [],
    query: ""
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  //   clearQuery = () => {
  //     this.setState({ query: "" });
  //   };

  //   findBook(input) {
  //     if(e.keyCode === 13){
  //         e.preventDefault()
  //     BooksAPI.search(input).then(books => {
  //       this.setState({
  //         books
  //       })
  //     })
  // }
  //   }

  render() {
    const { query } = this.state;

    let searchResult;
    if (query) {
      BooksAPI.search(query).then(books => {
        this.setState({
          books
        });
      });
    }

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <a className="close-search">Close</a>
            </Link>

            <div className="search-books-input-wrapper">
              {/*
      NOTES: The search from BooksAPI is limited to a particular set of search terms.
      You can find these search terms here:
      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
      you don't find a specific author or title. Every search is limited by search terms.
    */}

              {/* get input string from form */}
              <input
                // className="search-contacts"
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
      

              {this.state.books.length >0 && (
                <BooksSlectedAfterShelf books={this.state.books} />
              ) || (<p> no search results </p>)}
              
           
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
