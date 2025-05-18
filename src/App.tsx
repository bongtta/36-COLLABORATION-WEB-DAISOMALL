import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import QuickMenuBar from '@components/QuickMenuBar/QuickMenuBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <div style={{ padding: '2rem' }}>
        <QuickMenuBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
