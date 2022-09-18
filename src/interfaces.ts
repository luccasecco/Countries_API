export interface ICountriesProps {
  id?: string;
  name: {
    common: string;
  },
  capital: string,
  region: string,
  independent: boolean,
  area: number,
  flags: {
    png: string,
  },
}