import React, { Component } from "react";

export default class ShelfSelection extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          id={this.props.selectedBook.id}
          onChange={() =>
            this.props.onChangeShelf(
              this.props.selectedBook,
              document.getElementById(this.props.selectedBook.id).value
            )
          }
        >
          <option value="move" disabled>
            Move to...
          </option>
          {this.props.selectedBook.hasOwnProperty("shelf") === true &&
            ((this.props.selectedBook.shelf === "currentlyReading" && (
              <option value="currentlyReading" selected>
                Currently Reading
              </option>
            )) || <option value="currentlyReading">Currently Reading</option>)}

          {this.props.selectedBook.hasOwnProperty("shelf") === true &&
            ((this.props.selectedBook.shelf === "wantToRead" && (
              <option value="wantToRead" selected>
                Want to Read
              </option>
            )) || <option value="wantToRead">Want to Read</option>)}
          {this.props.selectedBook.hasOwnProperty("shelf") === true &&
            ((this.props.selectedBook.shelf === "read" && (
              <option value="read" selected>
                Read
              </option>
            )) || <option value="read">Read</option>)}

          {this.props.selectedBook.hasOwnProperty("shelf") === true && (
            <option value="none">None</option>
          )}

          {this.props.selectedBook.hasOwnProperty("shelf") === false && [
            <option value="currentlyReading">Currently Reading</option>,
            <option value="wantToRead">Want to Read</option>,
            <option value="read">Read</option>,
            <option value="none" selected>
              None
            </option>
          ]}
        </select>
      </div>
    );
  }
}
