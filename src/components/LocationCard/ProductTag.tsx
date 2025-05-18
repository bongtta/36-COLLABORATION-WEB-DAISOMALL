import { tagStyle } from './LocationCard.style';

interface ProductTagProps {
  // '신상', 'SNS', '박스배송', '최다판매', 'best'
  type: string;
}

const TAG_LABELS: Record<string, string> = {
  best: 'BEST',
  신상: '신상',
  SNS: 'SNS',
  박스배송: '박스배송',
  최다판매: '최다판매',
};

const ProductTag = ({ type }: ProductTagProps) => {
  const label = TAG_LABELS[type] ?? type;
  return <span css={tagStyle(type)}>{label}</span>;
};

export default ProductTag;
