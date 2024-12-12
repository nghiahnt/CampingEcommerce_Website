import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Breadcrumbs.module.sass";

function Breadcrumbs({ className, value }) {
  return (
    <div className={cn(className, styles.breadcrumbs)}>
      <div className={cn("center")}>
        <ul className={styles.list}>
          {value.map((x, i) => (
            <li className={styles.item} key={i}>
              {x.url ? (
                <Link className={styles.link} to={x.url}>
                  {x.title}
                </Link>
              ) : (
                x.title
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
