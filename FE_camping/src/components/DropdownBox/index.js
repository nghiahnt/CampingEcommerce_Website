import React, { useState, useRef } from "react";
import $ from "jquery";
import cn from "classnames";
import styles from "./DropdownBox.module.sass";

function DropdownBox({ className, value }) {
  const [visible, setVisible] = useState(false);
  const body = useRef();

  const handleClick = (a) => {
    $(body.current).slideToggle();
    setVisible(!visible);
  };

  return (
    <div className={cn(className, styles.item)}>
      <div className={styles.head} onClick={handleClick}>
        {value.title}
        <div className={cn({ [styles.active]: visible }, styles.arrow)}></div>
      </div>
      <div className={styles.body} ref={body}>
        {value.text}
      </div>
    </div>
  );
}

export default DropdownBox;
