import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../../api/cart/index";

const initialState = {
  error: "",
  loading: false,
  products: [],
  message: null,
};
const addProductCart = createAsyncThunk("post/addProductCart", async (data) => {
  try {
    const res = await cartApi.addProductCart(data);
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});
const getAllProductCart = createAsyncThunk(
  "get/getAllProductCart",
  async (data) => {
    try {
      const res = await cartApi.getAllProductCart(data);
      return res.data.elements;
    } catch (error) {
      throw new Error(error);
    }
  }
);
const deleteProductCart = createAsyncThunk(
  "delete/deleteProductCart",
  async (id) => {
    try {
      const res = await cartApi.deleteProductCart(id);
      return res.data.message;
    } catch (error) {
      throw new Error(error);
    }
  }
);
const slice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //get all product cart
    builder.addCase(getAllProductCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProductCart.fulfilled, (state, payload) => {
      state.products = payload.payload.rows;
      state.loading = false;
    });
    builder.addCase(getAllProductCart.rejected, (state, payload) => {
      state.error = payload;
      state.loading = false;
    });

    //add product cart
    builder.addCase(addProductCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addProductCart.fulfilled, (state, { payload }) => {
      state.loading = false;
    });
    builder.addCase(addProductCart.rejected, (state, payload) => {
      state.error = payload;
      state.loading = false;
    });

    //delete product cart
    builder.addCase(deleteProductCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProductCart.fulfilled, (state, payload) => {
      state.message = payload.payload;
      state.loading = false;
    });
    builder.addCase(deleteProductCart.rejected, (state, payload) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export const cartAction = {
  addProductCart,
  getAllProductCart,
  deleteProductCart,
};

export default slice.reducer;
