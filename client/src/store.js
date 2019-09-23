import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;