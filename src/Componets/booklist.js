import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Booklist = ({ books, title }) => {
  return (
    <div className='book-container'>
      <h1 >{title}</h1>

      {books.map((book) => (
        <div  key={book.id}>
          <Link to={`/books/${book.id}`} style={{ textDecoration: 'none' }}>
            <h2 >{book.title}</h2>
          </Link>

          <h4 >{book.desc}</h4>
          <div ><h5>"{book.author}"</h5></div>
        </div>
      ))}
    </div>
  );
}

export default Booklist;
