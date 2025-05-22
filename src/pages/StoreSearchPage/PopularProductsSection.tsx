import * as S from './PopularProductsSection.style';
import SearchBar from '@components/SearchBar/SearchBar';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import Pagination, { useSwipeNavigation } from '@components/pagination/Pagination';
import { useState } from 'react';

const mockProducts = [...Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `상품 ${i + 1}`,
  imageUrl: '',
  price: `${(1000 * (i + 1)).toLocaleString()}`,
  code: `10181${(i + 1).toString().padStart(2, '0')}`,
  showCartIcon: false,
}))];

const PAGE_SIZE = 5;

const PopularProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockProducts.length / PAGE_SIZE);
  const pagedProducts = mockProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Pagination에서 제공하는 스와이프 훅 사용
  const swipeHandlers = useSwipeNavigation(currentPage, totalPages, setCurrentPage, true);

  return (
    <div css={S.PopularWrapper} {...swipeHandlers}>
      <SearchBar placeholder="상품명, 품번, 브랜드" />
      <div css={S.ResultWrapper}>
        <h2 css={S.Title}>지금 많이 찾는 상품</h2>
        {pagedProducts.map((product, idx) => (
          <div css={S.ProductRow} key={product.id}>
            <ProductCardRanking
              rank={(currentPage - 1) * PAGE_SIZE + idx + 1}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              code={product.code}
              showCartIcon={product.showCartIcon}
            />
          </div>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isActive={true}
        isHome={false}
      />
    </div>
  );
};

export default PopularProductsSection;