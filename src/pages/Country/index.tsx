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
  const [error, setError] = useState<string>("");
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
        {country ? country?.map(country => (
          <div className="content" key={country.name.common}>
            <img src={country.flags.svg} alt="" />
            <div className="text">
              <h1>{country.name.common}</h1>
              <p>Population: {new Intl.NumberFormat().format(country.population)}</p>
              <p>Region: <span>{country.region}</span></p>
              <p>Sub Region: <span>{country.subregion}</span></p>
              <p>Capital: <span>{country.capital}</span></p>
              <div className="border-countries-box">
                <p>Border Countries: {country.borders.map(border => (
                  <span key={border}>{border}</span>
                ))}</p>
              </div>
            </div>

          </div>
        )) : <h1>Something go wrong...</h1>}
      </Content>
    </Container>
  )
}