import * as R from '@components/ProductCard/ProductCardRanking/ProductCardRanking.style';
import ProductTag from '@components/ProductCard/ProductTag';
import { CartIcon } from '@assets/svgs';

interface ProductCardRankingProps {
  rank?: number;
  imageUrl: string;
  name: string;
  price: string;
  tags?: string[];
  code?: string;
  showCartIcon?: boolean;
  withOutline?: boolean;
}

const ProductCardRanking = ({
  rank,
  imageUrl,
  name,
  price,
  tags = [],
  code,
  showCartIcon = true,
}: ProductCardRankingProps) => (
  <div css={R.rankingWrapper(!!code)}>
    <div css={R.rankingContent(!!code)}>
      <div css={R.rankingNumber}>{rank}</div>

      <div css={R.rankingImageWrapper}>
        <img src={imageUrl} alt={name} css={R.rankingImage} />
      </div>

      <div css={R.rankingInfoArea(!!code)}>
        <div css={R.rankingTextGroup(!!code)}>
          <div css={R.priceRow}>
            <span css={R.rankingPrice}>{price}</span>
            <span css={R.rankingWon}>원</span>
          </div>
          <p css={R.rankingName}>{name}</p>
        </div>

        {code ? <p css={R.code}>품번: {code}</p> : null}
        <div css={R.tagList}>
          {tags.map((tag) => (
            <ProductTag key={tag} type={tag} />
          ))}
        </div>
      </div>
    </div>

    {showCartIcon && (
      <div css={R.cartIconWrapper}>
        <CartIcon css={R.cartIcon} />
      </div>
    )}
  </div>
);

export default ProductCardRanking;
