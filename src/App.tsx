import { Global, ThemeProvider, css } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import ProductTag from './components/Tag/ProductTag';
import { productTags } from './components/Tag/tagData';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
      </ThemeProvider>
    </>
  );
}

export default App;
