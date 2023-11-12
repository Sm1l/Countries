import React from "react";

import styles from "./Card.module.scss";

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}></div>
    </div>
  );
};

export { Card };
