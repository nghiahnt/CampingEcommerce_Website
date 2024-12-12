import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, createProduct, deleteProduct, getProductById, editProduct } from "./action";

const handleProduct = createSlice({
  name: "products",
  initialState: {
    products: [],
    message: "",
    product: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.message = (action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.message = (action.payload);
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.message = action.payload;
      })
  },
});

export const { productsActions } = handleProduct.actions;
export default handleProduct.reducer;
