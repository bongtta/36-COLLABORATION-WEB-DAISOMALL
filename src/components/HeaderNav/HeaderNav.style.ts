import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Wrapper = css`
  padding: 1.1rem 1.6rem 0.8rem;
`;

export const TabList = css`
  display: flex;
  justify-content: space-between;
`;

export const BasicText = css`
  position: relative;
  ${theme.fonts['heading-16B']}
  color: ${theme.colors['gray-01']};
`;

export const SelectedText = css`
  ${theme.fonts['heading-16B']}
  color: ${theme.colors.primary};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.2rem;
    left: -0.32rem;
    width: 2.2rem;
    height: 0.3rem;
    background-color: ${theme.colors.primary};
  }
`;

export const badge = css`
  position: absolute;
  top: -0.2rem;
  color: ${theme.colors.primary};
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 6px;
  letter-spacing: 0.1px;
`;
