import React from "react";
import BookList from "../book-list";
const HomePage = () => {

  const books = [
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

  return (
    <div>
      <BookList books={books} />
    </div>
  )
}

export default HomePage;