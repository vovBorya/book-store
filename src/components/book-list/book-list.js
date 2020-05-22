import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './book-list.css';
import { connect } from 'react-redux'
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";

class BookList extends Component {

  componentDidMount() {
    //receive data
    const { bookstoreService } = this.props
    const data = bookstoreService.getBooks()

    //dispatch action to store
    this.props.booksLoaded(data)
  }

  render() {

    const { books } = this.props;

    return (
      <div className="jumbotron book-list">
        <ul className="list-group">
          {
            books.map((book) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
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

const mapStateToProps = ({books}) => ({books})

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, { booksLoaded })
)(BookList)

