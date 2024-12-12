import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./blog.module.sass";
import Blog from "./Blog";


const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Blog",
    url: "/blog"
  },
];



function BlogPage() {
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section", styles.category)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Các bài viết cắm trại</div>
          <h2 className={cn("title title_mb-lg")}>
            Các địa điểm đẹp và địa điểm <br />
            Cắm trại
          </h2>
          <Blog />
        </div>
      </div>
      
    </>
  );
}

export default BlogPage;