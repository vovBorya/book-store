const booksLoaded = (newBooks) => ({
  type: 'BOOKS_LOADED',
  payload: newBooks
})

const booksRequested = () => ({
  type: 'BOOKS_REQUESTED'
})

export {
  booksLoaded,
  booksRequested
}