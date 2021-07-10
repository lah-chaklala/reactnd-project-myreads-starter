import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
import '../App.css'

import { Link } from 'react-router-dom'


class Search extends Component {

  render() {
    return (
      <div>
        <p>Search</p>
        <Link to="/"> go to Home </Link>
        <Link to="/search"> go to Search </Link>
      </div>
    )
  }
}

export default Search
