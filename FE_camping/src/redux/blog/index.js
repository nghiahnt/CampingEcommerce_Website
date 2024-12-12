import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogApi from "../../api/blog";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  message: null,
  blog: {
    id: "",
    TITLE: "",
    IMAGE_PATH: "",
    DESC: "",
  },
};
const getAllBlog = createAsyncThunk("get/getAllBlog", async (data) => {
  try {
    const res = await blogApi.getAllBlog(data);
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});

const getBlogId = createAsyncThunk("get/getBlogId", async (id) => {
  try {
    const res = await blogApi.getBlogId(id);
    return res.data.elements;
  } catch (error) {
    throw new Error(error);
  }
});

const slice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBlog.fulfilled, (state, payload) => {
      state.blogs = payload.payload;
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(getAllBlog.rejected, (state) => {
      state.loading = false;
    });

    //getblogid
    builder.addCase(getBlogId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlogId.fulfilled, (state, { payload }) => {
      state.blog = { ...state.blog, ...payload };
      state.loading = false;
      state.message = payload.message;
    });
    builder.addCase(getBlogId.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const blogAction = {
  getAllBlog,
  getBlogId,
};

export default slice.reducer;
