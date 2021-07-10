import React, { Component } from 'react'
import '../App.css'
import ListBooks from './ListBooks';

class Reads extends Component {
    
    
    addBookHandle = () => {
        console.log("add book clicked");
        console.log("go to /search");        
        this.props.history.push('/search');
    }

  render() {
    const wantToRead = this.props.bookshelves.filter((bk) => bk.shelf === "wantToRead");
    const currentlyReading = this.props.bookshelves.filter((bk) => bk.shelf === "currentlyReading");
    const read = this.props.bookshelves.filter((bk) => bk.shelf === "read");

    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ListBooks books={currentlyReading} bookshelves={this.props.bookshelves} onChangeShelf={this.props.onChangeShelf}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
              <ListBooks books={wantToRead} bookshelves={this.props.bookshelves} onChangeShelf={this.props.onChangeShelf}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
              <ListBooks books={read} bookshelves={this.props.bookshelves} onChangeShelf={this.props.onChangeShelf}/>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <button onClick={this.addBookHandle}>Add a book</button>
        </div>
      </div>
    
    )
  }
}

export default Reads
