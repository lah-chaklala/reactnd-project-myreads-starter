import React from 'react'
import '../App.css'
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom'

const Reads = (props)  => {
  const shelves = [
    { title: 'Currently Reading', key: 'currentlyReading' },
    { title: 'Want To Read', key: 'wantToRead' },
    { title: 'Read', key: 'read' },
    
  ];
  return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {
            shelves.map((shelf) => (
              <div className="bookshelf">
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <ListBooks books={props.bookshelves.filter((bk) => bk.shelf === shelf.key)} bookshelves={props.bookshelves} onChangeShelf={props.onChangeShelf}/>
              </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> <button>Add a book</button> </Link>
      </div>
    </div>
  
  )
};

export default Reads
