import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import ProductCardVertical from '@components/ProductCard/ProductCardVertical/ProductCardVertical';
import TodayCard from '@components/ProductCard/TodayCard/TodayCard';
import Img from '@assets/image.png';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          padding: '2rem',
        }}
      >
        <ProductCardRanking
          name="랭킹용 앰플"
          price="3,000"
          imageUrl={Img}
          showCartIcon={false}
          code="123456"
          withOutline={true}
        />
        <div
          style={{
            display: 'flex',
            gap: '2rem',
          }}
        >
          <ProductCardVertical
            size="96"
            name="수직형 앰플"
            price="3,000"
            imageUrl={Img}
            quantityText="1개"
            isBoxDelivery={true}
          />
          <ProductCardVertical
            size="96"
            name="수직형 앰플"
            price="3,000"
            imageUrl={Img}
            tags={['SNS']}
            isSnsHot={true}
          />
        </div>
        <TodayCard
          imageUrl={Img}
          profileImage={Img}
          username="왓정"
          title="겨울철 가성비피부관리 화장품후기 (VT리들샷, 린제이모델링팩 등)"
          views={37120}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
