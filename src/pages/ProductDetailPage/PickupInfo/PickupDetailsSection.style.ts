import { css } from '@emotion/react';
import theme from '../../../styles/theme'; // 경로 수정

// PickupStoreSection.style.ts 와 중복되는 스타일. 필요시 공통 파일로 분리 고려.
export const InfoRow = css`
  display: flex;
  padding-left: 1.6rem; 
  padding-right: 1.6rem;
  gap: 1rem; 
`;

export const InfoLabel = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-03']};
  width: 7rem; 
`;

export const InfoContent = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem; 

  & > div,
  & > span {
    ${theme.fonts['body-14R']};
    color: ${theme.colors['gray-01']};
    line-height: 20.3px;
  }
`;
// 중복 끝

export const HighlightBackground = css`
  display: inline-flex; 
  align-items: center;
  background-color: ${theme.colors['gray-05']};
  padding: 2px 4px; 
  border-radius: 2px; 
  height: 22px; 

  & > svg { 
    margin-right: 4px;
  }
`;

export const TextWithIcon = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TempIcon = css`
  width: 16px;
  height: 16px;
  display: inline-block;
  border: 1px solid ${theme.colors['gray-03']};
  border-radius: 2px; 
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: ${theme.colors['gray-01']};
  }
  &::before {
    width: 4.48px;
    height: 7.92px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PickupInfoText = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-01']};
  line-height: 1.45; 
  white-space: pre-line; 
`; 