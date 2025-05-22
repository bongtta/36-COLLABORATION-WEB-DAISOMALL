import * as S from './Pagination.style';
import { useRef } from 'react';
import { useSwipeNavigation } from '@hooks/useSwipeNavigation';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  isActive?: boolean;
  isHome?: boolean;
}

const SWIPE_THRESHOLD = 50;

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  isActive = false,
  isHome = false,
}: PaginationProps) {
  // Pagination 자체의 스와이프는 비활성화 (외부에서 useSwipeNavigation 훅 사용)
  const swipeHandlers = useSwipeNavigation(currentPage, totalPages, onPageChange, false);

  // 바 렌더링
  const renderBars = () =>
    Array.from({ length: totalPages }, (_, index) => (
      <div
        key={index}
        css={S.paginationBarStyle(
          isHome ? index === 0 : currentPage === index + 1, // 홈에서는 항상 첫 번째 바만 활성화
          isActive && !isHome // 홈에서는 클릭 기능 비활성화
        )}
        onClick={() => isActive && !isHome && onPageChange(index + 1)} // 홈에서는 클릭 불가
        role={isActive && !isHome ? 'button' : undefined}
        aria-label={isActive && !isHome ? `페이지 ${index + 1}로 이동` : undefined}
        tabIndex={isActive && !isHome ? 0 : -1}
        style={{ pointerEvents: isHome ? 'none' : 'auto' }} // 홈에서는 포인터 이벤트 차단
      />
    ));

  return (
    <div
      css={S.paginationWrapperStyle(isHome)}
      {...swipeHandlers} // 현재는 비활성화되어 있음
    >
      <div css={S.paginationBarsContainer}>{renderBars()}</div>
    </div>
  );
}

export default Pagination;