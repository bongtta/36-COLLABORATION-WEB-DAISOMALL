import HomeCarousel from '@components/homeCarousel/HomeCarousel';
import QuickMenuBar from './quickMenuBar/QuickMenuBar';
import HomeDivider from '@pages/HomePage/HomeDivider/HomeDivider';
import Divider from '@components/common/divider/Divider';
import HomeSectionCard from './HomeSectionCard/HomeSectionCard';
import SpecialSection from '@pages/HomePage/SpecialSection/HomeSectionCard';
import Header from '@components/Header/Header';
import HeaderNav from '@components/HeaderNav/HeaderNav';
import * as H from '@pages/HomePage/HomeSectionCard/HomeSectionCard.style';

import { FIRST_RANKING_PRODUCTS } from './mockData/section1Data';
import { SECOND_RANKING_PRODUCTS } from './mockData/section2Data';
import { THIRD_RANKING_PRODUCTS } from './mockData/section3Data';
import { FOURTH_RANKING_PRODUCTS } from './mockData/section4Data';
import BottomNav from '@components/BottomNav/BottomNav';

const HomePage = () => (
  <div css={H.homeWrapper}>
    <Header showLogo={true} showCartIcon={true} showSearchIcon={true} />
    <HeaderNav />
    <HomeCarousel />
    <QuickMenuBar />
    <Divider />

    <HomeSectionCard
      title1="오늘의 추천 상품"
      productList={FIRST_RANKING_PRODUCTS}
      hasBanner={true}
    />

    <HomeDivider />

    <HomeSectionCard
      title1="지금 올라온 따끈따끈 신상"
      subtitle="매일 업데이트 되는 상품들을 만나보세요🔥"
      productList={SECOND_RANKING_PRODUCTS}
    />

    <HomeDivider />

    <HomeSectionCard
      title1="고객 반응 베스트"
      subtitle="24시간 동안 가장 많이 판매됐어요"
      productList={THIRD_RANKING_PRODUCTS}
    />

    <HomeDivider />

    <SpecialSection
      title1="시원한 얼음 아이스트레이"
      subtitle="시원하게 더위 이겨내세요"
    />

    <HomeDivider />

    <HomeSectionCard
      title1="시원한 얼음 아이스트레이"
      subtitle="시원하게 더위 이겨내세요"
      productList={FOURTH_RANKING_PRODUCTS}
    />
    <BottomNav />
  </div>
);

export default HomePage;
