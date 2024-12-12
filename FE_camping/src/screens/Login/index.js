import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.sass";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction, loginSuccess } from "../../redux/auth/index";

const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: " Categories",
    url: "/Category",
  },
  {
    title: "Login",
  },
];

function Login() {
  const history = useHistory();
  const [remember, setRemember] = useState(true);
  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    const res = dispatch(AuthAction.login({ email, password }));
    res.then((result) => {
      if (AuthAction.login.fulfilled.match(result)) {
        dispatch(
          loginSuccess({
            userId: result.payload.userId,
            accessToken: result.payload.accessToken,
          })
        );
        window.location.href = "/";
      }
    });
  };
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Đăng nhập</div>
            <h2 className={cn("title title_mb-lg")}>
              Đăng nhập của bạn <br />
              Tài khoản
            </h2>
            <form className={styles.form} action="">
              {error && <div>{error}</div>}
              <TextInput
                className={styles.field}
                label="Địa chỉ email"
                type="email"
                onChange={emailOnChange}
              />
              <TextInput
                className={styles.field}
                label="Mật khẩu"
                type="password"
                onChange={passwordOnChange}
              />
              <Checkbox
                className={styles.checkbox}
                label="Nhớ mật khẩu"
                type="checkbox"
                value={remember}
                onChange={() => setRemember(!remember)}
              />
              <div className={styles.buttons}>
                <button
                  className={cn("button button-green button-wide")}
                  onClick={onLogin} // Removed the unnecessary parentheses
                >
                  {isLoading ? "Loading..." : "Đăng nhập"}
                </button>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <Link
                    className={cn(
                      "button button-border button-wide",
                      styles.button
                    )}
                    to="/sign-up"
                  >
                    Tạo tài khoản
                  </Link>
                </div>
                <div className={styles.col}>
                  <Link className={styles.link} to="/forgetPassword">
                    Quên mật khẩu?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
