import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'
import Reads from './Components/Reads'
import Search from './Components/Search'


class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Reads} />
        <Route exact path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
