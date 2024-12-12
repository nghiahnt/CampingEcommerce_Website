import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
let accessToken;

const httpRequest = axios.create({
  baseURL: "http://localhost:9999/api/",
});
const tokenRequest = (accessToken) => {
  return axios.create({
    baseURL: "http://localhost:9999/api/",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};



export const get = async (path, option = {}) => {
  const response = await httpRequest.get(path, option);
  return response.data;
};

export const post = async (path, data = {}) => {
  accessToken = cookies.get("accessToken");
  const response = await tokenRequest(accessToken).post(path, data);
  return response.data;
};

export const remove = async (path, data = {}) => {
  accessToken = cookies.get("accessToken");
  const response = await tokenRequest(accessToken).delete(path, data);
  return response.data;
};

export const patch = async (path, data = {}) => {
  accessToken = cookies.get("accessToken");
  const response = await tokenRequest(accessToken).patch(path, data);
  return response.data;
};

export const getWithToken = async (path, data = {}) => {
  accessToken = cookies.get("accessToken");
  const response = await tokenRequest(accessToken).get(path, data);
  return response.data;
};
