import React, { useEffect, useRef } from "react";
import cn from "classnames";
import $ from "jquery";
import "slick-slider";
import styles from "./ProductsSlider.module.sass";
import ProductItem from "../../../components/ProductItem";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  speed: 600,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true,
      },
    },
  ],
};

function ProductsSlider({ items }) {
  const slider = useRef();

  useEffect(() => {
    const sliderProducts = slider.current;
    $(sliderProducts).slick(settings);
    return () => $(sliderProducts).slick("unslick");
  }, []);

  return (
    <div className={styles.slider}>
      <div className={cn("section")}>
        <div className={cn("center")}>
          <div className={cn("stage")}> - Explore More</div>
          <h1 className={cn("title title_mb-lg", styles.title)}>Related Products</h1>
          <div className={styles.container}>
            <div className={cn("slider-products", styles.list)} ref={slider}>
              {items.map((x, i) => (
                <div className={styles.slide}>
                  <ProductItem className={styles.product} item={x} key={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
