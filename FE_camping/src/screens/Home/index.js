import React from "react";
import Main from "./Main";
import Categories from "./Categories";
import Products from "./Products";
import About from "./About";
import Review from "../../components/Review";
import Blog from "./Blog";
import Newsletter from "../../components/Newsletter";

function Home() {
  return (
    <>
      <Main />
      <Categories />
      <Products />
      <About />
      <Review stage="- Đánh giá về chúng tôi" />
      <Blog />
      <Newsletter />
    </>
  );
}

export default Home;
