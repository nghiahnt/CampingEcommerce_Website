import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./blogDetail.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { blogAction } from "../../redux/blog";
import { useParams } from "react-router-dom";
const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Chi tiết Blog",
  },
];

function BlogDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const getBlogId = async () => {
      dispatch(blogAction.getBlogId(id));
    };
    getBlogId();
  }, [id]);
  const { blog } = useSelector((state) => state.blog);
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section", styles.category)}>
        <div className={cn("center")}>
          {blog && (
            <div>
              <h2 className={cn("title title_mb-lg")}>{blog.TITLE}</h2>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${blog.IMAGE_PATH})` }}
              ></div>
              <div>{blog.DESC}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
