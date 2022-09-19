import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    }
  }
}