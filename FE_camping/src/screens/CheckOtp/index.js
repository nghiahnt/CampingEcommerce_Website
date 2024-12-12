import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CheckOtp.module.sass";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../redux/auth";
const breadcrumbs = [
  {
    title: "Login",
    url: "/login",
  },

  {
    title: "Sign Up",
    url: "/SignUp",
  },
];
function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [check, setCheck] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { email, message,isLoading } = useSelector((state) => state.auth);
  const [reEmail, setReEmail] = useState(email);
  const otpOnchage = (event) => {
    setOtp(event.target.value);
  };
  const onVerifyOtp = (e) => {
    e.preventDefault();
    const res = dispatch(AuthAction.verifyOtp({ reEmail, otp }));
    res.then((result) => {
      if (AuthAction.verifyOtp.fulfilled.match(result)) {
        setCheck(true);
        setNewMessage(result.payload.data.status.message);
        setPassword(result.payload.data.status.elements);
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
            <h2 className={cn("title title_mb-lg")}>Xác nhận Otp</h2>
            <form className={styles.form} action="">
              {check
                ? check && (
                    <div>
                      {newMessage}
                      <br></br>Mật khẩu:{password}
                    </div>
                  )
                : message && <div>{message}</div>}
              <div className={styles.wrap}>
                <div className={cn(styles.status, styles.success)}></div>

                <TextInput
                  className={styles.field}
                  label="Otp"
                  type="text"
                  onChange={otpOnchage}
                />
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <button
                    className={cn(
                      "button button-border button-wide",
                      styles.button
                    )}
                    onClick={onVerifyOtp}
                  >
                    {isLoading?"Loading...":"Xác nhận"}
                  </button>
                </div>
                <div className={styles.col}>
                  <Link
                    className={cn(
                      "button button-border button-wide",
                      styles.button
                    )}
                    to="/login"
                  >
                    Đăng nhập
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

export default VerifyOtp;
