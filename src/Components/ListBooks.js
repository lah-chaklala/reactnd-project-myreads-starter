import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

class ListBooks extends Component {

    getShelf = (id) => {
        if (this.props.bookshelves.filter(e => e.id === id).length > 0) {
            this.props.bookshelves.forEach(book => {
                if (book.id === id) {
                    return book.shelf;
                }
            });
        } else return "none";
    }

  render() {
    const { books, onChangeShelf } = this.props;

    return (
        <ol className="books-grid">
            {
                books.map((book) => (
                    <li key={book.id}>    
                        <Book book={book} shelf={this.getShelf(book.id)} onChangeShelf={(newValue) => onChangeShelf(book, newValue)}></Book>
                    </li>
                ))
            }
        </ol>
    )
  }
}

export default ListBooks
