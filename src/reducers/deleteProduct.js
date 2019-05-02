import { DELETE_PRODUCT } from "../actions/actionVar";

export const deleteProduct = (products = [], action) => {
  if (action.type === DELETE_PRODUCT) {
    return (products = [...products, action.payload]);
  } else {
    return products;
  }
};
