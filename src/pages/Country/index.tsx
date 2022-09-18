import { useParams } from "react-router-dom";
import useSWR from 'swr'
import { ICountriesProps } from "../../interfaces";
import { api } from "../../services/api";

import { Container } from "./styles";

async function fetchCountry(key: string): Promise<ICountriesProps> {
  const name = key

  const { data } = await api.get<ICountriesProps>(`/name/${name}`)

  return {
    name: {
      common: data.name.common,
    },
    capital: data.capital,
    region: data.region,
    independent: data.independent,
    area: data.area,
    flags: {
      png: data.flags.png,
    }
  }
}

export function Country() {
  const { name } = useParams()
  const { data } = useSWR(`${name}`, fetchCountry)

  return (
    <Container>

      Selected Country

      <p>{data?.name.common}</p>
      <p>{data?.region}</p>

    </Container>
  )
}