import React from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import Newsletter from "../../components/Newsletter";
import Values from "./Values";
import styles from "./About.module.sass";

const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Chuyển hướng",
    url: "/",
  },
  {
    title: "About",
  },
];

function About() {
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />

      <div className={cn("section")}>
        <div className={cn("section", styles.wrap)}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Xem thêm</div>
            <h2 className={cn("title title_mb-lg", styles.title)}>Tất cả về chúng tôi</h2>
            <div className={styles.bg} style={{ backgroundImage: `url(/images/content/blog/blog-pic-2.webp)` }}></div>
          </div>
        </div>

        <div className={cn("section", styles.container)}>
          <div className={cn("center", styles.center)}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={cn("stage")}>- Hành trình Bắt đầu</div>
                <h2 className={cn("title", styles.title)}>Làm thế nào và Khi nào mọi thứ đã Bắt đầu</h2>
                <div className={styles.photo} style={{ backgroundImage: `url(/images/content/blog/blog-pic-4.webp)` }}></div>
              </div>
              <div className={styles.col}>
                <div className={styles.item}>
                  <div className={styles.category}>Chỉ sử dụng nguyện liệu chất lượng</div>
                  <div className={styles.text}>
                   10 năm một hành trình luôn gắn bó sản phẩm chất lượng
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Cảnh đẹp Đà Nẵng</div>
                  <div className={styles.text}>
                    Du lịch khắp Đà Nẵng sống hết mình ở mãi Đà Nẵng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Values />
      <Newsletter />
    </>
  );
}

export default About;
