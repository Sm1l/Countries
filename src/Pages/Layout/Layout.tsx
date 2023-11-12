import React from "react";

import { Header } from "../../components/Header";
import { Outlet } from "react-router";
import styles from "./Layout.module.scss";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
