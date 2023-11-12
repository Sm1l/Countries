export type TCountryMini = {
  capital: string[];
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: number;
  region: string;
};
export type TAllCountriesMini = TCountryMini[];

export type TRegion = "africa" | "america" | "asia" | "europe" | "oceania";

export type TSingleCountry = {
  borders: string[];
  capital: string[];
  currencies: { [currencyCode: string]: { name: string; symbol: string } };
  flags: { png: string; svg: string; alt: string };
  languages: { [key: string]: string };
  name: { common: string; official: string; nativeName: { [key: string]: { official: string; common: string } } };
  population: number;
  region: string;
  tld: string[];
  subregion: string;
};
