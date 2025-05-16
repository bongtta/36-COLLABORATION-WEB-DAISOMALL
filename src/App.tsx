import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import AccordionButton from './components/buttons/accordion/AccordionButton';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        
        {/* 아코디언 버튼 테스트 */}
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '16px' }}>
          <h2 style={{ marginBottom: '16px' }}>아코디언 컴포넌트 테스트</h2>
          
          <AccordionButton title="상품정보 제공 고시">
            <p>품명 및 모델명: 테스트 상품</p>
            <p>제조자/수입자: 다이소</p>
            <p>제조국: 대한민국</p>
            <p>소비자상담 관련 전화번호: 1234-5678</p>
          </AccordionButton>
          
          <div style={{ margin: '10px 0' }}></div>
          
          <AccordionButton title="반품/교환/환불 안내">
            <p>- 상품 수령 후 7일 이내 반품 가능합니다.</p>
            <p>- 상품이 훼손된 경우 반품이 불가능합니다.</p>
            <p>- 교환/반품 시 고객센터로 문의해주세요.</p>
          </AccordionButton>
          
          <div style={{ margin: '10px 0' }}></div>
          
          <AccordionButton title="고객센터" defaultOpen={true}>
            <p>고객센터 운영시간: 평일 09:00 ~ 18:00</p>
            <p>전화번호: 02-1234-5678</p>
            <p>이메일: support@example.com</p>
          </AccordionButton>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;