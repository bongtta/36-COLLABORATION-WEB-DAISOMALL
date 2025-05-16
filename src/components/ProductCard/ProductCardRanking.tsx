import * as S from './ProductCard.style';
import ProductTag from './ProductTag';
import { CartIcon } from '@assets/svgs';

interface ProductCardRankingProps {
  rank: number;
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
  <div css={S.rankingWrapper}>
    <div css={S.rankingContent}>
      <div css={S.rankingNumber}>{rank}</div>

      <div css={S.rankingImageWrapper}>
        <img src={imageUrl} alt={name} css={S.rankingImage} />
      </div>

      <div css={S.rankingInfoArea}>
        <div css={S.rankingTextGroup}>
          <div css={S.priceRow}>
            <span css={S.rankingPrice}>{price}원</span>
          </div>
          <p css={S.rankingName}>{name}</p>
        </div>

        {code ? (
          <p css={S.code}>품번: {code}</p>
        ) : (
          <div css={S.tagList}>
            {tags.map((tag) => (
              <ProductTag key={tag} type={tag} />
            ))}
          </div>
        )}
      </div>
    </div>

    {showCartIcon && (
      <div css={S.cartIconWrapper}>
        <div css={S.cartIconBg} />
        <CartIcon css={S.cartIcon} />
      </div>
    )}
  </div>
);

export default ProductCardRanking;
