import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Wrapper = css``;

export const UpperContainer = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 1.6rem 1.6rem 3.2rem 1.6rem;
`;

export const RatingContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const averageRating = css`
  ${theme.fonts['number-40R']}
  color: ${theme.colors['gray-01']};
`;

export const KeywordContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const MiddleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
`;

export const LowerContainer = css``;
