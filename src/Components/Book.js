import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
import '../App.css'

class Book extends Component {
    
  render() {
    const { book, shelf, onChangeShelf } = this.props;
    console.log(book);
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.previewLink}")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => onChangeShelf(event.target.value)} value={ shelf }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading" >Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ book.authors }</div>
      </div>
    )
  }
}

export default Book
