import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = css`
  width: 12.8rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const imageWrapper = css`
  width: 12.8rem;
  height: 17rem;
  border-radius: 2px;
  overflow: hidden;
  background-color: ${theme.colors['gray-04']};
`;

export const mainImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const contentArea = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const topRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const profileArea = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const profileImage = css`
  width: 2rem;
  height: 2rem;
  border-radius: 40px;
  object-fit: cover;
`;

export const username = css`
  ${theme.fonts['caption-12R']};
  color: ${theme.colors['gray-01']};
`;

export const bookmarkButton = css`
  all: unset;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const bookmarkIcon = css`
  color: ${theme.colors['white']};
  transition: color 0.2s ease;
`;

export const bookmarkIconActive = css`
  color: ${theme.colors['gray-04']};
`;

export const title = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-01']};
  line-height: 1.45;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const viewRow = css`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const viewCount = css`
  ${theme.fonts['body-12R']};
  font-weight: 700;
  color: ${theme.colors['gray-04']};
  letter-spacing: 0.1px;
`;

export const viewText = css`
  ${theme.fonts['body-12R']};
  color: ${theme.colors['gray-04']};
`;
