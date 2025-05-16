import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = css`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem 2rem;
  background-color: ${theme.colors['gray-06']};
  border-radius: 32px;
`;

export const input = css`
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-02']};

  &::placeholder {
    color: ${theme.colors['gray-03']};
  }
`;

export const iconWrapper = css`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: 1.2rem;
`;

export const barcodeIcon = css`
  flex-shrink: 0;
  color: ${theme.colors['gray-02']};
`;

export const divider = css`
  width: 0.1rem;
  height: 1.6rem;
  background-color: ${theme.colors['gray-04']};
`;

export const clearButton = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.1rem;
`;

export const searchButton = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${theme.colors.black};
  flex-shrink: 0;
`;
