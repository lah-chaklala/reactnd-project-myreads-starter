import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from './Book'

class ListBooks extends Component {

    getShelf = (id) => {
        const found = this.props.bookshelves.find(e => e.id === id);
        if (found) {
            return found.shelf;
        } else return "none";
    }

  render() {
    const { books, onChangeShelf } = this.props;
    return (
        <ol className="books-grid">
            {
                books.map((book) => (
                    <li key={book.id}>    
                        <Book book={book} title={book.title} authors={book.authors} urlBackgroundImage={book.imageLinks.thumbnail} shelf={this.getShelf(book.id)} onChangeShelf={(newValue) => onChangeShelf(book, newValue)}></Book>
                    </li>
                ))
            }
        </ol>
    )
  }
}

export default ListBooks
