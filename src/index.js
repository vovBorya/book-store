import React from "react";
import App from "./components/app";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import store from "./store";

const bookstoreService = new BookstoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService} >
        <App />
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)

