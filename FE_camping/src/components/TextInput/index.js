import React from "react";
import cn from "classnames";
import styles from "./TextInput.module.sass";

function TextInput({ className, label, ...props }) {
  return (
    <div className={cn(className, styles.field)}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.wrap}>
        <input className={styles.input} {...props} />
      </div>
    </div>
  );
}

export default TextInput;
