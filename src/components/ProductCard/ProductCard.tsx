/** @jsxImportSource @emotion/react */
import * as S from './ProductCard.style';
import ProductTag from './ProductTag';

interface ProductCardProps {
  variant: 'ranking' | 'code' | 'vertical-96' | 'vertical-128';
  rank?: number;
  price: string;
  name: string;
  imageUrl?: string;
  code?: string;
  tags?: string[];
  quantityText?: string;
}

const ProductCard = ({
  variant,
  rank,
  price,
  name,
  imageUrl,
  code,
  tags = [],
  quantityText,
}: ProductCardProps) => {
  const isRanking = variant === 'ranking';
  const isCode = variant === 'code';

  return (
    <div css={S.cardWrapper(variant)}>
      {/* ✅ 랭킹용 넘버 */}
      {isRanking && rank && <div css={S.rank}>{rank}</div>}

      {/* ✅ 이미지 영역 */}
      <div css={S.imageArea}>
        <img src={imageUrl} alt={name} css={S.image} />
        {quantityText && <span css={S.quantity}>{quantityText}</span>}
      </div>

      {/* ✅ 텍스트 영역 */}
      <div css={S.infoArea}>
        <p css={S.price}>{price}</p>
        <p css={S.name}>{name}</p>

        {/* ✅ 코드형 전용 */}
        {isCode && code && <p css={S.code}>품번: {code}</p>}

        {/* ✅ 태그 렌더링 */}
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

export default ProductCard;
