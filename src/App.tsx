import { Global, ThemeProvider, css } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <h1 css={testStyle1}>폰트 테스트 - Display 24B</h1>
        <p css={testStyle2}>안녕하세요! Pretendard Regular 테스트 중입니다.</p>
      </ThemeProvider>
    </>
  );
}

export default App;

const testStyle1 = css`
  ${theme.fonts['display-24B']}
`;

const testStyle2 = css`
  ${theme.fonts['body-14R']};
`;
