import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import Router from '@routes/Router';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
