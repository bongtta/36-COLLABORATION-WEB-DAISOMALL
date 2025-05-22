import { css } from '@emotion/react';
import theme from '../../../styles/theme'; // 경로 수정

// PickupStoreSection.style.ts 와 중복되는 스타일. 필요시 공통 파일로 분리 고려.
export const InfoRow = css`
  display: flex;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  gap: 0.4rem; 
  padding-bottom: 1.8rem;
  
`;

export const InfoLabel = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-03']};
  width: 7rem; 
  padding-left: 0.4rem;
`;

export const InfoContent = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem; 
  padding-right: 0.4rem;

  & > div,
  & > span {
    ${theme.fonts['body-14R']};
    color: ${theme.colors['gray-01']};
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
`;

export const TextWithIcon = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
`;

export const PickupInfoText = css`
  ${theme.fonts['body-14R']};
  color: ${theme.colors['gray-01']};
  white-space: pre-line;
`;

export const PickupTomorrowContainer = css`
  width: 7.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: 0.065rem;
    
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const QuestionCircleContainer = css`
  width: 16px;
  height: 16px;
  display: flex; // 내부 svg 정렬을 위해
  align-items: center;
  justify-content: center;
  svg {
    width: 100%; // 부모 컨테이너 크기에 맞춤
    height: 100%;
  }
`; 