import { css } from '@emotion/react';
import theme from '@styles/theme';

export const productDetailStyle = css`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

export const imageContainerStyle = css`
  width: 100%;
  height: 20rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
`; 