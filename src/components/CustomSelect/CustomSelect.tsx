import React from "react";
import Select from "react-select";

import { TOptionsRegion } from "../Controls";
import styles from "./CustomSelect.module.scss";

interface CustomSelectProps {
  options: TOptionsRegion[];
  placeholder: string;
  isClearable: boolean;
  isSearchable: boolean;
  value: TOptionsRegion | undefined;
  onChange: any; //?
}

const CustomSelect: React.FC<CustomSelectProps> = ({ ...props }) => {
  return (
    <Select
      {...props}
      className={styles.customSelect}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "grey" : "red",
          color: "var(--colorText)",
          backgroundColor: "var(--colorElements)",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow)",
          padding: "0.5rem 0",
          border: "none",
          cursor: "pointer",
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: "pointer",
          color: "var(--colorText)",
          backgroundColor: state.isSelected ? "var(--colorBg)" : "var(--colorElements)",
        }),
      }}
    />
  );
};

export { CustomSelect };
