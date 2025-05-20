/** @jsxImportSource @emotion/react */
import { Global, ThemeProvider, css } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import OrderIndicator from './components/OrderIndicator/OrderIndicator';
import bannerImage from '../public/banner.png';

const bannerContainerStyle = css`
  position: relative;
  width: 100%;
`;

const bannerImageStyle = css`
  width: 100%;
  display: block;
`;

const indicatorPositionStyle = css`
  position: absolute;
  bottom: 1.1rem;
  right: 1.6rem;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <div css={bannerContainerStyle}>
          <img src={bannerImage} alt="Banner" css={bannerImageStyle} />
          <div css={indicatorPositionStyle}>
            <OrderIndicator currentIndex={1} totalItems={5} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
