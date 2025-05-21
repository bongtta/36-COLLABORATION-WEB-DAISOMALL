/** @jsxImportSource @emotion/react */
import * as S from './ProductPageInfo.style';
import { ArrowRightIcon, StarIcon, ShareIcon } from '@assets/svgs';

const ProductPageInfo = () => {
  return (
    <article css={S.ProductInfoWrapper}>
      <section css={S.ProductDetails}>
        <header css={S.ProductBrandAndName}>
          <div css={S.Brand}>
            <span css={S.BrandText}>VT</span>
            <span css={S.RightArrowWrapper}>
              <ArrowRightIcon css={S.RightArrow} />
            </span>
          </div>
          <div css={S.NameAndPrice}>
            <h1 css={S.ProductName}>
              VT 리들샷 100 페이셜 부스팅 퍼스트 앰플 2ml*6개입
            </h1>
            <p css={S.Price}>
              <span css={S.PriceAmount}>3,000</span>
              <span css={S.PriceUnit}>원</span>
            </p>
          </div>
        </header>
        <div css={S.Rating}>
          <div css={S.RatingIconWrapper}>
            <StarIcon />
          </div>
          <span css={S.RatingText}>4.8점</span>
          <span css={S.ReviewCount}>(1.1만)</span>
        </div>
      </section>
      <button type='button' css={S.ShareButton}>
        <ShareIcon css={S.ShareIcon} />
      </button>
    </article>
  );
};

export default ProductPageInfo; 