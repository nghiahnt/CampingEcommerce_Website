import React, { useState } from "react";
import cn from "classnames";
import styles from "./Counter.module.sass";
import Icon from "../Icon";

function Counter({ className, value, onCounterChange }) {
  const [counter, setCounter] = useState(value);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    onCounterChange(counter + 1);
  };

  const decrement = () => {
    if (counter <= 1) {
      setCounter(1);
      onCounterChange(1);
    } else {
      setCounter(counter - 1);
      onCounterChange(counter - 1);
    }
  };

  const handleCounter = (x) => {
    const newValue = parseInt(x.target.value.replace(/[^\d]/, "")) || 1;
    setCounter(newValue);
    onCounterChange(newValue);
  };

  return (
    <div className={cn(className, styles.counter)}>
      <button className={cn(styles.button, styles.minus)} onClick={decrement}>
        <Icon
          className={cn("icon-arrow-prev", styles.icon)}
          name="arrow-prev"
        />
      </button>

      <input
        type="text"
        name=""
        id=""
        size="3"
        value={counter}
        onChange={handleCounter}
      />

      <button className={cn(styles.button, styles.plus)} onClick={increment}>
        <Icon
          className={cn("icon-arrow-next", styles.icon)}
          name="arrow-next"
        />
      </button>
    </div>
  );
}

export default Counter;
