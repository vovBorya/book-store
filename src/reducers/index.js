const initialState = {
  books: [
    {
      id: 1,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury'
    },
    {
      id: 2,
      title: 'JS, i love you',
      author: 'Vovka'
    },
  ]
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      }
    default: return state
  }
}

export default reducer;