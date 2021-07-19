import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
import '../App.css'

class Book extends Component {
    
  render() {
    const { shelf, onChangeShelf, title, authors, urlBackgroundImage } = this.props;
    console.log(shelf, title, authors, urlBackgroundImage)
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 200, height: 200, backgroundImage: `url("${urlBackgroundImage}")` }}></div>
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
        <div className="book-title">{ title }</div>
        <div className="book-authors">{ authors }</div>
      </div>
    )
  }
}

export default Book
