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