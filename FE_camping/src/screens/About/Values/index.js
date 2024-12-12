import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Values.module.sass";

function About() {
  return (
    <div className={cn("section", styles.about)}>
      <div className={cn("center", styles.center)}>
        <div className={cn("stage")}>- Giá trị Cốt lõi của Công ty</div>
        <h2 className={cn("title title_mb-lg", styles.title)}>
          Giá trị Cốt lõi của Chúng tôi
        </h2>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinejoin="round"
              >
                <path d="M30 9L17.91 20.875l-6.364-6.25L2 24"></path>
                <path d="M22 9h8v8" strokeLinecap="round"></path>
              </svg>
            </div>
            <div className={styles.category}>Đổi mới Tuyệt vời</div>
            <div className={styles.text}>
              Chúng tôi luôn tập trung làm cho tất cả sản phẩm của chúng tôi trở
              nên sáng tạo nhất có thể.
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinejoin="round"
              >
                <path
                  d="M16 3l4.326 8.557L30 12.938l-7 6.657L24.652 29 16 24.557 7.348 29 9 19.595l-7-6.657 9.674-1.38L16 3z"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
            <div className={styles.category}>Chất lượng Cao</div>
            <div className={styles.text}>
              Một trong những giá trị chính của chúng tôi là chất lượng của sản
              phẩm mà chúng tôi cung cấp cho khách hàng.
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
              >
                <path
                  d="M28 30v-3a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6v3"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 14a6 6 0 1 0 0-12 6 6 0 1 0 0 12z"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className={styles.category}>Đồng đội Quan trọng</div>
            <div className={styles.text}>
              Chúng tôi tin rằng việc trở thành một công ty thành công chủ yếu
              là về việc làm việc như một đội.
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link
            className={cn("button button-green", styles.button)}
            to="/careers-page"
          >
            Xem Công việc
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
