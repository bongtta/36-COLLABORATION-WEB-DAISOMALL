import * as R from '@components/ProductCard/ProductCardRanking/ProductCardRanking.style';
import ProductTag from '../ProductTag';
import { CartIcon } from '@assets/svgs';

interface ProductCardRankingProps {
  rank?: number;
  imageUrl: string;
  name: string;
  price: string;
  tags?: string[];
  code?: string;
  showCartIcon?: boolean;
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
  <div css={R.rankingWrapper}>
    <div css={R.rankingContent}>
      <div css={R.rankingNumber}>{rank}</div>

      <div css={R.rankingImageWrapper}>
        <img src={imageUrl} alt={name} css={R.rankingImage} />
      </div>

      <div css={R.rankingInfoArea}>
        <div css={R.rankingTextGroup}>
          <div css={R.priceRow}>
            <span css={R.rankingPrice}>{price}원</span>
          </div>
          <p css={R.rankingName}>{name}</p>
        </div>

        {code ? (
          <p css={R.code}>품번: {code}</p>
        ) : (
          <div css={R.tagList}>
            {tags.map((tag) => (
              <ProductTag key={tag} type={tag} />
            ))}
          </div>
        )}
      </div>
    </div>

    {showCartIcon && (
      <div css={R.cartIconWrapper}>
        <div css={R.cartIconBg} />
        <CartIcon css={R.cartIcon} />
      </div>
    )}
  </div>
);

export default ProductCardRanking;
