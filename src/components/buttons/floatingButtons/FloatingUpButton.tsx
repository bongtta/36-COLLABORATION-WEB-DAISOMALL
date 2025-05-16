import { FloatingUpIcon } from '@assets/svgs';
import { useEffect, useState, useCallback } from 'react';
import * as S from './FloatingUpButton.style';

const FloatingUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // rem -> px
  const remToPx = useCallback((rem: number): number => {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return rem * fontSize;
  }, []);

  // 스크롤 감지 함수
  const checkVisibility = useCallback(() => {
    // 페이지 높이 체크
    const pageHeight = document.documentElement.scrollHeight;
    const isPageTallEnough = pageHeight >= remToPx(50);
    
    // 스크롤 위치 체크
    const scrollThreshold = remToPx(12.5);
    const hasScrolledEnough = window.scrollY > scrollThreshold;
    
    // 버튼 표시 조건
    setIsVisible(isPageTallEnough && hasScrolledEnough);
  }, [remToPx]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    // 디바운스 함수
    const debounceScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkVisibility, 10);
    };

    window.addEventListener('scroll', debounceScroll, { passive: true });
    window.addEventListener('resize', debounceScroll, { passive: true });

    checkVisibility();
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', debounceScroll);
      window.removeEventListener('resize', debounceScroll);
    };
  }, [checkVisibility]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button 
      css={S.buttonStyle(isVisible)}
      onClick={handleScrollToTop}
      aria-label="페이지 맨 위로 스크롤"
    >
      <FloatingUpIcon 
        width="1.3rem" 
        height="1.3rem" 
        css={S.iconStyle} 
      />
    </button>
  );
};

export default FloatingUpButton;