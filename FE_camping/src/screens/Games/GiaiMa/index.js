import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Giai from "./giai.js";

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
    title: "Giai Ma",
    url: "/games/giai_ma",
  },
];

function GiaiMa() {
  return (
    <div class="container">
      <div class="inner-container">
        <Breadcrumbs value={breadcrumbs} />
        <Giai />
      </div>
    </div>
  );
}

export default GiaiMa;
