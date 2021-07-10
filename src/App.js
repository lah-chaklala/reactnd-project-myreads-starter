import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'
import Reads from './Components/Reads'
import Search from './Components/Search'


class BooksApp extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      bookshelves: [],
    };
  }
 
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      if (Array.isArray(books)) {
        books = books || []
        this.setState({
          bookshelves: books
        })
      }
    })
  }
 
  onChangeShelf = (book, newValue) => {
    book.shelf = newValue;
    let newBook = this.state.bookshelves
    if (newBook.filter(e => e.id === book.id).length > 0) {
      newBook = newBook.map((e) => {
        e.shelf = newValue;
        return e;
      }) 
    } else {
      newBook.push(book);
    }

    this.setState({
      bookshelves: newBook
    })
    
    BooksAPI.update({id: book.id}, newValue).then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Reads bookshelves={this.state.bookshelves} onChangeShelf={this.onChangeShelf}/>
          )
        }/>
        <Route exact path="/search" render={() => (
            <Search bookshelves={this.state.bookshelves} onChangeShelf={this.onChangeShelf}/>
          )
        }/>
      </div>
    )
  }
}

export default BooksApp
