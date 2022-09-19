import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

