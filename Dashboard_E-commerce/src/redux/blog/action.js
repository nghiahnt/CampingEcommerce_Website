import { createAsyncThunk } from "@reduxjs/toolkit";
import * as blogServices from "../../services/blogServices";

export const getAllBlog = createAsyncThunk("getAllBlog", async () => {
  const res = await blogServices.getAllBlog();
  return res;
});

export const createBlog = createAsyncThunk("createBlog", async (data) => {
  const res = await blogServices.createBlog(data);
  return res;
});

export const updateBlog = createAsyncThunk("updateBlog", async (data) => {
  const res = await blogServices.updateBlog(data);
  return res;
});

export const deleteBlog = createAsyncThunk("deleteBlog", async (id) => {
  const res = await blogServices.deleteBlog(id);
  return res;
});

export const getBlogById = createAsyncThunk("getBlogById", async (id) => {
    const res = await blogServices.getBlogById(id);
    return res;
})
