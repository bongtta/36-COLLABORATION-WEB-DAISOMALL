import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import FilterTabs from './components/tabs/FilterTabs';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <FilterTabs />
      </ThemeProvider>
    </>
  );
}

export default App;
