import React from "react";
import cn from "classnames";
import styles from "./Sitemap.module.sass";

function Sitemap() {
  return (
    <div className={cn("section")}>
      <div className={cn("center")}>
        <h2 className={cn("title title_mb-lg")}>Sitemap</h2>

        <ul className={styles.list}>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/careers-page">Careers</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/category">Category</a>
          </li>
          <li>
            <a href="/checkout">Checkout</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/legal-page">Legal Page</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
          <li>
            <a href="/sign-up">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sitemap;
