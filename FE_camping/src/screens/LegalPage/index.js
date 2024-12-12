import React from "react";
import cn from "classnames";
import styles from "./LegalPage.module.sass";
import Breadcrumbs from "../../components/Breadcrumbs";
import DropdownBox from "../../components/DropdownBox";

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
    title: "Terms and Conditions",
  },
];

const items = [
  {
    category: "1. Introduction",
    items: [
      {
        title: "1.1 Our Terms & Conditions",
        text: "Here you can put any text that you think would be suitable and relevant to this particular section of the website.",
      },
      {
        title: "1.2 Collection of personal data",
        text: "This place is reserved for you to put some text content that you think would make sense here.",
      },
      {
        title: "1.3 Purpose of collection of personal data",
        text: "Here you can put any text that you think would be suitable and relevant to this particular section of the website.",
      },
      {
        title: "1.4 Usage of your personal data",
        text: "Here you can put any text that you think would be suitable and relevant to this particular section of the website.",
      },
    ],
  },
  {
    category: "2. Payment Terms",
    items: [
      {
        title: "2.1 Different payment methods on our website",
        text: "Just put any text here that would be suitable for this particular section of the website.",
      },
      {
        title: "2.2 Our right to cancel your payment",
        text: "Just put any text here that would be suitable for this particular section of the website.",
      },
    ],
  },
  {
    category: "3. Orders",
    items: [
      {
        title: "3.1 Order processing on our website",
        text: "All you need to do is to put your own text here and that is going to be it, all done. This section can be used for really long pieces of text that explain a lot of small details that are required.",
      },
      {
        title: "3.2 Dispatch and shipping times for different types of orders",
        text: "All you need to do is to put your own text here and that is going to be it, all done. This section can be used for really long pieces of text that explain a lot of small details that are required.",
      },
      {
        title: "3.3 Return and refund policies for all online orders",
        text: "All you need to do is to put your own text here and that is going to be it, all done. This section can be used for really long pieces of text that explain a lot of small details that are required.",
      },
    ],
  },
  {
    category: "4. Changes",
    items: [
      {
        title: "4.1 Our right to change Terms & Conditions",
        text: "This place is reserved for you to put some text content that you think would make sense here.",
      },
      {
        title: "4.2 Notice of change in Terms & Conditions",
        text: "This place is reserved for you to put some text content that you think would make sense here.",
      },
    ],
  },
];

function LegalPage() {
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Legal</div>
          <h2 className={cn("title title_mb-lg", styles.title)}>
            Hygge - Terms and <br />
            Conditions
          </h2>
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
    </>
  );
}

export default LegalPage;
