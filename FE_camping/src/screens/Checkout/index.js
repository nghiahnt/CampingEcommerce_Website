import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import CheckoutMyCart from "../../components/CheckoutMyCart";
import TextInput from "../../components/TextInput";
import styles from "./Checkout.module.sass";
import $ from "jquery"; // Fix the import statement
import { useDispatch, useSelector } from "react-redux";
import { discountAction } from "../../redux/discount";
import { orderAction } from "../../redux/order";
const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Danh mục",
    url: "/category",
  },
  {
    title: "Giỏ hàng",
    url: "/cart",
  },
  {
    title: "Thanh toán",
  },
];
function Checkout() {
  const [counter, setCounter] = useState(0);
  const [selectedVoucher, setSelectedVoucher] = useState(null); // New state for selected voucher
  const container = useRef();
  const steps = useRef();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const [basketItems, setBasketItems] = useState(products);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [bilTotal, setBillTotal] = useState(0);
  const [billTotalDiscount, setBillTotalDiscount] = useState(0);
  useEffect(() => {
    const getAllDis = async () => {
      dispatch(discountAction.getAllDiscount());
    };
    getAllDis();
  }, [dispatch]);
  const { vouchers } = useSelector((state) => state.discount);
  useEffect(() => {
    setBasketItems(products);
  }, [products]);

  useEffect(() => {
    $(steps.current.children).eq(counter).addClass(styles.active);
    $(container.current.children).hide().eq(counter).fadeIn();
  }, [counter]);

  const nextItem = () => setCounter((prev) => (prev < 2 ? ++prev : prev));
  const goBack = () => setCounter((prev) => (prev > 0 ? --prev : prev));

  const handleVoucherBack = () => {
    goBack();
  };
  const handleVoucher = (voucher) => {
    // Toggle the selected voucher when the button is clicked
    setSelectedVoucher((prevVoucher) =>
      prevVoucher === voucher ? null : voucher
    );
  };
  const onName = (event) => {
    setName(event.target.value);
  };
  const onAddress = (event) => {
    setAddress(event.target.value);
  };
  const onPhone = (event) => {
    setPhone(event.target.value);
  };
  const randomCode = () => {
    var text = " ";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    const len = charset.length;
    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
  };
  const getIdAndQuantity = () => {
    const arr = [];
    if (products) {
      products.forEach((x) => {
        arr.push({ id: x?.Product?.id, QUANTITY: x?.QUANTITY });
      });
    }
    return arr;
  };
  const onCreateOrder = () => {
    const name_code = randomCode();
    const list_product = getIdAndQuantity();
    const res = dispatch(
      orderAction.createOrder({
        name,
        address,
        phone,
        name_code,
        total: bilTotal,
        total_discount: billTotalDiscount,
        list_product,
      })
    );
    res.then((result) => {
      if (orderAction.createOrder.fulfilled.match(result)) {
        window.location.href = "/";
      }
    });
  };
  return (
    <div>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section", styles.checkout)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- May mắn</div>
          <h2 className={cn("title title_mb-lg")}>Thanh toán</h2>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.steps} ref={steps}>
                <div className={styles.step}>1</div>
                <div className={styles.step}>2</div>
              </div>
              <div className={styles.container} ref={container}>
                <div className={styles.item}>
                  <div className={styles.category}>Chi tiết đơn hàng</div>
                  <TextInput
                    className={styles.field}
                    label="Họ và tên"
                    type="text"
                    name="name"
                    onChange={onName}
                  />
                  <TextInput
                    className={styles.field}
                    label="Địa chỉ"
                    type="text"
                    name="address"
                    onChange={onAddress}
                  />
                  <TextInput
                    className={styles.field}
                    label="Số điện thoại"
                    type="text"
                    name="phone"
                    onChange={onPhone}
                  />
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={nextItem}
                  >
                    Voucher
                  </button>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={onCreateOrder}
                  >
                    xác nhận
                  </button>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>Danh sách voucher</div>
                  <div className={styles.voucherContainer}>
                    <p>Các voucher khả dụng:</p>
                    <div className={styles.voucherList}>
                      {vouchers.map((voucher) => (
                        <button
                          key={voucher.CODE}
                          className={cn(
                            "button button-green button-wide",
                            styles.button,
                            {
                              [styles.selected]: selectedVoucher === voucher,
                            }
                          )}
                          onClick={() => handleVoucher(voucher)}
                        >
                          {selectedVoucher === voucher ? (
                            "Voucher đã được sử dụng"
                          ) : (
                            <p>
                              {voucher?.CODE} - {voucher?.DiscountType?.NAME}
                            </p>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    className={cn("button-border", styles.button)}
                    onClick={handleVoucherBack}
                  >
                    Trở về
                  </button>
                </div>

                <div className={styles.item}>
                  <div className={styles.category}>Discount Details</div>
                  <p>Áp dụng voucher thành công!</p>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={goBack}
                  >
                    trở về
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <CheckoutMyCart
                value={basketItems}
                setValue={setBasketItems}
                checkout
                voucher={selectedVoucher}
                setBillTotal={setBillTotal}
                setBillTotalDiscount={setBillTotalDiscount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
