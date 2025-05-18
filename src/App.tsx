import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import StoreSearchBar from '@components/StoreSearch/StoreSearchBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <div style={{ padding: '2rem' }}>
        <StoreSearchBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
