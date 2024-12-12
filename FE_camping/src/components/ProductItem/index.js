import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./ProductItem.module.sass";

function ProductItem({ className, item }) {
  return (
    <div className={cn(className, styles.product)}>
      <div className={styles.view}>
        <Link className={styles.preview} to={`/product/${item.id}`}>
          <img className={styles.pic} src={item.IMAGE_PATH} alt={item.NAME} />
        </Link>
        <Link className={cn("button button-green", styles.button)} to="/cart">
          Thêm vào giỏ hàng
        </Link>
      </div>
      <Link className={styles.name} to={"/product"}>
        {item.NAME}
      </Link>
      <div className={styles.details}>
        <div className={styles.price}>
          <span className={styles.actual}>
            {item.PRICE?.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
