const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks
})

const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST'
})

const booksError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error
})

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then((data) => {
      dispatch(booksLoaded(data))
    })
    .catch((err) => dispatch(booksError(err)))
}

const bookAddedToCart = (bookId) => ({
  type: 'BOOK_ADDED_TO_CART',
  payload: bookId
})

const bookDeletedFromCart = (bookId) => ({
  type: 'BOOK_DELETED_FROM_CART',
  payload: bookId
})

const allBooksDeletedFromCart = (bookId) => ({
  type: 'ALL_BOOKS_DELETED_FROM_CART',
  payload: bookId
})



export {
  booksLoaded,
  booksRequested,
  booksError,
  fetchBooks,
  bookAddedToCart,
  bookDeletedFromCart,
  allBooksDeletedFromCart
}