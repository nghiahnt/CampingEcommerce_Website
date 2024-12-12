import axiosInstance from "..";

const ProductsApi = {
  getProducts(data) {
    return axiosInstance.get('/product/getAllProduct',data);
  },
  getProductId(id){
   
    return axiosInstance.get(`product/getProductId/${id}`);
  }
};

export default ProductsApi;
