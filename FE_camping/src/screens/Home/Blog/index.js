import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Blog.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { blogAction } from "../../../redux/blog";

function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllBlog = async () => {
      dispatch(blogAction.getAllBlog());
    };
    getAllBlog();
  }, [dispatch]);
  const { blogs } = useSelector((state) => state.blog);

  return (
    <div className={cn("section", styles.blog)}>
      <div className={cn("center", styles.center)}>
        <div className={cn("stage", styles.stage)}> - Blog của chúng tôi</div>
        <h2 className={cn("title title_mb-lg", styles.title)}>
          Xem Blog của chúng tôi
        </h2>

        <div className={cn("slider-blog", styles.slider, styles.list)}>
          {blogs.map((x, i) => (
            <Link
              className={cn(styles.item, styles["w33"])}
              to={`/blogdetail/${x.id}`}
              key={x.id}
            >
              <div className={cn(styles.status, styles.popular)}>Phổ biến</div>

              <div
                className={styles.preview}
                style={{ backgroundImage: `url(${x.IMAGE_PATH})` }}
              ></div>

              <h3 className={styles.info}>{x.TITLE}</h3>

              <div className={cn("blue", styles.category)}>Phổ biến</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
