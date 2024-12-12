import { createSlice } from "@reduxjs/toolkit";
import * as blogAction from "./action";

const handleBlog = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    message: "",
    status: "",
    blog: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(blogAction.getAllBlog.fulfilled, (state, action) => {
        state.blogs = action.payload.elements;
      })
      .addCase(blogAction.createBlog.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(blogAction.updateBlog.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(blogAction.deleteBlog.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(blogAction.getBlogById.fulfilled, (state, action) => {
        state.blog = action.payload;
      })
  },
});

export const { blogActions } = handleBlog.actions;
export default handleBlog.reducer;
