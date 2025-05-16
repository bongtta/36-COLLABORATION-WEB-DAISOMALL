import {
  CategoryIconNew,
  HomeIcon,
  HomeIconActive,
  MypageIcon,
  OfflineSearchActive,
  OfflineSearchLarge,
  RecentIcon,
} from '@assets/svgs';
import * as S from './BottomNav.style';
import { useState } from 'react';

const BottomNav = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  return (
    <nav css={S.Wrapper}>
      <div css={S.Container}>
        <CategoryIconNew css={S.BasicIcon} />
        <p css={S.Caption}>카테고리</p>
      </div>

      <div css={S.Container} onClick={() => setSelectedTab('home')}>
        {selectedTab === 'home' ? (
          <HomeIconActive css={S.HomeIcon} />
        ) : (
          <HomeIcon css={S.HomeIcon} />
        )}

        <p css={S.Caption}>홈</p>
      </div>

      <div css={S.CenterContainer} onClick={() => setSelectedTab('offline')}>
        {selectedTab !== 'offline' ? (
          <div css={S.CircleButton}>
            <OfflineSearchLarge css={S.OfflineSearchIcon} />
          </div>
        ) : (
          <OfflineSearchActive css={S.OfflineSearchIconActive} />
        )}
        <p css={S.CenterCaption(selectedTab === 'offline')}>매장 상품 찾기</p>
      </div>

      <div css={S.Container}>
        <RecentIcon css={S.BasicIcon} />
        <p css={S.Caption}>최근 본 상품</p>
      </div>

      <div css={S.Container}>
        <MypageIcon css={S.BasicIcon} />
        <p css={S.Caption}>마이페이지</p>
      </div>
    </nav>
  );
};

export default BottomNav;
