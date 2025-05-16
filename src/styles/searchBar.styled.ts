import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = css`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  background-color: ${theme.colors['gray-06']};
  border-radius: 999px;
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
  gap: 12px;
  margin-left: 12px;
`;

export const barcodeIcon = css`
  flex-shrink: 0;
  color: ${theme.colors['gray-02']};
`;

export const divider = css`
  width: 1px;
  height: 16px;
  background-color: ${theme.colors['gray-04']};
`;

export const clearButton = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
`;

export const searchButton = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.black};
  flex-shrink: 0;
`;
