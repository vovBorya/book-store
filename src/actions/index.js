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

export {
  booksLoaded,
  booksRequested,
  booksError,
  fetchBooks
}