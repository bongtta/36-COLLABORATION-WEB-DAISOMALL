import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import LocationCard from '@components/LocationCard/LocationCard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* ✅ 일반 매장, 재고 있음 */}
        <LocationCard
          storeName="홍대입구점"
          distance="1.9 Km"
          address="서울특별시 마포구 홍익로 25 (서교동)"
          isOpen={false}
          time="10:00~22:00"
          floor="B1F"
          stand="1번"
          stock={7}
          isPickupAvailable={true}
        />

        {/* ✅ 일반 매장, 일시품절 */}
        <LocationCard
          storeName="홍대2호점"
          distance="2.0 Km"
          address="서울 마포구 양화로 182 (동교동)"
          isOpen={false}
          time="10:00~22:00"
          floor="1F"
          stand="1번"
          isSoldOut={true}
          isPickupAvailable={true}
        />

        {/* ✅ 가맹/유통 매장 */}
        <LocationCard
          storeName="신촌명물거리점"
          distance="3.0 Km"
          address="서울 서대문구 명물길 27 (창천동)"
          isOpen={true}
          time="10:00~22:00"
          isFranchise={true}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
