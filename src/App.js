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
    console.log("update book " + book.title + " to " + newValue);
    book.shelf = newValue;
    let newBook = []
    if (this.state.bookshelves.find(e => e.id === book.id)) {
      newBook = this.state.bookshelves.map((e) => {
        if (e.id === book.id) e.shelf = newValue;
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
        <Route exact path="/" render={(props) => {
          // console.log(props);
            return (<Reads bookshelves={this.state.bookshelves} onChangeShelf={this.onChangeShelf} history={props.history}/>)
          }
        }/>
        <Route exact path="/search" render={(props) => (
            <Search bookshelves={this.state.bookshelves} onChangeShelf={this.onChangeShelf} history={props.history}/>
          )
        }/>
      </div>
    )
  }
}

export default BooksApp
