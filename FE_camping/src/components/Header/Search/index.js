import React, { useState } from "react";
import cn from "classnames";
import styles from "./Search.module.sass";
import Icon from "../../Icon";

const Search = ({ position }) => {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search) {
      window.location.href = `/search?name=${search}`;
    }
  };

  return (
    <form
      className={cn(styles.search, {
        [styles.show]: visibleSearch && position === "header",
        [styles.nav_search]: position === "menu",
      })}
      action=""
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="wrap">
        <input
          className={styles.input}
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button
        className={styles.button}
        onClick={(e) => {
          setVisibleSearch(!visibleSearch);
        }}
      >
        <Icon className={cn("icon-search icon-header")} name="search" />
      </button>
    </form>
  );
};

export default Search;
