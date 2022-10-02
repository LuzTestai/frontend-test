import {
  RECIVE_ALL_PRODUCTS,
  RECEIVE_ONE_PRODUCT,
  FILTER_PRODUCTS,
  ADD_TO_CARD,
  LOADING_CARD,
} from "../actions/types";

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

export const fetchProducts = () => (dispatch) => {
  return fetch("https://front-test-api.herokuapp.com/api/product")
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch(receivedProducts(resp));
    })
    .catch((err) => console.err(err));
};

export const fetchProductDetail = (id) => (dispatch) => {
  return fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch(receivedProductDetail(resp));
    })
    .catch((err) => console.err(err));
};

export const fetchProductSearch = (search) => (dispatch) => {
  dispatch(filterProduct(search));
};

export const addToCard = (card) => (dispatch) => {
  return fetch(`https://front-test-api.herokuapp.com/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log("HOLA BEBE", resp.count);
      dispatch(updateCard(resp.count));
    });
};

export const loadingAddCard = (state) => (dispatch) => {
  dispatch(loadingCard(state));
};
