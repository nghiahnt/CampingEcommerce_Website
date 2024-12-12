import React, { useState, useEffect } from "react";
import cn from "classnames";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Category.module.sass";
import Filters from "../../components/Filters";
import DropdownMultiple from "../../components/DropdownMultiple";
import ProductItem from "../../components/ProductItem";
import Newsletter from "../../components/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categoryAction } from "../../redux/category";
const breadcrumbs = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Chuyển hướng",
    url: "/category",
  },
  {
    title: "Danh mục",
  },
];

const colorOptions = ["Đỏ", "Xanh", "Xanh dương", "Đen"];
const categoryOptions = ["Mới nhất", "Hót nhất", "Mua nhiều nhất"];
const priceOptions = ["0 - 10.000 VNĐ", "$10.000 - 50.000 VNĐ", "50.00 VNĐ +"];

function Category() {
  const [color, setColor] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    setTags([...color, ...category, ...price]);
  }, [color, category, price]);
  useEffect(() => {
    const getProductFromCategory = async () => {
      dispatch(categoryAction.getProductOfCategory(id));
    };
    getProductFromCategory();
  }, [id]);
  const { products } = useSelector((state) => state.category);
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section", styles.category)}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Danh mục sản phẩm</div>
          <h2 className={cn("title title_mb-lg")}>
            {products.TITLE} <br />
          </h2>

          <Filters tags={tags} setTags={setTags}>
            <DropdownMultiple
              title="Màu"
              value={color}
              setValue={setColor}
              options={colorOptions}
            />
            <DropdownMultiple
              title="Danh mục"
              value={category}
              setValue={setCategory}
              options={categoryOptions}
            />
            <DropdownMultiple
              title="Khoảng giá"
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

export default Category;
