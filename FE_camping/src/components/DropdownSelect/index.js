import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./DropdownSelect.module.sass";

function DropdownSelect({ className, label, value, setValue, options }) {
  const [visible, setVisible] = useState(false);
  const dropdown = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) setVisible(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (value) => {
    setValue(value);
    setVisible(false);
  };

  return (
    <div className={cn(className, { [styles.open]: visible }, styles.drop)} ref={dropdown}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.head} onClick={() => setVisible(!visible)}>
        {value}
      </div>
      <div className={styles.body}>
        {options.map((x, i) => (
          <div
            className={cn({ [styles.active]: x === value }, styles.option)}
            onClick={() => {
              handleClick(x);
            }}
            key={i}
          >
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownSelect;
