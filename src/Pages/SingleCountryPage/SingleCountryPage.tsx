import React, { useState, useEffect } from "react";

import styles from "./SingleCountryPage.module.scss";
import { useParams, useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../../api/api";
import { Button } from "../../components/Button";
import { TSingleCountry } from "../../Types/types";
import { CounrtyInfo } from "../../components/CounrtyInfo";
import { ScrollRestoration } from "react-router-dom";

interface SingleCountryPageProps {}

const SingleCountryPage: React.FC<SingleCountryPageProps> = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<TSingleCountry>();

  const getCountry = async () => {
    try {
      if (name) {
        const response = await fetch(searchByCountry(name));
        const data = await response.json();
        setCountry(data[0]);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log("Ошибка:", error.message);
      }
    }
  };

  useEffect(() => {
    getCountry();
  }, [name]);

  return (
    <div className={styles.singleCountryPage}>
      <div className={styles.singleCountryContainer}>
        <Button onClick={() => navigate(-1)}>
          <IoArrowBack />
          Back
        </Button>
        {country && <CounrtyInfo country={country} navigate={navigate} />}
        <ScrollRestoration />
      </div>
    </div>
  );
};

export { SingleCountryPage };
