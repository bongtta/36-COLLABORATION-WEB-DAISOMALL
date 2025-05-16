import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import HeaderNav from '@components/HeaderNav/HeaderNav';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <HeaderNav />
      </ThemeProvider>
    </>
  );
}

export default App;
