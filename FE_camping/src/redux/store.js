import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/index";
import product from "./product";
import cart from "./cart/index";
import search from "./search/index";
import category from "./category/index";
import checkout from "./checkout";
import blog from "./blog";
import discount from "./discount";
import order from "./order";
const reducer = {
  auth,
  product,
  cart,
  search,
  category,
  checkout,
  blog,
  discount,
  order,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
