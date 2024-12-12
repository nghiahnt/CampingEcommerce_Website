import { createAsyncThunk } from "@reduxjs/toolkit";
import * as categoryServices from "../../services/categoryServices";

// Create an async thunk
export const getAllCategories = createAsyncThunk("getAllCategories", async () => {
    const res = await categoryServices.getAllCategory();
    return res;
});

export const addCategory = createAsyncThunk("addCategory", async (data) => {
    const res = await categoryServices.addCategory(data);
    return res;
});

export const removeCategory = createAsyncThunk("removeCategory", async (data) => {
    const res = await categoryServices.removeCategory(data);
    return res;
});

export const getCategoryById = createAsyncThunk("getCategoryById", async (id) => {
    const res = await categoryServices.getCategoryById(id);
    return res;
});

export const updateCategory = createAsyncThunk("updateCategory", async (data) => {
    const res = await categoryServices.updateCategory(data);
    return res;
})