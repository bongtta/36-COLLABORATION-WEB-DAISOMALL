import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import NavigationButton from './components/buttons/navigationButton/NavigationButton';
import ReviewPage from './pages/ReviewPage';
import StorePage from './pages/StorePage';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        
        <Routes>
          <Route path="/reviews/:id" element={<ReviewPage />} />
          <Route path="/stores/:id" element={<StorePage />} />
          <Route path="/" element={
            <div style={{ 
              maxWidth: '600px', 
              margin: '20px auto', 
              padding: '16px',
              borderRadius: '8px'
            }}>
              <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>NavigationButton 컴포넌트 테스트</h2>

              {/* 흰색 배경 버튼 (카운트 포함) */}
              <div style={{ 
                backgroundColor: theme.colors.white, 
                padding: '16px', 
                marginBottom: '24px',
                borderRadius: '4px'
              }}>
                <h3>흰색 배경 버튼 (카운트 포함)</h3>
                <p>고객 리뷰 페이지로 이동하는 버튼입니다.</p>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  marginTop: '16px'
                }}>
                  <NavigationButton 
                    text="고객리뷰 전체보기" 
                    count={11747} 
                    to="/reviews/12345"
                    variant="white"
                  />
                </div>
              </div>

              {/* 회색 배경 버튼 */}
              <div style={{ 
                backgroundColor: theme.colors.white, 
                padding: '16px',
                borderRadius: '4px'
              }}>
                <h3>회색 배경 버튼</h3>
                <p>매장 찾기 페이지로 이동하는 버튼입니다.</p>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  marginTop: '16px'
                }}>
                  <NavigationButton 
                    text="구매 가능 다이소 매장 찾기" 
                    to="/stores/12345"
                    variant="gray"
                  />
                </div>
              </div>
            </div>
          } />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;