import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';

import ProductPageInfo from '@pages/ProductPage/components/ProductPageInfo';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <ProductPageInfo />
      </ThemeProvider>
    </>
  );
}

export default App;
