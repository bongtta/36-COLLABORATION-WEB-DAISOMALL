/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavBar from './NavBar/NavBar';

const containerStyle = css`
  width: 100%;
  max-width: 76.8rem;
  margin: 0 auto;
`;

const ProductDetailPage = () => (
  <div css={containerStyle}>
      <NavBar />
    </div>
    );

export default ProductDetailPage;
