import React from "react";

import { useNavigate } from "react-router";
import { CardMini } from "../CardMini";
import { TAllCountriesMini } from "../../Types/types";
import styles from "./CardContainer.module.scss";

interface CardContainerProps {
  allCountries: TAllCountriesMini;
}

const CardContainer: React.FC<CardContainerProps> = ({ allCountries }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardContainer}>
      {allCountries.map((c) => (
        <CardMini
          key={c.name.official}
          onClick={() => {
            navigate(`/country/${c.name.common}`);
          }}
          name={c.name.common}
          img={c.flags.png}
          capital={c.capital[0]}
          population={c.population}
          region={c.region}
        />
      ))}
    </div>
  );
};

export { CardContainer };
