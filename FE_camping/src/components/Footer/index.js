import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import SocialLinks from "../SocialLinks";
import Theme from "../Theme";
import Image from "../Image";

const nav = [
  {
    category: "Danh mục",
    menu: [
      {
        url: "/category",
        title: "Túi",
      },
      {
        url: "/category",
        title: "Xe đạp",
      },
      {
        url: "/category",
        title: "Đồ điện",
      },
      {
        url: "/category",
        title: "Nước",
      },
      {
        url: "/category",
        title: "Phong cách",
      },
      {
        url: "/category",
        title: "Dao",
      },
      {
        url: "/category",
        title: "Giày",
      },
      {
        url: "/category",
        title: "Lều",
      },
    ],
  },
  {
    category: "Chính sách",
    menu: [
      {
        url: "/legal-page",
        title: "Điều khoản dịch vụ",
      },
      {
        url: "/legal-page",
        title: "Chính sách bảo mật",
      },
      {
        url: "/legal-page",
        title: "Chính sách hoàn trả",
      },
      {
        url: "/legal-page",
        title: "Shipping",
      },
      {
        url: "/legal-page",
        title: "Bảo mật khách hàng",
      },
    ],
  },
  {
    category: "Công ty",
    menu: [
      {
        url: "/about",
        title: "Về chúng tôi",
      },
      {
        url: "/faq",
        title: "Câu hỏi",
      },
      {
        url: "/contacts",
        title: "Liên lạc",
      },
      {
        url: "/careers-page",
        title: "Nghề nghiệp",
      },
      {
        url: "/",
        title: "Tầm nhìn",
      },
      {
        url: "/",
        title: "Văn hóa",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cn("center", styles.center)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image className={styles.logo_desktop} src="/images/logo.svg" srcDark="/images/logo-white.svg" />
              <Image className={styles.logo_mobile} src="/images/logo-mobile.svg" srcDark="/images/logo-mobile-white.svg" />
            </Link>

            <div className={styles.copyright}>© 2023 - Đào Hải Pro Vip</div>
            <SocialLinks position={"footer"} />

            <Theme />
          </div>

          {nav.map((x, i) => (
            <div className={styles.col} key={i}>
              <div className={styles.category}>{x.category}</div>
              <div className={styles.menu}>
                {x.menu.map((s, a) => (
                  <Link className={styles.link} to={s.url} key={a}>
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
