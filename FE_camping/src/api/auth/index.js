import axiosInstance from "..";

const AuthApi = {
  register(data) {
    return axiosInstance.post("auth/registerUser", {
      EMAIL: data,
    });
  },
  verifyOtp(data) {
    return axiosInstance.post("auth/registerUser/verifyOtp", {
      EMAIL: data.reEmail,
      OTP: data.otp,
    });
  },
  login(data) {
    return axiosInstance.post("auth/login", {
      EMAIL: data.email,
      PASSWORD: data.password,
    });
  },
  logout(data) {
    return axiosInstance.post("auth/logout", {
      refreshToken: data.refreshToken,
    });
  },
  forgetPassword(data) {
    return axiosInstance.patch("auth/forgetPassword", { email: data.email });
  },
  resetPassword(data) {
    console.log("data", data);
    return axiosInstance.patch(`auth/resetPassword/${data.token}`, {
      newPassword: data.password,
    });
  },
};

export default AuthApi;
