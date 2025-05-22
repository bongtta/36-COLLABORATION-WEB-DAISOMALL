import * as S from './PopularProductsSection.style';
import SearchBar from '@components/SearchBar/SearchBar';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import Pagination, { useSwipeNavigation } from '@components/pagination/Pagination';
import { useState } from 'react';
import { usePopularProducts } from '@hooks/queries/usePopularProducts';
import type { PopularProduct } from '@app-types/popularProducts';

const PAGE_SIZE = 5;

const PopularProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = usePopularProducts();
  
  // 모든 페이지 데이터를 하나의 배열로 합치기
  const allProducts = data?.pages ? data.pages.flat() : [];
  
  // 클라이언트에서 5개씩 나누기
  const totalPages = Math.ceil(allProducts.length / PAGE_SIZE);
  const pagedProducts = allProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Pagination에서 제공하는 스와이프 훅 사용
  const swipeHandlers = useSwipeNavigation(currentPage, totalPages, setCurrentPage, true);

  // 로딩 상태
  if (isLoading) {
    return (
      <div css={S.PopularWrapper}>
        <SearchBar placeholder="상품명, 품번, 브랜드" />
        <div css={S.ResultWrapper}>
          <h2 css={S.Title}>지금 많이 찾는 상품</h2>
          <div>로딩 중...</div>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <div css={S.PopularWrapper}>
        <SearchBar placeholder="상품명, 품번, 브랜드" />
        <div css={S.ResultWrapper}>
          <h2 css={S.Title}>지금 많이 찾는 상품</h2>
          <div>데이터를 불러올 수 없습니다.</div>
        </div>
      </div>
    );
  }

  // 데이터가 없는 상태
  if (!data || allProducts.length === 0) {
    return (
      <div css={S.PopularWrapper}>
        <SearchBar placeholder="상품명, 품번, 브랜드" />
        <div css={S.ResultWrapper}>
          <h2 css={S.Title}>지금 많이 찾는 상품</h2>
          <div>상품이 없습니다.</div>
        </div>
      </div>
    );
  }

  return (
    <div css={S.PopularWrapper} {...swipeHandlers}>
      <SearchBar placeholder="상품명, 품번, 브랜드" />
      <div css={S.ResultWrapper}>
        <h2 css={S.Title}>지금 많이 찾는 상품</h2>
        {pagedProducts.map((product, idx) => (
          <div css={S.ProductRow} key={product.productId}>
            <ProductCardRanking
              rank={(currentPage - 1) * PAGE_SIZE + idx + 1}
              imageUrl={product.mainImage}
              name={product.productName}
              price={product.price.toLocaleString()}
              code={product.productCode}
              showCartIcon={false}
            />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          isActive={true}
          isHome={false}
        />
      )}
    </div>
  );
};

export default PopularProductsSection;