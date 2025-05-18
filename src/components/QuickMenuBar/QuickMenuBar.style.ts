import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = css`
  display: flex;
  overflow-x: auto;
  gap: 0.8rem;
  padding: 2rem 1.6rem;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const menuItem = css`
  flex: 0 0 auto;
  width: 7.2rem;
  height: 7.2rem;
  background: ${theme.colors['gray-06']};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.8rem 0;
  border: none;
  cursor: pointer;
`;

export const icon = css`
  width: 3.6rem;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const label = css`
  color: ${theme.colors['gray-01']};
  font-size: 1.2rem;
  font-weight: 500;
  font-family: Pretendard;
  line-height: 1.2;
  white-space: nowrap;
`;
