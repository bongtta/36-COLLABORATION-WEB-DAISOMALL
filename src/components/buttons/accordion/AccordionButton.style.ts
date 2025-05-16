import { css } from '@emotion/react';
import theme from '@styles/theme';

export const accordionContainer = css`
  width: 100%;
  
  background-color: ${theme.colors.white};
`;

export const buttonStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  padding: 1rem;
  
  background-color: ${theme.colors.white};
  border: none;
  
  cursor: pointer;
`;

export const titleStyle = css`
  color: ${theme.colors['gray-01']};
  
  ${theme.fonts['heading-14B']}
`;

export const iconStyle = css`
  color: ${theme.colors['gray-02']};
`;

export const contentStyle = css`
  padding: 1rem;
  
  background-color: ${theme.colors.white};
  color: ${theme.colors['gray-01']};
  
  ${theme.fonts['body-14R']}
`;