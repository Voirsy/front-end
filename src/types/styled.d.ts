import 'styled-components';
import { Breakpoints } from './breakpoints.interface';
import { Categories, GrayColors, BlueOutline, Dark, Black, Purple } from './colors.interface';
import { Fonts } from './fonts.interface';

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
    breakpoints: Breakpoints;
    fonts: Fonts;
  }
}
