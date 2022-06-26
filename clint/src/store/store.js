import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer/reducer";
import reducThunk from "redux-thunk";

const initState = {};

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  enhancer(applyMiddleware(reducThunk))
);

export default store;
