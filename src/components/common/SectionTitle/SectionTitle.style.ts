import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const topRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const leftGroup = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const image = css`
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
`;

export const titleRow = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const titleDynamic = (color: string) => css`
  ${theme.fonts['heading-16B']};
  color: ${color};
`;

export const subtitle = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-03']};
`;

export const allButton = css`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const allText = css`
  ${theme.fonts['button-12R']};
  color: ${theme.colors['gray-01']};
`;

export const icon = css`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const arrow = css`
  width: 0.6rem;
  height: 0.6rem;
  border-right: 1px solid ${theme.colors['gray-02']};
  border-bottom: 1px solid ${theme.colors['gray-02']};
  transform: rotate(-45deg);
`;
