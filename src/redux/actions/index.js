import { RECIVE_ALL_PRODUCTS } from "../actions/types";

export const receivedProducts = (products) => ({
  type: RECIVE_ALL_PRODUCTS,
  products,
});

export const fetchProducts = () => (dispatch) => {
  console.log("entre");
  return fetch("https://front-test-api.herokuapp.com/api/product")
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch(receivedProducts(resp));
    })
    .catch((err) => console.err(err));
};
