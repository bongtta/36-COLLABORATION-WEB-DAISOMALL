import { css } from '@emotion/react';
import theme from '@styles/theme';

export const productDetailStyle = css`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

export const imageContainerStyle = css`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const collapsedImageStyle = css`
  height: 20rem;
`;

export const expandedImageStyle = css`
  height: auto;
`;

export const recommendedProductsStyle = css`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const recommendedTitleStyle = css`
  ${theme.fonts['heading-14B']}
`;

export const productsGridStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
`;

export const viewMoreButtonWrapper = css`
  padding: 0 1.6rem 1.9rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 5%, rgba(255, 255, 255, 0.8) 8%, rgba(255, 255, 255, 1) 25%);
  height: 8rem;
  justify-content: center;
  display: flex;
  align-items: flex-end;
`; 