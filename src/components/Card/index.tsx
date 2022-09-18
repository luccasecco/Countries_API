import { useEffect, useState } from "react";
import { Buildings, Globe, MapTrifold, HandPalm } from 'phosphor-react'

import { api } from "../../services/api";

import { CardContainer } from "./styles";

interface ICountriesProps {
  name: {
    common: string,
    official: string
  },
  capital: string,
  region: string,
  independent: boolean,
  area: number,
  flags: {
    png: string,
  },
}

export function Card() {
  const [countries, setCountries] = useState<ICountriesProps[]>([])

  console.log(countries)

  useEffect(() => {
    api.get('/all').then(response => setCountries(response.data))
  }, [])

  return (
    <>
      {countries.map(countrie => {
        return (
          <CardContainer>
            <img src={countrie.flags.png} alt="" />
            <h1>{countrie.name.common}</h1>
            <div className="card-content">
              <p><Globe /><strong>Region:</strong> {countrie.region}</p>
              <p><Buildings /> <strong>Capital:</strong> {countrie.capital}</p>
              <p><MapTrifold /><strong>Land area:</strong> {countrie.area} km²</p>
              <p><HandPalm /><strong>Independet:</strong> {countrie.independent === true ? "Yes" : "No"}</p>
            </div>
          </CardContainer>
        )
      })}

    </>
  )
}