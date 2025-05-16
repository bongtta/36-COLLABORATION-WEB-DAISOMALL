import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import ProductCard from '@components/ProductCard/ProductCard';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking';
import ProductCardVertical from '@components/ProductCard/ProductCardVertical';
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
        <ProductCard
          variant="code"
          name="페이셜 부스팅 앰플"
          price="3,000"
          code="1049275"
          imageUrl={Img}
          tags={['신상', '박스배송']}
        />

        <ProductCardRanking
          rank={1}
          name="랭킹용 앰플"
          price="3,000"
          imageUrl={Img}
          tags={['best', '최다판매']}
        />

        <ProductCardVertical
          size="96"
          name="수직형 앰플"
          price="3,000원"
          imageUrl={Img}
          tags={['SNS']}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
