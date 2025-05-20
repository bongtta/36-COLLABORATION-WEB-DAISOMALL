import * as S from './ProductCardVertical.style';
import * as R from '../ProductCardRanking/ProductCardRanking.style';
import ProductTag from '../ProductTag';
import { CartIcon, SnsIcon, BoxIcon, MultipleIcon } from '@assets/svgs';

interface ProductCardVerticalProps {
  size: '96' | '128';
  name: string;
  price: string;
  imageUrl?: string;
  tags?: string[];
  quantityText?: string;
  isSnsHot?: boolean;
  isBoxDelivery?: boolean;
}

const ProductCardVertical = ({
  size,
  name,
  price,
  imageUrl,
  tags = [],
  quantityText,
  isSnsHot = false,
  isBoxDelivery = false,
}: ProductCardVerticalProps) => (
  <div css={S.wrapper(size)}>
    <div css={S.imageWrapper(size)}>
      <img src={imageUrl} alt={name} css={S.image} />

      {isSnsHot && (
        <div css={S.snsBadge}>
          <SnsIcon width={36} height={36} />
        </div>
      )}

      {isBoxDelivery && quantityText && (
        <div css={S.boxBadge}>
          <BoxIcon width={36} height={36} />
          <span css={S.boxText}>{quantityText}</span>
        </div>
      )}

      <button css={S.cartButton}>
        <CartIcon css={R.cartIcon} />
      </button>
    </div>

    <div css={S.infoArea}>
      <div css={S.textGroup}>
        <div css={R.priceRow}>
          <span css={R.rankingPrice}>{price}</span>
          <span css={R.rankingWon}>원</span>
        </div>
        {isBoxDelivery && quantityText && (
          <div css={S.unitPriceRow}>
            <div css={R.priceRow}>
              <span css={S.unitPrice}>3,000</span>
              <span css={S.unitWon}>원</span>
            </div>
            <MultipleIcon width={5} />
            <div css={S.unitBadge}>
              <span css={S.unitBadgeText}>{quantityText}</span>
            </div>
          </div>
        )}
        <p css={R.rankingName}>{name}</p>
      </div>

      <div css={S.tagList}>
        {tags.map((tag) => (
          <ProductTag key={tag} type={tag} />
        ))}
      </div>
    </div>
  </div>
);

export default ProductCardVertical;
