import {
  CategoryIconNew,
  //   HomeIcon,
  HomeIconActive,
  MypageIcon,
  OfflineSearchLarge,
  RecentIcon,
} from '@assets/svgs';

import * as S from './BottomNav.style';

const BottomNav = () => {
  return (
    <nav css={S.Wrapper}>
      <div css={S.Container}>
        <CategoryIconNew css={S.BasicIcon} />
        <p css={S.Caption}>카테고리</p>
      </div>

      <div css={S.Container}>
        <HomeIconActive css={S.HomeIcon} />
        <p css={S.Caption}>홈</p>
      </div>

      <div css={S.CenterContainer}>
        <div css={S.CircleButton}>
          <OfflineSearchLarge css={S.OfflineSearchIcon} />
        </div>
        <p css={S.CenterCaption}>매장 상품 찾기</p>
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
