import axiosInstance from "..";

const orderApi = {
  createOrder(data) {
    return axiosInstance.post("/order/createOrder", {
      NAME: data?.name,
      NAME_CODE: data?.name_code,
      ADDRESS: data?.address,
      PHONE: data?.phone,
      TOTAL: data?.total,
      TOTAL_DISCOUNTD: data?.total_discount,
      LIST_PRODUCT: data?.list_product,
    });
  },
  getOrderUser(){
    return axiosInstance.get("/order/getOrderUser")
  }
};

export default orderApi;
