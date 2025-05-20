import { Global, ThemeProvider} from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
