import * as S from './ProductCardVertical.style';
import * as R from '../ProductCardRanking/ProductCardRanking.style';
import ProductTag from '../ProductTag';
import { CartIcon } from '@assets/svgs';

interface ProductCardVerticalProps {
  size: '96' | '128';
  name: string;
  price: string;
  imageUrl?: string;
  tags?: string[];
  quantityText?: string;
}

const ProductCardVertical = ({
  size,
  name,
  price,
  imageUrl,
  tags = [],
  quantityText,
}: ProductCardVerticalProps) => (
  <div css={S.wrapper(size)}>
    <div css={S.imageWrapper(size)}>
      <img src={imageUrl} alt={name} css={S.image} />
      {quantityText && <span css={S.quantity}>{quantityText}</span>}
      <button css={S.cartButton}>
        <div css={S.cartBg} />
        <CartIcon css={S.cartIcon} />
      </button>
    </div>

    <div css={S.infoArea}>
      <div css={R.rankingTextGroup}>
        <div css={R.priceRow}>
          <span css={R.rankingPrice}>{price}원</span>
        </div>
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
