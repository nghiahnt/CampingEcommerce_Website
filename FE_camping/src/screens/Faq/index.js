import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Breadcrumbs from "../../components/Breadcrumbs";
import DropdownBox from "../../components/DropdownBox";
import DropdownSelect from "../../components/DropdownSelect";
import Filters from "../../components/Filters";
import Newsletter from "../../components/Newsletter";

const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: " Categories",
    url: "/Category",
  },
  {
    title: " FAQ Page",
  },
];

const items = [
  {
    category: "General",
    items: [
      {
        title: "1. How do I place an order on your website?",
        text: "All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods. ",
      },
      {
        title: "2. What is your return policy?",
        text: "All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods. ",
      },
      {
        title: "3. Do you offer an option to send a product as a gift?",
        text: "All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods. ",
      },
    ],
  },
  {
    category: "Checkout",
    items: [
      {
        title: "1. What payment methods do you accept?",
        text: "All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.",
      },
      {
        title: "2. Do you offer an option to pay for the product over time?",
        text: "Yes, we do. We have partnered with a few companies that offer such option.",
      },
    ],
  },
  {
    category: "Shipping",
    items: [
      {
        title: "1. Do I have to pay for the shipping?",
        text: "Yes, we do. We have partnered with a few companies that offer such option.",
      },
      {
        title: "2. How long does it take for you to dispatch my order?",
        text: "Yes, we do. We have partnered with a few companies that offer such option.",
      },
      {
        title: "3. What shipping company do you use?",
        text: "Yes, we do. We have partnered with a few companies that offer such option.",
      },
      {
        title: "4. How long does it usually take for my order to arrive?",
        text: "Yes, we do. We have partnered with a few companies that offer such option.",
      },
    ],
  },
  {
    category: "Discounts",
    items: [
      {
        title: "1. Do you offer any discounts on your website?",
        text: "Yes, we do. We have partnered with a few companies that offer such option.",
      },
    ],
  },
  {
    category: "Other",
    items: [
      {
        title: "1. Where can I find the reviews?",
        text: "Please visit our reviews page to find out more about that.",
      },
      {
        title: "2. How do I contact you?",
        text: "Yes, we do. We have partnered with a few companies that offer such option.",
      },
    ],
  },
];

const topicOptions = ["Topic", "Topic By 01", "Topic By 02"];
const categoryOptions = ["Category", "Sort By 01", "Sort By 02"];

function Faq() {
  const [topic, setTopic] = useState(topicOptions[0]);
  const [category, setCategory] = useState(categoryOptions[0]);

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Find the Answers</div>
          <h2 className={cn("title title_mb-lg", styles.title)}>
            Frequently Asked <br />
            Questions
          </h2>
          <Filters>
            <DropdownSelect value={topic} setValue={setTopic} options={topicOptions} />
            <DropdownSelect value={category} setValue={setCategory} options={categoryOptions} />
          </Filters>
          <div className={styles.container}>
            {items.map((x, i) => (
              <div className={styles.section} key={i}>
                <div className={styles.category}>{x.category}</div>
                <div className={styles.list}>
                  {x.items.map((a, c) => (
                    <DropdownBox className={styles.item} value={a} key={c} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Faq;
