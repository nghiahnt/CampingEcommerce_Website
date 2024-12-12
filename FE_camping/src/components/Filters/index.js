import React, { useState, useRef } from "react";
import cn from "classnames";
import $ from "jquery";
import styles from "./Filters.module.sass";
import DropdownSelect from "../DropdownSelect";

const sortOptions = ["Sắp xếp tăng", "Sắp xếp giảm"];

function Filters({ children, tags, setTags }) {
  const [visible, setVisible] = useState(false);
  const wrap = useRef();

  const [sort, setSort] = useState(sortOptions[0]);

  const handleClick = (a) => {
    $(wrap.current).slideToggle();
    setVisible(!visible);
  };

  const removeTags = (e) => setTags(tags.filter((t) => t !== e));

  return (
    <div className={styles.filters}>
      <div className={styles.sorting}>
        <div className={cn("button-open", { active: visible })} onClick={handleClick}>
          Lọc sản phẩm
        </div>
        <div className={styles.wrap} ref={wrap}>
          {children}
        </div>
        <div className={styles.field}>
          <DropdownSelect value={sort} setValue={setSort} options={sortOptions} />
        </div>
      </div>

      {tags && (
        <div className={styles.tags}>
          {tags.map((x, i) => (
            <div className={styles.tag} key={i}>
              {x}
              <button
                className={styles.remove}
                onClick={() => {
                  removeTags(x);
                }}
              ></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filters;
