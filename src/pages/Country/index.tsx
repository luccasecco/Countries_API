import { ArrowArcLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Loading } from "../../components/Loader";

import { Container, Content } from "./styles";

interface CountrySelectedProps {
  name: {
    common: string;
  },
  population: number,
  region: string,
  subregion: string,
  capital: string,
  flags: {
    svg: string
  },
  borders: string[],
}


export function Country() {
  const { name } = useParams()
  const [country, setCountry] = useState<CountrySelectedProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>("");
  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await api.get(`/name/${name}`)

        if (!res) throw new Error("Could not found!");

        const data = await res.data

        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error)
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <Container>
      <div className="button-wrapper">
        <NavLink to="/"><ArrowArcLeft size={18} /> Back</NavLink>
      </div>

      <Content>
        {isLoading && !error && <Loading />}
        {country?.map(country => (
          <div className="content" key={country.name.common}>
            <img src={country.flags.svg} alt="" />
            <div className="text">
              <h1>{country.name.common ? country.name.common : 'not apply'}</h1>
              <p>Population: {new Intl.NumberFormat().format(country.population ? country.population : 0)}</p>
              <p>Region: <span>{country.region ? country.region : 'not apply'}</span></p>
              <p>Sub Region: <span>{country.subregion ? country.subregion : 'not apply'}</span></p>
              <p>Capital: <span>{country.capital ? country.capital : 'not apply'}</span></p>
              <div className="border-countries-box">
                <p>Border Countries: {country.borders ? country.borders.map(border => (
                  <span key={border}>{border}</span>
                )) : 'not apply'}</p>
              </div>
            </div>
          </div>
        ))}
      </Content>
    </Container>
  )
}