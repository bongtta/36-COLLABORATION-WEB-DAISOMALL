import Header from '@components/Header/Header';
import Divider from '@components/common/divider/Divider';
import SearchBar from '@components/SearchBar/SearchBar';
import BottomNav from '@components/BottomNav/BottomNav';
import ChatbotButton from '@components/buttons/floatingButtons/ChatbotButton';
import FloatingUpButton from '@components/buttons/floatingButtons/FloatingUpButton';
import * as S from './StoreSearchPage.style';

const StoreSearchPage = () => {
  return (
    <>
      {/* 헤더 */}
      <Header showBackButton showTitle title="매장 상품 찾기" showCartIcon />
      <Divider />

      {/* 메인 컨텐츠 */}
      <div css={S.ContentContainer}>
        {/* 검색바 */}
        <SearchBar placeholder="상품명, 품번, 브랜드" />

        {/* 결과 섹션 */}
        <div css={S.ResultSection}>
          <p>검색어를 입력해주세요</p>
        </div>
      </div>

      {/* 플로팅 버튼들 */}
      <ChatbotButton />
      <FloatingUpButton />

      {/* 바텀 네비게이션 */}
      <BottomNav />
    </>
  );
};

export default StoreSearchPage;