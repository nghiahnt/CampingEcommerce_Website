const authService = require("../services/authService");
const createSuccess = require("../helpers/createSuccess");
const createError = require("../middlewares/handle_error");

const authController = {
  registerUser: async (req, res, next) => {
    try {
      const { status, message } = await authService.registerUser(req.body);
      return res.status(status).json(
        createSuccess({
          status,
          message,
        })
      );
    } catch (error) {
      next(error);
    }
  },
  verifyOtp: async (req, res, next) => {
    try {
      const { status, message, elements } = await authService.verifyOtp(
        req.body
      );
      return res.status(status).json(
        createSuccess({
          status,
          message,
          elements,
        })
      );
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { status, message, elements } = await authService.login(req.body);

      return res.status(status).json(
        createSuccess({
          status,
          message,
          elements,
        })
      );
    } catch (error) {
      next(error);
    }
  },
  refreshToken: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) return res.status(400).json("Bad request");
      const { status, message, elements } = await authService.refreshToken({
        refreshToken,
      });
      return res.status(status).json(
        createSuccess({
          status,
          message,
          elements,
        })
      );
    } catch (error) {
      next(error);
    }
  },
  logout: async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) throw createError.badRequest("RefreshToken not empty");
      const { status, message } = await authService.logout(refreshToken);
      return res.status(status).json(createSuccess(status, message));
    } catch (error) {
      next(error);
    }
  },
  changePassword: async (req, res, next) => {
    try {
      const { oldPassword, newPassword, reNewPassword } = req.body;
      if (newPassword != reNewPassword) {
        return res
          .status(401)
          .json({ message: "new password and reNew password not same" });
      }
      const { id } = req.params;
      const { status, message } = await authService.changePassword(
        {
          oldPassword,
          newPassword,
        },
        id
      );
      return res.status(status).json(createSuccess(status, message));
    } catch (error) {
      next(error);
    }
  },
  forgetPassword: async (req, res, next) => {
    try {
      const { email } = req.body;
      const { status, message } = await authService.forgetPassword(email);
      return res.status(status).json(createSuccess(status, message));
    } catch (error) {
      next(error);
    }
  },
  resetPassword: async (req, res, next) => {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;
      const { status, message } = await authService.resetPassword(
        newPassword,
        token
      );
      return res.status(status).json(createSuccess(status, message));
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;
