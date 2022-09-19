import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme['dark']}
  }

  body, input, textarea, button, select{
    font-family: 'Poppins', sans-serif;
  }

  `
