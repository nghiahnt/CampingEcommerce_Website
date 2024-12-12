import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import "slick-slider";
import styles from "./Categories.module.sass";

const items = [
  {
    url: "/category",
    title: "Túi",
    pic: "/images/categories/Bag.webp",
  },
  {
    url: "/category",
    title: "Lều",
    pic: "/images/categories/Camp.webp",
  },
  {
    url: "/category",
    title: "Đồ điện",
    pic: "/images/categories/Electronics.webp",
  },
  {
    url: "/category",
    title: "Xe đạp",
    pic: "/images/categories/Gear.webp",
  },
  {
    url: "/category",
    title: "Dao",
    pic: "/images/categories/Knife.webp",
  },
  {
    url: "/category",
    title: "Phong cách",
    pic: "/images/categories/Outfits.webp",
  },
  {
    url: "/category",
    title: "Giày",
    pic: "/images/categories/Shoe.webp",
  },
  {
    url: "/category",
    title: "Nước",
    pic: "/images/categories/Underwater.webp",
  },

];

function Categories() {
  const slider = useRef();

  const settings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    speed: 600,
    infinite: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const sliderCategory = slider.current;
    $(sliderCategory).slick(settings);
    return () => {
      $(sliderCategory).slick("unslick");
    };
  });

  return (
    <div className={cn("section", styles.categories)}>
      <div className={cn("center")}>
        <div className={cn("stage", styles.stage)}>Danh mục</div>
        <h2 className={cn("title title_mb-lg", styles.title)}>Danh mục web</h2>
        <div className={styles.container}>
          <div ref={slider} className={cn("slider-category", styles.slider)}>
            {items.map((x, i) => (
              <div className={styles.slide} key={i}>
                <Link className={styles.item} to={x.url}>
                  <div className={styles.icon}>
                    <img className={styles.pic} src={x.pic} alt="" />
                  </div>
                  <div className={styles.text}>{x.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
