import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderApi from "../../api/order";

const initialState = {
  orders: [],
  loading: false,
  error: null,
  message: null,
};
const createOrder = createAsyncThunk("post/createOrder", async (data) => {
  try {
    const res = await orderApi.createOrder(data);
    return res.data.message;
  } catch (error) {
    throw new Error(error);
  }
});

const getOrderUser = createAsyncThunk("get/getOrderUser", async (dat) => {
  try {
    const res = await orderApi.getOrderUser();
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, payload) => {
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(createOrder.rejected, (state) => {
      state.loading = false;
    });

    //get order user
    builder.addCase(getOrderUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderUser.fulfilled, (state, payload) => {
      state.orders = payload.payload;
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(getOrderUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const orderAction = {
  createOrder,
  getOrderUser
};

export default slice.reducer;
