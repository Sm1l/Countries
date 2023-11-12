import React, { useState, useEffect } from "react";

import styles from "./Controls.module.scss";
import { Search } from "../Search";
import { CustomSelect } from "../CustomSelect";
import { TRegion } from "../../Types/types";

export type TOptionsRegion = {
  value: TRegion;
  label: string;
};

const options: TOptionsRegion[] = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

interface ControlsProps {
  onSearch: (search: string, region: TRegion | "") => void;
}

const Controls: React.FC<ControlsProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<TOptionsRegion>();

  useEffect(() => {
    const regionValue: TRegion | "" = region?.value || "";

    onSearch(search, regionValue);
    //eslint-disable-next-line
  }, [region, search]);

  return (
    <div className={styles.controls}>
      <div className={styles.controlsContainer}>
        <Search search={search} setSearch={setSearch} />
        <CustomSelect
          options={options}
          placeholder="Filter by Region"
          isClearable
          isSearchable={false}
          value={region}
          onChange={setRegion}
        />
      </div>
    </div>
  );
};

export { Controls };
