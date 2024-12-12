import axiosInstance from "..";

const searchApi = {
  searchProduct(name) {
    return axiosInstance.post("/product/searchProduct", { name: name });
  },
};

export default searchApi;
