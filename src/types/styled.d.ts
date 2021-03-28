import 'styled-components';
import { Categories, GrayColors, BlueOutline, Dark, Black, Purple } from './colors.interface';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: Black;
      white: string;
      background: string;
      purple: Purple;
      red: string;
      social: string;
      dark: Dark;
      blueOutline: BlueOutline;
      categories: Categories;
      grayColors: GrayColors;
    };
  }
}
