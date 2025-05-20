/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from '@styles/global';
import HomeCarousel from './components/homeCarousel/HomeCarousel';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <div css={{ maxWidth: '37.5rem', margin: '0 auto' }}>
          <HomeCarousel />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;