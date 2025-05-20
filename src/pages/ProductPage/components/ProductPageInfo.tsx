import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './ProductPageInfo.style';

const ProductPageInfo = () => {
  return (
    <div css={S.ProductInfoWrapper}>
      <div css={S.ProductDetails}>
        <div css={S.ProductBrandAndName}>
          <div css={S.Brand}>
            <div css={S.BrandText}>VT</div>
            <div css={S.BrandIconWrapper}>
              <div css={S.BrandIcon} />
            </div>
          </div>
          <div css={S.NameAndPrice}>
            <div css={S.ProductName}>
              VT 리들샷 100 페이셜 부스팅 퍼스트 앰플 2ml*6개입
            </div>
            <div css={S.Price}>
              <div css={S.PriceAmount}>3,000</div>
              <div css={S.PriceUnit}>원</div>
            </div>
          </div>
        </div>
        <div css={S.Rating}>
          <div css={S.RatingIconWrapper}>
            <div css={S.RatingIconBackground} />
            <div css={S.RatingIconOutline} />
            <div css={S.RatingIconFill} />
          </div>
          <div css={S.RatingText}>4.8점</div>
          <div css={S.ReviewCount}>(1.1만)</div>
        </div>
      </div>
      <div css={S.ActionButtons}>
        <div css={S.ShareButton}>
          <div css={S.ShareButtonIconTop} />
          <div css={S.ShareButtonIconBottom} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageInfo; 