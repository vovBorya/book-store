import React from "react";
import './book-list-item.css'

const BookListItem = ({ book }) => {

  const { title, author, price, image } = book

  return (
    <div className="book-list-item">
      <div className="book-image">
        <img src={image} alt="book image"/>
      </div>
      <div className="book-details">
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-secondary add-to-cart">Add to cart</button>
      </div>
    </div>
  )
}

export default BookListItem