import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import StoreStatus from '@components/LocationCard/StoreStatus/StoreStatus';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {/* 영업 중 */}
        <StoreStatus isOpen={true} />
        {/* 영업 전 */}
        <StoreStatus isOpen={false} />
      </div>
    </ThemeProvider>
  );
}

export default App;
