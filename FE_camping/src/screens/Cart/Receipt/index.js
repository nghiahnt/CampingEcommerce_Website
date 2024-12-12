import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Receipt.module.sass";

function Receipt({ value }) {
  const [subTotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Update subTotal when the component mounts or when value changes
    if (value && Array.isArray(value)) {
      let newSum = 0;
      value.forEach((x) => {
        newSum += x?.Product?.PRICE * x?.QUANTITY;
      });
      setSubtotal(newSum);
    }
  }, [value]);

  const shipping = 15000;
  const tax = 0.1;

  return (
    <div className={styles.receipt}>
      <div className={styles.category}>Tổng tiền giỏ hàng</div>
      <div className={styles.wrap}>
        <div className={cn({ [styles.total]: "Total" }, styles.line)}>
          <div className={styles.text}>Tổng chưa phí:</div>
          <div className={styles.text}>
            {subTotal?.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <div className={cn({ [styles.total]: "Total" }, styles.line)}>
          <div className={styles.text}>Thuế:</div>
          <div className={styles.text}>
            {(subTotal * tax)?.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <div className={cn({ [styles.total]: "Total" }, styles.line)}>
          <div className={styles.text}>Shipping:</div>
          <div className={styles.text}>
            {shipping?.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>

        <div className={cn({ [styles.total]: "Total" }, styles.line)}>
          <div className={styles.text}>Tổng:</div>
          <div className={styles.text}>
            {(subTotal + subTotal * tax + shipping)?.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
      </div>
      <Link
        className={cn("button button-wide button-green", styles.button)}
        to="/checkout"
      >
        Thanh toán
      </Link>
    </div>
  );
}

export default Receipt;
