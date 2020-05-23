import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './book-list.css';
import { connect } from 'react-redux'
import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

  componentDidMount() {
    //receive data
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError
    } = this.props
    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => {
        booksLoaded(data)
      })
      .catch((err) => booksError(err))
  }

  render() {

    const { books, loading, error } = this.props;

    const loader = (loading) ? <Spinner />: null;
    const errorIndicator = (error) ? <ErrorIndicator />: null;

    return (
      <div className="jumbotron book-list">
        {loader}
        {errorIndicator}
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

const mapStateToProps = ({books, loading, error}) => ({
  books,
  loading,
  error
})

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, {
    booksLoaded,
    booksRequested,
    booksError
  })
)(BookList)

