import { MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from "react"

import { Card } from "../../components/Card"
import { ICountriesProps } from "../../interfaces"
import { api } from '../../services/api'

import { Container, Content } from "./styles"

export function Home() {
  const [countries, setCountries] = useState<ICountriesProps[]>([])
  const [countrySearch, setCountrySearch] = useState<ICountriesProps[]>([])
  const [countrySearchByRegion, setCountrySearchByRegion] = useState<ICountriesProps[]>([])

  useEffect(() => {
    api.get('/all').then(response => setCountries(response.data))
  }, [countries, countrySearch])

  function handleSearchCountryByName(event: any) {
    event.preventDefault()

    const result = countries.filter(item => item.name?.common.includes(event.target.value))
    setCountrySearch(result)
  }

  function handleFilterCountriesByRegion(event: any) {
    event.preventDefault()

    const result = countries.filter(item => item.region === event.target.value)
    setCountrySearchByRegion(result)
  }

  const arr = countries.map(country => country.region)
  const filteredArr = arr.filter((item, i) => arr.indexOf(item) === i)

  return (
    <Content>
      <div className="search-box">
        <label htmlFor="search-country">
          <MagnifyingGlass size={20} />
          <input
            name="search-country"
            type="text" placeholder="Search for a country..."
            onChange={handleSearchCountryByName}
          />
        </label>

        <select
          name="country"
          id="country"
          onChange={handleFilterCountriesByRegion}
        >
          <option value="">
            Search by region
          </option>

          {filteredArr.map(item => {
            return <option
              key={item}
            >
              {item}
            </option>
          })}

        </select>
      </div>
      <Container>
        {countrySearch.length === 0 && countrySearchByRegion.length === 0 ? countries.map((country) => {
          return (
            <Card
              key={country.name.common}
              flags={country.flags}
              name={country.name}
              region={country.region}
              capital={country.capital}
              area={country.area}
              independent={country.independent}
            />
          )
        }) : countrySearchByRegion.length === 0 ? countrySearch.map(item => {
          return (
            <Card
              key={item.name.common}
              flags={item.flags}
              name={item.name}
              region={item.region}
              capital={item.capital}
              area={item.area}
              independent={item.independent}
            />
          )
        }) : countrySearchByRegion.map(countryByRegion => {
          return (
            <Card
              key={countryByRegion.name.common}
              flags={countryByRegion.flags}
              name={countryByRegion.name}
              region={countryByRegion.region}
              capital={countryByRegion.capital}
              area={countryByRegion.area}
              independent={countryByRegion.independent}
            />
          )
        })}
      </Container>
    </Content>

  )
}