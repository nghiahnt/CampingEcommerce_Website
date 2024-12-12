import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../auth/userSlice";
import handleCategory from "../category/reducer";
import handleProduct from "../product/reducer";
import handleBlog from "../blog/reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: handleCategory,
    products: handleProduct,
    blogs: handleBlog,
  },
});
