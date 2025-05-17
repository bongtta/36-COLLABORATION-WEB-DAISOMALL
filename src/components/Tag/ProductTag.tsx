import { StarIconWhite } from '@assets/svgs';
import * as S from './ProductTag.style';
import theme from '@styles/theme';

const ProductTag = () => {
  const tags = [
    { label: 'BEST', bg: theme.colors.primary, color: theme.colors.white },
    { label: '추천', bg: theme.colors['red-01'], color: theme.colors.white, icon: <StarIconWhite /> },
    { label: '신상', bg: theme.colors['gray-05'], color: theme.colors.primary },
    { label: '박스배송', bg: theme.colors['gray-05'], color: theme.colors.primary },
    { label: '최다리뷰상품', bg: theme.colors['gray-05'], color: theme.colors.primary },
    { label: '픽업 가능 매장', bg: theme.colors['gray-05'], color: theme.colors['gray-03'] },
    { label: '택배전용', bg: theme.colors['gray-05'], color: theme.colors['gray-03'] },
    { label: '픽업전용', bg: theme.colors['gray-05'], color: theme.colors['gray-03'] },
  ];

  return (
    <div css={S.Wrapper}>
      {tags.map((tag, idx) => (
        <div key={idx} css={S.Tag(tag.bg, tag.color, Boolean(tag.icon))}>
          {tag.icon}
          <span>{tag.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductTag;