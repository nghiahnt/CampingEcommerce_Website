import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import styles from "./Items.module.sass";
import Counter from "../../../components/Counter";
import Icon from "../../../components/Icon";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../redux/cart";

function Items({ items, handlerItems }) {
  const dispatch = useDispatch();
  const filterItems = (id) => {
    handlerItems((prev) => prev.filter((p) => p.id !== id));
  };

  const removeItem = (e, i) => {
    dispatch(cartAction.deleteProductCart(i));
    $(e.target.parentNode)
      .closest(".basket-item")
      .animate(
        {
          height: 0,
          opacity: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
        },
        300,
        () => filterItems(i)
      );
  };

  return (
    <>
      {items &&
        items.map((x) => (
          <div className={cn("basket-item", styles.item)} key={x?.Product?.id}>
            <Link className={styles.preview} to={"/cart"}>
              <img src={x?.Product?.IMAGE_PATH} alt="" />
            </Link>
            <div className={styles.details}>
              <Link className={styles.product} to={"/cart"}>
                {x?.Product?.NAME}
              </Link>
              <div className={styles.price}>
                <div className={styles.actual}>
                  {x?.Product?.PRICE?.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
              <div className={styles.control}>
                <Counter className={styles.counter} value={x.QUANTITY} />
                <button
                  className={cn(styles.remove)}
                  onClick={(e) => removeItem(e, x?.Product?.id)}
                >
                  <Icon
                    className={cn("icon-close", styles.icon)}
                    name="close"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Items;
