import * as H from './HomeSectionCard.style';
import SectionTitle from '@components/common/SectionTitle/SectionTitle';
import ProductCardVertical from '@components/ProductCard/ProductCardVertical/ProductCardVertical';
import type { ProductCardVerticalProps } from '@components/ProductCard/ProductCardVertical/ProductCardVertical';

interface HomeSectionCardProps {
  title1: string;
  subtitle?: string;
  productList: ProductCardVerticalProps[];
  onClickAll?: () => void;
}

const HomeSectionCard = ({
  title1,
  subtitle,
  productList,
  onClickAll,
}: HomeSectionCardProps) => (
  <div css={H.wrapper}>
    <SectionTitle title1={title1} subtitle={subtitle} onClickAll={onClickAll} />
    <div css={H.cardWrapper}>
      {productList.map((product) => (
        <ProductCardVertical key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default HomeSectionCard;
