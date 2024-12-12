import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, addCategory, removeCategory, getCategoryById, updateCategory } from "./action";

// Initialize category state
const handleCategory = createSlice({
  name: "categories",
  initialState: {
    categories: null,
    category: "",
    loading: null,
    message: "",
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.status = action.payload.status;
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.status = action.payload.status;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
  },
});

export const { categoriesActions } = handleCategory.actions;
export default handleCategory.reducer;
