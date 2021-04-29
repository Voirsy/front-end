import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../../context/authContext';
import GlobalStyles from '../../theme/globalStyles';
import theme from '../../theme/theme';

type Props = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <GlobalStyles />
      {children}
    </AuthProvider>
  </ThemeProvider>
);

export default MainTemplate;
