import React from "react";

import styles from "./Search.module.scss";
import { IoSearch } from "react-icons/io5";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <label className={styles.searchLabel}>
        <IoSearch />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for a country..."
          autoComplete="off"
          onChange={handleChange}
          value={search}
        />
      </label>
    </div>
  );
};

export { Search };
