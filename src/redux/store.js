import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const initialState = {
  products: [],
  product: {},
  filsters: [],
  cardQuantity: 0,
  loadingCard: false,
  search: false,
};

const composedEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(reducer, initialState, composedEnhancers);
