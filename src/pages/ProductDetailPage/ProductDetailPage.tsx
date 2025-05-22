/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BrandInfo from './BrandInfo/BrandInfo';

const containerStyle = css`
  width: 100%;
  max-width: 76.8rem;
  margin: 0 auto;
  padding: 2rem 1.6rem;
`;

const ProductDetailPage = () => (
  <div css={containerStyle}>
    <BrandInfo />
  </div>
);

export default ProductDetailPage;
