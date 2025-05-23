// src/pages/StoreSearchPage/SearchProductsSection.tsx
import { useState, useEffect } from 'react';
import * as S from './SearchProductsSection.style';
import SearchBar from '@components/SearchBar/SearchBar';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import SearchResultTitle from '@components/searchResultTitle/SearchResultTitle';
import SearchEmptyResult from '@components/searchEmptyResult/SearchEmptyResult';
import { useSearchProducts } from '@hooks/queries/useSearchProducts';
import type { SearchProductsResponseData } from '@app-types/apiResponseType';

// 컴포넌트에서 사용할 정렬 옵션
type SortOption = '신상품' | '가격 낮은 순' | '가격 높은 순';
const SORT_OPTIONS: SortOption[] = ['신상품', '가격 낮은 순', '가격 높은 순'];

// API 요청 시 사용할 정렬 옵션 값 매핑
const getSortOptionValue = (option: SortOption) => {
  switch(option) {
    case '가격 낮은 순': return 'priceLow';
    case '가격 높은 순': return 'priceHigh';
    case '신상품': 
    default: return 'latest';
  }
};

interface SearchProductsSectionProps {
  initialKeyword?: string;
  onSearchClear?: () => void;
}

const SearchProductsSection = ({
  initialKeyword = '',
  onSearchClear
}: SearchProductsSectionProps) => {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [sortOption, setSortOption] = useState<SortOption | undefined>(undefined);
  
  const { data, isLoading, error } = useSearchProducts(
    keyword,
    0,
    20,
    sortOption ? getSortOptionValue(sortOption) : undefined
  );

  // 초기 키워드가 있으면 검색 실행
  useEffect(() => {
    if (initialKeyword) {
      setKeyword(initialKeyword);
    }
  }, [initialKeyword]);
  
  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword);
    setSortOption(undefined); // 검색 시 정렬 옵션 초기화
  };
  
  const handleClear = () => {
    setKeyword('');
    setSortOption(undefined); // 검색어 초기화 시 정렬 옵션도 초기화
    onSearchClear?.();
  };
  
  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
  };

  // 검색어가 없을 때는 빈 화면 표시
  if (!keyword) {
    return (
      <div css={S.SearchWrapper}>
        <SearchBar 
          placeholder="상품명, 품번, 브랜드" 
          onSearch={handleSearch}
          onClear={handleClear}
        />
      </div>
    );
  }
  
  if (isLoading) {
    return (
      <div css={S.SearchWrapper}>
        <SearchBar 
          placeholder="상품명, 품번, 브랜드" 
          onSearch={handleSearch}
          onClear={handleClear}
          value={keyword}
        />
        <div css={S.LoadingContainer}>검색 중...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div css={S.SearchWrapper}>
        <SearchBar 
          placeholder="상품명, 품번, 브랜드" 
          onSearch={handleSearch}
          onClear={handleClear}
          value={keyword}
        />
        <div css={S.ErrorContainer}>검색 결과를 불러올 수 없습니다.</div>
      </div>
    );
  }
  
  if (!data || data.products.length === 0) {
    return (
      <div css={S.SearchWrapper}>
        <SearchBar 
          placeholder="상품명, 품번, 브랜드" 
          onSearch={handleSearch}
          onClear={handleClear}
          value={keyword}
        />
        <SearchEmptyResult />
      </div>
    );
  }
  
  return (
    <div css={S.SearchWrapper}>
      <SearchBar 
        placeholder="상품명, 품번, 브랜드" 
        onSearch={handleSearch} 
        onClear={handleClear}
        value={keyword}
      />
      <div css={S.ResultWrapper}>
        <SearchResultTitle 
          totalCount={data.pageable.numberOfElements || 0}
          initialSortOption={sortOption || '신상품'}
          onSortChange={handleSortChange}
          showSortOptions={true}
        />
        <div css={S.ProductsContainer}>
          {data.products.map((product: SearchProductsResponseData['products'][0]) => (
            <div css={S.ProductCardWrapper} key={product.productId}>
              <ProductCardRanking
                imageUrl={''}
                name={product.productName}
                price={product.price.toLocaleString()}
                code={product.productCode}
                showCartIcon={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchProductsSection;