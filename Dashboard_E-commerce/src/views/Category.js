import {
  Row,
  Button,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
} from "reactstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categoryActions from "../redux/category/action";
import classNames from "classnames/bind";
import Cookies from "universal-cookie/es6";

import FormControl from "../components/dashboard/FormControl";
import FormElement from "../components/dashboard/FormElement";

const cx = classNames.bind();
const cookie = new Cookies();

const Menu = () => {

  // Redux
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const message = useSelector((state) => state.categories.message);
  const category = useSelector((state) => state.categories.category);
  let PARENT_ID = !!categories && [
    ...new Set(categories.map((item) => item.PARENT_ID)),
  ];

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleShow = () => {
    setShow(!show);
    if (showEdit === true) {
      setShow(false);
      setShowEdit(false);
    }
  };

  // Categories
  const [title, setTitle] = useState("");
  const [parentID, setParentID] = useState(0);
  const [CD, setCD] = useState("");

  // Handler
  // Handle submitform
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (showEdit === true) {
      // Patch
      const editData = {
        TITLE: title,
        PARENT_ID: parentID,
        CD: CD,
      };
      dispatch(categoryActions.updateCategory(editData));
    } else {
      // Add form
      const newCategory = {
        TITLE: title,
        PARENT_ID: parentID,
        CD: CD,
      };
      handleAddCategory(newCategory);
    }
  };

  // Get category
  useEffect(() => {
    dispatch(categoryActions.getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    setTitle(category.TITLE);
  }, [category]);

  // Add new category
  const handleAddCategory = (data) => {
    dispatch(categoryActions.addCategory(data));
  };

  // Handle delete form
  const handleDelete = (id) => {
    dispatch(categoryActions.removeCategory(id));
  };
  if (message) {
    window.alert(message);
    window.location.reload();
  }

  // Handle Edit
  const handleEdit = async (id) => {
    cookie.set("categoryId", id);
    dispatch(categoryActions.getCategoryById(id));
    setShow(true);
    setShowEdit(true);
  };

  return (
    <div className="menu">
      <div className="add-menu mb-2">
        <Button
          className="btn"
          color={showEdit ? "warning" : "success"}
          onClick={handleShow}
        >
          {showEdit ? "Edit Category" : "Add Category"}
        </Button>
      </div>

      {show && (
        <FormControl>
          <h4 className="card-title">
            {showEdit ? "Edit Category" : "Add category"}
          </h4>
          <form onSubmit={handleSubmitForm}>
            <FormElement
              name="title"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="mb-3">
              <label htmlFor="parentIdInput" className="form-label">
                Parent ID
              </label>
              <select
                className="form-control"
                id="parentIdInput"
                value={parentID}
                onChange={(e) => setParentID(e.target.value)}
              >
                {!!PARENT_ID ? (
                  PARENT_ID.map((value) => <option key={value}>{value}</option>)
                ) : (
                  <>
                    <option>0</option>
                    <option>1</option>
                  </>
                )}
              </select>
            </div>
            <FormElement
              name="CD"
              type="text"
              placeholder="Enter CD"
              value={CD}
              onChange={(e) => setCD(e.target.value)}
            />
            <button
              type="submit"
              className={cx("btn", {
                "btn-warning": showEdit,
                "btn-success": !showEdit,
              })}
            >
              {showEdit ? "Edit category" : "Add category"}
            </button>
          </form>
        </FormControl>
      )}

      <div className="menu-table">
        <div className="box-menu-table">
          <Row>
            <Col lg="12">
              {/* <ProjectTables /> */}
              <Card>
                <CardBody>
                  <CardTitle tag="h5">List Category</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    List the Category of E-commerce PJ
                  </CardSubtitle>

                  <Table
                    className="no-wrap mt-3 align-middle"
                    responsive
                    borderless
                  >
                    <thead>
                      <tr>
                        <th>Type Category</th>
                        <th>CategoryID</th>
                        <th>CD</th>
                        <th>Management</th>
                      </tr>
                    </thead>

                    <tbody>
                      {!categories ? (
                        <tr>
                          <td>
                            <h5 className="mt-4">Loading...</h5>
                          </td>
                        </tr>
                      ) : (
                        categories.map((item, index) => {
                          return (
                            <tr
                              key={index}
                              className="border-top border-bottom"
                            >
                              <td>
                                <div className="p-2 ms-3">
                                  <h6 className="mb-0">{item.TITLE}</h6>
                                  {/* <span className="text-muted">
                                    Description text
                                  </span> */}
                                </div>
                              </td>
                              <td>
                                <h6 className="ms-4">{item.id}</h6>
                              </td>
                              <td>
                                <h6>{item.CD}</h6>
                              </td>
                              <td className="d-flex justify-content-between">
                                <div>
                                  <button
                                    className="btn btn-warning"
                                    onClick={() => handleEdit(item.id)}
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
                          );
                        })
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
  );
};
export default Menu;
