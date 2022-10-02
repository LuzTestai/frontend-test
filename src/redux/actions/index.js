import {
  RECIVE_ALL_PRODUCTS,
  RECEIVE_ONE_PRODUCT,
  FILTER_PRODUCTS,
  ADD_TO_CARD,
  LOADING_CARD,
  SEARCH_STATE,
} from "../actions/types";
import { setLocalStorage } from "../..//utils/setLocalStorage";
const API = "https://front-test-api.herokuapp.com";
export const receivedProducts = (products) => ({
  type: RECIVE_ALL_PRODUCTS,
  products,
});
export const receivedProductDetail = (product) => ({
  type: RECEIVE_ONE_PRODUCT,
  product,
});
export const filterProduct = (filters) => ({
  type: FILTER_PRODUCTS,
  filters,
});
export const updateCard = (cardQuantity) => ({
  type: ADD_TO_CARD,
  cardQuantity,
});
export const loadingCard = (loadingCard) => ({
  type: LOADING_CARD,
  loadingCard,
});
export const searchState = (search) => ({
  type: SEARCH_STATE,
  search,
});

export const fetchProducts = () => (dispatch) => {
  return fetch(`${API}/api/product`)
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch(receivedProducts(resp));
      setLocalStorage("productos", resp);
    })
    .catch((err) => console.log(err));
};

export const fetchProductDetail = (id) => (dispatch) => {
  return fetch(`${API}/api/product/${id}`)
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch(receivedProductDetail(resp));
    })
    .catch((err) => console.log(err));
};

export const fetchProductSearch = (search) => (dispatch) => {
  dispatch(filterProduct(search));
};

export const addToCard = (card) => (dispatch) => {
  return fetch(`${API}/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch(updateCard(resp.count));
    });
};

export const loadingAddCard = (state) => (dispatch) => {
  dispatch(loadingCard(state));
};
export const fetchSearch = (search) => (dispatch) => {
  dispatch(searchState(search));
};
