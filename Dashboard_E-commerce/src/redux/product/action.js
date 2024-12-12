import { createAsyncThunk } from "@reduxjs/toolkit";
import productServices from "../../services/productServices";

// Action get all product
const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const res = await productServices.getAllProducts();
    return res;
});

const createProduct = createAsyncThunk("createProduct", async (formData) => {
    const res = await productServices.createProduct(formData);
    return res.message;
});

const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
    const res = await productServices.deleteProduct(id);
    return res.message;
});

const getProductById = createAsyncThunk("getProductById", async (id) => {
    const res = await productServices.getProductById(id);
    return res;
});

const editProduct = createAsyncThunk("editProduct", async (data) => {
    const res = await productServices.editProduct(data);
    return res;
})

export { getAllProducts, createProduct, deleteProduct, getProductById, editProduct };