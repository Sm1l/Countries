import React from "react";

import styles from "./CardMini.module.scss";

interface CardMiniProps {
  name: string;
  img: string;
  population: number;
  region: string;
  capital: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const CardMini: React.FC<CardMiniProps> = ({ name, img, population, region, capital, onClick }) => {
  return (
    <div className={styles.cardMini} onClick={onClick}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img} alt={name} />
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.text}>
            <span className={styles.subtitle}>population: </span>
            {population}
          </p>
          <p className={styles.text}>
            <span className={styles.subtitle}>region: </span>
            {region}
          </p>
          <p className={styles.text}>
            <span className={styles.subtitle}>capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export { CardMini };
