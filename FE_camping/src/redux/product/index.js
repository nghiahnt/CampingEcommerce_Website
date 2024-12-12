import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsApi from "../../api/product";

const initialState = {
  products: [],
  loading: false,
  productItem: {
    id: "",
    PRICE: "",
    IMAGE_PATH: "",
    STOCK: "",
    CATEGORY_ID: {
      TITLE: "",
    },
    DESC: "",
  },
};
const getProducts = createAsyncThunk("post/getProducts", async () => {
  try {
    const res = await ProductsApi.getProducts();
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});

const getProductId = createAsyncThunk("post/getProductId", async (id) => {
  try {
    const res = await ProductsApi.getProductId(id);
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, payload) => {
      state.products = payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
    //get product id
    builder.addCase(getProductId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductId.fulfilled, (state, { payload }) => {
      
      state.productItem = payload;
      state.loading = false;
    });
    builder.addCase(getProductId.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const PostAction = {
  getProducts,
  getProductId,
};

export default slice.reducer;
