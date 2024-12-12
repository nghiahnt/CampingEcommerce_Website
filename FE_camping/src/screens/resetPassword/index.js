import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./resetPassword.module.sass";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import { AuthAction } from "../../redux/auth";
import { useHistory, useParams } from "react-router-dom";
const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: " Login",
    url: "/login",
  },
  {
    title: "checkOtp",
    url: "/checkOtp",
  },
  {
    title: "resetPassword",
  },
];

function ResetPassword() {
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useParams();
  const { isLoading, errorForgetPassword } = useSelector((state) => state.auth);
  const emailOnchange = (event) => {
    setPassword(event.target.value);
  };
  const onRegister = (e) => {
    e.preventDefault();
    const res = dispatch(AuthAction.resetPassword({ token, password }));
    res.then((result) => {
      if (AuthAction.resetPassword.fulfilled.match(result)) {
        history.push("/login");
      }
    });
  };

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Mật khẩu</div>
            <h2 className={cn("title title_mb-lg")}>Cài lại mật khẩu</h2>
            <form className={styles.form} action="">
              {errorForgetPassword && (
                <div className={cn("errorMessage")}>{errorForgetPassword}</div>
              )}
              <div className={styles.wrap}>
                <div className={cn(styles.status, styles.success)}></div>
                <TextInput
                  className={styles.field}
                  label="password"
                  type="password"
                  onChange={emailOnchange}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <button
                    className={cn(
                      "button button-green button-wide",
                      styles.button
                    )}
                    onClick={onRegister}
                  >
                    {isLoading ? "Loading..." : "Submit"}
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

export default ResetPassword;
