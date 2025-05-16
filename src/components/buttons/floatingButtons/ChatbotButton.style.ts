import { css } from '@emotion/react';
import theme from '@styles/theme';

export const buttonStyle = css`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;
  
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  
  background-color: ${theme.colors['red-02']};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
`;

export const iconStyle = css`
  path {
    stroke: ${theme.colors.primary};
  }
`;