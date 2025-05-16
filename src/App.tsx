import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import ViewMoreButton from './components/buttons/viewMoreButton/ViewMoreButton';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <div style={{ 
          backgroundColor: theme.colors['gray-06'], 
          maxWidth: '600px', 
          margin: '20px auto', 
          padding: '16px',
          borderRadius: '8px'
        }}>
          <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>합세 조 소개 💫</h2>
          <div style={{ 
            padding: '16px', 
            marginBottom: '16px',
            borderRadius: '4px'
          }}>
            <h3 style={{ textAlign: 'center', marginBottom: '12px' }}>🌟 우리 조는 최고조, 완전체 그 자체 💯🔥</h3>
            <p style={{ textAlign: 'center' }}>한 명 한 명이 그냥 스펙폭발…✨ 모이면 인공지능도 감탄하는 조합! 🤖❤️</p>
            <p style={{ textAlign: 'center' }}>테스트 코드보다 더 완벽한 우리 조원들이 궁금하신가요?</p>
          </div>
          
          {/* ViewMoreButton 사용 예시 */}
          <ViewMoreButton buttonText="조원 소개 더보기">
            <div style={{ 
              padding: '16px', 
              borderRadius: '4px'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <h3>👑 엄경호 (YB 엄리드) - 00년생 ✨</h3>
                <p>코드보다 빠른 두뇌 회전 🧠</p>
                <p>AI 사랑꾼, 인공지능 보유 수 도장 깨기 급 📈</p>
                <p>무한 성장형 리더, 조의 중심을 잡아주는 존재 💥</p>
                <p>그 이름 세 글자, '엄・경・호' 자체가 시그널이다 📡</p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h3>🌸 김채은 - 02년생 최강 OB 🔥</h3>
                <p>경험치는 만렙, 실력은 레전드 🧭</p>
                <p>조가 길을 잃으면 방향을 잡아주는 북극성 ✨</p>
                <p>든든함과 섬세함을 겸비한 OB의 정석 🛠️</p>
                <p>"채은이다" 이 말 한마디면 팀 분위기 풀세팅 완료 💬</p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h3>🌈 윤소은 - 02년생 YB 💡</h3>
                <p>아이디어 뿜뿜! 회의 시간마다 감탄 연발 👏</p>
                <p>감성과 논리를 둘 다 갖춘 크리에이티브 핵심 🎨</p>
                <p>퍼즐처럼 꼭 맞는 역할을 해내는 천상 조원 🧩</p>
                <p>이제 막 피어나는 가능성, 조의 미래는 너야 소은아!! 🐣</p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h3>🌟 신지수 - 02년생 YB 📚</h3>
                <p>준비성 만렙, 언제나 꼼꼼하고 성실하게 🚀</p>
                <p>빠른 습득력으로 뭐든 흡수하는 지적 에너지 💕</p>
                <p>분위기 메이커까지 겸비한 다재다능 핵인싸 💫</p>
                <p>신・지・수 세 글자만으로 조에 신뢰를 주는 마법사 🧙‍♀️</p>
              </div>
              
              <div style={{ 
                marginTop: '30px', 
                padding: '15px',
                backgroundColor: theme.colors['gray-06'],
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <p>💌 이 조합… 너무 완벽해서 테스트 코드도 감동받고 울었다() 😭</p>
                <p>우리는 '우리'라는 코드로 연결된 최강의 팀! ✨✨✨</p>
                <p><strong>우리 합세 조, 전설 찍고 갑니다! ✨✨✨</strong></p>
                <p>🧡🔥💻💪🌟🎉🚀🌈📚🎨🐣👑💬💥💡</p>
              </div>
            </div>
          </ViewMoreButton>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;