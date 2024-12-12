import Cookies from "universal-cookie";
import * as httpRequests from "../utils/httpRequest";

const cookies = new Cookies();
const blogId = cookies.get("blogId");

export const getAllBlog = async () => {
  try {
    const res = await httpRequests.get("blog/getAllBlog");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createBlog = async (data) => {
  try {
    const res = await httpRequests.post("blog/createBlog", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateBlog = async (data) => {
  try {
    const res = await httpRequests.patch(`blog/updateBlog/${blogId}`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = async (id) => {
  try {
    const res = await httpRequests.remove(`blog/deleteBlog/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogById = async (id) => {
    try {
        const res = await httpRequests.getWithToken(`blog/getBlogId/${id}`);
        return res.elements;
    } catch (error) {
        console.log(error);
    }
}