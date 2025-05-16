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
  gap: 0.4rem; // 4px (10px 기준)
  width: 34.3rem; // 343px (10px 기준)
  padding: 1.5rem 11.5rem; // 15px 115px (10px 기준)
  background-color: ${theme.colors.white};
  border: 0.1rem solid ${theme.colors['gray-04']}; // 1px (10px 기준)
  border-radius: 0.4rem; // 4px (10px 기준)
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(0, 0, 0, 0.25); // 4px (10px 기준)
  cursor: pointer;
  box-sizing: border-box;
`;

export const textStyle = css`
  color: ${theme.colors['gray-01']};
  font-family: Pretendard;
  font-size: 1.4rem; // button 14B (10px 기준)
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