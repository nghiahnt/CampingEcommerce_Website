import Cookies from "universal-cookie/es6/Cookies.js";
import * as httpRequest from "../utils/httpRequest.js";

const cookies = new Cookies();
const categoryId = cookies.get("categoryId");

export const getAllCategory = async () => {
  try {
    const res = await httpRequest.getWithToken("category/getAllCategory");
    return res.elements;
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (data) => {
  try {
    const res = await httpRequest.post("category/createCategory", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const removeCategory = async (id) => {
  try {
    const res = await httpRequest.remove(`category/deleteCategory/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const res = await httpRequest.getWithToken(`category/getCategoryId/${id}`);
    return res.elements;
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (data) => {
    try {
        const res = await httpRequest.patch(
          `category/updateCategory/${categoryId}`, data
        );
        return res;
    } catch (error) {
        
    }
}