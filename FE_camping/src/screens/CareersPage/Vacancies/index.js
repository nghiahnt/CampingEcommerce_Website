import React from "react";
import cn from "classnames";
import styles from "./Vacancies.module.sass";

function Vacancies({ items }) {
  return (
    <>
      {items.map((x, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.title}>{x.title}</div>
          <div className={styles.text}>{x.text}</div>
          <button className={cn("button button-green", styles.button)}>{x.button}</button>
        </div>
      ))}
    </>
  );
}

export default Vacancies;
