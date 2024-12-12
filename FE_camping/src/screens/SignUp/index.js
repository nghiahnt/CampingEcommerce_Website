import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SignUp.module.sass";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import { AuthAction } from "../../redux/auth";
import { useHistory } from "react-router-dom";
import { registrationSuccess } from "../../redux/auth";
const breadcrumbs = [
  {
    title: "trang chủ",
    url: "/",
  },
  {
    title: " Danh mục",
    url: "/Category",
  },
  {
    title: "Kiểm tra Otp",
    url: "/checkOtp",
  },
  {
    title: "Đăng kí",
  },
];

function SignUp() {
  const [agree, setAgree] = useState(true);
  const [email, setEmail] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const emailOnchange = (event) => {
    setEmail(event.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    const res = dispatch(AuthAction.register(email));

    res.then((result) => {
      if (AuthAction.register.fulfilled.match(result)) {
        const message = result.payload.data.status.message;
        dispatch(registrationSuccess({ email, message }));
        history.push(`/checkOtp`);
      }
    });
  };

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Đăng kí</div>
            <h2 className={cn("title title_mb-lg")}>Tạo tài khoản</h2>
            <form className={styles.form} action="">
              {error && <div className={cn("errorMessage")}>{error}</div>}
              <div className={styles.wrap}>
                <div className={cn(styles.status, styles.success)}></div>
                <TextInput
                  className={styles.field}
                  label="Địa chỉ email"
                  type="email"
                  onChange={emailOnchange}
                />
              </div>

              <Checkbox
                className={styles.checkbox}
                label='Tôi có thể đọc và đồng ý <a href="/legal-page">chính sách & điều kiện</a>'
                type="checkbox"
                value={agree}
                onChange={() => setAgree(!agree)}
              />
              <div className={styles.row}>
                <div className={styles.col}>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={onRegister}
                  >
                    {isLoading ? "Loading..." : "Tạo tài khoản"}
                  </button>
                </div>
                <div className={styles.col}></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
