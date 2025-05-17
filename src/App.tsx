import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import BottomNav from '@components/BottomNav/BottomNav';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
      </ThemeProvider>
      <BottomNav />
    </>
  );
}

export default App;
