import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = (size: '96' | '128') => css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: ${size === '96' ? '9.6rem' : '12.8rem'};
`;

export const imageWrapper = (size: '96' | '128') => css`
  width: ${size === '96' ? '9.6rem' : '12.8rem'};
  height: ${size === '96' ? '12.8rem' : '16.8rem'};
  position: relative;
  border-radius: 2px;
  overflow: hidden;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const quantity = css`
  padding: 0.2rem 0.6rem;
  background-color: ${theme.colors['gray-01']};
  color: ${theme.colors.white};
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
`;

export const cartButton = css`
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  bottom: 0.4rem;
  right: 0.4rem;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
`;

export const infoArea = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const tagList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const snsBadge = css`
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  z-index: 1;
`;

export const boxBadge = css`
  position: absolute;
  bottom: 0.4rem;
  left: 0.4rem;
  width: 3.6rem;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const boxText = css`
  position: absolute;
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
`;

export const unitPriceRow = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const unitPrice = css`
  ${theme.fonts['caption-12B']}
  color: ${theme.colors['gray-01']};
`;

export const multiply = css`
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-weight: 400;
  color: ${theme.colors['gray-03']};
`;

export const unitCount = css`
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-weight: 700;
  color: ${theme.colors['white']};
  background-color: ${theme.colors['gray-02']};
  padding: 0 0.6rem;
  height: 2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

export const unitWon = css`
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.45rem;
  color: ${theme.colors['gray-01']};
`;

export const unitDividerLeft = css`
  width: 0.45rem;
  height: 0.45rem;
  outline: 0.07rem ${theme.colors['gray-01']} solid;
  outline-offset: -0.035rem;
`;

export const unitDividerRight = css`
  width: 0.45rem;
  height: 0.45rem;
  transform: rotate(180deg);
  transform-origin: top left;
  outline: 0.07rem ${theme.colors['gray-01']} solid;
  outline-offset: -0.035rem;
`;

export const unitBadge = css`
  height: 1.6rem;
  padding: 0.2rem 0.6rem;
  background: ${theme.colors['gray-01']};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const unitBadgeText = css`
  ${theme.fonts['caption-10SB']}
  color: ${theme.colors.white};
`;
