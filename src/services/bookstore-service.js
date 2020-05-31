export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      price: 130,
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383718290l/13079982.jpg'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      price: 90,
      image: 'https://i.ebayimg.com/images/g/5uwAAOSwSzRZV8H-/s-l300.jpg'
    },
  ]

   getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }
}