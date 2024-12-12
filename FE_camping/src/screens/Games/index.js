import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Games.module.sass";
import { Link } from "react-router-dom";

const breadcrumbs = [
  {
    title: "Home page",
    url: "/",
  },
  {
    title: "Games",
  },
];

const gamesData = [
  {
    title: "Nhau Dau Nhau Day",
    image: "/images/games/nhau_dau_nhau_day.png",
    url: "/games/nhau_dau_nhau_day",
  },
  {
    title: "Merge Fruit",
    image: "/images/games/merge_fruit.png",
    url: "/games/merge_fruit",
  },
  {
    title: "Giai Ma",
    image: "/images/games/giai_ma.png",
    url: "/games/giai_ma",
  },
];

function Games() {
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />

      <div className={styles.list}>
        {gamesData.map((game, index) => (
          <div key={index} className={styles.game_card}>
            <img
              src={game.image}
              alt={game.title}
              className={styles.game_image}
            />
            <h3 className={styles.game_title}>{game.title}</h3>
            {/* Use the "to" prop instead of "href" for Link */}
            <Link to={game.url} className={styles.play_button}>
              Play
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Games;
