import React, { useState } from "react";
import cn from "classnames";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import DropdownSelect from "../../components/DropdownSelect";
import Breadcrumbs from "../../components/Breadcrumbs";
import Newsletter from "../../components/Newsletter";
import styles from "./Contacts.module.sass";

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
    title: "Contact Us",
  },
];

const items = [
  {
    category: "Dịch vụ Khách hàng",
    text: 'Vui lòng gửi email cho chúng tôi tại <a href="mailto:customercare@hygge.com">customercare@hygge.com</a>',
  },
  {
    category: "Quan hệ Công chúng",
    text: 'Bạn có thể liên hệ với đội ngũ truyền thông của chúng tôi bằng cách gửi email tới <a href="mailto:media@hygge.com">media@hygge.com</a>',
  },
  {
    category: "Đơn Đặt hàng Lớn",
    text: 'Nếu bạn đang nghĩ đến việc đặt hàng rất lớn, hãy liên hệ với chúng tôi tại <a href="mailto:sales@hygge.com">sales@hygge.com</a> và chúng tôi sẽ đưa ra ưu đãi đặc biệt cho bạn',
  },
  {
    category: "Các Thắc mắc Khác",
    text: 'Đối với tất cả các câu hỏi khác, vui lòng gửi email cho chúng tôi tại <a href="mailto:general@hygge.com">general@hygge.com</a>',
  },
];

const subjectOptions = ["địa danh", "Sản phẩm", "Kỹ Năng"];

function Contacts() {
  const [subject, setSubject] = useState(subjectOptions[0]);
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Câu hỏi</div>
            <h2 className={cn("title", styles.title)}>
              Chúng tôi luôn ở đây <br />
              giúp đỡ bạn
            </h2>
            <div className={styles.list}>
              {items.map((x, i) => (
                <div className={styles.item} key={i}>
                  <div className={styles.category}>{x.category}</div>
                  <div className={styles.text} dangerouslySetInnerHTML={{ __html: x.text }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={cn("center", styles.center)}>
            <div className={styles.row}>
              <div className={styles.wrap}>
                <div className={cn("stage")}>- Reach Out to Us</div>
                <h2 className={cn("title", styles.title)}>Please fill out the contact form</h2>
              </div>
              <div className={styles.form}>
                <TextInput className={styles.field} label="Full Name" name="name" type="text" />
                <TextInput className={styles.field} label="Email Address" name="address" type="email" />
                <DropdownSelect className={cn(styles.field, "wide")} label="Subject" value={subject} setValue={setSubject} options={subjectOptions} />
                <TextArea className={styles.field} label="Message" name="message" />
                <button className={cn("button button-green", styles.button)}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default Contacts;
