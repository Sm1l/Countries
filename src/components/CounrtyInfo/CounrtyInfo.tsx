import React, { useEffect, useState } from "react";

import { NavigateFunction } from "react-router";
import { TSingleCountry } from "../../Types/types";
import styles from "./CounrtyInfo.module.scss";
import { searchByCode } from "../../api/api";

interface CounrtyInfoProps {
  country: TSingleCountry;
  navigate: NavigateFunction;
}

const CounrtyInfo: React.FC<CounrtyInfoProps> = ({ country, navigate }) => {
  console.log(country);

  const [neighbors, setNeighbors] = useState<string[]>();
  console.log(neighbors);

  const getNeighbors = async () => {
    try {
      if (country.borders) {
        const response = await fetch(searchByCode(country.borders));

        const data: TSingleCountry[] = await response.json();
        setNeighbors(data.map((c) => c.name.common));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("Ошибка:", error.message);
      }
    }
  };

  useEffect(() => {
    getNeighbors();
  }, [country]);

  const renderCurrencies = () => {
    if (country.currencies) {
      return Object.keys(country.currencies).map((currencyCode) => {
        const currency = country.currencies[currencyCode];
        return currency.name;
      });
    } else return [];
  };

  const renderFirstNativeName = () => {
    if (country.name.nativeName) {
      const firstValue = Object.values(country.name.nativeName)[0];
      return <span>{firstValue.official}</span>;
    } else return [];
  };

  const renderLanguages = () => {
    if (country.languages) {
      return Object.keys(country.languages).map((key) => {
        const language = country.languages[key];
        return language;
      });
    } else return [];
  };

  const renderTLDs = () => {
    if (country.tld) {
      return country?.tld?.map((tld) => tld);
    } else return [];
  };

  return (
    <div className={styles.counrtyInfo}>
      <div className={styles.counrtyInfoContainer}>
        <div className={styles.flagContainer}>
          <img className={styles.img} src={country.flags.svg} alt={country.flags.alt} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{country.name.common}</h1>
          <div className={styles.listsContainer}>
            <ul className={styles.list}>
              <li>
                <b>Native Name: </b>
                {renderFirstNativeName()}
              </li>
              <li>
                <b>Population: </b>
                {country.population.toLocaleString()}
              </li>
              <li>
                <b>Region: </b>
                {country.region}
              </li>
              <li>
                <b>Sub Region: </b>
                {country.subregion}
              </li>
              <li>
                <b>Capital: </b>
                {country?.capital?.map((c) => <span key={c}>{c} </span>)}
              </li>
            </ul>
            <ul className={styles.list}>
              <li>
                <b>Top Level Domain: </b>
                {renderTLDs().join(", ")}
              </li>
              <li>
                <b>Currencies: </b>
                {renderCurrencies().join(", ")}
              </li>
              <li>
                <b>Languages: </b>
                {renderLanguages().join(", ")}
              </li>
            </ul>
          </div>
          <div className={styles.borderCountriesContainer}>
            <b>Border Countries:</b>
            <div className={styles.buttonsContainer}>
              {neighbors?.map((n) => (
                <button className={styles.button} key={n} onClick={() => navigate(`/country/${n}`)}>
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CounrtyInfo };
