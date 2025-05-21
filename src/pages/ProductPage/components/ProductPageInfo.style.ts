import { css } from '@emotion/react';
import theme from '@styles/theme';

export const ProductInfoWrapper = css`
  width: 100%;

  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;
`;

export const ProductDetails = css`
  
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.6rem;
  display: inline-flex;
`;

export const ProductBrandAndName = css`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  display: flex;
`;

export const Brand = css`
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

export const BrandText = css`
  color: ${theme.colors['gray-01']};
  ${theme.fonts['button-14R']};
`;

export const RightArrowWrapper = css`
  width: 2.4rem;
  height: 2.4rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const RightArrow = css`
  width: 1.2rem;
  height: 2.4rem;
  path {
    stroke: ${theme.colors['gray-02']};
    stroke-width: 0.1rem;
  }
`;

export const NameAndPrice = css`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: flex;
`;

export const ProductName = css`
  width: 293px;
  height: 51px;
  color: ${theme.colors['gray-01']};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 23.2px;
  word-wrap: break-word;
`;

export const Price = css`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1px;
  display: inline-flex;
`;

export const PriceAmount = css`
  color: ${theme.colors.black};
  font-size: 24px;
  font-family: DAISOA;
  font-weight: 400;
  word-wrap: break-word;
`;

export const PriceUnit = css`
  color: ${theme.colors.black};
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 800;
  word-wrap: break-word;
`;

export const Rating = css`
  height: 14px;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  display: inline-flex;
`;

export const RatingIconWrapper = css`
  width: 1.1rem;
  height: 1.1rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const RatingText = css`
  color: ${theme.colors['gray-03']};
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 17.4px;
  word-wrap: break-word;
`;

export const ReviewCount = css`
  color: ${theme.colors['gray-03']};
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 17.4px;
  word-wrap: break-word;
`;

export const ActionButtons = css`
  height: 32px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  overflow: hidden;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

export const ShareButton = css`
  width: 24px;
  height: 24px;
  position: relative;
`;

export const ShareButtonIconTop = css`
  width: 16.5px;
  height: 5.5px;
  left: 3.75px;
  top: 14.75px;
  position: absolute;
  outline: 2px ${theme.colors['gray-01']} solid;
  outline-offset: -1px;
`;

export const ShareButtonIconBottom = css`
  width: 9.9px;
  height: 4.4px;
  left: 6.75px;
  top: 3.75px;
  position: absolute;
  outline: 2px ${theme.colors['gray-01']} solid;
  outline-offset: -1px;
`; 