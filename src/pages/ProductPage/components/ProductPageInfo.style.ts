import { css } from '@emotion/react';

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
  color: #28323c;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 20.3px;
  word-wrap: break-word;
`;

export const BrandIconWrapper = css`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const BrandIcon = css`
  width: 4px;
  height: 8px;
  outline: 1px #374553 solid;
  outline-offset: -0.5px;
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
  color: #28323c;
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
  color: #161d24;
  font-size: 24px;
  font-family: DAISOA;
  font-weight: 400;
  word-wrap: break-word;
`;

export const PriceUnit = css`
  color: #161d24;
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
  width: 11px;
  height: 11px;
  position: relative;
  overflow: hidden;
`;

export const RatingIconBackground = css`
  width: 11px;
  height: 11px;
  left: 0;
  top: 0;
  position: absolute;
  background: white;
`;

export const RatingIconOutline = css`
  width: 10px;
  height: 10px;
  left: 0.5px;
  top: 0.5px;
  position: absolute;
  outline: 1px #646f7c solid;
  outline-offset: -0.5px;
`;

export const RatingIconFill = css`
  width: 10.69px;
  height: 10.16px;
  left: 0.16px;
  top: 0.42px;
  position: absolute;
  background: #d70011;
`;

export const RatingText = css`
  color: #646f7c;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 17.4px;
  word-wrap: break-word;
`;

export const ReviewCount = css`
  color: #646f7c;
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
  outline: 2px #28323c solid;
  outline-offset: -1px;
`;

export const ShareButtonIconBottom = css`
  width: 9.9px;
  height: 4.4px;
  left: 6.75px;
  top: 3.75px;
  position: absolute;
  outline: 2px #28323c solid;
  outline-offset: -1px;
`; 