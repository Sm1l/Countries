import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <h1 className={styles.title}>Where in the world?</h1>
        </Link>
        <div className={styles.theme} onClick={toggleTheme}>
          {theme === "light" ? <IoMoon size="20px" /> : <IoSunny size="20px" />}
          <p className={styles.text}>{theme} mode</p>
        </div>
      </div>
    </header>
  );
};

export { Header };
