import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './book-list.css';
import { connect } from 'react-redux'
import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";

class BookList extends Component {

  componentDidMount() {
    //receive data
    const {
      bookstoreService,
      booksLoaded,
      booksRequested
    } = this.props
    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => {
        booksLoaded(data)
      })
  }

  render() {

    const { books, loading } = this.props;

    const loader = (loading) ? <Spinner />: null;

    return (
      <div className="jumbotron book-list">
        {loader}
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

const mapStateToProps = ({books, loading}) => ({
  books,
  loading
})

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, { booksLoaded, booksRequested })
)(BookList)

