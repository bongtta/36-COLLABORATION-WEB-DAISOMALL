import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import ProductTag from './components/Tag/ProductTag';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <ProductTag />
      </ThemeProvider>
    </>
  );
}

export default App;
