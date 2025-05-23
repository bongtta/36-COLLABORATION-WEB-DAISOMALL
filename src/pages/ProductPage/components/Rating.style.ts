import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Rating = css`
  height: 1.4rem;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3rem;
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
  line-height: 145%;
  word-wrap: break-word;
`;

export const ReviewCount = css`
  color: ${theme.colors['gray-03']};
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 145%;
  word-wrap: break-word;
`; 