import { ADD_PRODUCT } from "./../actions/actionVar";

export const addProduct = (products = [], action) => {
  if (action.type === ADD_PRODUCT) {
    return (products = [...products, action.payload]);
  } else {
    return products;
  }
};
