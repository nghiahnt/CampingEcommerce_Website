import React from "react";
import cn from "classnames";
import styles from "./TextArea.module.sass";

function TextInput({ className, label, ...props }) {
  return (
    <div className={cn(className, styles.field)}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.wrap}>
        <textarea className={styles.textarea} {...props}></textarea>
      </div>
    </div>
  );
}

export default TextInput;
