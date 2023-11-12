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
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

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
          {theme === "light" ? <IoSunny size="20px" /> : <IoMoon size="20px" />}
          <p className={styles.text}>{theme} mode</p>
        </div>
      </div>
    </header>
  );
};

export { Header };
