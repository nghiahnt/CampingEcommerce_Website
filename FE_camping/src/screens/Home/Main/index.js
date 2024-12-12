import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Main.module.sass";

function Main() {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("center")}>
        <div className={styles.container}>
          <div className={styles.details}>
            <div className={cn("stage", styles.stage)}>
              {" "}
              - Sản phẩm cắm trại
            </div>
            <h1 className={cn("title", styles.title)}>
              Chúng tôi giới thiệu bạn các sản phẩm cắm trại tốt
            </h1>
            <Link className={cn("button button-green")} to="/">
              Ghé cửa hàng
            </Link>
          </div>
          <div className={styles.preview}>
            <img className={styles.pic} src="/images/main-pic.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
