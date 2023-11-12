export const BASE_URL = "https://restcountries.com/v3.1/";

export const GET_ALL_COUNTRIES_URL = BASE_URL + "all?fields=name,flags,capital,population,region";

export const searchByCountry = (name: string) => BASE_URL + "name/" + name;

export const searchByCode = (codes: string[]) => BASE_URL + "alpha?codes=" + codes.join(",");
