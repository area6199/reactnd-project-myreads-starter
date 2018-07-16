import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Shelf extends Component {
  render() {
    return (
      <div>
        <h1>Shelf</h1>
        <Link
        to='/search'
        className="search"
        >
        Search
        </Link>
      </div>
    )
  }
}
export default Shelf
