import { DefaultTheme } from 'styled-components';
import hexToRgba from 'hex-rgba';

const theme: DefaultTheme = {
  colors: {
    black: {
      normal: '#000000',
      _010: hexToRgba('#000000', 10),
      _063: hexToRgba('#000000', 63),
      _087: hexToRgba('#000000', 87),
    },
    white: '#FFFFFF',
    background: '#FBFBFB',
    red: {
      normal: '#CC3333',
      _010: hexToRgba('#CC3333', 10),
      _080: hexToRgba('#CC3333', 80),
    },
    social: {
      normal: '#4285F4',
    },
    purple: {
      normal: '#7F4CD2',
      _005: hexToRgba('#7F4CD2', 5),
      _020: hexToRgba('#7F4CD2', 20),
      _050: hexToRgba('#7F4CD2', 50),
      _090: hexToRgba('#7F4CD2', 90),
    },
    dark: {
      normal: '#29292F',
      _063: hexToRgba('#29292F', 63),
      _087: hexToRgba('#29292F', 87),
    },
    blueOutline: {
      normal: '#E1E3ED',
      _025: hexToRgba('#E1E3ED', 25),
      _030: hexToRgba('#E1E3ED', 30),
      _050: hexToRgba('#E1E3ED', 50),
      _063: hexToRgba('#E1E3ED', 63),
      _087: hexToRgba('#E1E3ED', 87),
    },
    categories: {
      yellow: '#EFBD0B',
      yellow005: hexToRgba('#EFBD0B', 5),
      yellow050: hexToRgba('#EFBD0B', 50),
      yellow087: hexToRgba('#EFBD0B', 87),
      green: '#0BBF89',
      green005: hexToRgba('#0BBF89', 5),
      green050: hexToRgba('#0BBF89', 50),
      green087: hexToRgba('#0BBF89', 87),
      red: '#F23333',
      red005: hexToRgba('#F23333', 5),
      red050: hexToRgba('#F23333', 50),
      red087: hexToRgba('#F23333', 87),
      pink: '#EF0ECB',
      pink005: hexToRgba('#EF0ECB', 5),
      pink050: hexToRgba('#EF0ECB', 50),
      pink087: hexToRgba('#EF0ECB', 87),
    },
    grayColors: {
      dark: '#9C9DA3',
      normal: '#9C9DA3',
      dark020: hexToRgba('#9C9DA3', 20),
      dark035: hexToRgba('#9C9DA3', 35),
      dark050: hexToRgba('#9C9DA3', 50),
      dark063: hexToRgba('#9C9DA3', 63),
      dark087: hexToRgba('#9C9DA3', 87),
      light: '#BCBCBC',
      light063: hexToRgba('#BCBCBC', 63),
      salonCardLocation: '#8A8A8A',
      heartIcon: '#777777',
      salonDescTitle: '#29292F',
    },
  },
  breakpoints: {
    mobilePortrait: '320px',
    mobileLandscape: '568px',
    tabletPortrait: '768px',
    tabletLandscape: '1024px',
    laptop: '1366px',
    desktop: '1680px',
    wideDesktop: '1920px',
  },
  fonts: {
    montserrat: "'Montserrat', sans-serif",
    roboto: "'Roboto', sans-serif",
  },
  sizes: {
    header: {
      desktopHeight: 5.5,
      mobileHeight: 4,
    },
  },
};

export default theme;
