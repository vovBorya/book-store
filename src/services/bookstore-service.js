export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        price: 130,
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383718290l/13079982.jpg'
      },
      {
        id: 2,
        title: 'JS, i love you',
        author: 'Vovka',
        price: 30,
        image: 'https://miro.medium.com/max/465/0*kBgMf-Nn6Okv0pun.jpg'
      },
    ]
  }
}