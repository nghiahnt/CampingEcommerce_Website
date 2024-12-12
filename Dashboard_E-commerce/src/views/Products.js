import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import Cookies from "universal-cookie";

import FormControl from "../components/dashboard/FormControl";
import FormElement from "../components/dashboard/FormElement";
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById,
  editProduct,
} from "../redux/product/action";

const cx = classNames.bind();
const cookie = new Cookies();

function Products() {
  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const message = useSelector((state) => state.products.message);
  const product = useSelector((state) => state.products.product);
  message && console.log(message);

  // Handle show the renderForm
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleOpen = () => {
    setShow(!show);
    if (showEdit === true) {
      setShow(false);
      setShowEdit(false);
    }
  };
  // Initialize state form product
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [CD, setCD] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [description, setDescription] = useState("");

  const handlePreviewImg = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  // Remove blob image
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);
  useEffect(() => {
    setName(product.NAME);
    setPrice(product.PRICE);
    setStock(product.STOCK);
    setCD(product.CD);
    setCategoryID(product.CATEGORY_ID);
    setDescription(product.DESC);
  }, [product]);

  // Get the products from API - ok
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Handle add product
  const handleAddProduct = (data) => {
    dispatch(createProduct(data));
    message && console.log(message);
  };

  // Handle delete
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  // Patch a Product
  const idData = (id) => {
    cookie.set("productId", id);
    dispatch(getProductById(id));
    if (product) {
      setShowEdit(true);
      setShow(true);
    }
  };
  const handlePatch = (data) => {
    dispatch(editProduct(data));
  };

  // Submit from edit or add to product
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (showEdit) {
      // Form edit - send edit data to server
      const editedProduct = {
        NAME: name,
        PRICE: price,
        STOCK: stock,
        CD: CD,
        DESC: description,
        CATEGORY_ID: categoryID,
        image: image,
      };
      const data = new FormData();
      for (const key in editedProduct) {
        data.append(key, editedProduct[key]);
      }
      handlePatch(data);
    } else {
      // Add to product
      const newProduct = {
        NAME: name,
        PRICE: price,
        STOCK: stock,
        CD: CD,
        CATEGORY_ID: categoryID,
        DESC: description,
        image: image,
      };
      const formData = new FormData();
      for (const key in newProduct) {
        formData.append(key, newProduct[key]);
      }
      handleAddProduct(formData);
    }
  };

  return (
    <>
      <div className="menu">
        <div className="add-menu mb-3">
          <Button
            className="btn"
            color={showEdit ? "warning" : "success"}
            onClick={handleOpen}
          >
            {showEdit ? "Edit Product" : "Add Product"}
          </Button>
        </div>

        {show && (
          <FormControl>
            <h4 className="card-title">
              {showEdit ? "Edit Product" : "Add Product"}
            </h4>
            <form onSubmit={handleSubmitForm}>
              <FormElement
                name="Name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormElement
                name="Price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <FormElement
                name="Stock"
                type="text"
                placeholder="Enter Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
              <FormElement
                name="CD"
                type="text"
                placeholder="Enter CD"
                value={CD}
                onChange={(e) => setCD(e.target.value)}
              />
              <FormElement
                name="CategoryID"
                type="text"
                placeholder="Enter categoryID"
                value={categoryID}
                onChange={(e) => setCategoryID(e.target.value)}
              />
              <FormElement
                name="Description"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormElement
                name="Image"
                type="file"
                onChange={handlePreviewImg}
              />
              <div className="mb-3 border">
                {image && (
                  <img
                    src={image.preview}
                    alt="thumbnail"
                    height={80}
                    className="my-2"
                  />
                )}
              </div>
              <button
                type="submit"
                className={cx("btn", {
                  "btn-success": !showEdit,
                  "btn-warning": showEdit,
                })}
              >
                {showEdit ? "Edit" : "Add"}
              </button>
            </form>
          </FormControl>
        )}

        <div className="menu-table">
          <div>
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">List products</CardTitle>
                    <CardSubtitle className="mb-3 text-muted" tag="h6">
                      List the products of E-commerce PJ
                    </CardSubtitle>

                    <Table
                      className="no-wrap mt-3 algin-middle"
                      responsive
                      borderless
                    >
                      <thead>
                        <tr>
                          <th>Type product</th>
                          <th>Image</th>
                          <th>CategoryID</th>
                          <th>CD</th>
                          <th className="ml-4">Status</th>
                          <th>Management</th>
                        </tr>
                      </thead>

                      <tbody>
                        {products.length !== 0 ? (
                          products.map((item, index) => (
                            <tr
                              className="border-top border-bottom"
                              key={index}
                            >
                              {/* Type product */}
                              <td>
                                <div className="p-2 ms-3">
                                  <h6 className="mb-0">{item.NAME}</h6>
                                  <span className="text-muted">
                                    {item.DESC}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <img
                                  src={item.IMAGE_PATH}
                                  alt="Thumbnail"
                                  height={50}
                                />
                              </td>
                              <td>
                                <h6 className="ms-4">{item.CATEGORY_ID}</h6>
                              </td>
                              <td>
                                <h6>{item.CD}</h6>
                              </td>
                              <td>
                                <div>
                                  <h6>Price: {item.PRICE}$</h6>
                                  <h6>Quantity: {item.STOCK}</h6>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <button
                                    className="btn btn-warning"
                                    onClick={(e) => idData(item.id)}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-danger ms-3"
                                    onClick={() => handleDelete(item.id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td>
                              <h4>Loading...</h4>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
