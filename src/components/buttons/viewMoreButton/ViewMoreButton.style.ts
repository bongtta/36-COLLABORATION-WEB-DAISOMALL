import { css } from '@emotion/react';
import theme from '@styles/theme';

export const viewMoreContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  
  margin: 1.5rem 0;
`;

export const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  
  width: 34.3rem;
  padding: 1.5rem 11.5rem;
  
  background-color: ${theme.colors.white};
  border: 0.1rem solid ${theme.colors['gray-04']};
  border-radius: 0.4rem;
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(0, 0, 0, 0.25);
  
  cursor: pointer;
  box-sizing: border-box;
`;

export const textStyle = css`
  color: ${theme.colors['gray-01']};
  ${theme.fonts['button-14B']}
  
  white-space: nowrap;
`;

export const iconStyle = css`
  color: ${theme.colors['gray-02']};
  
  min-width: 0.75rem;
  min-height: 0.75rem;
`;

export const contentStyle = css`
  width: 100%;
  padding-top: 1rem;
  
  color: ${theme.colors['gray-01']};
  ${theme.fonts['body-14R']}
`;