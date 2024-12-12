import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./InfoOrder.module.sass";
import cn from "classnames";
import Newsletter from "../../components/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import { orderAction } from "../../redux/order";

const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Thông tin đặt hàng",
    url: "/infoOrder",
  },
];

const InfoOrder = () => {
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getOrder = async () => {
      dispatch(orderAction.getOrderUser());
    };
    getOrder();
  }, [dispatch]);
  const { orders } = useSelector((state) => state.order);
  const handleViewDetails = (order) => {
    setVisible(true);
    setSelectedOrder(order);
    // You can set other state for managing the popup display here
  };

  const handleClosePopup = () => {
    setVisible(false);
    setSelectedOrder(null);
    // You can set other state to handle popup closure here
  };
  return (
    <div className={styles.orderHistoryPage}>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn(styles.header)}>
        <table className={styles.orderTable}>
          <thead>
            <tr>
              <th>Stt</th>
              <th>Mã đơn hàng</th>
              <th>Địa chỉ</th>
              <th>Số điện thoại</th>
              <th>Tổng</th>
              <th>Tổng đã giảm giá</th>
              <th>Ngày</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.length > 0 ? (
              orders?.map((product, i) => (
                <tr key={product?.id}>
                  <td>{i + 1}</td>
                  <td>{product?.NAME_CODE}</td>
                  <td>{product?.ADDRESS}</td>
                  <td>{product?.PHONE}</td>
                  <td>
                    {product?.TOTAL?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td>
                    {product?.TOTAL_DISCOUNTED?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }) || 0}
                  </td>

                  <td>{product?.CREATED_DATE}</td>
                  <td>
                    {product?.STATUS_ORDER ? "Đơn hàng đã duyệt" : "Đang xử lý"}
                  </td>
                  <td>
                    <button
                      className={cn("button-border", styles.button)}
                      onClick={() => handleViewDetails(product)}
                    >
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Không thấy đơn hàng</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Display the Popup directly */}
      {visible && (
        <div className={styles.popup}>
          <h3>Chi tiết đơn đặt hàng</h3>
          <div className={styles.popupContent}>
            <table className={styles.popupOrderTable}>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Ảnh</th>
                  <th>Giá</th>
                  <th>Tổng giá</th>
                  <th>Số lượng</th>
                </tr>
              </thead>
              <tbody style={{ overflowY: "auto" }}>
                {selectedOrder?.OrderDetails?.map((orderDetail, index) => (
                  <tr key={index}>
                    <td style={{ width: "40%" }}>
                      {orderDetail?.Product?.NAME}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <img
                        src={orderDetail?.Product?.IMAGE_PATH}
                        width="15%"
                        alt={orderDetail?.Product?.NAME}
                      />
                    </td>
                    {orderDetail?.Product?.PRICE?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                    <td style={{ width: "10%" }}>
                      {(
                        orderDetail?.Product?.PRICE * orderDetail?.QUANTITY
                      )?.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>

                    <td style={{ width: "10%" }}>{orderDetail?.QUANTITY}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            className={cn("button button-green", styles.button)}
            onClick={handleClosePopup}
          >
            Close
          </button>
        </div>
      )}
      <Newsletter />
    </div>
  );
};

export default InfoOrder;
