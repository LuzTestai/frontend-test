import { RECIVE_ALL_PRODUCTS, RECEIVE_ONE_PRODUCT } from "../actions/types";

export const receivedProducts = (products) => ({
  type: RECIVE_ALL_PRODUCTS,
  products,
});
export const receivedProductDetail = (product) => ({
  type: RECEIVE_ONE_PRODUCT,
  product,
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
