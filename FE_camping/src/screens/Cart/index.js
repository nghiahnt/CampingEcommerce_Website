import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Cart.module.sass";
import Breadcrumbs from "../../components/Breadcrumbs";
import Items from "./Items";
import Receipt from "./Receipt";
import Newsletter from "../../components/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/cart";
const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "sản phẩm",
    url: "/Product",
  },
  {
    title: "Giỏ hàng",
  },
];

const receipt = {
  category: "Cart Total",
  items: [
    {
      title: "Subtotal",
      value: "$209",
    },
    {
      title: "Tax",
      value: "$20.73",
    },
    {
      title: "Shipping",
      value: "$15",
    },
    {
      title: "Total",
      value: "$224",
    },
  ],
};

function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductCart = async () => {
      dispatch(cartAction.getAllProductCart());
    };

    getProductCart();
  }, [dispatch]);

  const { products } = useSelector((state) => state.cart);
  const [items, setItems] = useState(products);
  const handlerItems = (items) => setItems(items);

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={cn("center")}>
          <div className={styles.head}>
            <div className={styles.box}>
              <div className={cn("stage")}>- Giỏ hàng của bạn</div>
              <h2 className={cn("title")}>Giỏ hàng cửa hàng</h2>
            </div>
            <button className={cn("button button-border")}>Xóa tất cả</button>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.list}>
                <Items items={products} handlerItems={handlerItems} />
              </div>
            </div>
            <div className={styles.col}>
              <Receipt value={products} />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Cart;
