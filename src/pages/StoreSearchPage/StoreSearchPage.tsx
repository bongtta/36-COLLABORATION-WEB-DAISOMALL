import Header from '@components/Header/Header';
import Divider from '@components/common/divider/Divider';
import BottomNav from '@components/BottomNav/BottomNav';
import ChatbotButton from '@components/buttons/floatingButtons/ChatbotButton';
import FloatingUpButton from '@components/buttons/floatingButtons/FloatingUpButton';
import PopularProductsSection from './PopularProductsSection';
import StoreNameSearchSection from '@pages/StoreSearchPage/StoreNameSearchSection/StoreNameSearchSection';
import { pageLayoutStyle, contentAreaStyle } from './StoreSearchPage.style';

const StoreSearchPage = () => (
  <div css={pageLayoutStyle}>
    <Header showBackButton showTitle title="매장 상품 찾기" showCartIcon />
    <Divider />
    
    <div css={contentAreaStyle}>
      <StoreNameSearchSection />
    </div>
    
    <ChatbotButton />
    <FloatingUpButton />
    <BottomNav />
  </div>
);

export default StoreSearchPage;