import { RECIVE_ALL_PRODUCTS } from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    case RECIVE_ALL_PRODUCTS:
      return { ...state, products: action.products };

    default:
      return state;
  }
};

export default reducer;
