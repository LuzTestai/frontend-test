import {
  RECIVE_ALL_PRODUCTS,
  RECEIVE_ONE_PRODUCT,
  FILTER_PRODUCTS,
  ADD_TO_CARD,
  LOADING_CARD,
} from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    case RECIVE_ALL_PRODUCTS:
      return { ...state, products: action.products };
    case RECEIVE_ONE_PRODUCT:
      return { ...state, product: action.product };
    case FILTER_PRODUCTS:
      return { ...state, filters: action.filters };
    case ADD_TO_CARD:
      return {
        ...state,
        cardQuantity: state.cardQuantity + action.cardQuantity,
      };
    case LOADING_CARD:
      return { ...state, loadingCard: action.loadingCard };

    default:
      return state;
  }
};

export default reducer;
