import {
  RECIVE_ALL_PRODUCTS,
  RECEIVE_ONE_PRODUCT,
  FILTER_PRODUCTS,
} from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    case RECIVE_ALL_PRODUCTS:
      return { ...state, products: action.products };
    case RECEIVE_ONE_PRODUCT:
      return { ...state, product: action.product };
    case FILTER_PRODUCTS:
      return { ...state, filters: action.filters };

    default:
      return state;
  }
};

export default reducer;
