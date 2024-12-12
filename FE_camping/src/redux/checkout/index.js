import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import checkoutApi from "../../api/checkout";

const initialState = {
  products: [],
  loading: false,
  error: null,
  message: null,
};
const checkout = createAsyncThunk("post/checkout", async (money) => {
  try {
    const res = await checkoutApi.checkout(money);
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});

const slice = createSlice({
  name: "checkout",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(checkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkout.fulfilled, (state, payload) => {
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(checkout.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const checkoutAction = {
  checkout,
};

export default slice.reducer;
