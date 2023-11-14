import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../App";
import { TAllCountriesMini } from "../../Types/types";
import { GET_ALL_COUNTRIES_URL } from "../../api/api";
import { CardContainer } from "../../components/CardContainer";
import { Controls } from "../../components/Controls";
import { TRegion } from "../../Types/types";
import { ScrollRestoration } from "react-router-dom";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { allCountries, setAllCountries } = useContext(AppContext);

  const [allFilteredCountries, setAllFilteredCountries] = useState<TAllCountriesMini>(allCountries); //?не работает начальное

  useEffect(() => {
    setAllFilteredCountries(allCountries);
  }, [allCountries]);

  const getAllCountries = async () => {
    try {
      const response = await fetch(GET_ALL_COUNTRIES_URL);
      const data = await response.json();
      setAllCountries(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Ошибка:", error.message);
      }
    }
  };

  useEffect(() => {
    if (!allCountries.length) {
      getAllCountries();
    }
  }, []);

  const handleSearch = (search: string, region: TRegion | "") => {
    let data: TAllCountriesMini = [...allCountries];

    if (region) {
      data = data.filter((c) => c.region.toLowerCase().includes(region));
    }
    if (search) {
      data = data.filter((c) => c.name.official.toLowerCase().includes(search.toLocaleLowerCase()));
    }

    setAllFilteredCountries(data);
  };

  return (
    <>
      <Controls onSearch={handleSearch} />
      {allCountries.length > 0 && <CardContainer allCountries={allFilteredCountries} />}
      <ScrollRestoration />
    </>
  );
};

export { HomePage };
