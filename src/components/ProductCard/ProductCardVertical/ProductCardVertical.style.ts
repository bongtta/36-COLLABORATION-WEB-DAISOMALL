import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = (size: '96' | '128') => css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: ${size === '96' ? '9.6rem' : '12.8rem'};
`;

export const imageWrapper = (size: '96' | '128') => css`
  width: ${size === '96' ? '9.6rem' : '12.8rem'};
  height: ${size === '96' ? '12.8rem' : '16.8rem'};
  position: relative;
  border-radius: 0.2rem;
  overflow: hidden;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const quantity = css`
  position: absolute;
  bottom: 0.4rem;
  right: 0.4rem;
  padding: 0.2rem 0.6rem;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
`;

export const cartButton = css`
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  bottom: 0.4rem;
  left: 0.4rem;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
`;

export const cartBg = css`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors['gray-06']};
  border-radius: 0.8rem;
`;

export const cartIcon = css`
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  width: 2rem;
  height: 2rem;
  path {
    stroke: ${theme.colors['gray-01']};
  }
`;

export const infoArea = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const tagList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;
