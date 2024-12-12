import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import styles from "./Basket.module.sass";
import Icon from "../Icon";
import { useDispatch } from "react-redux";
import { cartAction } from "../../redux/cart/index";

const CheckoutMyCart = ({
  className,
  value,
  setValue,
  checkout,
  voucher,
  setBillTotal,
  setBillTotalDiscount,
}) => {
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  const shipping = 15000;
  const tax = 0.1;
  useEffect(() => {
    if (value) {
      let newSum = 0;
      value.forEach((x) => {
        newSum += x?.Product?.PRICE * x?.QUANTITY;
      });

      const calculatedTotal = calculateDiscount(newSum, tax, shipping, voucher);
      console.log(voucher);
      setSum(newSum);
      setBillTotal(newSum + sum * tax + shipping);
      setBillTotalDiscount(voucher ? calculatedTotal : null);
    }
  }, [value, setBillTotal, setBillTotalDiscount, voucher, tax, shipping]);

  const filterItems = (id) =>
    setValue((prev) => prev.filter((p) => p.id !== id));

  const removeItem = (e, id) => {
    dispatch(cartAction.deleteProductCart(id));
    setSum(0);
    $(e.target.parentNode)
      .closest(".basket-item")
      .animate({ height: 0, opacity: 0, marginBottom: 0 }, 300, () =>
        filterItems(id)
      );
  };

  // Calculate discount based on the voucher
  const calculateDiscount = (sum, tax, shipping, voucher) => {
    if (voucher) {
      const discountAmount = sum * voucher?.DiscountType?.VALUE;
      const sumDiscount = sum + sum * tax + shipping - discountAmount;
      setBillTotalDiscount(sumDiscount);
      return sum + sum * tax + shipping - discountAmount;
    }
    return sum + sum * tax + shipping;
  };

  return (
    <>
      <div className={className}>
        <div className={cn(styles.header, { [styles.checkout]: checkout })}>
          {checkout && <div className={styles.category}>Giỏ hàng của tôi</div>}
          <div className={styles.list}>
            {value &&
              value.map((x) => (
                <div
                  className={cn("basket-item", styles.item)}
                  key={x?.Product?.id}
                >
                  <Link className={styles.preview} to={"/cart"}>
                    <img
                      className={styles.pic}
                      src={x?.Product?.IMAGE_PATH}
                      alt=""
                    />
                  </Link>
                  <div className={styles.details}>
                    <Link className={styles.product} to={"/cart"}>
                      {x?.Product?.NAME}
                    </Link>
                    <div className={styles.price}>
                      <div className={styles.actual}>
                        {(x?.Product?.PRICE * x?.QUANTITY)?.toLocaleString(
                          "vi-VN",
                          { style: "currency", currency: "VND" }
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    className={styles.remove}
                    onClick={(e) => removeItem(e, x?.Product?.id)}
                  >
                    <Icon
                      className={cn("icon-close", styles.icon)}
                      name="close"
                    />
                  </button>
                </div>
              ))}
          </div>
          <div className={styles.total}>
            <div className={styles.text}>Tổng:</div>
            <div className={styles.text}>
              {sum?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <div className={styles.total}>
            <div className={styles.text}>Thuế:</div>
            <div className={styles.text}>10%</div>
          </div>
          <div className={styles.total}>
            <div className={styles.text}>Tiền giao hàng:</div>
            <div className={styles.text}>
              {shipping?.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <div className={styles.total}>
            <div className={styles.text}>Thành tiền:</div>
            <div className={styles.text}>
              {calculateDiscount(sum, tax, shipping, voucher)?.toLocaleString(
                "vi-VN",
                {
                  style: "currency",
                  currency: "VND",
                }
              )}
            </div>
          </div>

          <div className={styles.total}>
            <div className={styles.text}>
              {voucher
                ? `Đã áp dụng voucher ${voucher?.DiscountType?.NAME}`
                : " "}
            </div>
          </div>

          {checkout ? (
            <Link
              className={cn("button-border button-wide", styles.button)}
              to="/cart"
            >
              Sửa giỏ hàng
            </Link>
          ) : (
            <div className={styles.buttons}>
              <Link
                className={cn("button-green", styles.button)}
                to="/checkout"
              >
                Thanh toán
              </Link>

              <Link className={cn("button-border", styles.button)} to="/cart">
                Sửa giỏ hàng
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutMyCart;
