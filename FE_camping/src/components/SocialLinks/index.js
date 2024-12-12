import React from "react";
import cn from "classnames";
import styles from "./Social.module.sass";
import Icon from "../Icon";

const SocialLinks = ({ position }) => {
  return (
    <div className={styles[position]}>
      <a className={styles.link} href="https://www.instagram.com/ui8net/" target="_blank" rel="noreferrer">
        <Icon className={cn("icon-instagram", styles.icon)} name="instagram" />
      </a>
      <a className={styles.link} href="https://twitter.com/ui8" target="_blank" rel="noreferrer">
        <Icon className={cn("icon-twitter", styles.icon)} name="twitter" />
      </a>
      <a className={styles.link} href="https://www.facebook.com/daohai2712002" target="_blank" rel="noreferrer">
        <Icon className={cn("icon-facebook", styles.icon)} name="facebook" />
      </a>
    </div>
  );
};

export default SocialLinks;
