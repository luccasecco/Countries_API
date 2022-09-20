import { MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from "react"

import { Card } from "../../components/Card"
import { Loading } from '../../components/Loader'
import { ICountriesProps } from "../../interfaces"
import { api } from '../../services/api'

import { Container, Content } from "./styles"

export function Home() {
  const [countries, setCountries] = useState<ICountriesProps[]>([])
  const [countrySearch, setCountrySearch] = useState<ICountriesProps[]>([])
  const [countrySearchByRegion, setCountrySearchByRegion] = useState<ICountriesProps[]>([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getContries = async () => {
      try {
        const res = await api.get('/all')

        if (!res) throw new Error("Could not found!");

        const data = await res.data
        setCountries(data)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error)
      }
    }

    getContries()
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
        {isLoading && <Loading />}
        {countrySearch.length === 0 && countrySearchByRegion.length === 0 ? countries.map((country) => {
          return (
            <Card
              key={country.name.common}
              flags={country.flags}
              name={country.name}
              region={country.region ? country.region : 'not apply'}
              capital={country.capital ? country.capital : 'not apply'}
              area={country.area ? country.area : 0}
              independent={country.independent}
            />
          )
        }) : countrySearchByRegion.length === 0 ? countrySearch.map(item => {
          return (
            <Card
              key={item.name.common}
              flags={item.flags}
              name={item.name}
              region={item.region ? item.region : 'not apply'}
              capital={item.capital ? item.capital : 'not apply'}
              area={item.area ? item.area : 0}
              independent={item.independent}
            />
          )
        }) : countrySearchByRegion.map(countryByRegion => {
          return (
            <Card
              key={countryByRegion.name.common}
              flags={countryByRegion.flags}
              name={countryByRegion.name}
              region={countryByRegion.region ? countryByRegion.region : 'not apply'}
              capital={countryByRegion.capital ? countryByRegion.capital : 'not apply'}
              area={countryByRegion.area ? countryByRegion.area : 0}
              independent={countryByRegion.independent}
            />
          )
        })}
      </Container>
    </Content>

  )
}