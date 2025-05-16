import { css } from '@emotion/react';
import theme from '@styles/theme';

export const buttonStyle = (isVisible: boolean) => css`
  position: fixed;
  bottom: 7rem;
  right: 2rem;
  z-index: 10;
  
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  
  background-color: ${theme.colors.white};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  // 스크롤 시 나타나고 사라지는 효과
  opacity: ${isVisible ? '1' : '0'};
  visibility: ${isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
  
  cursor: pointer;
`;

export const iconStyle = css`
  path {
    stroke: ${theme.colors['gray-01']};
  }
`;