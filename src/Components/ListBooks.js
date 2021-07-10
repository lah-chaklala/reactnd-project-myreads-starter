import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
import '../App.css'
// import { Link } from 'react-router-dom'

class ListBooks extends Component {

  render() {
    const { books } = this.props;
    return (
        <ol className="books-grid">
            <p>{books ? books.length : 0}</p>
        </ol>
    )
  }
}

export default ListBooks
