import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';
import GlobalStyles from '../src/theme/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
