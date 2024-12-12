import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchApi from "../../api/search";

const initialState = {
  products: [],
  loading: false,
  error: null,
  message: null,
};
const searchProduct = createAsyncThunk("post/searchProduct", async (name) => {
  try {

    const res = await searchApi.searchProduct(name);
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProduct.fulfilled, (state, payload) => {
      state.products = payload.payload;
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(searchProduct.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const searchAction = {
  searchProduct,
};

export default slice.reducer;
