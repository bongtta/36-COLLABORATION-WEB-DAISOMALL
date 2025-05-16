import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import SearchBar from '@components/SearchBar/SearchBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <div style={{ padding: '2rem' }}>
        <SearchBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
