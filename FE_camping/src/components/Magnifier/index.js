import React from "react";
import cn from "classnames";
import { GlassMagnifier } from "react-image-magnifiers";
import styles from "./Magnifier.module.sass";

const settings = {
  // cursorStyle: "default",
  magnifierSize: "260px",
  magnifierBorderSize: 2,
  magnifierBorderColor: "#00CC96",
  magnifierBackgroundColor: "none",
};

function Magnifier({ className, imageSrc, largeImageSrc, ...props }) {
  return <GlassMagnifier className={cn(className, styles.magnifier)} imageSrc={imageSrc} largeImageSrc={largeImageSrc} {...settings} {...props} />;
}

export default Magnifier;
