import { combineReducers } from "redux";
import { addProduct } from "./../actions/index";
import { deleteProduct } from "./deleteProduct";
import { allProducts } from "./allProducts";

export default combineReducers({ allProducts, addProduct, deleteProduct });
