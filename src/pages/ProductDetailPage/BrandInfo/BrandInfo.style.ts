import { css } from '@emotion/react';
import theme from '@styles/theme';

export const container = css`
  width: 100%;
  min-height: 20rem;
  position: relative;
  padding: 2rem;
`;

export const contentWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.6rem;
  padding: 2rem 0;
`;

export const imageContainer = css`
  width: 7rem;
  height: 7rem;
  position: relative;
  flex-shrink: 0;
`;

export const brandImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.4rem;
`;

export const infoContainer = css`
  width: 100%;
  max-width: 24.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.9rem;
`;

export const brandName = css`
  width: 100%;
  color: ${theme.colors['gray-01']};
  ${theme.fonts['heading-14B']};
  word-wrap: break-word;
`;

export const brandDescription = css`
  width: 100%;
  color: ${theme.colors['gray-01']};
  ${theme.fonts['body-14R']};
  word-wrap: break-word;
`;
