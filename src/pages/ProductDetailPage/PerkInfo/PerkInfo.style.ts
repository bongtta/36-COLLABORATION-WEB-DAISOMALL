import { css } from '@emotion/react';
import theme from '@styles/theme';

export const container = css`
  width: 100%;
  height: 100%;
  padding: 32px 16px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const title = css`
  text-align: center;
  color: ${theme.colors['gray-01']};
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 20.3px;
  word-wrap: break-word;
`;

export const contentWrapper = css`
  padding: 0 4px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
`;

export const labelColumn = css`
  width: 70px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const label = css`
  color: ${theme.colors['gray-03']};
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 20.3px;
  word-wrap: break-word;
`;

export const infoColumn = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const infoText = css`
  color: ${theme.colors['gray-01']};
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 20.3px;
  word-wrap: break-word;
`;

export const benefitInfoText = css`
  ${infoText};
  width: 256px;
`;

export const benefitWrapper = css`
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1px;
`;

export const benefitContainer = css`
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
`;

export const iconContainer = css`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`;

export const iconBackground = css`
  width: 16px;
  height: 16px;
  left: 0;
  top: 0;
  position: absolute;
  background: white;
`;

export const iconOutline = css`
  width: 15px;
  height: 15px;
  left: 0.5px;
  top: 0.5px;
  position: absolute;
  outline: 1px ${theme.colors['gray-03']} solid;
  outline-offset: -0.5px;
`;

export const iconContent = css`
  width: 4.48px;
  height: 7.92px;
  left: 5.76px;
  top: 4.03px;
  position: absolute;
  background: ${theme.colors['gray-01']};
`;