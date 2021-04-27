import 'styled-components';
import { Breakpoints } from './breakpoints.interface';
import { Categories, GrayColors, BlueOutline, Dark, Black, Purple, Red } from './colors.interface';
import { Fonts } from './fonts.interface';
import { Sizes } from './sizes.interface';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: Black;
      white: string;
      background: string;
      purple: Purple;
      red: Red;
      social: string;
      dark: Dark;
      blueOutline: BlueOutline;
      categories: Categories;
      grayColors: GrayColors;
    };
    breakpoints: Breakpoints;
    fonts: Fonts;
    sizes: Sizes;
  }
}
