import { useState } from 'react';

import * as H from '@pages/HomePage/HomeSectionCard/HomeSectionCard.style';
import HomeCarousel from '@components/homeCarousel/HomeCarousel';
import QuickMenuBar from '@pages/HomePage/quickMenuBar/QuickMenuBar';
import HomeDivider from '@pages/HomePage/HomeDivider/HomeDivider';
import Divider from '@components/common/divider/Divider';
import HomeSectionCard from '@pages/HomePage/HomeSectionCard/HomeSectionCard';
import SpecialSection from '@pages/HomePage/SpecialSection/HomeSectionCard';
import Header from '@components/Header/Header';
import HeaderNav from '@components/HeaderNav/HeaderNav';
import BottomNav from '@components/BottomNav/BottomNav';
import RankingSection from '@pages/HomePage/RankingSection/RankingSection';

import { getSlideRankingProducts } from '@pages/HomePage/mockData/slideRankingProducts';
import { FIRST_PRODUCTS } from '@pages/HomePage/mockData/section1Data';
import { SECOND_PRODUCTS } from '@pages/HomePage/mockData/section2Data';
import { THIRD_PRODUCTS } from '@pages/HomePage/mockData/section3Data';
import { FOURTH_PRODUCTS } from '@pages/HomePage/mockData/section4Data';

const HomePage = () => {
  const [rankingPage, setRankingPage] = useState(1);
  const slideContents = getSlideRankingProducts();
  return (
    <div css={H.homeWrapper}>
      <Header showLogo={true} showCartIcon={true} showSearchIcon={true} />
      <HeaderNav />
      <HomeCarousel />
      <QuickMenuBar />
      <Divider />

      <HomeSectionCard
        title1="오늘의 추천 상품"
        productList={FIRST_PRODUCTS}
        hasBanner={true}
      />

      <HomeDivider />

      <HomeSectionCard
        title1="지금 올라온 따끈따끈 신상"
        subtitle="매일 업데이트 되는 상품들을 만나보세요🔥"
        productList={SECOND_PRODUCTS}
      />

      <HomeDivider />
      <RankingSection
        title1="고객 반응 베스트"
        subtitle="24시간 동안 가장 많이 판매됐어요"
        currentPage={rankingPage}
        onPageChange={setRankingPage}
        contents={slideContents}
      />

      <HomeDivider />

      <SpecialSection
        title1="시원한 얼음 아이스트레이"
        subtitle="시원하게 더위 이겨내세요"
      />

      <HomeDivider />

      <HomeSectionCard
        title1="따스한 햇살 속 피크닉💗"
        subtitle="매장픽업으로 피크닉 준비를 빠르게"
        productList={THIRD_PRODUCTS}
      />

      <HomeDivider />

      <HomeSectionCard
        title1="시원한 얼음 아이스트레이"
        subtitle="시원하게 더위 이겨내세요"
        productList={FOURTH_PRODUCTS}
      />
      <BottomNav />
    </div>
  );
};

export default HomePage;
