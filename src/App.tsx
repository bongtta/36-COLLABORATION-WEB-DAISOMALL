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
        <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>아코디언 버튼 테스트</h2>
          
          <AccordionButton title="상품정보 제공 고시">
            <p>상품명: 아코디언 테스트 상품</p>
            <p>제조국: 대한민국</p>
            <p>제조자: 테스트 제조사</p>
            <p>제조일자: 2023년 5월 16일</p>
            <p>소비자상담 관련 전화번호: 080-123-4567</p>
          </AccordionButton>
          
          <AccordionButton title="반품/교환/환불 안내">
            <p>- 단순변심으로 인한 반품/교환은 수령 후 7일 이내에 신청 가능합니다.</p>
            <p>- 상품 불량 및 오배송의 경우 수령 후 30일 이내에 신청 가능합니다.</p>
            <p>- 반품/교환 신청 시 고객센터로 문의해주세요.</p>
          </AccordionButton>
          
          <AccordionButton title="고객센터">
            <p>고객센터 운영시간: 평일 09:00 ~ 18:00</p>
            <p>전화번호: 02-123-4567</p>
            <p>이메일: support@example.com</p>
          </AccordionButton>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;