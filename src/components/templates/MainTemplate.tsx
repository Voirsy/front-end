import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../theme/globalStyles';
import { theme } from '../../theme/theme';

type Props = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
