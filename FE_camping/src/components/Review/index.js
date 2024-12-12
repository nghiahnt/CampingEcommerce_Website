import React, { useEffect, useRef } from "react";
import cn from "classnames";
import $ from "jquery";
import "slick-slider";
import styles from "./Review.module.sass";

let items = [
  {
    img: "/images/content/ava-1.jpg",
    author: "Nguyệt",
    text: "Web người bạn thân tôi làm mãi đỉnh .",
  },
  {
    img: "/images/content/ava-1.jpg",
    author: "Nam",
    text: "Đây là web site tuyệt nhất tôi thấy .Nó còn có cả trò chơi cho cắm trại.",
  },
  {
    img: "/images/content/ava-1.jpg",
    author: "Nghĩa",
    text: "Quá đỉnh luôn tôi toàn mua sản phẩm trên web này. Tôi đã giới thiệu cho bạn bè và rất được hưởng ứng.",
  },
];

function Review({ stage }) {
  const slider = useRef();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };

  useEffect(() => {
    const sliderReview = slider.current;
    $(sliderReview).slick(settings);
    return () => $(sliderReview).slick("unslick");
  });

  return (
    <div className={cn("section", styles.review)}>
      <div className={cn("center")}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={cn("stage")}>{stage}</div>
            <h2 className={cn("title", styles.title)}>Khách hàng đã nói gì về chúng tôi</h2>
          </div>
          <div className={styles.wrap}>
            <div ref={slider} className={cn("slider-review", styles.slider)}>
              {items.map((x, i) => (
                <div className={styles.item} key={i}>
                  <div className={styles.ava}>
                    <img className={styles.pic} src={x.img} alt="" />
                  </div>
                  <div className={styles.author}>{x.author}</div>
                  <div className={styles.text}>{x.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
