import { css } from '@emotion/react';
import theme from '@styles/theme';

export const code = css`
  ${theme.fonts['caption-12R']};
  color: ${theme.colors['gray-03']};
`;

export const rankingWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const rankingWrapperOutline = css`
  border-radius: 8px;
  outline: 1px ${theme.colors['gray-05']} solid;
  outline-offset: -1px;
  padding: 1.1rem 0;
`;

export const rankingContent = css`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.2rem;
`;

export const rankingNumber = css`
  position: relative;
  ${theme.fonts['heading-14B']}
  color: ${theme.colors['gray-01']};
`;

export const rankingImageWrapper = css`
  width: 8.1rem;
  height: 10.8rem;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

export const rankingImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const rankingInfoArea = css`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 0.4rem 0;
`;

export const rankingTextGroup = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const priceRow = css`
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

export const rankingPrice = css`
  ${theme.fonts['heading-16B']};
  color: ${theme.colors['gray-01']};
`;

export const rankingName = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-01']};
`;

export const cartIconWrapper = css`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  position: relative;
`;

export const cartIconBg = css`
  width: 3.2rem;
  height: 3.2rem;
  background: ${theme.colors['gray-06']};
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const cartIcon = css`
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  width: 2rem;
  height: 2rem;
  path {
    stroke: ${theme.colors['gray-01']};
  }
`;

export const tagList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.4rem;
`;

export const tagStyle = (type: string) => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.4rem;
  height: 1.6rem;
  border-radius: 2px;
  ${theme.fonts['caption-10SB']};
  color: ${type === '박스배송' ? theme.colors['primary'] : 'white'};
  background-color: ${(() => {
    switch (type) {
      case 'best':
        return theme.colors.primary;
      case '신상':
        return theme.colors['red-01'];
      case '박스배송':
        return theme.colors['gray-05'];
      default:
        return theme.colors['gray-04'];
    }
  })()};
`;
