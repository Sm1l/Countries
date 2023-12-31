import React from "react";

import styles from "./NotFoundPage.module.scss";
import { Link, ScrollRestoration } from "react-router-dom";

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className={styles.notFoundPage}>
      <h2>Page not found</h2>
      <Link className={styles.button} to="/">
        Home Page
      </Link>
      <ScrollRestoration />
    </div>
  );
};

export { NotFoundPage };
