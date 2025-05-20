import { css } from '@emotion/react';
import theme from '@styles/theme';

export const IndicatorContainer = css`
  padding: 0.2rem 0.7rem;
  background: rgba(22, 29, 36, 0.4);
  border-radius: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const IndicatorItemStyle = (active: boolean) => css`
  text-align: center;
  color: ${active ? theme.colors.white : theme.colors['gray-05']};
  ${theme.fonts['body-12R']}
  word-wrap: break-word;
`;

export const Divider = css`
  color: ${theme.colors['gray-05']};
  ${theme.fonts['body-12R']}
  word-wrap: break-word;
`;
