import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
class Reads extends Component {

  render() {
    return (
      <div >
        <p>Reads</p>
        <Link to="/"> go to Home </Link>
        <Link to="/search"> go to Search </Link>
      </div>
    )
  }
}

export default Reads
