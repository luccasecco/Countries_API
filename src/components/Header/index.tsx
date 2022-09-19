import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'

import { Container } from "./styles";

interface Props {
  toggleTheme: () => void
}

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext)


  return (
    <Container>
      <NavLink to="/">
        <h1>Where in the World?</h1>
      </NavLink>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#323232"
        onColor={colors.secundary}
      />
    </Container>
  )
}