import React, { createContext, useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import styles from "./App.module.scss";
import { HomePage } from "./Pages/HomePage";
import { Layout } from "./Pages/Layout";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { SingleCountryPage } from "./Pages/SingleCountryPage";
import { TAllCountriesMini } from "./Types/types";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="country/:name" element={<SingleCountryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

interface IAppContext {
  allCountries: TAllCountriesMini;
  setAllCountries: React.Dispatch<React.SetStateAction<TAllCountriesMini>>;
}

export const AppContext = createContext<IAppContext>({ allCountries: [], setAllCountries: () => {} });

interface MainProps {}

const App: React.FC<MainProps> = () => {
  const [allCountries, setAllCountries] = useState<TAllCountriesMini>([]);

  return (
    <div className={styles.app}>
      <AppContext.Provider value={{ allCountries, setAllCountries }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
};

export { App };
