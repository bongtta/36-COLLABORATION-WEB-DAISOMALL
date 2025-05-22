import { css } from '@emotion/react';
import theme from '@styles/theme';

export const container = css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const contentWrapper = css`
  left: 2.4rem;
  top: 5.6rem;
  position: absolute;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const imageContainer = css`
  width: 7rem;
  height: 7rem;
  position: relative;
`;

export const brandImage = css`
  width: 7rem;
  height: 7rem;
  left: 0;
  top: 0;
  position: absolute;
`;

export const infoContainer = css`
  width: 24.1rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.9rem;
`;

export const brandName = css`
  align-self: stretch;
  color: ${theme.colors['gray-01']};
  ${theme.fonts['heading-14B']};
  word-wrap: break-word;
`;

export const brandDescription = css`
  align-self: stretch;
  height: 8.9rem;
  color: ${theme.colors['gray-01']};
  ${theme.fonts['body-14R']};
  word-wrap: break-word;
`;
