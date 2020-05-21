import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './book-list.css'

class BookList extends Component {

  render() {

    const { books } = this.props;

    return (
      <div>
        <ul>
          {
            books.map((book) => (
              <li
                key={book.id}
              >
                <BookListItem book={book} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default BookList

