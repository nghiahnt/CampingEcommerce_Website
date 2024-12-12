import React from "react";
import cn from "classnames";
import styles from "./Checkbox.module.sass";

function Checkbox({ className, label, value, onChange, ...props }) {
  return (
    <label className={cn(className, styles.checkbox)}>
      <input className={styles.input} {...props} checked={value} onChange={onChange} />
      <span className={styles.in}>
        <span className={styles.tick}></span>
        <span className={styles.text} dangerouslySetInnerHTML={{ __html: label }}></span>
      </span>
    </label>
  );
}

export default Checkbox;
