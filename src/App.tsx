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
        <div
          css={css`
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
          `}
        >
          {productTags.map((tag, idx) => (
            <ProductTag key={idx} {...tag} />
          ))}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
