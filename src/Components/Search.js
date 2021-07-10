import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

// import { Link } from 'react-router-dom'

import ListBooks from './ListBooks';

class Search extends Component {
  state = {
    searchValue: "",
    books: []
  }
  
  onChangeHandle = (event) => {
    const newValue = event.target.value;
    console.log("input search new value " + newValue);
    this.setState({ 
        searchValue: newValue,
    });


    BooksAPI.search(this.state.searchValue).then((books) => {
        if (Array.isArray(books)) {
            books = books || []
            console.log("get list books from server using " + this.state.searchValue + " result " + books.length);
            this.setState({
                books: books
            })
        }

    });
  }

  closeSearchHandle = () => {
    console.log("close search clicked");
    console.log("go to /");
    this.props.history.push('/');
  }

  render() {

    return (
      <div>
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.closeSearchHandle()}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.searchValue} onChange={(event) => this.onChangeHandle(event)}/>
              </div>
            </div>
            
            <div className="search-books-results">
              <ListBooks books={this.state.books} bookshelves={this.props.bookshelves} onChangeShelf={this.props.onChangeShelf}/>
            </div>
          </div>        
      </div>
    )
  }
}

export default Search
