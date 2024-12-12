import axiosInstance from "..";

const categoryApi = {
  getAllCategory(data) {
    return axiosInstance.get("/category/getAllCategory", data);
  },
  getProductOfCategory(id) {
    return axiosInstance.get(`/product/getProductOfCategory/${id}`);
  },
};

export default categoryApi;
