import Cookies from "universal-cookie";
import * as httpRequest from "../utils/httpRequest";

const cookie = new Cookies();
const productId = cookie.get('productId');

const productServices = {
  getAllProducts: async () => {
    try {
      const res = await httpRequest.get("product/getAllProduct");
      return res.elements;
    } catch (error) {
      console.log(error);
    }
  },

  createProduct: async (formData) => {
    try {
      const res = await httpRequest.post("product/createProduct", formData);
      return res;
    } catch (error) {}
  },

  deleteProduct: async (id) => {
    try {
      const res = await httpRequest.remove(`product/deleteProduct/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  getProductById: async (id) => {
    try {
      const res = await httpRequest.get(`product/getProductId/${id}`);
      return res.elements;
    } catch (error) {
      console.log(error);
    }
  },

  editProduct: async (data) => {
    try {
      // console.log(productId);
      const res = await httpRequest.patch(
        `product/updateProduct/${productId}`,
        data
      );
      return res;
      // Error here - Api return in catch
    } catch (error) {
      console.log(error);
    }
  }
};

export default productServices;
