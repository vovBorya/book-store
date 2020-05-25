import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const logMiddleware = () => (next) => (action) => {
  console.log(action.type)
  return next(action)
};

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({type: action});
  }

  return next(action)
}

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    stringMiddleware,
    logMiddleware
  )
)

const deleteActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => {
    dispatch("DELETE_ACTION")
  }, timeout)
}

store.dispatch(deleteActionCreator(3000))

export default store;