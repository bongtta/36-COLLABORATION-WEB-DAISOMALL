import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import SectionTitle from './components/common/SectionTitle/SectionTitle';
import image from '@assets/image.png';

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
        <SectionTitle
          title1="지금 올라온 따끈따끈 신상"
          subtitle="매일 업데이트 되는 상품들을 만나보세요🔥"
          onClickAll={() => console.log('전체보기 클릭')}
        />

        <SectionTitle
          title1="오늘의 추천 상품"
          onClickAll={() => console.log('전체보기 클릭')}
        />
        <SectionTitle
          title1="VT"
          title2="브랜드 상품 모아보기"
          title1Color="#646F7C"
          image={<img src={image} alt="VT" width={32} height={32} />}
          onClickAll={() => console.log('전체보기 클릭')}
        />
        <SectionTitle
          title1="리뷰"
          title2="123445개"
          title2Color="#D70011"
          onClickAll={() => console.log('전체보기 클릭')}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
