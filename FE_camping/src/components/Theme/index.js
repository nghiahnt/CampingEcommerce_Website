import React from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import useDarkMode from "use-dark-mode";

const Theme = () => {
  const darkMode = useDarkMode(false);

  return (
    <label className={styles.switch}>
      <input className={styles.input} onChange={darkMode.toggle} checked={darkMode.value} type="checkbox" />
      <span className={styles.switch_in}>
        <span className={styles.tick}>
          <img className={cn(styles.pic, styles.pic_moon)} src="/images/moon.svg" alt="" />
          <img className={cn(styles.pic, styles.pic_sun)} src="/images/sun.svg" alt="" />
        </span>
      </span>
    </label>
  );
};

export default Theme;
