import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './book-list.css';
import { connect } from 'react-redux'
import { withBookstoreService } from "../hoc";
import { fetchBooks, bookAddedToCart } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, onAddedToCart }) => (
  <div className="jumbotron book-list">
    <ul className="list-group">
      {
        books.map((book) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={book.id}
          >
            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
          </li>
        ))
      }
    </ul>
  </div>
)

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {

    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if ( error ) {
      return <ErrorIndicator />
    }

    return (
      <BookList books={books} onAddedToCart={onAddedToCart} />
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
  fetchBooks: fetchBooks(dispatch, ownProps.bookstoreService),
  onAddedToCart: (id) => dispatch(bookAddedToCart(id))
})


export default compose(
  withBookstoreService(),
  connect(mapStateToProps,mapDispatchToProps)
)(BookListContainer)

