import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./DropdownMultiple.module.sass";

function DropdownMultiple({ className, title, label, value, setValue, options }) {
  const [slideDown, setSlideDown] = useState(false);
  const dropdown = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) setSlideDown(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (x) => (value.includes(x) ? setValue(value.filter((p) => p !== x)) : setValue([...value, x]));

  return (
    <div className={cn(className, { [styles.open]: slideDown }, styles.drop)} ref={dropdown}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.head} onClick={() => setSlideDown(!slideDown)}>
        {title}
      </div>
      <div className={styles.body}>
        {options.map((x, i) => (
          <div className={cn({ [styles.active]: value.includes(x) }, styles.option)} onClick={() => handleClick(x)} to={x.url} key={i}>
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMultiple;
