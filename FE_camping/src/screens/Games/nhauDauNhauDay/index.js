import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Nhau from "./nhau.js";
import styles from "../../Login/Login.module.sass";
import cn from "classnames";
const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Trò chơi",
    url: "/games",
  },
  {
    title: "Nhậu đâu nhậu đây",
    url: "/games/nhau_dau_nhau_day",
  },
];

function NhauDauNhauDay() {
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <Nhau />
          </div>
        </div>
      </div>
    </>
  );
}

export default NhauDauNhauDay;
