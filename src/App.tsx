import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import ProductCardVertical from '@components/ProductCard/ProductCardVertical/ProductCardVertical';
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
          rank={1}
          name="랭킹용 앰플"
          price="3,000"
          imageUrl={Img}
          tags={['best', '최다판매']}
        />

        <ProductCardVertical
          size="96"
          name="수직형 앰플"
          price="3,000"
          imageUrl={Img}
          tags={['SNS']}
          quantityText="1개"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
