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
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BOTTOM_NAV_HEIGHT_REM = 5.6;
const CIRCLE_BUTTON_OVER_REM = 3;
const TOTAL_HIDE_HEIGHT_REM = BOTTOM_NAV_HEIGHT_REM + CIRCLE_BUTTON_OVER_REM;

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;
      
      // 스크롤 차이가 10px 이상일 때만 동작하도록 설정
      if (Math.abs(scrollDifference) > 10) {
        if (scrollDifference > 0) {
          // 스크롤 다운
          setIsVisible(false);
        } else {
          // 스크롤 업
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // 현재 경로에 따라 탭 결정
  const getSelectedTab = () => {
    if (location.pathname === '/store-list') return 'offline';
    if (location.pathname === '/') return 'home';
    // 필요시 다른 경로도 추가
    return '';
  };

  const selectedTab = getSelectedTab();

  return (
    <nav css={[S.Wrapper, { transform: isVisible ? 'translateY(0)' : `translateY(${TOTAL_HIDE_HEIGHT_REM}rem)` }]}>
      <div css={S.Container}>
        <CategoryIconNew css={S.BasicIcon} />
        <p css={S.Caption}>카테고리</p>
      </div>

      <div css={S.Container} onClick={() => navigate('/')}>
        {selectedTab === 'home' ? (
          <HomeIconActive css={S.HomeIcon} />
        ) : (
          <HomeIcon css={S.HomeIcon} />
        )}
        <p css={S.Caption}>홈</p>
      </div>

      <div css={S.CenterContainer} onClick={() => navigate('/store-list')}>
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
