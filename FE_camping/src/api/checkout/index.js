import axiosInstance from "..";

const checkoutApi = {
  checkout(money) {
    return axiosInstance.post("/checkout/orders", { MONEY: money.money });
  },
};

export default checkoutApi;
