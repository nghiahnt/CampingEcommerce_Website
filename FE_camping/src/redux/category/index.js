import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../api/category";

const initialState = {
  categories: [],
  loading: false,
  error: null,
  message: null,
  products: [],
  categoryId: null,
};
const getAllCategory = createAsyncThunk("get/getAllCategory", async (data) => {
  try {
    const res = await categoryApi.getAllCategory(data);
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});
const getProductOfCategory = createAsyncThunk(
  "get/getProductOfCategory",
  async (id) => {
    try {
      const res = await categoryApi.getProductOfCategory(id);
      return res.data.elements;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload.categoryId;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCategory.fulfilled, (state, payload) => {
      state.categories = payload.payload;
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(getAllCategory.rejected, (state) => {
      state.loading = false;
    });

    //get product follow category
    builder.addCase(getProductOfCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductOfCategory.fulfilled, (state, payload) => {
      state.products = payload.payload;
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(getProductOfCategory.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { setCategoryId } = slice.actions;
export const categoryAction = {
  getAllCategory,
  getProductOfCategory,
};

export default slice.reducer;
