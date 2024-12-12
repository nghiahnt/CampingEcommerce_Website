import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
  Table,
} from "reactstrap";
import { useState, useEffect } from "react";
import className from "classnames/bind";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";

import FormElement from "../components/dashboard/FormElement";
import styles from "./styles/Blog.module.scss";
import * as blogActions from "../redux/blog/action";

const cx = className.bind(styles);
const cookies = new Cookies();

function BlogPage() {
  // Redux
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const blog = useSelector((state) => state.blogs.blog);
  const message = useSelector((state) => state.blogs.message);

  if (message) {
    window.alert(message);
    window.location.reload();
  }
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // Blog states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [countChar, setCountChar] = useState(0);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setCountChar(inputValue);
    if (countChar >= 75) {
      // Maximum length
      setDescription(inputValue + "\n"); // Append a newline character
      setCountChar(0);
    } else {
      setDescription(inputValue);
    }
  };
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file); // Create Blob image
    setImage(file);
  };
  // Remove blob image
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.path);
    };
  }, [image]);

  const handleShow = () => {
    setShow(!show);
    if (showEdit === true) {
      setShow(false);
      setShowEdit(false);
    }
  };

  useEffect(() => {
    setTitle(blog.TITLE);
    setDescription(blog.DESC);
    setImage({ preview: blog.IMAGE_PATH });
  }, [blog]);

  // Handler API
  // Get Blogs
  useEffect(() => {
    dispatch(blogActions.getAllBlog());
  }, [dispatch]);

  // Post Blogs
  const addNewBlog = (data) => {
    dispatch(blogActions.createBlog(data));
  };

  const handleEditBlog = (id) => {
    setShowEdit(true);
    setShow(true);
    cookies.set("blogId", id);
    dispatch(blogActions.getBlogById(id));
  };

  // Delete Blog
  const deleteBlog = (id) => {
    dispatch(blogActions.deleteBlog(id));
  };

  // Handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add blog - data
    if (!showEdit) {
      const newBlog = {
        TITLE: title,
        DESC: description,
        image: image,
      };
      const formData = new FormData();
      for (const key in newBlog) {
        formData.append(key, newBlog[key]);
      }
      addNewBlog(formData);
    }
    // Edit blog - data
    else {
      const editedBlog = {
        TITLE: title,
        DESC: description,
        image: image,
      };
      const formData = new FormData();
      for (const key in editedBlog) {
        formData.append(key, editedBlog[key]);
      }
      dispatch(blogActions.updateBlog(formData));
    }
  };

  return (
    <>
      <div className="menu">
        <div className="add-menu mb-3">
          <Button
            className="btn"
            color={showEdit ? "warning" : "success"}
            onClick={handleShow}
          >
            {showEdit ? "Edit Blog" : "Add Blog"}
          </Button>
        </div>

        {show && (
          <div className="card mt-4 mb-3">
            <div className="card-body">
              <h4 className="card-title">
                {showEdit ? "Edit Blog" : "Add Blog"}
              </h4>
              <form onSubmit={handleSubmit}>
                <FormElement
                  name="Title"
                  type="text"
                  placeholder="Enter blog title..."
                  value={title}
                  onChange={handleChangeTitle}
                />
                <textarea
                  type="text"
                  placeholder="Write content here..."
                  value={description}
                  className={cx("textArea", "w-100 rounded")}
                  onChange={handleInputChange}
                />
                <FormElement
                  name="Image"
                  type="file"
                  onChange={handleChangeImage}
                />
                <div className="mb-3 border">
                  {showEdit ? (
                    <img
                      src={blog && image.preview}
                      alt="thumbnail"
                      height={80}
                      className="my-2"
                    />
                  ) : (
                    image && (
                      <img
                        src={image.path}
                        alt="thumbnail"
                        height={80}
                        className="my-2"
                      />
                    )
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        )}

        <div>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">List Blog</CardTitle>
                  <CardSubtitle>
                    List Blogs of the E-commerce Website
                  </CardSubtitle>

                  <Table
                    className="no-wrap mt-3 algin-middle border-bottom"
                    responsive
                    borderless
                  >
                    <thead>
                      <tr>
                        <th className="mr-5">Title</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Management</th>
                      </tr>
                    </thead>

                    {!blogs ? (
                      <tbody>
                        <tr>
                          <td>
                            <h5>Loading...</h5>
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {blogs.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <h6>{item.TITLE}</h6>
                            </td>
                            <td>
                              <div>
                                <img
                                  src={item.IMAGE_PATH}
                                  alt="Thumbnail"
                                  height={50}
                                />
                              </div>
                            </td>
                            <td>
                              <p>{item.DESC}</p>
                            </td>
                            <td>
                              <div className="d-flex">
                                <button
                                  className="btn btn-warning"
                                  onClick={() => handleEditBlog(item.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger ms-3"
                                  onClick={() => deleteBlog(item.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
