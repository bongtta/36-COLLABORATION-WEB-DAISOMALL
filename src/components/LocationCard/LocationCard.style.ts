import { css } from '@emotion/react';
import theme from '@styles/theme';

export const wrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const topSection = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const storeInfo = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
`;

export const titleRow = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const storeName = css`
  ${theme.fonts['heading-16B']};
  color: ${theme.colors['gray-01']};
`;

export const distance = css`
  ${theme.fonts['body-12R']};
  color: ${theme.colors['gray-03']};
`;

export const pickupBadge = css`
  height: 1.6rem;
  padding: 0 0.4rem;
  border-radius: 2px;
  background: ${theme.colors['gray-05']};
  ${theme.fonts['caption-10SB']};
  color: ${theme.colors['gray-02']};
  display: flex;
  align-items: center;
`;

export const address = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-02']};
`;

export const statusRow = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const divider = css`
  width: 0.3rem;
  height: 0.3rem;
  background: ${theme.colors['gray-04']};
  border-radius: 50%;
`;

export const time = css`
  ${theme.fonts['body-12R']};
  color: ${theme.colors['gray-02']};
`;

export const franchiseNotice = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-03']};
`;

export const bottomSection = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const tagRow = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const standText = css`
  ${theme.fonts['heading-14B']};
  color: ${theme.colors['gray-01']};
`;

export const actionButton = css`
  height: 2.4rem;
  padding: 0 0.8rem;
  border-radius: 4px;
  background: ${theme.colors['gray-06']};
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${theme.fonts['body-12R']};
  color: ${theme.colors['gray-01']};
  cursor: pointer;
`;

export const soldOutText = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-03']};
`;

export const tagStyle = (type: string) => css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.4rem;
  height: 1.6rem;
  border-radius: 2px;
  ${theme.fonts['caption-10SB']};
  color: ${type === '박스배송' ? theme.colors['primary'] : 'white'};
  background-color: ${(() => {
    switch (type) {
      case 'best':
        return theme.colors.primary;
      case '신상':
        return theme.colors['red-01'];
      case '박스배송':
        return theme.colors['gray-05'];
      default:
        return theme.colors['gray-04'];
    }
  })()};
`;
