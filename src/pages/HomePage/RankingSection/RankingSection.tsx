import * as H from '@pages/HomePage/HomeSectionCard/HomeSectionCard.style';
import SectionTitle from '@components/common/SectionTitle/SectionTitle';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import Pagination from '@components/common/pagination/Pagination';
import type { ProductTagData } from '@components/Tag/tagData';

import React from 'react';

interface ProductCardRankingProps {
  rank?: number;
  imageUrl: string;
  name: string;
  price: string;
  tags?: ProductTagData[];
  code?: string;
  showCartIcon?: boolean;
}

const SLIDE_CONTENTS = [
  { id: 1, content: '1번 페이지 내용입니다.' },
  { id: 2, content: '2번 페이지 내용입니다.' },
  { id: 3, content: '3번 페이지 내용입니다.' },
];

interface RankingSectionProps {
  title1: string;
  subtitle?: string;
  onClickAll?: () => void;
  productList: ProductCardRankingProps[];
  currentPage: number;
  onPageChange: (page: number) => void;
  contents: React.ReactNode[];
}

const RankingSection = ({
  title1,
  subtitle,
  onClickAll,
  productList,
  currentPage,
  onPageChange,
}: RankingSectionProps) => (
  <div css={H.wrapper}>
    <SectionTitle title1={title1} subtitle={subtitle} onClickAll={onClickAll} />
    <div css={H.cardWrapper}>
      {productList.map((product) => (
        <ProductCardRanking key={product.rank} {...product} />
      ))}
    </div>
    <Pagination
      contents={SLIDE_CONTENTS}
      currentPage={currentPage}
      onPageChange={onPageChange}
      isActive
      enableSwipe
    />
  </div>
);

export default RankingSection;
