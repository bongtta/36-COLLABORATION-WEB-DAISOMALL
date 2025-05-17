import { css } from '@emotion/react';
import theme from '@styles/theme';

export const tagList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.4rem;
`;

export const tagStyle = (type: string) => css`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;

  background-color: ${(() => {
    switch (type) {
      case 'best':
        return theme.colors.primary;
      case '신상':
        return theme.colors['red-01'];
      case '박스배송':
        return theme.colors['brown-01'];
      default:
        return theme.colors['gray-04'];
    }
  })()};
`;

export const code = css`
  ${theme.fonts['caption-12R']};
  color: ${theme.colors['gray-03']};
`;

export const rankingWrapper = css`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const rankingWrapperOutline = css`
  border-radius: 0.8rem;
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
  border-radius: 0.2rem;
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
  display: inline-flex;
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
  display: inline-flex;
`;

export const rankingPrice = css`
  ${theme.fonts['heading-16B']};
  color: ${theme.colors['gray-01']};
`;

export const rankingName = css`
  font-family: 'Pretendard';
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.03rem;
  color: ${theme.colors['gray-01']};
  width: 100%;
  word-break: break-word;
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
  border-radius: 0.8rem;
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
