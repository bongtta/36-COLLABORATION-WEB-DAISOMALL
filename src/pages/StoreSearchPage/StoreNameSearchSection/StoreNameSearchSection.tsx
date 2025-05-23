import SearchBar from '@components/SearchBar/SearchBar';
import ProductCardRanking from '@components/ProductCard/ProductCardRanking/ProductCardRanking';
import StoreSearchBar from '@components/StoreSearchBar/StoreSearchBar';
import LocationCardList from '@pages/StoreSearchPage/StoreNameSearchSection/LocationCardList/LocationCardList';
import FilterTabs from '@components/tabs/FilterTabs';
import * as S from '@pages/StoreSearchPage/StoreNameSearchSection/StoreNameSearchSection.style';
import Img from '/store-rank-1.png';

const mockProduct = {
  imageUrl: Img,
  name: 'VT 리들샷 100 페이셜 부스팅 퍼스트 앰플 2ml*6개입',
  price: '3,000',
  code: '1049275',
};

const StoreNameSearchSection = () => {
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
        <StoreSearchBar />
        <div css={S.filterTabWrapper}>
          <FilterTabs />
        </div>
        <LocationCardList />
    </div>
  );
};

export default StoreNameSearchSection;
