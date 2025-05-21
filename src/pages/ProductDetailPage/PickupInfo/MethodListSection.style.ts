import { css } from '@emotion/react';
import theme from '../../../styles/theme'; // 경로 수정

export const MethodList = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
`;

export const MethodItem = css`
  width: 100%; // 기본 너비
  height: 100px;
  padding: 1.3rem 0; // 내부 컨텐츠에 따라 좌우 패딩 조정 (기존 2.5rem은 너무 넓어보임)
  background: ${theme.colors['gray-06']};
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;
  flex: 1; // 아이템들이 공간을 균등하게 차지하도록

  &[data-selected='true'] {
    background: ${theme.colors['gray-01']};
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
    color: ${theme.colors.white};
  }

  /* 매장픽업은 피그마에서 너비가 달랐으나, 4개 아이템 균등 분할을 위해 data-width-wide 제거 또는 다른 방식 고려 */
  /* &[data-width-wide='true'] {
    width: 100px; 
  } */
`;

export const IconWrapper = css`
  width: 20px;
  height: 20px;
  position: relative;
  margin-bottom: 4px;
`;

export const MethodName = css`
  ${theme.fonts['heading-14B']};
  color: ${theme.colors['gray-01']};
  line-height: 20.3px;

  ${MethodItem}[data-selected='true'] & {
    color: ${theme.colors.white};
  }
`;

export const MethodDate = css`
  ${theme.fonts['body-12R']};
  color: ${theme.colors['gray-03']};
  line-height: 17.4px;

  ${MethodItem}[data-selected='true'] & {
    color: ${theme.colors['gray-05']};
  }
`;

export const BetaTag = css`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 2px 4px;
  border-radius: 2px;
  ${theme.fonts['caption-10SB']};
  line-height: 1;
`; 