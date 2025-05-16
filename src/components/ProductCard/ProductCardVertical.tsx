/** @jsxImportSource @emotion/react */
import * as S from './ProductCard.style';
import ProductTag from './ProductTag';

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
}: ProductCardVerticalProps) => {
  const variant = size === '96' ? 'vertical-96' : 'vertical-128';

  return (
    <div css={S.cardWrapper(variant)}>
      <div css={S.imageArea}>
        <img src={imageUrl} alt={name} css={S.image} />
        {quantityText && <span css={S.quantity}>{quantityText}</span>}
      </div>

      <div css={S.infoArea}>
        <p css={S.price}>{price}</p>
        <p css={S.name}>{name}</p>
        {tags.length > 0 && (
          <div css={S.tagList}>
            {tags.map((tag) => (
              <ProductTag key={tag} type={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardVertical;
