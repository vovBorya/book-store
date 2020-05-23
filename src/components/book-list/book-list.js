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
    this.props.fetchBooks()
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

//ownProps is from withBookstoreService
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBooks: () => {

    dispatch(booksRequested())
    ownProps.bookstoreService
      .getBooks()
      .then((data) => {
        dispatch(booksLoaded(data))
      })
      .catch((err) => dispatch(booksError(err)))
  }
})


export default compose(
  withBookstoreService(),
  connect(mapStateToProps,mapDispatchToProps)
)(BookList)

