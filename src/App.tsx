import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import QuickMenuBar from '@components/QuickMenuBar/QuickMenuBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <div style={{ padding: '2rem' }}>
        <QuickMenuBar
          onStoreSearchClick={() => console.log('매장재고 클릭')}
          onHolidayArrivalClick={() => console.log('휴일도착 클릭')}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
