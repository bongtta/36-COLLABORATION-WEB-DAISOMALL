import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = css`
  width: 34.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const searchBar = css`
  padding: 0.8rem;
  border-bottom: 1px solid ${theme.colors['gray-01']};
`;

export const topRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const label = css`
  ${theme.fonts['heading-14B']};
  color: ${theme.colors['gray-01']};
`;

export const iconGroup = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const divider = css`
  width: 1px;
  height: 1.6rem;
  background-color: ${theme.colors['gray-05']};
`;

export const explanation = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const explanationText = css`
  ${theme.fonts['body-12R']};
  color: ${theme.colors['gray-03']};
  line-height: 1.45;
`;

export const inputField = css`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-01']};

  &::placeholder {
    color: ${theme.colors['gray-01']};
  }
`;
