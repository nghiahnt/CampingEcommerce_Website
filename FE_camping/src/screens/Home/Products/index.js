import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Products.module.sass";
import ProductItem from "../../../components/ProductItem";

import { useDispatch, useSelector } from "react-redux";
import { PostAction } from "../../../redux/product/index";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      dispatch(PostAction.getProducts());
    };
    getProduct();
  }, [dispatch]);

  const product = useSelector((state) => state.product);

  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("center")}>
        <div className={cn("stage", styles.stage)}>
          - Sản phẩm của chúng tôi{" "}
        </div>
        <h2 className={cn("title title_mb-lg", styles.title)}>
          Khám phá sản phẩm
        </h2>
        <div className={styles.list}>
          {product.products &&
            product.products.payload &&
            product.products.payload.map((x, i) => (
              <ProductItem className={styles.product} item={x} key={i} />
            ))}
        </div>
        <div className={styles.buttons}>
          <Link className={cn("button button-green")} to="/category">
            Xem tất cả
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
