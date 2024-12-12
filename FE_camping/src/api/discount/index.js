import axiosInstance from "..";

const discountApi = {
  getAllDiscount() {
    return axiosInstance.get("/discounts/getAllDiscount");
  },
};

export default discountApi;
