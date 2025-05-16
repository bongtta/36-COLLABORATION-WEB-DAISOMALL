import { css } from '@emotion/react';
import theme from '@styles/theme';

export const buttonContainer = css`
  width: 100%;
  
  display: flex;
  justify-content: center;
  
  margin: 1rem 0;
`;

export const buttonStyle = (variant: 'white' | 'gray') => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  
  width: 34.3rem;
  padding: 1.5rem 11.5rem;
  
  background-color: ${variant === 'white' ? theme.colors.white : theme.colors['gray-06']};
  border: ${variant === 'white' ? `0.1rem solid ${theme.colors['gray-04']}` : 'none'};
  border-radius: 0.4rem;
  
  cursor: pointer;
  box-sizing: border-box;
`;

export const textStyle = css`
  color: ${theme.colors['gray-01']};
  
  ${theme.fonts['button-14B']}
  white-space: nowrap;
`;

export const countStyle = css`
  color: ${theme.colors.primary};
  
  ${theme.fonts['button-14B']}
`;

export const iconStyle = css`
  width: 0.4rem;
  height: 0.8rem;
  
  flex-shrink: 0;
  
  color: ${theme.colors['gray-02']};
  stroke-width: 0.1rem;
  stroke: ${theme.colors['gray-02']};
`;

export const iconContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 1.6rem;
  height: 1.6rem;
`;