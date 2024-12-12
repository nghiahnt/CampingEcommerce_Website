import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Search.module.sass";
import Filters from "../../components/Filters";
import DropdownMultiple from "../../components/DropdownMultiple";
import ProductItem from "../../components/ProductItem";
import Newsletter from "../../components/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../../redux/search";
import { useLocation } from "react-router-dom";
const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Tìm kiếm",
    url: "/search",
  },
  {
    title: "Kết quả tìm kiếm",
  },
];

const colorOptions = ["Đỏ", "Xanh", "Xanh dương", "Đen"];
const categoryOptions = ["Đồ mới", "Đồ sale", "Đồ cắm trại"];
const priceOptions = ["$0 - $10", "$10 - $50", "$50 +"];

function Search() {
  const [color, setColor] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  useEffect(() => {
    if (name) {
      dispatch(searchAction.searchProduct(name));
    }
  }, [name]);
  const { products } = useSelector((state) => state.search);
  useEffect(() => {
    setTags([...color, ...category, ...price]);
  }, [color, category, price]);
  return (
    <>
      <Breadcrumbs className={styles.breadcrumbs} value={breadcrumbs} />
      <div className={cn("section", styles.category)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Kết quả tìm kiếm</div>
          <h2 className={cn("title title_mb-md")}>
            {name} <br />
          </h2>

          <div className={styles.result}>
            <span className={styles.counter}>{products.length}</span> các sản phẩm tìm thấy
          </div>

          <Filters tags={tags} setTags={setTags}>
            <DropdownMultiple
              title="Color"
              value={color}
              setValue={setColor}
              options={colorOptions}
            />
            <DropdownMultiple
              title="Category"
              value={category}
              setValue={setCategory}
              options={categoryOptions}
            />
            <DropdownMultiple
              title="Price Range"
              value={price}
              setValue={setPrice}
              options={priceOptions}
            />
          </Filters>

          <div className={styles.list}>
            {products.map((x, i) => (
              <ProductItem className={styles.product} item={x} key={i} />
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Search;
