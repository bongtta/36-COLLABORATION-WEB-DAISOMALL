import { useState } from 'react';
import { useStoresByProduct } from '@hooks/queries/useStoresByProduct';
import SearchBar from '@components/SearchBar/SearchBar';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import StoreSearchBar from '@components/StoreSearchBar/StoreSearchBar';
import LocationCardList from './LocationCardList/LocationCardList';
import FilterTabs from '@components/tabs/FilterTabs';
import * as S from './StoreNameSearchSection.style';
import Img from '/store-rank-1.png';

const mockProduct = {
  imageUrl: Img,
  name: 'VT 리들샷 100 페이셜 부스팅 퍼스트 앰플 2ml*6개입',
  price: '3,000',
  code: '1049275',
  productId: 1,
};

const StoreNameSearchSection = () => {
  const [keyword, setKeyword] = useState('');
  const { data: stores = [], isLoading } = useStoresByProduct({
    productId: mockProduct.productId,
    keyword: keyword.trim() || undefined,
  });

  const handleStoreSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <div css={S.storeSectionWrapper}>
      <SearchBar placeholder="상품명, 품번, 브랜드" />
      <div css={S.productWrapper}>
        <ProductCardRanking
          imageUrl={mockProduct.imageUrl}
          name={mockProduct.name}
          price={mockProduct.price}
          code={mockProduct.code}
          showCartIcon={true}
        />
      </div>
      <StoreSearchBar onSearch={handleStoreSearch} />
      <div css={S.filterTabWrapper}>
        <FilterTabs />
      </div>
      {isLoading ? <p>로딩 중...</p> : <LocationCardList stores={stores} />}
    </div>
  );
};

export default StoreNameSearchSection;
