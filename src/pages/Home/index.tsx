import { MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from "react"

import { Card } from "../../components/Card"
import { ICountriesProps } from "../../interfaces"
import { api } from '../../services/api'

import { Container, Content } from "./styles"

export function Home() {
  const [countries, setCountries] = useState<ICountriesProps[]>([])
  const [countrySearch, setCountrySearch] = useState<ICountriesProps[]>([])

  useEffect(() => {
    api.get('/all').then(response => setCountries(response.data))
  }, [countries, countrySearch])

  function handleSearchCountryByName(event: any) {
    event.preventDefault()

    const result = countries.filter(item => item.name?.common.includes(event.target.value))
    setCountrySearch(result)
  }

  return (
    <Content>
      <label htmlFor="search-country">
        <MagnifyingGlass size={20} />
        <input
          name="search-country"
          type="text" placeholder="Search for a country..."
          onChange={handleSearchCountryByName}
        />
      </label>
      <Container>
        {countrySearch.length === 0 ? countries.map((country) => {
          return (
            <Card
              key={country.id}
              flags={country.flags}
              name={country.name}
              region={country.region}
              capital={country.capital}
              area={country.area}
              independent={country.independent}
            />
          )
        }) : countrySearch.map(item => {
          return (
            <Card
              key={item.id}
              flags={item.flags}
              name={item.name}
              region={item.region}
              capital={item.capital}
              area={item.area}
              independent={item.independent}
            />
          )
        })}
      </Container>
    </Content>

  )
}