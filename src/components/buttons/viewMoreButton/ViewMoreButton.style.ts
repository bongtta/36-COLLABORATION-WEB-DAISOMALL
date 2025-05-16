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
  gap: 0.5rem;
  
  width: 21.438rem;
  padding: 0.938rem 7.188rem;
  
  background-color: ${theme.colors.white};
  border: 0.0625rem solid ${theme.colors['gray-04']};
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
  cursor: pointer;
  
  box-sizing: border-box;
`;

export const textStyle = css`
  color: ${theme.colors['gray-01']};
  
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 145%;

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