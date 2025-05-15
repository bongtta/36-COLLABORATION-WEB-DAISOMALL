import { css } from '@emotion/react';
import theme from '@styles/theme';

export const Wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  height: 4.8rem;
`;

export const LeftContainer = css`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Title = css`
  width: 18.3rem;
  ${theme.fonts['heading-16B']}
  color: ${theme.colors.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NavIcons = css`
  margin: 1.2rem 0.5rem 1.2rem 0.6rem;
  width: 2.4rem;
`;

export const RightContainer = css`
  display: flex;
  gap: 0.4rem;
`;
