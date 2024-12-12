import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import discountApi from "../../api/discount";

const initialState = {
  vouchers: [],
  loading: false,
  error: null,
  message: null,
};
const getAllDiscount = createAsyncThunk("get/getAllDiscount", async () => {
  try {
    const res = await discountApi.getAllDiscount();
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});


const slice = createSlice({
  name: "discount",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllDiscount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllDiscount.fulfilled, (state, payload) => {
      state.vouchers = payload.payload;
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(getAllDiscount.rejected, (state) => {
      state.loading = false;
    });
    
  },
});

export const discountAction = {
  getAllDiscount,
 
};

export default slice.reducer;
