import axiosInstance from "..";

const blogApi = {
  getAllBlog() {
    return axiosInstance.get(`/blog/getAllBlog?limit=6`);
  },
  getBlogId(id) {
    return axiosInstance.get(`/blog/getBlogId/${id}`);
  },
};

export default blogApi;
