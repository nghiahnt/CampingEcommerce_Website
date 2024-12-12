import axiosInstance from "..";

const cartApi = {
  addProductCart(data) {
    return axiosInstance.post(`/cart/addProductCart/${data.id}`, {
      QUANTITY: data.quantity,
    });
  },
  getAllProductCart(data) {
    return axiosInstance.get(`cart/getAllProductCart`, data);
  },
  deleteProductCart(id) {
    return axiosInstance.delete(`cart/deleteProductCart/${id}`);
  },
};
export default cartApi;
