/** @jsxImportSource @emotion/react */
import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';

// 배너 이미지 import
import banner1 from '../public/banner1.png';
import banner2 from '../public/banner2.png';
import banner3 from '../public/banner3.png';
import banner4 from '../public/banner4.png';
import banner5 from '../public/banner5.png';
import banner6 from '../public/banner6.png';

// 배너 이미지 배열
const bannerImages = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />

        <ImageCarousel 
          images={bannerImages} 
          bottomPadding="1.1rem"
          autoSlideInterval={3000} // 3초마다 슬라이드 전환 (원하는 값으로 조정 가능)
          autoplay={false} // 자동 슬라이드 기능 활성화 (기본값은 true)
        />

      </ThemeProvider>
    </>
  );
}

export default App;
