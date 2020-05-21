import React from "react";
import './book-list-item.css'

const BookListItem = ({ book }) => {

  const { title, author } = book

  return (
    <div>
      <span>title: {title}; </span>
      <span>author: {author}</span>
    </div>
  )
}

export default BookListItem