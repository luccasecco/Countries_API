import { Buildings, Globe, MapTrifold, HandPalm } from 'phosphor-react'

import { CardContainer } from "./styles";
import { ICountriesProps } from "../../interfaces";
import { NavLink } from 'react-router-dom';

export function Card(props: ICountriesProps) {
  return (
    <CardContainer>
      <NavLink to={`/country/${props.name.common}`}>
        <img src={props?.flags?.png} alt="" />
        <h1>{props?.name?.common}</h1>
      </NavLink>
      <div className="card-content">
        <p><Globe /><strong>Region:</strong> {props.region}</p>
        <p><Buildings /> <strong>Capital:</strong> {props.capital}</p>
        <p><MapTrifold /><strong>Land area:</strong> {props.area} km²</p>
        <p><HandPalm /><strong>Independent:</strong> {props.independent === true ? "Yes" : "No"}</p>
      </div>
    </CardContainer>
  )
}